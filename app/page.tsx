// @ts-nocheck
"use client";

import { Playfair_Display, Inter } from "next/font/google";
import content from "../data/content.json";

// Typography per /ui-ux-pro-max --design-system (elegant/editorial mood, Playfair + Inter)
const display = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

// Palette directly from /ui-ux-pro-max --design-system (Soft UI Evolution)
const ACCENT = "#2563EB";         // ui-ux-pro-max Primary (cobalt)
const ACCENT_DEEP = "#1E40AF";    // deeper cobalt, hand-picked from the same hue family
const CTA = "#F97316";            // ui-ux-pro-max CTA (orange)
const CTA_DEEP = "#C2410C";       // deeper orange for hover/active
const BG = "#F8FAFC";             // ui-ux-pro-max Background
const SURFACE = "#FFFFFF";        // card / contrasting block surface
const TEXT = "#1E293B";           // ui-ux-pro-max Foreground (slate-800)
const MUTED = "#475569";          // muted slate for body copy

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
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .fade-up { animation: fadeUp 0.9s ease-out forwards; }
        .fade-in { animation: fadeIn 1.2s ease-out forwards; }
        .delay-1 { animation-delay: 0.15s; opacity: 0; }
        .delay-2 { animation-delay: 0.30s; opacity: 0; }
        .delay-3 { animation-delay: 0.45s; opacity: 0; }
      `}</style>

      {/* NAV — clean, soft shadow on scroll feel */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(248,250,252,0.88)", borderBottom: "1px solid rgba(15,23,42,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className={display.className} style={{ fontWeight: 600, fontSize: "1.35rem", color: TEXT, letterSpacing: "0.01em" }}>
            Stellusik<span style={{ color: ACCENT }}>·</span>Nail
          </span>
          <div className="flex items-center gap-8">
            <a href="#services" className="hidden md:inline text-sm font-medium hover:opacity-70" style={{ color: TEXT }}>Services</a>
            <a href="#reviews" className="hidden md:inline text-sm font-medium hover:opacity-70" style={{ color: TEXT }}>Reviews</a>
            <a href="#visit" className="hidden md:inline text-sm font-medium hover:opacity-70" style={{ color: TEXT }}>Visit</a>
            <a href={phoneTel} className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg" style={{ backgroundColor: CTA, color: "#FFFFFF", boxShadow: "0 4px 12px rgba(249,115,22,0.25)" }}>
              Reserve
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — pattern: Hero-Centric with CTA above fold */}
      <section className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 grid md:grid-cols-12">
          <div className="hidden md:block md:col-span-7" style={{ backgroundColor: BG }} />
          <div className="absolute inset-0 md:relative md:col-span-5 bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")` }} />
        </div>
        <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(180deg, rgba(248,250,252,0.95) 0%, rgba(248,250,252,0.55) 55%, rgba(248,250,252,0.85) 100%)" }} />
        <div className="absolute inset-0 hidden md:block pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(248,250,252,1) 50%, rgba(248,250,252,0) 62%)" }} />
        <div className="relative max-w-6xl mx-auto px-6 z-10 grid md:grid-cols-12 gap-12 items-center w-full">
          <div className="md:col-span-7 fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-7" style={{ backgroundColor: "rgba(37,99,235,0.10)", color: ACCENT_DEEP }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: ACCENT, display: "inline-block" }} />
              5.0 · 71 Google reviews
            </span>
            <h1 className={display.className} style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 600, lineHeight: 1.04, color: TEXT, letterSpacing: "-0.02em" }}>
              {content.hero.heading}
            </h1>
            <p className="mt-7 text-lg leading-relaxed max-w-lg" style={{ color: MUTED }}>
              {content.hero.subheading}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href={content.hero.ctaLink} className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-[1.02]" style={{ backgroundColor: CTA, color: "#FFFFFF", boxShadow: "0 10px 24px rgba(249,115,22,0.28)" }}>
                {content.hero.ctaText}
                <span aria-hidden="true">→</span>
              </a>
              <a href="#services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold transition-all hover:scale-[1.02]" style={{ backgroundColor: SURFACE, color: ACCENT_DEEP, border: "1px solid rgba(15,23,42,0.10)", boxShadow: "0 2px 8px rgba(15,23,42,0.04)" }}>
                See the menu
              </a>
            </div>
            {/* Social proof strip */}
            <div className="mt-12 flex items-center gap-6 text-sm" style={{ color: MUTED }}>
              <div className="flex items-center gap-1.5" style={{ color: "#F59E0B" }}>
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span style={{ color: TEXT, fontWeight: 600 }}>5.0</span>
              <span style={{ borderLeft: "1px solid rgba(15,23,42,0.15)", paddingLeft: "1.5rem" }}>By appointment · Glendale, CA</span>
            </div>
          </div>
          <div className="hidden md:block md:col-span-5" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-xs tracking-[0.25em] uppercase mb-5 font-semibold" style={{ color: ACCENT }}>The Studio</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 600, color: TEXT, lineHeight: 1.1, letterSpacing: "-0.015em" }}>
          {content.about.heading}
        </h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: MUTED }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* SERVICES — cards with subtle soft-UI shadows */}
      <section id="services" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: ACCENT }}>The Menu</p>
              <h2 className={display.className} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: TEXT, lineHeight: 1.05, letterSpacing: "-0.015em" }}>
                Services, priced honestly.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: MUTED }}>
              Prices listed are starting points. Custom art, length, and design complexity adjust the final number — quoted before we start.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((s, i) => (
              <div key={i} className="p-7 rounded-2xl transition-all hover:-translate-y-1" style={{ backgroundColor: SURFACE, border: "1px solid rgba(15,23,42,0.06)", boxShadow: "0 4px 16px rgba(15,23,42,0.04)" }}>
                <h3 className={display.className} style={{ fontWeight: 600, fontSize: "1.4rem", color: TEXT, letterSpacing: "-0.01em" }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                  {s.description}
                </p>
                <p className="mt-5 font-semibold text-base" style={{ color: ACCENT }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS — social proof, large cards */}
      <section id="reviews" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: ACCENT }}>The Clients</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: TEXT, lineHeight: 1.1, letterSpacing: "-0.015em" }}>
            Five-star, seventy-one times over.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <figure key={i} className="p-8 rounded-2xl" style={{ backgroundColor: SURFACE, border: "1px solid rgba(15,23,42,0.06)", boxShadow: "0 4px 16px rgba(15,23,42,0.04)" }}>
              <div className="flex gap-0.5 mb-5 text-lg" style={{ color: "#F59E0B" }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <blockquote className={display.className} style={{ fontSize: "1.2rem", lineHeight: 1.5, color: TEXT, fontWeight: 500, letterSpacing: "-0.005em" }}>
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold" style={{ color: MUTED }}>
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-1.5 text-lg" style={{ color: "#F59E0B" }}>
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <span style={{ color: TEXT, fontWeight: 600 }}>5.0 average</span>
          <a href={content.social?.yelp || "#"} target="_blank" rel="noopener noreferrer" className="font-semibold hover:opacity-70" style={{ color: ACCENT_DEEP }}>
            Read all on Yelp →
          </a>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" style={{ backgroundColor: "#F1F5F9", borderTop: "1px solid rgba(15,23,42,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: ACCENT }}>Find Us</p>
            <h2 className={display.className} style={{ fontSize: "2.5rem", fontWeight: 600, color: TEXT, lineHeight: 1.1, letterSpacing: "-0.015em" }}>
              Visit the studio
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: MUTED }}>{content.contact.address}</p>
            <div className="mt-10 p-6 rounded-2xl" style={{ backgroundColor: SURFACE, border: "1px solid rgba(15,23,42,0.06)", boxShadow: "0 4px 16px rgba(15,23,42,0.04)" }}>
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => (
                    <tr key={day} className="border-b last:border-b-0" style={{ borderColor: "rgba(15,23,42,0.06)" }}>
                      <td className="py-3 font-semibold" style={{ color: TEXT }}>{day}</td>
                      <td className="py-3 text-right" style={{ color: MUTED }}>{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a href={phoneTel} className={display.className} style={{ display: "inline-block", marginTop: "2rem", fontSize: "2.25rem", fontWeight: 600, color: ACCENT_DEEP, letterSpacing: "-0.01em" }}>
              {content.contact.phone}
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(15,23,42,0.08)", minHeight: "500px", boxShadow: "0 10px 32px rgba(15,23,42,0.06)" }}>
            <iframe title="StellusikNail location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "500px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* CTA — cobalt feature block with bright orange button */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-[2rem] p-12 md:p-20 text-center" style={{ backgroundColor: ACCENT_DEEP, color: "#FFFFFF" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 100%, rgba(249,115,22,0.18) 0%, transparent 50%)" }} />
          <div className="relative">
            <p className="text-xs tracking-[0.25em] uppercase mb-5 font-semibold" style={{ color: "#93C5FD" }}>By Appointment</p>
            <h3 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.015em" }}>
              Reserve your chair.
            </h3>
            <p className="mt-6 max-w-md mx-auto text-base leading-relaxed" style={{ color: "rgba(248,250,252,0.80)" }}>
              One client at a time. Send a screenshot of your inspiration when you book — we'll plan it together.
            </p>
            <a href={phoneTel} className="inline-flex items-center gap-2 mt-10 px-10 py-4 rounded-full font-semibold transition-transform hover:scale-[1.03]" style={{ backgroundColor: CTA, color: "#FFFFFF", boxShadow: "0 10px 28px rgba(249,115,22,0.35)" }}>
              Call {content.contact.phone}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(15,23,42,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm" style={{ color: MUTED }}>
          <div>
            <p className={display.className} style={{ fontWeight: 600, fontSize: "1.15rem", color: TEXT, marginBottom: "0.35rem", letterSpacing: "-0.005em" }}>
              Stellusik<span style={{ color: ACCENT }}>·</span>Nail
            </p>
            <p>© {new Date().getFullYear()} · {content.contact.address}</p>
          </div>
          {content.social && (
            <div className="flex gap-6 text-sm font-semibold">
              {Object.entries(content.social).map(([platform, url]) => (
                <a key={platform} href={String(url)} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 capitalize" style={{ color: ACCENT_DEEP }}>
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
