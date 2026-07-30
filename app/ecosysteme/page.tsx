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
          4. LES DEUX SOCLES — anthracite (14,90 € / 19,90 €)
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Deux socles à vie
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
              Un tarif pour l&apos;identité. Un tarif pour ceux qui
              certifient aussi.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
              Proofeus
              <sup style={{ fontSize: "0.5em", verticalAlign: "0.7em" }}>®</sup>{" "}
              pour l&apos;identité biométrique et les services personnels.
              Proofeus
              <sup style={{ fontSize: "0.5em", verticalAlign: "0.7em" }}>®</sup>{" "}
              intégral pour ceux qui certifient aussi leurs œuvres. Chacun
              verrouillé à vie.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            {/* Proofeus 14,90 € */}
            <EcoSocleCard
              nom="Proofeus®"
              prix="14,90 €"
              baseline="Identité + services personnels"
              inclus={[
                "Sceau d'humanité biométrique",
                "Messagerie chiffrée E2E",
                "Cercles de confiance",
                "Wallet mots de passe + crypto",
                "Paiement humain à humain",
                "Testament numérique + legs",
                "Boutons d'alerte Squad/Help",
                "Coryphea® — assistante IA",
              ]}
            />

            {/* Proofeus intégral 19,90 € — vedette */}
            <EcoSocleCard
              nom="Proofeus® intégral"
              prix="19,90 €"
              baseline="Identité + services + certification"
              vedette
              inclusJsx={
                <>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-cyan-proofeus">✓</span>
                    <span>Tout ce que contient Proofeus®</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-cyan-proofeus">✓</span>
                    <span>
                      <strong className="text-blanc-casse">
                        5 Sceaux d&apos;auteur par an
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-cyan-proofeus">✓</span>
                    <span>1 Sceau de création offert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-cyan-proofeus">✓</span>
                    <span>Certification NFT compatible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-cyan-proofeus">✓</span>
                    <span>Accès au Registre public</span>
                  </li>
                </>
              }
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Voir tous les tarifs (artistes + institutions)
            </Link>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-gris-clair">
            Les artistes qui certifient plus de 5 œuvres par an et les
            institutions disposent de suppléments et forfaits dédiés, à
            découvrir sur la page Tarifs.
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

/**
 * Card socle Proofeus® — header cyan lumineux avec prix + tag "à vie
 * jusqu'au premier million" + corps sombre avec liste des services.
 * Variante vedette : badge or "Recommandé" en angle top-right.
 * Version simplifiée du SocleCard de /tarifs (pas de CTA, pas de chapo).
 */
function EcoSocleCard({
  nom,
  prix,
  baseline,
  inclus,
  inclusJsx,
  vedette,
}: {
  nom: string;
  prix: string;
  baseline: string;
  inclus?: string[];
  inclusJsx?: React.ReactNode;
  vedette?: boolean;
}) {
  const headerGradient = vedette
    ? "linear-gradient(140deg, #3fd4d9 0%, #4ee0e5 40%, #6ce9ec 100%)"
    : "linear-gradient(140deg, #3fd4d9 0%, #46d8dc 100%)";

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-lg border border-gris-sombre"
      style={
        vedette
          ? { boxShadow: "0 28px 60px -20px rgba(63,212,217,0.35)" }
          : { boxShadow: "0 20px 48px -18px rgba(0,0,0,0.55)" }
      }
    >
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
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-40 blur-3xl"
          style={{ background: "rgba(255,255,255,0.55)" }}
        />
        <p
          className="relative text-xs font-bold uppercase tracking-widest"
          style={{ color: "#0d0d10" }}
        >
          {nom}
        </p>
        <p
          className="relative mt-2 text-sm"
          style={{ color: "rgba(13,13,16,0.75)" }}
        >
          {baseline}
        </p>
        <div className="relative mt-6 flex items-baseline gap-1">
          <span
            className="font-light text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.75rem, 4.5vw, 3.75rem)",
              lineHeight: 1,
              textShadow: "0 2px 12px rgba(0,0,0,0.25)",
            }}
          >
            {prix}
          </span>
          <span
            className="text-sm font-medium"
            style={{ color: "rgba(13,13,16,0.75)" }}
          >
            /an
          </span>
        </div>
        <p
          className="relative mt-3 text-[11px] font-semibold uppercase tracking-[0.24em]"
          style={{ color: "rgba(13,13,16,0.7)" }}
        >
          À vie jusqu&apos;au premier million
        </p>
      </div>

      <ul className="flex flex-1 flex-col space-y-2 bg-noir-profond p-8 text-sm leading-relaxed text-blanc-casse/90 md:p-10">
        {inclusJsx
          ? inclusJsx
          : inclus?.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 text-cyan-proofeus">✓</span>
                <span>{item}</span>
              </li>
            ))}
      </ul>
    </div>
  );
}

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

