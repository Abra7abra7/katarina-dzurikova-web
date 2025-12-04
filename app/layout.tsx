import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shineclinic.sk"),
  title: {
    default: "SHINE by Katarína Dzuriková | Estetická Klinika Bratislava",
    template: "%s | SHINE Estetická Klinika",
  },
  description:
    "Profesionálna estetická medicína v Bratislave. Permanentný make-up, pleťové ošetrenia, predĺženie mihalníc. Katarína Dzuriková s 10+ rokmi skúseností.",
  keywords: [
    "estetická klinika Bratislava",
    "permanentný make-up pier",
    "permanentný make-up obočia",
    "pleťové ošetrenia",
    "hydrabeauty",
    "karboxyterapia",
    "lifting tváre",
    "predĺženie mihalníc",
    "laminácia mihalníc",
    "anti-aging",
    "Katarína Dzuriková",
    "kozmetický salón Bratislava",
  ],
  authors: [{ name: "Katarína Dzuriková" }],
  creator: "SHINE by Katarína Dzuriková",
  publisher: "SHINE Estetická Klinika",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://shineclinic.sk",
    siteName: "SHINE Estetická Klinika",
    title: "SHINE by Katarína Dzuriková | Estetická Klinika Bratislava",
    description:
      "Profesionálna estetická medicína v Bratislave. Permanentný make-up, pleťové ošetrenia, predĺženie mihalníc.",
    images: [
      {
        url: "/images/about/katarina-portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "SHINE Estetická Klinika - Katarína Dzuriková",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHINE Estetická Klinika Bratislava",
    description: "Profesionálna estetická medicína v Bratislave",
    images: ["/images/about/katarina-portrait.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://shineclinic.sk",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "SHINE by Katarína Dzuriková",
  alternateName: "SHINE Estetická Klinika",
  "@id": "https://shineclinic.sk",
  url: "https://shineclinic.sk",
  telephone: "+421917123456",
  email: "info@shineclinic.sk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hlavná 123",
    addressLocality: "Bratislava",
    postalCode: "811 01",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1486,
    longitude: 17.1077,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "€€",
  image: "https://shineclinic.sk/images/about/katarina-portrait.jpeg",
  sameAs: [
    "https://instagram.com/shineclinic",
    "https://facebook.com/shineclinic",
  ],
  founder: {
    "@type": "Person",
    name: "Katarína Dzuriková",
    jobTitle: "Estetická špecialistka",
  },
  description:
    "Profesionálna estetická medicína v Bratislave. Permanentný make-up, pleťové ošetrenia, predĺženie mihalníc. Individuálny prístup a 10+ rokov skúseností.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby estetickej medicíny",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pleťové ošetrenia",
          description: "Hydratácia, lifting a regenerácia pleti",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "30",
          priceCurrency: "EUR",
          minPrice: "30",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Permanentný make-up",
          description: "Tetovanie pier a obočia",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "30",
          priceCurrency: "EUR",
          minPrice: "30",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Predĺženie mihalníc",
          description: "5D technika predĺženia mihalníc",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "10",
          priceCurrency: "EUR",
          minPrice: "10",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F9F8F6" />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
