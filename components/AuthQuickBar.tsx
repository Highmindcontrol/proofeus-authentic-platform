"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Bandeau court "Connexion / Inscription" — deux pills cyan.
 *
 * Interactivité inline : le clic ouvre un panneau QR d'appairage
 * juste en dessous, sans quitter la page. Le pattern respecte la
 * doctrine handoff : l'utilisateur scanne le QR avec l'app Proofeus®
 * pour authentifier ou créer son compte biométriquement.
 *
 * V1 sans backend : QR simulé (Sceau canonique agrandi avec grille).
 * À brancher plus tard sur une vraie session éphémère + WebSocket.
 */

type Mode = null | "connexion" | "inscription";

export function AuthQuickBar() {
  const [mode, setMode] = useState<Mode>(null);

  return (
    <div className="mx-auto max-w-4xl">
      {/* Deux pills */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() =>
            setMode((m) => (m === "connexion" ? null : "connexion"))
          }
          aria-expanded={mode === "connexion"}
          className={`group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-medium transition-all ${
            mode === "connexion"
              ? "border-cyan-proofeus bg-cyan-proofeus text-noir"
              : "border-cyan-proofeus/50 bg-black/60 text-cyan-proofeus hover:bg-cyan-proofeus hover:text-noir"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest opacity-70">
            J&apos;ai un compte
          </span>
          <span>Se connecter</span>
        </button>

        <button
          type="button"
          onClick={() =>
            setMode((m) => (m === "inscription" ? null : "inscription"))
          }
          aria-expanded={mode === "inscription"}
          className={`group inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition-all ${
            mode === "inscription"
              ? "border-cyan-proofeus bg-cyan-proofeus text-noir"
              : "border-cyan-proofeus/70 text-noir hover:-translate-y-0.5"
          }`}
          style={
            mode === "inscription"
              ? undefined
              : { background: "var(--color-cyan-proofeus)" }
          }
        >
          <span className="text-xs font-semibold uppercase tracking-widest opacity-70">
            Pas encore inscrit
          </span>
          <span>Créer mon compte</span>
        </button>
      </div>

      {/* Panneau QR expansible */}
      {mode && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-cyan-proofeus/40 bg-noir-profond/95 backdrop-blur">
          <div className="grid gap-8 p-8 md:grid-cols-[auto_1fr] md:gap-12 md:p-10">
            {/* QR d'appairage (placeholder V1) */}
            <div className="mx-auto flex-shrink-0 md:mx-0">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-lg opacity-30 blur-2xl"
                  style={{ background: "var(--color-cyan-proofeus)" }}
                />
                <div className="relative flex h-48 w-48 items-center justify-center rounded-lg border border-cyan-proofeus/50 bg-black p-4">
                  {/* Placeholder QR = grille + Sceau au centre */}
                  <div
                    aria-hidden
                    className="absolute inset-3 rounded"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, rgba(63,212,217,0.25) 0px, rgba(63,212,217,0.25) 4px, transparent 4px, transparent 12px), repeating-linear-gradient(90deg, rgba(63,212,217,0.25) 0px, rgba(63,212,217,0.25) 4px, transparent 4px, transparent 12px)",
                      maskImage:
                        "radial-gradient(circle at center, transparent 40px, black 55px)",
                      WebkitMaskImage:
                        "radial-gradient(circle at center, transparent 40px, black 55px)",
                    }}
                  />
                  <Image
                    src="/sceau-canonique.png"
                    alt=""
                    width={80}
                    height={80}
                    className="relative"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-widest text-cyan-proofeus/70">
                Session éphémère · 5 min
              </p>
            </div>

            {/* Instructions */}
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-proofeus">
                {mode === "connexion"
                  ? "Connexion biométrique"
                  : "Créer votre compte"}
              </p>
              <h3
                className="mt-3 font-light text-blanc-casse"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
                  lineHeight: 1.25,
                }}
              >
                {mode === "connexion"
                  ? "Scannez ce QR avec l'app Proofeus®."
                  : "Téléchargez l'app, scannez ce QR."}
              </h3>
              {mode === "connexion" ? (
                <ol className="mt-5 space-y-2.5 text-sm leading-relaxed text-gris-clair">
                  <li className="flex gap-3">
                    <span className="mt-0.5 font-mono text-xs text-cyan-proofeus">
                      01
                    </span>
                    <span>Ouvrez l&apos;application Proofeus® sur votre téléphone.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 font-mono text-xs text-cyan-proofeus">
                      02
                    </span>
                    <span>Menu Connexion → « Scanner un appareil ».</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 font-mono text-xs text-cyan-proofeus">
                      03
                    </span>
                    <span>
                      Validez avec vos empreintes biométriques. Ce navigateur
                      est appairé, vous pouvez commencer.
                    </span>
                  </li>
                </ol>
              ) : (
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-gris-clair">
                  <p>
                    Pour certifier vos œuvres, il vous faut le socle{" "}
                    <strong className="font-medium text-blanc-casse">
                      Proofeus® intégral 19,90 €/an à vie
                    </strong>{" "}
                    (5 Sceaux d&apos;auteur par an inclus).
                  </p>
                  <p>
                    Les artistes prolifiques (plus de 5 œuvres/an) et les
                    institutions ajoutent un supplément Art ou choisissent
                    un forfait dédié. Rendez-vous sur la page Tarifs pour
                    tout voir en un coup d&apos;œil.
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {mode === "inscription" && (
                  <a
                    href="/tarifs"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-noir transition-transform hover:-translate-y-0.5"
                    style={{ background: "var(--color-cyan-proofeus)" }}
                  >
                    Voir les formules Art
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setMode(null)}
                  className="text-xs uppercase tracking-widest text-gris-clair transition-colors hover:text-cyan-proofeus"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
