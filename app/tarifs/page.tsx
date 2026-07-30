import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AppStoreBadges } from "@/components/AppStoreBadges";

export const metadata: Metadata = {
  title: "Tarifs — Proofeus Authentic®",
  description:
    "Certification à l'œuvre pour les artistes, forfaits pour les galeries, SDK gratuit pour les marketplaces. Prix transparents, aucune commission de vente, aucun piège. Tarifs indicatifs à confirmer à l'ouverture publique.",
};

/* ══════════════════════════════════════════════════════════════════
   FORMULES ARTISTES
   ══════════════════════════════════════════════════════════════════ */

const ARTISTES: Formule[] = [
  {
    nom: "Découverte",
    prix: "Gratuit",
    cadence: "à vie",
    chapo:
      "Créez votre Sceau d'humanité, essayez la certification sur une œuvre. Sans engagement, sans carte bancaire.",
    inclus: [
      "Sceau d'humanité (identité biométrique)",
      "1 Sceau d'œuvre offert",
      "Inscription au registre public",
      "Vérification illimitée",
    ],
  },
  {
    nom: "Artiste",
    prix: "49 €",
    cadence: "an",
    chapo:
      "Pour l'artiste occasionnel qui certifie jusqu'à cinq œuvres par an. Idéal pour les créateurs qui exposent ponctuellement.",
    inclus: [
      "Tout de la formule Découverte",
      "Jusqu'à 5 Sceaux d'œuvres par an",
      "Plaque compagnon numérotée",
      "Support par email",
    ],
  },
  {
    nom: "Artiste actif",
    prix: "149 €",
    cadence: "an",
    chapo:
      "Pour l'artiste en activité régulière qui produit et certifie jusqu'à vingt œuvres par an.",
    inclus: [
      "Tout de la formule Artiste",
      "Jusqu'à 20 Sceaux d'œuvres par an",
      "Certification NFT incluse",
      "Support prioritaire",
    ],
    vedette: true,
  },
  {
    nom: "Artiste pro",
    prix: "399 €",
    cadence: "an",
    chapo:
      "Pour l'artiste professionnel à production intense — Sceaux d'œuvres en illimité, tous médiums confondus.",
    inclus: [
      "Tout de la formule Artiste actif",
      "Sceaux d'œuvres illimités",
      "Certification post-mortem (héritiers)",
      "Contact direct fondateur",
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════
   FORMULES INSTITUTIONS (Galeries, Musées, Fondations)
   ══════════════════════════════════════════════════════════════════ */

const INSTITUTIONS: Formule[] = [
  {
    nom: "Galerie émergente",
    prix: "990 €",
    cadence: "an",
    chapo:
      "Pour les jeunes galeries qui exposent moins de cinquante œuvres par an. Interface conservateur incluse.",
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
    chapo:
      "Pour les galeries à fort volume, les fondations et les maisons de vente régionales.",
    inclus: [
      "Jusqu'à 200 Sceaux d'auteur par an",
      "Intégration Gaugista® optionnelle",
      "Tableau de bord avancé",
      "Support prioritaire + expert dédié",
    ],
    vedette: true,
  },
  {
    nom: "Institution premium",
    prix: "Sur devis",
    cadence: "",
    chapo:
      "Musées, fondations internationales, maisons de vente aux enchères : accompagnement dédié et forfait sur mesure.",
    inclus: [
      "Sceaux d'auteur illimités",
      "Marque blanche possible",
      "SLA sur mesure",
      "Chef de projet dédié",
    ],
  },
];

type Formule = {
  nom: string;
  prix: string;
  cadence: string;
  chapo: string;
  inclus: string[];
  vedette?: boolean;
};

/* ══════════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════════ */

export default function TarifsPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — fond noir + Sceau en filigrane + titre
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24 md:py-32"
        style={{ background: "#000" }}
      >
        {/* Sceau canonique en filigrane derrière le texte */}
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
            Nos formules
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
            Une formule par cible.
            <br />
            Aucun piège, jamais de commission.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
            Proofeus Authentic® ne prend aucune commission sur la vente de
            vos œuvres. Nous ne prélevons que ce qui est nécessaire pour
            faire vivre le Registre — à vie, souverainement, sans
            actionnaire prédateur.
          </p>

          {/* Badges App Store / Google Play */}
          <div className="mt-12">
            <AppStoreBadges compact />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. FORMULES ARTISTES — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Pour les artistes
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
              Quatre formules, de l&apos;essai à la production intense.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Peintres, sculpteurs, photographes, artistes numériques,
              vidéastes — un même Sceau d&apos;auteur pour tous les
              médiums, physique et numérique.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ARTISTES.map((f) => (
              <FormuleCard key={f.nom} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. FORMULES INSTITUTIONS — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Pour les institutions
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
              Trois formules, adaptées au volume de votre institution.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Galeries, musées, fondations, maisons de vente et cabinets
              d&apos;expertise — un tarif dégressif indexé sur le nombre
              d&apos;œuvres certifiées annuellement.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {INSTITUTIONS.map((f) => (
              <FormuleCard key={f.nom} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. WEB3 / MARKETPLACES — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
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
              gratuitement. Nous n&apos;imposons aucune commission sur les
              ventes, aucun quota, aucune dépendance.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-sm border border-cyan-proofeus/40 bg-noir-profond p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
              Notre modèle
            </p>
            <p className="mt-4 text-base leading-relaxed text-blanc-casse md:text-lg">
              La certification est financée par les artistes et les
              institutions qui apposent le Sceau. Les marketplaces et les
              collectionneurs qui vérifient ne paient rien.
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
          5. CE QUI N'EST JAMAIS FACTURÉ — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            Ce qui n&apos;est jamais facturé
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
            Notre engagement de transparence.
          </h2>

          <div className="mx-auto mt-14 grid gap-4 sm:grid-cols-2">
            {[
              "La consultation du Registre public",
              "La vérification d'une œuvre (illimitée, à vie)",
              "Le Sceau d'humanité (identité biométrique de base)",
              "Toute commission sur la vente d'une œuvre",
              "Le SDK et l'API pour les marketplaces",
              "Les mises à jour de sécurité et de conformité",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-sm border border-cyan-proofeus/25 bg-noir-profond p-5 text-left"
              >
                <span className="mt-0.5 text-cyan-proofeus">✓</span>
                <p className="text-sm leading-relaxed text-blanc-casse">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5.5. PAIEMENT SÉCURISÉ + CONFIANCE — anthracite
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

          {/* Ligne 1 — Partenaires paiement */}
          <div className="mt-14">
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-blanc-casse/60">
              Traitement des paiements
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <PaiementBadge nom="Stripe" />
              <PaiementBadge nom="Visa" />
              <PaiementBadge nom="Mastercard" />
              <PaiementBadge nom="American Express" />
              <PaiementBadge nom="Apple Pay" />
              <PaiementBadge nom="Google Pay" />
              <PaiementBadge nom="SEPA" />
            </div>
          </div>

          {/* Ligne 2 — Garanties sécurité + conformité */}
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
              corps="Aucun engagement caché. Vous résiliez votre formule à tout moment, sans frais, sans justification."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. NOTE + CTAs — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-20 md:px-12 md:py-24"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 text-sm italic leading-relaxed text-gris-clair">
            Les tarifs présentés sur cette page sont indicatifs et seront
            confirmés à l&apos;ouverture publique de la plateforme. Nos
            grilles évoluent en fonction du feedback recueilli auprès des
            artistes et institutions partenaires.
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
              href="/certifier"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Commencer gratuitement
            </Link>
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
   Composant carte formule
   ══════════════════════════════════════════════════════════════════ */

function FormuleCard({ nom, prix, cadence, chapo, inclus, vedette }: Formule) {
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
          <span className="text-xs text-gris-clair">/{cadence}</span>
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
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Badge partenaire paiement — pill uniforme
   ══════════════════════════════════════════════════════════════════ */

function PaiementBadge({ nom }: { nom: string }) {
  return (
    <div className="flex h-10 items-center rounded-md border border-gris-sombre bg-noir-profond px-5">
      <span className="text-sm font-semibold tracking-wide text-blanc-casse/90">
        {nom}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Carte garantie sécurité / conformité
   ══════════════════════════════════════════════════════════════════ */

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
