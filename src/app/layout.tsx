import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
// Dates only: not worth competing with the hero's fonts for bandwidth.
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], preload: false });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], weight: ["500"] });

const cv = profile.links.find((l) => l.kind === "cv")!.href;
const { description } = profile;
// Rendered by src/app/og.png/route.tsx.
const ogImage = { url: "/og.png", width: 1200, height: 630, alt: `${profile.name}: ${profile.tagline}` };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: profile.name,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: siteUrl }],
  keywords: [profile.name, ...profile.keywords],
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title: profile.name,
    description,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title: profile.name, description, images: [ogImage] },
  appleWebApp: { title: "Aldrin", capable: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#111214" },
  ],
};

// schema.org Person, so search engines can tie a name search to this page.
const sameAs = profile.links.filter((l) => l.kind !== "email" && l.kind !== "cv").map((l) => l.href);
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: profile.jobTitle,
  description: profile.tagline,
  worksFor: { "@type": "Organization", name: profile.affiliation.name, url: profile.affiliation.href },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.institution, url: education.institutionHref },
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  knowsAbout: profile.keywords,
  sameAs,
};

// Scroll reveals ([data-reveal] in globals.css). Runs before first paint and
// does not wait for React. Without JS the html.js class is never set, so
// nothing is ever hidden.
const revealScript = `(function(){if(!("IntersectionObserver" in window))return;document.documentElement.classList.add("js");document.addEventListener("DOMContentLoaded",function(){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.setAttribute("data-reveal","in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px"});document.querySelectorAll("[data-reveal]").forEach(function(el){io.observe(el)})})})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only z-50 rounded-md bg-surface px-3 py-2 text-sm font-medium text-fg shadow-card focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
          >
            Skip to content
          </a>
          <Nav name={profile.name} cvHref={cv} />
          <main id="main" className="mx-auto max-w-3xl px-4 sm:px-6">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
