# ⚙️ n8n Workflow - Beauty Web Factory

> **Typ:** Self-hosted n8n alebo Make.com  
> **Trigger:** Webhook z Tally.so  
> **Výstup:** Nový GitHub repo s vygenerovaným kódom

---

## Prehľad Workflow

```
┌─────────────┐
│   WEBHOOK   │ ← Tally.so odošle formulár
└──────┬──────┘
       ↓
┌─────────────┐
│ PARSE DATA  │ ← Extrahovať polia z JSON
└──────┬──────┘
       ↓
┌─────────────┐
│ CREATE SLUG │ ← Vytvoriť slug z názvu
└──────┬──────┘
       ↓
┌─────────────┐
│ UPLOAD R2   │ ← Nahrať súbory do Cloudflare R2
└──────┬──────┘
       ↓
┌─────────────┐
│  AI GENERATE│ ← Claude API vygeneruje kód
└──────┬──────┘
       ↓
┌─────────────┐
│ CREATE REPO │ ← GitHub API vytvorí repo z template
└──────┬──────┘
       ↓
┌─────────────┐
│COMMIT FILES │ ← GitHub API commitne súbory
└──────┬──────┘
       ↓
┌─────────────┐
│   NOTIFY    │ ← Email/Slack notifikácia
└─────────────┘
```

---

## Nodes - Detailný popis

### 1. Webhook Node
**Typ:** Webhook  
**Metóda:** POST  
**URL:** `https://your-n8n.com/webhook/beauty-web-factory`

**Výstup:**
```json
{
  "body": {
    "data": {
      "fields": [...]
    }
  }
}
```

---

### 2. Parse Data Node
**Typ:** Code (JavaScript)

```javascript
// Extrahovať dáta z Tally webhook
const fields = $input.first().json.body.data.fields;

// Helper funkcia na získanie hodnoty poľa
function getField(label) {
  const field = fields.find(f => f.label === label);
  return field ? field.value : null;
}

// Helper pre file upload
function getFiles(label) {
  const field = fields.find(f => f.label === label);
  return field && field.value ? field.value : [];
}

// Extrahovať všetky údaje
const projectData = {
  // Základné info
  businessName: getField('Názov salónu/štúdia'),
  businessType: getField('Typ podnikania'),
  ownerName: getField('Meno majiteľky/majiteľa'),
  description: getField('Krátky popis salónu (2-3 vety)'),
  tagline: getField('Slogan/Motto'),
  
  // Kontakt
  phone: getField('Telefón'),
  email: getField('Email'),
  instagram: getField('Instagram'),
  facebook: getField('Facebook stránka'),
  website: getField('Existujúca webová stránka'),
  preferredDomain: getField('Preferovaná doména'),
  
  // Adresa
  street: getField('Ulica a číslo'),
  city: getField('Obec/Mesto'),
  postalCode: getField('PSČ'),
  district: getField('Okres'),
  region: getField('Kraj'),
  nearbyPlaces: getField('Okolité mestá/obce (odkiaľ dochádzajú klientky)'),
  
  // Otváracie hodiny
  openingHours: getField('Otváracie hodiny'),
  byAppointment: getField('Fungujete výhradne na objednávku?'),
  
  // Služby
  services: {
    category1: {
      name: getField('Názov kategórie 1'),
      items: getField('Služby v kategórii 1')
    },
    category2: {
      name: getField('Názov kategórie 2'),
      items: getField('Služby v kategórii 2')
    },
    category3: {
      name: getField('Názov kategórie 3'),
      items: getField('Služby v kategórii 3')
    }
  },
  
  // O majiteľovi
  education: getField('Vzdelanie (školy, roky, odbory)'),
  certificates: getField('Certifikáty a školenia'),
  brands: getField('Značky kozmetiky s ktorými pracujete'),
  yearsExperience: getField('Roky praxe v odbore'),
  passion: getField('Čo vás baví na vašej práci?'),
  
  // Rezervácie
  bookingType: getField('Ako si klientky rezervujú termín?'),
  bookingUrl: getField('Link na rezervačný systém'),
  
  // FAQ
  faq: [
    { q: getField('Otázka 1'), a: getField('Odpoveď 1') },
    { q: getField('Otázka 2'), a: getField('Odpoveď 2') },
    { q: getField('Otázka 3'), a: getField('Odpoveď 3') },
    { q: getField('Otázka 4'), a: getField('Odpoveď 4') },
    { q: getField('Otázka 5'), a: getField('Odpoveď 5') },
    { q: getField('Otázka 6'), a: getField('Odpoveď 6') },
  ].filter(f => f.q && f.a),
  
  // Dizajn
  colorScheme: getField('Preferovaná farebnosť'),
  style: getField('Štýl webu'),
  exampleSites: [
    getField('Príklad webu ktorý sa vám páči 1'),
    getField('Príklad webu ktorý sa vám páči 2')
  ].filter(Boolean),
  
  // Súbory
  files: {
    portrait: getFiles('Portrétová fotka'),
    interior: getFiles('Fotky interiéru'),
    work: getFiles('Fotky práce'),
    logo: getFiles('Logo'),
    certificates: getFiles('Certifikáty (skeny)'),
    video: getFiles('Video (ak máte)')
  }
};

return { json: projectData };
```

---

### 3. Create Slug Node
**Typ:** Code (JavaScript)

```javascript
const data = $input.first().json;

function createSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 30)
    .replace(/^-|-$/g, '');
}

const slug = createSlug(data.businessName);
const repoName = `${slug}-web`;
const r2Path = `projekty/${slug}`;

return {
  json: {
    ...data,
    slug,
    repoName,
    r2Path,
    r2BaseUrl: `https://pub-ca9ca721368949e4a4793e9cf426e44e.r2.dev/${r2Path}`
  }
};
```

---

### 4. Upload to R2 Node
**Typ:** HTTP Request (pre každý súbor)

Pre každý súbor z Tally:
1. Stiahnuť z Tally URL
2. Premenovať podľa konvencie
3. Nahrať do Cloudflare R2

```javascript
// Tento node iteruje cez všetky súbory
const data = $input.first().json;
const uploads = [];

// Portrét
if (data.files.portrait.length > 0) {
  uploads.push({
    sourceUrl: data.files.portrait[0].url,
    destPath: `${data.r2Path}/images/portrait.jpeg`,
    type: 'portrait'
  });
}

// Interiér
data.files.interior.forEach((file, i) => {
  uploads.push({
    sourceUrl: file.url,
    destPath: `${data.r2Path}/images/interior-${i + 1}.jpeg`,
    type: 'interior'
  });
});

// Práca
data.files.work.forEach((file, i) => {
  uploads.push({
    sourceUrl: file.url,
    destPath: `${data.r2Path}/images/work-${i + 1}.jpeg`,
    type: 'work'
  });
});

// Logo
if (data.files.logo.length > 0) {
  const ext = data.files.logo[0].name.split('.').pop();
  uploads.push({
    sourceUrl: data.files.logo[0].url,
    destPath: `${data.r2Path}/logo/logo.${ext}`,
    type: 'logo'
  });
}

// Video
if (data.files.video.length > 0) {
  uploads.push({
    sourceUrl: data.files.video[0].url,
    destPath: `${data.r2Path}/video/hero.mp4`,
    type: 'video'
  });
}

return uploads.map(u => ({ json: { ...data, upload: u } }));
```

**R2 Upload (HTTP Request):**
- Method: PUT
- URL: `https://api.cloudflare.com/client/v4/accounts/{account_id}/r2/buckets/{bucket_name}/objects/{path}`
- Headers:
  - Authorization: Bearer {R2_TOKEN}
- Body: Binary (súbor)

---

### 5. AI Generate Node
**Typ:** HTTP Request (Claude API)

**Endpoint:** `https://api.anthropic.com/v1/messages`

**Headers:**
```
x-api-key: {CLAUDE_API_KEY}
anthropic-version: 2023-06-01
content-type: application/json
```

**Body:** (viď súbor AI_PROMPTS.md)

---

### 6. Create GitHub Repo Node
**Typ:** HTTP Request

**Method:** POST  
**URL:** `https://api.github.com/repos/Abra7abra7/katarina-dzurikova-web/generate`

**Headers:**
```
Authorization: Bearer {GITHUB_TOKEN}
Accept: application/vnd.github+json
```

**Body:**
```json
{
  "owner": "Abra7abra7",
  "name": "{{ $json.repoName }}",
  "description": "Web pre {{ $json.businessName }}",
  "private": true,
  "include_all_branches": false
}
```

---

### 7. Commit Files Node
**Typ:** HTTP Request (pre každý súbor)

Pre každý vygenerovaný súbor (layout.tsx, llms.txt, atď.):

**Method:** PUT  
**URL:** `https://api.github.com/repos/Abra7abra7/{{ $json.repoName }}/contents/{{ path }}`

**Body:**
```json
{
  "message": "feat: Auto-generated from template",
  "content": "{{ base64EncodedContent }}"
}
```

---

### 8. Notify Node
**Typ:** Email / Slack

**Email obsah:**
```
Predmet: 🎉 Nový projekt pripravený: {{ businessName }}

Nový beauty web projekt bol automaticky vytvorený.

📋 Detaily:
- Názov: {{ businessName }}
- Repo: https://github.com/Abra7abra7/{{ repoName }}
- Preview: https://{{ repoName }}.vercel.app

📝 Nasledujúce kroky:
1. Skontroluj preview
2. Uprav čo treba
3. Nastav doménu
4. Spusti GSC + GBP

Súbory v R2:
{{ r2BaseUrl }}
```

---

## Credentials potrebné v n8n

| Credential | Typ | Kde získať |
|------------|-----|------------|
| Cloudflare R2 | API Token | Cloudflare Dashboard → R2 → API Tokens |
| Claude API | API Key | console.anthropic.com |
| GitHub | Personal Access Token | GitHub Settings → Developer settings |
| Email (SMTP) | SMTP credentials | Váš email provider |

---

## Testovanie

### Test webhook lokálne:
```bash
curl -X POST http://localhost:5678/webhook/beauty-web-factory \
  -H "Content-Type: application/json" \
  -d @test-payload.json
```

### Test payload (test-payload.json):
```json
{
  "data": {
    "fields": [
      {"label": "Názov salónu/štúdia", "value": "Test Salón"},
      {"label": "Meno majiteľky/majiteľa", "value": "Jana Testová"},
      {"label": "Email", "value": "test@test.sk"},
      {"label": "Telefón", "value": "+421900123456"}
    ]
  }
}
```

---

## Alternatíva: Make.com

Ak preferuješ Make.com (jednoduchšie GUI):

1. Vytvor nový Scenario
2. Trigger: Webhooks → Custom webhook
3. Moduly:
   - JSON → Parse JSON
   - Tools → Set variables
   - HTTP → Make a request (R2, GitHub, Claude)
   - Email → Send an email

Make.com má vizuálnejšie rozhranie, ale menej flexibility.

---

*Vytvorené: December 2025*

