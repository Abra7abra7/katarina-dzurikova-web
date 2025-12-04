# 🚀 KOMPLETNÝ PLÁN - SHINE Web

> Tento dokument slúži ako plán pre dokončenie projektu a zároveň ako šablóna pre budúce weby.

---

## 📋 OBSAH

1. [Šablóna pre budúce projekty](#šablóna-pre-budúce-projekty)
2. [AI citácie a SEO](#ai-citácie-a-seo)
3. [Google & Bing indexácia](#google--bing-indexácia)
4. [PageSpeed optimalizácia](#pagespeed-optimalizácia)
5. [Prezentačné metriky](#prezentačné-metriky)
6. [Akčný checklist](#akčný-checklist)

---

## 📝 ŠABLÓNA PRE BUDÚCE PROJEKTY

### Čo zadať pri kopírovaní projektu:

```markdown
## ZÁKLADNÉ INFO
- Názov biznisu: [napr. SHINE Studio]
- Typ biznisu: [kozmetika/kaderníctvo/wellness/reštaurácia...]
- Doména: [napr. shine-studio.sk]
- Jazyk webu: [sk/cs/en]

## KONTAKTNÉ ÚDAJE
- Adresa ulica: [Pavlova Ves 24]
- Adresa PSČ + mesto: [032 21 p. Bobrovec]
- Telefón: [+421 904 678 007]
- Email: [email@example.com]
- Instagram: [@handle]
- Facebook: [URL]

## LOKALITA PRE SEO (KRITICKÉ!)
- Hlavné mesto/obec: [Pavlova Ves]
- Okres: [Liptovský Mikuláš]
- Kraj: [Žilinský]
- Okolité mestá pre targeting: [Ružomberok, Jasná, Bešeňová, Nízke Tatry...]
- GPS súradnice: [lat: 49.0847, lng: 19.5347]

## REZERVÁCIE/OBJEDNÁVKY
- Typ: [Bookio/Reservio/vlastný formulár/žiadny]
- URL: [https://services.bookio.com/...]
- Telefónna rezervácia: [áno/nie]

## SLUŽBY/PRODUKTY (pre každú kategóriu)
Kategória 1:
- Názov: [Permanentný make-up]
- Popis: [2-3 vety o službe]
- Cenový rozsah: [od XX € do YY €]
- Trvanie: [60-120 min]
- Obrázky: [min 3 relevantné fotky]

Kategória 2:
- ... (opakovať pre každú)

## O MAJITEĽOVI/FIRME
- Meno: [Katarína Dzúriková]
- Životopis: [3-5 odsekov - príbeh, hodnoty, prístup]
- Vzdelanie: [školy, roky]
- Certifikácie: [kurzy, školenia]
- Profesionálna fotka: [vysoká kvalita, min 1200px]

## MÉDIÁ (POTREBNÉ SÚBORY)
- Logo: [SVG formát, ideálne aj PNG verzia]
- Favicon: [32x32, 180x180 pre Apple]
- Hero video/obrázok: [max 2MB, 1920px šírka]
- Galéria: [min 12 fotiek, kategorizované]
- OG Image: [1200x630px pre sociálne siete]

## FARBY A ŠTÝL
- Primárna farba: [hex kód]
- Sekundárna farba: [hex kód]
- Akcent/zlatá: [hex kód]
- Pozadie: [hex kód]
- Text: [hex kód]
- Font nadpisy: [názov fontu]
- Font text: [názov fontu]

## DODATOČNÉ POŽIADAVKY
- [ ] Blog sekcia
- [ ] E-shop
- [ ] Viacjazyčnosť
- [ ] Newsletter
- [ ] Live chat
```

---

## 🤖 AI CITÁCIE A SEO

### ✅ Už implementované v tomto projekte:

| Položka | Status | Súbor | Popis |
|---------|--------|-------|-------|
| llms.txt | ✅ | `/public/llms.txt` | Informácie pre AI agentov |
| Schema.org JSON-LD | ✅ | `app/layout.tsx` | Štruktúrované dáta pre Google |
| robots.txt | ✅ | `/public/robots.txt` | Povolenia pre crawlery |
| sitemap.xml | ✅ | `app/sitemap.ts` | Mapa stránok pre indexáciu |
| OpenGraph metadata | ✅ | `app/layout.tsx` | Pre sociálne siete |
| Twitter Cards | ✅ | `app/layout.tsx` | Pre Twitter/X |
| Canonical URLs | ✅ | `app/layout.tsx` | Proti duplicitnému obsahu |
| Mobile-first | ✅ | Všade | Responzívny dizajn |

### 🔴 TREBA EŠTE IMPLEMENTOVAŤ:

#### 1. FAQ Schema.org (pre Google rich snippets)
**Súbor:** `app/layout.tsx` - pridať do jsonLd

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kde sa nachádza štúdio SHINE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Štúdio SHINE sa nachádza v Pavlovej Vsi 24, 032 21 p. Bobrovec, v srdci Liptova. Ľahko dostupné z Liptovského Mikuláša (15 min), Ružomberka (20 min) aj Jasnej."
      }
    },
    {
      "@type": "Question",
      "name": "Aké služby ponúka SHINE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SHINE ponúka permanentný make-up, mihalnice, pleťové ošetrenia, vizáž a doplnkové služby ako Kobido masáž či chemický peeling."
      }
    },
    {
      "@type": "Question",
      "name": "Ako sa môžem objednať?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Objednať sa môžete online cez rezervačný systém Bookio na našej stránke, alebo telefonicky na +421 904 678 007."
      }
    }
  ]
}
```

#### 2. Rozšírený llms.txt
**Súbor:** `/public/llms.txt` - pridať FAQ sekciu

```txt
## Frequently Asked Questions

Q: Kde sa nachádza SHINE štúdio?
A: Pavlova Ves 24, 032 21 p. Bobrovec, Liptov. 15 min od Liptovského Mikuláša.

Q: Aké služby ponúkate?
A: Permanentný make-up, mihalnice, pleťové ošetrenia, vizáž, Kobido masáž.

Q: Ako sa objednať?
A: Online cez Bookio alebo tel. +421 904 678 007.

Q: Aké sú otváracie hodiny?
A: Po-Pi 9:00-18:00, So podľa dohody.
```

#### 3. LocalBusiness rozšírenie
- Pridať `openingHoursSpecification`
- Pridať `priceRange`
- Pridať `aggregateRating` (keď budú recenzie)

---

## 🔍 GOOGLE & BING INDEXÁCIA

### Google Search Console - KROKY

| # | Krok | URL/Akcia | Status |
|---|------|-----------|--------|
| 1 | Ísť na Search Console | https://search.google.com/search-console | ⬜ |
| 2 | Kliknúť "Pridať property" | Vybrať "Domain" alebo "URL prefix" | ⬜ |
| 3 | Zadať doménu | `shine-studio.sk` (tvoja doména) | ⬜ |
| 4 | Overiť vlastníctvo | **Možnosti:** | ⬜ |
| | | a) DNS záznam (odporúčané) | |
| | | b) HTML súbor | |
| | | c) HTML meta tag | |
| | | d) Google Analytics | |
| 5 | Po overení - Sitemap | Ísť na "Sitemaps" > Pridať `/sitemap.xml` | ⬜ |
| 6 | Požiadať o indexáciu | URL Inspection > "Request indexing" pre hlavnú stránku | ⬜ |
| 7 | Skontrolovať Mobile Usability | V menu vľavo | ⬜ |
| 8 | Skontrolovať Core Web Vitals | V menu vľavo (po pár dňoch dát) | ⬜ |

### Bing Webmaster Tools - KROKY

| # | Krok | URL/Akcia | Status |
|---|------|-----------|--------|
| 1 | Ísť na Bing Webmaster | https://www.bing.com/webmasters | ⬜ |
| 2 | Prihlásiť sa | Microsoft účet | ⬜ |
| 3 | Importovať z Google | **NAJRÝCHLEJŠIE** - kliknúť "Import from GSC" | ⬜ |
| 4 | Alebo manuálne | Pridať stránku + overiť | ⬜ |
| 5 | Odoslať sitemap | `/sitemap.xml` | ⬜ |

### Google Business Profile - KRITICKÉ PRE LOKÁLNE SEO

| # | Krok | Akcia | Status |
|---|------|-------|--------|
| 1 | Ísť na Google Business | https://business.google.com | ⬜ |
| 2 | Vytvoriť/nárokovať profil | Vyhľadať "SHINE Štúdio Krásy" | ⬜ |
| 3 | Vyplniť základné info | Názov, adresa, telefón, web | ⬜ |
| 4 | Vybrať kategóriu | "Kozmetický salón" / "Beauty Salon" | ⬜ |
| 5 | Pridať služby | Všetky služby s cenami | ⬜ |
| 6 | Pridať fotky | Min 10 kvalitných fotiek | ⬜ |
| 7 | Nastaviť hodiny | Otváracie hodiny | ⬜ |
| 8 | Pridať rezervačný link | Bookio URL | ⬜ |
| 9 | Overiť biznis | Poštou/telefonicky/emailom | ⬜ |
| 10 | Zbierať recenzie | Požiadať spokojné klientky | ⬜ |

### Ďalšie platformy (voliteľné)

| Platforma | URL | Priorita |
|-----------|-----|----------|
| Apple Maps | https://mapsconnect.apple.com | 🟡 Stredná |
| Yelp | https://biz.yelp.com | 🟢 Nízka |
| TripAdvisor | https://www.tripadvisor.com/Owners | 🟢 Nízka |
| Zlaté Stránky | https://www.zlatestranky.sk | 🟡 Stredná |

---

## ⚡ PAGESPEED OPTIMALIZÁCIA

### Kde testovať:

| Nástroj | URL | Čo meria |
|---------|-----|----------|
| **PageSpeed Insights** | https://pagespeed.web.dev | Google Core Web Vitals |
| **GTmetrix** | https://gtmetrix.com | Detailná analýza |
| **WebPageTest** | https://webpagetest.org | Waterfall, filmstrip |
| **Lighthouse** | Chrome DevTools (F12 > Lighthouse) | Kompletný audit |

### Cieľové metriky:

| Metrika | Cieľ | Popis |
|---------|------|-------|
| **Performance** | > 90 | Celkové skóre |
| **LCP** | < 2.5s | Largest Contentful Paint |
| **FID/INP** | < 100ms | Interaktivita |
| **CLS** | < 0.1 | Layout shift |
| **TTFB** | < 600ms | Time to First Byte |
| **Mobile Score** | > 85 | Mobile performance |

### Čo už je optimalizované:

- ✅ Next.js Image Optimization (AVIF, WebP)
- ✅ Video preload="metadata"
- ✅ 30-dňový cache pre obrázky
- ✅ Kompresia zapnutá
- ✅ Statické stránky (SSG)

### Možné ďalšie optimalizácie:

| Optimalizácia | Dopad | Náročnosť |
|---------------|-------|-----------|
| Lazy load pod-fold obrázkov | 🟢 Vysoký | Nízka |
| Font subsetting | 🟡 Stredný | Stredná |
| Critical CSS | 🟡 Stredný | Vysoká |
| Service Worker | 🟢 Vysoký | Stredná |
| CDN pre médiá | 🟡 Stredný | Nízka |

---

## 📊 PREZENTAČNÉ METRIKY

### Čo ukázať klientovi po dokončení:

```markdown
# 📈 SHINE Web - Výsledky

## TECHNICKÁ KVALITA
- ✅ PageSpeed Mobile: __/100
- ✅ PageSpeed Desktop: __/100
- ✅ SEO Score: __/100
- ✅ Accessibility: __/100
- ✅ Best Practices: __/100

## AI PRIPRAVENOSŤ
- ✅ llms.txt implementovaný (AI agenti vedia čítať web)
- ✅ Schema.org štruktúrované dáta (Google rozumie obsahu)
- ✅ robots.txt pre AI crawlery (ChatGPT, Claude, Perplexity)
- ✅ Sitemap pre automatickú indexáciu

## INDEXÁCIA
- ✅ Google Search Console - aktívne
- ✅ Bing Webmaster Tools - aktívne
- ✅ Google Business Profile - aktívne

## SEO
- ✅ Lokálne SEO (Liptov, Ružomberok, LM...)
- ✅ Meta descriptions pre všetky stránky
- ✅ OpenGraph pre sociálne siete
- ✅ Canonical URLs

## FUNKCIE
- ✅ Mobile-first responzívny dizajn
- ✅ Online rezervačný systém (Bookio)
- ✅ Rýchle načítanie (< 3s)
- ✅ SSL certifikát (HTTPS)

## STRÁNKY
- Hlavná stránka (/)
- O mne (/o-mne)
- Služby (/sluzby)
- Cenník (/cennik)
- Galéria (/galeria)
- Kontakt (/kontakt)
```

---

## ✅ AKČNÝ CHECKLIST

### 🔴 OKAMŽITE (Dnes)

- [ ] Spustiť PageSpeed test na produkčnej URL
- [ ] Screenshot výsledkov
- [ ] Vytvoriť Google Search Console property
- [ ] Overiť vlastníctvo (DNS/HTML)
- [ ] Odoslať sitemap.xml

### 🟡 TENTO TÝŽDEŇ

- [ ] Vytvoriť Google Business Profile
- [ ] Pridať všetky služby do GBP
- [ ] Nahrať fotky do GBP
- [ ] Nastaviť Bing Webmaster Tools
- [ ] Pridať FAQ Schema.org do layout.tsx
- [ ] Rozšíriť llms.txt o FAQ

### 🟢 DO 2 TÝŽDŇOV

- [ ] Skontrolovať indexáciu v Google (site:domena.sk)
- [ ] Požiadať klientky o prvé recenzie na Google
- [ ] Skontrolovať Core Web Vitals v GSC
- [ ] Opraviť prípadné problémy z GSC

### 🔵 PRIEBEŽNE (Mesačne)

- [ ] Kontrola pozícií v Google
- [ ] Pridávanie nových fotiek do galérie
- [ ] Aktualizácia cenníka
- [ ] Zbieranie recenzií
- [ ] Kontrola PageSpeed (po zmenách)

---

## 📁 SÚBORY PROJEKTU

### Kľúčové súbory pre SEO/AI:

```
/public/
├── robots.txt          # Povolenia pre crawlery
├── llms.txt            # Info pre AI agentov
├── favicon.ico         # Favicon
└── sitemap.xml         # Generovaný automaticky

/app/
├── layout.tsx          # Metadata + JSON-LD Schema
├── sitemap.ts          # Dynamický sitemap generátor
├── page.tsx            # Hlavná stránka
├── o-mne/page.tsx
├── sluzby/page.tsx
├── cennik/page.tsx
├── galeria/page.tsx
└── kontakt/page.tsx
```

### Súbory na úpravu pri novom projekte:

1. `app/layout.tsx` - metadata, JSON-LD, kontakty
2. `public/llms.txt` - info o biznise
3. `public/robots.txt` - sitemap URL
4. `app/sitemap.ts` - metadataBase URL
5. `components/sections/footer.tsx` - kontakty
6. `components/navbar.tsx` - navigácia
7. `tailwind.config.ts` - farby, fonty

---

## 🔗 UŽITOČNÉ ODKAZY

| Nástroj | URL |
|---------|-----|
| Google Search Console | https://search.google.com/search-console |
| Bing Webmaster Tools | https://www.bing.com/webmasters |
| Google Business Profile | https://business.google.com |
| PageSpeed Insights | https://pagespeed.web.dev |
| GTmetrix | https://gtmetrix.com |
| Schema.org Validator | https://validator.schema.org |
| Rich Results Test | https://search.google.com/test/rich-results |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly |
| OpenGraph Debugger | https://developers.facebook.com/tools/debug |
| Twitter Card Validator | https://cards-dev.twitter.com/validator |

---

*Dokument vytvorený: December 2024*
*Projekt: SHINE Štúdio Krásy - katarina-dzurikova-web*

