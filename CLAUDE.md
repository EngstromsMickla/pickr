# Pickr: arbetsbeskrivning för pickr.mickla.se

Arbetsbeskrivning för den som utvecklar spelet vidare, människa eller Claude.

## Syfte

- Ett busigt poesispel för alla nyfikna. Roboten Pickr har tappat en dikt; spelaren drar raderna i rätt ordning och får sedan veta titeln, formen och hur versmåttet fungerar.
- Spelet är en praktisk demonstration: ett vibe-kodat spel som bär fram mänskligt skapande. Det ska vara lekfullt, inte ett läromedel.
- Upphov: Dan Engström, Engströms Mickla AB. Dan äger allt innehåll; Claude föreslår, Dan beslutar.

## Fasta principer

- **Dikterna är Dans och ändras aldrig.** Spelet får bara flytta runt raderna. Ingen rad genereras, skrivs om eller "förbättras". Texten i `js/poems.js` är extraherad direkt ur Dans manus (Echoes of Life, 2025, och Hearts Around the Fire, 2026, båda utgivna av Piratpensionat Produktion). Rättelser godkända av Dan 2026-10-27: Reckoning, "I've came up" blev "I've come up"; Ohana, "deerly" blev "dearly"; Path to Exile, "demarkations" blev "demarcations". "déja vu" (Fathering) och "just make games" (Path to Exile) är avsiktliga.
- Allt på engelska (Dans beslut). Inga tankstreck i texter som Claude skriver; Dans egna titlar och dikter lämnas som de är.
- Licens: dikterna CC BY-NC-SA, enligt Dan ("CC BY-NC-SA 2026", som i Hearts Around the Fire). Allt i repot är offentligt; Dan har bekräftat att alla dikter får vara offentliga.
- Källorna beskrivs generellt på startsidan (About the poems), inte vid varje dikt (Dans beslut). Utdrag ur längre dikter anger vilken dikt de kommer ur.
- Versmåttsbeskrivningarna skrivs av Claude utifrån det urval och de formbeskrivningar Dan godkände 2026-10-27. Ändringar i texterna om Dans dikter (fältet `poem`) ska godkännas av Dan.
- Roboten Pickr är en egen figur i pixelstil (grön kropp, ockra antenn, visir med två ögon, rostfärgade klor). Den ska inte likna någon känd figur, till exempel Wall-E.
- Helt statisk sida på GitHub Pages (repot EngstromsMickla/pickr, gren `main`, domänen via `CNAME`). Inga externa typsnitt, CDN eller statistik. Inget lämnar webbläsaren; bara lösta dikter och ljudvalet sparas lokalt (`pickr.v1`), med try/catch.
- Publicera aldrig till `main` utan att Dan har sagt "publicera".
- Sidhuvud (Dans beslut 2026-10-28): Micklas orm till vänster och "Pickr by Engströms Mickla" på alla sidor; länkar till startsidan. På telefon står "by Engströms Mickla" under Pickr, och under 360 px döljs länken Home eftersom loggan redan leder hem.
- **Grafisk profil (Dans beslut 2026-10-28):** Pickr följer mickla.se i stället för det ljusa formspråket från boost: grafit (#303030, kort #3a3a3a, sidhuvud #4a4a4a, sidfot #222), vit text, rubriker och knappar i Poppins (självhostad i `fonts/`, SIL OFL), vita fyllda knappar eller tunna vita konturer med 3 px hörn, scenblått #2ea3f2 som accent (låsta rader, rätt svar, betoningar), ockra #e8b04a för markerad rad. Logga: Micklas vita pixelorm i en svart ruta (`img/orm.png`, från ormen_W_svart). Pickr är vit med svart visir och blå ögon. Dikternas rader står kvar i ett boktypsnitt (serif), så att de mänskliga texterna skiljer sig från gränssnittet. Startsidan har en scen med blått scenljus.
- Tidigare formgivning (ersatt): papper #f6f4ef, grön #2f6b5e, ockra #a57a12, rost #b8532c, serif i rubriker och dikter, systemets sans-serif i brödtext, endast ljust läge. Ormen i sidfoten med "© Engströms Mickla AB 2026", licensen och version.

## Struktur

- `index.html`, `css/style.css`, `js/app.js` (spelmotorn), `img/` (ormen och favikonen).
- `js/content.js`: alla webbplatsens texter, inklusive Pickrs repliker och användarinstruktionen med processkarta.
- `js/poems.js`: poolen om sextio dikter, med strofer, nivå (`easy`, `medium`, `hard`), markeringar för ledtråden och formtexterna.
  - `marks`: en markering per rad. Bokstäver för rim (`rhyme`) eller allittererande ljud (`sound`), `soft`/`hard` för versslut (`ending`), `-` för orimmad rad.
  - `sample`: en exempelrad med betonade stavelser inom hakparentes. `|` betyder cesur.
  - `partOf` (utdrag ur längre dikt) eller `excerpt` (förklaring av utdraget).

## Spelregler (sedan v0.4)

- **Pool och omgång** (Dans beslut 2026-10-27, ändrat 2026-10-28): poolen har 60 dikter (19 easy, 21 medium, 20 hard). En omgång är sex dikter (`roundSize`). Spelaren väljer nivå när en omgång startar (`#new`): Easy = 5 easy + 1 medium, Tricky = 1 easy + 4 medium + 1 hard, Challenging = 1 medium + 5 hard (`mixes` i `js/content.js`), i ordningen lätt till svår. Dikter från tidigare omgångar (`seen`) väljs inte förrän alla i nivån har spelats. Gamla omgångar med annan längd nollställs.
- **Hjälp före varje dikt** (Dans beslut, rader och inte strofer): tre frågor. (1) Första raden på plats. (2) Rimbokstäver (ljudbokstäver för allitteration, mjuka och hårda versslut för blankvers; dold för dikter utan rim, `markLabel: "none"`). (3) Antal övriga rader på plats: 0 till en per ytterligare strof, eller en tredjedel av raderna i en enstrofig dikt; minst tre rader lämnas alltid att lägga (`maxOthers`). Valen sparas (`help`) och föreslås nästa gång.
- **Strategiskt val av övriga rader** (`chooseLines`): i dikter med flera strofer ger Pickr inledningsraden i andra strofer, så långt ifrån redan givna rader som möjligt (större strof vinner vid lika avstånd). I enstrofiga dikter sprids raderna jämnt.
- Hela dikten spelas på en gång. Mellanrum i listan visar var stroferna bryts.
- Ordningen kontrolleras mot texten, inte mot radens nummer, så att upprepade rader (pantun) kan byta plats. Blandningen undviker att någon fri rad hamnar rätt från början.
- **Mickla-ormar** (Dans val i stället för stjärnor, 2026-10-27): 3 ormar om dikten blev hel på högst ceil(rader / 6) + 1 kontroller, 2 på högst dubbelt så många, annars 1 (`snakesFor`). Hjälpval och ledtrådar kostar aldrig ormar men redovisas.
- **Pickrs fråga** efter varje löst dikt, före formbeskrivningen (`makeQuiz`): tre svarsalternativ, fel svar kostar inget. Frågetypen följer diktens nivå och börjar lätt (Dans beslut): easy rimschemat, medium omväxlande form och rimschema, hard omväxlande versmått och form. Rimschemat frågas bara för rimmade dikter; annars blir det formen. Felaktiga alternativ: andra rimmönster av samma längd, former ur andra formfamiljer, andra taktkategorier (`beat` i `js/poems.js`). Frågan sparas med svaret i `solved`.
- **Sammanfattning efter omgången** (`#summary`): antal ormar, antal igenkända former och rimscheman, de tio dikterna med ormar och svar, dikten med minst hjälp (första raden, rimbokstäver, övriga rader och ledtrådar räknas lika) och formerna man mött. Ingen totalpoäng eller topplista, med avsikt.
- **More help under spelet** (Dans önskemål 2026-10-27): samma tre val som före dikten, men bara mer hjälp kan läggas till (redan valda val är låsta). Lagda rader behålls; nya rader läggs på plats och låses. Räknas in i hjälpen i sammanfattningen men kostar inga ormar.
- Vid Kontrollera låses rader som står rätt (gröna). Ledtrådar: först rimbokstäverna om de är dolda; varje följande ledtråd låser en rad. Antalet ledtrådar visas när dikten är löst.
- Hem finns i sidhuvudet. Start over (på startsidan och i dikt-listan när något är löst) lottar en ny omgång efter en bekräftelse på sidan, inte i en webbläsardialog.
- **Spara till senare** (2026-10-28): webbläsaren minns omgången av sig själv (`pickr.v1`), men Safari kan rensa den efter en vecka utan besök. Knappen Save for later ger därför en länk `#resume/<kod>` där omgången, nivån och resultaten ligger kodade (base64 av JSON). Inget skickas någonstans. Dela via telefonens delningsmeny eller kopiera. Länken valideras hårt vid öppning (bara kända dikt-id, rätt längd, tal begränsas) och behandlas som data. Frågans svar sparas bara som rätt eller fel och återskapas.
- Telefon (2026-10-28): hovereffekter bara för mus (`@media (hover: hover) and (pointer: fine)`), `touch-action: manipulation` på knappar och länkar, ett tryck på handtaget utan att dra markerar raden, och sidan flyttar inte fokus vid navigering på pekskärm. Så räcker ett tryck.
- Styrning: dra i handtaget (mus och pekskärm) eller tryck på två rader för att byta plats (fungerar också med tangentbord).

## Guide

- `#guide` (Metres and terms, länkad i sidhuvudet, från startsidan och från varje avslöjande): begrepp i fem avsnitt (rader och strofer, ljud, rytm, versfötter, radlängder) i `guide` i `js/content.js`, med exempel ur dikterna. Avsnittet om formerna byggs ur hela poolen i `js/poems.js`, en post per form; länkar visas bara till dikter i aktuell omgång, och olösta visas med sitt nummer i omgången.

## Test

- `node tests/check.mjs` körs i Actions före varje publicering: inga externa resurser eller nätverksanrop, 40 dikter och tillräckligt många per nivå, rätt antal markeringar, alla fält ifyllda, inga tankstreck i Claudes texter.
- Innan något föreslås för publicering: lös alla sextio dikterna i Playwright, med olika hjälpval, i dator- och telefonstorlek och titta på skärmbilderna.

## Versioner

- v0.1 (2026-10-27): första versionen med alla tjugo dikter.
- v0.2 (2026-10-27): lättare spel (första raden på plats, rätta rader låses, markeringar från början i Warm up), guiden Metres and terms, förlaget Piratpensionat Produktion för båda samlingarna.
- v0.3 (2026-10-27): Hem i sidhuvudet och Start over som raderar alla lösta dikter.
- v0.4 (2026-10-27): pool om 40 dikter (20 nya), omgångar om tio, hjälpval före varje dikt, strofmellanrum i spelet.
- v0.5 (2026-10-27): hjälpen gäller rader i stället för strofer; två stavfel rättade.
- v0.6 (2026-10-27): Mickla-ormar, Pickrs fråga efter varje dikt och sammanfattning efter omgången. Publicerad tillsammans med v0.4 och v0.5.
- v0.7 (2026-10-27): More help under spelet.
- v0.8 (2026-10-28): 20 nya dikter (fler korta), nya omgångar undviker redan spelade dikter, ett tryck räcker på telefon.
- v0.9 (2026-10-28): fylligare texter i In this poem för alla 60 dikter (innehållet och hur formen bär det), på Dans begäran. Texterna är Claudes läsningar; Dan kan stryka eller ändra.

- v1.0 (2026-10-28): nivåval Easy, Tricky, Challenging, omgångar om sex dikter, Save for later med länk.

- 2026-10-28 (Dans påpekande): utdragen ur The Healing of Bælwythe är bob and wheel (efter Sir Gawain), inte en allmän kör; The Bride and the King är skriven i Gawainstrof (allittererande långrader + bob and wheel som rimmar ababa). Formtexter, frågefamiljer och guiden (Bob and wheel, Gawain stanza) uppdaterade. Versionen är fortfarande v1.0.
- 2026-10-28 (Dan): The Town, akt II, är inspirerad av bob and wheel men är inget riktigt bob and wheel (lite för lång); formen heter Loose bob and wheel. Narrens interludium ("He is gone") har ingen förebild, formen kom av sig själv.

## Biblioteket och licenserna (2026-10-28)

- **Licenser (Dans beslut):** dikterna och pjäsen är av Dan Engström, utgivna av Piratpensionat Produktion (ett varumärke som ägs av Engströms Mickla AB) och licensierade CC BY-NC-SA. Spelet (kod, webbplatstexter, formgivning, roboten Pickr, läsningarna av dikterna) är © Engströms Mickla AB 2026, alla rättigheter förbehållna, och omfattas inte av CC. Inget ©-tecken vid dikterna. Se `LICENSE`.
- **Biblioteket** (`#library`, länk Books i sidhuvudet): Echoes of Life, Hearts Around the Fire och pjäsen Fire in Bælwythe, fria att läsa oavsett resultat i spelet (Dans beslut). Läsaren (`#read/<bok>`) har innehållsförteckning, och förorden (Foreword, Our home by the river, Directions) ligger hopfällda överst så att spelaren kommer direkt till dikterna. Pjäsen har en rad om uppsättningar: ideella uppsättningar är fria enligt licensen, Dan vill gärna höra om dem (dan@mickla.se), kommersiella frågar först.
- `js/books.js` byggs med `tools/build_books.py` ur Dans manus, som inte ligger i repot. Texten följer manusen; bara Dans godkända rättelser förs in (came till come, deerly till dearly, demarkations till demarcations, loafs till loaves i pjäsen). Slutversionerna är inte skrivna än, så biblioteket byggs om när nya manus kommer. books.js laddas först när någon öppnar biblioteket.
- **Read it where it lives:** skriptet lägger in `src` (rad i boken, antal rader, plats) och `play` (plats i pjäsen, om dikten finns där) i varje dikt i `js/poems.js`. Efter varje löst dikt visas var den hör hemma med länk som öppnar boken på rätt ställe och markerar raderna (`#read/<bok>/<rad>-<antal>-<id>`), och för 16 dikter även en länk till pjäsen. Sammanfattningen efter omgången visar de tre verken.
- **AI-skrapning:** `robots.txt` ber kända AI-sökrobotar att låta bli sajten, och sidan har `noai`. Det är en begäran, ingen garanti.
- Byggskriptet (2026-10-28): rader som har tappat sina radbrytningar i manuset delas där en ny rad börjar med versal (orden ändras aldrig); en ensam inledande blanksteg tas bort, medan avsiktliga indrag (två eller fler blanksteg, som i Dignity) behålls; i pjäsen blir Narrens talade meningar prosa i stället för versrader, och ett ensamt datum blir prosa.

## Uppläsning: sparad, inte i drift (2026-10-29)

- v1.1 hade uppläsning med enhetens talsyntes. Dan valde bort den samma dag: en artificiell röst ger fel intryck av dikterna. Sajten är tillbaka på v1.0.
- Koden finns kvar orörd i grenen `upplasning` (commit 1b47855) i EngstromsMickla/pickr. Om Dan läser in dikterna själv byggs den om så att den spelar hans inspelningar (en ljudfil per rad, så att spelarens ordning kan spelas upp) i stället för talsyntes. Ingen talsyntes ska användas.

## Poesins historia (2026-10-29)
- Varje dikt har en egen historietext (`use`) och en rubrik med årtal (`hist: {era, when, h}`). Ingen text får upprepas; tests/check.mjs kontrollerar det.
- Texterna är skrivna av Claude och faktagranskade mot källor (Dans tips: RPO-tidslinjen, americanboard.org, Jake Young, A genealogy of poetry, 2024). Legender skrivs som "the story goes".
- Rubriken på resultatsidan är "A page of history". Sidan låses upp i guidens tidslinje "Poetry through time" när quizen är besvarad; listan sparas lokalt i `pages` och följer med mellan omgångar.

## Pickrs sex olyckor (2026-10-29, grenen nasta)
- Före varje dikt råkar Pickr ut för en kort olycka som blandar raderna: nysning, snubbel, jonglering, vinkning som välter högen, stretching med dikten på huvudet, halka på en lös rad (Dans idé). Varje olycka finns en gång per omgång om sex, i en ordning som räknas fram ur omgångens dikter (`gagFor`), så att en sparad och återupptagen omgång får samma ordning.
- Ritas med kod (SVG och CSS), inte film: samma pixelrobot, några kilobyte, inget externt. Under två sekunder; ett tryck hoppar över; vid minskad rörelse visas bara Pickrs replik. Ljud bara om ljudet är på.
- Replikerna ligger i `pickr.gags` i `js/content.js`. Dan tyckte att nysningen var "perfectly quirky and odd".
