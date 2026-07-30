import type { Metadata } from "next";
import Link from "next/link";
import { MindMapEcosysteme } from "@/components/MindMapEcosysteme";

export const metadata: Metadata = {
  title: "L'écosystème Proofeus® — Un Sceau, toute une souveraineté",
  description:
    "L'humain au centre, huit familles de services autour. Identité, communication, patrimoine, transactions, transmission, protection, création, orchestration IA — un seul Sceau Proofeus® pour tout débloquer.",
};

export default function EcosystemePage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — noir + titre
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            L&apos;écosystème
          </p>
          <h1
            className="mt-6 font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.1,
            }}
          >
            Un Sceau. Toute une souveraineté.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
            Proofeus
            <sup style={{ fontSize: "0.5em", verticalAlign: "0.7em" }}>®</sup>{" "}
            n&apos;est pas une application. C&apos;est une famille de services
            organisés autour d&apos;un seul principe : votre humanité,
            biométriquement prouvée. Un compte, un Sceau — et l&apos;ensemble
            de votre vie numérique retrouve son propriétaire.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. MIND MAP — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              L&apos;humain au centre
            </p>
            <h2
              className="mx-auto mt-6 max-w-3xl font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Huit familles de services, un seul Sceau.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Chaque service de l&apos;écosystème part du même point : votre
              identité biométrique multimodale. Voici comment il se déploie.
            </p>
          </div>

          <div className="mt-16 md:mt-20">
            <MindMapEcosysteme />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. LES 8 FAMILLES — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Les huit familles, en détail
            </p>
            <h2
              className="mx-auto mt-6 max-w-3xl font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Ce que le Sceau vous ouvre, concrètement.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FAMILLES_DETAIL.map((f) => (
              <FamilleDetail key={f.titre} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. PROOFEUS® INTÉGRAL — anthracite (tarification à définir)
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Proofeus
              <sup style={{ fontSize: "0.5em", verticalAlign: "0.7em" }}>®</sup>{" "}
              Intégral
            </p>
            <h2
              className="mx-auto mt-6 max-w-3xl font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Une seule licence, tout l&apos;écosystème.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
              Trois formules progressives. Chaque licence intègre le Sceau et
              donne accès à l&apos;ensemble des services activables au sein de
              votre formule, sur tous les sites Proofeus
              <sup style={{ fontSize: "0.5em", verticalAlign: "0.7em" }}>®</sup>.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {FORMULES.map((f) => (
              <Formule key={f.nom} {...f} />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-gris-clair">
            Les tarifs présentés sont indicatifs et seront confirmés à
            l&apos;ouverture publique de l&apos;écosystème.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. CTAs FINAUX
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-20 md:px-12 md:py-24"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
              lineHeight: 1.2,
            }}
          >
            Prêt à rejoindre l&apos;écosystème ?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/certifier"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Créer mon Sceau
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
   Composants internes
   ══════════════════════════════════════════════════════════════════ */

function FamilleDetail({
  titre,
  chapo,
  services,
}: {
  titre: string;
  chapo: string;
  services: string[];
}) {
  return (
    <div className="rounded-sm border border-gris-sombre bg-noir-profond p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
        {titre}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-blanc-casse/85">
        {chapo}
      </p>
      <ul className="mt-4 space-y-1.5 text-xs leading-relaxed text-gris-clair">
        {services.map((s) => (
          <li key={s} className="flex gap-2">
            <span className="text-cyan-proofeus/60">→</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Formule({
  nom,
  prix,
  cadence,
  chapo,
  inclus,
  vedette,
}: {
  nom: string;
  prix: string;
  cadence: string;
  chapo: string;
  inclus: string[];
  vedette?: boolean;
}) {
  return (
    <div
      className={`rounded-sm border p-8 transition-transform ${
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
            fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
            lineHeight: 1,
          }}
        >
          {prix}
        </span>
        <span className="text-xs text-gris-clair">/{cadence}</span>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-gris-clair">{chapo}</p>
      <ul className="mt-6 space-y-2 text-xs leading-relaxed text-blanc-casse/85">
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
   Données
   ══════════════════════════════════════════════════════════════════ */

const FAMILLES_DETAIL = [
  {
    titre: "Identité",
    chapo:
      "Votre Sceau est votre identité opposable sur l'ensemble de l'écosystème et au-delà.",
    services: [
      "Sceau d'humanité (identité de base)",
      "Sceau d'identité eIDAS (KYC certifié)",
      "Sceau d'auteur pour vos œuvres",
    ],
  },
  {
    titre: "Communication",
    chapo:
      "Messagerie chiffrée bout-en-bout entre humains biométriquement vérifiés — fini les deepfakes.",
    services: [
      "Chat E2E entre Sceaux",
      "Cercles familiaux et pros",
      "Contacts scellés uniquement",
    ],
  },
  {
    titre: "Patrimoine",
    chapo:
      "Vos mots de passe, vos clés cryptographiques, vos documents importants — tout est débloqué par vos empreintes.",
    services: [
      "Wallet de mots de passe",
      "Wallet crypto sans seed phrase",
      "Coffre-fort de documents",
    ],
  },
  {
    titre: "Transactions",
    chapo:
      "Envoyez et recevez de la valeur entre humains vérifiés, sans intermédiaire — le premier rail conversationnel.",
    services: [
      "Paiement humain à humain",
      "Rail crypto EUR (stablecoins)",
      "Signature de contrats opposable",
    ],
  },
  {
    titre: "Transmission",
    chapo:
      "Léguez à vos proches vos actifs, vos œuvres, vos accès — avec verrouillage post-mortem sécurisé.",
    services: [
      "Testament numérique",
      "Legs et succession",
      "Cercle familial héritiers",
    ],
  },
  {
    titre: "Protection",
    chapo:
      "Alerter, se défendre, être remboursé — l'assurance civile contre les arnaques à l'IA.",
    services: [
      "Bouton d'alerte (Proofeus® Squad)",
      "Assurance anti-arnaque (Proofeus® Help)",
      "Veille menaces (Proofeus® Watch)",
    ],
  },
  {
    titre: "Création",
    chapo:
      "Signez vos œuvres physiques et numériques — le Sceau devient leur identité inaltérable.",
    services: [
      "Certification œuvres d'art physiques",
      "Certification NFT sur marketplaces",
      "Registre public consultable à vie",
    ],
  },
  {
    titre: "Orchestration IA",
    chapo:
      "Coryphea® orchestre l'ensemble de vos IA depuis un cockpit unique — votre cheffe d'orchestre personnelle.",
    services: [
      "Assistant personnel IA",
      "Orchestration multi-modèles",
      "Cockpit unifié Ataraxis",
    ],
  },
];

const FORMULES = [
  {
    nom: "Sceau",
    prix: "4,90 €",
    cadence: "an",
    chapo:
      "L'identité biométrique de base. Un Sceau d'humanité, un Sceau offert à un proche, l'accès à la messagerie chiffrée.",
    inclus: [
      "Sceau d'humanité + Sceau offert",
      "Messagerie chiffrée E2E",
      "Cercles de confiance (3 max)",
      "Accès au registre public",
    ],
  },
  {
    nom: "Souverain",
    prix: "19,90 €",
    cadence: "mois",
    chapo:
      "L'écosystème étendu : identité eIDAS, wallets Verbalock, testament numérique et boutons d'alerte.",
    inclus: [
      "Tout de la formule Sceau",
      "Identité eIDAS certifiée",
      "Wallet mots de passe + crypto",
      "Rail de paiement humain à humain",
      "Testament numérique + legs",
      "Boutons d'alerte + assurance de base",
    ],
    vedette: true,
  },
  {
    nom: "Intégral",
    prix: "39,90 €",
    cadence: "mois",
    chapo:
      "Toutes les briques activées, y compris Proofeus® Authentic (œuvres d'art + NFT) et Coryphea® (orchestration IA personnelle).",
    inclus: [
      "Tout de la formule Souverain",
      "Certification d'œuvres illimitée (Authentic)",
      "Sceaux d'auteur pour vos NFT",
      "Assurance anti-arnaque étendue",
      "Coryphea® — cockpit IA personnel",
      "Support prioritaire humain",
    ],
  },
];
