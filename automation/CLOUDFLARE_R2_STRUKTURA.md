# ☁️ Cloudflare R2 - Štruktúra priečinkov

> **Bucket:** `katarina-dzurikova-web-sk` (existujúci)  
> **Public URL:** `https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev`

---

## Štruktúra priečinkov

```
katarina-dzurikova-web-sk/
│
├── 📁 projekty/
│   │
│   ├── 📁 shine-studio-krasy/          # Prvý projekt (referenčný)
│   │   ├── 📁 images/
│   │   │   ├── portrait.jpeg
│   │   │   ├── interior-1.jpeg
│   │   │   ├── interior-2.jpeg
│   │   │   ├── work-1.jpeg
│   │   │   └── ...
│   │   ├── 📁 video/
│   │   │   └── hero-video.mp4
│   │   ├── 📁 logo/
│   │   │   └── logo.svg
│   │   └── 📁 certificates/
│   │       └── cert-1.jpeg
│   │
│   ├── 📁 [novy-projekt-slug]/         # Šablóna pre nové projekty
│   │   ├── 📁 images/
│   │   │   ├── portrait.jpeg           # Povinné
│   │   │   ├── interior-*.jpeg         # Voliteľné
│   │   │   └── work-*.jpeg             # Voliteľné
│   │   ├── 📁 video/
│   │   │   └── hero.mp4                # Voliteľné
│   │   ├── 📁 logo/
│   │   │   └── logo.*                  # SVG/PNG
│   │   └── 📁 certificates/
│   │       └── *.jpeg                  # Voliteľné
│   │
│   └── 📁 [dalsi-projekt]/
│       └── ...
│
└── 📁 shared/                          # Zdieľané assety
    ├── 📁 placeholders/
    │   ├── portrait-placeholder.jpeg
    │   ├── interior-placeholder.jpeg
    │   └── work-placeholder.jpeg
    └── 📁 templates/
        └── video-intro-template.mp4
```

---

## Pomenovanie súborov

### Pravidlá pre slug projektu:
- Malé písmená
- Bez diakritiky
- Pomlčky namiesto medzier
- Max 30 znakov

**Príklady:**
| Názov salónu | Slug |
|--------------|------|
| SHINE Štúdio Krásy | `shine-studio-krasy` |
| Beauty Salon Lucia | `beauty-salon-lucia` |
| Salón Glamour Bratislava | `salon-glamour-ba` |

### Pravidlá pre súbory:
| Typ | Formát názvu | Príklad |
|-----|--------------|---------|
| Portrét | `portrait.jpeg` | `portrait.jpeg` |
| Interiér | `interior-[N].jpeg` | `interior-1.jpeg` |
| Práca | `work-[N].jpeg` | `work-1.jpeg` |
| Video | `hero.mp4` | `hero.mp4` |
| Logo | `logo.[ext]` | `logo.svg` |
| Certifikát | `cert-[N].jpeg` | `cert-1.jpeg` |

---

## URL štruktúra

### Base URL:
```
https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev
```

### Príklady URL:
```
# Portrét
https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/projekty/shine-studio-krasy/images/portrait.jpeg

# Video
https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/projekty/shine-studio-krasy/video/hero.mp4

# Logo
https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/projekty/shine-studio-krasy/logo/logo.svg
```

---

## Automatické spracovanie súborov

### Workflow v n8n/Make:

```
1. Prijať súbory z Tally webhook
              ↓
2. Vytvoriť slug z názvu salónu
              ↓
3. Vytvoriť priečinkovú štruktúru v R2
              ↓
4. Premenovať súbory podľa konvencie
              ↓
5. Nahrať do R2 s správnymi MIME types
              ↓
6. Vrátiť zoznam URL
```

### Kód pre vytvorenie slug (JavaScript):
```javascript
function createSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // odstráni diakritiku
    .replace(/[^a-z0-9\s-]/g, '')    // len alfanumerické
    .replace(/\s+/g, '-')            // medzery na pomlčky
    .replace(/-+/g, '-')             // viacnásobné pomlčky
    .substring(0, 30)                 // max 30 znakov
    .replace(/^-|-$/g, '');          // odstráni okrajové pomlčky
}

// Príklad:
createSlug("SHINE Štúdio Krásy") // → "shine-studio-krasy"
createSlug("Salón Glamour BA")   // → "salon-glamour-ba"
```

---

## Nastavenie CORS v Cloudflare R2

V Cloudflare Dashboard → R2 → Bucket → Settings → CORS:

```json
[
  {
    "AllowedOrigins": ["*"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "MaxAgeSeconds": 86400
  }
]
```

---

## Optimalizácia obrázkov pred uploadom

### Odporúčané rozmery:
| Typ | Rozmer | Max veľkosť |
|-----|--------|-------------|
| Portrét | 1200x1600 | 500KB |
| Interiér | 1920x1280 | 400KB |
| Práca | 1200x1200 | 300KB |
| Logo | 500x500 | 100KB |
| Video | 1920x1080 | 5MB |

### Automatická kompresia (v n8n):
- Použiť Sharp alebo ImageMagick
- Quality: 80%
- Format: JPEG (WebP pre moderné)

---

## Prístupové práva

### R2 API Token:
- Typ: `Admin Read & Write`
- Bucket: `katarina-dzurikova-web-sk`
- Uložiť v: n8n credentials / .env

### Potrebné oprávnenia:
- `Workers R2 Storage:Edit`
- `Workers R2 Storage:Read`

---

## Monitoring

### Cloudflare Dashboard:
- R2 → Analytics → Request count
- Bandwidth usage
- Storage usage

### Alarmy:
- Nastaviť ak storage > 1GB
- Nastaviť ak bandwidth > 10GB/mesiac

---

*Vytvorené: December 2025*

