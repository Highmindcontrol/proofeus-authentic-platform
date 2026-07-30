import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Nous écrire — Proofeus Authentic®",
  description:
    "Un seul formulaire, une équipe humaine, une réponse sous 24 h. Aucun renvoi vers une messagerie externe — vos données restent dans notre infrastructure européenne.",
};

const CATEGORIES = [
  "Artistes & galeries — certification d'œuvres",
  "Partenariats & marketplaces — intégration Sceau",
  "Presse & médias — interviews, dossier de presse",
  "Autre demande",
];

export default function ContactPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — image + titre unique
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
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
              "linear-gradient(to bottom, rgba(13,13,16,0.4) 0%, rgba(13,13,16,0.55) 45%, rgba(13,13,16,0.55) 55%, rgba(13,13,16,0.98) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus/85">
            Nous écrire
          </p>
          <h1
            className="mt-6 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              lineHeight: 1.15,
              textShadow: "0 2px 24px rgba(0,0,0,0.65)",
            }}
          >
            Une équipe humaine, sous vingt-quatre heures.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-blanc-casse/90 md:text-lg">
            Un seul formulaire, traité en interne dans notre infrastructure
            européenne. Aucun renvoi vers une messagerie externe, aucune
            transmission tierce.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. FORMULAIRE — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Formulaire de contact
            </p>
            <h2
              id="contact-title"
              className="mx-auto mt-6 max-w-3xl font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Un seul formulaire, une réponse humaine.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Précisez la nature de votre demande dans le champ « type de
              demande » ci-dessous — nous l&apos;orienterons vers la
              personne concernée dans l&apos;équipe.
            </p>
          </div>

          <div className="mt-14">
            <ContactForm categories={CATEGORIES} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. CTAs — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-20 md:px-12 md:py-24"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm italic leading-relaxed text-gris-clair">
            « Toute lettre reçoit une réponse humaine dans les vingt-quatre
            heures. Nous ne déléguons pas la parole à des machines. »
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/aide"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-5 py-2.5 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              Voir l&apos;aide et Coryphea®
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-5 py-2.5 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
