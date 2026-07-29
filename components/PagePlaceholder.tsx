import Link from "next/link";
import Image from "next/image";

/**
 * Composant placeholder pour les pages en construction — évite les
 * 404 pendant que François finalise les maquettes et le contenu.
 *
 * Style aligné doctrine : Sceau canonique en tête, titre poétique,
 * chapô explicatif, statut « en préparation », lien retour Maison.
 */
export function PagePlaceholder({
  eyebrow,
  titre,
  chapo,
  statut = "En préparation",
}: {
  eyebrow: string;
  titre: string;
  chapo: string;
  statut?: string;
}) {
  return (
    <main className="min-h-[70vh] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        {/* Sceau canonique en tête */}
        <div className="mx-auto flex justify-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--color-cyan-proofeus)" }}
            />
            <Image
              src="/sceau-canonique.png"
              alt=""
              width={140}
              height={140}
              className="relative"
              priority
            />
          </div>
        </div>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
          {eyebrow}
        </p>
        <h1
          className="mt-4 font-semibold tracking-[-0.02em] text-blanc-casse"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          {titre}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gris-clair">
          {chapo}
        </p>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-gris-sombre bg-noir-profond px-5 py-2 text-xs font-medium uppercase tracking-widest text-gris-clair">
          <span
            aria-hidden
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ background: "var(--color-cyan-proofeus)" }}
          />
          {statut}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-5 py-2.5 text-sm text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
          >
            <span aria-hidden>←</span> Retour à l&apos;accueil
          </Link>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-cyan-proofeus)" }}
          >
            Rejoindre la liste d&apos;attente
          </Link>
        </div>
      </div>
    </main>
  );
}
