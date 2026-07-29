import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certifier une œuvre",
  description:
    "Toute œuvre présentée à Proofeus Authentic® reçoit son Sceau. Physique ou numérique, ancien ou contemporain — Le Sceau Proofeus® s'appose comme une signature vivante, opposable et inaltérable.",
};

/**
 * Salle « Certifier une œuvre » — la salle où le Sceau apparaît.
 *
 * Doctrine Musée de la Confiance : le visiteur entre dans une salle
 * où une sculpture est présentée et Le Sceau se projette à côté
 * d'elle comme un hologramme d'authentification. Silence, majesté,
 * geste rituel.
 *
 * Image de fond : salle-verification.png (galerie contemporaine
 * avec sculpture torsadée + Sceau projeté depuis émetteur au sol).
 */
export default function CertifierPage() {
  return (
    <main>
      {/* SALLE — image cinématographique pleine hauteur */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/salle-verification.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(13,13,16,0.7) 75%, rgba(13,13,16,0.98) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto mb-24 max-w-4xl px-6 text-center md:mb-32">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/70">
            Salle de certification
          </p>
          <h1
            className="mt-8 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              lineHeight: 1.15,
            }}
          >
            Toute œuvre certifiée par Proofeus®
            <br />
            reçoit son Sceau.
          </h1>
        </div>
      </section>

      {/* LE RITE — trois gestes, silencieusement décrits */}
      <section className="border-t border-gris-sombre px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/70">
            Le rite
          </p>
          <h2
            className="mt-6 text-center font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: 1.2,
            }}
          >
            Trois gestes suffisent.
          </h2>

          <div className="mt-20 space-y-16">
            <GesteRite
              numero="I"
              titre="L'auteur se présente"
              texte="Un enrôlement biométrique multi-modal, dans le silence d'une pièce. L'iris, la voix, la morphologie, la paume. Ces signatures ne quittent jamais votre appareil — seule leur empreinte cryptographique parvient à la plateforme."
            />
            <GesteRite
              numero="II"
              titre="L'œuvre est déposée"
              texte="Une photographie haute définition pour une toile, un fichier natif pour une œuvre numérique, un scan pour une sculpture. La plateforme consigne ses dimensions, sa technique, sa date, son histoire — tout ce qui la rend unique."
            />
            <GesteRite
              numero="III"
              titre="Le Sceau s'appose"
              texte="Il apparaît. Il devient l'identité inaltérable de l'œuvre. Une plaque compagnon accompagne Le Sceau, portant le numéro et la clé publique de vérification. Deux objets, un lien — l'œuvre et son emblème."
            />
          </div>

          <div className="mt-24 flex flex-col items-center gap-6 text-center">
            <p className="max-w-xl text-lg italic leading-relaxed text-gris-clair">
              « L&apos;acte de sceller est un rite. Proofeus Authentic® en
              garantit la solennité, la précision et la mémoire. »
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/artistes"
                className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
              >
                Je suis artiste
              </Link>
              <Link
                href="/galeries"
                className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
              >
                Je représente une galerie
              </Link>
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--color-cyan-proofeus)" }}
              >
                Rejoindre la plateforme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function GesteRite({
  numero,
  titre,
  texte,
}: {
  numero: string;
  titre: string;
  texte: string;
}) {
  return (
    <div className="flex gap-8 md:gap-12">
      <div className="flex-shrink-0">
        <span
          className="font-light text-cyan-proofeus/60"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 1,
          }}
        >
          {numero}
        </span>
      </div>
      <div className="flex-1 pt-2">
        <h3
          className="font-light text-blanc-casse"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            lineHeight: 1.2,
          }}
        >
          {titre}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-gris-clair md:text-lg">
          {texte}
        </p>
      </div>
    </div>
  );
}
