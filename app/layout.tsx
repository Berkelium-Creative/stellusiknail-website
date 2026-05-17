import type { Metadata } from "next";
import content from "../data/content.json";
import "./globals.css";

const seo = (content as any).seo || {};

export const metadata: Metadata = {
  title: seo.title || "Business Site",
  description: seo.description || "",
  keywords: Array.isArray(seo.keywords) ? seo.keywords.join(", ") : "",
  openGraph: {
    title: seo.title || "",
    description: seo.description || "",
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
