import Link from "next/link";
import Image from "next/image";

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
          1. HERO — image musée + baseline dans le tiers supérieur
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-start justify-center overflow-hidden pt-[25vh] md:pt-[27vh]">
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
              "linear-gradient(to bottom, rgba(13,13,16,0.55) 0%, rgba(13,13,16,0.15) 25%, transparent 55%, rgba(13,13,16,0.85) 100%)",
          }}
        />

        {/* Baseline dans le tiers supérieur, au-dessus du Sceau qui flotte */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p
            className="italic text-blanc-casse md:whitespace-nowrap"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.85rem, 3.5vw, 2.9rem)",
              lineHeight: 1.25,
              letterSpacing: "0.005em",
              textShadow: "0 2px 24px rgba(0,0,0,0.6)",
            }}
          >
            L&apos;authenticité a trouvé son emblème.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2A. PROOFEUS AUTHENTIC — nom marque + positionnement clair
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          {/* Nom marque en gros — test en majuscules */}
          <h2
            className="text-center font-light uppercase text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
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
            biométrique multimodale unique et un registre public
            inaltérable. Copies générées par IA, contrefaçons, usurpations
            d&apos;auteur et provenances douteuses ne peuvent plus se
            confondre avec l&apos;original.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2B. BANDEAU NOIR pleine largeur — Comment ça fonctionne
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            Comment ça fonctionne
          </p>
          <h3
            className="mx-auto mt-6 max-w-3xl text-center font-light tracking-[-0.01em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
              lineHeight: 1.25,
            }}
          >
            Un compte, une application, un Sceau à vie.
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-gris-clair md:text-lg">
            Vous créez votre compte Proofeus Authentic, puis vous
            téléchargez l&apos;application{" "}
            <strong className="font-medium text-blanc-casse">Proofeus</strong>{" "}
            — développée pour l&apos;ensemble de nos activités et
            nativement intégrée à Proofeus Authentic. En quelques minutes,
            l&apos;application capture vos empreintes biométriques
            multimodales :
          </p>

          {/* Les 5 captures multimodales — pictos ronds avec vraies images */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {CAPTURES.map((c) => (
              <Capture key={c.label} label={c.label} image={c.image} />
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-3xl text-center text-base leading-relaxed text-gris-clair md:text-lg">
            Ces cinq captures sont fusionnées cryptographiquement pour
            créer votre{" "}
            <strong className="font-medium text-blanc-casse">Sceau Proofeus</strong>{" "}
            — unique, inaltérable, à vous seul. C&apos;est cet emblème qui
            servira à enregistrer et à signer l&apos;ensemble de vos
            œuvres et de vos propriétés. C&apos;est également ce même
            Sceau qui vous permettra d&apos;utiliser l&apos;ensemble des
            services des écosystèmes{" "}
            <strong className="font-medium text-blanc-casse">Proofeus</strong>{" "}
            et{" "}
            <strong className="font-medium text-blanc-casse">Verbalock</strong>.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. LE SCEAU — en détail (contient / apporte / protège)
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
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
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-gris-clair md:text-lg">
            Le Sceau Proofeus est notre certificat. Une fois apposé sur une
            œuvre, il ne peut ni être copié, ni détaché, ni contesté. Voici
            ce qu&apos;il contient, ce qu&apos;il vous apporte et ce contre
            quoi il vous protège.
          </p>

          {/* ─────────  SOUS-BLOC 1 : CE QU'IL CONTIENT  ───────── */}
          <div className="mt-24 md:mt-28">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
                Ce qu&apos;il contient
              </p>
              <h3
                className="mx-auto mt-4 max-w-3xl font-light tracking-[-0.01em] text-blanc-casse"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
                  lineHeight: 1.25,
                }}
              >
                Six briques indissociables, gravées à vie.
              </h3>
            </div>

            <div className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
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
          </div>

          {/* ─────────  SOUS-BLOC 2 : CE QU'IL VOUS APPORTE  ───────── */}
          <div className="mt-24 border-t border-gris-sombre pt-16 md:mt-28 md:pt-20">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
                Ce qu&apos;il vous apporte
              </p>
              <h3
                className="mx-auto mt-4 max-w-3xl font-light tracking-[-0.01em] text-blanc-casse"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
                  lineHeight: 1.25,
                }}
              >
                Une seule identité, tous les services des écosystèmes
                Proofeus &amp; Verbalock.
              </h3>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
                Votre Sceau est votre clé unique dans l&apos;ensemble des
                briques du groupe. Il vous ouvre :
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {APPORTS.map((item) => (
                <Pastille key={item.titre} {...item} />
              ))}
            </div>
          </div>

          {/* ─────────  SOUS-BLOC 3 : CE CONTRE QUOI IL PROTÈGE  ───────── */}
          <div className="mt-24 border-t border-gris-sombre pt-16 md:mt-28 md:pt-20">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
                Ce contre quoi il vous protège
              </p>
              <h3
                className="mx-auto mt-4 max-w-3xl font-light tracking-[-0.01em] text-blanc-casse"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
                  lineHeight: 1.25,
                }}
              >
                Vous êtes obligatoirement protégé contre tout ceci.
              </h3>
            </div>

            {/* Groupe A — Dans le domaine de l'art */}
            <div className="mt-14">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-blanc-casse/70">
                Dans le domaine de l&apos;art
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {PROTECTIONS_ART.map((item) => (
                  <Pastille key={item.titre} {...item} />
                ))}
              </div>
            </div>

            {/* Groupe B — Dans les écosystèmes Proofeus + Verbalock */}
            <div className="mt-16">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-blanc-casse/70">
                Dans les écosystèmes Proofeus &amp; Verbalock
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {PROTECTIONS_ECOSYSTEMES.map((item) => (
                  <Pastille key={item.titre} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* CTAs finaux */}
          <div className="mt-24 flex flex-wrap justify-center gap-3 md:mt-28">
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
      </section>
    </main>
  );
}

/**
 * Pastille — carte compacte titre + corps, utilisée dans les 3
 * sous-blocs de « Le Sceau — en détail » (apporte / protège art /
 * protège écosystèmes).
 */
function Pastille({ titre, corps }: { titre: string; corps: string }) {
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
 * Picto rond d'une capture multimodale — vraie image de l'app Proofeus
 * en rond (mask circulaire), halo cyan diffus + label sous l'image.
 * Images 1254x1254 partagées depuis le repo proofeus-platform.
 */
function Capture({ label, image }: { label: string; image: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-0 rounded-full opacity-35 blur-2xl"
          style={{ background: "var(--color-cyan-proofeus)" }}
        />
        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-cyan-proofeus/40 bg-noir-profond md:h-28 md:w-28">
          <Image
            src={image}
            alt={label}
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-blanc-casse">
        {label}
      </p>
    </div>
  );
}

const CAPTURES: { label: string; image: string }[] = [
  { label: "Iris", image: "/biometrie-iris.png" },
  { label: "Morphologie", image: "/biometrie-morphologie.png" },
  { label: "Voix", image: "/biometrie-voix.png" },
  { label: "Paume", image: "/biometrie-paume.png" },
  { label: "Pouls", image: "/biometrie-pouls.png" },
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

/* Ce qu'il vous apporte — services débloqués par le Sceau dans les
   écosystèmes Proofeus + Verbalock */
const APPORTS: { titre: string; corps: string }[] = [
  {
    titre: "Certification d'œuvres",
    corps:
      "Toiles, sculptures, photographies, NFT — chaque œuvre reçoit son Sceau et rejoint le registre public inaltérable de Proofeus Authentic.",
  },
  {
    titre: "Messagerie chiffrée E2E",
    corps:
      "Échangez avec la certitude absolue que votre interlocuteur est bien la personne qu'il prétend être. Chiffrement bout-en-bout, entre humains biométriquement vérifiés.",
  },
  {
    titre: "Wallet de mots de passe",
    corps:
      "Verbalock stocke vos mots de passe et les débloque avec vos empreintes multimodales. L'ère du mot de passe oublié est terminée.",
  },
  {
    titre: "Wallet cryptomonnaie",
    corps:
      "Un portefeuille crypto non-custodial protégé par votre Sceau. Plus de seed phrase à mémoriser — votre biométrie est la clé.",
  },
  {
    titre: "Paiement humain à humain",
    corps:
      "Le premier rail de paiement crypto conversationnel entre humains vérifiés. Envoyez de la valeur comme vous envoyez un message.",
  },
  {
    titre: "Transmission et testament",
    corps:
      "Léguez vos œuvres, vos mots de passe et vos actifs numériques à vos proches, avec verrouillage post-mortem sécurisé.",
  },
];

/* Ce contre quoi il vous protège — deux domaines */
const PROTECTIONS_ART: { titre: string; corps: string }[] = [
  {
    titre: "Copies générées par IA",
    corps:
      "Une image produite par une IA ne peut plus se faire passer pour l'œuvre d'un humain. Seul un auteur vérifié biométriquement peut sceller.",
  },
  {
    titre: "Usurpation d'auteur",
    corps:
      "Vos cinq empreintes fusionnées dans votre Sceau garantissent que nul ne peut se déclarer créateur à votre place — de votre vivant, ni après.",
  },
  {
    titre: "Contrefaçons plastiques",
    corps:
      "L'empreinte cryptographique de l'œuvre — dérivée de ses dimensions, matériaux, technique et photo HD — rend toute imitation immédiatement détectable.",
  },
  {
    titre: "Faux certificats papier",
    corps:
      "Fini les certificats jaunis, perdus ou falsifiés. Le registre public de Proofeus Authentic est consultable en trois secondes, à vie.",
  },
  {
    titre: "Provenance opaque",
    corps:
      "Chaque changement de propriétaire est inscrit dans le registre. La chaîne complète — de l'auteur au propriétaire actuel — reste opposable, vérifiable.",
  },
  {
    titre: "Double cession d'œuvre",
    corps:
      "Une œuvre ne peut être vendue qu'une seule fois. Le registre empêche mécaniquement qu'une même pièce soit cédée à deux acheteurs différents.",
  },
];

const PROTECTIONS_ECOSYSTEMES: { titre: string; corps: string }[] = [
  {
    titre: "Vol d'identité numérique",
    corps:
      "Votre Sceau est votre identité — nul ne peut l'usurper sans reproduire l'ensemble de vos empreintes biométriques, ce qui est impossible.",
  },
  {
    titre: "Deepfakes vidéo et audio",
    corps:
      "Vos correspondances signées avec le Sceau attestent que c'est bien vous qui parlez, écrivez, transférez. Toute imitation IA est immédiatement démasquée.",
  },
  {
    titre: "Prise de contrôle de compte",
    corps:
      "Aucun accès à vos comptes Proofeus, Verbalock ou services partenaires sans validation biométrique multimodale en direct.",
  },
  {
    titre: "Ingénierie sociale",
    corps:
      "Arnaque au président, faux support technique, phishing sophistiqué — un contact non scellé n'est pas un contact humain vérifié.",
  },
  {
    titre: "Perte de mots de passe",
    corps:
      "Verbalock supprime définitivement le mot de passe et la seed phrase de votre quotidien. Vos empreintes suffisent, partout, tout le temps.",
  },
  {
    titre: "Fraude à la signature",
    corps:
      "Contrats, correspondances importantes, cessions : rien ne peut plus être contresigné à votre place. Le Sceau vous suit partout.",
  },
];
