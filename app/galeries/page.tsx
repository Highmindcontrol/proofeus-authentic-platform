import type { Metadata } from "next";
import Link from "next/link";
import { PastilleCarousel } from "@/components/PastilleCarousel";
import { AppStoreBadges } from "@/components/AppStoreBadges";

export const metadata: Metadata = {
  title: "Galeries & Institutions — Proofeus Authentic®",
  description:
    "Aux galeries, musées, fondations et maisons de vente. Un cabinet de certification humaine dédié aux professionnels du marché de l'art. Sceaux d'auteur illimités, protocole post-mortem, intégration Gaugista®.",
};

const ETAPES: { titre: string; texte: string }[] = [
  {
    titre: "Vos artistes s'enrôlent",
    texte:
      "Vos artistes créent leur Sceau via l'application Proofeus®. Enrôlement biométrique multimodal en quelques minutes, données conservées uniquement sur leur appareil.",
  },
  {
    titre: "Vous scellez chaque œuvre",
    texte:
      "Chaque toile, sculpture ou photographie exposée reçoit son Sceau et sa plaque compagnon numérotée. L'inscription au registre public est instantanée.",
  },
  {
    titre: "Vos collectionneurs vérifient",
    texte:
      "En salle, un QR de vérification à côté de chaque œuvre. Le collectionneur peut vérifier auteur, provenance et historique en trois secondes, sans intermédiaire.",
  },
];

const BENEFICES: { titre: string; corps: string }[] = [
  {
    titre: "Confiance collectionneurs restaurée",
    corps:
      "Le collectionneur qui contemple une œuvre scellée n'a pas à croire — il peut vérifier. Le doute quitte la salle de vente.",
  },
  {
    titre: "Sceaux d'auteur illimités",
    corps:
      "Formule institution : vos artistes exposés reçoivent tous leur Sceau, sans quota. Un tarif dégressif indexé sur le volume d'œuvres certifiées annuellement.",
  },
  {
    titre: "Protocole post-mortem 3 verrous",
    corps:
      "Pour les artistes défunts ou les œuvres anciennes, un protocole d'authentification à trois verrous — expertise + provenance documentée + validation ayants-droit — permet d'apposer un Sceau retrospectif opposable.",
  },
  {
    titre: "Traçabilité des cessions",
    corps:
      "Chaque changement de propriétaire est inscrit dans le registre. La chaîne complète — de l'atelier à la vente actuelle — reste consultable, vérifiable, opposable devant tribunal.",
  },
  {
    titre: "Interface conservateur",
    corps:
      "Un tableau de bord dédié aux directeurs de galerie et conservateurs de musée : gestion des Sceaux, préparation des ventes, archives, statistiques de vérification.",
  },
  {
    titre: "Intégration Gaugista®",
    corps:
      "Module optionnel : mesurez les ressentis anonymes de vos visiteurs sur chaque œuvre exposée. Une double lecture — objective (Sceau) et subjective (Gaugista®) — que le marché de l'art n'a jamais eue.",
  },
];

const INSTITUTIONS: string[] = [
  "Galeries contemporaines",
  "Musées publics et privés",
  "Fondations d'art",
  "Maisons de vente aux enchères",
  "Cabinets d'expertise",
  "Foires internationales",
];

export default function GaleriesPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — image atelier création + phrase
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/salle-galeries.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,16,0.35) 0%, rgba(13,13,16,0.55) 45%, rgba(13,13,16,0.5) 55%, rgba(13,13,16,0.95) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus/85">
            Aux galeries, musées et fondations
          </p>
          <h1
            className="mt-6 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 3.4vw, 3rem)",
              lineHeight: 1.2,
              textShadow: "0 2px 24px rgba(0,0,0,0.65)",
            }}
          >
            <span className="block md:whitespace-nowrap">
              Le marché de l&apos;art a trouvé son standard.
            </span>
          </h1>
        </div>

        {/* Badges App Store / Google Play — pied du hero, centré */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 px-6 md:bottom-12">
          <AppStoreBadges compact />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. INTRO ANTHRACITE
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            L&apos;offre Institutions
          </p>
          <h2
            className="mx-auto mt-6 max-w-3xl font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
              lineHeight: 1.2,
            }}
          >
            Un cabinet de certification humaine dédié aux professionnels du
            marché de l&apos;art.
          </h2>
          <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
            Le marché de l&apos;art repose sur une convention silencieuse :
            ce qui est authentifié peut être valorisé. Depuis toujours, cette
            authentification passait par des experts humains, des certificats
            papier, une confiance accordée aux maisons. À l&apos;ère
            post-IA, ces garanties ne suffisent plus.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
            Proofeus Authentic® vous offre la couche de certification que le
            marché attendait : biométrique, multimodale, inscrite dans un
            registre public inaltérable. Vos artistes scellent leur œuvre.
            Vos collectionneurs achètent la certitude.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. COMMENT ÇA SE PASSE — bandeau noir + timeline horizontale
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Comment ça se passe
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
              Trois étapes, un accompagnement.
            </h2>
          </div>

          <div className="relative mt-20">
            <div
              aria-hidden
              className="absolute left-[16%] right-[16%] top-8 hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(63,212,217,0.35) 15%, rgba(63,212,217,0.35) 85%, transparent 100%)",
              }}
            />

            <div className="grid gap-14 md:grid-cols-3 md:gap-8">
              {ETAPES.map((etape, i) => (
                <div
                  key={etape.titre}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-full opacity-40 blur-2xl"
                      style={{ background: "var(--color-cyan-proofeus)" }}
                    />
                    <div
                      className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-proofeus/60 bg-noir-profond"
                      style={{
                        boxShadow:
                          "0 8px 24px -8px rgba(63,212,217,0.45), inset 0 0 20px rgba(63,212,217,0.1)",
                      }}
                    >
                      <span
                        className="font-light text-cyan-proofeus"
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                          fontSize: "1.75rem",
                          lineHeight: 1,
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="mt-6 font-light text-blanc-casse md:whitespace-nowrap"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                      fontSize: "clamp(1.15rem, 1.7vw, 1.45rem)",
                      lineHeight: 1.25,
                    }}
                  >
                    {etape.titre}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-gris-clair md:text-base">
                    {etape.texte}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. BÉNÉFICES CARROUSEL — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Ce que le Sceau change pour votre institution
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
              Six bénéfices, concrets et immédiats.
            </h2>
          </div>

          <div className="mt-16">
            <PastilleCarousel items={BENEFICES} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. TYPES D'INSTITUTIONS — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            Pour toutes les institutions du marché
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
            Un standard commun à l&apos;ensemble de la chaîne de valeur.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
            Que vous exposiez des artistes émergents ou que vous conserviez
            des collections historiques, Proofeus Authentic® s&apos;adapte
            aux formats et aux volumes de votre institution.
          </p>

          <div className="mx-auto mt-14 flex flex-wrap justify-center gap-3">
            {INSTITUTIONS.map((i) => (
              <span
                key={i}
                className="rounded-full border border-cyan-proofeus/40 bg-noir-profond px-5 py-2 text-sm text-blanc-casse"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. CTAs — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
              lineHeight: 1.2,
            }}
          >
            Prêt à faire de votre institution une référence ?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Demander un rendez-vous
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              Tarifs Institutions
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
