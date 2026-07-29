import Link from "next/link";

/**
 * Template partagé pour les 4 salles narratives (/salle/la-toile,
 * /salle/la-galerie, /salle/le-coffre, /salle/la-succession).
 *
 * Structure alignée doctrine Musée de la Confiance :
 * - Hero pleine hauteur avec image cinématographique
 * - Numéro romain + nom de salle + phrase-déclaration en overlay
 * - Corps : 3-4 sections courtes de contenu écrit poétique
 * - CTA final vers une action concrète
 * - Peu de scroll, beaucoup de respiration
 */
export function SalleTemplate({
  numero,
  nom,
  phrase,
  image,
  sections,
  cta,
}: {
  numero: string;
  nom: string;
  phrase: string;
  image: string;
  sections: { titre: string; corps: string }[];
  cta: { label: string; href: string; variant?: "primary" | "secondary" }[];
}) {
  return (
    <main>
      {/* HERO — image + numéro romain + nom + phrase */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(5,8,16,0.7) 75%, rgba(5,8,16,0.98) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto mb-24 max-w-4xl px-6 text-center md:mb-32">
          <p
            className="font-light text-cyan-proofeus/80"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1,
            }}
          >
            {numero}
          </p>
          <h1
            className="mt-4 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            {nom}
          </h1>
          <p
            className="mt-8 italic text-blanc-casse/85"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              lineHeight: 1.35,
            }}
          >
            « {phrase} »
          </p>
        </div>
      </section>

      {/* CORPS — sections courtes de contenu écrit */}
      <section className="border-t border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-14">
            {sections.map((section) => (
              <div key={section.titre}>
                <h2
                  className="font-light tracking-[-0.01em] text-blanc-casse"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    lineHeight: 1.2,
                  }}
                >
                  {section.titre}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gris-clair md:text-lg">
                  {section.corps}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-20 flex flex-wrap justify-center gap-3">
            {cta.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={
                  c.variant === "primary"
                    ? "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
                    : "inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
                }
                style={
                  c.variant === "primary"
                    ? { background: "var(--color-cyan-proofeus)" }
                    : undefined
                }
              >
                {c.label}
              </Link>
            ))}
          </div>

          {/* Retour à la Maison */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.28em] text-gris-clair transition-colors hover:text-cyan-proofeus"
            >
              ← Retour à La Maison
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
