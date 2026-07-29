import Link from "next/link";

/**
 * Landing V1 Proofeus Authentic — placeholder narratif « NFT : problème résolu ».
 *
 * Contient : hero manifeste, les 3 fractures du NFT actuel, la proposition
 * Proofeus (le maillon humain), teaser Sceau des Origines / Genesis, waitlist.
 *
 * À enrichir en Phase 2 (galerie artistes témoins, marketplaces partenaires,
 * blog Voix Authentic). En Phase 3, bascule sur authentic.proofeus.com avec
 * registre public compteur temps réel.
 */
export default function AuthenticLanding() {
  return (
    <main className="min-h-screen">
      {/* HERO manifeste */}
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
          <h1
            className="mt-6 font-semibold tracking-[-0.03em] text-blanc-casse"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 1.02,
            }}
          >
            NFT&nbsp;: problème
            <br />
            <span style={{ color: "var(--color-cyan-proofeus)" }}>
              résolu.
            </span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gris-clair md:text-xl">
            Un NFT, un humain, une preuve. Nous ne créons pas de NFT —
            nous certifions <em>l&apos;humain</em> derrière chaque œuvre
            numérique.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/genesis"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-proofeus px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Découvrir le Sceau des Origines
              <span aria-hidden>→</span>
            </Link>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              Rejoindre la liste d&apos;attente
            </a>
          </div>
        </div>
      </section>

      {/* Les 3 fractures */}
      <section className="border-y border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gris-clair">
            Le NFT 2021-2024 s&apos;est cassé sur trois fractures
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Trois questions sans réponse.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                titre: "Origine humaine",
                chapo:
                  "Un bot ou un artiste ? Personne ne sait qui a réellement créé l'œuvre. Aucune preuve d'humanité côté créateur.",
              },
              {
                num: "02",
                titre: "Authenticité du possesseur",
                chapo:
                  "Un compte Discord anonyme n'est pas un humain vérifié. Rien ne garantit que celui qui détient le jeton est bien celui qu'il prétend être.",
              },
              {
                num: "03",
                titre: "Copies infinies",
                chapo:
                  "Right-click save. La blockchain garantit l'unicité du jeton, pas de l'œuvre. La copie visuelle reste triviale.",
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
          <p className="mt-12 text-center text-lg italic text-gris-clair">
            Résultat : bulle spéculative → crash → discrédit du secteur.
            <br />
            Les galeries et artistes traditionnels rejettent en bloc.
          </p>
        </div>
      </section>

      {/* La proposition */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            La proposition Proofeus Authentic
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Le maillon humain manquant du Web3.
            <br />
            <span style={{ color: "var(--color-cyan-proofeus)" }}>
              Nous l&apos;avons soudé.
            </span>
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-gris-clair">
            <p>
              Un NFT n&apos;est plus qu&apos;un jeton spéculatif — il devient
              une <strong className="text-blanc-casse">preuve d&apos;origine
              humaine</strong>, une <strong className="text-blanc-casse">preuve
              d&apos;authenticité biométrique</strong>, une{" "}
              <strong className="text-blanc-casse">preuve de propriété</strong>{" "}
              opposable.
            </p>
            <p>
              Le Sceau Proofeus — l&apos;identité biométrique multi-modale de
              l&apos;artiste, sous droit européen, zéro connaissance — est{" "}
              <strong className="text-blanc-casse">nativement attaché</strong>{" "}
              au NFT. La blockchain garde la trace immuable. Le NFT reste
              transférable, mais l&apos;humain derrière ne change plus.
            </p>
            <p>
              C&apos;est la seule architecture au monde qui combine{" "}
              <strong className="text-blanc-casse">certification humaine
              multi-modale</strong> + <strong className="text-blanc-casse">zero-knowledge</strong>{" "}
              + <strong className="text-blanc-casse">souveraineté
              européenne</strong> + <strong className="text-blanc-casse">vitrine
              SEO neutre</strong> + <strong className="text-blanc-casse">partenariats
              marketplaces</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Teaser Genesis */}
      <section
        className="border-y border-gris-sombre px-6 py-24 md:px-12 md:py-32"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(63,212,217,0.08) 0%, transparent 60%)",
        }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
            Proofeus Genesis®
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Le Sceau des Origines.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-gris-clair">
            Une œuvre unique, un million de fragments, un million d&apos;humains
            vérifiés. Chaque premier utilisateur reçoit à vie son numéro :{" "}
            <em className="text-blanc-casse">
              « Vous êtes le 237 491ᵉ humain vérifié par Proofeus. »
            </em>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gris-clair">
            Pas un NFT spéculatif. Une{" "}
            <span
              style={{ color: "var(--color-or-authentic)" }}
              className="font-semibold"
            >
              trace historique
            </span>
            . Soul-Bound, non-transférable, sans valeur monétaire de rachat.
          </p>
          <Link
            href="/genesis"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-proofeus/60 px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ color: "var(--color-cyan-proofeus)" }}
          >
            Découvrir Genesis
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gris-clair">
            Liste d&apos;attente
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Soyez parmi les premiers témoins de la fondation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gris-clair">
            Nous préparons l&apos;ouverture publique. Laissez votre email pour
            recevoir en avant-première l&apos;annonce du drop du Sceau des
            Origines et l&apos;accès prioritaire au registre public.
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

      {/* Footer sobre */}
      <footer className="border-t border-gris-sombre px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-xs text-gris-clair md:flex-row md:items-center">
          <p>
            © Proofeus Authentic® — édité par Ataraxis IA. Marque INPI en
            cours de dépôt.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://proofeus.com"
              className="hover:text-cyan-proofeus"
            >
              proofeus.com ↗
            </a>
            <a
              href="https://verbalock.com"
              className="hover:text-cyan-proofeus"
            >
              verbalock.com ↗
            </a>
            <a
              href="https://ataraxis.group"
              className="hover:text-cyan-proofeus"
            >
              ataraxis.group ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
