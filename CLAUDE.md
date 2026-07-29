# Proofeus Authentic® — Plateforme

## Mémoire structurelle pour Claude Code

> Ce fichier est lu automatiquement à chaque démarrage de Claude Code dans ce repo. Il contient les invariants du projet Proofeus Authentic pour que la continuité éditoriale, doctrinale et technique soit respectée à chaque session.

---

## I — L'identité du projet

**Proofeus Authentic®** est l'espace dédié à la certification humaine dans le Web3 — entité éditoriale semi-autonome à l'intérieur de Proofeus (modèle Watch). Certifie l'humain derrière chaque œuvre numérique et chaque NFT.

**Marque événement associée** : **Proofeus Genesis®** — nom du drop du Sceau des Origines. Réservé à l'événementiel uniquement (modèle Apple Music vs One More Thing).

**Baseline** : *« NFT : problème résolu. »*

**Éditeur** : Ataraxis IA (verticale d'intelligence artificielle souveraine du groupe Ataraxis).

**Filiale** : Ataraxis IA — marques sœurs Coryphea®, Proofeus®, Verbalock®, VocalGPS®.

**URL cible** :
- V1 (opérationnel à l'arrivée Chypre) : `proofeus.com/authentic` OU ce repo déployé sur son propre domaine
- V2/V3 (T1 2027 au drop) : `authentic.proofeus.com` (sous-domaine dédié)

**Statut marque** : INPI à déposer (marque Authentic + Genesis).

---

## II — Doctrine ligne rouge — vitrine, JAMAIS marketplace (jusqu'à 2028+)

**Actée le 14 juillet 2026.** Le Registre public / Galerie dynamique est une **vitrine SEO/traction, PAS une place de marché**. Aucune transaction ne se déroule sur Proofeus.

- ❌ **Interdits absolus** : bouton « Acheter », commission de vente, stockage de fonds acheteurs, enchère hébergée
- ✅ **Autorisés** : bouton « Voir sur Foundation/SuperRare/site artiste », association canaux de vente aux œuvres, badge *Verified Human Author*, registre SEO

**Pourquoi** : notre argument B2B pour convaincre les marketplaces d'intégrer le Sceau repose sur notre **neutralité**. Devenir marketplace nous ferme les portes de Foundation, SuperRare, OpenSea, Manifold, Zora — nos partenaires stratégiques.

**Arbitrage marketplace : à ne pas anticiper avant Phase 4 (2028+).**

---

## III — Les 4 types de Sceaux

| Sceau | Nature | Transférable ? | Rôle |
|---|---|---|---|
| **Sceau d'Humanité** | SBT (Soulbound) | Non | Identité biométrique de l'utilisateur — brique de base |
| **Sceau des Origines** | SBT fragment 1 M | Non | Trace historique fondation, offert aux 1er utilisateurs |
| **Sceau d'Auteur** | ERC-721/1155 | Oui | Œuvre certifiée par l'artiste, offre galeries |
| **Sceau de Création** | ERC-721 | Oui | Antériorité horodatée (successeur enveloppe Soleau INPI) |

---

## IV — Le Sceau des Origines (Proofeus Genesis)

**« Pas un NFT spéculatif. Une trace historique. »**

- **1 000 000 fragments** SBT non-transférables sur Base
- **Modèle Lazy Mint** — mint à la réclamation, pas de pré-mint
- **Chaque humain reçoit son numéro à vie** : *« Vous êtes le 237 491ᵉ humain vérifié par Proofeus »*
- **Wallet natif Verbalock** — élimine friction MetaMask
- **Chain** : Base (Ethereum L2 Coinbase, frais ~2 cents/mint)
- **Coût total 35-55 K€** étalés sur 2-3 ans
- **Œuvre inaugurale** : générée DALL·E/ChatGPT en V1 (arbitrage 29 juillet 2026 « ship first, polish later »), remplaçable par artiste co-signataire ultérieurement via `setBaseURI()` du smart contract

---

## V — Stack technique

### Site vitrine (ce repo)
- **Frontend** : Next.js 16 (App Router) + TypeScript strict + Tailwind v4
- **Hébergement** : Vercel
- **Email waitlist** : Brevo (à brancher)
- **Cible V1** : landing storytelling + waitlist + page Genesis placeholder

### Smart contracts (ce repo, dossier `contracts/`)
- **Solidity** ^0.8.24 + **Foundry**
- **OpenZeppelin v5** (ERC-721, Ownable)
- **Chain déploiement** : Base Sepolia (testnet) → Base mainnet (drop T1 2027)
- **Prérequis avant mainnet** : audit sécurité (3-8 K€) + validation MiCA (3-8 K€)

### Ecosystème adjacent
- **Repo `proofeus-platform`** : brique principale Proofeus, contient les 2 roadmaps sources (`docs/roadmap-authentic.md` + `docs/roadmap-certificat-fondation.md`)
- **Repo `verbalock-platform`** : wallet natif où les Sceaux sont stockés (accélération T2→T1 2027 pour matcher drop)
- **Repo `ataraxis-platform`** : forteresse admin qui documente la marque (`docs/briefs/proofeus-authentic.md`)

---

## VI — Charte graphique

- **Palette héritée AtaraxisIA** : noir profond `#0A0F1C` + cyan Proofeus `#3FD4D9`
- **Accent Authentic** : or subtil `#C9A13F` — signature spécifique à Authentic pour distinguer de Proofeus principal
- **Typographie** : Inter (cohérence groupe)
- **Effets** : glitch subtil sur titres, particules cristallines animées en fond
- **Registre** : entre gravité institutionnelle et modernité Web3 — codes Foundation/SuperRare/Ledger (sobres, premium) — pas les codes dégen NFT

---

## VII — Ligne rouge doctrinale (communication)

**À dire, toujours** :
- Certification humaine
- Maillon humain manquant
- Trace opposable
- Souveraineté d'auteur
- Trace historique / Certificat de fondation / Témoin permanent

**À ne JAMAIS dire** :
- Investissement, rendement, plus-value
- « Nous concurrençons OpenSea »
- « Proofeus Genesis prend de la valeur »
- « Vous pouvez revendre votre certificat »

---

## VIII — Phasing

- **Phase 0** *(FAIT — 13 juillet 2026)* : Doctrine consignée dans les 2 roadmaps source
- **Phase 1** *(en cours septembre-octobre 2026)* : préparation opérationnelle (validation MiCA, mockup œuvre, landing design)
- **Phase 2** *(accélérée — arrivée Chypre)* : V1 opérationnelle — landing, waitlist, teaser Genesis, smart contract déployé sur testnet Base Sepolia
- **Phase 3** *(T1 2027)* : drop Sceau des Origines, bascule sous-domaine `authentic.proofeus.com`, mint public N°1 (François), campagne médiatique « NFT : problème résolu »
- **Phase 4** *(2028+)* : arbitrage marketplace éventuelle ou choix stratégique de rester infrastructure

---

## IX — Marketplaces cibles à démarcher (Phase 2/3)

**Angle** : *« Nous vous offrons gratuitement une intégration Sceau Proofeus. Vous devenez la seule marketplace où les acheteurs ont la certitude que l'humain existe derrière l'œuvre. »*

- **Premium** : Foundation, SuperRare, Manifold, Zora
- **Généralistes** : OpenSea, Rarible, LooksRare
- **Spécialisées** : Sound.xyz, Async Art, Bitski

---

## X — Profil utilisateur

**François Le Moing** — fondateur d'Ataraxis IA, de Proofeus et de Proofeus Authentic.
- Non-développeur mais pensée structurée, dictée vocale (attention transcription)
- Tutoiement entre lui et Claude Code
- Recommandation directe (raison de l'arbitrage technique, ne pas hedger)
- Pas de dates dans les plans — structurer par vagues/phases
- Communication au présent (pas « à venir » ou « bientôt » qui tue l'urgence)
- ® systématique sur les marques du groupe

---

## XI — État au 29 juillet 2026

- Repo créé (aujourd'hui)
- Landing V1 posée (`/` + `/genesis` placeholder)
- Smart contract `SceauOrigines.sol` V1 écrit (Solidity 0.8.24, ERC-721 + Soul-Bound + Lazy Mint + upgradable metadata + cap 1M)
- Tests Foundry V1 posés (déploiement, mint, transfer bloqué, burn, metadata, admin, cap)
- CLAUDE.md, README.md, contracts/README.md posés
- Premier commit local — à créer repo GitHub `Highmindcontrol/proofeus-authentic-platform` pour push

---

## XII — Chantiers restants (priorité arrivée Chypre)

1. **Créer repo GitHub** `Highmindcontrol/proofeus-authentic-platform` puis push
2. **npm install** + `forge install OpenZeppelin/openzeppelin-contracts@v5.0.2` + `forge install foundry-rs/forge-std`
3. **Enrichir la landing** : storytelling détaillé, section artistes témoins, section marketplaces partenaires
4. **Générer l'œuvre inaugurale** via DALL·E/ChatGPT (prompt à écrire)
5. **Uploader œuvre + métadonnées sur IPFS** (via Pinata ou similaire), obtenir CID
6. **Déployer smart contract sur Base Sepolia** (testnet) — test end-to-end mint
7. **Branchement Verbalock** : quand Verbalock Crypto sera en dev, intégrer réception Sceau des Origines nativement
8. **Waitlist Brevo** — brancher formulaire réel
9. **Validation MiCA** avec cabinet crypto (3-8 K€)
10. **Audit sécurité smart contract** avant déploiement mainnet (3-8 K€)

---

*CLAUDE.md créé le 29 juillet 2026 par Claude Code — repo initial ouvert dans le cadre du chantier « attaquer la plateforme NFT » (4ᵉ front de la stratégie de lancement Chypre).*
