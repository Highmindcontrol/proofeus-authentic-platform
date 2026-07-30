import Link from "next/link";

/**
 * Badges "Télécharger sur App Store" + "Télécharger sur Google Play".
 * SVG inline recréés (pas d'assets externes) — respecte l'esprit
 * des badges officiels sans dépendre de fichiers image tiers.
 *
 * Usage : positionner en absolute au bas des heros de pages, centré,
 * avec un léger backdrop pour la lisibilité contre les images.
 */
export function AppStoreBadges({
  align = "center",
  compact = false,
}: {
  align?: "left" | "center" | "right";
  compact?: boolean;
}) {
  const alignClass =
    align === "left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${alignClass}`}>
      <Link
        href="#appstore"
        aria-label="Télécharger l'application Proofeus sur l'App Store"
        className={`group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black/70 px-4 backdrop-blur-md transition-all hover:border-white/50 ${
          compact ? "py-2" : "py-2.5"
        }`}
      >
        <svg
          width={compact ? "22" : "26"}
          height={compact ? "22" : "26"}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
          aria-hidden
        >
          <path d="M17.523 12.243c-.028-2.847 2.322-4.213 2.428-4.28-1.324-1.937-3.383-2.201-4.115-2.231-1.751-.178-3.418 1.033-4.307 1.033-.9 0-2.263-1.008-3.72-.98-1.912.027-3.677 1.115-4.66 2.833-1.988 3.443-.508 8.526 1.427 11.318.943 1.365 2.065 2.895 3.535 2.84 1.42-.058 1.956-.921 3.674-.921 1.706 0 2.207.921 3.71.888 1.531-.027 2.5-1.386 3.44-2.762 1.081-1.583 1.526-3.116 1.55-3.196-.033-.016-2.98-1.145-3.008-4.542zm-2.82-8.336c.787-.958 1.317-2.29 1.172-3.616-1.135.05-2.507.763-3.322 1.72-.727.844-1.365 2.192-1.194 3.493 1.267.099 2.552-.646 3.344-1.597z" />
        </svg>
        <div className="text-left leading-tight">
          <p className="text-[9px] uppercase tracking-wide text-white/70">
            Télécharger sur
          </p>
          <p
            className={`font-semibold text-white ${compact ? "text-sm" : "text-base"}`}
          >
            App&nbsp;Store
          </p>
        </div>
      </Link>

      <Link
        href="#googleplay"
        aria-label="Télécharger l'application Proofeus sur Google Play"
        className={`group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black/70 px-4 backdrop-blur-md transition-all hover:border-white/50 ${
          compact ? "py-2" : "py-2.5"
        }`}
      >
        <svg
          width={compact ? "22" : "26"}
          height={compact ? "22" : "26"}
          viewBox="0 0 24 24"
          aria-hidden
        >
          <defs>
            <linearGradient id="gp-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c3ff" />
              <stop offset="100%" stopColor="#1a73e8" />
            </linearGradient>
            <linearGradient id="gp-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffce00" />
              <stop offset="100%" stopColor="#ffa000" />
            </linearGradient>
            <linearGradient id="gp-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4a4a" />
              <stop offset="100%" stopColor="#e00" />
            </linearGradient>
            <linearGradient id="gp-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff85" />
              <stop offset="100%" stopColor="#00c853" />
            </linearGradient>
          </defs>
          <path
            d="M3.6 2.2c-.35.3-.6.75-.6 1.35v17c0 .6.25 1.05.6 1.35L13.5 12 3.6 2.2z"
            fill="url(#gp-blue)"
          />
          <path
            d="M17.35 8.55L13.5 12l3.85 3.45 4.75-2.7c1.15-.65 1.15-2.55 0-3.2l-4.75-2.7-.0.0z"
            fill="url(#gp-yellow)"
          />
          <path
            d="M3.6 21.9c.55.5 1.4.55 2.35 0l11.4-6.45L13.5 12 3.6 21.9z"
            fill="url(#gp-red)"
          />
          <path
            d="M3.6 2.1c-.55.5-.55.85-.55 1.45 0 0 11.95 6.75 12.45 7.05L17.35 8.55 5.95 2.1c-.95-.55-1.8-.5-2.35 0z"
            fill="url(#gp-green)"
          />
        </svg>
        <div className="text-left leading-tight">
          <p className="text-[9px] uppercase tracking-wide text-white/70">
            Disponible sur
          </p>
          <p
            className={`font-semibold text-white ${compact ? "text-sm" : "text-base"}`}
          >
            Google&nbsp;Play
          </p>
        </div>
      </Link>
    </div>
  );
}
