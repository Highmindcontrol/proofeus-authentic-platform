"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";

/**
 * Widget d'assistance IA Coryphea® — conversationnel + mode vocal.
 *
 * V1 sans branchement Claude API : accepte une question et affiche
 * un message de disponibilité. Le mode vocal (Web Speech API) est
 * pleinement fonctionnel côté navigateur :
 *
 * - MICRO : reconnaissance vocale via SpeechRecognition
 *   (webkitSpeechRecognition pour Safari), langue fr-FR
 * - HAUT-PARLEUR : synthèse vocale via SpeechSynthesis, voix Google
 *   française paramétrée par défaut (fallback sur toute voix fr-FR
 *   puis sur la voix par défaut).
 *
 * Les événements onvoiceschanged sont écoutés pour que la liste
 * des voix arrive de façon asynchrone (comportement Chrome).
 */

type WebSpeechRecognition = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: { results: { 0: { transcript: string } }[] }) => void;
  onerror: (event: { error?: string }) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
};

type SpeechRecognitionCtor = new () => WebSpeechRecognition;

export function CorypheaWidget() {
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voiceReady, setVoiceReady] = useState(false);

  const recognitionRef = useRef<WebSpeechRecognition | null>(null);
  const selectedVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  /* ── Initialisation voix + reconnaissance ── */
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Voix — attend voiceschanged si nécessaire
    function pickBestVoice() {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) return;
      const googleFr =
        voices.find(
          (v) =>
            v.lang.toLowerCase().startsWith("fr") &&
            v.name.toLowerCase().includes("google"),
        ) ||
        voices.find((v) => v.lang.toLowerCase().startsWith("fr")) ||
        voices[0];
      selectedVoiceRef.current = googleFr ?? null;
      setVoiceReady(true);
    }

    pickBestVoice();
    window.speechSynthesis.addEventListener("voiceschanged", pickBestVoice);

    // Reconnaissance vocale
    const Ctor =
      ((window as unknown as { SpeechRecognition?: SpeechRecognitionCtor })
        .SpeechRecognition ??
        (
          window as unknown as {
            webkitSpeechRecognition?: SpeechRecognitionCtor;
          }
        ).webkitSpeechRecognition) ||
      null;

    if (Ctor) {
      const rec = new Ctor();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "fr-FR";
      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuestion(transcript);
        setListening(false);
        // Auto-envoi après reconnaissance vocale
        setTimeout(() => {
          setSent(true);
          speakReply();
        }, 300);
      };
      rec.onerror = () => setListening(false);
      rec.onend = () => setListening(false);
      recognitionRef.current = rec;
    }

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        pickBestVoice,
      );
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          /* ignore */
        }
      }
      window.speechSynthesis.cancel();
    };
  }, []);

  /* ── Parole ── */
  function speak(text: string) {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoiceRef.current) {
      utterance.voice = selectedVoiceRef.current;
    }
    utterance.lang = "fr-FR";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }

  function speakReply() {
    speak(
      "Je reçois votre question. Mon apprentissage sur l'univers Proofeus Authentic est en cours de finalisation. Je serai en mesure de vous répondre dès l'ouverture publique de la plateforme. En attendant, l'équipe humaine vous répond via le formulaire de contact ci-dessous.",
    );
  }

  function stopSpeaking() {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  /* ── Micro ── */
  function toggleMicro() {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setListening(true);
      } catch {
        setListening(false);
      }
    }
  }

  /* ── Envoi manuel ── */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setSent(true);
    speakReply();
  }

  const micDisponible =
    typeof window !== "undefined" &&
    !!(
      (window as unknown as { SpeechRecognition?: unknown }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: unknown })
        .webkitSpeechRecognition
    );

  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-sm border border-cyan-proofeus/40 bg-noir-profond">
      {/* Header du widget */}
      <div className="flex items-center gap-4 border-b border-cyan-proofeus/25 px-6 py-5">
        <div className="relative">
          <div
            aria-hidden
            className={`absolute inset-0 rounded-full blur-xl transition-opacity ${
              speaking || listening ? "opacity-80" : "opacity-40"
            }`}
            style={{ background: "var(--color-cyan-proofeus)" }}
          />
          <div
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-cyan-proofeus/60 bg-black"
            style={{ color: "var(--color-cyan-proofeus)" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
        <div className="flex-1">
          <p className="text-sm font-semibold text-blanc-casse">
            Coryphea
            <sup style={{ fontSize: "0.5em", verticalAlign: "0.6em" }}>®</sup>
          </p>
          <p className="text-xs text-gris-clair">
            L&apos;assistante IA de la maison Proofeus
            <sup style={{ fontSize: "0.5em", verticalAlign: "0.6em" }}>®</sup>{" "}
            —{" "}
            {listening
              ? "à l'écoute…"
              : speaking
                ? "en train de parler…"
                : voiceReady
                  ? "prête à échanger"
                  : "chargement de la voix…"}
          </p>
        </div>

        {/* Bouton stop parole */}
        {speaking && (
          <button
            type="button"
            onClick={stopSpeaking}
            aria-label="Interrompre la parole"
            className="flex-shrink-0 rounded-full border border-cyan-proofeus/50 bg-black px-3 py-1.5 text-xs font-medium text-cyan-proofeus transition-colors hover:bg-cyan-proofeus hover:text-noir"
          >
            Arrêter
          </button>
        )}
      </div>

      {/* Zone de conversation */}
      <div className="min-h-[180px] space-y-4 px-6 py-6">
        <div className="flex gap-3">
          <div
            aria-hidden
            className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full border border-cyan-proofeus/40 bg-black"
          />
          <div className="rounded-sm bg-black/50 px-4 py-3 text-sm leading-relaxed text-blanc-casse/90">
            Bienvenue. Je suis Coryphea, l&apos;assistante IA de Proofeus
            Authentic®. Posez-moi votre question — au clavier ou à la
            voix — sur la certification d&apos;œuvres, l&apos;écosystème
            Proofeus®, les tarifs ou l&apos;intégration marketplaces.
          </div>
        </div>

        {sent && (
          <>
            <div className="flex justify-end gap-3">
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
        className="flex items-center gap-2 border-t border-cyan-proofeus/25 px-6 py-4"
      >
        {/* Bouton micro */}
        {micDisponible ? (
          <button
            type="button"
            onClick={toggleMicro}
            aria-label={
              listening ? "Arrêter la reconnaissance vocale" : "Parler à Coryphea"
            }
            aria-pressed={listening}
            className={`flex-shrink-0 rounded-full border p-2.5 transition-all ${
              listening
                ? "animate-pulse border-red-400/70 bg-red-400/15 text-red-300"
                : "border-cyan-proofeus/50 bg-black text-cyan-proofeus hover:bg-cyan-proofeus hover:text-noir"
            }`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="9" y="3" width="6" height="12" rx="3" />
              <path d="M5 12a7 7 0 0 0 14 0" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="8" y1="22" x2="16" y2="22" />
            </svg>
          </button>
        ) : (
          <div
            className="flex-shrink-0 rounded-full border border-gris-sombre bg-black p-2.5 text-gris-clair/50"
            title="La reconnaissance vocale n'est pas supportée par ce navigateur"
            aria-hidden
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="3" width="6" height="12" rx="3" />
              <path d="M5 12a7 7 0 0 0 14 0" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="8" y1="22" x2="16" y2="22" />
              <line x1="4" y1="4" x2="20" y2="20" />
            </svg>
          </div>
        )}

        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={
            listening
              ? "Parlez maintenant…"
              : "Posez votre question à Coryphea…"
          }
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
      </form>
    </div>
  );
}
