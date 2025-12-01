# SHINE by Katarína Dzuriková

Ultra-premium, high-fashion landing page pre estetickú kliniku v štýle "Vogue meets Dermatology".

## 🎨 Dizajn Filozofia

Tento projekt reprezentuje spojenie editorial dizajnu a web developmentu. Hlavné prvky:

- **Farby**: Teplé neutrálne tóny (Canvas #F9F8F6, Ink #2C2C28, Gold #CFB998)
- **Typografia**: Playfair Display (serif) a Lato (sans-serif)
- **Animácie**: Jemné, luxusné prechody s Framer Motion
- **Scrolling**: Smooth inertia scrolling pomocou Lenis

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3.4+
- **UI Components**: Shadcn UI (customizované)
- **Animations**: Framer Motion + Lenis Scroll
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Inštalácia

```bash
# Nainštalujte závislosti
npm install

# Spustite vývojový server
npm run dev

# Otvorte http://localhost:3000
```

## 🏗️ Štruktúra Projektu

```
katarina-prompt/
├── app/
│   ├── globals.css          # Globálne štýly
│   ├── layout.tsx           # Root layout s fontami
│   └── page.tsx             # Hlavná stránka
├── components/
│   ├── navbar.tsx           # Frosted glass navigácia
│   ├── providers/
│   │   └── smooth-scroll-provider.tsx  # Lenis scroll
│   ├── sections/
│   │   ├── hero.tsx         # Hero sekcia
│   │   ├── about.tsx        # O mne sekcia
│   │   ├── services.tsx     # Služby s hover efektmi
│   │   ├── gallery.tsx      # Parallax masonry galéria
│   │   └── footer.tsx       # Footer s kontaktami
│   └── ui/
│       └── button.tsx       # Luxury button komponent
├── lib/
│   └── utils.ts             # Helper funkcie
└── tailwind.config.ts       # Tailwind konfigurácia
```

## 🎭 Kľúčové Funkcie

### 1. Hero Sekcia
- Plná výška viewportu
- Staggered text reveal animácie
- Parallax efekt na pozadí

### 2. About Sekcia
- Split layout (sticky image + scrollable text)
- Drop-cap prvá písmena
- Italic citát blockquote

### 3. Services Sekcia
- Hover-triggered image preview
- Smooth state transitions
- Clean list layout

### 4. Gallery Sekcia
- 3-column parallax masonry
- Rozdielne rýchlosti scrollu
- Hover scale efekty

### 5. Navbar
- Transparent → frosted glass pri scrolle
- Smooth transitions
- Responsive mobilné menu

## 🎨 Dizajn Tokeny

```css
/* Farby */
--canvas: #F9F8F6;    /* Hlavné pozadie */
--ink: #2C2C28;       /* Hlavný text */
--gold: #CFB998;      /* Akcenty */

/* Typography */
--font-serif: Playfair Display
--font-sans: Lato
--tracking-editorial: -0.02em
--tracking-luxury: 0.2em
```

## 📱 Responsive Design

- Mobile-first prístup
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-optimalizované interakcie

## 🔧 Konfigurácia

Všetky dizajnové tokeny a farby sú definované v `tailwind.config.ts`. Pre zmenu štýlov upravte:

1. Farby v `theme.extend.colors`
2. Fonty v `theme.extend.fontFamily`
3. Letter spacing v `theme.extend.letterSpacing`

## 🌐 Production Build

```bash
npm run build
npm start
```

## 📄 Licencia

© 2025 SHINE by Katarína Dzuriková. Všetky práva vyhradené.

---

**Designed with elegance.**



