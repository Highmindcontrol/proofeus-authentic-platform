// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title SceauOrigines
 * @notice Sceau des Origines — 1 000 000 fragments Soul-Bound Tokens
 *         (SBT non-transférables) distribués aux premiers humains
 *         vérifiés biométriquement par Proofeus.
 *
 * @dev Doctrine actée 13 juillet 2026 (roadmap-certificat-fondation.md
 *      + roadmap-authentic.md).
 *
 *      - ERC-721 non-transférable via override de _update() bloquant
 *        tout transfert sauf mint depuis address(0).
 *      - Cap fixe à 1 000 000 fragments.
 *      - Compteur global auto-incrémenté (le premier vérifié reçoit
 *        le tokenId 1, le suivant 2, etc.).
 *      - Lazy mint : mint uniquement à la réclamation, appelable par
 *        `verifier` (adresse Proofeus qui a confirmé la vérification
 *        biométrique off-chain via le Sceau d'Humanité).
 *      - Métadonnées visuelles upgradables via setBaseURI() — permet
 *        de remplacer l'œuvre inaugurale DALL·E/ChatGPT par une œuvre
 *        d'artiste co-signataire ultérieurement sans casser les
 *        tokens déjà mint.
 *
 *      Ligne rouge non-négociable : sans valeur de rachat, sans
 *      possibilité de revente, sans spéculation. Le Sceau est une
 *      trace historique.
 */
contract SceauOrigines is ERC721, Ownable {
    using Strings for uint256;

    // ============ Constantes ============

    /// @notice Cap max de fragments (1 million)
    uint256 public constant MAX_SUPPLY = 1_000_000;

    // ============ Storage ============

    /// @notice Prochain tokenId à mint (démarre à 1)
    uint256 private _nextTokenId = 1;

    /// @notice Nombre total de Sceaux mint
    uint256 public totalMinted;

    /// @notice Base URI pour tokenURI (points vers métadonnées IPFS)
    string private _baseTokenURI;

    /// @notice Adresse autorisée à déclencher les mints (backend Proofeus)
    address public verifier;

    /// @notice Un humain (adresse EOA/SmartWallet) ne peut recevoir
    ///         qu'un seul Sceau des Origines à vie
    mapping(address => bool) public hasClaimed;

    // ============ Events ============

    event SceauMinted(
        address indexed to,
        uint256 indexed tokenId,
        uint256 timestamp
    );

    event VerifierUpdated(address indexed oldVerifier, address indexed newVerifier);

    event BaseURIUpdated(string oldBaseURI, string newBaseURI);

    // ============ Errors ============

    error NotVerifier();
    error MaxSupplyReached();
    error AlreadyClaimed();
    error SoulBoundNonTransferable();
    error InvalidVerifier();

    // ============ Modifiers ============

    modifier onlyVerifier() {
        if (msg.sender != verifier) revert NotVerifier();
        _;
    }

    // ============ Constructor ============

    /**
     * @param initialOwner Owner du contrat (multisig Proofeus/Ataraxis IA)
     * @param initialVerifier Adresse backend Proofeus autorisée à mint
     * @param baseTokenURI URL de base des métadonnées (ex: "ipfs://Qm.../")
     */
    constructor(
        address initialOwner,
        address initialVerifier,
        string memory baseTokenURI
    ) ERC721("Sceau des Origines", "SDO") Ownable(initialOwner) {
        if (initialVerifier == address(0)) revert InvalidVerifier();
        verifier = initialVerifier;
        _baseTokenURI = baseTokenURI;
    }

    // ============ Mint (Lazy) ============

    /**
     * @notice Mint un Sceau des Origines pour un humain vérifié.
     * @dev Appelé par le backend Proofeus après vérification biométrique
     *      off-chain (via le Sceau d'Humanité). Chaque humain reçoit
     *      son numéro unique (tokenId auto-incrémenté).
     * @param to Adresse du wallet Verbalock de l'humain vérifié
     */
    function mintForVerifiedHuman(address to)
        external
        onlyVerifier
        returns (uint256 tokenId)
    {
        if (totalMinted >= MAX_SUPPLY) revert MaxSupplyReached();
        if (hasClaimed[to]) revert AlreadyClaimed();

        tokenId = _nextTokenId;
        _nextTokenId++;
        totalMinted++;
        hasClaimed[to] = true;

        _safeMint(to, tokenId);

        emit SceauMinted(to, tokenId, block.timestamp);
    }

    // ============ Soul-Bound (Non-transferable) ============

    /**
     * @dev Override le _update d'OpenZeppelin v5 pour bloquer tout
     *      transfert. Seul le mint (from == address(0)) et le burn
     *      (to == address(0)) sont autorisés.
     *
     *      NOTE : le burn est autorisé pour permettre à un utilisateur
     *      d'exercer son droit à l'oubli (RGPD) sur son Sceau.
     */
    function _update(address to, uint256 tokenId, address auth)
        internal
        override
        returns (address)
    {
        address from = _ownerOf(tokenId);

        // Autorise mint (from == 0) et burn (to == 0), bloque tout autre transfert
        if (from != address(0) && to != address(0)) {
            revert SoulBoundNonTransferable();
        }

        return super._update(to, tokenId, auth);
    }

    /**
     * @notice Burn du Sceau (droit à l'oubli RGPD).
     * @dev L'utilisateur peut brûler son propre Sceau à tout moment.
     *      Le tokenId n'est PAS ré-alloué (le numéro reste dans l'histoire).
     */
    function burn(uint256 tokenId) external {
        address owner = _ownerOf(tokenId);
        if (owner == address(0)) revert ERC721NonexistentToken(tokenId);
        if (owner != msg.sender) revert ERC721InsufficientApproval(msg.sender, tokenId);

        _burn(tokenId);
    }

    // ============ Metadata ============

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @notice URL des métadonnées d'un tokenId spécifique.
     * @dev Format : baseURI + tokenId + ".json"
     *      Exemple : "ipfs://Qm.../42.json"
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        _requireOwned(tokenId);
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0
            ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json"))
            : "";
    }

    /**
     * @notice Met à jour le baseURI (owner uniquement).
     * @dev Permet de remplacer l'œuvre visuelle initiale (DALL·E/ChatGPT V1)
     *      par une œuvre définitive d'artiste co-signataire ultérieurement,
     *      sans casser les tokens déjà mint. Doctrine « ship first, polish
     *      later » sur le visuel — arbitrage 29 juillet 2026.
     */
    function setBaseURI(string calldata newBaseURI) external onlyOwner {
        string memory oldBaseURI = _baseTokenURI;
        _baseTokenURI = newBaseURI;
        emit BaseURIUpdated(oldBaseURI, newBaseURI);
    }

    // ============ Admin ============

    /**
     * @notice Met à jour l'adresse du verifier (backend Proofeus).
     * @dev Utile en cas de rotation de clé ou de migration.
     */
    function setVerifier(address newVerifier) external onlyOwner {
        if (newVerifier == address(0)) revert InvalidVerifier();
        address oldVerifier = verifier;
        verifier = newVerifier;
        emit VerifierUpdated(oldVerifier, newVerifier);
    }

    // ============ Views ============

    /// @notice Retourne le nombre de Sceaux restants à mint
    function remainingSupply() external view returns (uint256) {
        return MAX_SUPPLY - totalMinted;
    }

    /// @notice Retourne le prochain numéro qui sera attribué
    function nextTokenId() external view returns (uint256) {
        return _nextTokenId;
    }
}
