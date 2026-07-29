import Link from "next/link";

/**
 * Landing Proofeus Authentic.
 *
 * Structure clarifiée (arbitrage 29 juillet 2026 soir — François a
 * rejeté la doctrine « musée mystique » : le visiteur ne comprend pas
 * ce que Proofeus fait) :
 *
 * 1. Hero — image + baseline en haut + nom Proofeus Authentic en dessous
 * 2. Ce que nous faisons — bloc de positionnement clair (le « quoi »)
 * 3. Les 4 salles — grille horizontale (le « pour qui »)
 * 4. Le Sceau, en détail — section technique explicite (le « comment »)
 */
export default function AuthenticLanding() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — image musée + baseline (au-dessus) + Proofeus Authentic
          ═══════════════════════════════════════════════════════════ */}
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
              "linear-gradient(to bottom, transparent 45%, rgba(13,13,16,0.7) 75%, rgba(13,13,16,0.98) 100%)",
          }}
        />

        {/* Hero : image seule — la baseline vit désormais dans le header */}
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. PROOFEUS AUTHENTIC — nom marque + positionnement clair
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          {/* Nom marque en gros, à la place du eyebrow */}
          <h2
            className="text-center font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
            }}
          >
            Proofeus{" "}
            <span style={{ color: "var(--color-cyan-proofeus)" }}>
              Authentic
            </span>
          </h2>

          {/* Positionnement — juste en dessous */}
          <p
            className="mx-auto mt-8 max-w-3xl text-center font-light tracking-[-0.005em] text-blanc-casse/90"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
              lineHeight: 1.3,
            }}
          >
            La première plateforme de certification des œuvres d&apos;art
            physiques et numériques à l&apos;ère de l&apos;intelligence
            artificielle.
          </p>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-gris-clair md:text-lg">
            Nous relions chaque œuvre — toile, sculpture, photographie ou
            NFT — à l&apos;humain qui l&apos;a créée, par une empreinte
            biométrique unique et un registre public inaltérable. Copies
            générées par IA, contrefaçons, usurpations d&apos;auteur et
            provenances douteuses ne peuvent plus se confondre avec
            l&apos;original.
          </p>

          {/* 3 pastilles : les 3 problèmes résolus */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <ProblemeResolu
              titre="Copies générées par IA"
              corps="Une image produite par une IA ne peut plus se faire passer pour l'œuvre d'un humain. Seul un auteur vérifié biométriquement peut sceller."
            />
            <ProblemeResolu
              titre="Usurpation d'auteur"
              corps="L'iris de l'auteur, gravé au cœur du Sceau, est aussi unique qu'une empreinte digitale. Aucun tiers ne peut se déclarer créateur à sa place."
            />
            <ProblemeResolu
              titre="Provenance opaque"
              corps="Chaque changement de propriétaire est inscrit dans un registre public, consultable à vie. La chaîne complète reste opposable, vérifiable en trois secondes."
            />
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-lg italic leading-relaxed text-gris-clair">
            « Une œuvre certifiée par Proofeus Authentic est une œuvre dont
            l&apos;origine humaine est prouvée, opposable, transmissible. »
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. LES 4 SALLES — grille horizontale
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-gris-sombre px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              La visite
            </p>
            <h2
              className="mt-4 font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Quatre salles. Un même Sceau.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gris-clair md:text-base">
              Découvrez, en quatre étapes, comment le Sceau Proofeus
              accompagne une œuvre — de sa création à sa transmission.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SALLES.map((salle) => (
              <SalleCard key={salle.href} {...salle} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. LE SCEAU — section technique explicite
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            Le Sceau — en détail
          </p>
          <h2
            className="mt-6 text-center font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              lineHeight: 1.2,
            }}
          >
            Une signature cryptographique.
            <br />
            Un registre inaltérable. Une garantie à vie.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-gris-clair md:text-lg">
            Le Sceau Proofeus est notre certificat. Une fois apposé sur une
            œuvre, il ne peut ni être copié, ni détaché, ni contesté. Voici
            ce qu&apos;il contient.
          </p>

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
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/certifier"
                className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
              >
                Certifier une œuvre
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
 * Pastille « Problème résolu » — 3 pastilles dans la section
 * « Ce que nous faisons » pour rendre le positionnement concret.
 */
function ProblemeResolu({ titre, corps }: { titre: string; corps: string }) {
  return (
    <div className="rounded-sm border border-gris-sombre bg-noir-profond p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
        {titre}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-gris-clair">{corps}</p>
    </div>
  );
}

/**
 * Carte d'une salle — image en background, overlay sombre pour
 * lisibilité, numéro romain + nom + phrase-déclaration en overlay.
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
      <div
        aria-hidden
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background:
            "linear-gradient(to top, rgba(13,13,16,0.95) 10%, rgba(13,13,16,0.55) 55%, rgba(13,13,16,0.15) 100%)",
        }}
      />

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
    titre: "Iris de l'auteur",
    chapo:
      "L'iris de l'artiste est capturé lors de l'enrôlement et gravé numériquement au cœur de son Sceau. Aussi unique qu'une empreinte digitale, il ne peut être ni imité, ni reproduit par une IA.",
  },
  {
    titre: "Empreinte cryptographique de l'œuvre",
    chapo:
      "Chaque œuvre certifiée reçoit une empreinte unique dérivée de son fichier numérique ou de sa fiche technique (dimensions, technique, matériaux, photo HD). Toute copie ou variation est immédiatement détectable.",
  },
  {
    titre: "Registre public inaltérable",
    chapo:
      "Chaque Sceau est inscrit à vie dans un registre public consultable par quiconque. Aucune œuvre certifiée ne peut être effacée ou modifiée — Proofeus Authentic elle-même n'en a pas le pouvoir.",
  },
  {
    titre: "Plaque compagnon",
    chapo:
      "Une clé de vérification numérique accompagne toujours le Sceau. Le collectionneur, l'expert ou le tribunal peuvent vérifier en trois secondes qui a créé cette œuvre et à qui elle appartient aujourd'hui.",
  },
  {
    titre: "Physique et numérique",
    chapo:
      "Un même Sceau couvre une toile en galerie parisienne comme un NFT sur marketplace internationale. Seul le format des métadonnées change ; la garantie d'authenticité, elle, reste identique.",
  },
  {
    titre: "Souveraineté européenne",
    chapo:
      "Infrastructure hébergée en Europe, sous droit européen. Les données biométriques ne quittent jamais votre appareil — seule leur empreinte cryptographique parvient à la plateforme.",
  },
];
