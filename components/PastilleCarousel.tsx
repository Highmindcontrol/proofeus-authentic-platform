"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export type PastilleItem = {
  titre: string;
  corps: string;
};

/**
 * Carrousel horizontal des pastilles noires (Apports / Protections).
 *
 * Effet coverflow léger : la carte active grande au centre, les voisines
 * réduites et opacifiées. Contrôles : flèches prev/next + dots indicateurs
 * + compteur 01/06 en overlay. Auto-play discret (pause au hover), boucle.
 *
 * Utilisé 3 fois sur la home : APPORTS, PROTECTIONS_ART, PROTECTIONS_ECOSYSTEMES.
 */
export function PastilleCarousel({
  items,
  autoplayMs = 6000,
}: {
  items: PastilleItem[];
  autoplayMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = items.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goPrev = useCallback(() => {
    setActive((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % n);
  }, [n]);

  useEffect(() => {
    if (paused || autoplayMs <= 0) return;
    timerRef.current = setInterval(goNext, autoplayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext, paused, autoplayMs]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Scène coverflow */}
      <div
        className="relative mx-auto h-[340px] w-full overflow-hidden sm:h-[320px] md:h-[300px]"
        style={{ perspective: "1400px" }}
      >
        {items.map((item, index) => {
          // Distance signée sur le cercle (support boucle)
          let offset = index - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const distance = Math.abs(offset);
          const isVisible = distance <= 2;
          const isActive = offset === 0;

          const translateX = offset * 62; // % de la largeur de la card
          const rotateY = offset * -14;
          const scale = isActive ? 1 : 0.82 - distance * 0.06;
          const opacity = !isVisible ? 0 : isActive ? 1 : distance === 1 ? 0.55 : 0.2;
          const zIndex = n - distance;

          return (
            <article
              key={item.titre}
              aria-hidden={!isActive}
              className="absolute left-1/2 top-1/2 flex h-[280px] w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-sm border bg-noir-profond p-6 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] sm:h-[260px] sm:w-[380px] md:w-[440px] md:p-8"
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents: isActive ? "auto" : "none",
                transformStyle: "preserve-3d",
                borderColor: isActive
                  ? "rgba(63, 212, 217, 0.55)"
                  : "var(--color-gris-sombre)",
                boxShadow: isActive
                  ? "0 24px 60px -20px rgba(63,212,217,0.28)"
                  : "none",
              }}
            >
              {/* Compteur discret en overlay */}
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/60">
                {String(index + 1).padStart(2, "0")}{" "}
                <span className="text-blanc-casse/30">
                  / {String(n).padStart(2, "0")}
                </span>
              </p>

              <div className="mt-6 flex flex-1 flex-col">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-proofeus">
                  {item.titre}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gris-clair md:text-base">
                  {item.corps}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Contrôles — flèches prev/next + dots indicateurs */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Précédent"
          onClick={goPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gris-sombre bg-noir-profond text-blanc-casse transition-all hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path
              d="M13 4L7 10L13 16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.titre}
              type="button"
              aria-label={`Aller à ${item.titre}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active
                  ? "w-8"
                  : "w-1.5 bg-blanc-casse/25 hover:bg-blanc-casse/50"
              }`}
              style={
                i === active
                  ? { background: "var(--color-cyan-proofeus)" }
                  : undefined
              }
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Suivant"
          onClick={goNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gris-sombre bg-noir-profond text-blanc-casse transition-all hover:border-cyan-proofeus/60 hover:text-cyan-proofeus"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 4L13 10L7 16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
