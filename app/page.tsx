import Link from "next/link";

/**
 * Landing Proofeus Authentic — Le Musée de la Confiance.
 *
 * Doctrine cinématographique 29 juillet 2026 soir : ce n'est plus
 * un site, c'est une institution. Chaque scroll = une salle du siège.
 * Silence, respiration, majesté. Références Christie's / Hermès /
 * Leica / Rolls-Royce.
 *
 * Structure :
 * 1. Hero — image musée + Le Sceau qui flotte + « L'authenticité a
 *    trouvé son emblème. »
 * 2. Chapitre 1 — La Toile
 * 3. Chapitre 2 — La Galerie
 * 4. Chapitre 3 — Le Coffre
 * 5. Chapitre 4 — La Succession
 * 6. Le Sceau révélé (technologie, seulement à la fin)
 *
 * Zéro mention NFT/blockchain/IA/QR avant la section technique
 * finale. Le client achète une émotion, pas une technologie.
 */
export default function AuthenticLanding() {
  return (
    <main>
      {/* HERO — image musée pleine largeur + phrase-déclaration */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden">
        {/* Image musée en fond, pleine largeur */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-musee.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Voile sombre bas pour lisibilité de la phrase */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 45%, rgba(5,8,16,0.65) 75%, rgba(5,8,16,0.95) 100%)",
          }}
        />

        {/* Phrase-déclaration en bas */}
        <div className="relative z-10 mx-auto mb-24 max-w-4xl px-6 text-center md:mb-32">
          <h1
            className="font-serif font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              lineHeight: 1.15,
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            }}
          >
            L&apos;authenticité a trouvé son emblème.
          </h1>

          {/* Indicateur scroll très discret */}
          <div className="mt-16 flex flex-col items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gris-clair/70">
              Entrer dans le siège
            </span>
            <span
              aria-hidden
              className="h-8 w-px animate-pulse bg-gradient-to-b from-cyan-proofeus/60 to-transparent"
              style={{ background: "linear-gradient(to bottom, var(--color-cyan-proofeus), transparent)" }}
            />
          </div>
        </div>
      </section>

      {/* CHAPITRE 1 — La Toile */}
      <ChapitreSection
        numero="I"
        salle="La Toile"
        phrase="Toute œuvre mérite une identité."
        imageAlt="Deux mains gantées de blanc tiennent une toile romantique dans son cadre doré ; Le Sceau apparaît en projection cyan au coin supérieur droit"
        imagePlaceholder="chapitre-1-toile"
        imageSrc="/chapitre-1-toile.png"
      />

      {/* CHAPITRE 2 — La Galerie */}
      <ChapitreSection
        numero="II"
        salle="La Galerie"
        phrase="L'authenticité précède la valeur."
        imageAlt="Silhouettes de collectionneurs dans une galerie luxueuse, Le Sceau flotte au centre"
        imagePlaceholder="chapitre-2-galerie"
        inverse
      />

      {/* CHAPITRE 3 — Le Coffre */}
      <ChapitreSection
        numero="III"
        salle="Le Coffre"
        phrase="Certaines choses traversent le temps."
        imageAlt="Un coffre-fort blindé d'institution ancienne, porte massive ouverte, Le Sceau flotte au centre du sanctuaire cuivré"
        imagePlaceholder="chapitre-3-coffre"
        imageSrc="/chapitre-3-coffre.png"
      />

      {/* CHAPITRE 4 — La Succession */}
      <ChapitreSection
        numero="IV"
        salle="La Succession"
        phrase="La confiance se transmet."
        imageAlt="Deux mains — une âgée en costume, une plus jeune — se rencontrent pour transmettre Le Sceau, cadres dorés flous en arrière-plan"
        imagePlaceholder="chapitre-4-succession"
        imageSrc="/chapitre-4-succession.png"
        inverse
      />

      {/* LE SCEAU RÉVÉLÉ — la technologie apparaît enfin, tout en bas */}
      <section className="relative overflow-hidden border-t border-gris-sombre px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/70">
            Le Sceau — dévoilé
          </p>
          <h2
            className="mt-6 text-center font-serif font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: 1.2,
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            }}
          >
            Ce que vous voyez flotter dans chaque salle
            <br />
            n&apos;est pas un logo. C&apos;est un objet.
          </h2>

          <div className="mt-20 grid gap-x-16 gap-y-12 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300/70">Cristal</p>
              <p className="mt-3 text-base leading-relaxed text-gris-clair">
                Verre optique haut de gamme légèrement teinté cyan. Sept couches
                superposées visibles à l&apos;œil nu, chacune portant une couche
                d&apos;information cryptographique.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300/70">Iris</p>
              <p className="mt-3 text-base leading-relaxed text-gris-clair">
                L&apos;iris humain gravé au centre est la signature de
                l&apos;auteur — une empreinte biométrique inaltérable, aussi
                unique qu&apos;une œuvre.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300/70">Gravures</p>
              <p className="mt-3 text-base leading-relaxed text-gris-clair">
                Sur l&apos;anneau intérieur, des micro-inscriptions inspirées des
                billets de banque et des passeports. Sur l&apos;anneau extérieur,
                les marques de sécurité d&apos;une monnaie officielle.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300/70">Registre</p>
              <p className="mt-3 text-base leading-relaxed text-gris-clair">
                Chaque Sceau est inscrit à vie dans un registre public consultable.
                Aucune œuvre certifiée ne peut être effacée de la mémoire.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300/70">Plaque compagnon</p>
              <p className="mt-3 text-base leading-relaxed text-gris-clair">
                Une plaque métallique gravée accompagne toujours Le Sceau. Elle
                porte le numéro d&apos;ordre, la date et la clé de vérification —
                jamais sur le Sceau, toujours à côté de lui.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300/70">Souveraineté</p>
              <p className="mt-3 text-base leading-relaxed text-gris-clair">
                Ancré sur une infrastructure européenne, sous droit européen.
                Vos données ne quittent jamais notre juridiction. Aucune tierce
                partie non-européenne n&apos;y a accès.
              </p>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center gap-4 text-center">
            <p className="max-w-xl text-lg italic leading-relaxed text-gris-clair">
              « Le Sceau Proofeus n&apos;est pas une image de marque. C&apos;est
              l&apos;objet même que nous produisons. »
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/artistes"
                className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
              >
                Sceller une œuvre
              </Link>
              <Link
                href="/registry"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--color-cyan-proofeus)" }}
              >
                Visiter le registre
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/**
 * Composant de section "chapitre" — image cinématographique pleine
 * hauteur d'un côté, phrase-déclaration de l'autre. Peut être
 * inversé (inverse=true) pour alterner la composition.
 *
 * Les vraies images (4 chapitres) sont à générer via ChatGPT/DALL-E.
 * En attendant, le composant affiche un placeholder cyan avec une
 * indication de contenu.
 */
function ChapitreSection({
  numero,
  salle,
  phrase,
  imageAlt,
  imagePlaceholder,
  imageSrc,
  inverse = false,
}: {
  numero: string;
  salle: string;
  phrase: string;
  imageAlt: string;
  imagePlaceholder: string;
  imageSrc?: string;
  inverse?: boolean;
}) {
  return (
    <section className="relative border-t border-gris-sombre">
      <div
        className={`mx-auto grid min-h-[70vh] max-w-7xl grid-cols-1 items-center md:grid-cols-2 ${inverse ? "md:grid-flow-dense" : ""}`}
      >
        {/* Image ou placeholder */}
        <div
          className={`relative min-h-[400px] overflow-hidden md:min-h-[600px] ${inverse ? "md:col-start-2" : ""}`}
          aria-label={imageAlt}
        >
          {imageSrc ? (
            <>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${imageSrc}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Voile latéral discret pour lier au texte sans écraser l'image */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: inverse
                    ? "linear-gradient(to left, rgba(10,15,28,0.55) 0%, rgba(10,15,28,0.15) 30%, transparent 60%)"
                    : "linear-gradient(to right, rgba(10,15,28,0.55) 0%, rgba(10,15,28,0.15) 30%, transparent 60%)",
                }}
              />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,15,28,0.9) 0%, rgba(20,30,50,0.7) 50%, rgba(5,8,16,0.95) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-30">
                  <div
                    className="mx-auto h-32 w-32 rounded-full blur-3xl"
                    style={{ background: "var(--color-cyan-proofeus)" }}
                  />
                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/60">
                    {imagePlaceholder}
                  </p>
                  <p className="mt-2 max-w-xs px-6 text-xs text-gris-clair/70">
                    {imageAlt}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Phrase-déclaration */}
        <div
          className={`px-6 py-20 md:px-16 md:py-32 ${inverse ? "md:col-start-1 md:row-start-1" : ""}`}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/70"
          >
            Chapitre {numero} · {salle}
          </p>
          <p
            className="mt-10 font-serif font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              lineHeight: 1.2,
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            }}
          >
            {phrase}
          </p>
        </div>
      </div>
    </section>
  );
}
