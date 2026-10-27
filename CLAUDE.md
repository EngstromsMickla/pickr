# Pickr: arbetsbeskrivning för pickr.mickla.se

Arbetsbeskrivning för den som utvecklar spelet vidare, människa eller Claude.

## Syfte

- Ett busigt poesispel för alla nyfikna. Roboten Pickr har tappat en dikt; spelaren drar raderna i rätt ordning och får sedan veta titeln, formen och hur versmåttet fungerar.
- Spelet är en praktisk demonstration: ett vibe-kodat spel som bär fram mänskligt skapande. Det ska vara lekfullt, inte ett läromedel.
- Upphov: Dan Engström, Engströms Mickla AB. Dan äger allt innehåll; Claude föreslår, Dan beslutar.

## Fasta principer

- **Dikterna är Dans och ändras aldrig.** Spelet får bara flytta runt raderna. Ingen rad genereras, skrivs om eller "förbättras". Texten i `js/poems.js` är extraherad direkt ur Dans manus (Echoes of Life, manus 2025; Hearts Around the Fire, 2026). Enda rättelsen hittills, godkänd av Dan 2026-10-27: Reckoning, "I've came up" blev "I've come up".
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
- `js/poems.js`: de tjugo dikterna i spelordning, med strofer, nivå (`easy`, `medium`, `hard`), markeringar för ledtråden och formtexterna.
  - `marks`: en markering per rad. Bokstäver för rim (`rhyme`) eller allittererande ljud (`sound`), `soft`/`hard` för versslut (`ending`), `-` för orimmad rad.
  - `sample`: en exempelrad med betonade stavelser inom hakparentes. `|` betyder cesur.
  - `partOf` (utdrag ur längre dikt) eller `excerpt` (förklaring av utdraget).

## Spelregler

- Dikter på högst 14 rader spelas hela. Längre dikter delas i delar om högst 8 rader, strof för strof (en kort sista del slås ihop med den förra om summan blir högst 12).
- Ordningen kontrolleras mot texten, inte mot radens nummer, så att upprepade rader (pantun) kan byta plats.
- Blandningen undviker att någon rad hamnar rätt från början.
- Kontrollera: rader på rätt plats lyser grönt. Första ledtråden visar markeringarna; varje följande ledtråd låser en rad på rätt plats. Antalet ledtrådar visas när dikten är löst.
- Styrning: dra i handtaget (mus och pekskärm) eller tryck på två rader för att byta plats (fungerar också med tangentbord).

## Test

- `node tests/check.mjs` körs i Actions före varje publicering: inga externa resurser eller nätverksanrop, 20 dikter, rätt antal markeringar, alla fält ifyllda, inga tankstreck i Claudes texter.
- Innan något föreslås för publicering: lös alla tjugo dikterna i Playwright i dator- och telefonstorlek och titta på skärmbilderna.

## Versioner

- v0.1 (2026-10-27): första versionen med alla tjugo dikter.
