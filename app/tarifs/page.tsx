import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AppStoreBadges } from "@/components/AppStoreBadges";

export const metadata: Metadata = {
  title: "Tarifs — Proofeus Authentic®",
  description:
    "Deux socles Proofeus® à vie — 14,90 €/an pour l'identité, 19,90 €/an pour l'intégral avec certification d'œuvres. Suppléments Art pour artistes prolifiques, forfaits dédiés pour institutions. Aucune commission de vente.",
};

/* ══════════════════════════════════════════════════════════════════
   DONNÉES
   ══════════════════════════════════════════════════════════════════ */

const SOCLE_INTEGRAL = 19.9;

type Formule = {
  nom: string;
  prix: string;
  cadence: string;
  chapo: string;
  inclus: string[];
  vedette?: boolean;
  /** Montant numérique du supplément (permet le calcul total avec socle). */
  supplement?: number;
  /** Prix total autonome (pour les institutions qui incluent leur socle). */
  totalAutonome?: number;
  slug?: string;
};

const ART_ARTISTES: Formule[] = [
  {
    nom: "Artiste actif",
    prix: "+89 €",
    cadence: "an",
    supplement: 89,
    slug: "art-actif",
    chapo:
      "Pour l'artiste en activité régulière. Vingt Sceaux d'auteur par an, physique et numérique, en supplément de l'intégral.",
    inclus: [
      "Jusqu'à 20 Sceaux d'auteur par an",
      "Certification NFT incluse",
      "Support prioritaire",
      "Accès aux marketplaces partenaires",
    ],
    vedette: true,
  },
  {
    nom: "Artiste pro",
    prix: "+249 €",
    cadence: "an",
    supplement: 249,
    slug: "art-pro",
    chapo:
      "Pour l'artiste à production intense. Sceaux illimités, tous médiums, tous formats, en supplément de l'intégral.",
    inclus: [
      "Sceaux d'auteur illimités",
      "Certification NFT illimitée",
      "Tous médiums (peinture, sculpture, photo, vidéo, art numérique)",
      "Support prioritaire humain",
    ],
  },
];

const ART_INSTITUTIONS: Formule[] = [
  {
    nom: "Galerie émergente",
    prix: "990 €",
    cadence: "an",
    totalAutonome: 990,
    slug: "art-inst-emergente",
    chapo:
      "Jeunes galeries qui exposent moins de cinquante œuvres par an. Socle inclus.",
    inclus: [
      "Jusqu'à 50 Sceaux d'auteur par an",
      "Interface conservateur",
      "Protocole post-mortem 3 verrous",
      "Support email + téléphone",
    ],
  },
  {
    nom: "Galerie établie",
    prix: "2 490 €",
    cadence: "an",
    totalAutonome: 2490,
    slug: "art-inst-etablie",
    chapo:
      "Galeries à fort volume, fondations et maisons de vente régionales. Socle inclus.",
    inclus: [
      "Jusqu'à 200 Sceaux d'auteur par an",
      "Intégration Gaugista® optionnelle",
      "Tableau de bord avancé",
      "Expert dédié",
    ],
    vedette: true,
  },
  {
    nom: "Institution premium",
    prix: "Sur devis",
    cadence: "",
    slug: "art-inst-premium",
    chapo:
      "Musées, fondations internationales, maisons de vente aux enchères : accompagnement dédié, forfait sur mesure.",
    inclus: [
      "Sceaux d'auteur illimités",
      "Marque blanche possible",
      "SLA sur mesure",
      "Chef de projet dédié",
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function TarifsPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — fond noir + Sceau filigrane + titre
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24 md:py-32"
        style={{ background: "#000" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        >
          <Image
            src="/sceau-canonique.png"
            alt=""
            width={640}
            height={640}
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus/85">
            Nos tarifs
          </p>
          <h1
            className="mt-6 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              lineHeight: 1.1,
            }}
          >
            Deux socles à vie. Zéro commission.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
            Proofeus® pour l&apos;identité biométrique et les services
            personnels. Proofeus® intégral pour ceux qui certifient aussi
            leurs œuvres. Un seul choix à faire — le tarif est verrouillé
            à vie.
          </p>

          <div className="mt-12">
            <AppStoreBadges compact />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. LES DEUX SOCLES — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Étape 1 · Choisir votre socle
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
              Deux formules, chacune verrouillée à vie.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* Proofeus 14,90 € */}
            <SocleCard
              nom="Proofeus®"
              prix="14,90 €"
              cadence="an"
              baseline="Identité + services personnels"
              chapo="Pour tous ceux qui veulent une identité biométrique souveraine et les services personnels de l'écosystème."
              inclus={[
                "Sceau d'humanité biométrique",
                "Messagerie chiffrée E2E",
                "Cercles de confiance",
                "Wallet mots de passe",
                "Wallet crypto sans seed",
                "Paiement humain à humain",
                "Testament numérique",
                "Boutons d'alerte Squad/Help",
                "Coryphea® — assistante IA",
                "2 Sceaux (dont 1 à offrir)",
              ]}
              exclu="Certification d'œuvres non incluse"
              ctaLabel="Souscrire Proofeus® ↗"
              ctaHref="https://proofeus.com/inscription?pkg=proofeus"
            />

            {/* Proofeus intégral 19,90 € */}
            <SocleCard
              nom="Proofeus® intégral"
              prix="19,90 €"
              cadence="an"
              vedette
              baseline="Identité + services + certification"
              chapo="Pour ceux qui veulent tout Proofeus® ET certifier occasionnellement leurs œuvres. Cinq Sceaux d'auteur par an inclus."
              inclus={[
                "Tout ce que contient Proofeus®",
                "5 Sceaux d'auteur par an",
                "1 Sceau de création offert",
                "Certification NFT compatible",
                "Accès au Registre public",
                "Support prioritaire",
              ]}
              ctaLabel="Souscrire Proofeus® intégral ↗"
              ctaHref="https://proofeus.com/inscription?pkg=proofeus-integral"
            />
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs italic leading-relaxed text-gris-clair">
            Les artistes qui certifient plus de cinq œuvres par an et les
            institutions doivent choisir un supplément ou un forfait dédié
            ci-dessous.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. SUPPLÉMENTS ART ARTISTES — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Étape 2a · Artistes prolifiques
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
              Au-delà de cinq œuvres par an.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Suppléments à ajouter au socle Proofeus® intégral 19,90 €/an.
              Peintres, sculpteurs, photographes, artistes numériques,
              vidéastes — un même Sceau pour tous les médiums.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {ART_ARTISTES.map((f) => (
              <FormuleCard key={f.nom} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. INSTITUTIONS — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Étape 2b · Institutions
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
              Pour les galeries, musées, fondations.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Forfaits autonomes qui incluent le socle. Interface
              conservateur et protocole post-mortem inclus dans toutes les
              formules.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ART_INSTITUTIONS.map((f) => (
              <FormuleCard key={f.nom} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. MARKETPLACES WEB3 — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Pour les marketplaces Web3
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
              SDK gratuit. Aucune commission. Jamais.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Foundation, SuperRare, Manifold, Zora, OpenSea, Rarible et
              toutes les marketplaces peuvent intégrer le Sceau
              gratuitement — aucune commission sur les ventes, aucun quota.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-sm border border-cyan-proofeus/40 bg-noir-profond p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
              Notre modèle
            </p>
            <p className="mt-4 text-base leading-relaxed text-blanc-casse md:text-lg">
              La certification est financée par les artistes et les
              institutions. Les marketplaces et les collectionneurs qui
              vérifient ne paient rien.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-proofeus/50 px-5 py-2.5 text-sm font-medium text-cyan-proofeus transition-colors hover:bg-cyan-proofeus hover:text-noir"
              >
                Accéder au SDK
              </Link>
              <Link
                href="/marketplaces"
                className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-5 py-2.5 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
              >
                Marketplaces partenaires
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. PAIEMENT SÉCURISÉ + CONFIANCE — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Paiement sécurisé
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
              Payer chez Proofeus®, c&apos;est payer en toute confiance.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Nous ne stockons ni votre numéro de carte, ni votre historique
              de paiement. Toutes les transactions passent par des
              partenaires certifiés PCI-DSS de niveau bancaire.
            </p>
          </div>

          <div className="mt-14">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-blanc-casse/60">
              Traitement des paiements
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              {[
                "Stripe",
                "Visa",
                "Mastercard",
                "American Express",
                "Apple Pay",
                "Google Pay",
                "SEPA",
              ].map((nom) => (
                <PaiementBadge key={nom} nom={nom} />
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <GarantieCard
              titre="PCI-DSS niveau 1"
              corps="Traitement des cartes bancaires au plus haut niveau de sécurité — le même que celui des grandes banques."
            />
            <GarantieCard
              titre="TLS 1.3 + AES-256"
              corps="Toutes les communications sont chiffrées de bout en bout selon les standards les plus récents."
            />
            <GarantieCard
              titre="RGPD & droit européen"
              corps="Vos données sont hébergées en Europe, sous droit européen. Vous exercez à tout moment votre droit à l'oubli."
            />
            <GarantieCard
              titre="Zéro stockage carte"
              corps="Nous ne conservons ni votre numéro de CB, ni votre CVV, ni votre historique de transactions."
            />
            <GarantieCard
              titre="3D Secure automatique"
              corps="Chaque paiement au-dessus d'un seuil est authentifié par votre banque avec 3D Secure v2."
            />
            <GarantieCard
              titre="Résiliation en un clic"
              corps="Aucun engagement caché. Vous résiliez à tout moment. Vos socles souscrits restent à vie au tarif d'entrée."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          7. NOTE + CTAs — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-20 md:px-12 md:py-24"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 text-sm italic leading-relaxed text-gris-clair">
            Les suppléments Art présentés sont indicatifs et seront
            confirmés à l&apos;ouverture publique de la plateforme. Les
            socles Proofeus® (14,90 €/an) et Proofeus® intégral (19,90 €/an)
            sont verrouillés à vie pour tous les souscripteurs.
          </p>

          <h2
            className="font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
              lineHeight: 1.2,
            }}
          >
            Prêt à sceller votre première œuvre ?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-blanc-casse/30 px-6 py-3 text-sm font-medium text-blanc-casse transition-colors hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
            >
              Demander un devis institution
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

/* ══════════════════════════════════════════════════════════════════
   Composants
   ══════════════════════════════════════════════════════════════════ */

function SocleCard({
  nom,
  prix,
  cadence,
  baseline,
  chapo,
  inclus,
  exclu,
  ctaLabel,
  ctaHref,
  vedette,
}: {
  nom: string;
  prix: string;
  cadence: string;
  baseline: string;
  chapo: string;
  inclus: string[];
  exclu?: string;
  ctaLabel: string;
  ctaHref: string;
  vedette?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-sm border p-8 md:p-10 ${
        vedette
          ? "border-cyan-proofeus/60 bg-noir-profond shadow-[0_28px_60px_-20px_rgba(63,212,217,0.4)]"
          : "border-gris-sombre bg-noir-profond"
      }`}
    >
      {vedette && (
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-proofeus">
          Recommandé
        </p>
      )}
      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
        {nom}
      </p>
      <p className="mt-2 text-sm text-blanc-casse/70">{baseline}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span
          className="font-light text-blanc-casse"
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.75rem, 4.5vw, 4rem)",
            lineHeight: 1,
          }}
        >
          {prix}
        </span>
        <span className="text-sm text-gris-clair">/{cadence}</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-widest text-cyan-proofeus/80">
        à vie
      </p>

      <p className="mt-5 text-sm leading-relaxed text-gris-clair">{chapo}</p>

      <ul className="mt-6 flex-1 space-y-2 text-sm leading-relaxed text-blanc-casse/90">
        {inclus.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-0.5 text-cyan-proofeus">✓</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>

      {exclu && (
        <p className="mt-4 rounded-sm border border-blanc-casse/15 bg-black/40 px-3 py-2 text-[11px] italic leading-relaxed text-blanc-casse/70">
          {exclu}
        </p>
      )}

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
          vedette
            ? "text-noir"
            : "border border-cyan-proofeus/50 text-cyan-proofeus hover:bg-cyan-proofeus hover:text-noir"
        }`}
        style={vedette ? { background: "var(--color-cyan-proofeus)" } : undefined}
      >
        {ctaLabel}
      </a>
    </div>
  );
}

function FormuleCard({
  nom,
  prix,
  cadence,
  chapo,
  inclus,
  vedette,
  supplement,
  totalAutonome,
  slug,
}: Formule) {
  const total =
    supplement !== undefined
      ? supplement + SOCLE_INTEGRAL
      : totalAutonome !== undefined
        ? totalAutonome
        : null;

  const totalFmt =
    total !== null
      ? total.toLocaleString("fr-FR", {
          minimumFractionDigits: total % 1 === 0 ? 0 : 2,
          maximumFractionDigits: 2,
        })
      : null;

  return (
    <div
      className={`flex flex-col rounded-sm border p-8 transition-transform ${
        vedette
          ? "border-cyan-proofeus/60 bg-noir-profond shadow-[0_20px_50px_-20px_rgba(63,212,217,0.35)]"
          : "border-gris-sombre bg-noir-profond"
      }`}
    >
      {vedette && (
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-proofeus">
          Recommandé
        </p>
      )}
      <p className="text-sm font-semibold uppercase tracking-widest text-blanc-casse">
        {nom}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span
          className="font-light text-blanc-casse"
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            lineHeight: 1,
          }}
        >
          {prix}
        </span>
        {cadence && (
          <span className="text-xs text-gris-clair">
            /{cadence}
            {supplement !== undefined ? " en supplément" : ""}
          </span>
        )}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-gris-clair">{chapo}</p>
      <ul className="mt-6 flex-1 space-y-2 text-xs leading-relaxed text-blanc-casse/85">
        {inclus.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="text-cyan-proofeus">✓</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-gris-sombre pt-6">
        {totalFmt ? (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-blanc-casse/60">
              Total à souscrire
            </p>
            <p className="mt-2 text-sm text-blanc-casse">
              <span className="font-semibold text-blanc-casse">
                {totalFmt} €/an
              </span>{" "}
              {supplement !== undefined ? (
                <span className="text-xs text-gris-clair">
                  (socle Intégral 19,90 € + supplément {prix})
                </span>
              ) : (
                <span className="text-xs text-gris-clair">
                  (socle inclus)
                </span>
              )}
            </p>
            <a
              href={`https://proofeus.com/inscription?pkg=${slug}&socle=integral`}
              target="_blank"
              rel="noopener"
              className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                vedette
                  ? "text-noir"
                  : "border border-cyan-proofeus/50 text-cyan-proofeus hover:bg-cyan-proofeus hover:text-noir"
              }`}
              style={
                vedette
                  ? { background: "var(--color-cyan-proofeus)" }
                  : undefined
              }
            >
              Souscrire cette formule ↗
            </a>
          </>
        ) : (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-blanc-casse/60">
              Sur devis, socle inclus
            </p>
            <a
              href="/contact"
              className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                vedette
                  ? "text-noir"
                  : "border border-cyan-proofeus/50 text-cyan-proofeus hover:bg-cyan-proofeus hover:text-noir"
              }`}
              style={
                vedette
                  ? { background: "var(--color-cyan-proofeus)" }
                  : undefined
              }
            >
              Demander un devis
            </a>
          </>
        )}
      </div>
    </div>
  );
}

function PaiementBadge({ nom }: { nom: string }) {
  return (
    <div className="flex h-10 items-center rounded-md border border-gris-sombre bg-noir-profond px-5">
      <span className="text-sm font-semibold tracking-wide text-blanc-casse/90">
        {nom}
      </span>
    </div>
  );
}

function GarantieCard({ titre, corps }: { titre: string; corps: string }) {
  return (
    <div className="rounded-sm border border-cyan-proofeus/25 bg-noir-profond p-5">
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-cyan-proofeus/40 text-cyan-proofeus"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6.5l2.5 2.5 4.5-5.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
            {titre}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gris-clair">
            {corps}
          </p>
        </div>
      </div>
    </div>
  );
}
