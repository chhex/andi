# André Behr – Journalist & Writer Website

## Übersicht

Portfolio-Website für André Behr, Journalist mit über 40 Jahren Erfahrung.
Gebaut als JAMstack Site – schnell, sicher, wartungsarm.
Kleine Aenderung

## Stack

| Tool | Zweck | Warum |
|---|---|---|
| **Astro 6** | Static Site Generator | Schnell, modern, kein JS Overhead |
| **Tailwind CSS v4** | Styling | Utility-first, flexibel |
| **DaisyUI v5** | UI Components & Themes | Theme-Switching, saubere Komponenten |
| **Sveltia CMS** | Content Management | Modernes UI, GitHub OAuth, kein Server |
| **Vercel** | Hosting + OAuth Proxy | Auto-Deploy, schnell, offen |
| **Web3Forms** | Kontaktformular | Gratis, kein Backend nötig |
| **GitHub** | Versionierung | Single Source of Truth |

## Warum dieser Stack?

### Sveltia CMS statt Decap/TinaCMS

- **TinaCMS** – primär für Next.js, Astro v6 nicht unterstützt
- **Decap CMS** – Netlify Identity hatte CORS Probleme, Git Gateway in Sveltia deprecated
- **Sveltia CMS** – modernes UI, GitHub OAuth direkt, Drop-in Ersatz für Decap

### Vercel statt Netlify

- Netlify Identity hatte persistente CORS Probleme
- Vercel ist offener und flexibler
- GitHub OAuth Proxy als Vercel Function – sauber und kontrollierbar

### Web3Forms statt Netlify Forms / Formspree

- Netlify Forms: Custom Redirect kostenpflichtig
- Formspree: 50 Submissions/Monat Limit
- Web3Forms: Gratis, unbegrenzt, einfache Integration

## Architektur

```
GitHub (Single Source of Truth)
    ↓ git push
Vercel (Hosting + OAuth Proxy)
    ↓ auto-deploy
Astro (Static Site)
    ↓ content aus JSON
Sveltia CMS → GitHub Commit → Vercel Deploy
Web3Forms → Email an André
```

## Separation of Concerns

| Was | Wer | Wie |
|---|---|---|
| Struktur & Layout | Chris | Astro Pages + Components |
| Styling & Themes | Chris | Tailwind / DaisyUI global.css |
| Inhalte & Texte | André | Sveltia CMS im Browser |
| Referenzen & Media | André | Sveltia CMS |
| Versionierung | GitHub | Automatisch bei jeder Änderung |

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build testen
npm run build
npm run preview
```

## Content Management – für André

**Login:** `https://andi-cyan.vercel.app/admin/index.html`

**Was André selbst ändern kann:**

- Homepage Text
- Über mich – Absätze hinzufügen/ändern/löschen
- Angebot – Leistungen hinzufügen/ändern/löschen
- Referenzen – Artikel, PDFs, Videos, Audio, Bilder
- Kontakt – Email, LinkedIn, Intro Text

**Was Chris macht:**

- Strukturelle Änderungen (neue Seiten, Navigation)
- Design Anpassungen (Themes, Layout)
- Technische Updates

**Wichtig:** Jede Änderung im CMS = automatischer GitHub Commit = automatisches Vercel Deploy

## Deployment

```bash
git add .
git commit -m "Beschreibung"
git push
# → Vercel deployt automatisch in ~1 Minute
```

## Environment Variables (Vercel)

```
GITHUB_CLIENT_ID        = GitHub OAuth App Client ID
GITHUB_CLIENT_SECRET    = GitHub OAuth App Client Secret
PUBLIC_WEB3FORMS_KEY    = Web3Forms Access Key
```

## GitHub OAuth Setup

OAuth App auf GitHub:

- **Homepage URL:** `https://andi-cyan.vercel.app`
- **Callback URL:** `https://andi-cyan.vercel.app/api/auth/callback`

## Projektstruktur

```
/
├── api/
│   └── auth/
│       ├── index.js        # GitHub OAuth redirect
│       └── callback.js     # GitHub OAuth callback
├── content/
│   ├── home.json
│   ├── ueber.json
│   ├── angebot.json
│   ├── referenzen.json
│   └── kontakt.json
├── public/
│   ├── admin/
│   │   ├── index.html      # Sveltia CMS
│   │   └── config.yml      # CMS Konfiguration
│   ├── dokumente/
│   └── images/
└── src/
    ├── components/
    │   ├── Header.astro
    │   ├── IconAudio.astro
    │   ├── IconBild.astro
    │   ├── IconDownload.astro
    │   ├── IconExternalLink.astro
    │   └── IconVideo.astro
    ├── layouts/
    │   └── Layout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── ueber-mich.astro
    │   ├── angebot.astro
    │   ├── referenzen.astro
    │   └── kontakt.astro
    └── styles/
        └── global.css
```

## Themes

DaisyUI Themes wechselbar via Dropdown im Header.
Aktives Theme: **andre** (custom, definiert in global.css)

Verfügbare Themes: andre, nord, corporate, dim, lemonade, sunset

## Git Tags

| Tag | Beschreibung |
|---|---|
| v0.1-pre-cms | Sauberer Stand vor CMS Integration |
| v0.2-pre-cleanup | Stand vor CSS Cleanup |
| v0.3-content-externalized | Alle Inhalte in JSON |
| v0.4-media-support | Video/Audio/Bild Support |
| v0.5-theme-switcher | DaisyUI Theme Switcher |
| v0.6-contact-form | Kontaktformular |
| v0.7-pre-sveltia | Stand vor Sveltia CMS |
| v1.0 | Produktionsreifer Stand |


