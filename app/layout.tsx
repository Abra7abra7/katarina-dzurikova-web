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
  metadataBase: new URL("https://www.katarinadzurikova.sk"),
  title: {
    default: "SHINE Štúdio Krásy | Kozmetika Liptovský Mikuláš, Ružomberok",
    template: "%s | SHINE Štúdio Krásy Liptov",
  },
  description:
    "Profesionálna kozmetika v Liptove. Permanentný make-up, pleťové ošetrenia, Kobido masáž, laminácia mihalníc. Katarína Dzuriková - vaša kozmetička v okolí Liptovského Mikuláša, Ružomberka, Jasnej a Bešeňovej.",
  keywords: [
    // Lokálne SEO - primárne
    "kozmetika Liptovský Mikuláš",
    "kozmetický salón Ružomberok",
    "kozmetička Liptov",
    "studio krásy Liptov",
    // Lokálne SEO - sekundárne
    "permanentný make-up Liptovský Mikuláš",
    "pleťové ošetrenia Ružomberok",
    "laminácia mihalníc Liptov",
    "kozmetika Jasná",
    "kozmetika Nízke Tatry",
    "kozmetička Bešeňová",
    "kozmetika Chopok",
    "kozmetika Chopok Sever",
    "beauty salón Liptov",
    "kozmetika Tatralandia",
    "kozmetika Liptovský Hrádok",
    // Služby
    "permanentný make-up pier",
    "permanentný make-up obočia",
    "Kobido masáž Liptov",
    "pleťové ošetrenia",
    "laminácia rias",
    "laminácia obočia",
    "architektúra obočia",
    "BioRePeel",
    "chemický peeling",
    // Brand
    "SHINE štúdio krásy",
    "Katarína Dzuriková",
    "studio krásy Pavlova Ves",
  ],
  authors: [{ name: "Katarína Dzuriková" }],
  creator: "SHINE Štúdio Krásy by Katarína Dzuriková",
  publisher: "SHINE Štúdio Krásy",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://www.katarinadzurikova.sk",
    siteName: "SHINE Štúdio Krásy",
    title: "SHINE Štúdio Krásy | Kozmetika Liptovský Mikuláš, Ružomberok",
    description:
      "Profesionálna kozmetika v Liptove. Permanentný make-up, pleťové ošetrenia, Kobido masáž. Katarína Dzuriková - kozmetička s individuálnym prístupom.",
    images: [
      {
        url: "/images/about/katarina-portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "SHINE Štúdio Krásy - Katarína Dzuriková, kozmetička Liptov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHINE Štúdio Krásy | Kozmetika Liptov",
    description: "Profesionálna kozmetika v okolí Liptovského Mikuláša a Ružomberka",
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
    canonical: "https://www.katarinadzurikova.sk",
  },
  other: {
    "geo.region": "SK-ZI",
    "geo.placename": "Pavlova Ves, Liptov",
    "geo.position": "49.1089;19.5844",
    "ICBM": "49.1089, 19.5844",
  },
};

// JSON-LD Structured Data pre lokálne SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "SHINE Štúdio Krásy",
  alternateName: ["Studio Krásy SHINE", "SHINE by Katarína Dzuriková"],
  "@id": "https://www.katarinadzurikova.sk",
  url: "https://www.katarinadzurikova.sk",
  telephone: "+421904678007",
  email: "Katarinasosikova@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pavlova Ves 24",
    addressLocality: "Bobrovec",
    postalCode: "032 21",
    addressRegion: "Žilinský kraj",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.1089,
    longitude: 19.5844,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Liptovský Mikuláš",
    },
    {
      "@type": "City", 
      name: "Ružomberok",
    },
    {
      "@type": "Place",
      name: "Jasná",
    },
    {
      "@type": "Place",
      name: "Chopok Sever",
    },
    {
      "@type": "Place",
      name: "Nízke Tatry",
    },
    {
      "@type": "Place",
      name: "Bešeňová",
    },
    {
      "@type": "Place",
      name: "Demänovská Dolina",
    },
    {
      "@type": "Place",
      name: "Liptovský Hrádok",
    },
    {
      "@type": "Place",
      name: "Tatralandia",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "€€",
  image: "https://www.katarinadzurikova.sk/images/about/katarina-portrait.jpeg",
  sameAs: [
    "https://instagram.com/k.dzurikova.studiokrasyshine",
  ],
  founder: {
    "@type": "Person",
    name: "Katarína Dzuriková",
    jobTitle: "Kozmetička",
    description: "Profesionálna kozmetička s dlhoročnými skúsenosťami v oblasti starostlivosti o pleť, permanentného make-upu a Kobido masáže.",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "SOŠ služieb Rimavská Sobota",
      },
      {
        "@type": "EducationalOrganization",
        name: "Univerzita Mateja Bela Banská Bystrica",
      },
      {
        "@type": "EducationalOrganization",
        name: "Prešovská univerzita v Prešove",
      },
    ],
  },
  description:
    "Profesionálna kozmetika v Liptove. Permanentný make-up, pleťové ošetrenia, Kobido masáž, laminácia mihalníc. Individuálny prístup ku každej klientke. Obsluhujeme okolie Liptovského Mikuláša, Ružomberka, Jasnej, Nízke Tatry a Bešeňovej.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kozmetické služby",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pleťové ošetrenia",
          description: "Hydratácia, lifting, čistenie a regenerácia pleti s profesionálnou kozmetikou Larens, ILCSI a Hydropeptide",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: "30",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Permanentný make-up",
          description: "Perfect lips a púdrové obočie - precízne techniky trénované u LEA MATYI a Marina Bondar",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: "30",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kobido masáž",
          description: "Japonská liftingová masáž tváre - neinvazívne omladenie",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laminácia rias a obočia",
          description: "Estetická úprava s dôrazom na prirodzený tvar",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: "10",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BioRePeel chemický peeling",
          description: "Revitalizačný peeling pre zlepšenie textúry a rozjasnenie pleti",
        },
      },
    ],
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Spokojná klientka",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
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
        {/* Google Search Console verifikácia - pridajte svoj vlastný kód */}
        {/* <meta name="google-site-verification" content="VAS_VERIFIKACNY_KOD" /> */}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F9F8F6" />
        <meta name="geo.region" content="SK-ZI" />
        <meta name="geo.placename" content="Pavlova Ves, Liptov, Slovensko" />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
