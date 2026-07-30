import type { Metadata } from "next";
import Link from "next/link";
import { PastilleCarousel } from "@/components/PastilleCarousel";

export const metadata: Metadata = {
  title: "Web3 & NFT — Proofeus Authentic®",
  description:
    "Le maillon humain manquant du Web3 enfin soudé. Le NFT n'est plus l'œuvre, il devient son identité opposable. Certification humaine multimodale, registre public, intégrable à toutes les marketplaces.",
};

const ETAPES: { titre: string; texte: string }[] = [
  {
    titre: "L'artiste s'enrôle",
    texte:
      "L'artiste crée son Sceau d'auteur via l'application Proofeus®. Enrôlement biométrique multimodal — iris, morphologie, voix, paume, pouls — en quelques minutes.",
  },
  {
    titre: "L'artiste scelle son NFT",
    texte:
      "Au moment du mint, l'empreinte cryptographique du NFT et le Sceau d'auteur sont liés à jamais. L'inscription au registre public est instantanée.",
  },
  {
    titre: "La marketplace vérifie",
    texte:
      "Foundation, SuperRare, OpenSea, Manifold — n'importe quelle marketplace peut afficher le badge « Verified Human Author » à côté du NFT, sans intégration lourde.",
  },
];

const BENEFICES: { titre: string; corps: string }[] = [
  {
    titre: "Preuve d'humanité inaltérable",
    corps:
      "Rien, sur une blockchain, ne prouve jusqu'ici que l'humain derrière le wallet est bien l'auteur. Le Sceau Proofeus® l'atteste — biométriquement, cryptographiquement, à vie.",
  },
  {
    titre: "Anti-mint frauduleux",
    corps:
      "Un même JPEG peut être minté cent fois par cent adresses différentes. Seul un humain vérifié biométriquement peut sceller — les IA et les usurpateurs ne le peuvent pas.",
  },
  {
    titre: "Intégration marketplaces",
    corps:
      "Un SDK simple, gratuit, ouvert. Foundation, SuperRare, Manifold, Zora, OpenSea, Rarible peuvent intégrer le Sceau en quelques lignes de code — sans commission, sans dépendance.",
  },
  {
    titre: "Compatibilité universelle",
    corps:
      "ERC-721, ERC-1155, Base, Ethereum, Polygon, Zora Network. Le Sceau s'attache à n'importe quel token, sur n'importe quelle chaîne compatible EVM.",
  },
  {
    titre: "Registre commun avec le physique",
    corps:
      "Un artiste qui scelle une toile physique et un NFT partage la même identité biométrique. Le collectionneur retrouve toutes ses œuvres, tous médiums, dans un seul registre.",
  },
  {
    titre: "Souveraineté européenne",
    corps:
      "Infrastructure hébergée en Europe, sous droit européen. Les données biométriques ne quittent jamais l'appareil de l'artiste — seule leur dérivation cryptographique voyage.",
  },
];

const MARKETPLACES: { nom: string; segment: string }[] = [
  { nom: "Foundation", segment: "Premium curated" },
  { nom: "SuperRare", segment: "Fine art digital" },
  { nom: "Manifold", segment: "Créateurs autonomes" },
  { nom: "Zora", segment: "Open protocol" },
  { nom: "OpenSea", segment: "Généraliste" },
  { nom: "Rarible", segment: "Multi-chain" },
];

export default function Web3Page() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — image NFT en galerie premium + titre
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/salle-web3.png')",
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
            Pour le monde Web3
          </p>
          <h1
            className="mt-6 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.6rem, 3.4vw, 3rem)",
              lineHeight: 1.2,
              textShadow: "0 2px 24px rgba(0,0,0,0.65)",
            }}
          >
            <span className="block md:whitespace-nowrap">
              NFT : problème résolu.
            </span>
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. INTRO ANTHRACITE — la fracture du Web3
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            La fracture que personne n&apos;a soudée
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
            Le Web3 a livré la propriété numérique.
            <br />
            Il n&apos;a jamais livré l&apos;humain.
          </h2>
          <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
            Rien, dans une blockchain, ne prouve que l&apos;humain derrière
            le wallet est bien l&apos;auteur de l&apos;œuvre. Un même JPEG
            peut être minté cent fois par cent adresses différentes.
            L&apos;IA générative peut créer, minter et signer sans qu&apos;un
            humain n&apos;ait jamais tenu de pinceau. Le marché doit
            croire, sans pouvoir vérifier.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
            Proofeus Authentic® vient sceller cette faille avec l&apos;unique
            élément que la cryptographie seule ne peut fabriquer : la
            preuve d&apos;humanité. L&apos;œuvre reste physique ou
            numérique. Le NFT n&apos;est plus l&apos;œuvre. Le NFT devient
            son identité.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. COMMENT ÇA SE PASSE — bandeau noir + timeline
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
              De l&apos;enrôlement au badge sur marketplace.
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
              Ce que le Sceau change pour le Web3
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
              Six bénéfices, pour l&apos;artiste et pour la marketplace.
            </h2>
          </div>

          <div className="mt-16">
            <PastilleCarousel items={BENEFICES} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. MARKETPLACES CIBLES — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            Intégrable partout
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
            Aucune marketplace n&apos;est concurrente. Toutes sont partenaires.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
            Proofeus Authentic® ne vend pas d&apos;œuvres. Ne prend pas de
            commission. Ne concurrence aucune plateforme. Nous offrons
            gratuitement à toutes les marketplaces le maillon humain qui
            leur manque — une couche de certification neutre, souveraine,
            que chacune peut intégrer en quelques lignes de code.
          </p>

          <div className="mx-auto mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {MARKETPLACES.map((m) => (
              <div
                key={m.nom}
                className="rounded-sm border border-cyan-proofeus/25 bg-noir-profond px-6 py-5 text-left"
              >
                <p className="text-sm font-semibold text-blanc-casse">
                  {m.nom}
                </p>
                <p className="mt-1 text-xs text-gris-clair">{m.segment}</p>
              </div>
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
            Sceller ou intégrer ?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/genesis"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Découvrir le Sceau des Origines
            </Link>
            <Link
              href="/marketplaces"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              Marketplaces partenaires
            </Link>
            <Link
              href="/developers"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              SDK Développeurs
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
