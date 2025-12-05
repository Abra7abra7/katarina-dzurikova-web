# 📝 Tally.so Formulár - Štruktúra

> **Návod:** Vytvorte nový formulár na [tally.so](https://tally.so) a pridajte tieto polia v poradí.

---

## Nastavenia formulára

- **Názov:** Beauty Salón - Objednávka webu
- **Jazyk:** Slovenčina
- **Logo:** Vaše logo
- **Téma:** Elegantná/minimalistická
- **Webhook URL:** `[n8n webhook URL]`

---

## SEKCIA 1: Úvod

### Úvodný text (Statement)
```
🌸 Vitajte v objednávkovom formulári

Vyplnením tohto formulára získame všetky informácie potrebné na vytvorenie vášho profesionálneho webu. 

⏱️ Čas na vyplnenie: 15-20 minút
📁 Budete potrebovať: fotky, logo, cenník
```

---

## SEKCIA 2: Základné informácie

| # | Typ poľa | Názov | Povinné | Placeholder/Možnosti |
|---|----------|-------|---------|----------------------|
| 1 | Short text | Názov salónu/štúdia | ✅ | "SHINE Štúdio Krásy" |
| 2 | Multiple choice | Typ podnikania | ✅ | Kozmetický salón, Kaderníctvo, Nechtový salón, Masážny salón, Wellness/SPA, Kombinácia |
| 3 | Short text | Meno majiteľky/majiteľa | ✅ | "Katarína Dzuriková" |
| 4 | Long text | Krátky popis salónu (2-3 vety) | ✅ | "Popíšte čo vás odlišuje..." |
| 5 | Short text | Slogan/Motto | ❌ | "Vaša krása, naša starostlivosť" |

---

## SEKCIA 3: Kontaktné údaje

| # | Typ poľa | Názov | Povinné | Validácia |
|---|----------|-------|---------|-----------|
| 6 | Phone | Telefón | ✅ | SK formát |
| 7 | Email | Email | ✅ | Email validácia |
| 8 | Short text | Instagram | ❌ | Začína @ |
| 9 | URL | Facebook stránka | ❌ | URL |
| 10 | URL | Existujúca webová stránka | ❌ | URL |
| 11 | Short text | Preferovaná doména | ❌ | "www.vasemeno.sk" |

---

## SEKCIA 4: Adresa prevádzky

| # | Typ poľa | Názov | Povinné |
|---|----------|-------|---------|
| 12 | Short text | Ulica a číslo | ✅ |
| 13 | Short text | Obec/Mesto | ✅ |
| 14 | Short text | PSČ | ✅ |
| 15 | Short text | Okres | ✅ |
| 16 | Dropdown | Kraj | ✅ | Bratislavský, Trnavský, Trenčiansky, Nitriansky, Žilinský, Banskobystrický, Prešovský, Košický |
| 17 | Long text | Okolité mestá/obce (odkiaľ dochádzajú klientky) | ✅ |

---

## SEKCIA 5: Otváracie hodiny

| # | Typ poľa | Názov | Povinné |
|---|----------|-------|---------|
| 18 | Matrix | Otváracie hodiny | ✅ |

**Matrix štruktúra:**
- Riadky: Pondelok, Utorok, Streda, Štvrtok, Piatok, Sobota, Nedeľa
- Stĺpce: Od (čas), Do (čas), Zatvorené (checkbox)

| 19 | Yes/No | Fungujete výhradne na objednávku? | ✅ |

---

## SEKCIA 6: Služby a cenník

### Pokyny (Statement)
```
Rozdeľte vaše služby do kategórií. 
Pre každú kategóriu uveďte názov a jednotlivé služby s cenami.
```

| # | Typ poľa | Názov | Povinné |
|---|----------|-------|---------|
| 20 | Short text | Názov kategórie 1 | ✅ |
| 21 | Long text | Služby v kategórii 1 (formát: Názov - Cena € - Trvanie min) | ✅ |
| 22 | Short text | Názov kategórie 2 | ❌ |
| 23 | Long text | Služby v kategórii 2 | ❌ |
| 24 | Short text | Názov kategórie 3 | ❌ |
| 25 | Long text | Služby v kategórii 3 | ❌ |
| 26 | Short text | Názov kategórie 4 | ❌ |
| 27 | Long text | Služby v kategórii 4 | ❌ |
| 28 | Short text | Názov kategórie 5 | ❌ |
| 29 | Long text | Služby v kategórii 5 | ❌ |

---

## SEKCIA 7: O vás - životopis

| # | Typ poľa | Názov | Povinné |
|---|----------|-------|---------|
| 30 | Long text | Vzdelanie (školy, roky, odbory) | ✅ |
| 31 | Long text | Certifikáty a školenia | ✅ |
| 32 | Short text | Značky kozmetiky s ktorými pracujete | ❌ |
| 33 | Number | Roky praxe v odbore | ✅ |
| 34 | Long text | Čo vás baví na vašej práci? | ❌ |

---

## SEKCIA 8: Rezervačný systém

| # | Typ poľa | Názov | Povinné | Možnosti |
|---|----------|-------|---------|----------|
| 35 | Multiple choice | Ako si klientky rezervujú termín? | ✅ | Telefonicky, Bookio, Reservio, Fresha, Iný systém, Zatiaľ nemám online |
| 36 | URL | Link na rezervačný systém | ❌ | (zobraziť ak nie je Telefonicky/Nemám) |

---

## SEKCIA 9: Fotografie

### Pokyny (Statement)
```
📸 Nahrajte fotografie vášho salónu a práce.

Ideálne:
- 1x portrétová fotka (na sekciu O mne)
- 3-5x fotky interiéru
- 5-10x fotky vašej práce (pred/po, procedúry)
- 1x logo (ak máte)

Formáty: JPG, PNG (max 10MB/súbor)
```

| # | Typ poľa | Názov | Povinné | Max súborov |
|---|----------|-------|---------|-------------|
| 37 | File upload | Portrétová fotka | ✅ | 1 |
| 38 | File upload | Fotky interiéru | ❌ | 10 |
| 39 | File upload | Fotky práce | ❌ | 20 |
| 40 | File upload | Logo | ❌ | 1 |
| 41 | File upload | Certifikáty (skeny) | ❌ | 10 |
| 42 | File upload | Video (ak máte) | ❌ | 1 |

---

## SEKCIA 10: FAQ - Časté otázky

### Pokyny (Statement)
```
Napíšte 5-6 otázok, ktoré sa vás klientky najčastejšie pýtajú.
Tieto otázky použijeme na webe a pomôžu Google lepšie pochopiť váš biznis.
```

| # | Typ poľa | Názov | Povinné |
|---|----------|-------|---------|
| 43 | Short text | Otázka 1 | ✅ |
| 44 | Long text | Odpoveď 1 | ✅ |
| 45 | Short text | Otázka 2 | ✅ |
| 46 | Long text | Odpoveď 2 | ✅ |
| 47 | Short text | Otázka 3 | ✅ |
| 48 | Long text | Odpoveď 3 | ✅ |
| 49 | Short text | Otázka 4 | ❌ |
| 50 | Long text | Odpoveď 4 | ❌ |
| 51 | Short text | Otázka 5 | ❌ |
| 52 | Long text | Odpoveď 5 | ❌ |
| 53 | Short text | Otázka 6 | ❌ |
| 54 | Long text | Odpoveď 6 | ❌ |

---

## SEKCIA 11: Vzhľad webu

| # | Typ poľa | Názov | Povinné | Možnosti |
|---|----------|-------|---------|----------|
| 55 | Multiple choice | Preferovaná farebnosť | ✅ | Svetlá/vzdušná (biela, béžová, zlatá), Tmavá/luxusná (čierna, zlatá), Ružová/ženská, Prírodná (zelená, béžová), Moderná (fialová, modrá) |
| 56 | Multiple choice | Štýl webu | ✅ | Minimalistický, Luxusný, Moderný s animáciami, Útulný, Profesionálny |
| 57 | URL | Príklad webu ktorý sa vám páči 1 | ❌ |
| 58 | URL | Príklad webu ktorý sa vám páči 2 | ❌ |
| 59 | Long text | Čo sa vám páči na príkladoch? | ❌ |

---

## SEKCIA 12: Súhlas

| # | Typ poľa | Názov | Povinné |
|---|----------|-------|---------|
| 60 | Checkboxes | Súhlasy | ✅ |

**Možnosti checkboxov:**
- Súhlasím so spracovaním údajov za účelom vytvorenia webu
- Potvrdzujem, že mám práva na všetky poskytnuté fotografie
- Súhlasím s uverejnením informácií na webovej stránke

| 61 | Checkbox | Súhlasím s použitím webu ako referencie (voliteľné) | ❌ |

---

## SEKCIA 13: Odoslanie

### Záverečný text (Statement)
```
🎉 Ďakujeme za vyplnenie formulára!

Čo sa stane ďalej:
1. Skontrolujeme vaše údaje (do 24h)
2. Pripravíme návrh webu
3. Pošleme vám preview na schválenie
4. Po schválení spustíme web

V prípade otázok nás kontaktujte na [EMAIL/TELEFÓN].
```

---

## Webhook payload štruktúra

Po odoslaní Tally pošle webhook s touto štruktúrou:

```json
{
  "eventId": "...",
  "eventType": "FORM_RESPONSE",
  "createdAt": "2025-12-05T...",
  "data": {
    "responseId": "...",
    "submissionId": "...",
    "respondentId": "...",
    "formId": "...",
    "formName": "Beauty Salón - Objednávka webu",
    "createdAt": "...",
    "fields": [
      {
        "key": "question_nazov_salonu",
        "label": "Názov salónu/štúdia",
        "type": "INPUT_TEXT",
        "value": "SHINE Štúdio Krásy"
      },
      {
        "key": "question_typ_podnikania",
        "label": "Typ podnikania",
        "type": "MULTIPLE_CHOICE",
        "value": ["Kozmetický salón"]
      },
      {
        "key": "question_portret",
        "label": "Portrétová fotka",
        "type": "FILE_UPLOAD",
        "value": [
          {
            "id": "...",
            "name": "portrait.jpg",
            "url": "https://tally.so/file/...",
            "mimeType": "image/jpeg",
            "size": 123456
          }
        ]
      }
      // ... ďalšie polia
    ]
  }
}
```

---

## Integrácie v Tally

1. **Webhook** → n8n/Make.com
2. **Google Sheets** → Záloha dát
3. **Email notifikácia** → Potvrdenie pre klienta

---

*Vytvorené: December 2025*

