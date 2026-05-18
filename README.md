# Finanzübersicht — Landing Page

Statische One-Pager Landing Page für [Finanzübersicht](https://github.com/Mechanicel/Finanzuebersicht).
Astro 4, kein Framework-Overhead, kein Tracking, kein Cookie-Banner.

## Lokal starten

```bash
npm install
npm run dev
# → http://localhost:4321
```

Build:

```bash
npm run build      # → dist/
npm run preview    # statisches Preview von dist/
```

## E-Mail-Sammlung (Buttondown)

Das Warteliste-Formular nutzt das Buttondown-Embed.

1. Kostenlosen Account anlegen: <https://buttondown.com/>
2. Username notieren (z. B. `finanzuebersicht`).
3. `.env` aus Vorlage erzeugen und Username eintragen:

   ```bash
   cp .env.example .env
   # PUBLIC_BUTTONDOWN_USERNAME=finanzuebersicht
   ```

4. Bei Vercel / Netlify die Env-Variable `PUBLIC_BUTTONDOWN_USERNAME`
   im Dashboard setzen.

Double-Opt-In ist bei Buttondown standardmäßig aktiv.

## Deployment

### Vercel

1. Repo bei Vercel importieren (Framework: **Astro** wird automatisch erkannt).
2. Env-Variable `PUBLIC_BUTTONDOWN_USERNAME` setzen.
3. Domain verbinden.

### Netlify

1. Repo bei Netlify verbinden.
2. Build command: `npm run build`, Publish directory: `dist`.
3. Env-Variable `PUBLIC_BUTTONDOWN_USERNAME` setzen.

### Cloudflare Pages

1. Framework preset: **Astro**.
2. Build command: `npm run build`, Output: `dist`.
3. Env-Variable wie oben.

## Inhalte tauschen

| Wo? | Datei |
| --- | --- |
| Hero-Headline + Mockup-Werte | `src/components/Hero.astro` |
| Problem-Texte | `src/components/Problem.astro` |
| Feature-Cards (Live/Soon) | `src/components/Features.astro` |
| Screenshot-Platzhalter | `src/components/Screenshots.astro` |
| Vergleichstabelle | `src/components/Compare.astro` |
| CTA-Block | `src/components/CtaSection.astro` |
| Impressum / Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |
| Farben & Typo | `src/styles/global.css` (CSS-Variablen oben) |

## Screenshots einbauen

Aktuell nutzen die Screenshot-Slots Platzhalter. Echte Bilder so einbauen:

1. PNGs / WebPs in `public/screenshots/` ablegen.
2. In `src/components/Screenshots.astro` den Inhalt von `.shot__placeholder`
   durch `<img src="/screenshots/treemap.png" alt="…" loading="lazy" />` ersetzen.

## Stack

- [Astro 4](https://astro.build/) — statisch generiert
- Vanilla CSS mit CSS-Variablen (keine Tailwind/UI-Lib-Dependency)
- Buttondown Embed für die Warteliste
- Inter Fallback auf System-Stack (kein Webfont-Download)