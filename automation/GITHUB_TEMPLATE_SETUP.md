# 🔧 GitHub Template Repository - Nastavenie

> **Aktuálny repo:** `Abra7abra7/katarina-dzurikova-web`  
> **Cieľ:** Premeniť na template a automatizovať vytváranie nových projektov

---

## Krok 1: Nastaviť ako Template Repository

### V GitHub Dashboard:
1. Ísť na `https://github.com/Abra7abra7/katarina-dzurikova-web`
2. Settings → General
3. Zaškrtnúť **"Template repository"**
4. Save

---

## Krok 2: Vytvoriť .github priečinok

### Štruktúra:
```
.github/
├── ISSUE_TEMPLATE/
│   └── new-project.md
├── workflows/
│   └── validate.yml
└── CODEOWNERS
```

---

## Krok 3: GitHub Actions Workflow

### `.github/workflows/validate.yml`
```yaml
name: Validate Project

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Lint
        run: npm run lint
        
      - name: Type check
        run: npx tsc --noEmit
        
      - name: Build
        run: npm run build
        
      - name: Check required files
        run: |
          test -f public/robots.txt || exit 1
          test -f public/llms.txt || exit 1
          test -f app/sitemap.ts || exit 1
          echo "✅ All required files present"
```

---

## Krok 4: Issue Template pre nový projekt

### `.github/ISSUE_TEMPLATE/new-project.md`
```markdown
---
name: Nový Beauty Projekt
about: Vytvorenie nového webu pre beauty salón
title: '[PROJECT] Názov salónu'
labels: 'new-project'
assignees: ''
---

## Informácie o projekte

**Názov salónu:** 
**Doména:** 
**Klient:** 

## Checklist

### Príprava
- [ ] Dotazník vyplnený
- [ ] Fotky prijaté
- [ ] Logo prijaté

### Implementácia
- [ ] Projekt vytvorený z template
- [ ] Premenné nastavené
- [ ] Texty upravené
- [ ] Obrázky nahraté do R2
- [ ] Lokálny test OK

### Deploy
- [ ] Vercel projekt vytvorený
- [ ] Doména nastavená
- [ ] SSL aktívne

### SEO
- [ ] Google Search Console
- [ ] Sitemap odoslaný
- [ ] Google Business Profile

## Poznámky

```

---

## Krok 5: Automatické vytvorenie repo z template

### Možnosť A: GitHub CLI (manuálne)
```bash
# Vytvoriť nový repo z template
gh repo create novy-salon-web \
  --template Abra7abra7/katarina-dzurikova-web \
  --private \
  --clone

cd novy-salon-web
```

### Možnosť B: GitHub API (pre n8n/Make)
```javascript
// POST https://api.github.com/repos/Abra7abra7/katarina-dzurikova-web/generate

const response = await fetch(
  'https://api.github.com/repos/Abra7abra7/katarina-dzurikova-web/generate',
  {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    body: JSON.stringify({
      owner: 'Abra7abra7',
      name: 'salon-glamour-web',
      description: 'Web pre Salón Glamour',
      private: true,
      include_all_branches: false
    })
  }
);
```

### Response:
```json
{
  "id": 123456789,
  "name": "salon-glamour-web",
  "full_name": "Abra7abra7/salon-glamour-web",
  "html_url": "https://github.com/Abra7abra7/salon-glamour-web",
  "clone_url": "https://github.com/Abra7abra7/salon-glamour-web.git"
}
```

---

## Krok 6: Automatický commit s vygenerovanými súbormi

### GitHub API - Create/Update File
```javascript
// PUT https://api.github.com/repos/{owner}/{repo}/contents/{path}

async function updateFile(repo, path, content, message) {
  // Najprv získať SHA existujúceho súboru (ak existuje)
  const existing = await fetch(
    `https://api.github.com/repos/Abra7abra7/${repo}/contents/${path}`,
    {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    }
  );
  
  const sha = existing.ok ? (await existing.json()).sha : undefined;
  
  // Aktualizovať súbor
  await fetch(
    `https://api.github.com/repos/Abra7abra7/${repo}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        message: message,
        content: btoa(content), // Base64 encode
        sha: sha
      })
    }
  );
}

// Použitie:
await updateFile(
  'salon-glamour-web',
  'app/layout.tsx',
  generatedLayoutContent,
  'feat: Auto-generated layout.tsx from template'
);
```

---

## Krok 7: Vercel Auto-Deploy

### Nastavenie v Vercel:
1. Import GitHub repo
2. Automatic deployments: ON
3. Production branch: main
4. Preview deployments: ON

### Vercel API (pre automatizáciu):
```javascript
// POST https://api.vercel.com/v13/deployments

const response = await fetch('https://api.vercel.com/v13/deployments', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${VERCEL_TOKEN}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'salon-glamour-web',
    gitSource: {
      type: 'github',
      repo: 'Abra7abra7/salon-glamour-web',
      ref: 'main'
    }
  })
});
```

---

## Potrebné API Tokeny

### GitHub Personal Access Token:
- Settings → Developer settings → Personal access tokens
- Scopes: `repo`, `workflow`
- Uložiť v n8n credentials

### Vercel Token:
- Settings → Tokens → Create
- Scope: Full Access
- Uložiť v n8n credentials

---

## Workflow v n8n

```
1. Webhook z Tally
        ↓
2. Spracovať dáta + AI generovanie
        ↓
3. GitHub API: Vytvoriť repo z template
        ↓
4. GitHub API: Commit vygenerované súbory
        ↓
5. Vercel automaticky deployne (webhook)
        ↓
6. Notifikácia s preview URL
```

---

*Vytvorené: December 2025*

