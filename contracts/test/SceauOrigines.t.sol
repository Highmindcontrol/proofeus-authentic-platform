// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console} from "forge-std/Test.sol";
import {SceauOrigines} from "../src/SceauOrigines.sol";
import {IERC721Errors} from "@openzeppelin/contracts/interfaces/draft-IERC6093.sol";

contract SceauOriginesTest is Test {
    SceauOrigines public sceau;

    address public owner = makeAddr("owner");
    address public verifier = makeAddr("verifier");
    address public alice = makeAddr("alice");
    address public bob = makeAddr("bob");
    address public attacker = makeAddr("attacker");

    string public constant BASE_URI = "ipfs://QmTest/";

    event SceauMinted(
        address indexed to,
        uint256 indexed tokenId,
        uint256 timestamp
    );

    function setUp() public {
        sceau = new SceauOrigines(owner, verifier, BASE_URI);
    }

    // ============ Deployment ============

    function test_deployment_setsCorrectValues() public view {
        assertEq(sceau.name(), "Sceau des Origines");
        assertEq(sceau.symbol(), "SDO");
        assertEq(sceau.owner(), owner);
        assertEq(sceau.verifier(), verifier);
        assertEq(sceau.MAX_SUPPLY(), 1_000_000);
        assertEq(sceau.totalMinted(), 0);
        assertEq(sceau.nextTokenId(), 1);
        assertEq(sceau.remainingSupply(), 1_000_000);
    }

    function test_deployment_revertsOnZeroVerifier() public {
        vm.expectRevert(SceauOrigines.InvalidVerifier.selector);
        new SceauOrigines(owner, address(0), BASE_URI);
    }

    // ============ Mint ============

    function test_mint_firstSceauHasTokenIdOne() public {
        vm.expectEmit(true, true, false, true);
        emit SceauMinted(alice, 1, block.timestamp);

        vm.prank(verifier);
        uint256 tokenId = sceau.mintForVerifiedHuman(alice);

        assertEq(tokenId, 1);
        assertEq(sceau.ownerOf(1), alice);
        assertEq(sceau.balanceOf(alice), 1);
        assertEq(sceau.totalMinted(), 1);
        assertEq(sceau.nextTokenId(), 2);
        assertTrue(sceau.hasClaimed(alice));
    }

    function test_mint_incrementsCounterCorrectly() public {
        vm.startPrank(verifier);
        uint256 tokenAlice = sceau.mintForVerifiedHuman(alice);
        uint256 tokenBob = sceau.mintForVerifiedHuman(bob);
        vm.stopPrank();

        assertEq(tokenAlice, 1);
        assertEq(tokenBob, 2);
        assertEq(sceau.totalMinted(), 2);
    }

    function test_mint_revertsIfNotVerifier() public {
        vm.expectRevert(SceauOrigines.NotVerifier.selector);
        vm.prank(attacker);
        sceau.mintForVerifiedHuman(alice);
    }

    function test_mint_revertsIfAlreadyClaimed() public {
        vm.startPrank(verifier);
        sceau.mintForVerifiedHuman(alice);

        vm.expectRevert(SceauOrigines.AlreadyClaimed.selector);
        sceau.mintForVerifiedHuman(alice);
        vm.stopPrank();
    }

    // ============ Soul-Bound (Non-transferable) ============

    function test_transfer_revertsWithSoulBoundError() public {
        vm.prank(verifier);
        sceau.mintForVerifiedHuman(alice);

        vm.expectRevert(SceauOrigines.SoulBoundNonTransferable.selector);
        vm.prank(alice);
        sceau.transferFrom(alice, bob, 1);
    }

    function test_safeTransferFrom_revertsWithSoulBoundError() public {
        vm.prank(verifier);
        sceau.mintForVerifiedHuman(alice);

        vm.expectRevert(SceauOrigines.SoulBoundNonTransferable.selector);
        vm.prank(alice);
        sceau.safeTransferFrom(alice, bob, 1);
    }

    function test_approve_thenTransfer_stillReverts() public {
        vm.prank(verifier);
        sceau.mintForVerifiedHuman(alice);

        vm.prank(alice);
        sceau.approve(bob, 1);

        vm.expectRevert(SceauOrigines.SoulBoundNonTransferable.selector);
        vm.prank(bob);
        sceau.transferFrom(alice, bob, 1);
    }

    // ============ Burn (droit à l'oubli RGPD) ============

    function test_burn_ownerCanBurnOwnSceau() public {
        vm.prank(verifier);
        sceau.mintForVerifiedHuman(alice);

        vm.prank(alice);
        sceau.burn(1);

        // Le token n'existe plus
        vm.expectRevert(
            abi.encodeWithSelector(IERC721Errors.ERC721NonexistentToken.selector, 1)
        );
        sceau.ownerOf(1);

        // hasClaimed reste true (on ne peut pas re-mint un nouveau Sceau)
        assertTrue(sceau.hasClaimed(alice));
    }

    function test_burn_revertsIfNotOwner() public {
        vm.prank(verifier);
        sceau.mintForVerifiedHuman(alice);

        vm.expectRevert(
            abi.encodeWithSelector(
                IERC721Errors.ERC721InsufficientApproval.selector,
                bob,
                1
            )
        );
        vm.prank(bob);
        sceau.burn(1);
    }

    // ============ Metadata ============

    function test_tokenURI_returnsCorrectFormat() public {
        vm.prank(verifier);
        sceau.mintForVerifiedHuman(alice);

        assertEq(sceau.tokenURI(1), "ipfs://QmTest/1.json");
    }

    function test_setBaseURI_ownerCanUpdate() public {
        vm.prank(verifier);
        sceau.mintForVerifiedHuman(alice);

        string memory newURI = "ipfs://QmNewArtistWork/";
        vm.prank(owner);
        sceau.setBaseURI(newURI);

        assertEq(sceau.tokenURI(1), "ipfs://QmNewArtistWork/1.json");
    }

    function test_setBaseURI_revertsIfNotOwner() public {
        vm.expectRevert();
        vm.prank(attacker);
        sceau.setBaseURI("ipfs://Malicious/");
    }

    // ============ Admin ============

    function test_setVerifier_ownerCanRotate() public {
        address newVerifier = makeAddr("newVerifier");
        vm.prank(owner);
        sceau.setVerifier(newVerifier);

        assertEq(sceau.verifier(), newVerifier);

        // Ancien verifier ne peut plus mint
        vm.expectRevert(SceauOrigines.NotVerifier.selector);
        vm.prank(verifier);
        sceau.mintForVerifiedHuman(alice);

        // Nouveau verifier peut mint
        vm.prank(newVerifier);
        sceau.mintForVerifiedHuman(alice);
        assertEq(sceau.ownerOf(1), alice);
    }

    function test_setVerifier_revertsOnZeroAddress() public {
        vm.expectRevert(SceauOrigines.InvalidVerifier.selector);
        vm.prank(owner);
        sceau.setVerifier(address(0));
    }

    // ============ Cap 1M ============

    /// @dev Test avec un cap réduit pour rester dans les limites de gas.
    ///      La logique testée est identique.
    function test_mint_revertsIfMaxSupplyReached_conceptual() public {
        // Ce test est conceptuel — mint 1M de fois est trop cher en gas.
        // On teste plutôt que le check existe en manipulant totalMinted.

        // Force totalMinted à MAX_SUPPLY via storage slot manipulation
        // (slot 8 = totalMinted d'après le layout OpenZeppelin ERC721)
        // Note : dans un contrat de prod, on ferait un test d'intégration
        // sur testnet avec un cap réduit dans un contrat dérivé.

        vm.store(address(sceau), bytes32(uint256(8)), bytes32(uint256(1_000_000)));
        assertEq(sceau.totalMinted(), 1_000_000);

        vm.expectRevert(SceauOrigines.MaxSupplyReached.selector);
        vm.prank(verifier);
        sceau.mintForVerifiedHuman(alice);
    }
}
