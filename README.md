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
| Kopfzeile, Hero | `src/components/Hero.astro` |
| Rundgang (6 Fragen mit Screenshot) | `src/components/Rundgang.astro` |
| Weitere Ansichten | `src/components/Ansichten.astro` |
| CSV-Import | `src/components/Datenweg.astro` |
| Was mit den Depotdaten passiert | `src/components/Daten.astro` |
| Beipackzettel (Grenzen des Tools) | `src/components/Beipackzettel.astro` |
| Roadmap-Notizblock | `src/components/Demnaechst.astro` |
| Warteliste | `src/components/Anmeldung.astro`, `src/components/WaitlistForm.astro` |
| Impressum / Datenschutz | `src/pages/impressum.astro`, `src/pages/datenschutz.astro` |
| Farben & Typo | `src/styles/global.css` (CSS-Variablen oben) |


Schriften (Fraunces, Instrument Sans, JetBrains Mono, Caveat) kommen über
`@fontsource` aus `node_modules` und werden mit der Seite ausgeliefert.

## Screenshots

Die Bilder liegen als WebP in `public/shots/`: `detail-*.webp` sind lesbare
Ausschnitte für die Seite, die übrigen sind ganze Panels für die Lightbox.
Alle stammen aus einem lokalen Demo-Stack mit einem synthetischen Depot.
Echte Depotdaten dürfen hier nie auftauchen, auch nicht verfremdet.

Rotstift-Markierungen setzen `Rundgang.astro` und `Hero.astro` mit den Helfern
aus `src/lib/pen.ts`. Die Koordinaten beziehen sich auf die Pixelmaße des
jeweiligen Bildes.

## Stack

- [Astro 4](https://astro.build/) — statisch generiert
- Vanilla CSS mit CSS-Variablen (keine Tailwind/UI-Lib-Dependency)
- Buttondown Embed für die Warteliste
- Inter Fallback auf System-Stack (kein Webfont-Download)