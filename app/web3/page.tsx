import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NFT : problème résolu. — Proofeus Authentic",
  description:
    "Le maillon humain manquant enfin soudé. Le NFT n'est plus l'œuvre. Il devient l'identité opposable de l'œuvre — signée par un humain vérifié, portée par un registre inaltérable.",
};

const SECTIONS: { titre: string; corps: string }[] = [
  {
    titre: "La fracture que personne n'a soudée",
    corps:
      "Le Web3 a promis la propriété numérique et l'a livrée. Mais il a laissé une fracture ouverte : rien, dans une blockchain, ne prouve que l'humain derrière le wallet est bien l'auteur de l'œuvre. Un même JPEG peut être minté cent fois par cent adresses différentes — et le marché doit croire, sans pouvoir vérifier. Proofeus Authentic vient sceller cette faille avec l'unique élément que la cryptographie seule ne peut fabriquer : la preuve d'humanité.",
  },
  {
    titre: "Ce que le Sceau change pour un NFT",
    corps:
      "Un NFT scellé par Proofeus Authentic n'est plus un fichier numérique parmi d'autres. Il devient l'identité opposable d'une œuvre — reliée à l'iris de son auteur, inscrite dans le registre public, protégée contre toute usurpation. Le collectionneur qui l'acquiert n'achète plus un pari sur l'authenticité. Il acquiert la certitude, gravée dans le même mouvement que le mint : cet humain existe, cette œuvre est de lui, cette provenance est inaltérable.",
  },
  {
    titre: "Une infrastructure neutre, ouverte à toutes les marketplaces",
    corps:
      "Proofeus Authentic ne vend pas d'œuvres. Elle ne prend pas de commission. Elle ne concurrence ni Foundation, ni SuperRare, ni Manifold, ni OpenSea. Elle leur offre le maillon qui leur manque : une couche de certification humaine, souveraine, sous droit européen, que chacune peut intégrer librement. Le Sceau des Origines — mille fragments d'histoire distribués aux premiers humains vérifiés — est la première pierre de cette infrastructure.",
  },
];

export default function Web3Page() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden">
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
              "linear-gradient(to bottom, transparent 40%, rgba(13,13,16,0.7) 75%, rgba(13,13,16,0.98) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto mb-24 max-w-4xl px-6 text-center md:mb-32">
          <p className="text-xs uppercase tracking-[0.32em] text-cyan-proofeus/85">
            Pour le monde Web3
          </p>
          <h1
            className="mt-4 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            NFT : problème résolu.
          </h1>
          <p
            className="mt-8 italic text-blanc-casse/85"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              lineHeight: 1.35,
            }}
          >
            « L'œuvre reste physique ou numérique. Le NFT n'est plus l'œuvre. Le NFT devient son identité. »
          </p>
        </div>
      </section>

      {/* CORPS */}
      <section className="border-t border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-14">
            {SECTIONS.map((section) => (
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
              Intégration API
            </Link>
          </div>

          {/* Retour Maison */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.28em] text-gris-clair transition-colors hover:text-cyan-proofeus"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
