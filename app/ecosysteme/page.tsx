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
          2. MIND MAP — le bouclier au centre, les apps autour
          ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Le bouclier au centre
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
              Un Sceau. Des apps qui reposent dessus.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Votre Sceau Proofeus® est le socle — biométrique, souverain,
              infranchissable. Chaque app de l&apos;écosystème est
              téléchargeable indépendamment sur App Store et Google Play,
              mais toutes exigent votre Sceau pour fonctionner.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm italic leading-relaxed text-gris-clair/85">
              Vous choisissez ce que vous branchez, vous ne payez que ce
              que vous utilisez.
            </p>
          </div>

          <div className="mt-24 md:mt-28">
            <MindMapEcosysteme />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. LES DEUX SOCLES — bandeau noir
          ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-24 md:px-12 md:py-32"
        style={{ background: "#000" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              Deux façons d&apos;entrer
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
              Le bouclier seul, ou l&apos;écosystème complet.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gris-clair md:text-lg">
              Vous préférez commencer petit et ajouter les apps une à une ?
              Sovereign. Vous voulez tout d&apos;un coup, en économisant
              51 % ? Intégral.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            <EcoSocleCard
              nom="Proofeus® Sovereign"
              prix="14,90 €"
              baseline="Le bouclier + protections nativement incluses"
              inclus={[
                "Sceau d'humanité biométrique multimodal",
                "Cercles de confiance & fonction ping",
                "Help — bouton d'alerte physique",
                "Coryphea® — assistante conversationnelle",
                "Watch® — observatoire IA malveillante",
                "Consultation du Registre public",
              ]}
            />

            <EcoSocleCard
              nom="Proofeus® Intégral"
              prix="29,90 €"
              baseline="Sovereign + Verbalock® complet + Legacy® + Authentic® occasionnel"
              vedette
              inclus={[
                "Tout Sovereign (bouclier + protections)",
                "Verbalock® Passwords, Crypto, Chat, Pay",
                "Legacy® — testament et transmission",
                "Authentic® — 5 Sceaux d'auteur par an",
                "1 Sceau de création offert",
                "Accès complet au Registre public",
              ]}
            />
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-gris-clair">
            Les apps modulaires s&apos;ajoutent à Sovereign en un clic
            depuis votre hub. Aucune commission App Store — vous ne payez
            que ce que vous utilisez.
          </p>

          <div className="mt-10 text-center">
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-cyan-proofeus)" }}
            >
              Voir tous les tarifs
            </Link>
          </div>
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
    ? "linear-gradient(180deg, #4ee0e5 0%, #3fd4d9 30%, #2aa2a6 70%, #1a4a4c 100%)"
    : "linear-gradient(180deg, #3fd4d9 0%, #2ba8ac 55%, #16484a 100%)";

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
          className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-45 blur-3xl"
          style={{ background: "rgba(255,255,255,0.6)" }}
        />

        {/* Nom du forfait — gros, serif, blanc gras */}
        <h3
          className="relative font-bold tracking-[-0.01em] text-blanc-casse"
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
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
              fontSize: "clamp(3rem, 5vw, 4.25rem)",
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
            /an
          </span>
        </div>
        <p
          className="relative mt-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.92)" }}
        >
          À vie pour le premier million d&apos;utilisateurs
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

/**
 * Rend le nom du forfait en gérant le ® en superscript propre.
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

/* Composant FamilleDetail + tableau FAMILLES_DETAIL supprimés
   (obsolètes avec le pivot doctrinal iPhone/App Store du 31 juillet
   2026 — la section "8 familles" est remplacée par le mind map
   recentré sur le Sceau + apps modulaires). */

