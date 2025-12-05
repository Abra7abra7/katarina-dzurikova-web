# 📋 SOP: Review a Deploy nového projektu

> **Standard Operating Procedure**  
> **Čas:** ~30-45 minút  
> **Trigger:** Notifikácia o novom projekte

---

## 📥 Krok 1: Prijatie notifikácie

**Akcia:** Dostaneš email/Slack s informáciami o novom projekte

**Čo obsahuje notifikácia:**
- Názov salónu
- Link na GitHub repo
- Link na Vercel preview
- Link na súbory v R2

**Kontrola:**
- [ ] Notifikácia prijatá
- [ ] Všetky linky fungujú

---

## 👁️ Krok 2: Preview kontrola

**Akcia:** Otvor Vercel preview URL

### Checklist vizuálnej kontroly:

#### Hlavná stránka (/)
- [ ] Hero video/obrázok sa načítava
- [ ] Správny názov salónu
- [ ] Správne kontaktné údaje vo footeri
- [ ] Navigácia funguje

#### O mne (/o-mne)
- [ ] Portrét sa zobrazuje
- [ ] Správne meno majiteľky
- [ ] Vzdelanie a certifikáty sú správne
- [ ] Texty dávajú zmysel

#### Služby (/sluzby)
- [ ] Všetky kategórie služieb
- [ ] Ceny sú správne
- [ ] Obrázky sa načítavajú

#### Cenník (/cennik)
- [ ] Kompletný cenník
- [ ] Správne formátovanie cien

#### Galéria (/galeria)
- [ ] Obrázky sa načítavajú
- [ ] Lightbox funguje

#### Kontakt (/kontakt)
- [ ] Správna adresa
- [ ] Telefón je klikateľný
- [ ] Email je klikateľný
- [ ] Mapa (ak je)

#### Mobile view
- [ ] Skontrolovať na mobile (F12 → Device toolbar)
- [ ] Navigácia funguje
- [ ] Texty sú čitateľné

---

## 🔧 Krok 3: Technická kontrola

### PageSpeed Test
1. Ísť na [PageSpeed Insights](https://pagespeed.web.dev)
2. Zadať preview URL
3. Spustiť test

**Požadované skóre:**
- [ ] Mobile Performance > 90
- [ ] Desktop Performance > 95
- [ ] SEO > 95
- [ ] Best Practices > 90

### Schema.org Test
1. Ísť na [Rich Results Test](https://search.google.com/test/rich-results)
2. Zadať preview URL
3. Spustiť test

**Kontrola:**
- [ ] BeautySalon schema detected
- [ ] FAQ schema detected (ak je)
- [ ] Žiadne errors

### Kontrola súborov
```bash
# V termináli
curl https://[preview-url]/robots.txt
curl https://[preview-url]/sitemap.xml
curl https://[preview-url]/llms.txt
```

- [ ] robots.txt obsahuje správnu doménu
- [ ] sitemap.xml sa generuje
- [ ] llms.txt obsahuje správne údaje

---

## ✏️ Krok 4: Opravy (ak treba)

### Ak treba opravy:

1. **Klonovať repo lokálne:**
```bash
git clone https://github.com/Abra7abra7/[repo-name].git
cd [repo-name]
npm install
npm run dev
```

2. **Urobiť opravy**

3. **Commit a push:**
```bash
git add .
git commit -m "fix: Opravy po review"
git push
```

4. **Počkať na nový Vercel preview** (~2 min)

5. **Znovu skontrolovať**

---

## 🚀 Krok 5: Nastavenie domény

### V Vercel Dashboard:

1. Ísť na projekt → Settings → Domains
2. Pridať doménu: `www.domena-klienta.sk`
3. Pridať aj: `domena-klienta.sk` (redirect na www)

### DNS nastavenia (u registrátora domény):

```
# A záznam
@     A     76.76.21.21

# CNAME pre www
www   CNAME cname.vercel-dns.com
```

**Kontrola:**
- [ ] DNS záznamy nastavené
- [ ] SSL certifikát aktívny (môže trvať až 24h)
- [ ] Redirect z non-www na www funguje

---

## 🔍 Krok 6: Google Search Console

1. Ísť na [Google Search Console](https://search.google.com/search-console)
2. Pridať property: `https://www.domena-klienta.sk`
3. Verifikácia: HTML tag metóda
4. Skopírovať verifikačný kód

### Pridať verifikáciu do projektu:

```tsx
// app/layout.tsx - do <head>
<meta name="google-site-verification" content="VERIFIKACNY_KOD" />
```

5. Commit a push
6. Overiť v GSC
7. Odoslať sitemap: `sitemap.xml`
8. URL Inspection → Request indexing pre hlavnú stránku

**Checklist:**
- [ ] Property pridaná
- [ ] Vlastníctvo overené
- [ ] Sitemap odoslaný
- [ ] Indexing requested

---

## 📍 Krok 7: Google Business Profile

1. Ísť na [Google Business](https://business.google.com)
2. Kliknúť "Manage now"
3. Vytvoriť nový profil

### Vyplniť údaje:

| Pole | Hodnota |
|------|---------|
| Názov firmy | [Z dotazníka] |
| Kategória | Kozmetický salón |
| Adresa | [Z dotazníka] |
| Telefón | [Z dotazníka] |
| Web | https://www.domena.sk |
| Hodiny | [Z dotazníka] |

### Pridať:
- [ ] Popis (750 znakov)
- [ ] Služby s cenami
- [ ] Fotky (min 10)
- [ ] Logo
- [ ] Rezervačný link

### Verifikácia:
- [ ] Vybrať metódu (pošta/telefón/email)
- [ ] Dokončiť verifikáciu

---

## 📧 Krok 8: Odovzdanie klientovi

### Odoslať email klientovi (šablóna nižšie)

**Prílohy:**
- [ ] Odkaz na web
- [ ] Prístupové údaje (ak potrebuje)
- [ ] Návod na Google Business
- [ ] Faktúra

---

## ✅ Finálny Checklist

- [ ] Web live na správnej doméne
- [ ] SSL aktívne
- [ ] PageSpeed > 90
- [ ] Schema.org OK
- [ ] GSC nastavené
- [ ] GBP vytvorené/odovzdané
- [ ] Email klientovi odoslaný
- [ ] Faktúra vystavená
- [ ] GitHub issue uzavretý

---

## 📊 Logging

Po dokončení projektu zaznamenaj:

| Údaj | Hodnota |
|------|---------|
| Názov projektu | |
| Dátum začiatku | |
| Dátum dokončenia | |
| Celkový čas | |
| Problémy | |
| Poznámky | |

---

*Vytvorené: December 2025*

