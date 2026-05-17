// @ts-nocheck
"use client";

import { Playfair_Display, Inter } from "next/font/google";
import content from "../data/content.json";

// Typography per /ui-ux-pro-max --design-system (elegant/editorial mood, Playfair + Inter)
const display = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

// Palette directly from /ui-ux-pro-max --design-system (Soft UI Evolution)
const ACCENT = "#2563EB";         // ui-ux-pro-max Primary (cobalt)
const ACCENT_DEEP = "#1E40AF";    // deeper cobalt for headings + outlined CTAs
const ACCENT_TINT = "#DBEAFE";    // very light cobalt — chip backgrounds
const CTA = "#F97316";            // ui-ux-pro-max CTA (orange)
const CTA_DEEP = "#C2410C";       // deeper orange for hover/active
const BG = "#F8FAFC";             // ui-ux-pro-max Background
const SURFACE = "#FFFFFF";        // card surface
const SOFT_SURFACE = "#F1F5F9";   // section secondary surface (slate-100)
const TEXT = "#1E293B";           // ui-ux-pro-max Foreground (slate-800)
const MUTED = "#475569";          // muted slate for body copy
const BORDER = "rgba(15,23,42,0.06)";

// Soft UI Evolution shadow tokens — improved shadows, softer than flat, clearer than neumorphism
const SHADOW_SM = "0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)";
const SHADOW = "0 4px 12px rgba(15,23,42,0.06), 0 2px 6px rgba(15,23,42,0.04)";
const SHADOW_LG = "0 12px 32px rgba(15,23,42,0.08), 0 4px 12px rgba(15,23,42,0.05)";
const SHADOW_CTA = "0 10px 24px rgba(249,115,22,0.28), 0 4px 8px rgba(249,115,22,0.16)";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main
      className={body.className}
      style={{ backgroundColor: BG, color: TEXT, minHeight: "100vh" }}
    >
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 0.6s ease-out forwards; }
        .fade-in { animation: fadeIn 0.9s ease-out forwards; }
        .lift { transition: transform 250ms ease, box-shadow 250ms ease; }
        .lift:hover { transform: translateY(-3px); }
        @media (prefers-reduced-motion: reduce) {
          .fade-up, .fade-in, .lift { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* NAV — clean wordmark, soft border, orange Reserve CTA */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(248,250,252,0.92)", borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className={display.className} style={{ fontWeight: 600, fontSize: "1.4rem", color: TEXT, letterSpacing: "-0.005em", textDecoration: "none" }}>
            Stellusik<span style={{ color: ACCENT }}>·</span>Nail
          </a>
          <div className="flex items-center gap-7">
            <a href="#features" className="hidden md:inline text-sm font-medium hover:opacity-70" style={{ color: TEXT }}>Why us</a>
            <a href="#services" className="hidden md:inline text-sm font-medium hover:opacity-70" style={{ color: TEXT }}>Services</a>
            <a href="#reviews" className="hidden md:inline text-sm font-medium hover:opacity-70" style={{ color: TEXT }}>Reviews</a>
            <a href="#visit" className="hidden md:inline text-sm font-medium hover:opacity-70" style={{ color: TEXT }}>Visit</a>
            <a href={phoneTel} className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.03]" style={{ backgroundColor: CTA, color: "#FFFFFF", boxShadow: SHADOW_CTA }}>
              Reserve
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — Hero-Centric pattern: centered headline + CTAs above the fold, photo in soft-shadowed frame */}
      <section id="top" className="pt-32 md:pt-36 pb-16 md:pb-24" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto px-6 text-center fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7" style={{ backgroundColor: ACCENT_TINT, color: ACCENT_DEEP }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: ACCENT, display: "inline-block" }} />
            5.0 · 71 Google reviews
          </span>
          <h1 className={display.className} style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)", fontWeight: 600, lineHeight: 1.05, color: TEXT, letterSpacing: "-0.025em", maxWidth: "16ch", margin: "0 auto" }}>
            {content.hero.heading}
          </h1>
          <p className="mt-7 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed" style={{ color: MUTED }}>
            {content.hero.subheading}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={content.hero.ctaLink} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-[1.03]" style={{ backgroundColor: CTA, color: "#FFFFFF", boxShadow: SHADOW_CTA }}>
              {content.hero.ctaText}
              <span aria-hidden="true" style={{ transform: "translateY(-1px)" }}>→</span>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold transition-all hover:scale-[1.03]" style={{ backgroundColor: SURFACE, color: ACCENT_DEEP, border: `1px solid ${BORDER}`, boxShadow: SHADOW_SM }}>
              See the menu
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm" style={{ color: MUTED }}>
            <div className="flex items-center gap-1.5 text-base" style={{ color: "#F59E0B" }} aria-label="5 star rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span style={{ color: TEXT, fontWeight: 600 }}>5.0 average</span>
            <span>By appointment</span>
            <span>Glendale, CA</span>
          </div>
        </div>

        {/* Hero image in a soft-shadowed rounded frame — sits centered below the CTA block */}
        <div className="mt-14 md:mt-20 max-w-5xl mx-auto px-6 fade-in">
          <div className="rounded-[2rem] overflow-hidden" style={{ boxShadow: SHADOW_LG, border: `1px solid ${BORDER}` }}>
            <div
              className="w-full"
              role="img"
              aria-label="Detail of bespoke nail art by StellusikNail"
              style={{
                backgroundImage: `url("${content.hero.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "16 / 9",
              }}
            />
          </div>
        </div>
      </section>

      {/* FEATURES — pattern says Hero > Features > CTA. Three soft-UI cards with subtle depth + hover lift. */}
      <section id="features" className="py-20 md:py-28" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className={display.className} style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.65rem)", fontWeight: 600, color: TEXT, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Why clients book — and rebook.
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: MUTED }}>
              Three things we're known for in Glendale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.features.map((f, i) => (
              <div key={i} className="lift p-8 rounded-2xl" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl mb-5" style={{ backgroundColor: ACCENT_TINT, color: ACCENT_DEEP }}>
                  <span className={display.className} style={{ fontWeight: 600, fontSize: "1.25rem" }}>{i + 1}</span>
                </div>
                <h3 className={display.className} style={{ fontWeight: 600, fontSize: "1.35rem", color: TEXT, letterSpacing: "-0.01em" }}>
                  {f.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: MUTED }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — quiet centered block, no big tracked label */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className={display.className} style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.65rem)", fontWeight: 600, color: TEXT, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            {content.about.heading}
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* SERVICES — card grid (not ledger), modern soft-UI, hover lift, price as cobalt chip */}
      <section id="services" className="py-20 md:py-28" style={{ backgroundColor: SOFT_SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className={display.className} style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.65rem)", fontWeight: 600, color: TEXT, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              The menu, priced honestly.
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: MUTED }}>
              Starting prices. Custom art, length, and complexity adjust the final number — quoted before we begin.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.services.map((s, i) => (
              <div key={i} className="lift p-7 rounded-2xl flex flex-col" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}`, boxShadow: SHADOW_SM }}>
                <h3 className={display.className} style={{ fontWeight: 600, fontSize: "1.35rem", color: TEXT, letterSpacing: "-0.01em" }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed flex-1" style={{ color: MUTED }}>
                  {s.description}
                </p>
                <div className="mt-5 inline-flex items-center self-start px-3 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: ACCENT_TINT, color: ACCENT_DEEP }}>
                  {s.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS — clean testimonial cards (no italic blockquote), modern social proof */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className={display.className} style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.65rem)", fontWeight: 600, color: TEXT, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              What clients say.
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: MUTED }}>
              5.0 average across 71 verified Google reviews.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.reviews.map((r, i) => (
              <div key={i} className="lift p-7 rounded-2xl flex flex-col" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
                <div className="flex gap-0.5 text-lg" style={{ color: "#F59E0B" }} aria-label={`${r.rating} of 5 stars`}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="mt-4 text-[0.98rem] leading-relaxed flex-1" style={{ color: TEXT }}>
                  {r.text}
                </p>
                <p className="mt-6 text-sm font-semibold" style={{ color: MUTED }}>
                  — {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT — soft-UI hours card on the left, rounded shadowed map iframe on the right */}
      <section id="visit" className="py-20 md:py-28" style={{ backgroundColor: SOFT_SURFACE, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <h2 className={display.className} style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.65rem)", fontWeight: 600, color: TEXT, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Visit the studio.
            </h2>
            <p className="mt-3 text-base md:text-lg" style={{ color: MUTED }}>
              {content.contact.address}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="p-7 md:p-8 rounded-2xl" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}`, boxShadow: SHADOW }}>
              <h3 className={display.className} style={{ fontWeight: 600, fontSize: "1.35rem", color: TEXT, letterSpacing: "-0.01em" }}>
                Hours
              </h3>
              <table className="mt-5 w-full text-sm">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => (
                    <tr key={day} className="border-b last:border-b-0" style={{ borderColor: BORDER }}>
                      <td className="py-3 font-semibold" style={{ color: TEXT }}>{day}</td>
                      <td className="py-3 text-right" style={{ color: MUTED }}>{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a href={phoneTel} className={display.className} style={{ display: "inline-block", marginTop: "1.75rem", fontSize: "1.85rem", fontWeight: 600, color: ACCENT_DEEP, letterSpacing: "-0.01em" }}>
                {content.contact.phone}
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${BORDER}`, minHeight: "420px", boxShadow: SHADOW }}>
              <iframe title="StellusikNail location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "420px", display: "block" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — cobalt feature block with orange button (final call-to-action per Hero > Features > CTA pattern) */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] p-12 md:p-20 text-center" style={{ backgroundColor: ACCENT_DEEP, color: "#FFFFFF", boxShadow: SHADOW_LG }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 15% 100%, rgba(249,115,22,0.22) 0%, transparent 55%)" }} />
            <div className="relative">
              <h3 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.025em" }}>
                Reserve your chair.
              </h3>
              <p className="mt-5 max-w-xl mx-auto text-base md:text-lg" style={{ color: "rgba(248,250,252,0.82)" }}>
                One client at a time. Send a reference photo when you book — we'll plan the look together.
              </p>
              <a href={phoneTel} className="inline-flex items-center gap-2 mt-10 px-10 py-4 rounded-full font-semibold transition-transform hover:scale-[1.03]" style={{ backgroundColor: CTA, color: "#FFFFFF", boxShadow: SHADOW_CTA }}>
                Call {content.contact.phone}
                <span aria-hidden="true" style={{ transform: "translateY(-1px)" }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm" style={{ color: MUTED }}>
          <div>
            <p className={display.className} style={{ fontWeight: 600, fontSize: "1.15rem", color: TEXT, letterSpacing: "-0.005em" }}>
              Stellusik<span style={{ color: ACCENT }}>·</span>Nail
            </p>
            <p className="mt-1">© {new Date().getFullYear()} · {content.contact.address}</p>
          </div>
          {content.social && (
            <div className="flex gap-5 text-sm font-semibold">
              {Object.entries(content.social).map(([platform, url]) => (
                <a key={platform} href={String(url)} target="_blank" rel="noopener noreferrer" className="capitalize hover:opacity-70" style={{ color: ACCENT_DEEP }}>
                  {platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </footer>
    </main>
  );
}
