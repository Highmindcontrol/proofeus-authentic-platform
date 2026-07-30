import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadges } from "@/components/AppStoreBadges";

export const metadata: Metadata = {
  title: "Certifier une œuvre — Proofeus Authentic®",
  description:
    "Trois étapes pour sceller une œuvre. Préparation sur le site, appairage par QR code éphémère, validation biométrique sur votre téléphone. Votre biométrie ne quitte jamais votre appareil.",
};

const ETAPES: { titre: string; texte: string; icon: React.ReactNode }[] = [
  {
    titre: "Vous préparez l'œuvre",
    texte:
      "Sur cette page, vous téléchargez la photo haute définition de l'œuvre, vous saisissez ses dimensions, sa technique, sa date de création et son histoire. Le site prépare la fiche à sceller.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="4" y="6" width="24" height="16" rx="1.5" />
        <line x1="4" y1="18" x2="28" y2="18" />
        <line x1="12" y1="26" x2="20" y2="26" />
        <line x1="14" y1="22" x2="14" y2="26" />
        <line x1="18" y1="22" x2="18" y2="26" />
      </svg>
    ),
  },
  {
    titre: "Vous scannez le QR",
    texte:
      "Le site affiche un QR code d'appairage éphémère (session de 5 minutes). Vous ouvrez l'application Proofeus® sur votre téléphone et vous scannez le QR. La fiche préparée arrive instantanément sur votre appareil.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="4" y="4" width="9" height="9" />
        <rect x="19" y="4" width="9" height="9" />
        <rect x="4" y="19" width="9" height="9" />
        <path d="M19 19h4v4M28 23v5h-5M19 28h1" />
      </svg>
    ),
  },
  {
    titre: "Vous validez biométriquement",
    texte:
      "Sur votre téléphone, vous validez par vos empreintes biométriques multimodales — iris, morphologie, voix, paume, pouls. Le Sceau s'appose. L'œuvre rejoint le Registre public à la seconde même.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M2 16s5-8 14-8 14 8 14 8-5 8-14 8S2 16 2 16z" />
        <circle cx="16" cy="16" r="4.5" />
        <circle cx="16" cy="16" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
];

const GARANTIES: { titre: string; corps: string }[] = [
  {
    titre: "Souveraineté absolue",
    corps:
      "Vos cinq empreintes biométriques ne sont jamais copiées, jamais transférées, jamais stockées ailleurs que sur l'élément sécurisé de votre téléphone.",
  },
  {
    titre: "Aucun transit par le navigateur",
    corps:
      "Le site ne voit passer que le hash cryptographique de votre œuvre et la signature de validation renvoyée par votre appareil. Le navigateur ne touche jamais votre biométrie.",
  },
  {
    titre: "Standard éprouvé",
    corps:
      "Le même pattern que WalletConnect, Ledger Live, WhatsApp Web ou 1Password — la préparation d'un côté, la signature dans un composant sécurisé de l'autre.",
  },
];

export default function CertifierPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════════════
          1. HERO — image + titre sur 1 ligne + AppStoreBadges
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-end justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/salle-verification.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(13,13,16,0.7) 75%, rgba(13,13,16,0.98) 100%)",
          }}
        />

        {/* SALLE DE CERTIFICATION — positionné au-dessus du carré cyan
            qui contient le Sceau dans l'image du hero. Ajustable en % */}
        <div
          className="absolute z-10 px-6 text-center"
          style={{
            top: "38%",
            left: "50%",
            transform:
              "translate(-50%, -50%) translateX(170px) translateY(-270px)",
          }}
        >
          <p
            className="whitespace-nowrap font-light uppercase text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.15rem, 2.2vw, 1.9rem)",
              letterSpacing: "0.28em",
              lineHeight: 1,
              textShadow: "0 2px 16px rgba(0,0,0,0.7)",
            }}
          >
            Salle de certification
          </p>
        </div>

        <div className="relative z-10 mx-auto mb-24 max-w-5xl px-6 text-center md:mb-32">
          <h1
            className="font-light tracking-[-0.02em] text-blanc-casse"
            style={{
              fontFamily:
                "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.65rem, 3.6vw, 3rem)",
              lineHeight: 1.15,
              textShadow: "0 2px 24px rgba(0,0,0,0.65)",
            }}
          >
            <span className="block md:whitespace-nowrap">
              Toute œuvre certifiée reçoit son Sceau.
            </span>
          </h1>
        </div>

        {/* Badges App Store / Google Play — pied du hero, centré */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 px-6 md:bottom-12">
          <AppStoreBadges compact />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. TIMELINE handoff desktop → mobile — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h3
              className="mx-auto max-w-3xl font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Trois étapes, deux appareils.
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Préparation sur cet ordinateur, validation sur votre téléphone.
              Votre biométrie ne quitte jamais votre appareil.
            </p>
          </div>

          {/* Timeline horizontale avec icônes contextuelles */}
          <div className="relative mt-20">
            <div
              aria-hidden
              className="absolute left-[16%] right-[16%] top-8 hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(63,212,217,0.35) 15%, rgba(63,212,217,0.35) 85%, transparent 100%)",
              }}
            />

            <div className="grid gap-14 md:grid-cols-3 md:gap-8">
              {ETAPES.map((etape, i) => (
                <div
                  key={etape.titre}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Rond numéroté + halo cyan */}
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-full opacity-40 blur-2xl"
                      style={{ background: "var(--color-cyan-proofeus)" }}
                    />
                    <div
                      className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-proofeus/60 bg-noir-profond"
                      style={{
                        boxShadow:
                          "0 8px 24px -8px rgba(63,212,217,0.45), inset 0 0 20px rgba(63,212,217,0.1)",
                      }}
                    >
                      <span
                        className="font-light text-cyan-proofeus"
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                          fontSize: "1.75rem",
                          lineHeight: 1,
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Icône contextuelle sous le rond */}
                  <div
                    className="mt-5 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-proofeus/25 bg-noir-profond"
                    style={{ color: "var(--color-cyan-proofeus)" }}
                  >
                    {etape.icon}
                  </div>

                  <h3
                    className="mt-5 font-light text-blanc-casse md:whitespace-nowrap"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                      fontSize: "clamp(1.15rem, 1.7vw, 1.45rem)",
                      lineHeight: 1.25,
                    }}
                  >
                    {etape.titre}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-gris-clair md:text-base">
                    {etape.texte}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contexte visuel : icônes desktop et mobile reliés */}
          <div className="mt-20 flex items-center justify-center gap-6 text-center">
            <div className="flex flex-col items-center gap-2 text-gris-clair">
              <svg
                width="34"
                height="34"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="6" width="26" height="17" rx="1.5" />
                <line x1="3" y1="19" x2="29" y2="19" />
                <line x1="11" y1="27" x2="21" y2="27" />
              </svg>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">
                Préparation
              </span>
            </div>
            <span
              aria-hidden
              className="text-cyan-proofeus/50"
              style={{ fontSize: "1.5rem" }}
            >
              ⟶
            </span>
            <div className="flex flex-col items-center gap-2 text-cyan-proofeus">
              <svg
                width="34"
                height="34"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="10" y="3" width="12" height="26" rx="2" />
                <line x1="14" y1="26" x2="18" y2="26" />
              </svg>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">
                Validation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. POURQUOI CE HANDOFF — bandeau noir + garanties
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Pourquoi cette séparation
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
              Votre biométrie ne quitte jamais votre téléphone.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gris-clair md:text-lg">
              Nous aurions pu tout faire depuis le navigateur — c&apos;eût
              été plus simple, mais aussi bien moins sûr. En séparant la
              préparation (site) de la validation (téléphone), nous vous
              garantissons que vos empreintes ne transitent jamais par le
              web, et que seul un composant sécurisé de votre appareil peut
              signer un scellage à votre nom.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {GARANTIES.map((g) => (
              <div
                key={g.titre}
                className="rounded-sm border border-cyan-proofeus/25 bg-noir-profond p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
                  {g.titre}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gris-clair">
                  {g.corps}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. CONNEXION / INSCRIPTION — anthracite
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Pour commencer
            </p>
            <h2
              className="mx-auto mt-6 max-w-3xl font-light tracking-[-0.02em] text-blanc-casse"
              style={{
                fontFamily:
                  "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                lineHeight: 1.2,
              }}
            >
              Prêt à sceller votre première œuvre ?
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Connexion */}
            <div className="flex flex-col rounded-sm border border-gris-sombre bg-noir-profond p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
                Vous avez déjà un compte
              </p>
              <h3
                className="mt-4 font-light text-blanc-casse"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
                  lineHeight: 1.2,
                }}
              >
                Connectez-vous.
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gris-clair">
                Retrouvez votre Sceau, vos œuvres certifiées et l&apos;accès
                complet à votre espace de scellage. Authentification
                biométrique instantanée via l&apos;application Proofeus®.
              </p>
              <div className="mt-8">
                <Link
                  href="/connexion"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-proofeus/50 px-6 py-3 text-sm font-semibold text-cyan-proofeus transition-colors hover:bg-cyan-proofeus hover:text-noir"
                >
                  Se connecter
                </Link>
              </div>
            </div>

            {/* Inscription */}
            <div className="flex flex-col rounded-sm border border-cyan-proofeus/60 bg-noir-profond p-8 shadow-[0_20px_50px_-20px_rgba(63,212,217,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
                Pas encore inscrit
              </p>
              <h3
                className="mt-4 font-light text-blanc-casse"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
                  lineHeight: 1.2,
                }}
              >
                Créez votre compte.
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gris-clair">
                Enrôlement biométrique en quelques minutes via
                l&apos;application Proofeus®. Formule Découverte gratuite —
                un premier Sceau d&apos;œuvre offert, sans engagement.
              </p>
              <div className="mt-8">
                <Link
                  href="/inscription"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
                  style={{ background: "var(--color-cyan-proofeus)" }}
                >
                  Créer mon compte
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-14 max-w-xl text-center text-sm italic leading-relaxed text-gris-clair">
            « L&apos;acte de sceller est un rite. Proofeus Authentic® en
            garantit la solennité, la précision et la mémoire. »
          </p>
        </div>
      </section>
    </main>
  );
}
