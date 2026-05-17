// @ts-nocheck
"use client";

import { Bodoni_Moda, Jost, JetBrains_Mono } from "next/font/google";
import content from "../data/content.json";

// Typography per /ui-ux-pro-max — Luxury Minimalist + Editorial Mono labels.
// Bodoni Moda for headlines (fashion-house high contrast).
// Jost for body (geometric, modern, premium).
// JetBrains Mono for tracked-out labels (editorial mono signal).
const display = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const body = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// Luxury / Premium palette per /ui-ux-pro-max (Black + Gold + Cream).
const INK = "#1C1917";        // primary
const INK_SOFT = "#44403C";   // secondary
const GOLD = "#A16207";       // accent / CTA
const GOLD_DEEP = "#854D0E";  // hover
const CREAM = "#FAFAF9";      // background
const PAPER = "#FFFFFF";      // surface
const MUTED = "#78716C";      // muted body
const RULE = "#D6D3D1";       // hairline divider

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl =
    "https://maps.google.com/maps?output=embed&q=" +
    encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main
      className={body.className}
      style={{ backgroundColor: CREAM, color: INK, minHeight: "100vh" }}
    >
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        .fade-in { animation: fadeIn 1s ease-out both; }
        .d-1 { animation-delay: 80ms; }
        .d-2 { animation-delay: 160ms; }
        .d-3 { animation-delay: 240ms; }
        .d-4 { animation-delay: 320ms; }
        /* Drop cap for editorial paragraphs */
        .drop-cap::first-letter {
          font-family: 'Bodoni Moda', serif;
          font-weight: 600;
          float: left;
          font-size: 4.5rem;
          line-height: 0.88;
          padding: 0.4rem 0.6rem 0 0;
          color: ${INK};
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up, .fade-in { animation: none !important; }
        }
      `}</style>

      {/* TOP BAR — editorial masthead, just wordmark + reserve */}
      <header className="border-b" style={{ borderColor: INK, backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-4">
          <a href="#top" className={display.className} style={{ fontWeight: 600, fontSize: "1.5rem", color: INK, letterSpacing: "-0.005em", textDecoration: "none", fontStyle: "italic" }}>
            Stellusik <span style={{ fontStyle: "normal" }}>·</span> Nail
          </a>
          <div className="flex items-center gap-2 md:gap-4">
            <span className={mono.className} style={{ display: "none", color: MUTED, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }} className-md-inline>
              By appointment
            </span>
            <a href={phoneTel} className={mono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: INK, borderBottom: `1px solid ${GOLD}`, paddingBottom: "2px", textDecoration: "none" }}>
              {content.contact.phone}
            </a>
            <a href={phoneTel} className={mono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", marginLeft: "0.75rem", padding: "0.65rem 1.25rem", backgroundColor: INK, color: CREAM, textDecoration: "none" }}>
              Reserve →
            </a>
          </div>
        </div>
      </header>

      {/* BENTO HERO — asymmetric editorial grid above the fold */}
      <section id="top" className="border-b" style={{ borderColor: INK }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
          <div className="grid grid-cols-12 gap-3 md:gap-4" style={{ minHeight: "78vh" }}>

            {/* TITLE BLOCK — top-left, large */}
            <div className="col-span-12 md:col-span-7 lg:col-span-7 row-span-2 fade-up flex flex-col justify-between p-6 md:p-10" style={{ backgroundColor: CREAM, border: `1px solid ${INK}` }}>
              <div>
                <p className={mono.className} style={{ fontSize: "0.72rem", letterSpacing: "0.28em", color: GOLD_DEEP, textTransform: "uppercase" }}>
                  {content.hero.eyebrow}
                </p>
                <h1 className={display.className} style={{ marginTop: "1.5rem", fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.035em", color: INK }}>
                  {content.hero.heading.split(" ").map((w, i, arr) => i === arr.length - 1 ? <span key={i} style={{ fontStyle: "italic", color: GOLD_DEEP }}>{w}</span> : <span key={i}>{w} </span>)}
                </h1>
              </div>
              <p className="max-w-xl" style={{ marginTop: "2.5rem", fontSize: "1.0625rem", lineHeight: 1.55, color: INK_SOFT }}>
                {content.hero.subheading}
              </p>
            </div>

            {/* HERO PHOTO — top-right, full-height feature */}
            <div className="col-span-12 md:col-span-5 lg:col-span-5 row-span-3 fade-in d-1" style={{ minHeight: "55vh", backgroundImage: `url("${content.hero.image}")`, backgroundSize: "cover", backgroundPosition: "center", border: `1px solid ${INK}` }} role="img" aria-label="Bespoke nail art by StellusikNail" />

            {/* STAT BLOCK — bottom-left */}
            <div className="col-span-6 md:col-span-3 lg:col-span-3 fade-up d-2 p-6 md:p-7 flex flex-col justify-between" style={{ backgroundColor: INK, color: CREAM, border: `1px solid ${INK}` }}>
              <p className={mono.className} style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,250,249,0.7)" }}>
                {content.hero.stat.label}
              </p>
              <div>
                <p className={display.className} style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)", fontWeight: 600, lineHeight: 0.85, color: CREAM, letterSpacing: "-0.02em" }}>
                  {content.hero.stat.value}
                </p>
                <p style={{ marginTop: "0.5rem", fontSize: "0.78rem", color: "rgba(250,250,249,0.65)", lineHeight: 1.4 }}>
                  {content.hero.stat.footnote}
                </p>
              </div>
            </div>

            {/* CTA BLOCK — bottom-middle */}
            <div className="col-span-6 md:col-span-4 lg:col-span-4 fade-up d-3 p-6 md:p-7 flex flex-col justify-between" style={{ backgroundColor: CREAM, border: `1px solid ${INK}` }}>
              <p className={mono.className} style={{ fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: MUTED }}>
                Reserve your chair
              </p>
              <div>
                <p className={display.className} style={{ fontSize: "1.6rem", fontWeight: 500, lineHeight: 1.1, color: INK, letterSpacing: "-0.015em" }}>
                  One client at a time. Send a reference photo when you book.
                </p>
                <a href={content.hero.ctaLink} className={mono.className} style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginTop: "1.25rem", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: INK, borderBottom: `1.5px solid ${GOLD}`, paddingBottom: "4px", textDecoration: "none" }}>
                  {content.hero.ctaText}
                  <span aria-hidden style={{ color: GOLD_DEEP }}>→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EDITORIAL ABOUT — drop cap, magazine multi-column on desktop */}
      <section id="studio" className="py-24 md:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className={mono.className} style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: GOLD_DEEP }}>
            {content.about.label}
          </p>
          <h2 className={display.className} style={{ marginTop: "1rem", maxWidth: "20ch", fontSize: "clamp(2rem, 4.5vw, 3.75rem)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.025em", color: INK }}>
            {content.about.heading}
          </h2>
          <div className="grid md:grid-cols-12 gap-8 mt-12">
            <p className="md:col-span-12 max-w-3xl drop-cap" style={{ fontSize: "1.4rem", lineHeight: 1.5, color: INK_SOFT, fontWeight: 300 }}>
              {content.about.leadIn}
            </p>
            <div className="md:col-span-12 mt-4" style={{ columnCount: 2, columnGap: "3rem" }}>
              <style jsx>{`
                @media (max-width: 767px) { div { column-count: 1 !important; } }
              `}</style>
              {content.about.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: "1.0625rem", lineHeight: 1.65, color: INK_SOFT, marginBottom: "1.2rem", breakInside: "avoid" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — full-bleed editorial */}
      <section style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${INK}`, backgroundColor: CREAM }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <span aria-hidden className={display.className} style={{ display: "block", fontSize: "clamp(5rem, 12vw, 9rem)", color: GOLD, lineHeight: 0.8, fontWeight: 500, fontStyle: "italic" }}>“</span>
          <blockquote className={display.className} style={{ marginTop: "1rem", fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)", lineHeight: 1.25, fontStyle: "italic", fontWeight: 400, color: INK, letterSpacing: "-0.015em", maxWidth: "26ch", marginInline: "auto" }}>
            {content.pullQuote.text}
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-1">
            <p className={mono.className} style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: INK }}>{content.pullQuote.author}</p>
            <p className={mono.className} style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED }}>{content.pullQuote.detail}</p>
          </div>
        </div>
      </section>

      {/* SERVICES — editorial price ledger, hairline rules, NOT cards */}
      <section id="services" className="py-24 md:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <div className="md:col-span-7">
              <p className={mono.className} style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: GOLD_DEEP }}>
                The Studio Menu
              </p>
              <h2 className={display.className} style={{ marginTop: "1rem", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.025em", color: INK }}>
                Six services, <span style={{ fontStyle: "italic", color: GOLD_DEEP }}>priced openly</span>.
              </h2>
            </div>
            <p className="md:col-span-5 self-end" style={{ fontSize: "1rem", lineHeight: 1.6, color: INK_SOFT }}>
              Starting prices. Custom art, length, and design complexity are quoted before the appointment begins — never after. No surprise add-ons.
            </p>
          </div>

          <ul className="border-t" style={{ borderColor: INK }}>
            {content.services.map((s, i) => (
              <li key={i} className="border-b py-7 md:py-8 grid grid-cols-12 gap-4 md:gap-8 items-baseline" style={{ borderColor: RULE }}>
                <span className={mono.className} style={{ gridColumn: "span 1", fontSize: "0.7rem", letterSpacing: "0.22em", color: MUTED }}>0{i + 1}</span>
                <div className="col-span-7 md:col-span-5">
                  <h3 className={display.className} style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)", fontWeight: 500, color: INK, letterSpacing: "-0.015em" }}>
                    {s.title}
                  </h3>
                </div>
                <p className="col-span-12 md:col-span-5 order-last md:order-none" style={{ fontSize: "0.96rem", lineHeight: 1.55, color: INK_SOFT }}>
                  {s.description}
                </p>
                <span className={mono.className} style={{ gridColumn: "span 4 / span 4", textAlign: "right", fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD_DEEP, fontWeight: 500 }}>
                  {s.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VISIT — single dark feature block with gold hairlines inside */}
      <section id="visit" className="py-24 md:py-32" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-0" style={{ backgroundColor: INK, color: CREAM, border: `1px solid ${INK}` }}>

            <div className="md:col-span-5 p-8 md:p-12" style={{ borderRight: `1px solid rgba(250,250,249,0.12)` }}>
              <p className={mono.className} style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: GOLD }}>
                Visit the studio
              </p>
              <h2 className={display.className} style={{ marginTop: "1rem", fontSize: "clamp(1.85rem, 3.5vw, 2.65rem)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                1010 N Glendale Ave <span style={{ fontStyle: "italic", color: GOLD }}>#205</span>
              </h2>
              <p className="mt-3" style={{ fontSize: "0.95rem", color: "rgba(250,250,249,0.72)" }}>Glendale, CA 91206</p>

              <hr className="mt-10" style={{ borderColor: "rgba(250,250,249,0.18)" }} />
              <table className="mt-8 w-full text-sm">
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => (
                    <tr key={day} className="border-b" style={{ borderColor: "rgba(250,250,249,0.10)" }}>
                      <td className={mono.className} style={{ padding: "0.85rem 0", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "0.72rem", color: "rgba(250,250,249,0.78)" }}>{day}</td>
                      <td style={{ padding: "0.85rem 0", textAlign: "right", color: CREAM, fontSize: "0.95rem" }}>{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <a href={phoneTel} className={display.className} style={{ display: "inline-block", marginTop: "2.5rem", fontSize: "2.25rem", fontWeight: 500, color: GOLD, letterSpacing: "-0.015em", textDecoration: "none" }}>
                {content.contact.phone}
              </a>
            </div>

            <div className="md:col-span-7" style={{ minHeight: "480px", filter: "saturate(0.55) contrast(0.95)" }}>
              <iframe title="StellusikNail location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: "480px", display: "block" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
            </div>

          </div>
        </div>
      </section>

      {/* FULL-BLEED EDITORIAL CTA */}
      <section className="py-32 md:py-44 border-t" style={{ borderColor: INK, backgroundColor: CREAM }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className={mono.className} style={{ fontSize: "0.72rem", letterSpacing: "0.32em", textTransform: "uppercase", color: GOLD_DEEP }}>
            By appointment only
          </p>
          <h2 className={display.className} style={{ marginTop: "1.5rem", fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.035em", color: INK }}>
            Reserve <span style={{ fontStyle: "italic", color: GOLD_DEEP }}>your</span> chair.
          </h2>
          <p className="max-w-xl mx-auto mt-7" style={{ fontSize: "1.1rem", lineHeight: 1.55, color: INK_SOFT }}>
            One chair. One client. Three weeks of wear. Send a reference photo when you call — we'll plan the design together.
          </p>
          <a href={phoneTel} className={mono.className} style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem", marginTop: "2.5rem", padding: "1.1rem 2rem", backgroundColor: INK, color: CREAM, fontSize: "0.75rem", letterSpacing: "0.28em", textTransform: "uppercase", textDecoration: "none" }}>
            Call {content.contact.phone}
            <span aria-hidden style={{ color: GOLD }}>→</span>
          </a>
        </div>
      </section>

      {/* FOOTER — masthead style, gold hairline rule */}
      <footer style={{ backgroundColor: INK, color: CREAM, borderTop: `2px solid ${GOLD}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className={display.className} style={{ fontWeight: 600, fontSize: "1.4rem", letterSpacing: "-0.005em" }}>
              Stellusik <span style={{ fontStyle: "italic", color: GOLD }}>·</span> Nail
            </p>
            <p className={mono.className} style={{ marginTop: "0.5rem", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(250,250,249,0.6)" }}>
              © {new Date().getFullYear()} · Glendale, CA
            </p>
          </div>
          {content.social && (
            <div className={mono.className} style={{ display: "flex", gap: "1.5rem", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              {Object.entries(content.social).map(([platform, url]) => (
                <a key={platform} href={String(url)} target="_blank" rel="noopener noreferrer" style={{ color: CREAM, textDecoration: "none", borderBottom: `1px solid ${GOLD}`, paddingBottom: "2px" }}>
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
