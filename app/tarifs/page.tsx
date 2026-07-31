import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadges } from "@/components/AppStoreBadges";
import { BandeauPaiementStripe } from "@/components/PaiementLogos";

export const metadata: Metadata = {
  title: "Tarifs — Proofeus Authentic®",
  description:
    "Deux socles Proofeus® à vie — 14,90 €/an pour l'identité, 29,90 €/an pour l'intégral avec certification d'œuvres. Suppléments Art pour artistes prolifiques, forfaits dédiés pour institutions. Aucune commission de vente.",
};

/* ══════════════════════════════════════════════════════════════════
   DONNÉES
   ══════════════════════════════════════════════════════════════════ */

const SOCLE_INTEGRAL = 29.9;

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
          1. HERO — image Sceau Cristal + titre + badges
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/salle-tarifs.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,16,0.45) 0%, rgba(13,13,16,0.55) 45%, rgba(13,13,16,0.55) 55%, rgba(13,13,16,0.98) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
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
              textShadow: "0 2px 24px rgba(0,0,0,0.7)",
            }}
          >
            Deux socles à vie. Zéro commission.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-blanc-casse/90 md:text-lg">
            Proofeus® pour l&apos;identité biométrique et les services
            personnels. Proofeus® intégral pour ceux qui certifient aussi
            leurs œuvres. Tarifs de lancement verrouillés à vie pour le
            premier million d&apos;utilisateurs.
          </p>
        </div>

        {/* Badges App Store / Google Play — pied du hero, centré */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 px-6 md:bottom-12">
          <AppStoreBadges compact />
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
            {/* Proofeus Sovereign 14,90 € — le bouclier seul */}
            <SocleCard
              nom="Proofeus® Sovereign"
              prix="14,90 €"
              cadence="an"
              baseline="Le bouclier + protections nativement incluses"
              chapo="Le socle d'entrée dans l'écosystème. Votre bouclier biométrique et les protections offertes avec. À enrichir librement avec les apps de votre choix."
              inclus={[
                "Sceau d'humanité biométrique multimodal",
                "Cercles de confiance & fonction ping",
                "Help — bouton d'alerte physique",
                "Coryphea® — assistante conversationnelle",
                "Watch® — observatoire IA malveillante",
                "Consultation du Registre public",
              ]}
              exclu="Apps modulaires à ajouter à la carte (Passwords, Crypto, Chat, Pay, Legacy®)"
              ctaLabel="Souscrire Sovereign ↗"
              ctaHref="https://proofeus.com/inscription?pkg=sovereign"
            />

            {/* Proofeus Intégral 29,90 € — tout inclus grand public */}
            <SocleCard
              nom="Proofeus® Intégral"
              prix="29,90 €"
              cadence="an"
              vedette
              baseline="Sovereign + Proofeus® Pack complet + Legacy® + Authentic® occasionnel"
              chapo="Le pack tout-en-un pour la vie numérique complète — bouclier + 4 apps Proofeus® + testament Legacy® + certification d'œuvres occasionnelle. −51 % vs les modules à la carte."
              inclus={[
                "Tout Sovereign (bouclier + protections)",
                "Proofeus® Passwords, Crypto, Chat, Pay",
                "Legacy® — testament et transmission",
                "Authentic® — 5 Sceaux d'auteur par an",
                "1 Sceau de création offert",
                "Accès complet au Registre public",
              ]}
              ctaLabel="Souscrire Intégral ↗"
              ctaHref="https://proofeus.com/inscription?pkg=integral"
            />
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs italic leading-relaxed text-gris-clair">
            Les artistes qui certifient plus de cinq œuvres par an et les
            institutions doivent choisir un supplément ou un forfait dédié
            ci-dessous.
          </p>

          {/* Bloc justificatif — pourquoi un tarif si bas */}
          <div className="mx-auto mt-16 max-w-4xl rounded-sm border border-cyan-proofeus/40 bg-noir-profond p-8 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-proofeus">
              Pourquoi un tarif si bas ?
            </p>
            <h3
              className="mt-5 font-light tracking-[-0.01em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
                lineHeight: 1.3,
              }}
            >
              Un standard mondial ne se construit pas avec des tarifs
              d&apos;élite.
            </h3>
            <p className="mt-6 text-base leading-relaxed text-gris-clair md:text-lg">
              Notre objectif est que le Sceau Proofeus® devienne le standard
              mondial de la souveraineté humaine à l&apos;ère post-IA. Pour
              y arriver vite, nous avons choisi un tarif de lancement
              défiant toute concurrence, réservé aux{" "}
              <strong className="font-medium text-blanc-casse">
                premiers utilisateurs
              </strong>{" "}
              qui nous rejoignent — et{" "}
              <strong className="font-medium text-blanc-casse">
                garanti à vie
              </strong>{" "}
              pour eux, quels que soient nos prix futurs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gris-clair md:text-lg">
              Ces conditions ne reviendront pas. Une fois le{" "}
              <strong className="font-medium text-blanc-casse">
                premier million d&apos;utilisateurs
              </strong>{" "}
              atteint, les tarifs s&apos;alignent sur la valeur réelle du
              marché de la souveraineté humaine. C&apos;est aujourd&apos;hui
              que se joue le prix de votre protection pour les décennies à
              venir.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2b. APPS À LA CARTE — anthracite (pour ceux qui préfèrent choisir)
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-gris-sombre px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Apps à la carte
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
              Ou construisez votre écosystème sur mesure.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              À ajouter au socle Sovereign 14,90 €/an. Chaque app se
              télécharge sur App Store et Google Play — mais s&apos;active
              en un clic depuis votre hub Proofeus®, sans commission
              intermédiaire.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AppCarte
              nom="Proofeus® Passwords"
              prix="4,90 €"
              chapo="Coffre de mots de passe débloqué par votre biométrie. Fini les mots de passe oubliés."
            />
            <AppCarte
              nom="Proofeus® Crypto"
              prix="4,90 €"
              chapo="Wallet crypto non-custodial sans seed phrase. Votre biométrie est la clé."
            />
            <AppCarte
              nom="Proofeus® Chat"
              prix="4,90 €"
              chapo="Messagerie chiffrée E2E entre humains vérifiés. Fini les deepfakes textuels."
            />
            <AppCarte
              nom="Proofeus® Pay"
              prix="4,90 €"
              chapo="Envoyez et recevez de la valeur entre humains vérifiés. Rail conversationnel."
            />
            <AppCarte
              nom="Proofeus® Pack"
              prix="9,90 €"
              chapo="Les 4 apps Proofeus® réunies. Économie 9,60 €/an vs à la carte."
              vedette
            />
            <AppCarte
              nom="Proofeus® Legacy"
              prix="6,90 €"
              chapo="Testament, transmission, vidéos post-mortem, dossiers pour les enfants. Service actif à vie."
            />
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs italic leading-relaxed text-gris-clair">
            Prix affichés par app et par an, en supplément du socle
            Sovereign 14,90 €/an. Pour Proofeus® Authentic (certification
            d&apos;œuvres), voir les formules dédiées ci-dessous.
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
              Suppléments à ajouter au socle Proofeus® intégral 29,90 €/an.
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
              Payer chez Proofeus
              <sup
                style={{
                  fontSize: "0.42em",
                  verticalAlign: "0.8em",
                  fontWeight: 400,
                  marginLeft: "0.05em",
                }}
              >
                ®
              </sup>
              , c&apos;est payer en toute confiance.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Nous ne stockons ni votre numéro de carte, ni votre historique
              de paiement. Toutes les transactions passent par des
              partenaires certifiés PCI-DSS de niveau bancaire.
            </p>
          </div>

          <div className="mt-14">
            <BandeauPaiementStripe />
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
            socles Proofeus® (14,90 €/an) et Proofeus® intégral (29,90 €/an)
            sont verrouillés à vie pour les souscripteurs du premier
            million d&apos;utilisateurs.
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
  // Gradient qui descend du cyan clair vers un cyan très sombre
  // (transition douce vers le corps anthracite).
  const headerGradient = vedette
    ? "linear-gradient(180deg, #4ee0e5 0%, #3fd4d9 30%, #2aa2a6 70%, #1a4a4c 100%)"
    : "linear-gradient(180deg, #3fd4d9 0%, #2ba8ac 55%, #16484a 100%)";

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-lg border ${
        vedette ? "border-cyan-proofeus/60" : "border-gris-sombre"
      }`}
      style={
        vedette
          ? { boxShadow: "0 28px 60px -20px rgba(63,212,217,0.35)" }
          : { boxShadow: "0 20px 48px -18px rgba(0,0,0,0.55)" }
      }
    >
      {/* Header cyan dégradé vers cyan sombre */}
      <div
        className="relative px-8 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12"
        style={{ background: headerGradient }}
      >
        {vedette && (
          <span
            className="absolute right-4 top-4 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] backdrop-blur"
            style={{
              color: "#0d0d10",
              borderColor: "rgba(13,13,16,0.4)",
              background: "rgba(255,255,255,0.35)",
            }}
          >
            Recommandé
          </span>
        )}

        {/* Halo lumineux blanc dans le coin haut */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-45 blur-3xl"
          style={{ background: "rgba(255,255,255,0.6)" }}
        />

        {/* Nom du forfait — gros, serif, blanc gras */}
        <h3
          className="relative font-bold tracking-[-0.01em] text-blanc-casse"
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.6rem, 2.6vw, 2.15rem)",
            lineHeight: 1.15,
            textShadow: "0 2px 12px rgba(0,0,0,0.3)",
          }}
        >
          Forfait {renderNomWithR(nom)}
        </h3>

        <p
          className="relative mt-3 text-sm leading-snug"
          style={{ color: "rgba(13,13,16,0.75)" }}
        >
          {baseline}
        </p>

        <div className="relative mt-8 flex items-baseline gap-1">
          <span
            className="text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: "clamp(3.4rem, 5.6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            {prix}
          </span>
          <span
            className="text-sm font-medium"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            /{cadence}
          </span>
        </div>
        <p
          className="relative mt-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.92)" }}
        >
          À vie pour le premier million d&apos;utilisateurs
        </p>
      </div>

      {/* Corps sombre */}
      <div className="flex flex-1 flex-col bg-noir-profond p-8 md:p-10">
        <p className="text-sm leading-relaxed text-gris-clair">{chapo}</p>

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
          style={
            vedette ? { background: "var(--color-cyan-proofeus)" } : undefined
          }
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

/**
 * Rend le nom du forfait en gérant le ® en superscript propre.
 * Exemples : "Proofeus®" → "Proofeus" + <sup>®</sup>
 *            "Proofeus® intégral" → "Proofeus" + <sup>®</sup> + " intégral"
 */
function renderNomWithR(nom: string) {
  const parts = nom.split("®");
  return (
    <>
      {parts[0]}
      <sup
        style={{
          fontSize: "0.42em",
          verticalAlign: "0.8em",
          fontWeight: 400,
          marginLeft: "0.05em",
        }}
      >
        ®
      </sup>
      {parts[1]}
    </>
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
                  (socle Intégral 29,90 € + supplément {prix})
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

/**
 * Card app à la carte — nom + prix cyan + chapo court.
 * Compact, alignée sur la charte modulaire iPhone/App Store.
 */
function AppCarte({
  nom,
  prix,
  chapo,
  vedette,
}: {
  nom: string;
  prix: string;
  chapo: string;
  vedette?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-sm border p-5 ${
        vedette
          ? "border-cyan-proofeus/60 bg-noir-profond shadow-[0_14px_36px_-14px_rgba(63,212,217,0.35)]"
          : "border-gris-sombre bg-noir-profond"
      }`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-sm font-semibold text-blanc-casse">{nom}</p>
        <p className="text-sm font-semibold text-cyan-proofeus">
          {prix}
          <span className="text-[10px] text-gris-clair">/an</span>
        </p>
      </div>
      {vedette && (
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-proofeus">
          Meilleure valeur
        </p>
      )}
      <p className="mt-3 text-xs leading-relaxed text-gris-clair">{chapo}</p>
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
