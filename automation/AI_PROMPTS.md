# 🤖 AI Prompty pre generovanie kódu

> **Model:** Claude 3.5 Sonnet (claude-3-5-sonnet-20241022)  
> **Použitie:** n8n HTTP Request node → Anthropic API

---

## System Prompt (spoločný pre všetky)

```
Si expert na tvorbu Next.js webových stránok pre slovenské beauty salóny. 
Tvoja úloha je generovať TypeScript/TSX kód na základe poskytnutých údajov o salóne.

Pravidlá:
1. Vždy generuj kompletný, funkčný kód
2. Použi slovenčinu pre všetky texty na webe
3. Optimalizuj pre SEO (lokálne slovenské SEO)
4. Použi správne Schema.org markup
5. Kód musí byť kompatibilný s Next.js 14+ App Router
6. Použi Tailwind CSS pre štýly
7. Vždy vrať POUZE kód bez markdown formátovania
```

---

## Prompt 1: Generovanie layout.tsx (metadata + JSON-LD)

### Request Body pre Claude API:

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "max_tokens": 8000,
  "system": "Si expert na tvorbu Next.js webových stránok...",
  "messages": [
    {
      "role": "user",
      "content": "Vygeneruj kompletný app/layout.tsx súbor pre beauty salón s týmito údajmi:\n\n{{PROJECT_DATA_JSON}}\n\nVyžadované komponenty:\n1. Metadata export s title, description, keywords, OpenGraph, Twitter Cards\n2. JSON-LD schema pre BeautySalon typ\n3. JSON-LD schema pre FAQPage (ak sú FAQ)\n4. Geo meta tagy\n5. RootLayout komponent\n\nPoužij tieto premenné pre R2 URL: {{R2_BASE_URL}}\nDoména: {{DOMAIN}}\n\nVráť POUZE TypeScript kód bez markdown."
    }
  ]
}
```

### Príklad PROJECT_DATA_JSON:

```json
{
  "businessName": "Salón Glamour",
  "ownerName": "Jana Nováková",
  "description": "Profesionálny kozmetický salón v Bratislave...",
  "phone": "+421900123456",
  "email": "info@salon-glamour.sk",
  "street": "Hlavná 15",
  "city": "Bratislava",
  "postalCode": "811 01",
  "region": "Bratislavský kraj",
  "nearbyPlaces": "Petržalka, Ružinov, Staré Mesto",
  "lat": 48.1486,
  "lng": 17.1077,
  "services": [...],
  "faq": [
    {"q": "Ako dlho trvá ošetrenie?", "a": "Ošetrenie trvá 60-90 minút..."}
  ],
  "education": "SOŠ kozmetiky Bratislava...",
  "certificates": "Certifikát PMU, Kobido..."
}
```

---

## Prompt 2: Generovanie llms.txt

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "max_tokens": 4000,
  "system": "Si expert na SEO a AI optimalizáciu...",
  "messages": [
    {
      "role": "user",
      "content": "Vygeneruj kompletný llms.txt súbor pre beauty salón.\n\nÚdaje:\n{{PROJECT_DATA_JSON}}\n\nŠtruktúra llms.txt:\n1. Hlavička s názvom a URL\n2. Základné informácie\n3. O majiteľovi (detailne)\n4. Vzdelanie a certifikáty\n5. Geografická dostupnosť\n6. Ponúkané služby s cenami\n7. FAQ sekcia\n8. Kľúčové slová pre SEO\n9. Kontaktné údaje\n\nPoužij formát markdown. Optimalizuj pre AI vyhľadávače (ChatGPT, Claude, Perplexity).\nVráť POUZE obsah súboru bez ```."
    }
  ]
}
```

---

## Prompt 3: Generovanie about-page.tsx texty

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "max_tokens": 3000,
  "messages": [
    {
      "role": "user",
      "content": "Vygeneruj texty pre stránku 'O mne' beauty salónu.\n\nÚdaje o majiteľke:\n- Meno: {{ownerName}}\n- Vzdelanie: {{education}}\n- Certifikáty: {{certificates}}\n- Roky praxe: {{yearsExperience}}\n- Čo ju baví: {{passion}}\n- Značky: {{brands}}\n\nVygeneruj:\n1. Hlavný nadpis (h1)\n2. Úvodný odstavec (200 slov, osobný tón)\n3. Sekciu 'Moje hodnoty' (4 hodnoty s ikonou a popisom)\n4. Sekciu 'Vzdelanie a certifikáty'\n5. Citát/motto\n6. CTA sekciu\n\nFormát: JSON objekt s kľúčmi: headline, intro, values[], education[], quote, cta"
    }
  ]
}
```

---

## Prompt 4: Generovanie services.tsx

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "max_tokens": 4000,
  "messages": [
    {
      "role": "user", 
      "content": "Vygeneruj dáta pre sekciu služieb beauty salónu.\n\nKategórie služieb:\n{{services}}\n\nPre každú službu vygeneruj:\n1. id (slug)\n2. title\n3. subtitle (krátky popis)\n4. description (dlhší popis, 50 slov)\n5. price (formát 'od X €')\n6. duration (formát 'od X min')\n7. image (placeholder path)\n\nFormát: JSON array objektov.\nSkupiny: featured (prvé 2), others (zvyšok)"
    }
  ]
}
```

---

## Prompt 5: Generovanie sitemap.ts

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "max_tokens": 1000,
  "messages": [
    {
      "role": "user",
      "content": "Vygeneruj app/sitemap.ts pre Next.js.\n\nDoména: {{domain}}\n\nStránky:\n- / (priority 1, weekly)\n- /o-mne (priority 0.8, monthly)\n- /sluzby (priority 0.9, weekly)\n- /cennik (priority 0.9, weekly)\n- /galeria (priority 0.7, monthly)\n- /kontakt (priority 0.8, monthly)\n\nPoužij MetadataRoute.Sitemap typ.\nVráť POUZE TypeScript kód."
    }
  ]
}
```

---

## Prompt 6: Generovanie robots.txt

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "max_tokens": 500,
  "messages": [
    {
      "role": "user",
      "content": "Vygeneruj robots.txt pre beauty salón web.\n\nDoména: {{domain}}\nNázov: {{businessName}}\n\nZahrň:\n1. Allow all pre hlavných crawlerov\n2. Sitemap URL\n3. Disallow pre /api/, /_next/, /private/\n4. Povolenia pre AI crawlery (GPTBot, Claude-Web, PerplexityBot)\n\nVráť POUZE obsah súboru."
    }
  ]
}
```

---

## API Request Template (n8n HTTP Request)

```javascript
// n8n HTTP Request node konfigurácia

const endpoint = 'https://api.anthropic.com/v1/messages';

const headers = {
  'x-api-key': '{{$credentials.claudeApi.apiKey}}',
  'anthropic-version': '2023-06-01',
  'content-type': 'application/json'
};

const body = {
  model: 'claude-3-5-sonnet-20241022',
  max_tokens: 8000,
  system: systemPrompt,
  messages: [
    {
      role: 'user',
      content: userPrompt.replace('{{PROJECT_DATA_JSON}}', JSON.stringify(projectData))
    }
  ]
};

// Response handling
const response = await $http.post(endpoint, body, { headers });
const generatedCode = response.content[0].text;

return { json: { code: generatedCode } };
```

---

## Response Parsing

```javascript
// Parsovanie response z Claude API
const claudeResponse = $input.first().json;

// Claude API vracia:
// {
//   "content": [
//     {
//       "type": "text",
//       "text": "...vygenerovaný kód..."
//     }
//   ],
//   "model": "claude-3-5-sonnet-20241022",
//   "usage": { "input_tokens": 1234, "output_tokens": 5678 }
// }

const generatedCode = claudeResponse.content[0].text;

// Odstráň prípadné markdown code blocks
const cleanCode = generatedCode
  .replace(/^```\w*\n?/gm, '')
  .replace(/\n?```$/gm, '')
  .trim();

return { json: { code: cleanCode } };
```

---

## Cena za projekt (odhad)

| Prompt | Input tokens | Output tokens | Cena |
|--------|--------------|---------------|------|
| layout.tsx | ~2000 | ~4000 | ~$0.03 |
| llms.txt | ~1500 | ~2000 | ~$0.02 |
| about texty | ~500 | ~1500 | ~$0.01 |
| services | ~800 | ~2000 | ~$0.01 |
| sitemap | ~200 | ~300 | ~$0.005 |
| robots | ~100 | ~200 | ~$0.003 |
| **SPOLU** | ~5100 | ~10000 | **~$0.08** |

**Cena za projekt:** ~0.08 USD = ~0.08 EUR

---

## Error Handling

```javascript
try {
  const response = await callClaudeAPI(prompt);
  
  if (response.error) {
    throw new Error(response.error.message);
  }
  
  return { json: { success: true, code: response.content[0].text } };
  
} catch (error) {
  // Log error
  console.error('Claude API error:', error);
  
  // Notify admin
  await sendNotification({
    type: 'error',
    message: `AI generation failed for ${projectData.businessName}`,
    error: error.message
  });
  
  return { json: { success: false, error: error.message } };
}
```

---

*Vytvorené: December 2025*

