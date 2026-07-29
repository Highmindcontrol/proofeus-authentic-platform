import Link from "next/link";
import Image from "next/image";

/**
 * Landing V1 Proofeus Authentic — « La Maison de l'Art Authentique ».
 *
 * Doctrine actée 29 juillet 2026 : Authentic couvre l'art physique
 * (galeries/musées/fondations) ET l'art numérique (Web3/NFT) sous un
 * même toit. Le TLD .art assume ce rôle unifié.
 *
 * Deux tunnels visibles dès le hero : Artistes & Galeries (physique
 * et numérique) + Web3 & NFT (spécifique Genesis / marketplaces).
 */
export default function AuthenticLanding() {
  return (
    <main className="min-h-screen">
      {/* HERO — « La Maison de l'Art Authentique » */}
      <section className="relative overflow-hidden px-6 pt-24 pb-32 md:px-12 md:pt-32 md:pb-40">
        {/* Halo cyan diffus derrière le titre */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[100px]"
          style={{ background: "var(--color-cyan-proofeus)" }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            Proofeus Authentic®
          </p>

          {/* Le Sceau Cristal — objet-marque immuable */}
          <div className="mx-auto mt-10 flex justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full opacity-40 blur-3xl"
                style={{ background: "var(--color-cyan-proofeus)" }}
              />
              <Image
                src="/sceau-canonique.png"
                alt="Le Sceau Cristal — Proofeus Authentic"
                width={280}
                height={280}
                priority
                className="relative"
              />
            </div>
          </div>

          <h1
            className="mt-10 font-semibold tracking-[-0.03em] text-blanc-casse"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.05,
            }}
          >
            La Maison
            <br />
            de l&apos;
            <span style={{ color: "var(--color-cyan-proofeus)" }}>
              Art Authentique
            </span>
            .
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gris-clair md:text-xl">
            L&apos;humain derrière l&apos;œuvre, toujours. Physique ou
            numérique, chaque œuvre certifiée par Proofeus porte la
            signature biométrique de son auteur — opposable, inaltérable,
            sous droit européen.
          </p>
          <p className="mt-6 text-sm italic leading-relaxed text-cyan-300/60 md:text-base">
            « L&apos;œuvre reste physique. Le NFT n&apos;est plus l&apos;œuvre.
            Le NFT devient son identité. »
          </p>
        </div>

        {/* Les 2 tunnels — dès le hero */}
        <div className="relative mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          <Link
            href="/artistes"
            className="group relative overflow-hidden rounded-sm border border-gris-sombre bg-noir-profond/60 p-8 transition-all hover:-translate-y-1 hover:border-cyan-proofeus/40"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-or-authentic)" }}
            >
              Vous êtes…
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-blanc-casse">
              Artiste ou galerie
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gris-clair">
              Certifiez vos œuvres physiques et numériques. Sceau
              d&apos;Auteur, offre Institutions pour galeries/musées/
              fondations, intégration Gaugista® pour mesurer les
              ressentis des visiteurs.
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-proofeus transition-transform group-hover:translate-x-1">
              Découvrir l&apos;offre Artistes & Galeries
              <span aria-hidden>→</span>
            </p>
          </Link>

          <Link
            href="/genesis"
            className="group relative overflow-hidden rounded-sm border border-gris-sombre bg-noir-profond/60 p-8 transition-all hover:-translate-y-1 hover:border-cyan-proofeus/40"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-or-authentic)" }}
            >
              Vous êtes…
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-blanc-casse">
              Dans le Web3 & NFT
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gris-clair">
              La certification humaine que le Web3 attendait. Sceau des
              Origines, Proofeus Genesis, marketplaces partenaires
              (Foundation, SuperRare, OpenSea…). « NFT&nbsp;: problème
              résolu. »
            </p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-proofeus transition-transform group-hover:translate-x-1">
              Découvrir le Sceau des Origines
              <span aria-hidden>→</span>
            </p>
          </Link>
        </div>
      </section>

      {/* Le problème commun — pour les 2 mondes */}
      <section className="border-y border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gris-clair">
            Ce que l&apos;IA a cassé
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Trois questions sans réponse.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gris-clair">
            L&apos;IA générative a rendu impossible la distinction entre
            humain et machine dans la création. Toile physique ou NFT,
            même fracture&nbsp;: qui a réellement fait cette œuvre&nbsp;?
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                titre: "Origine humaine",
                chapo:
                  "Un bot, une IA, ou un artiste ? Personne ne le sait. Aucune preuve d'humanité rattachée à l'œuvre, physique ou numérique.",
              },
              {
                num: "02",
                titre: "Authenticité du possesseur",
                chapo:
                  "Un compte Discord anonyme ou un acheteur inconnu qui rachète en salle. Rien ne garantit qui détient vraiment l'œuvre.",
              },
              {
                num: "03",
                titre: "Copies infinies",
                chapo:
                  "Right-click save pour le numérique, copie parfaite pour le physique via IA générative. La blockchain garantit l'unicité du jeton, pas de l'œuvre.",
              },
            ].map((f) => (
              <div
                key={f.num}
                className="rounded-sm border border-gris-sombre bg-noir-profond/60 p-6"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-or-authentic)" }}
                >
                  {f.num}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-blanc-casse">
                  {f.titre}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gris-clair">
                  {f.chapo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La proposition Maison */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            La proposition Proofeus Authentic
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Le maillon humain manquant.
            <br />
            <span style={{ color: "var(--color-cyan-proofeus)" }}>
              Nous l&apos;avons soudé.
            </span>
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-gris-clair">
            <p>
              Une toile de galerie ou un NFT sur Foundation deviennent une{" "}
              <strong className="text-blanc-casse">preuve d&apos;origine
              humaine</strong>, une <strong className="text-blanc-casse">preuve
              d&apos;authenticité biométrique</strong>, une{" "}
              <strong className="text-blanc-casse">preuve de propriété</strong>{" "}
              opposable.
            </p>
            <p>
              Le Sceau Proofeus — l&apos;identité biométrique multi-modale de
              l&apos;artiste, sous droit européen, zéro connaissance — est{" "}
              <strong className="text-blanc-casse">nativement attaché</strong>{" "}
              à l&apos;œuvre. La Maison garde la trace immuable pour
              l&apos;éternité, physique et numérique.
            </p>
            <p>
              C&apos;est la seule architecture au monde qui combine{" "}
              <strong className="text-blanc-casse">certification humaine
              multi-modale</strong> + <strong className="text-blanc-casse">zero-knowledge</strong>{" "}
              + <strong className="text-blanc-casse">souveraineté
              européenne</strong> + <strong className="text-blanc-casse">registre
              public unifié</strong> art physique et art numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Ce qu'abrite la Maison — 6 briques visibles */}
      <section
        className="border-y border-gris-sombre px-6 py-24 md:px-12 md:py-32"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(63,212,217,0.06) 0%, transparent 60%)",
        }}
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            Ce qu&apos;abrite la Maison
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Six briques, un seul toit.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titre: "Sceau d'Auteur",
                chapo:
                  "Certifie l'humain derrière chaque œuvre. Toile, sculpture, JPEG, vidéo — même Sceau, même promesse.",
                cta: "→ Voir les artistes",
                href: "/artistes",
              },
              {
                titre: "Offre Institutions",
                chapo:
                  "Cabinet certification pour galeries, musées, fondations. Sceaux d'Auteur illimités, protocole post-mortem 3 verrous.",
                cta: "→ Offre B2B galeries",
                href: "/galeries",
              },
              {
                titre: "Sceau des Origines",
                chapo:
                  "1 000 000 fragments Soul-Bound offerts aux 1er humains vérifiés. Trace historique, pas actif spéculatif.",
                cta: "→ Découvrir Genesis",
                href: "/genesis",
              },
              {
                titre: "Registre public unifié",
                chapo:
                  "Toutes les œuvres certifiées Proofeus, physiques et numériques, dans un seul registre consultable.",
                cta: "→ Explorer le registre",
                href: "/registry",
              },
              {
                titre: "Gaugista® intégré",
                chapo:
                  "Mesurez les ressentis des visiteurs devant chaque œuvre. En galerie ou en ligne, jauges multi-critères signées.",
                cta: "→ Découvrir Gaugista",
                href: "/gaugista",
              },
              {
                titre: "Marketplaces partenaires",
                chapo:
                  "Foundation, SuperRare, OpenSea, Manifold, Zora — le Sceau Proofeus s'intègre nativement dans leurs flux.",
                cta: "→ Voir les intégrations",
                href: "/marketplaces",
              },
            ].map((b) => (
              <Link
                key={b.titre}
                href={b.href}
                className="group flex flex-col rounded-sm border border-gris-sombre bg-noir-profond/60 p-6 transition-all hover:-translate-y-1 hover:border-cyan-proofeus/40"
              >
                <h3 className="text-lg font-semibold text-blanc-casse">
                  {b.titre}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gris-clair">
                  {b.chapo}
                </p>
                <p className="mt-6 text-xs font-semibold text-cyan-proofeus transition-transform group-hover:translate-x-1">
                  {b.cta}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gris-clair">
            Liste d&apos;attente
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Rejoignez la Maison en avant-première.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gris-clair">
            Nous préparons l&apos;ouverture publique. Artistes, galeries,
            collectionneurs Web3&nbsp;: laissez votre email pour être
            prévenus en priorité de l&apos;ouverture des certifications et
            du drop du Sceau des Origines.
          </p>
          <form className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="votre@email.fr"
              className="w-full max-w-sm rounded-full border border-gris-sombre bg-noir-profond px-5 py-3 text-sm text-blanc-casse placeholder:text-gris-clair/50 focus:border-cyan-proofeus/60 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Rejoindre
            </button>
          </form>
          <p className="mt-6 text-xs text-gris-clair/70">
            RGPD strict — vos données ne sont jamais revendues. Vous pouvez
            vous désinscrire en un clic.
          </p>
        </div>
      </section>

    </main>
  );
}
