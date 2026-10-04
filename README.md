# Finanzübersicht — Landing Page

Statische One-Pager Landing Page im Look eines Prüfberichts (Papier, Tinte, Rotstift) für Finanzübersicht.
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

## Warteliste (Buttondown)

Das Formular nutzt das Buttondown-Embed. Den Benutzernamen ermittelt der Build
auf zwei Wegen:

1. `PUBLIC_BUTTONDOWN_USERNAME` ist gesetzt (lokal in `.env`, siehe `.env.example`), oder
2. `BUTTONDOWN_API_KEY` ist gesetzt (auf Vercel als Secret). Dann fragt der Build
   den Benutzernamen über die Buttondown-API ab. Der Key landet nicht im HTML.

Ohne beides zeigt die Seite einen Hinweis statt des Formulars.

## Deployment

### Vercel

1. Repo bei Vercel importieren (Framework: **Astro** wird automatisch erkannt).
2. Env-Variable `BUTTONDOWN_API_KEY` setzen.
3. Domain verbinden.

### Netlify

1. Repo bei Netlify verbinden.
2. Build command: `npm run build`, Publish directory: `dist`.
3. Env-Variable `BUTTONDOWN_API_KEY` setzen.

### Cloudflare Pages

1. Framework preset: **Astro**.
2. Build command: `npm run build`, Output: `dist`.
3. Env-Variable wie oben.

## Inhalte tauschen

| Wo? | Datei |
| --- | --- |
| Kopfzeile, Hero | `src/components/Hero.astro` |
| Rundgang (6 Fragen mit Screenshot) | `src/components/Rundgang.astro` |
| CSV-Import und Datenquellen | `src/components/Datenweg.astro` |
| Vergleich mit Portfolio Performance | `src/components/Vergleich.astro` |
| Was mit den Depotdaten passiert | `src/components/Daten.astro` |
| Beipackzettel (Grenzen des Tools) | `src/components/Beipackzettel.astro` |
| Roadmap-Notizblock | `src/components/Demnaechst.astro` |
| Warteliste | `src/components/Anmeldung.astro`, `src/components/WaitlistForm.astro` |
| Impressum / Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |
| Farben & Typo | `src/styles/global.css` (CSS-Variablen oben) |


Schriften (Fraunces, Instrument Sans, JetBrains Mono) kommen über
`@fontsource` aus `node_modules` und werden von der Seite selbst ausgeliefert,
nicht von Google Fonts.

## Screenshots

Die Bilder liegen als WebP in `public/shots/`: `detail-*.webp` sind lesbare
Ausschnitte für die Seite, die übrigen sind ganze Panels für die Lightbox.
Alle stammen aus einem lokalen Demo-Stack mit einem synthetischen Depot.
Echte Depotdaten dürfen hier nie auftauchen, auch nicht verfremdet.

Die einzige Rotstift-Markierung (Unterstreichung im Hero) setzt `Hero.astro` mit
den Helfern aus `src/lib/pen.ts`. Die Koordinaten beziehen sich auf die
Pixelmaße des Bildes.

## Stack

- [Astro 4](https://astro.build/) — statisch generiert
- Vanilla CSS mit CSS-Variablen (keine Tailwind/UI-Lib-Dependency)
- Buttondown-Embed für die Warteliste
- Webfonts über @fontsource, selbst ausgeliefert (kein Google Fonts)