import type { Metadata } from "next";
import Link from "next/link";
import { PastilleCarousel } from "@/components/PastilleCarousel";
import { RegistrySearch } from "@/components/RegistrySearch";
import { AppStoreBadges } from "@/components/AppStoreBadges";

export const metadata: Metadata = {
  title: "Le Registre — Proofeus Authentic®",
  description:
    "Le grand livre public de toutes les œuvres scellées. Consultable à vie, inaltérable, souverain. Chaque œuvre certifiée par Proofeus Authentic® y figure — numéro d'ordre, empreinte biométrique de l'auteur, historique complet.",
};

const ETAPES: { titre: string; texte: string }[] = [
  {
    titre: "Une œuvre est scellée",
    texte:
      "L'artiste appose son Sceau. L'empreinte cryptographique de l'œuvre et sa plaque compagnon numérotée sont générées instantanément.",
  },
  {
    titre: "L'inscription est automatique",
    texte:
      "L'œuvre rejoint le Registre à la seconde même du scellage. Numéro d'ordre chronologique, date exacte, auteur vérifié biométriquement — tout est consigné.",
  },
  {
    titre: "Le monde peut consulter",
    texte:
      "Toute personne, partout, peut vérifier l'authenticité d'une œuvre en trois secondes — auteur, date, historique des propriétaires, chaîne complète.",
  },
];

const CONTENUS: { titre: string; corps: string }[] = [
  {
    titre: "Numéro d'ordre à vie",
    corps:
      "Chaque œuvre reçoit un numéro chronologique unique et permanent, gravé dans la plaque compagnon. Une œuvre = un numéro, à jamais.",
  },
  {
    titre: "Signature biométrique de l'auteur",
    corps:
      "L'empreinte cryptographique dérivée des cinq empreintes multimodales de l'artiste (iris, morphologie, voix, paume, pouls) — signature vivante inimitable.",
  },
  {
    titre: "Empreinte cryptographique de l'œuvre",
    corps:
      "Dimensions, technique, matériaux, photo haute définition, fichier natif : tout ce qui rend l'œuvre unique est encodé dans une empreinte immuable.",
  },
  {
    titre: "Chaîne complète des propriétaires",
    corps:
      "De l'atelier à la vente actuelle, chaque changement de main est inscrit. La provenance est reconstituable à la seconde, sans intermédiaire.",
  },
  {
    titre: "Date exacte de scellage",
    corps:
      "Horodatage cryptographique indiscutable, opposable devant tout tribunal. Ni antidatable, ni contestable, ni modifiable.",
  },
  {
    titre: "QR de vérification publique",
    corps:
      "Un QR unique par œuvre, à côté de la plaque compagnon. Trois secondes suffisent au collectionneur, à l'expert ou au juge pour tout vérifier.",
  },
];

const GARANTIES: { titre: string; corps: string }[] = [
  {
    titre: "Ouvert à tous, à vie",
    corps:
      "Le Registre est consultable par toute personne au monde, sans compte, sans frais. Souveraineté informationnelle absolue.",
  },
  {
    titre: "Inaltérable",
    corps:
      "Aucune entrée ne peut être effacée ou modifiée — Proofeus Authentic® elle-même n'en a pas le pouvoir. La mémoire du marché de l'art est intouchable.",
  },
  {
    titre: "Souveraineté européenne",
    corps:
      "Infrastructure hébergée en Europe, sous droit européen. Aucune juridiction étrangère ne peut exiger la modification ou la suppression d'entrées.",
  },
  {
    titre: "Survivance de la maison",
    corps:
      "Le Registre survit à Proofeus Authentic® elle-même. Une architecture décentralisée garantit que même la disparition de la société ne peut faire disparaître les entrées.",
  },
  {
    titre: "Recherche multi-critères",
    corps:
      "Rechercher par auteur, par période, par technique, par galerie, par numéro. Le catalogue mondial de l'art certifié, accessible en langage naturel.",
  },
  {
    titre: "Attestation opposable",
    corps:
      "Chaque entrée peut être imprimée en attestation certifiée, opposable devant tribunal, notaire, assureur ou administration fiscale.",
  },
];

export default function RegistryPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — image grand livre-registre + titre
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/salle-registry.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,16,0.4) 0%, rgba(13,13,16,0.55) 45%, rgba(13,13,16,0.5) 55%, rgba(13,13,16,0.95) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus/85">
            Le Registre
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
              Le grand livre public des œuvres scellées.
            </span>
          </h1>

          {/* Moteur de recherche direct dans le hero */}
          <div className="mt-8">
            <RegistrySearch />
          </div>
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
            La mémoire du marché de l&apos;art
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
            Ce que nous scellons aujourd&apos;hui doit pouvoir être vérifié
            dans un siècle.
          </h2>
          <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
            Les certificats papier jaunissent, se perdent, se falsifient.
            Les archives brûlent. Les héritiers meurent. Les galeries
            ferment. Depuis toujours, la mémoire du marché de l&apos;art
            reposait sur des institutions fragiles et des documents
            périssables.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
            Le Registre Proofeus Authentic® change la nature même de cette
            mémoire. Public, inaltérable, souverain, décentralisé — il
            survit aux modes, aux régimes, à la disparition même de
            l&apos;entité qui l&apos;a conçu. C&apos;est l&apos;engagement
            solennel que nous prenons à chaque œuvre scellée.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. COMMENT ÇA FONCTIONNE — bandeau noir + timeline
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Comment ça fonctionne
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
              De l&apos;atelier au Registre, en une seconde.
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
          4. CE QUE CONTIENT CHAQUE ENTRÉE — carrousel anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Ce que contient chaque entrée
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
              Six informations gravées à vie, pour chaque œuvre.
            </h2>
          </div>

          <div className="mt-16">
            <PastilleCarousel items={CONTENUS} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. GARANTIES DU REGISTRE — bandeau noir + carrousel
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Nos six garanties
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
              Un engagement solennel, à vie.
            </h2>
          </div>

          <div className="mt-16">
            <PastilleCarousel items={GARANTIES} />
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
            Prêt à explorer le Registre ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
            La consultation est libre, gratuite et anonyme. Tout le monde
            peut vérifier n&apos;importe quelle œuvre certifiée, à tout
            moment.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/certifier"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Ouvrir le Registre
            </Link>
            <Link
              href="/artistes"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              Sceller une œuvre
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
