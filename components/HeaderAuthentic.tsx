import Link from "next/link";
import Image from "next/image";

/**
 * Header Proofeus Authentic — épuré, classe, technique.
 *
 * Codes hérités de Verbalock/Proofeus : header fixed, ligne fine
 * en séparateur, sceau à gauche + wordmark, 7 items de navigation
 * centrés, sélecteur langue + connexion + CTA cyan à droite.
 *
 * Doctrine : le Sceau canonique est présent à gauche à toutes les
 * pages, comme la pomme d'Apple dans son bandeau. Il ne change
 * jamais.
 */
export function HeaderAuthentic() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-gris-sombre backdrop-blur-xl"
      style={{ background: "rgba(0,0,0,0.92)" }}
    >
      {/* Baseline institutionnelle — au-dessus du wordmark, comme une devise gravée */}
      <div className="mx-auto max-w-7xl px-6 pt-5 md:px-10 md:pt-6">
        <p
          className="text-center italic text-blanc-casse/85"
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(1rem, 1.7vw, 1.4rem)",
            lineHeight: 1.2,
            letterSpacing: "0.005em",
          }}
        >
          L&apos;authenticité a trouvé son emblème.
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-10 md:py-6">
        {/* Logo + wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Proofeus Authentic — accueil"
        >
          <Image
            src="/favicon.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.24em] text-blanc-casse md:inline">
            Proofeus <span style={{ color: "var(--color-cyan-proofeus)" }}>Authentic</span>
          </span>
        </Link>

        {/* Navigation principale */}
        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-7 text-[13px] font-medium text-blanc-casse">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-cyan-proofeus"
                  style={{ color: item.emphase ? "var(--color-cyan-proofeus)" : undefined }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions droite */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/connexion"
            className="hidden text-[13px] font-medium text-gris-clair transition-colors hover:text-blanc-casse md:inline"
          >
            Connexion
          </Link>
          <Link
            href="/certifier"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-widest text-noir transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-cyan-proofeus)" }}
          >
            Certifier une œuvre
          </Link>

          {/* Menu burger mobile — visible uniquement sous lg */}
          <button
            type="button"
            aria-label="Ouvrir le menu"
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gris-sombre text-blanc-casse lg:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>

      {/* Ligne cyan fine — signature graphique sous le header */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-cyan-proofeus) 50%, transparent 100%)",
          opacity: 0.35,
        }}
      />
    </header>
  );
}

const NAV_ITEMS: { label: string; href: string; emphase?: boolean }[] = [
  { label: "Ce que nous faisons", href: "/" },
  { label: "Artistes", href: "/artistes" },
  { label: "Galeries", href: "/galeries" },
  { label: "Le Registre", href: "/registry" },
  { label: "Web3 & NFT", href: "/web3" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Aide", href: "/aide" },
];
