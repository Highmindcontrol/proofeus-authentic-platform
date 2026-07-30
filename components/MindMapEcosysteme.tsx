"use client";

import Image from "next/image";

/**
 * Mind map de l'écosystème Proofeus® — l'humain au centre (avec son
 * Sceau), 8 pétales de services autour, reliés par des lignes SVG.
 *
 * Desktop : disposition circulaire (trigonométrie sur 8 angles, rayon ~300px).
 * Mobile : grille verticale des 8 pétales (empilement fluide).
 *
 * Portable — utilise uniquement les tokens cyan/blanc de la charte
 * AtaraxisIA, réutilisable tel quel sur les autres sites du groupe
 * (Proofeus®.com, Verbalock, Coryphea).
 */

type Petale = {
  id: string;
  titre: string;
  soustitre: string;
  services: string[];
  icon: React.ReactNode;
};

const PETALES: Petale[] = [
  {
    id: "identite",
    titre: "Identité",
    soustitre: "Prouver que vous êtes vous",
    services: [
      "Sceau d'humanité",
      "Identité eIDAS certifiée",
      "Sceau d'auteur",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="11" r="5" />
        <path d="M6 28c0-5 4.5-9 10-9s10 4 10 9" />
      </svg>
    ),
  },
  {
    id: "communication",
    titre: "Communication",
    soustitre: "Parler entre humains vérifiés",
    services: [
      "Messagerie chiffrée E2E",
      "Cercles de confiance",
      "Contacts scellés",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h22v14H12l-6 5V8z" />
        <line x1="10" y1="14" x2="22" y2="14" />
        <line x1="10" y1="18" x2="18" y2="18" />
      </svg>
    ),
  },
  {
    id: "patrimoine",
    titre: "Patrimoine",
    soustitre: "Vos mots de passe, vos clés",
    services: [
      "Wallet mots de passe",
      "Wallet crypto sans seed",
      "Coffre-fort documents",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="12" width="22" height="14" rx="2" />
        <path d="M11 12V8a5 5 0 0 1 10 0v4" />
        <circle cx="16" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "transactions",
    titre: "Transactions",
    soustitre: "Envoyer, recevoir, signer",
    services: [
      "Paiement humain à humain",
      "Rail crypto EUR",
      "Signature de contrats",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12h18l-4-4" />
        <path d="M24 20H6l4 4" />
      </svg>
    ),
  },
  {
    id: "transmission",
    titre: "Transmission",
    soustitre: "Transmettre à ceux qui restent",
    services: [
      "Testament numérique",
      "Legs et succession",
      "Cercle familial",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="3" />
        <circle cx="22" cy="10" r="3" />
        <circle cx="16" cy="24" r="3" />
        <line x1="12" y1="13" x2="15" y2="21" />
        <line x1="20" y1="13" x2="17" y2="21" />
      </svg>
    ),
  },
  {
    id: "protection",
    titre: "Protection",
    soustitre: "Alerter, se défendre, être remboursé",
    services: [
      "Bouton d'alerte",
      "Assurance anti-arnaque",
      "Veille menaces IA",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4L6 8v9c0 6 4 10 10 11 6-1 10-5 10-11V8l-10-4z" />
        <path d="M12 16l3 3 6-6" />
      </svg>
    ),
  },
  {
    id: "creation",
    titre: "Création",
    soustitre: "Signer vos œuvres, physiques ou NFT",
    services: [
      "Certification œuvres d'art",
      "NFT scellés",
      "Registre public",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="5" width="20" height="22" rx="1" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 22l6-7 5 6 3-4 6 6" />
      </svg>
    ),
  },
  {
    id: "orchestration",
    titre: "Orchestration IA",
    soustitre: "Coryphea, cheffe d'orchestre",
    services: [
      "Assistant personnel IA",
      "Orchestration multi-IA",
      "Cockpit unifié",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="4" />
        <circle cx="16" cy="6" r="2" />
        <circle cx="16" cy="26" r="2" />
        <circle cx="6" cy="16" r="2" />
        <circle cx="26" cy="16" r="2" />
        <line x1="16" y1="12" x2="16" y2="8" />
        <line x1="16" y1="20" x2="16" y2="24" />
        <line x1="12" y1="16" x2="8" y2="16" />
        <line x1="20" y1="16" x2="24" y2="16" />
      </svg>
    ),
  },
];

export function MindMapEcosysteme() {
  const n = PETALES.length;
  const radius = 320; // px
  const centerSize = 200; // diamètre centre en px

  return (
    <div>
      {/* ═══ DESKTOP — mind map circulaire ═══ */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[900px] lg:block">
        {/* Lignes SVG de connexion — dessinées en premier (fond) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 900 900"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3fd4d9" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#3fd4d9" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#3fd4d9" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Halo cyan diffus autour du centre */}
          <circle cx="450" cy="450" r="180" fill="url(#glow)" />

          {/* Anneau pointillé subtile */}
          <circle
            cx="450"
            cy="450"
            r={radius}
            fill="none"
            stroke="#3fd4d9"
            strokeOpacity="0.15"
            strokeWidth="1"
            strokeDasharray="2 6"
          />

          {/* 8 rayons du centre vers chaque pétale */}
          {PETALES.map((_, i) => {
            const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
            const x2 = 450 + Math.cos(angle) * radius;
            const y2 = 450 + Math.sin(angle) * radius;
            return (
              <line
                key={i}
                x1="450"
                y1="450"
                x2={x2}
                y2={y2}
                stroke="#3fd4d9"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* Centre — humain + Sceau canonique */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: centerSize, height: centerSize }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full border border-cyan-proofeus/50 bg-noir-profond text-center">
            <Image
              src="/sceau-canonique.png"
              alt="Le Sceau Proofeus"
              width={140}
              height={140}
              className="opacity-90"
            />
            <p className="absolute bottom-[-32px] w-full text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus">
              Vous
            </p>
          </div>
        </div>

        {/* 8 pétales positionnés en cercle par trigonométrie */}
        {PETALES.map((p, i) => {
          const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
          const x = 50 + (Math.cos(angle) * radius) / 9; // % relatif au container
          const y = 50 + (Math.sin(angle) * radius) / 9;
          return (
            <PetaleCard
              key={p.id}
              petale={p}
              style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}
      </div>

      {/* ═══ MOBILE / TABLETTE — grille verticale simple ═══ */}
      <div className="lg:hidden">
        {/* Centre en tête */}
        <div className="mx-auto mb-12 flex w-40 flex-col items-center">
          <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full border border-cyan-proofeus/50 bg-noir-profond">
            <Image
              src="/sceau-canonique.png"
              alt="Le Sceau Proofeus"
              width={110}
              height={110}
              className="opacity-90"
            />
          </div>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus">
            Vous
          </p>
        </div>

        {/* 8 pétales empilés en grille 1/2 col */}
        <div className="grid gap-4 sm:grid-cols-2">
          {PETALES.map((p) => (
            <PetaleCard key={p.id} petale={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PetaleCard({
  petale,
  style,
}: {
  petale: Petale;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="w-[200px] rounded-sm border border-cyan-proofeus/25 bg-noir-profond/95 p-4 shadow-[0_10px_28px_-14px_rgba(63,212,217,0.35)] backdrop-blur-sm transition-all hover:border-cyan-proofeus/60 hover:shadow-[0_14px_36px_-14px_rgba(63,212,217,0.55)] lg:w-[210px]"
      style={style}
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-proofeus/40 bg-black"
        style={{ color: "var(--color-cyan-proofeus)" }}
      >
        {petale.icon}
      </div>
      <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-cyan-proofeus">
        {petale.titre}
      </p>
      <p className="mt-1 text-[11px] italic leading-snug text-blanc-casse/80">
        {petale.soustitre}
      </p>
      <ul className="mt-3 space-y-1 text-[11px] leading-snug text-gris-clair">
        {petale.services.map((s) => (
          <li key={s} className="flex gap-1.5">
            <span className="text-cyan-proofeus/60">•</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
