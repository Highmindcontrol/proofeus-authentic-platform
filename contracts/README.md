# Smart Contracts — Proofeus Authentic

Contrats Solidity de Proofeus Authentic, déployés sur **Base** (Ethereum L2 Coinbase).

## Contrats

- **`src/SceauOrigines.sol`** — SBT 1 M fragments non-transférables, offerts aux 1er humains vérifiés. V1 en cours de développement.
- `src/SceauAuteur.sol` — *(à venir)* ERC-721/1155 transférable pour œuvres certifiées galeries.
- `src/SceauCreation.sol` — *(à venir)* ERC-721 antériorité horodatée (successeur enveloppe Soleau).

## Setup (dev local)

```bash
# 1. Installer Foundry (macOS/Linux)
curl -L https://foundry.paradigm.xyz | bash
foundryup

# 2. Installer OpenZeppelin v5
cd contracts
forge install OpenZeppelin/openzeppelin-contracts@v5.0.2 --no-commit
forge install foundry-rs/forge-std --no-commit

# 3. Compiler
forge build

# 4. Tests
forge test -vvv

# 5. Coverage
forge coverage
```

## Déploiement testnet Base Sepolia

```bash
export PRIVATE_KEY=0x...
export BASESCAN_API_KEY=...

forge create src/SceauOrigines.sol:SceauOrigines \
  --rpc-url base_sepolia \
  --private-key $PRIVATE_KEY \
  --constructor-args \
    0xOwnerMultisig \
    0xVerifierBackend \
    "ipfs://QmXXX/" \
  --verify \
  --etherscan-api-key $BASESCAN_API_KEY
```

## Déploiement mainnet Base

Impérativement précédé de :
1. Audit sécurité (3-8 K€ recommandé) — cabinet type Sherlock, Trail of Bits (light), Consensys Diligence
2. Validation MiCA par cabinet crypto (3-8 K€)
3. Deployment via multisig Gnosis Safe (jamais avec une clé unique)

## Architecture doctrinale

Voir `../docs/smart-contracts.md` et le brief complet dans le repo `ataraxis-platform` : `docs/briefs/proofeus-authentic.md`.

## Notes de sécurité

- **Le contrat est Ownable** (transfert d'ownership possible mais irrévocable côté anciens droits — utiliser un multisig Safe pour l'owner initial).
- **La fonction `mintForVerifiedHuman` n'est appelable que par `verifier`** — l'adresse `verifier` doit être un smart contract vérificateur Proofeus, pas une EOA (pour éviter les mints sauvages en cas de compromission de clé).
- **Le `burn` est autorisé au propriétaire** pour respecter le droit à l'oubli RGPD. `hasClaimed` reste `true` après burn pour empêcher la ré-attribution d'un nouveau numéro (le numéro reste dans l'histoire).
- **`setBaseURI` est appelable par l'owner** pour permettre l'upgrade de l'œuvre visuelle initiale (DALL·E/ChatGPT V1 → œuvre d'artiste ultérieurement) sans casser les tokens déjà mint.
