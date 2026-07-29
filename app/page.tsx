import Link from "next/link";

/**
 * Landing Proofeus Authentic — La Maison.
 *
 * Structure minimaliste (2-3 écrans max) :
 * 1. Hero — image musée + phrase-déclaration
 * 2. Les 4 Salles — grille horizontale de 4 cartes cliquables
 *    qui mènent chacune vers une page dédiée (/salle/la-toile,
 *    /salle/la-galerie, /salle/le-coffre, /salle/la-succession)
 * 3. Le Sceau révélé — section technique (dévoilée en dernier)
 *
 * Doctrine : peu de scroll, pages dédiées derrière chaque salle,
 * vocabulaire technique uniquement dans la dernière section.
 */
export default function AuthenticLanding() {
  return (
    <main>
      {/* HERO — image musée pleine hauteur + phrase-déclaration */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-musee.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 45%, rgba(5,8,16,0.65) 75%, rgba(5,8,16,0.95) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto mb-24 max-w-4xl px-6 text-center md:mb-32">
          <h1
            className="font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              lineHeight: 1.15,
            }}
          >
            L&apos;authenticité a trouvé son emblème.
          </h1>

          <div className="mt-16 flex flex-col items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gris-clair/70">
              Entrer dans les salles
            </span>
            <span
              aria-hidden
              className="h-8 w-px animate-pulse"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-cyan-proofeus), transparent)",
              }}
            />
          </div>
        </div>
      </section>

      {/* LES 4 SALLES — grille horizontale de cartes cliquables */}
      <section className="border-t border-gris-sombre px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/70">
              La visite
            </p>
            <h2
              className="mt-4 font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Quatre salles. Un même Sceau.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SALLES.map((salle) => (
              <SalleCard key={salle.href} {...salle} />
            ))}
          </div>
        </div>
      </section>

      {/* LE SCEAU RÉVÉLÉ — section technique en dernier */}
      <section className="relative overflow-hidden border-t border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/70">
            Le Sceau — dévoilé
          </p>
          <h2
            className="mt-6 text-center font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
            }}
          >
            Ce que vous voyez flotter dans chaque salle
            <br />
            n&apos;est pas un logo. C&apos;est un objet.
          </h2>

          <div className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-2 md:mt-20">
            {TECHNIQUE.map((item) => (
              <div key={item.titre}>
                <p className="text-xs uppercase tracking-widest text-cyan-300/70">
                  {item.titre}
                </p>
                <p className="mt-3 text-base leading-relaxed text-gris-clair">
                  {item.chapo}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center gap-6 text-center">
            <p className="max-w-xl text-lg italic leading-relaxed text-gris-clair">
              « Le Sceau Proofeus n&apos;est pas une image de marque. C&apos;est
              l&apos;objet même que nous produisons. »
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/certifier"
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
 * Carte d'une salle — image en background, overlay sombre pour
 * lisibilité, numéro romain + nom + phrase-déclaration en overlay.
 * Effet hover : léger scale + overlay plus léger.
 */
function SalleCard({
  numero,
  nom,
  phrase,
  href,
  image,
}: {
  numero: string;
  nom: string;
  phrase: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex aspect-[4/5] overflow-hidden rounded-sm border border-gris-sombre bg-noir transition-all hover:-translate-y-1 hover:border-cyan-proofeus/40 hover:shadow-[0_18px_40px_-12px_rgba(63,212,217,0.25)]"
    >
      {/* Image de fond */}
      <div
        aria-hidden
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Voile sombre pour lisibilité */}
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background:
            "linear-gradient(to top, rgba(5,8,16,0.95) 10%, rgba(5,8,16,0.55) 55%, rgba(5,8,16,0.15) 100%)",
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 flex w-full flex-col justify-end p-6 md:p-7">
        <p
          className="font-light text-cyan-proofeus/70"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            lineHeight: 1,
          }}
        >
          {numero}
        </p>
        <h3
          className="mt-3 font-light text-blanc-casse"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
            lineHeight: 1.15,
          }}
        >
          {nom}
        </h3>
        <p className="mt-4 text-sm italic leading-relaxed text-gris-clair">
          {phrase}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-cyan-proofeus transition-transform group-hover:translate-x-1">
          Entrer <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

const SALLES = [
  {
    numero: "I",
    nom: "La Toile",
    phrase: "Toute œuvre mérite une identité.",
    href: "/salle/la-toile",
    image: "/chapitre-1-toile.png",
  },
  {
    numero: "II",
    nom: "La Galerie",
    phrase: "L'authenticité précède la valeur.",
    href: "/salle/la-galerie",
    image: "/chapitre-2-galerie.png",
  },
  {
    numero: "III",
    nom: "Le Coffre",
    phrase: "Certaines choses traversent le temps.",
    href: "/salle/le-coffre",
    image: "/chapitre-3-coffre.png",
  },
  {
    numero: "IV",
    nom: "La Succession",
    phrase: "La confiance se transmet.",
    href: "/salle/la-succession",
    image: "/chapitre-4-succession.png",
  },
];

const TECHNIQUE = [
  {
    titre: "Cristal",
    chapo:
      "Verre optique haut de gamme légèrement teinté cyan. Sept couches superposées visibles à l'œil nu, chacune portant une couche d'information cryptographique.",
  },
  {
    titre: "Iris",
    chapo:
      "L'iris humain gravé au centre est la signature de l'auteur — une empreinte biométrique inaltérable, aussi unique qu'une œuvre.",
  },
  {
    titre: "Gravures",
    chapo:
      "Sur l'anneau intérieur, des micro-inscriptions inspirées des billets de banque. Sur l'anneau extérieur, les marques de sécurité d'une monnaie officielle.",
  },
  {
    titre: "Registre",
    chapo:
      "Chaque Sceau est inscrit à vie dans un registre public consultable. Aucune œuvre certifiée ne peut être effacée de la mémoire.",
  },
  {
    titre: "Plaque compagnon",
    chapo:
      "Une plaque métallique gravée accompagne toujours Le Sceau. Elle porte le numéro d'ordre, la date et la clé de vérification — jamais sur le Sceau, toujours à côté de lui.",
  },
  {
    titre: "Souveraineté",
    chapo:
      "Ancré sur une infrastructure européenne, sous droit européen. Vos données ne quittent jamais notre juridiction.",
  },
];
