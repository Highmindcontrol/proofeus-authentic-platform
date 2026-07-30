import type { Metadata } from "next";
import Link from "next/link";
import { CorypheaWidget } from "@/components/CorypheaWidget";
import { ContactForm } from "@/components/ContactForm";
import { AppStoreBadges } from "@/components/AppStoreBadges";

export const metadata: Metadata = {
  title: "Aide — Proofeus Authentic®",
  description:
    "Trois manières d'obtenir de l'aide : Coryphea® — l'assistante IA de la maison — les questions fréquentes, ou un formulaire de contact humain. Réponse sous 24 h, jamais de messagerie externe.",
};

const FAQ: { question: string; reponse: string }[] = [
  {
    question: "Qu'est-ce que Proofeus Authentic® exactement ?",
    reponse:
      "La première plateforme de certification biométrique multimodale des œuvres d'art physiques et numériques. Chaque œuvre certifiée est liée à l'iris, à la morphologie, à la voix, à la paume et au pouls de son auteur, et inscrite à vie dans un registre public inaltérable.",
  },
  {
    question: "Comment est calculée l'empreinte biométrique de l'auteur ?",
    reponse:
      "Vos cinq empreintes multimodales sont capturées localement par l'application Proofeus®, jamais transférées en clair. Seule une dérivation cryptographique irréversible parvient au Registre. Personne, y compris nous, ne peut reconstituer vos empreintes à partir de leur dérivation.",
  },
  {
    question: "Que se passe-t-il si je perds mon smartphone ?",
    reponse:
      "Vos empreintes ne sont pas stockées sur votre smartphone : elles sont recomposées à chaque authentification à partir de votre biométrie vivante. Vous téléchargez l'application sur un nouveau téléphone, vous refaites votre enrôlement — et vous retrouvez votre Sceau intact.",
  },
  {
    question: "Puis-je certifier une œuvre après coup, plusieurs années plus tard ?",
    reponse:
      "Oui. Toute œuvre existante, ancienne ou récente, peut recevoir son Sceau à condition que vous en soyez l'auteur. Pour les œuvres d'artistes défunts, un protocole post-mortem à trois verrous permet une certification rétroactive (expertise + provenance documentée + validation des ayants-droit).",
  },
  {
    question: "Prenez-vous une commission sur la vente de mes œuvres ?",
    reponse:
      "Non. Jamais. Proofeus Authentic® ne vend rien, ne prend aucune commission sur les cessions, ne stocke aucun fonds acheteur. Notre modèle repose uniquement sur les formules de certification souscrites par les artistes et les institutions.",
  },
  {
    question: "Le Sceau fonctionne-t-il aussi pour les NFT ?",
    reponse:
      "Oui. Un même Sceau d'auteur couvre une toile physique et un NFT sur marketplace. Foundation, SuperRare, Manifold, OpenSea, Zora — n'importe quelle marketplace peut afficher le badge « Verified Human Author » en intégrant notre SDK gratuit.",
  },
  {
    question: "Mes données biométriques sont-elles vraiment souveraines ?",
    reponse:
      "Oui, entièrement. L'infrastructure est hébergée en Europe, sous droit européen. Aucune juridiction étrangère ne peut exiger l'accès à vos données. Vous pouvez à tout moment exercer votre droit à l'oubli — nous supprimons alors définitivement les dérivations conservées.",
  },
  {
    question: "Comment le Registre survit-il à la disparition de Proofeus ?",
    reponse:
      "Le Registre repose sur une architecture décentralisée. Même en cas de disparition de la société éditrice, les entrées restent consultables via les nœuds indépendants qui hébergent les copies. Notre engagement : « ce que nous scellons aujourd'hui doit pouvoir être vérifié dans un siècle ».",
  },
];

export default function AidePage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — noir + titre + AppStore badges
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus/85">
            Centre d&apos;aide
          </p>
          <h1
            className="mt-6 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              lineHeight: 1.1,
            }}
          >
            Nous sommes joignables — de trois manières.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
            Une assistante IA disponible en continu, des réponses aux
            questions les plus fréquentes, ou une équipe humaine qui vous
            répond en moins de vingt-quatre heures. Jamais de messagerie
            externe, jamais de robot indéfini.
          </p>

          {/* Badges App Store / Google Play — au pied du hero */}
          <div className="mt-14">
            <AppStoreBadges />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. CORYPHEA — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Assistance IA
            </p>
            <h2
              className="mx-auto mt-6 max-w-3xl font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Coryphea
              <sup
                style={{
                  fontSize: "0.42em",
                  verticalAlign: "0.8em",
                  fontWeight: 400,
                  marginLeft: "0.05em",
                }}
              >
                ®
              </sup>
              , l&apos;assistante IA de la maison Proofeus
              <sup
                style={{
                  fontSize: "0.42em",
                  verticalAlign: "0.8em",
                  fontWeight: 400,
                  marginLeft: "0.05em",
                }}
              >
                ®
              </sup>
              .
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Formée sur la doctrine maison, Coryphea vous répond en temps
              réel sur la certification, les tarifs, l&apos;écosystème et
              l&apos;intégration marketplaces.
            </p>
          </div>

          <div className="mt-14">
            <CorypheaWidget />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. FAQ SUR 2 COLONNES — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Questions fréquentes
            </p>
            <h2
              className="mx-auto mt-6 max-w-3xl font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Ce que l&apos;on nous demande le plus souvent.
            </h2>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {FAQ.map((item) => (
              <details
                key={item.question}
                className="group rounded-sm border border-cyan-proofeus/25 bg-noir-profond p-6 transition-colors hover:border-cyan-proofeus/50"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-semibold text-blanc-casse">
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="mt-1 flex-shrink-0 text-cyan-proofeus transition-transform group-open:rotate-45"
                  >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 4v12M4 10h12"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-gris-clair">
                  {item.reponse}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. FORMULAIRE DE CONTACT INTERNE — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Nous écrire
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
              Une réponse humaine, sous vingt-quatre heures.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Ce formulaire est traité en interne, dans notre infrastructure
              européenne. Aucun renvoi vers une messagerie externe, aucune
              transmission tierce.
            </p>
          </div>

          <div className="mt-14">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. CTAs — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-20 md:px-12 md:py-24"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.4rem, 2.6vw, 2rem)",
              lineHeight: 1.2,
            }}
          >
            Vous cherchez autre chose ?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/ecosysteme"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-5 py-2.5 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              L&apos;écosystème Proofeus®
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-5 py-2.5 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              Tarifs
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
