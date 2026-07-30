/**
 * Logos de paiement — reproductions sobres en SVG/CSS inline, adaptés
 * à la charte sombre Proofeus Authentic® (anthracite + cyan). Repris
 * du composant BarreConfiance de proofeus.com pour cohérence groupe.
 */

export function LogoStripe() {
  return (
    <span
      className="inline-flex h-9 items-center rounded-md px-3 text-sm font-bold italic tracking-tight text-white"
      style={{ background: "#635BFF" }}
      aria-label="Stripe"
    >
      stripe
    </span>
  );
}

export function LogoVisa() {
  return (
    <span
      className="inline-flex h-9 w-16 items-center justify-center rounded-md border border-white/25 bg-white text-sm font-bold italic tracking-tight"
      style={{ color: "#1A1F71" }}
      aria-label="Visa"
    >
      VISA
    </span>
  );
}

export function LogoMastercard() {
  return (
    <span
      className="inline-flex h-9 w-16 items-center justify-center gap-1 rounded-md border border-white/25 bg-white"
      aria-label="Mastercard"
    >
      <span
        aria-hidden
        className="h-5 w-5 rounded-full"
        style={{ background: "#EB001B" }}
      />
      <span
        aria-hidden
        className="-ml-3 h-5 w-5 rounded-full opacity-90"
        style={{ background: "#F79E1B", mixBlendMode: "multiply" }}
      />
    </span>
  );
}

export function LogoAmex() {
  return (
    <span
      className="inline-flex h-9 w-16 items-center justify-center rounded-md text-[11px] font-bold uppercase tracking-tight text-white"
      style={{ background: "#006FCF" }}
      aria-label="American Express"
    >
      Amex
    </span>
  );
}

export function LogoApplePay() {
  return (
    <span
      className="inline-flex h-9 w-16 items-center justify-center rounded-md text-xs font-semibold tracking-tight text-white"
      style={{ background: "#000000" }}
      aria-label="Apple Pay"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="mr-0.5"
      >
        <path d="M17.523 12.243c-.028-2.847 2.322-4.213 2.428-4.28-1.324-1.937-3.383-2.201-4.115-2.231-1.751-.178-3.418 1.033-4.307 1.033-.9 0-2.263-1.008-3.72-.98-1.912.027-3.677 1.115-4.66 2.833-1.988 3.443-.508 8.526 1.427 11.318.943 1.365 2.065 2.895 3.535 2.84 1.42-.058 1.956-.921 3.674-.921 1.706 0 2.207.921 3.71.888 1.531-.027 2.5-1.386 3.44-2.762 1.081-1.583 1.526-3.116 1.55-3.196-.033-.016-2.98-1.145-3.008-4.542zm-2.82-8.336c.787-.958 1.317-2.29 1.172-3.616-1.135.05-2.507.763-3.322 1.72-.727.844-1.365 2.192-1.194 3.493 1.267.099 2.552-.646 3.344-1.597z" />
      </svg>
      Pay
    </span>
  );
}

export function LogoGooglePay() {
  return (
    <span
      className="inline-flex h-9 w-16 items-center justify-center gap-0.5 rounded-md border border-white/25 bg-white text-sm font-bold tracking-tight"
      aria-label="Google Pay"
    >
      <span style={{ color: "#4285F4" }}>G</span>
      <span aria-hidden className="text-slate-500">
        Pay
      </span>
    </span>
  );
}

export function LogoSepa() {
  return (
    <span
      className="inline-flex h-9 w-16 items-center justify-center rounded-md text-[11px] font-bold uppercase tracking-tight text-white"
      style={{ background: "#004494" }}
      aria-label="Prélèvement SEPA"
    >
      SEPA
    </span>
  );
}

/**
 * Bandeau paiement sécurisé Stripe — mention + logos moyens de
 * paiement, adapté à la charte sombre proofeus.art.
 */
export function BandeauPaiementStripe() {
  return (
    <div className="rounded-2xl border border-cyan-proofeus/25 bg-noir-profond p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blanc-casse">
            <LogoStripe />
            Paiement sécurisé par Stripe
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gris-clair">
            Nous ne stockons jamais vos données bancaires — la transaction
            est traitée directement par Stripe, leader mondial du paiement
            en ligne (utilisé par Amazon, Google, Shopify et plus de quatre
            millions d&apos;entreprises).
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <LogoVisa />
          <LogoMastercard />
          <LogoAmex />
          <LogoApplePay />
          <LogoGooglePay />
          <LogoSepa />
        </div>
      </div>
    </div>
  );
}
