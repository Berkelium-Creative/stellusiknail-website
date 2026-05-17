// @ts-nocheck
"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";
import content from "../data/content.json";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Editorial rose-gold + plum + cream palette (per /ui-ux-pro-max direction)
const ACCENT = "#B8826A";       // rose-gold
const ACCENT_DARK = "#5C2C36";  // deep plum
const BG = "#FBF7F1";           // cream
const TEXT = "#2A1A22";

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

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: "rgba(251,247,241,0.85)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className={display.className} style={{ fontWeight: 600, fontSize: "1.25rem", color: ACCENT_DARK, letterSpacing: "0.02em" }}>
            Stellusik<span style={{ color: ACCENT }}>•</span>Nail
          </span>
          <div className="flex items-center gap-8">
            <a href="#services" className="hidden md:inline text-sm tracking-wide hover:opacity-70" style={{ color: ACCENT_DARK }}>Services</a>
            <a href="#visit" className="hidden md:inline text-sm tracking-wide hover:opacity-70" style={{ color: ACCENT_DARK }}>Visit</a>
            <a href={phoneTel} className="px-6 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT_DARK, color: "#FBF7F1" }}>
              Reserve
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — split editorial */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 grid md:grid-cols-2">
          <div className="hidden md:block" style={{ backgroundColor: BG }} />
          <div className="absolute inset-0 md:relative bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")` }} />
        </div>
        <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(180deg, rgba(251,247,241,0.92) 0%, rgba(251,247,241,0.55) 55%, rgba(251,247,241,0.85) 100%)" }} />
        <div className="absolute inset-0 hidden md:block pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(251,247,241,1) 35%, rgba(251,247,241,0.0) 55%)" }} />
        <div className="relative max-w-6xl mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: ACCENT }}>Glendale · By Appointment</p>
            <h1 className={display.className} style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.05, color: ACCENT_DARK, letterSpacing: "-0.01em" }}>
              {content.hero.heading}
            </h1>
            <p className="mt-8 text-lg leading-relaxed max-w-md" style={{ color: "#5C4448" }}>
              {content.hero.subheading}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href={content.hero.ctaLink} className="inline-block px-9 py-4 rounded-full font-medium tracking-wide transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT_DARK, color: "#FBF7F1" }}>
                {content.hero.ctaText}
              </a>
              <a href="#services" className="text-sm tracking-wide" style={{ color: ACCENT_DARK, borderBottom: "1px solid " + ACCENT }}>
                See the menu
              </a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: ACCENT }}>The Studio</p>
        <h2 className={display.className} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, color: ACCENT_DARK, lineHeight: 1.1 }}>
          {content.about.heading}
        </h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: "#5C4448" }}>
          {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* SERVICES — editorial 2-column with ledger */}
      <section id="services" className="border-y" style={{ borderColor: "rgba(92,44,54,0.12)", backgroundColor: "#F4ECE2" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>The Menu</p>
              <h2 className={display.className} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, color: ACCENT_DARK, lineHeight: 1.05 }}>
                Services, priced honestly.
              </h2>
            </div>
            <p className="max-w-xs mt-4 md:mt-0 text-sm leading-relaxed" style={{ color: "#5C4448" }}>
              Prices listed are starting points. Custom art, length, and design complexity adjust the final number — quoted before we start.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-2">
            {content.services.map((s, i) => (
              <div key={i} className="py-7 flex items-baseline justify-between gap-6 border-b" style={{ borderColor: "rgba(92,44,54,0.10)" }}>
                <div className="flex-1">
                  <h3 className={display.className} style={{ fontWeight: 600, fontSize: "1.4rem", color: ACCENT_DARK }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#5C4448" }}>
                    {s.description}
                  </p>
                </div>
                <p className="font-medium text-base whitespace-nowrap" style={{ color: ACCENT }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>The Clients</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, color: ACCENT_DARK, lineHeight: 1.1 }}>
            Five-star, seventy-one times over.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {content.reviews.map((r, i) => (
            <figure key={i} className="p-8 rounded-2xl" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(92,44,54,0.10)" }}>
              <div className="flex gap-1 mb-5 text-lg" style={{ color: ACCENT }}>
                {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
              </div>
              <blockquote className={display.className} style={{ fontSize: "1.15rem", lineHeight: 1.5, color: ACCENT_DARK, fontStyle: "italic", fontWeight: 400 }}>
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 text-xs tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="border-t" style={{ borderColor: "rgba(92,44,54,0.12)", backgroundColor: "#F4ECE2" }}>
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: ACCENT }}>Find Us</p>
            <h2 className={display.className} style={{ fontSize: "2.25rem", fontWeight: 500, color: ACCENT_DARK, lineHeight: 1.1 }}>
              Visit the studio
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "#5C4448" }}>{content.contact.address}</p>
            <table className="mt-10 w-full text-sm">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} className="border-b" style={{ borderColor: "rgba(92,44,54,0.10)" }}>
                    <td className="py-3.5 font-medium tracking-wide" style={{ color: ACCENT_DARK }}>{day}</td>
                    <td className="py-3.5 text-right" style={{ color: "#5C4448" }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a href={phoneTel} className={display.className} style={{ display: "inline-block", marginTop: "2rem", fontSize: "2rem", fontWeight: 500, color: ACCENT_DARK, letterSpacing: "0.01em" }}>
              {content.contact.phone}
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(92,44,54,0.15)", minHeight: "500px", boxShadow: "0 10px 40px rgba(92,44,54,0.08)" }}>
            <iframe title="StellusikNail location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "500px" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="rounded-[2rem] p-12 md:p-20 text-center" style={{ backgroundColor: ACCENT_DARK, color: "#FBF7F1" }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: ACCENT }}>By Appointment</p>
          <h3 className={display.className} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, lineHeight: 1.05 }}>
            Reserve your chair.
          </h3>
          <p className="mt-6 max-w-md mx-auto text-base leading-relaxed" style={{ color: "rgba(251,247,241,0.75)" }}>
            One client at a time. Send a screenshot of your inspiration when you book — we'll plan it together.
          </p>
          <a href={phoneTel} className="inline-block mt-10 px-10 py-4 rounded-full font-medium tracking-wide transition-transform hover:scale-[1.03]" style={{ backgroundColor: ACCENT, color: "#FBF7F1" }}>
            Call {content.contact.phone}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: "rgba(92,44,54,0.12)" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm" style={{ color: "#5C4448" }}>
          <div>
            <p className={display.className} style={{ fontWeight: 600, fontSize: "1.1rem", color: ACCENT_DARK, marginBottom: "0.25rem" }}>
              Stellusik<span style={{ color: ACCENT }}>•</span>Nail
            </p>
            <p>© {new Date().getFullYear()} · {content.contact.address}</p>
          </div>
          {content.social && (
            <div className="flex gap-6 text-xs tracking-[0.2em] uppercase">
              {Object.entries(content.social).map(([platform, url]) => (
                <a key={platform} href={String(url)} target="_blank" rel="noopener noreferrer" className="hover:opacity-60" style={{ color: ACCENT_DARK }}>
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
