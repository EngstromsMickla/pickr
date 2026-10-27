# Pickr: arbetsbeskrivning för pickr.mickla.se

Arbetsbeskrivning för den som utvecklar spelet vidare, människa eller Claude.

## Syfte

- Ett busigt poesispel för alla nyfikna. Roboten Pickr har tappat en dikt; spelaren drar raderna i rätt ordning och får sedan veta titeln, formen och hur versmåttet fungerar.
- Spelet är en praktisk demonstration: ett vibe-kodat spel som bär fram mänskligt skapande. Det ska vara lekfullt, inte ett läromedel.
- Upphov: Dan Engström, Engströms Mickla AB. Dan äger allt innehåll; Claude föreslår, Dan beslutar.

## Fasta principer

- **Dikterna är Dans och ändras aldrig.** Spelet får bara flytta runt raderna. Ingen rad genereras, skrivs om eller "förbättras". Texten i `js/poems.js` är extraherad direkt ur Dans manus (Echoes of Life, 2025, och Hearts Around the Fire, 2026, båda utgivna av Piratpensionat Produktion). Enda rättelsen hittills, godkänd av Dan 2026-10-27: Reckoning, "I've came up" blev "I've come up".
- Allt på engelska (Dans beslut). Inga tankstreck i texter som Claude skriver; Dans egna titlar och dikter lämnas som de är.
- Licens: dikterna CC BY-NC-SA, enligt Dan ("CC BY-NC-SA 2026", som i Hearts Around the Fire). Allt i repot är offentligt; Dan har bekräftat att alla dikter får vara offentliga.
- Källorna beskrivs generellt på startsidan (About the poems), inte vid varje dikt (Dans beslut). Utdrag ur längre dikter anger vilken dikt de kommer ur.
- Versmåttsbeskrivningarna skrivs av Claude utifrån det urval och de formbeskrivningar Dan godkände 2026-10-27. Ändringar i texterna om Dans dikter (fältet `poem`) ska godkännas av Dan.
- Roboten Pickr är en egen figur i pixelstil (grön kropp, ockra antenn, visir med två ögon, rostfärgade klor). Den ska inte likna någon känd figur, till exempel Wall-E.
- Helt statisk sida på GitHub Pages (repot EngstromsMickla/pickr, gren `main`, domänen via `CNAME`). Inga externa typsnitt, CDN eller statistik. Inget lämnar webbläsaren; bara lösta dikter och ljudvalet sparas lokalt (`pickr.v1`), med try/catch.
- Publicera aldrig till `main` utan att Dan har sagt "publicera".
- Formgivning enligt mickla.se: papper #f6f4ef, grön #2f6b5e, ockra #a57a12, rost #b8532c, serif i rubriker och dikter, systemets sans-serif i brödtext, endast ljust läge. Ormen i sidfoten med "© Engströms Mickla AB 2026", licensen och version.

## Struktur

- `index.html`, `css/style.css`, `js/app.js` (spelmotorn), `img/` (ormen och favikonen).
- `js/content.js`: alla webbplatsens texter, inklusive Pickrs repliker och användarinstruktionen med processkarta.
- `js/poems.js`: poolen om fyrtio dikter, med strofer, nivå (`easy`, `medium`, `hard`), markeringar för ledtråden och formtexterna.
  - `marks`: en markering per rad. Bokstäver för rim (`rhyme`) eller allittererande ljud (`sound`), `soft`/`hard` för versslut (`ending`), `-` för orimmad rad.
  - `sample`: en exempelrad med betonade stavelser inom hakparentes. `|` betyder cesur.
  - `partOf` (utdrag ur längre dikt) eller `excerpt` (förklaring av utdraget).

## Spelregler (sedan v0.4)

- **Pool och omgång** (Dans beslut 2026-10-27): poolen har 40 dikter (11 easy, 14 medium, 15 hard). Varje omgång lottar tio: 3 easy, 4 medium, 3 hard (`round` i `js/content.js`), i nivåordning med slumpad ordning inom nivån. Omgången sparas i `pickr.v1` (`round`, `solved`). Start over och Play a new round lottar en ny omgång och nollställer lösta dikter.
- **Hjälp före varje dikt** (Dans beslut): tre frågor. (1) Första strofen på plats, eller första raden om dikten bara har en strof. (2) Rimbokstäver (ljudbokstäver för allitteration, mjuka och hårda versslut för blankvers; dold för dikter utan rim, `markLabel: "none"`). (3) Antal övriga strofer på plats: 0 till floor((antal strofer − 1) / 2); för enstrofiga dikter räknas rader i stället. Valen sparas (`help`) och föreslås nästa gång.
- **Strategiskt val av övriga strofer** (`chooseUnits`): girigt, där poängen är strofens radantal × 2 plus avståndet till närmaste redan givna strof. Stora strofer går först och de sprids ut; vid lika poäng vinner den senare. Första strofen räknas aldrig till de övriga.
- Hela dikten spelas på en gång. Mellanrum i listan visar var stroferna bryts.
- Ordningen kontrolleras mot texten, inte mot radens nummer, så att upprepade rader (pantun) kan byta plats. Blandningen undviker att någon fri rad hamnar rätt från början.
- Vid Kontrollera låses rader som står rätt (gröna). Ledtrådar: först rimbokstäverna om de är dolda; varje följande ledtråd låser en rad. Antalet ledtrådar visas när dikten är löst.
- Hem finns i sidhuvudet. Start over (på startsidan och i dikt-listan när något är löst) lottar en ny omgång efter en bekräftelse på sidan, inte i en webbläsardialog.
- Styrning: dra i handtaget (mus och pekskärm) eller tryck på två rader för att byta plats (fungerar också med tangentbord).

## Guide

- `#guide` (Metres and terms, länkad i sidhuvudet, från startsidan och från varje avslöjande): begrepp i fem avsnitt (rader och strofer, ljud, rytm, versfötter, radlängder) i `guide` i `js/content.js`, med exempel ur dikterna. Avsnittet om formerna byggs ur hela poolen i `js/poems.js`, en post per form; länkar visas bara till dikter i aktuell omgång, och olösta visas med sitt nummer i omgången.

## Test

- `node tests/check.mjs` körs i Actions före varje publicering: inga externa resurser eller nätverksanrop, 40 dikter och tillräckligt många per nivå, rätt antal markeringar, alla fält ifyllda, inga tankstreck i Claudes texter.
- Innan något föreslås för publicering: lös alla fyrtio dikterna i Playwright, med olika hjälpval, i dator- och telefonstorlek och titta på skärmbilderna.

## Versioner

- v0.1 (2026-10-27): första versionen med alla tjugo dikter.
- v0.2 (2026-10-27): lättare spel (första raden på plats, rätta rader låses, markeringar från början i Warm up), guiden Metres and terms, förlaget Piratpensionat Produktion för båda samlingarna.
- v0.3 (2026-10-27): Hem i sidhuvudet och Start over som raderar alla lösta dikter.
- v0.4 (2026-10-27): pool om 40 dikter (20 nya), omgångar om tio, hjälpval före varje dikt med strategiskt valda strofer, strofmellanrum i spelet.
