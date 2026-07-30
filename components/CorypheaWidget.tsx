"use client";

import { useState, type FormEvent } from "react";

/**
 * Widget d'assistance IA Coryphea® — panneau conversationnel intégré.
 *
 * V1 sans branchement Claude API : accepte une question, affiche un
 * message de disponibilité à venir. À brancher plus tard sur
 * l'orchestrateur Coryphea qui interrogera un Claude entraîné sur
 * la doctrine Proofeus®.
 */
export function CorypheaWidget() {
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-cyan-proofeus/40 bg-noir-profond">
      {/* Header du widget */}
      <div className="flex items-center gap-4 border-b border-cyan-proofeus/25 px-6 py-5">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full opacity-40 blur-xl"
            style={{ background: "var(--color-cyan-proofeus)" }}
          />
          <div
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-cyan-proofeus/60 bg-black"
            style={{ color: "var(--color-cyan-proofeus)" }}
          >
            {/* Icône orchestre — cercle central + 4 satellites */}
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="16" cy="16" r="4" />
              <circle cx="16" cy="6" r="2" />
              <circle cx="16" cy="26" r="2" />
              <circle cx="6" cy="16" r="2" />
              <circle cx="26" cy="16" r="2" />
              <line x1="16" y1="12" x2="16" y2="8" />
              <line x1="16" y1="20" x2="16" y2="24" />
              <line x1="12" y1="16" x2="8" y2="16" />
              <line x1="20" y1="16" x2="24" y2="16" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-blanc-casse">
            Coryphea
            <sup
              style={{
                fontSize: "0.5em",
                verticalAlign: "0.6em",
                fontWeight: 400,
                marginLeft: "0.05em",
              }}
            >
              ®
            </sup>
          </p>
          <p className="text-xs text-gris-clair">
            L&apos;assistante IA de la maison Proofeus
            <sup
              style={{
                fontSize: "0.5em",
                verticalAlign: "0.6em",
                fontWeight: 400,
                marginLeft: "0.05em",
              }}
            >
              ®
            </sup>
          </p>
        </div>
      </div>

      {/* Zone de conversation */}
      <div className="min-h-[180px] space-y-4 px-6 py-6">
        {/* Message d'accueil */}
        <div className="flex gap-3">
          <div
            aria-hidden
            className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full border border-cyan-proofeus/40 bg-black"
          />
          <div className="rounded-sm bg-black/50 px-4 py-3 text-sm leading-relaxed text-blanc-casse/90">
            Bienvenue. Je suis Coryphea, l&apos;assistante IA de Proofeus
            Authentic®. Posez-moi votre question sur la certification
            d&apos;œuvres, l&apos;écosystème Proofeus®, les tarifs ou
            l&apos;intégration marketplaces — je vous réponds sur la base
            de la doctrine maison, vérifiable dans le Registre.
          </div>
        </div>

        {sent && (
          <>
            <div className="flex gap-3 justify-end">
              <div className="max-w-md rounded-sm border border-cyan-proofeus/30 bg-black/60 px-4 py-3 text-sm leading-relaxed text-blanc-casse">
                {question}
              </div>
              <div
                aria-hidden
                className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-gris-clair/30"
              />
            </div>
            <div className="flex gap-3">
              <div
                aria-hidden
                className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full border border-cyan-proofeus/40 bg-black"
              />
              <div className="rounded-sm bg-black/50 px-4 py-3 text-sm italic leading-relaxed text-gris-clair">
                Je reçois votre question. Mon apprentissage sur
                l&apos;univers Proofeus Authentic® est en cours de
                finalisation — je serai en mesure de vous répondre dès
                l&apos;ouverture publique de la plateforme. En attendant,
                l&apos;équipe humaine vous répond via le formulaire de
                contact ci-dessous.
              </div>
            </div>
          </>
        )}
      </div>

      {/* Zone de saisie */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-cyan-proofeus/25 px-6 py-4"
      >
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Posez votre question à Coryphea…"
            className="min-w-0 flex-1 rounded-full border border-gris-sombre bg-black px-5 py-2.5 text-sm text-blanc-casse outline-none transition-colors placeholder:text-blanc-casse/40 focus:border-cyan-proofeus/60"
          />
          <button
            type="submit"
            disabled={!question.trim()}
            className="flex-shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-noir transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            style={{ background: "var(--color-cyan-proofeus)" }}
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
