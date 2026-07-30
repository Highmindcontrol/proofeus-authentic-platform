import type { Metadata } from "next";
import Link from "next/link";
import { PastilleCarousel } from "@/components/PastilleCarousel";

export const metadata: Metadata = {
  title: "Artistes — Proofeus Authentic®",
  description:
    "Aux peintres, sculpteurs, photographes, illustrateurs, artistes numériques. Le Sceau d'auteur Proofeus® relie chacune de vos œuvres à votre iris — signature biométrique multimodale, opposable à vie, transmissible.",
};

const ETAPES: { titre: string; texte: string }[] = [
  {
    titre: "Vous enrôlez votre biométrie",
    texte:
      "Iris, morphologie, voix, paume et pouls sont capturés en quelques minutes par l'application Proofeus®. Ces empreintes ne quittent jamais votre appareil — seule leur empreinte cryptographique parvient au registre.",
  },
  {
    titre: "Vous scellez votre œuvre",
    texte:
      "Photographie haute définition pour une toile, fichier natif pour une œuvre numérique, scan pour une sculpture. Vous consignez ses dimensions, sa technique, sa date. Le Sceau s'appose. La plaque compagnon numérotée est générée.",
  },
  {
    titre: "Le monde peut vérifier",
    texte:
      "Toute personne au monde peut vérifier en trois secondes qui a créé cette œuvre, quand, et à qui elle appartient aujourd'hui. Le registre est public, inaltérable, opposable devant un tribunal.",
  },
];

const BENEFICES: { titre: string; corps: string }[] = [
  {
    titre: "Votre iris devient votre signature à vie",
    corps:
      "Une signature manuscrite peut être imitée, une signature IA peut être générée. Votre iris fusionné avec vos quatre autres empreintes ne peut ni être copié, ni reproduit — même par vous.",
  },
  {
    titre: "Anti-contrefaçon plastique",
    corps:
      "L'empreinte cryptographique de votre œuvre — dérivée de ses dimensions, matériaux, technique et photo HD — rend toute imitation immédiatement détectable, quelle que soit la qualité de la copie.",
  },
  {
    titre: "Anti-œuvre générée par IA",
    corps:
      "Une image produite par une intelligence artificielle ne pourra plus se faire passer pour l'une de vos œuvres. Seul un humain biométriquement vérifié peut sceller — les IA, par définition, ne le peuvent pas.",
  },
  {
    titre: "Valorisation renforcée",
    corps:
      "Le marché de l'art paie plus pour ce qui est authentifié. Une œuvre scellée par Proofeus® entre dans le registre public — collectionneurs, galeries, maisons de vente peuvent vérifier sa provenance à la seconde.",
  },
  {
    titre: "Transmission garantie",
    corps:
      "Le Sceau reste attaché à votre œuvre pour toujours. Vos héritiers, vos ayant-droits, les musées qui recevront un jour votre travail — tous auront la preuve inaltérable de votre paternité.",
  },
  {
    titre: "Un registre public à vie",
    corps:
      "Chaque Sceau émis est inscrit dans un registre public consultable par quiconque. Aucune œuvre certifiée ne peut être effacée ou modifiée — Proofeus Authentic® elle-même n'en a pas le pouvoir.",
  },
];

const MEDIUMS: string[] = [
  "Peinture",
  "Sculpture",
  "Photographie",
  "Illustration",
  "Art numérique",
  "Vidéo et performance",
];

export default function ArtistesPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — image atelier + phrase-déclaration
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/salle-artistes.png')",
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
            Aux créateurs
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
              Chaque œuvre commence par un geste,
            </span>
            <span className="block md:whitespace-nowrap">
              Proofeus
              <sup
                style={{
                  fontSize: "0.32em",
                  verticalAlign: "0.9em",
                  fontWeight: 400,
                  marginLeft: "0.05em",
                }}
              >
                ®
              </sup>{" "}
              protège ce qui naît ici.
            </span>
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. INTRO ANTHRACITE — pourquoi les artistes ont besoin du Sceau
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            Ce que Proofeus Authentic® vous offre
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
            Le Sceau d&apos;auteur — votre signature biométrique multimodale,
            gravée sur chacune de vos œuvres, à vie.
          </h2>
          <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
            Une signature manuscrite peut être imitée. Un certificat papier
            peut être falsifié. Une image générée par IA peut, aujourd&apos;hui,
            se faire passer pour l&apos;œuvre d&apos;un peintre — et rien, à
            l&apos;échelle du marché, ne permet plus de distinguer les deux.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
            Proofeus Authentic® relie chacune de vos œuvres à ce que vous
            seul possédez et qu&apos;aucune machine ne pourra jamais
            reproduire : la fusion cryptographique de votre iris, de votre
            morphologie, de votre voix, de votre paume et de votre pouls.
            <br />
            Une signature vivante, opposable, transmissible.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. COMMENT ÇA SE PASSE — bandeau noir + 3 étapes
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
              Trois gestes suffisent.
            </h2>
          </div>

          {/* Timeline horizontale sur desktop, verticale sur mobile */}
          <div className="relative mt-20">
            {/* Ligne cyan reliant les 3 ronds — desktop uniquement */}
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
                  {/* Rond numéroté avec halo cyan */}
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

                  {/* Titre — forcé sur une seule ligne sur desktop */}
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

                  {/* Description courte */}
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
          4. BÉNÉFICES CONCRETS — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Ce que le Sceau change pour vous
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
          5. TOUS LES MÉDIUMS — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            Pour tous les médiums
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
            Un même Sceau, tous les médiums, physique et numérique.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
            Le Sceau d&apos;auteur couvre indifféremment la toile posée sur
            un chevalet et le fichier généré sur une tablette graphique.
            Seul le format des métadonnées change ; la garantie
            d&apos;authenticité reste identique.
          </p>

          <div className="mx-auto mt-14 flex flex-wrap justify-center gap-3">
            {MEDIUMS.map((m) => (
              <span
                key={m}
                className="rounded-full border border-cyan-proofeus/40 bg-noir-profond px-5 py-2 text-sm text-blanc-casse"
              >
                {m}
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
            Prêt à sceller votre premier œuvre ?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/certifier"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Créer mon Sceau d&apos;auteur
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              Découvrir les tarifs
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
