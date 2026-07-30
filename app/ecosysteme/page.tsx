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
          4. PROOFEUS® INTÉGRAL — anthracite (14,90 €/an à vie unique)
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
              Un seul tarif. Tout l&apos;écosystème. À vie.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
              14,90 €/an, verrouillés à vie pour tous les souscripteurs.
              Une seule et unique licence qui donne accès à l&apos;ensemble
              des services de l&apos;écosystème Proofeus
              <sup style={{ fontSize: "0.5em", verticalAlign: "0.7em" }}>®</sup>{" "}
              / Verbalock / Coryphea
              <sup style={{ fontSize: "0.5em", verticalAlign: "0.7em" }}>®</sup>.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-sm border border-cyan-proofeus/60 bg-noir-profond shadow-[0_28px_60px_-20px_rgba(63,212,217,0.4)]">
            <div className="grid gap-8 p-8 md:grid-cols-[auto_1fr] md:gap-12 md:p-12">
              {/* Prix */}
              <div className="flex flex-col items-center justify-center border-b border-cyan-proofeus/20 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
                  Proofeus
                  <sup style={{ fontSize: "0.5em", verticalAlign: "0.7em" }}>
                    ®
                  </sup>{" "}
                  intégral
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className="font-light text-blanc-casse"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                      fontSize: "clamp(3rem, 5vw, 4.5rem)",
                      lineHeight: 1,
                    }}
                  >
                    14,90 €
                  </span>
                  <span className="text-sm text-gris-clair">/an</span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-widest text-cyan-proofeus/80">
                  à vie
                </p>
              </div>

              {/* Ce qui est inclus */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blanc-casse/80">
                  Tout l&apos;écosystème inclus
                </p>
                <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-blanc-casse/90 sm:grid-cols-2">
                  {[
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
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-cyan-proofeus">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-sm border border-cyan-proofeus/30 bg-black/40 px-4 py-3 text-xs leading-relaxed text-blanc-casse/85">
                  Le socle seul <strong className="font-semibold text-cyan-proofeus">ne donne pas accès</strong> à Proofeus Authentic®. Pour certifier des œuvres, choisissez un supplément Art — le socle est alors automatiquement inclus.
                </p>
                <div className="mt-6">
                  <Link
                    href="/tarifs"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--color-cyan-proofeus)" }}
                  >
                    Voir les formules Art
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-gris-clair">
            Pour la certification d&apos;œuvres physiques ou numériques, un
            supplément Art s&apos;ajoute à ce socle unique — voir la page
            Tarifs.
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

