# 🔧 DEVELOPER ŠABLÓNA - Slovak Beauty Salon Web

> **Technická dokumentácia pre škálovanie beauty webov**  
> **Verzia:** 2.0  
> **Posledná aktualizácia:** December 2025

---

## 📋 OBSAH

1. [Quick Start Checklist](#quick-start-checklist)
2. [Premenné projektu](#premenné-projektu)
3. [Štruktúra súborov](#štruktúra-súborov)
4. [SEO & Schema.org šablóny](#seo--schemaorg-šablóny)
5. [AI Citácie - llms.txt](#ai-citácie---llmstxt)
6. [Deployment Checklist](#deployment-checklist)
7. [Google Business Profile](#google-business-profile)
8. [Testovanie](#testovanie)
9. [Copy-Paste šablóny kódu](#copy-paste-šablóny-kódu)

---

## ⚡ QUICK START CHECKLIST

### Pred začiatkom projektu:
- [ ] Vyplnený KLIENT_DOTAZNIK.md
- [ ] Fotky od klienta (min 10-15)
- [ ] Logo (ideálne SVG)
- [ ] Prístup k doméne / registrácia novej
- [ ] Prístup k Bookio/Reservio (ak používa)

### Kroky realizácie (v poradí):

| # | Krok | Čas | Súbory |
|---|------|-----|--------|
| 1 | Skopírovať template projekt | 5 min | celý projekt |
| 2 | Nastaviť premenné (farby, fonty) | 10 min | `tailwind.config.ts`, `globals.css` |
| 3 | Upraviť metadata a SEO | 20 min | `app/layout.tsx` |
| 4 | Upraviť llms.txt | 15 min | `public/llms.txt` |
| 5 | Upraviť robots.txt | 2 min | `public/robots.txt` |
| 6 | Upraviť sitemap | 2 min | `app/sitemap.ts` |
| 7 | Upraviť texty sekcií | 60 min | `components/sections/*` |
| 8 | Nahrať obrázky | 20 min | `public/images/*` |
| 9 | Optimalizovať obrázky | 10 min | Squoosh/TinyPNG |
| 10 | Nahrať video (ak je) | 10 min | Cloudflare R2 |
| 11 | Testovať lokálne | 15 min | `npm run dev` |
| 12 | Deploy na Vercel | 10 min | Vercel dashboard |
| 13 | Nastaviť doménu | 10 min | DNS záznamy |
| 14 | Google Search Console | 15 min | Verifikácia + sitemap |
| 15 | Google Business Profile | 30 min | Kompletné vyplnenie |
| 16 | Testovanie produkcie | 15 min | PageSpeed, Schema |

**Celkový čas:** ~4-5 hodín

---

## 📝 PREMENNÉ PROJEKTU

### Základné informácie (z dotazníka)

```javascript
// ===== PREMENNÉ NA VYPLNENIE =====

const PROJECT = {
  // BIZNIS INFO
  businessName: "_______________",           // "SHINE Štúdio Krásy"
  businessType: "BeautySalon",               // BeautySalon | HairSalon | NailSalon | Spa
  tagline: "_______________",                // "Vaša krása, naša starostlivosť"
  
  // MAJITEĽ
  ownerName: "_______________",              // "Katarína Dzuriková"
  ownerTitle: "Kozmetička",                  // Kozmetička | Kaderníčka | Vizážistka
  ownerDescription: "_______________",       // Krátky popis
  
  // KONTAKT
  phone: "+421 ___ ___ ___",
  phoneClean: "+421_________",               // bez medzier pre tel: link
  email: "_______________@_____",
  instagram: "@_______________",
  instagramUrl: "https://instagram.com/_______________",
  facebook: "https://facebook.com/_______________",
  
  // ADRESA
  street: "_______________",                 // "Pavlova Ves 24"
  city: "_______________",                   // "Bobrovec"
  postalCode: "___ __",                      // "032 21"
  region: "_______________",                 // "Žilinský kraj"
  country: "SK",
  
  // GPS (získať z Google Maps)
  lat: __.____,                              // 49.1089
  lng: __.____,                              // 19.5844
  
  // SEO LOKALITY
  primaryCity: "_______________",            // "Liptovský Mikuláš"
  secondaryCity: "_______________",          // "Ružomberok"
  nearbyPlaces: [                            // okolité lokality
    "_______________",
    "_______________",
    "_______________",
    "_______________",
  ],
  
  // DOMÉNA
  domain: "www._____________.sk",
  domainFull: "https://www._____________.sk",
  
  // REZERVÁCIE
  bookingUrl: "https://_______________",     // Bookio/Reservio URL
  bookingType: "Bookio",                     // Bookio | Reservio | Fresha | none
  
  // OTVÁRACIE HODINY
  openingHours: {
    weekdays: "09:00 - 18:00",
    saturday: "zatvorené",
    sunday: "zatvorené",
    note: "Na objednávku"
  },
  
  // FARBY
  colors: {
    primary: "#2C2C28",      // ink - hlavná tmavá
    secondary: "#F9F8F6",    // canvas - pozadie
    accent: "#CFB998",       // gold - akcent
  },
  
  // CENOVÉ ROZPÄTIE
  priceRange: "€€",          // € | €€ | €€€
};
```

---

## 📁 ŠTRUKTÚRA SÚBOROV

### Súbory NA ÚPRAVU pri novom projekte:

```
📁 projekt/
├── 📄 app/
│   ├── layout.tsx          ⚡ KRITICKÉ - metadata, JSON-LD, všetko SEO
│   ├── sitemap.ts          ⚡ KRITICKÉ - zmeniť doménu
│   ├── page.tsx            📝 Hlavná stránka (väčšinou OK)
│   ├── o-mne/page.tsx      📝 Metadata stránky
│   ├── sluzby/page.tsx     📝 Metadata stránky
│   ├── cennik/page.tsx     📝 Metadata stránky
│   ├── galeria/page.tsx    📝 Metadata stránky
│   └── kontakt/page.tsx    📝 Metadata stránky
│
├── 📄 components/sections/
│   ├── hero.tsx            📝 Video URL, texty
│   ├── about.tsx           📝 Texty, obrázok
│   ├── about-page.tsx      📝 Kompletný životopis
│   ├── services.tsx        📝 Služby, ceny
│   ├── services-page.tsx   📝 Detaily služieb
│   ├── pricing.tsx         📝 Cenník
│   ├── gallery.tsx         📝 Obrázky
│   ├── gallery-page.tsx    📝 Galéria stránka
│   ├── contact-page.tsx    📝 Kontaktné údaje
│   └── footer.tsx          📝 Kontakty, odkazy
│
├── 📄 components/
│   └── navbar.tsx          📝 Logo, navigácia
│
├── 📄 public/
│   ├── llms.txt            ⚡ KRITICKÉ - info pre AI
│   ├── robots.txt          ⚡ KRITICKÉ - sitemap URL
│   ├── favicon.ico         📝 Favicon
│   └── images/             📝 Všetky obrázky
│
├── 📄 tailwind.config.ts   📝 Farby, fonty
├── 📄 next.config.mjs      📝 CDN domains
└── 📄 package.json         ✅ Väčšinou OK
```

### Legenda:
- ⚡ **KRITICKÉ** - Musí sa zmeniť
- 📝 **UPRAVIŤ** - Obsah podľa klienta
- ✅ **OK** - Väčšinou netreba meniť

---

## 🔍 SEO & SCHEMA.ORG ŠABLÓNY

### layout.tsx - Kompletná metadata šablóna

```tsx
// app/layout.tsx

export const metadata: Metadata = {
  metadataBase: new URL("https://www.DOMENA.sk"),
  title: {
    default: "NAZOV_SALONU | Kozmetika MESTO1, MESTO2",
    template: "%s | NAZOV_SALONU",
  },
  description:
    "Profesionálna kozmetika v REGION. SLUZBA1, SLUZBA2, SLUZBA3. MENO_MAJITELA - vaša kozmetička v okolí MESTA1, MESTA2 a MESTA3.",
  keywords: [
    // Lokálne SEO - primárne
    "kozmetika MESTO1",
    "kozmetický salón MESTO2",
    "kozmetička REGION",
    // Lokálne SEO - sekundárne
    "SLUZBA1 MESTO1",
    "SLUZBA2 MESTO2",
    // Služby
    "SLUZBA1",
    "SLUZBA2",
    "SLUZBA3",
    // Brand
    "NAZOV_SALONU",
    "MENO_MAJITELA",
  ],
  authors: [{ name: "MENO_MAJITELA" }],
  creator: "NAZOV_SALONU by MENO_MAJITELA",
  publisher: "NAZOV_SALONU",
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://www.DOMENA.sk",
    siteName: "NAZOV_SALONU",
    title: "NAZOV_SALONU | Kozmetika MESTO1, MESTO2",
    description: "Profesionálna kozmetika v REGION...",
    images: [
      {
        url: "/images/about/portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "NAZOV_SALONU - MENO_MAJITELA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAZOV_SALONU | Kozmetika REGION",
    description: "Profesionálna kozmetika...",
    images: ["/images/about/portrait.jpeg"],
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
    canonical: "https://www.DOMENA.sk",
  },
  other: {
    "geo.region": "SK-__",  // SK-BA, SK-ZI, SK-KE, atď.
    "geo.placename": "MESTO, REGION",
    "geo.position": "LAT;LNG",
    "ICBM": "LAT, LNG",
  },
};
```

### JSON-LD BeautySalon Schema

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",  // alebo HairSalon, NailSalon, DaySpa
  name: "NAZOV_SALONU",
  alternateName: ["ALTERNATIVNY_NAZOV"],
  "@id": "https://www.DOMENA.sk",
  url: "https://www.DOMENA.sk",
  telephone: "+421TELEFON",
  email: "EMAIL@EMAIL.sk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ULICA CISLO",
    addressLocality: "MESTO",
    postalCode: "PSC",
    addressRegion: "KRAJ",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LAT,
    longitude: LNG,
  },
  areaServed: [
    { "@type": "City", name: "MESTO1" },
    { "@type": "City", name: "MESTO2" },
    { "@type": "Place", name: "MIESTO3" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€",
  image: "https://www.DOMENA.sk/images/about/portrait.jpeg",
  sameAs: [
    "https://instagram.com/INSTAGRAM",
    "https://facebook.com/FACEBOOK",
  ],
  founder: {
    "@type": "Person",
    name: "MENO_MAJITELA",
    jobTitle: "Kozmetička",
    description: "POPIS_MAJITELA",
    alumniOf: [
      { "@type": "EducationalOrganization", name: "SKOLA1" },
      { "@type": "EducationalOrganization", name: "SKOLA2" },
    ],
  },
  description: "DLHY_POPIS_SALONU",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SLUZBA1",
          description: "POPIS_SLUZBY1",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: "CENA",
        },
      },
    ],
  },
};
```

### JSON-LD FAQ Schema

```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "OTAZKA1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ODPOVED1",
      },
    },
    {
      "@type": "Question",
      name: "OTAZKA2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ODPOVED2",
      },
    },
    // ... ďalšie otázky
  ],
};
```

---

## 🤖 AI CITÁCIE - llms.txt

### Kompletná šablóna llms.txt

```markdown
# NAZOV_SALONU by MENO_MAJITELA
# Kozmetika MESTO1 a okolie
# https://www.DOMENA.sk

## Základné informácie
- Názov: NAZOV_SALONU
- Vlastník: MENO_MAJITELA
- Profesia: Profesionálna kozmetička
- Typ podnikania: Kozmetický salón
- Lokalita: ULICA, PSC MESTO, Slovensko
- Región: REGION, KRAJ, Slovensko
- Telefón: +421 ___ ___ ___
- Email: EMAIL@EMAIL.sk
- Instagram: @INSTAGRAM
- Web: https://www.DOMENA.sk

## O MENO_MAJITELA

POPIS_O_MAJITELOVI_2_3_VETY

"MOTTO_ALEBO_CITAT"

## Formálne vzdelanie

### ROKY: NAZOV_SKOLY
- Odbor: ODBOR
- Popis: POPIS_VZDELANIA

## Odborné certifikácie a školenia

### NAZOV_CERTIFIKATU
- POPIS_CERTIFIKATU

## Geografická poloha a dostupnosť

### Primárna oblasť - MESTO1
POPIS_DOSTUPNOSTI

### Obsluhované mestá a obce
- MESTO1 (X min)
- MESTO2 (X min)
- MESTO3 (X min)

## Ponúkané služby

### KATEGORIA1 (od X€)
- SLUZBA1 - popis
- SLUZBA2 - popis

### KATEGORIA2 (od X€)
- SLUZBA1 - popis
- SLUZBA2 - popis

## Otváracie hodiny
Pondelok - Piatok: 09:00 - 18:00
Na objednávku

## Cenník orientačne
- SLUZBA1: od X€
- SLUZBA2: od X€

## FAQ - Často kladené otázky

### OTAZKA1?
ODPOVED1

### OTAZKA2?
ODPOVED2

## Kľúčové slová
kozmetika MESTO1, kozmetický salón MESTO2, ...

## Kontakt a rezervácia
- Telefón: +421 ___ ___ ___
- Email: EMAIL@EMAIL.sk
- Instagram: https://instagram.com/INSTAGRAM
- Adresa: ULICA, PSC MESTO
- Web: https://www.DOMENA.sk

## Jazyky
- Slovenčina (primárny)
```

---

## 🚀 DEPLOYMENT CHECKLIST

### 1. Pre-deployment (lokálne)

```bash
# Inštalácia závislostí
npm install

# Build test
npm run build

# Lokálny test
npm run dev

# Lint check
npm run lint
```

### 2. Vercel Deployment

| Krok | Akcia |
|------|-------|
| 1 | Push na GitHub |
| 2 | Vercel > Import Project |
| 3 | Vybrať repository |
| 4 | Framework: Next.js (auto-detect) |
| 5 | Deploy |
| 6 | Nastaviť custom doménu |

### 3. DNS Nastavenia

```
# A záznam
@     A     76.76.21.21

# CNAME pre www
www   CNAME cname.vercel-dns.com
```

### 4. Google Search Console

| # | Krok | Poznámka |
|---|------|----------|
| 1 | Ísť na search.google.com/search-console | |
| 2 | Add Property > URL prefix | www.domena.sk |
| 3 | Verify > HTML file | Stiahnuť, nahrať do /public/ |
| 4 | Deploy znova | |
| 5 | Overiť | |
| 6 | Sitemaps > Add | sitemap.xml |
| 7 | URL Inspection > hlavná stránka | Request indexing |

### 5. Po deployi - kontrola

```bash
# Sitemap
curl https://www.DOMENA.sk/sitemap.xml

# Robots
curl https://www.DOMENA.sk/robots.txt

# LLMs
curl https://www.DOMENA.sk/llms.txt
```

---

## 📍 GOOGLE BUSINESS PROFILE

### Kompletný checklist

| # | Položka | Hodnota | ✅ |
|---|---------|---------|---|
| 1 | Názov firmy | NAZOV_SALONU | [ ] |
| 2 | Kategória | Kozmetický salón | [ ] |
| 3 | Adresa | ULICA, MESTO | [ ] |
| 4 | Telefón | +421... | [ ] |
| 5 | Web | https://www.domena.sk | [ ] |
| 6 | Hodiny | Po-Pi 9-18 | [ ] |
| 7 | Popis (750 znakov) | Z dotazníka | [ ] |
| 8 | Služby | Všetky s cenami | [ ] |
| 9 | Fotky (min 10) | Interiér, práca, portrét | [ ] |
| 10 | Logo | Nahrať | [ ] |
| 11 | Rezervačný link | Bookio URL | [ ] |
| 12 | Verifikácia | Pošta/telefón | [ ] |

### Optimálny popis pre GBP (750 znakov)

```
NAZOV_SALONU - profesionálna kozmetika v MESTE. Ponúkame SLUZBA1, SLUZBA2, SLUZBA3 a ďalšie kozmetické služby. 

Majiteľka MENO je certifikovaná kozmetička s X-ročnými skúsenosťami. Pracujeme s kvalitnými značkami ako ZNACKA1, ZNACKA2.

📍 Nachádza sa v LOKALITA, ľahko dostupné z MESTA1 a MESTA2.
📞 Rezervácie: TELEFON
🌐 Web: www.DOMENA.sk

Otváracie hodiny: Po-Pi 9:00-18:00, na objednávku.
```

---

## 🧪 TESTOVANIE

### Povinné testy pred odovzdaním

| Test | URL | Cieľ |
|------|-----|------|
| **PageSpeed Mobile** | pagespeed.web.dev | > 90 |
| **PageSpeed Desktop** | pagespeed.web.dev | > 95 |
| **Rich Results** | search.google.com/test/rich-results | ✅ |
| **Schema Validator** | validator.schema.org | ✅ |
| **Mobile Friendly** | search.google.com/test/mobile-friendly | ✅ |
| **OpenGraph** | developers.facebook.com/tools/debug | ✅ |
| **SSL** | ssllabs.com/ssltest | A+ |
| **Headers** | securityheaders.com | A |

### Manuálne testy

- [ ] Všetky odkazy fungujú
- [ ] Obrázky sa načítavajú
- [ ] Video sa prehráva (ak je)
- [ ] Rezervačný link funguje
- [ ] Telefónny link funguje (tel:)
- [ ] Email link funguje (mailto:)
- [ ] Mobile responzivita (Chrome DevTools)
- [ ] Formuláre fungujú (ak sú)

---

## 📋 COPY-PASTE ŠABLÓNY KÓDU

### sitemap.ts

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.DOMENA.sk'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/o-mne`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sluzby`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cennik`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/galeria`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

### robots.txt

```
# NAZOV_SALONU - robots.txt
# https://www.DOMENA.sk

User-agent: *
Allow: /

Sitemap: https://www.DOMENA.sk/sitemap.xml

Disallow: /api/
Disallow: /_next/
Disallow: /private/

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Googlebot
Allow: /
```

### tailwind.config.ts - farby

```typescript
// Zmeniť podľa klienta
colors: {
  canvas: "#F9F8F6",    // pozadie
  ink: "#2C2C28",       // text
  gold: "#CFB998",      // akcent
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    // ...
  },
},
```

---

## 💰 CENOVÁ KALKULÁCIA

### Odporúčaný cenník

| Položka | Čas | Cena |
|---------|-----|------|
| Základný web (5 stránok) | 4-5h | 300-400€ |
| Logo design | 2-3h | 100-150€ |
| Fotky (basic editing) | 1-2h | 50-100€ |
| Google Business Profile | 1h | 50€ |
| Mesačná údržba | 1-2h/mesiac | 50€/mesiac |

### Čo je v cene základného webu:
- ✅ 5 stránok (Domov, O mne, Služby, Cenník, Kontakt)
- ✅ Galéria
- ✅ Mobile-first dizajn
- ✅ SEO optimalizácia
- ✅ Schema.org
- ✅ AI pripravený (llms.txt)
- ✅ SSL certifikát
- ✅ Hosting na Vercel (1 rok)
- ✅ Google Search Console setup
- ✅ Základné Analytics

---

## 📞 SUPPORT

### Časté problémy a riešenia

| Problém | Riešenie |
|---------|----------|
| Obrázky sa pomaly načítavajú | Pridať `sizes`, znížiť `quality` |
| Video nejde | Skontrolovať URL, formát mp4 |
| Schema nefunguje | Rich Results Test |
| Sitemap error v GSC | Skontrolovať doménu v sitemap.ts |
| 404 na stránkach | Skontrolovať routing |

---

*Dokument aktualizovaný: December 2025*  
*Verzia: 2.0*

