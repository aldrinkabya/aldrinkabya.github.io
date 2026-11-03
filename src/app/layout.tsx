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
// The link preview is the photo alone: public/og.jpg, the hero's framing at 800px.
const ogImage = { url: "/og.jpg", width: 800, height: 800, type: "image/jpeg", alt: profile.name };

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
    siteName: profile.displayName,
    title: profile.name,
    description,
    locale: "en_US",
    images: [ogImage],
  },
  // "summary": X shows a square image whole in the small card, and crops it in the large one.
  twitter: { card: "summary", title: profile.name, description, images: [ogImage] },
  appleWebApp: { title: "Aldrin", capable: false },
  // Google Search Console ownership check; keep it, or the property loses verification.
  verification: { google: "9Q4HlI0_HTdgLf0hoJFLjRLRveheNCUIkZLDbWVHKTA" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#111214" },
  ],
};

// schema.org Person, so search engines can tie a name search to this page.
const sameAs = profile.links.filter((l) => l.kind !== "email" && l.kind !== "cv").map((l) => l.href);
const person = {
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
// Google's site name, shown above the result; without it, *.github.io sites show "GitHub".
const website = { "@type": "WebSite", name: profile.displayName, url: `${siteUrl}/` };
const jsonLd = { "@context": "https://schema.org", "@graph": [website, person] };

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
