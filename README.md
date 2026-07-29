# Proofeus Authentic®

> *NFT : problème résolu.*

**Domaine canonique** : [proofeus.art](https://proofeus.art)
**Alias** : authentic.proofeus.com

Espace dédié à la certification humaine dans le Web3 — entité éditoriale autonome sous marque Proofeus (arbitrage 29 juillet 2026 : domaine dédié pour neutralité renforcée vs sous-domaine).

Édité par **Ataraxis IA** — verticale d'intelligence artificielle souveraine du groupe Ataraxis.

## Stack

- **Frontend** : Next.js 16 + TypeScript + Tailwind v4 (dossier racine)
- **Smart contracts** : Solidity 0.8.24 + Foundry + OpenZeppelin v5 (dossier `contracts/`)
- **Chain cible** : Base (Ethereum L2 Coinbase) — testnet Sepolia puis mainnet
- **Hébergement** : Vercel

## Structure

```
proofeus-authentic-platform/
├── CLAUDE.md                    # Mémoire structurelle du projet
├── app/                         # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx                 # Landing V1 « NFT : problème résolu »
│   └── genesis/page.tsx         # Page Sceau des Origines
├── components/                  # Composants React partagés
├── lib/                         # Utilitaires TS
├── contracts/                   # Smart contracts Solidity + Foundry
│   ├── foundry.toml
│   ├── src/SceauOrigines.sol
│   ├── test/SceauOrigines.t.sol
│   └── README.md
├── docs/                        # Docs techniques du repo
└── public/                      # Assets statiques
```

## Setup

```bash
# Installer dépendances Next.js
npm install

# Dev server
npm run dev

# Build production
npm run build
```

Pour les smart contracts, voir [`contracts/README.md`](contracts/README.md).

## Documentation doctrinale complète

Le brief produit complet vit dans le repo `ataraxis-platform` (forteresse admin du groupe) :

- `ataraxis-platform/docs/briefs/proofeus-authentic.md` — brief 450+ lignes
- `admin.ataraxis.group/admin/marques/proofeus-authentic/*` — cockpit admin

Les 2 roadmaps doctrinales originales vivent dans le repo `proofeus-platform` :

- `proofeus-platform/docs/roadmap-authentic.md` — doctrine Authentic
- `proofeus-platform/docs/roadmap-certificat-fondation.md` — Sceau des Origines

## License

Propriétaire — © Ataraxis IA. Tous droits réservés.
