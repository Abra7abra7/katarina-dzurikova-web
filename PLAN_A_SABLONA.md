# 🚀 KOMPLETNÝ PLÁN - SHINE Web (Katarína Dzuriková)

> **Doména:** https://www.katarinadzurikova.sk  
> **Aktualizované:** 5. December 2025  
> **Stav projektu:** 🟢 HOTOVÉ - PRIPRAVENÉ NA ŠKÁLOVANIE

---

## 🎯 ŠKÁLOVATEĽNÝ PROJEKT

Tento projekt slúži ako **šablóna pre budúce beauty salón weby**. 

### 📄 Súvisiace dokumenty:
- **[KLIENT_DOTAZNIK.md](KLIENT_DOTAZNIK.md)** - User-friendly formulár pre klientov
- **[DEVELOPER_SABLONA.md](DEVELOPER_SABLONA.md)** - Technická dokumentácia pre realizáciu

---

## 📋 OBSAH

1. [Aktuálny stav projektu](#aktuálny-stav-projektu)
2. [Šablóna pre budúce projekty](#šablóna-pre-budúce-projekty)
3. [AI citácie a SEO](#ai-citácie-a-seo)
4. [Google & Bing indexácia](#google--bing-indexácia)
5. [PageSpeed optimalizácia](#pagespeed-optimalizácia)
6. [Prezentačné metriky](#prezentačné-metriky)
7. [Akčný checklist](#akčný-checklist)

---

## 🎯 AKTUÁLNY STAV PROJEKTU

### ✅ DOKONČENÉ (4.12.2025)

| Položka | Status | Poznámka |
|---------|--------|----------|
| Web nasadený na Vercel | ✅ | www.katarinadzurikova.sk |
| PageSpeed Desktop | ✅ **98/100** | Výborné |
| PageSpeed Mobile | ✅ **95/100** | Výborné |
| Dostupnosť | ✅ **95-100/100** | |
| SEO Score | ✅ **100/100** | |
| Best Practices | ✅ **100/100** | |
| Hero video optimalizované | ✅ | Cloudflare R2 CDN |
| Google Search Console | ✅ | Overené HTML súborom |
| Sitemap odoslaný | ✅ | sitemap.xml |
| Schema.org BeautySalon | ✅ | Funguje (Rich Results Test) |
| Schema.org FAQ | ✅ | 6 otázok |
| Schema.org Recenzie | ✅ | Funguje |
| llms.txt | ✅ | S FAQ sekciou |
| robots.txt | ✅ | |
| OpenGraph / Twitter Cards | ✅ | |
| Canonical URLs | ✅ | |

### 🔴 ZOSTÁVA DOKONČIŤ

| Položka | Priorita | Poznámka |
|---------|----------|----------|
| **Google Business Profile** | 🔴 KRITICKÉ | Pre lokálne SEO v mapách |
| Bing Webmaster Tools | 🟡 Voliteľné | Import z GSC |
| Request indexing v GSC | 🟡 Odporúčané | Urýchli indexáciu |
| Zbierať recenzie | 🟢 Priebežne | Po spustení |

---

## 📝 ŠABLÓNA PRE BUDÚCE PROJEKTY

### Čo zadať pri kopírovaní projektu:

```markdown
## ZÁKLADNÉ INFO
- Názov biznisu: SHINE Štúdio Krásy
- Typ biznisu: Kozmetický salón
- Doména: www.katarinadzurikova.sk
- Jazyk webu: sk

## KONTAKTNÉ ÚDAJE
- Adresa ulica: Pavlova Ves 24
- Adresa PSČ + mesto: 032 21 p. Bobrovec
- Telefón: +421 904 678 007
- Email: Katarinasosikova@gmail.com
- Instagram: @k.dzurikova.studiokrasyshine

## LOKALITA PRE SEO (KRITICKÉ!)
- Hlavné mesto/obec: Pavlova Ves
- Okres: Liptovský Mikuláš
- Kraj: Žilinský
- Okolité mestá pre targeting: Liptovský Mikuláš, Ružomberok, Jasná, Bešeňová, Nízke Tatry, Demänovská Dolina
- GPS súradnice: lat: 49.1089, lng: 19.5844

## REZERVÁCIE/OBJEDNÁVKY
- Typ: Bookio
- URL: https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk
- Telefónna rezervácia: áno

## SLUŽBY/PRODUKTY
Kategória 1: Pleťové ošetrenia (od 30€)
Kategória 2: Permanentný make-up (od 30€)
Kategória 3: Mihalnice (od 10€)
Kategória 4: Vizáž (od 5€)
Kategória 5: Doplnkové služby (od 2€)

## O MAJITEĽOVI
- Meno: Katarína Dzuriková
- Vzdelanie: SOŠ služieb Rimavská Sobota, UMB Banská Bystrica
- Certifikácie: PMU (LEA MATYI, Marina Bondar), Kobido, BioRePeel

## FARBY A ŠTÝL
- Primárna farba: #2C2C28 (Ink)
- Sekundárna farba: #F9F8F6 (Canvas)
- Akcent/zlatá: #CFB998 (Gold)
- Font nadpisy: Playfair Display
- Font text: Lato
```

---

## 🤖 AI CITÁCIE A SEO

### ✅ IMPLEMENTOVANÉ:

| Položka | Status | Súbor | Popis |
|---------|--------|-------|-------|
| llms.txt | ✅ | `/public/llms.txt` | Informácie pre AI agentov + FAQ |
| Schema.org BeautySalon | ✅ | `app/layout.tsx` | Kompletné s openingHours, priceRange, areaServed |
| Schema.org FAQ | ✅ | `app/layout.tsx` | 6 najčastejších otázok |
| Schema.org AggregateRating | ✅ | `app/layout.tsx` | Recenzie |
| robots.txt | ✅ | `/public/robots.txt` | Povolenia pre crawlery |
| sitemap.xml | ✅ | `app/sitemap.ts` | Automaticky generovaný |
| OpenGraph metadata | ✅ | `app/layout.tsx` | Pre sociálne siete |
| Twitter Cards | ✅ | `app/layout.tsx` | Pre Twitter/X |
| Canonical URLs | ✅ | `app/layout.tsx` | Proti duplicitnému obsahu |
| Mobile-first | ✅ | Všade | Responzívny dizajn |
| Google verifikácia | ✅ | `/public/google32f8dc4bd8c6842b.html` | HTML súbor |

---

## 🔍 GOOGLE & BING INDEXÁCIA

### Google Search Console - STAV

| # | Krok | URL/Akcia | Status |
|---|------|-----------|--------|
| 1 | Ísť na Search Console | https://search.google.com/search-console | ✅ |
| 2 | Pridať property | URL prefix: www.katarinadzurikova.sk | ✅ |
| 3 | Overiť vlastníctvo | HTML súbor (google32f8dc4bd8c6842b.html) | ✅ |
| 4 | Odoslať sitemap | `/sitemap.xml` | ✅ |
| 5 | Request indexing | URL Inspection > hlavná stránka | ⬜ **UROBIŤ** |
| 6 | Skontrolovať Mobile Usability | V menu vľavo | ⬜ Po pár dňoch |
| 7 | Skontrolovať Core Web Vitals | V menu vľavo | ⬜ Po pár dňoch |

### Bing Webmaster Tools - STAV

| # | Krok | URL/Akcia | Status |
|---|------|-----------|--------|
| 1 | Ísť na Bing Webmaster | https://www.bing.com/webmasters | ⬜ |
| 2 | Importovať z Google | Kliknúť "Import from GSC" | ⬜ |
| 3 | Odoslať sitemap | `/sitemap.xml` | ⬜ |

### 🔴 Google Business Profile - KRITICKÉ PRE LOKÁLNE SEO

| # | Krok | Akcia | Status |
|---|------|-------|--------|
| 1 | Ísť na Google Business | https://business.google.com | ⬜ **PRIORITA** |
| 2 | Vytvoriť profil | "SHINE Štúdio Krásy" | ⬜ |
| 3 | Vyplniť základné info | Názov, adresa, telefón, web | ⬜ |
| 4 | Vybrať kategóriu | "Kozmetický salón" | ⬜ |
| 5 | Pridať služby | Všetky služby s cenami | ⬜ |
| 6 | Pridať fotky | Min 10 kvalitných fotiek | ⬜ |
| 7 | Nastaviť hodiny | Po-Pi 9:00-18:00 | ⬜ |
| 8 | Pridať rezervačný link | Bookio URL | ⬜ |
| 9 | Overiť biznis | Poštou/telefonicky/emailom | ⬜ |
| 10 | Zbierať recenzie | Požiadať spokojné klientky | ⬜ |

---

## ⚡ PAGESPEED OPTIMALIZÁCIA

### 📊 AKTUÁLNE VÝSLEDKY (4.12.2025)

| Metrika | Desktop | Mobile | Cieľ |
|---------|---------|--------|------|
| **Performance** | **98** 🟢 | **95** 🟢 | > 90 |
| **Accessibility** | **95** 🟢 | **100** 🟢 | > 90 |
| **Best Practices** | **100** 🟢 | **100** 🟢 | 100 |
| **SEO** | **100** 🟢 | **100** 🟢 | 100 |
| LCP | 0.8s 🟢 | 2.9s 🟢 | < 2.5s |
| FCP | 0.2s 🟢 | 0.9s 🟢 | < 1.8s |
| TBT | 0ms 🟢 | 30ms 🟢 | < 200ms |
| CLS | 0 🟢 | 0 🟢 | < 0.1 |

### ✅ Optimalizácie vykonané:

- ✅ Next.js Image Optimization (AVIF, WebP)
- ✅ Hero video skomprimované (748KB z 1.47MB - **50% úspora**)
- ✅ Video preload="auto" pre rýchlejšie načítanie
- ✅ 30-dňový cache pre obrázky
- ✅ Kompresia zapnutá
- ✅ Statické stránky (SSG)
- ✅ Fonts swap pre rýchlejšie zobrazenie

---

## 📊 PREZENTAČNÉ METRIKY

### Čo ukázať klientovi:

```markdown
# 📈 SHINE Web - Výsledky

## TECHNICKÁ KVALITA
- ✅ PageSpeed Mobile: 95/100
- ✅ PageSpeed Desktop: 98/100
- ✅ SEO Score: 100/100
- ✅ Accessibility: 95-100/100
- ✅ Best Practices: 100/100

## AI PRIPRAVENOSŤ
- ✅ llms.txt implementovaný (AI agenti vedia čítať web)
- ✅ Schema.org štruktúrované dáta (Google rozumie obsahu)
- ✅ FAQ Schema pre rich snippets
- ✅ robots.txt pre AI crawlery (ChatGPT, Claude, Perplexity)
- ✅ Sitemap pre automatickú indexáciu

## INDEXÁCIA
- ✅ Google Search Console - aktívne
- ⏳ Bing Webmaster Tools - čaká
- ⏳ Google Business Profile - čaká (PRIORITA)

## SEO
- ✅ Lokálne SEO (Liptov, Ružomberok, LM, Jasná, Bešeňová)
- ✅ Meta descriptions pre všetky stránky
- ✅ OpenGraph pre sociálne siete
- ✅ Canonical URLs
- ✅ FAQ štruktúrované dáta

## FUNKCIE
- ✅ Mobile-first responzívny dizajn
- ✅ Online rezervačný systém (Bookio)
- ✅ Rýchle načítanie (< 3s)
- ✅ SSL certifikát (HTTPS)
- ✅ Hero video na úvodnej stránke

## STRÁNKY
- ✅ Hlavná stránka (/)
- ✅ O mne (/o-mne)
- ✅ Služby (sekcia)
- ✅ Cenník (sekcia)
- ✅ Galéria (sekcia)
- ✅ Kontakt (sekcia + footer)
```

---

## ✅ AKČNÝ CHECKLIST

### ✅ HOTOVÉ

- [x] Spustiť PageSpeed test na produkčnej URL (98/95)
- [x] Vytvoriť Google Search Console property
- [x] Overiť vlastníctvo (HTML súbor)
- [x] Odoslať sitemap.xml
- [x] Pridať FAQ Schema.org do layout.tsx
- [x] Rozšíriť llms.txt o FAQ
- [x] Optimalizovať hero video (50% menšie)
- [x] Opraviť URL na správnu doménu

### 🔴 OKAMŽITE UROBIŤ

- [ ] **Request indexing** v Google Search Console (URL Inspection > hlavná stránka)
- [ ] **Vytvoriť Google Business Profile** na https://business.google.com

### 🟡 TENTO TÝŽDEŇ

- [ ] Vyplniť Google Business Profile kompletne
- [ ] Pridať všetky služby do GBP
- [ ] Nahrať fotky do GBP (min 10)
- [ ] Nastaviť Bing Webmaster Tools (import z GSC)

### 🟢 DO 2 TÝŽDŇOV

- [ ] Skontrolovať indexáciu v Google (`site:katarinadzurikova.sk`)
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
├── robots.txt                      # Povolenia pre crawlery
├── llms.txt                        # Info pre AI agentov + FAQ
├── favicon.ico                     # Favicon
├── google32f8dc4bd8c6842b.html     # Google verifikácia
└── images/hero/
    └── katarina-hero-video.mp4     # Optimalizované hero video (748KB)

/app/
├── layout.tsx          # Metadata + JSON-LD Schema (BeautySalon + FAQ)
├── sitemap.ts          # Dynamický sitemap generátor
├── page.tsx            # Hlavná stránka
└── o-mne/page.tsx      # O mne stránka

/components/sections/
├── hero.tsx            # Hero s videom
├── about.tsx           # O mne sekcia
├── services.tsx        # Služby
├── gallery.tsx         # Galéria
└── footer.tsx          # Footer s kontaktami
```

### Súbory na úpravu pri novom projekte:

1. `app/layout.tsx` - metadata, JSON-LD, kontakty, doména
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
| **Google Search Console** | https://search.google.com/search-console |
| **Google Business Profile** | https://business.google.com |
| **Bing Webmaster Tools** | https://www.bing.com/webmasters |
| **PageSpeed Insights** | https://pagespeed.web.dev |
| **Rich Results Test** | https://search.google.com/test/rich-results |
| **Schema.org Validator** | https://validator.schema.org |
| **GTmetrix** | https://gtmetrix.com |
| **Mobile-Friendly Test** | https://search.google.com/test/mobile-friendly |
| **OpenGraph Debugger** | https://developers.facebook.com/tools/debug |

---

## 📞 KONTAKTNÉ ÚDAJE PROJEKTU

- **Web:** https://www.katarinadzurikova.sk
- **Telefón:** +421 904 678 007
- **Email:** Katarinasosikova@gmail.com
- **Instagram:** @k.dzurikova.studiokrasyshine
- **Adresa:** Pavlova Ves 24, 032 21 p. Bobrovec
- **Rezervácie:** https://services.bookio.com/studio-krasy-shine-yl2qwybl/widget?lang=sk

---

---

## 🔄 WORKFLOW PRE NOVÝ PROJEKT

### 1. Akvizícia klienta
1. Poslať `KLIENT_DOTAZNIK.md` na vyplnenie
2. Dohodnúť call na upresnenie detailov
3. Získať fotky, logo, prístupy

### 2. Realizácia (4-5 hodín)
1. Skopírovať tento template projekt
2. Postupovať podľa `DEVELOPER_SABLONA.md`
3. Upraviť všetky premenné
4. Nahrať obsah klienta
5. Deploy + DNS

### 3. Odovzdanie
1. Google Search Console setup
2. Google Business Profile setup
3. Zaškolenie klienta
4. Odovzdávací protokol

### 4. Údržba (voliteľná)
- Mesačná kontrola
- Aktualizácie obsahu
- SEO monitoring

---

*Dokument aktualizovaný: 5. December 2025*  
*Projekt: SHINE Štúdio Krásy - Katarína Dzuriková*  
*Verzia: 3.0 - Škálovateľná šablóna*
