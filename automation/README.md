# 🏭 Beauty Web Factory - Automatizačný systém

> **Verzia:** 1.0  
> **Vytvorené:** December 2025

---

## 🎯 Prehľad

Automatizovaný systém pre tvorbu profesionálnych webov pre slovenské beauty salóny.

### Workflow:
```
Klient vyplní formulár → AI vygeneruje kód → Ty schváliš → Web je live
```

---

## 📁 Súbory v tomto priečinku

| Súbor | Popis | Kedy použiť |
|-------|-------|-------------|
| **TALLY_FORMULAR_STRUKTURA.md** | Štruktúra formulára pre Tally.so | Pri vytváraní formulára |
| **CLOUDFLARE_R2_STRUKTURA.md** | Organizácia súborov v R2 | Pri nastavovaní storage |
| **GITHUB_TEMPLATE_SETUP.md** | Nastavenie template repo | Jednorazovo |
| **N8N_WORKFLOW.md** | Automatizačný workflow | Pri nastavovaní n8n |
| **AI_PROMPTS.md** | Prompty pre Claude API | Pri generovaní kódu |
| **SOP_REVIEW_DEPLOY.md** | Postup pri review a deploy | Pri každom projekte |
| **EMAIL_TEMPLATES.md** | Šablóny emailov | Pri komunikácii s klientom |

---

## 🚀 Quick Start

### 1. Jednorazové nastavenie (raz)

1. **Tally.so formulár**
   - Ísť na [tally.so](https://tally.so)
   - Vytvoriť formulár podľa `TALLY_FORMULAR_STRUKTURA.md`
   - Nastaviť webhook

2. **GitHub Template**
   - Nastaviť repo ako template
   - Podľa `GITHUB_TEMPLATE_SETUP.md`

3. **n8n/Make.com**
   - Nainštalovať n8n (alebo Make.com účet)
   - Importovať workflow
   - Nastaviť credentials

### 2. Pri novom projekte

1. Poslať klientovi link na Tally formulár
2. Počkať na vyplnenie
3. Workflow automaticky vytvorí projekt
4. Review podľa `SOP_REVIEW_DEPLOY.md`
5. Deploy a odovzdanie

---

## 💰 Náklady

| Služba | Mesačne |
|--------|---------|
| Tally.so | 0€ |
| Cloudflare R2 | 0€ |
| n8n (self-hosted) | ~5€ (VPS) |
| Claude API | ~5€ (10 projektov) |
| Vercel | 0€ |
| GitHub | 0€ |
| **SPOLU** | **~10€** |

---

## 📊 Časová úspora

| Aktivita | Manuálne | S automatizáciou |
|----------|----------|------------------|
| Zber údajov | 30 min | 0 min (formulár) |
| Generovanie kódu | 2-3 hod | 5 min (AI) |
| Upload súborov | 30 min | 0 min (auto) |
| Review a deploy | 45 min | 45 min |
| **SPOLU** | **4-5 hod** | **~1 hod** |

---

## 🔗 Externé služby

| Služba | URL | Účel |
|--------|-----|------|
| Tally.so | tally.so | Formuláre |
| Cloudflare R2 | cloudflare.com | Storage |
| n8n | n8n.io | Automatizácia |
| Claude API | anthropic.com | AI generovanie |
| GitHub | github.com | Verziovanie |
| Vercel | vercel.com | Hosting |
| Google Search Console | search.google.com/search-console | SEO |
| Google Business | business.google.com | Lokálne SEO |

---

## 🆘 Troubleshooting

### Webhook nefunguje
- Skontrolovať URL v Tally
- Skontrolovať n8n credentials
- Pozrieť n8n execution log

### AI negeneruje správny kód
- Skontrolovať formát vstupných dát
- Upraviť prompt
- Skontrolovať API limit

### Vercel deploy zlyhá
- Skontrolovať build log
- Spustiť `npm run build` lokálne
- Skontrolovať TypeScript errory

---

## 📞 Kontakt

Pre otázky a podporu:
- [VÁŠ EMAIL]
- [VÁŠ TELEFÓN]

---

*Vytvorené: December 2025*

