"use client";

import Image from "next/image";

/**
 * Mind map de l'écosystème Proofeus® — recentré sur LE SCEAU (le
 * bouclier biométrique), qui est le device sur lequel toutes les apps
 * de l'écosystème reposent. Modèle iPhone/App Store.
 *
 * Le Sceau au centre = Sovereign 14,90 €/an à vie.
 * Autour : les 8 apps de l'écosystème avec leur prix, chacune
 * téléchargeable indépendamment sur App Store / Google Play mais
 * nécessitant obligatoirement un Sceau pour fonctionner.
 *
 * Desktop : disposition circulaire (trigonométrie sur 8 angles).
 * Mobile : grille verticale des 8 apps.
 */

type AppItem = {
  id: string;
  titre: string;
  courte: string;
  prix: string;
  inclus?: boolean;
  icon: React.ReactNode;
};

const APPS: AppItem[] = [
  {
    id: "proofeus-passwords",
    titre: "Proofeus® Passwords",
    courte: "Coffre de mots de passe",
    prix: "4,90 €/an",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="12" width="22" height="14" rx="2" />
        <path d="M11 12V8a5 5 0 0 1 10 0v4" />
        <circle cx="16" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "proofeus-crypto",
    titre: "Proofeus® Crypto",
    courte: "Wallet crypto sans seed",
    prix: "4,90 €/an",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10h20v14H6z" />
        <path d="M22 16h4v4h-4z" />
        <path d="M6 10l4-4h16v4" />
      </svg>
    ),
  },
  {
    id: "proofeus-chat",
    titre: "Proofeus® Chat",
    courte: "Messagerie chiffrée E2E",
    prix: "4,90 €/an",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h22v14H12l-6 5V8z" />
        <line x1="10" y1="14" x2="22" y2="14" />
        <line x1="10" y1="18" x2="18" y2="18" />
      </svg>
    ),
  },
  {
    id: "proofeus-pay",
    titre: "Proofeus® Pay",
    courte: "Paiement humain à humain",
    prix: "4,90 €/an",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12h18l-4-4" />
        <path d="M24 20H6l4 4" />
      </svg>
    ),
  },
  {
    id: "authentic",
    titre: "Proofeus® Authentic",
    courte: "Certification d'œuvres",
    prix: "Dès 29 €/an",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="5" width="20" height="22" rx="1" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 22l6-7 5 6 3-4 6 6" />
      </svg>
    ),
  },
  {
    id: "legacy",
    titre: "Proofeus® Legacy",
    courte: "Testament, transmission",
    prix: "6,90 €/an",
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="3" />
        <circle cx="22" cy="10" r="3" />
        <circle cx="16" cy="24" r="3" />
        <line x1="12" y1="13" x2="15" y2="21" />
        <line x1="20" y1="13" x2="17" y2="21" />
      </svg>
    ),
  },
  {
    id: "help",
    titre: "Help",
    courte: "Bouton d'alerte / secours",
    prix: "Inclus dans Sovereign",
    inclus: true,
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4L6 8v9c0 6 4 10 10 11 6-1 10-5 10-11V8l-10-4z" />
        <path d="M16 12v6M16 22h.01" />
      </svg>
    ),
  },
  {
    id: "watch",
    titre: "Watch®",
    courte: "Observatoire IA malveillante",
    prix: "Public & gratuit",
    inclus: true,
    icon: (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 16s5-8 14-8 14 8 14 8-5 8-14 8S2 16 2 16z" />
        <circle cx="16" cy="16" r="4" />
      </svg>
    ),
  },
];

export function MindMapEcosysteme() {
  const n = APPS.length;
  const radius = 340;

  return (
    <div>
      {/* ═══ DESKTOP — mind map circulaire ═══ */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[960px] lg:block">
        {/* Rayons SVG cyan */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 960 960"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <radialGradient id="mm-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3fd4d9" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#3fd4d9" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#3fd4d9" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Halo cyan diffus autour du bouclier */}
          <circle cx="480" cy="480" r="220" fill="url(#mm-glow)" />

          {/* Anneau pointillé */}
          <circle
            cx="480"
            cy="480"
            r={radius}
            fill="none"
            stroke="#3fd4d9"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeDasharray="2 6"
          />

          {/* Rayons du bouclier vers chaque app */}
          {APPS.map((_, i) => {
            const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
            const x2 = 480 + Math.cos(angle) * radius;
            const y2 = 480 + Math.sin(angle) * radius;
            return (
              <line
                key={i}
                x1="480"
                y1="480"
                x2={x2}
                y2={y2}
                stroke="#3fd4d9"
                strokeOpacity="0.28"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* Centre — le Sceau/bouclier = Sovereign */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 240, height: 240 }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full border-2 border-cyan-proofeus/60 bg-noir-profond text-center shadow-[0_0_60px_-10px_rgba(63,212,217,0.45)]">
            <Image
              src="/sceau-canonique.png"
              alt="Le Sceau Proofeus®"
              width={160}
              height={160}
              className="opacity-95"
            />
            <div className="absolute -bottom-16 w-56 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus">
                Le bouclier
              </p>
              <p
                className="mt-2 font-bold text-blanc-casse"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  fontSize: "1.5rem",
                  lineHeight: 1.15,
                }}
              >
                Sovereign
                <sup style={{ fontSize: "0.42em", verticalAlign: "0.8em", fontWeight: 400, marginLeft: "0.05em" }}>®</sup>
              </p>
              <p className="mt-1 text-xs text-cyan-proofeus">
                14,90 €/an à vie
              </p>
            </div>
          </div>
        </div>

        {/* 8 apps positionnées en cercle */}
        {APPS.map((app, i) => {
          const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
          const x = 50 + (Math.cos(angle) * radius) / 9.6;
          const y = 50 + (Math.sin(angle) * radius) / 9.6;
          return (
            <AppCard
              key={app.id}
              app={app}
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

      {/* ═══ MOBILE / TABLETTE — grille verticale ═══ */}
      <div className="lg:hidden">
        {/* Centre en tête */}
        <div className="mx-auto mb-14 flex flex-col items-center text-center">
          <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-cyan-proofeus/60 bg-noir-profond shadow-[0_0_60px_-10px_rgba(63,212,217,0.45)]">
            <Image
              src="/sceau-canonique.png"
              alt="Le Sceau Proofeus®"
              width={110}
              height={110}
              className="opacity-95"
            />
          </div>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus">
            Le bouclier
          </p>
          <p
            className="mt-2 font-bold text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "1.5rem",
            }}
          >
            Sovereign
            <sup style={{ fontSize: "0.42em", verticalAlign: "0.8em", fontWeight: 400, marginLeft: "0.05em" }}>®</sup>
          </p>
          <p className="mt-1 text-xs text-cyan-proofeus">14,90 €/an à vie</p>
        </div>

        {/* 8 apps en grille verticale */}
        <div className="grid gap-4 sm:grid-cols-2">
          {APPS.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppCard({
  app,
  style,
}: {
  app: AppItem;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`w-[210px] rounded-sm border p-4 backdrop-blur-sm transition-all lg:w-[220px] ${
        app.inclus
          ? "border-blanc-casse/25 bg-black/70 hover:border-blanc-casse/50"
          : "border-cyan-proofeus/30 bg-noir-profond/95 hover:border-cyan-proofeus/60 hover:shadow-[0_14px_36px_-14px_rgba(63,212,217,0.5)]"
      }`}
      style={style}
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-proofeus/40 bg-black"
        style={{ color: "var(--color-cyan-proofeus)" }}
      >
        {app.icon}
      </div>
      <p className="mt-3 text-[13px] font-semibold text-blanc-casse">
        {app.titre}
      </p>
      <p className="mt-1 text-[11px] italic leading-snug text-blanc-casse/70">
        {app.courte}
      </p>
      <p
        className={`mt-3 text-[11px] font-semibold ${
          app.inclus ? "text-blanc-casse/70" : "text-cyan-proofeus"
        }`}
      >
        {app.prix}
      </p>
    </div>
  );
}
