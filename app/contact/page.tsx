import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous écrire",
  description:
    "Chaque message reçu par Proofeus Authentic® reçoit une réponse humaine sous 24 h. Trois adresses, une équipe, aucune machine intermédiaire.",
};

/**
 * Page « Nous écrire » — trois adresses de correspondance.
 *
 * Image de fond : salle-correspondance.png (enveloppe scellée avec
 * Le Sceau de cire cyan, plume, encrier — la correspondance devient
 * un rite institutionnel).
 *
 * Doctrine Musée de la Confiance : pas de « formulaire de contact »
 * banal, mais un salon d'écriture. Trois adresses seulement, aucune
 * complexité, une équipe qui répond.
 */
export default function ContactPage() {
  return (
    <main>
      {/* SALLE — image cinématographique pleine hauteur */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/salle-correspondance.png')",
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
            Salon de correspondance
          </p>
          <h1
            className="mt-8 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              lineHeight: 1.15,
            }}
          >
            Nous écrire — trois adresses,
            <br />
            une réponse humaine.
          </h1>
        </div>
      </section>

      {/* TROIS ADRESSES */}
      <section className="border-t border-gris-sombre px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/70">
            Nous écrire
          </p>
          <h2
            className="mt-6 text-center font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: 1.2,
            }}
          >
            Trois adresses. Une réponse humaine.
          </h2>

          <div className="mt-20 space-y-14">
            <Adresse
              titre="Pour les artistes et les galeries"
              chapo="Certification d'œuvres, offre Institutions, questions sur le Sceau d'Auteur."
              email="maison@proofeus.art"
            />
            <Adresse
              titre="Pour les partenariats et les marketplaces"
              chapo="Intégration du Sceau dans vos flux, propositions institutionnelles, alliances de long terme."
              email="partenariats@proofeus.art"
            />
            <Adresse
              titre="Pour la presse et les médias"
              chapo="Interviews du fondateur, dossier de presse, visuels haute définition du Sceau."
              email="presse@proofeus.art"
            />
          </div>

          <div className="mt-24 flex flex-col items-center gap-4 text-center">
            <p className="max-w-xl text-lg italic leading-relaxed text-gris-clair">
              « Toute lettre reçoit une réponse humaine dans les vingt-quatre
              heures. Nous ne déléguons pas la parole à des machines. »
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Adresse({
  titre,
  chapo,
  email,
}: {
  titre: string;
  chapo: string;
  email: string;
}) {
  return (
    <div className="border-l border-cyan-proofeus/30 pl-8 md:pl-12">
      <h3
        className="font-light text-blanc-casse"
        style={{
          fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
          lineHeight: 1.2,
        }}
      >
        {titre}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-gris-clair md:text-lg">
        {chapo}
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-5 inline-block font-mono text-sm text-cyan-proofeus transition-colors hover:text-blanc-casse"
      >
        {email}
      </a>
    </div>
  );
}
