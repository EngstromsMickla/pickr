/* Pickr: content. All poems by Dan Engström, CC BY-NC-SA. Edit texts here, not in app.js.
   The pool holds 60 poems; each round draws 10 (3 easy, 4 medium, 3 hard). */
window.PICKR_POEMS = [
 {
  "id": "birds",
  "level": "easy",
  "title": "Birds",
  "marks": [
   "A",
   "A",
   "B",
   "A"
  ],
  "markLabel": "rhyme",
  "form": "Rubai quatrain",
  "scheme": "AABA",
  "metre": "Trochaic trimeter, with the last unstressed syllable dropped",
  "sample": "[BIRDS] don't [ASK] to [TRY]",
  "how": "Four lines where the first, second and fourth rhyme and the third stands apart. The odd line out makes a small pause before the last line snaps the rhyme shut.",
  "character": "Compact and proverb-like, a saying with a punchline.",
  "use": "Made famous in English by Edward FitzGerald's Rubáiyát of Omar Khayyám (1859), and used ever since for epigrams and wisdom verse.",
  "poem": "Four lines about instinct, and the form behaves like one. The short trochaic lines start on the stress with no run-up, the way a bird leaves a branch without deliberating. The third line, the only one that does not rhyme, is where the poem itself stops to think; the last line answers by snapping back to the rhyme. Trying and thinking are what kill the bird, and the poem makes its point by not hesitating.",
  "book": "echoes",
  "stanzas": [
   [
    "Birds don’t ask to try",
    "If they do, they die"
   ],
   [
    "Birds don’t stop to think",
    "Their instinct is to fly"
   ]
  ],
  "beat": "tri"
 },
 {
  "id": "interlude",
  "level": "easy",
  "title": "Interlude – The Jester speaks",
  "partOf": "The North Wind by the Tail",
  "marks": [
   "-",
   "A",
   "A",
   "-",
   "B",
   "B",
   "-",
   "C",
   "C"
  ],
  "markLabel": "rhyme",
  "form": "Short-line tercets",
  "scheme": "xAA xBB xCC",
  "metre": "Two lines of two beats, then a trochaic line of four beats",
  "sample": "he is [GONE] / he is [DEAD] / [DUST] is [SET]-tling [ON] his [BED]",
  "how": "Each stanza has three lines: two short lines of two beats, then a longer line of four beats that rhymes with the second. The short lines build pressure; the long line lets it out.",
  "character": "Chant-like, almost a nursery rhyme, which makes the cold message land harder.",
  "use": "Short tercets like these belong to songs, chants and the interludes of verse drama, where a voice steps outside the story to comment on it.",
  "poem": "The Jester steps out of the tale of Guilda, whose husband has just died in the storm. His three tiny stanzas move from fact (he is dead) to blame (that's on him) to warning (your revenge will be in vain). The chanting short lines sound almost like a nursery rhyme, which makes them cold, and the long third line of each stanza delivers the sting. The fool is the only one who says aloud what the town will not: the quest she is about to begin is hopeless.",
  "book": "hearts",
  "stanzas": [
   [
    "He is gone",
    "He is dead",
    "Dust is settling on his bed"
   ],
   [
    "That’s on him",
    "To be fair",
    "Maybe next time you’ll prepare"
   ],
   [
    "Can’t you see",
    "Through your pain",
    "Your revenge will be in vain"
   ]
  ],
  "beat": "short"
 },
 {
  "id": "roguemind",
  "level": "easy",
  "title": "My rogue mind",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D"
  ],
  "markLabel": "rhyme",
  "form": "Cross-rhymed quatrains",
  "scheme": "ABAB CDCD",
  "metre": "Four beats per line, mixing iambic and trochaic tetrameter",
  "sample": "my [MIND] cre-[ATES] the [STRANG]-est [THINGS]",
  "how": "Two quatrains with alternating rhyme. Some lines start on an unstressed syllable (iambic), others drop it and start straight on the stress (trochaic). The four beats stay; the number of syllables shifts.",
  "character": "Light and nimble; the dropped syllables make the lines skip.",
  "use": "Free-moving four-beat lines like these are the backbone of English song, hymn and children's verse, and of poems such as William Blake's The Tyger.",
  "poem": "A poem about a mind that refuses to sit still, in a metre that refuses too: some lines start on an upbeat, others jump straight onto the stress, so the rhythm keeps tipping over. The first stanza shows the mind making strange things, like the queen of bus stops on her throne; the second turns it into a method, imagining the opposite of whatever it hears. The final question is the poem's engine: what if the opposite were true? It is the habit of a contrarian, and of a poet.",
  "book": "echoes",
  "stanzas": [
   [
    "My mind creates the strangest things",
    "It works like that, on its own",
    "Eerie places fit for kings",
    "The queen of bus stops on her throne"
   ],
   [
    "If you will note that something’s pink",
    "Then I’ll imagine it’s blue",
    "Make a claim and I will think",
    "What if the opposite were true?"
   ]
  ],
  "beat": "tetra"
 },
 {
  "id": "poetry",
  "level": "easy",
  "title": "Poetry",
  "marks": [
   "P",
   "S",
   "P",
   "S",
   "L"
  ],
  "markLabel": "sound",
  "form": "Free verse bound by alliteration",
  "scheme": "No rhyme",
  "metre": "No fixed metre",
  "sample": "[PEB]-bles in a [POND], [PEARLS] [GENT]-ly [DROPPED]",
  "how": "There is no rhyme and no regular beat. Instead each line is held together by repeated opening sounds: p, then s, then p and s again, and finally l. The sounds return like ripples on water.",
  "character": "Quiet and musical; sound does the work that rhyme does elsewhere.",
  "use": "Free verse has been central to modern poetry since Walt Whitman. Alliteration as the glue of a line goes back to Old English poetry.",
  "poem": "A poem about how poems work, built the way it describes. Thoughts sink like pebbles, send out circles of waves and rise again as light. The alliteration (pebbles, pond, pearls; sending, circles, single) makes each line a ripple of one sound. There is no rhyme to hold it together, only sound and image, so you find the order by following the stone down and the light back up.",
  "book": "echoes",
  "stanzas": [
   [
    "Pebbles in a pond, pearls gently dropped",
    "Sending circles of single waves",
    "Patiently and purposely prompted by thoughts",
    "That were slowly and silently sinking out of reach",
    "To lift up life into light from the depths"
   ]
  ],
  "beat": "free"
 },
 {
  "id": "brewer",
  "level": "easy",
  "title": "The Brewer",
  "marks": [
   "A",
   "A",
   "B",
   "B",
   "C",
   "C",
   "D",
   "D",
   "A",
   "A",
   "E",
   "E"
  ],
  "markLabel": "rhyme",
  "form": "Octosyllabic couplets",
  "scheme": "AABB CCDD AAEE",
  "metre": "Iambic tetrameter in rhyming pairs",
  "sample": "so [FINE], the [YIELD] of [YEAST] that [YEAR]",
  "how": "Lines of eight syllables and four beats, rhymed in pairs. A couplet closes quickly, so every pair can carry a joke or a turn. Two lines swing into a trochaic rhythm with a soft double rhyme (creation, fermentation).",
  "character": "Brisk, merry and a little cheeky.",
  "use": "Chaucer's early dream poems, Samuel Butler's Hudibras and Andrew Marvell's To His Coy Mistress all use it. It has long been a favourite for comic and narrative verse.",
  "poem": "The brewer rewrites Genesis: in the beginning there was beer. The merry couplets make the blasphemy sound like a toast, and each rhyme lands like a raised glass (laugh, epitaph; how, bow). The two lines with soft double rhymes put creation and fermentation side by side on purpose. The last couplet sets the monk's pious prayer against the courage of the drunk, and you can hear which one the brewer prefers.",
  "book": "hearts",
  "stanzas": [
   [
    "In the beginning there was beer",
    "So fine, the yield of yeast that year",
    "Even then, before creation",
    "The sweet scent of fermentation"
   ],
   [
    "He smiled and loosed the loudest laugh",
    "Yes, that could be my epitaph",
    "I jest with Genesis, and how",
    "Just know that I refuse to bow",
    "When life is hard and death is near",
    "Nothing as holy as a beer"
   ],
   [
    "Peaceful, pious prayer for you, monk",
    "I toast the courage of the drunk"
   ]
  ],
  "beat": "tetra"
 },
 {
  "id": "merchant",
  "level": "medium",
  "title": "The Merchant",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "B",
   "C",
   "C"
  ],
  "markLabel": "rhyme",
  "form": "Rhyme royal",
  "scheme": "ABABBCC",
  "metre": "Iambic pentameter",
  "sample": "the [PRIDE] that [FILLS] a [DAY] of [HON]-est [TOIL]",
  "how": "A seven-line stanza of five-beat lines. The fourth and fifth lines share a rhyme, which links the opening to the final couplet, and the couplet sums up.",
  "character": "Stately and reflective, with room to argue and then conclude.",
  "use": "Brought into English by Geoffrey Chaucer in Troilus and Criseyde, and named after King James I of Scotland, who used it in The Kingis Quair. Shakespeare used it for The Rape of Lucrece.",
  "poem": "A single stanza on the merchant's pride in honest work. Rhyme royal gives the trade the dignity of a sermon, and the alliteration (find fatigue fits, nurture needs, fortune, fail) gives it the steady rhythm of labour. The repeated rhyme in lines four and five ties the image of the ox and plough to the question of how to grow. The couplet ends at night, alone, with the thought that it is all up to you.",
  "book": "hearts",
  "stanzas": [
   [
    "The pride that fills a day of honest toil",
    "To find fatigue fits well upon your brow",
    "To nurture needs like farmers work the soil",
    "Your pledge to help—the merchant’s ox and plough—",
    "Will find your treasure while you fathom how",
    "To grow your fortune, fail and try anew",
    "At rest, at night, to know it’s up to you"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "jester",
  "level": "medium",
  "title": "The Jester",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "A",
   "B",
   "C",
   "C"
  ],
  "markLabel": "rhyme",
  "form": "Ottava rima",
  "scheme": "ABABABCC",
  "metre": "Iambic pentameter, with feminine rhymes",
  "sample": "my [WIT] pro-[VIDES] a [KING'S] ab-so-[LU]-tion",
  "how": "Eight lines of iambic pentameter. Two rhymes alternate through six lines, then a couplet delivers the punchline. Here the A rhymes are long feminine rhymes (absolution, dissolution, revolution), which end on an unstressed syllable.",
  "character": "In English it became the form of wit: build up for six lines, deflate in two.",
  "use": "It comes from Italy (Boccaccio, Ariosto, Tasso). In English, Lord Byron's Don Juan made it the form of satire.",
  "poem": "The jester describes his job: to keep the king laughing, and to slip the truth in under the laughter. Ottava rima, the form of comic wit since Byron, is the perfect costume. The long feminine rhymes (absolution, dissolution, revolution) build a threat while sounding like a joke, and the couplet drops the mask: I whisper you are mortal in his ear. The mocking slave of the last line seems to echo the slave who rode behind a triumphant Roman general to remind him he would die.",
  "book": "hearts",
  "stanzas": [
   [
    "My wit provides a king’s absolution",
    "From thinking stars revolve around the Earth",
    "My smiling face hides the dissolution",
    "Of all his might inherited at birth",
    "In the truth lie seeds of revolution",
    "The mask it wears, the silly hats of mirth",
    "I whisper you are mortal in his ear",
    "The mocking slave who wields the jester’s tear"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "bard",
  "level": "medium",
  "title": "The Bard",
  "marks": [
   "M",
   "S",
   "T",
   "W",
   "C",
   "H",
   "L",
   "H"
  ],
  "markLabel": "sound",
  "form": "Alliterative verse",
  "scheme": "No rhyme",
  "metre": "Four stresses per line, split by a pause and bound by alliteration",
  "sample": "[MIR]-rored by the [MIN]-strels | the [MOR]-ning [SUN] [RI]-ses",
  "how": "Each line has two halves divided by a pause, the caesura, shown here as a gap. Stressed words in both halves begin with the same sound, which ties the line together. There is no rhyme and no fixed number of syllables, only the weight of the beats.",
  "character": "Heavy, ancient and incantatory, made to be recited aloud.",
  "use": "The verse of Old English poetry such as Beowulf, and of Middle English poems like Sir Gawain and the Green Knight. Modern poets such as J.R.R. Tolkien and W.H. Auden revived it.",
  "poem": "The bard sings a single morning over the tired town: sunrise, shadows, fog, a breeze, warmth and finally hope. Alliterative verse, the oldest English poetry, gives the song the weight of something ancient and shared, as if it had always been sung in Bælwythe. Each line is split by a pause and bound by its repeated sound, so the poem moves half a line at a time, like daylight spreading. The last line brings the human heart into the landscape: there is hope for healing, however hard it is.",
  "book": "hearts",
  "stanzas": [
   [
    "Mirrored by the minstrels | the morning sun rises",
    "Shattering the shadows | shunned by the dark",
    "A town so sorely tired | wakes to trembling dawn",
    "The weakness of the weary | is wiped off by a breeze",
    "Cold but yet a comfort | crisp the morning air",
    "A hint of rising heat | holding fog at bay",
    "In light of daybreak living | lies the human heart",
    "There is hope for healing | however hard it is"
   ]
  ],
  "beat": "allit"
 },
 {
  "id": "aftermath",
  "level": "medium",
  "title": "The Aftermath – The Jester speaks",
  "partOf": "The Fire and the Crown",
  "marks": [
   "-",
   "A",
   "-",
   "A",
   "-",
   "B",
   "-",
   "B",
   "-",
   "C",
   "-",
   "C"
  ],
  "markLabel": "rhyme",
  "form": "Common metre with internal rhyme",
  "scheme": "xAxA, with rhymes inside the long lines",
  "metre": "Iambic lines of four and three beats in turn",
  "sample": "the [KING] has [FLED], the [BI]-shop's [DEAD]",
  "how": "Common metre alternates four-beat and three-beat lines and rhymes the short ones. Here each long line also rhymes inside itself (fled, dead; sent, rent; is, miss), which shows that a ballad stanza is really one long line of seven beats broken in two.",
  "character": "Jaunty and sing-song; the inner rhymes make it bounce like a jig, at odds with the grim news.",
  "use": "The metre of hymns such as Amazing Grace, of folk ballads and of most of Emily Dickinson's poems.",
  "poem": "After the revolution in The Fire and the Crown, the Jester sums it up: the king has fled, the bishop is dead, mothers count the cost. The jaunty common metre, with rhymes chiming inside the long lines (fled, dead; sent, rent; is, miss), sounds like a street song, and the jolly tune against the grim news is the jester's whole stance. His bells ring in a minor key, he grins anyway, and he ends on a line that is both a hope and a slogan.",
  "book": "hearts",
  "stanzas": [
   [
    "The King has fled, the Bishop’s dead",
    "The Chamberlain has lost",
    "The message sent has torn a rent",
    "As mothers count the cost"
   ],
   [
    "For so it is—you hit, you miss",
    "And lose your only child",
    "Though dead he be, don’t look to me",
    "The Jester can’t be riled"
   ],
   [
    "My clinging bells—the screams and yells",
    "Are all in minor key",
    "We lose, we win, I wear my grin",
    "The truth will set us free"
   ]
  ],
  "beat": "common"
 },
 {
  "id": "wizard",
  "level": "medium",
  "title": "The Wizard",
  "marks": [
   "-",
   "A",
   "-",
   "A",
   "-",
   "B",
   "-",
   "B",
   "-",
   "C",
   "-",
   "C",
   "-",
   "D",
   "-",
   "D",
   "-",
   "E",
   "-",
   "E"
  ],
  "markLabel": "rhyme",
  "form": "Ballad stanza with refrain",
  "scheme": "xAxA",
  "metre": "Common metre: iambic lines of four and three beats in turn",
  "sample": "there [IS] a [WIZ]-ard [IN] the [WOODS] / a [MAN] who [CON]-jures [FLAMES]",
  "how": "Four-line stanzas alternating four and three beats, where only the short lines rhyme. A refrain returns and shifts a little each time (At least that's what he claims, says, I've heard), and some rhymes are slant (dress, says).",
  "character": "Gossipy and conversational; the refrain undercuts each claim as soon as it is made.",
  "use": "The traditional ballad, from medieval folk songs to Coleridge's The Rime of the Ancient Mariner.",
  "poem": "Everything we learn about the wizard comes from rumour, and the refrain makes that the subject: at least that's what he claims, says, I've heard. Each stanza adds a claim and the refrain undercuts it, until the gossip turns on the townsfolk themselves: I think they're just afraid. The plain ballad metre is the voice of village talk. The wizard never speaks for himself, which is exactly how a town turns someone into an outsider.",
  "book": "hearts",
  "stanzas": [
   [
    "There is a wizard in the woods",
    "A man who conjures flames",
    "The ruler over life and death",
    "At least that’s what he claims"
   ],
   [
    "You must have seen him at some point",
    "His cloak looks like a dress",
    "He came to town before its walls",
    "At least that’s what he says"
   ],
   [
    "You know the weather varies here",
    "It changes at his word",
    "He drained the creek, he talks to crows",
    "At least that’s what I’ve heard"
   ],
   [
    "The people here don’t mention him",
    "They don’t go to his glade",
    "For good or ill he’s left alone",
    "I think they’re just afraid"
   ],
   [
    "But still it’s best you stay away",
    "Or find out to your loss",
    "What he can do—for he is strange",
    "Don’t ever make him cross"
   ]
  ],
  "beat": "common"
 },
 {
  "id": "pantoum",
  "level": "medium",
  "title": "Pantoum",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "B",
   "C",
   "B",
   "C",
   "C",
   "A",
   "C",
   "A"
  ],
  "markLabel": "rhyme",
  "form": "Pantoum",
  "scheme": "ABAB BCBC CACA",
  "metre": "Loose five-beat lines",
  "sample": "[E]-ven the [BEST] laid [PLANS] of [MICE] and [MEN]",
  "how": "Lines 2 and 4 of each stanza return as lines 1 and 3 of the next. In the last stanza the unused lines 1 and 3 of the first stanza come back, so the poem ends where it began.",
  "character": "Circling and obsessive, like a thought that will not let go.",
  "use": "It comes from the Malay pantun. Victor Hugo brought it into French in the nineteenth century, and from there it spread to English.",
  "poem": "A poem about being stuck, in a form that is stuck: every second line returns in the next stanza, and the last line is the first. Steinbeck's best laid plans of mice and men keep coming back, as do the lost foothold and the urge to stay in bed. Because each line returns in new company, its meaning shifts a little each time, the way a worry does every time you turn it over.",
  "book": "echoes",
  "stanzas": [
   [
    "To have Steinbeck’s words running through my head",
    "Even the best laid plans of mice and men",
    "Often go awry. Might just stay in bed.",
    "Another lost foothold, time and again"
   ],
   [
    "Even the best laid plans of mice and men",
    "Brief releases of tensions in the mind",
    "Another lost foothold, time and again",
    "Searching yet dreading what else I will find"
   ],
   [
    "Brief releases of tensions in the mind",
    "Often go awry. Might just stay in bed.",
    "Searching yet dreading what else I will find",
    "To have Steinbeck’s words running through my head"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "nobleman",
  "level": "medium",
  "title": "The Young Nobleman",
  "marks": [
   "A",
   "A",
   "B",
   "B",
   "C",
   "C",
   "D",
   "D",
   "E",
   "E",
   "F",
   "F"
  ],
  "markLabel": "rhyme",
  "form": "Heroic couplets",
  "scheme": "AABB CCDD EEFF",
  "metre": "Iambic pentameter in rhyming pairs",
  "sample": "and [WHEN] it [COMES], to [LEAVE] my [GAMES] be-[HIND]",
  "how": "Rhymed pairs of five-beat lines. Each couplet tends to close a thought, which gives the form a neat finality, perfect for a sting in the tail. Some rhymes are slant (mine, behind; return, burned).",
  "character": "Polished, confident and often satirical.",
  "use": "The great form of English satire and translation in the seventeenth and eighteenth centuries: John Dryden, Alexander Pope.",
  "poem": "The young nobleman repeats his father's lesson about caring for the land, then shows what he really learned. The heroic couplet, the polished form of satire, matches his manners: every pair is neat and closed, even when the content is ugly (they've had another brat). The slant rhymes (mine, behind; return, burned) are small cracks in the polish. The final couplet, a toast to plagues, is the sting in the tail the form was made for.",
  "book": "hearts",
  "stanzas": [
   [
    "Father said, one day this will all be mine",
    "And when it comes, to leave my games behind",
    "I have ’til then to learn to treat it well",
    "To make the most of every hill and dell",
    "Protect the folk who cultivate the land",
    "Living safe is the least they will demand"
   ],
   [
    "All I ask is a tithe in return",
    "They will default because some house has burned",
    "They’ll blame the storm, they’ve had another brat",
    "And they must never get away with that"
   ],
   [
    "I think I’ll manage. Then he drained his glass",
    "A toast to plagues, he said, they too shall pass"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "jestersong",
  "level": "hard",
  "title": "The Archbishop and the King",
  "partOf": null,
  "excerpt": "The Jester's song at the end of the poem",
  "marks": [
   "soft",
   "hard",
   "soft",
   "hard",
   "soft",
   "hard",
   "soft",
   "hard"
  ],
  "markLabel": "ending",
  "form": "Blank verse",
  "scheme": "No rhyme",
  "metre": "Iambic pentameter",
  "sample": "if [YOU] be [HO]-ly [OR] if [YOU] be [ROY]-al",
  "how": "Unrhymed lines of iambic pentameter. Without rhyme, the order depends on the sense and the beat. Here the lines alternate between soft endings on an unstressed syllable (royal, important, dearly, keeping) and hard endings on a stress (poor, way, is, will).",
  "character": "The closest metre to natural English speech: flexible, serious and dramatic.",
  "use": "The verse of Shakespeare's plays, Milton's Paradise Lost and Wordsworth's The Prelude.",
  "poem": "After the king and the archbishop have fought over power and money, the Jester sings to both of them at once. Blank verse is the form of Shakespeare's kings and clowns, close to speech, so the song sounds like a quiet aside rather than a performance. The alternation of soft and hard line endings gives it a rocking, almost lullaby movement, which makes the message sharper: holy or royal, rich or poor, control is an illusion you never really held.",
  "book": "hearts",
  "stanzas": [
   [
    "If you be holy or if you be royal",
    "If you were born by wealthy or by poor",
    "I do believe control is so important",
    "To you that nothing will stand in your way",
    "I see you grabbing on to it so dearly",
    "Ignoring the illusion that it is",
    "You did not ever have it in your keeping",
    "And once you see that, now you never will"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "baelwythe",
  "level": "hard",
  "title": "Bælwythe",
  "marks": [
   "-",
   "A",
   "-",
   "A",
   "-",
   "B",
   "-",
   "B",
   "-",
   "C",
   "-",
   "C",
   "-",
   "D",
   "-",
   "D",
   "-",
   "E",
   "-",
   "E"
  ],
  "markLabel": "rhyme",
  "form": "Pentameter quatrains with alternating endings",
  "scheme": "xAxA",
  "metre": "Iambic pentameter",
  "sample": "the [MOR]-ning [MISTS] rise [GENT]-ly [FROM] the [SUR]-face",
  "how": "Five-beat lines in quatrains. The odd lines are unrhymed and end on a soft extra syllable (surface, meadows, water); the even lines rhyme and end on a stress (downs, town). The swing between soft and hard endings gives a rocking motion.",
  "character": "Gentle and lyrical, flowing like the river it describes.",
  "use": "Pentameter quatrains are a staple of English lyric, from Thomas Gray's Elegy onward. Leaving the soft-ended lines unrhymed is this poem's own twist.",
  "poem": "A portrait of the town at the river's bend that opens the world of the collection. The long, soft-ended odd lines (surface, meadows, water) flow like the river, while the rhymed even lines (downs, town) set down the solid things. The stanzas move from the river into the market, the taverns and the cathedral, then out again to a question. The last line, how will you make the future promise yours, turns the postcard into a challenge.",
  "book": "hearts",
  "stanzas": [
   [
    "The morning mists rise gently from the surface",
    "Meandering, the river hugs the downs",
    "Its course is a caress of fields and meadows",
    "Before arriving at the edge of town"
   ],
   [
    "My Bælwythe, lovely Bælwythe on the water",
    "Your leaping stone securing North to South",
    "From weary huntsmen hiking past the hilltops",
    "To ships come sailing from the river’s mouth"
   ],
   [
    "They come to sell their lambswool at the market",
    "They come to buy the monastery’s cheese",
    "They come to trade, they come to beg for breadcrumbs",
    "While some will dine on boar and roasted geese"
   ],
   [
    "The singing in the summer from the taverns",
    "The clang of hammers from the blacksmith’s shop",
    "To climb the icy stairs of the cathedral",
    "And feel the winter winds there at the top"
   ],
   [
    "To walk along your streets of brick and mortar",
    "To wander past your homes of open doors",
    "Oh Bælwythe, while your stones may rest from conflict,",
    "How will you make the future promise yours?"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "totheyoung",
  "level": "hard",
  "title": "To the young",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "H",
   "G",
   "H",
   "I",
   "I",
   "I",
   "I"
  ],
  "markLabel": "rhyme",
  "form": "Triple-metre quatrains",
  "scheme": "ABAB CDCD EFEF GHGH IIII",
  "metre": "Four beats per line, in dactyls and anapests",
  "sample": "[YOUNG] were the [KINGS], the [MA]-kers and [DO]-ers",
  "how": "Each line has four beats, often with two light syllables between them, a galloping triple rhythm. The last stanza drops the alternating rhyme and uses one rhyme in all four lines (content, dissent, consent, bent), hammering home the call to action.",
  "character": "Galloping and rousing; triple metre pushes forward.",
  "use": "Popular in nineteenth-century ballads and recitation pieces, such as Lord Byron's The Destruction of Sennacherib.",
  "poem": "A manifesto to the young. The galloping triple rhythm charges forward, and the argument charges with it, from a simpler past of hunters and brewers, through the rule of the old and wealthy, to a call for the agile and brave. Quick images (hoodies and Red Bull trump suits and Chablis) keep the tone half serious, half mocking. The last stanza drops the alternating rhyme for one rhyme in all four lines, so the call to action reads like four slogans shouted in a row.",
  "book": "echoes",
  "stanzas": [
   [
    "Young were the kings, the makers and doers",
    "Vigour was treasured in a simpler time",
    "Of hunters and millers and bakers and brewers",
    "Before the shift to this sordid paradigm"
   ],
   [
    "Ruling today are old friends of the wealthy",
    "Power is treasured, crimes are forgiven,",
    "The truth is a lie, while blindness is healthy",
    "State what you have; it shall be thee given"
   ],
   [
    "The wheels are in motion. It is time to be",
    "Agile and brave, no one’s powerful friend",
    "When hoodies and Red Bull trump suits and Chablis",
    "Beware, sitting ducks, it’s the eve of the end"
   ],
   [
    "Awake, restless souls, there are new open doors",
    "To scented spaces, blessed with myrrh and gold",
    "If you dare enter, the world will be yours",
    "Haste to adopt it; before it is sold"
   ],
   [
    "Reject the authority of the content",
    "Refuse any order that stifles dissent",
    "Retire the silence that dictates consent",
    "So reshape the world that your fathers have bent"
   ]
  ],
  "beat": "tetra"
 },
 {
  "id": "holes",
  "level": "hard",
  "title": "Someone’s digging holes in my city",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet in anapestic trimeter",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Anapestic trimeter: three beats, light syllables between",
  "sample": "my [HOME]-town is [POCK]-marked with [SITES]",
  "how": "Fourteen lines in three quatrains and a couplet, like a Shakespearean sonnet, but with short three-beat lines in a lilting rhythm (da da DUM). Odd lines end on a soft syllable (city, pretty), even lines on a stress (sites, lights).",
  "character": "A sing-song tune carrying a complaint; the bounce makes the grumbling funny and sad at once.",
  "use": "Anapestic trimeter is the metre of the long lines of a limerick and of much comic verse. Using it for a sonnet is unusual.",
  "poem": "A sonnet about a hometown dug up by building works, in a bouncy anapestic rhythm better suited to a limerick. The clash is the point: the tune is cheerful, the speaker is not, and the grumble becomes funny and sad at once. The sonnet still argues like a sonnet, from the holes to the promises of growth to the dejected faces and the cranes puking concrete, and the couplet answers its own question with a rhyme: there are holes all over my town.",
  "book": "echoes",
  "stanzas": [
   [
    "Someone’s digging holes in my city",
    "My hometown is pockmarked with sites",
    "To me this place used to look pretty",
    "Now there’s rubble where there were lights"
   ],
   [
    "They claim that the closures are needed",
    "For now, for our city to grow",
    "And then we have somehow succeeded?",
    "Just how I am sure I don’t know"
   ],
   [
    "The people you meet look dejected",
    "I miss when I heard my friends laugh",
    "Before all the cranes were erected",
    "Puking concrete on our behalf"
   ],
   [
    "You ask what is bringing me down?",
    "There are holes all over my town"
   ]
  ],
  "beat": "tri"
 },
 {
  "id": "safe",
  "level": "hard",
  "title": "Keeping you safe",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "B",
   "B"
  ],
  "markLabel": "rhyme",
  "form": "Sonnet in six-beat lines",
  "scheme": "ABAB CDCD EFEF BB",
  "metre": "Six beats per line with a pause in the middle, close to the alexandrine",
  "sample": "[EAR]-ly [NIGHT] in [STOCK]-holm, [NINE]-teen [SIX]-ty-[NINE]",
  "how": "The sonnet shape of three quatrains and a couplet, stretched to six beats per line, most lines breaking in the middle. The couplet returns to the rhyme of the second line and repeats its refrain, closing a circle.",
  "character": "Long-breathed and dreamlike, a child's memory moving in slow pulses.",
  "use": "The alexandrine is the classic line of French verse (Racine, Corneille). In English it is best known as the long last line of the Spenserian stanza.",
  "poem": "A child's memory of Stockholm in 1969, heard from inside: a pulse in the ears, adult voices out of reach, a door slamming, a sudden urge to find the yellow socks. The long six-beat lines with a pause in the middle move slowly, like a child lying awake and listening. The refrain about the kid being just fine opens and closes the poem, and the couplet returns to the second line's rhyme to close the circle. By the end the reassurance sounds less like comfort and more like an instruction: stash your stuff well inside the box.",
  "book": "echoes",
  "stanzas": [
   [
    "Throbbing in my ears reassures me I’m alive",
    "Early night in Stockholm, nineteen sixtynine",
    "Chanel in tiny vials, always number five",
    "Just get out of here, the kid will be just fine"
   ],
   [
    "Voices out of reach, wond’ring who they are",
    "Really hard to tell, they’re old and sound the same",
    "I feel my pulse beat out a syncopated bar",
    "A secret noone knows; that rhythm sings my name"
   ],
   [
    "A door somewhere slams shut, the echo fades away",
    "I get this sudden urge to find my yellow socks",
    "Too scary in the dark, I’d better try by day",
    "Make sure to stash your stuff well inside the box"
   ],
   [
    "This will keep you safe. That will help you shine.",
    "Just get out of here, this kid will be just fine"
   ]
  ],
  "beat": "hexa"
 },
 {
  "id": "nextstop",
  "level": "hard",
  "title": "Next stop:",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Iambic pentameter",
  "sample": "her [TONE] is [SOFT], not [EAS]-y [TO] ig-[NORE]",
  "how": "Three quatrains with alternating rhyme and a closing couplet. The quatrains build a thought; the couplet turns it around. Here the turn, the volta, comes with But life resists.",
  "character": "Balanced and argumentative, ideal for a setup and a twist.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "Twelve lines of gratitude to the automated voice on the bus: she announces the next stop, keeps you on time and helps you choose. The smooth iambic pentameter is as calm and regular as the announcement itself. Then the couplet, the classic turn of the Shakespearean sonnet, takes the map away: life resists, it won't be thus defined, and there is no map of bus stops in my mind. The regular form that was comfort becomes the very thing life refuses.",
  "book": "echoes",
  "stanzas": [
   [
    "Her tone is soft, not easy to ignore",
    "The many calls which stop is next in line",
    "When I should start to head towards the door",
    "If we are running late or right on time"
   ],
   [
    "It’s good to hear her automated voice",
    "I’m comforted by all the stops and maps",
    "Always there to help me make my choice",
    "To journey on, or to get off perhaps"
   ],
   [
    "I’ll get to my desired location",
    "Free from worry, completely safe and sound",
    "Thanks to her, I’ll reach my destination",
    "I only have to know where I am bound"
   ],
   [
    "But life resists, it won’t be thus defined",
    "There is no map of bus stops in my mind"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "reckoning",
  "level": "hard",
  "title": "Reckoning",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet in dialogue",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Loose iambic pentameter",
  "sample": "[HOW] is your cre-[A]-tion [COM]-ing a-[LONG]",
  "how": "The shape of the Shakespearean sonnet, with a looser metre and two speakers. The couplet ends on beholder, the word that closes all four sonnets in the sequence The Edge of Perception.",
  "character": "Conversational and playful; a strict frame holding a casual chat between gods.",
  "use": "Sonnet sequences that share a theme or a line go back to Petrarch and Philip Sidney. Sonnets in dialogue are rarer, and often comic.",
  "poem": "Two gods talk shop over tea, and the invention of dawn becomes a shrug. This is the fourth sonnet of The Edge of Perception, about letting a creation go, and it treats the biggest subject, the making of light, as the smallest, most casual conversation. The loose metre lets the voices interrupt each other. The couplet brings in let there be light and then turns it, like the other three sonnets, toward the eye of the beholder: once made, a thing belongs to whoever sees it.",
  "book": "echoes",
  "stanzas": [
   [
    "How is your creation coming along?",
    "Asked the older god while stirring his tea",
    "Well, I’m not sure I’m not doing it wrong",
    "Said the younger god; My humans can’t see"
   ],
   [
    "He shrugged. Lots of humans yet to be born.",
    "She frowned. I’d like to chase the dark away",
    "I’ve come up with a concept I call dawn",
    "Time would be either night or, maybe, day?"
   ],
   [
    "That’s great, he said. No linear time, just round",
    "Yes, she said, but what if they don’t like it",
    "Another shrug. Don’t you know what you’ve found?",
    "Your call, but it’s cool, you can’t deny it"
   ],
   [
    "So let there be light, that’s what he told her",
    "Straight in the eye of any beholder"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "town",
  "level": "hard",
  "title": "The Town",
  "excerpt": "Act I, the first of three acts",
  "marks": [
   "A",
   "B",
   "B",
   "A",
   "A",
   "B",
   "B",
   "A",
   "C",
   "D",
   "E",
   "C",
   "D",
   "E"
  ],
  "markLabel": "rhyme",
  "form": "Petrarchan sonnet",
  "scheme": "ABBAABBA CDECDE",
  "metre": "Iambic pentameter",
  "sample": "through [CHALK]-y [FIELDS] the [RIV]-er [FINDS] the [SEA]",
  "how": "An octave of eight lines on just two rhymes, folded inward (ABBA ABBA), then a sestet on three new rhymes (CDE CDE). The shift between them, the volta, falls at line 9, where rules, rulers and the hangman's hill arrive.",
  "character": "Architectural and demanding: the octave sets the scene, the sestet complicates it.",
  "use": "Perfected by Petrarch in fourteenth-century Italy and brought into English by Thomas Wyatt. Milton and Wordsworth made it their own.",
  "poem": "The founding of Bælwythe in fourteen lines. The octave builds the town, a man with an axe, builders, fishermen tying up at the quay, all on two rhymes folded inward like walls closing around a settlement. The turn at line nine brings what follows every settlement: rules, rulers, the hangman's hill, a small church that dominates the square. The sestet's new rhymes carry the new order and end on a quietly devastating detail: the rich prefer their houses to have stairs.",
  "book": "hearts",
  "stanzas": [
   [
    "Through chalky fields the river finds the sea",
    "A man in weathered hat decides to stay",
    "Picks up his axe and eyes the woods and bay",
    "This river’s bend shall be a home to me"
   ],
   [
    "For fuel and fish, and game that’s roaming free",
    "The builders come from near and far away",
    "Some honest men, some sinners as they may",
    "The fishermen tie vessels to the quay"
   ],
   [
    "Then rules and rulers, then the hang-man’s hill",
    "Lurking at the edge of the village green",
    "The church is small yet dominates the square",
    "The hearths and homes put down at owner’s will",
    "The refuse reek where flowers once had been",
    "The rich prefer their houses to have stairs"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "transitions",
  "level": "easy",
  "title": "Transitions",
  "marks": [
   "-",
   "-",
   "-"
  ],
  "markLabel": "none",
  "form": "Free-verse tercet",
  "scheme": "No rhyme",
  "metre": "No fixed metre; the lines shrink",
  "sample": "the [LAST] [RAYS] of the [DAY] [BRIEF]-ly [VIS]-it a [GLADE]",
  "how": "Three unrhymed lines that work like a tiny film: a scene, a sudden change, an ending. Each line is shorter than the one before, so the poem itself fades out.",
  "character": "Still and visual, close in spirit to the Japanese haiku without its syllable count.",
  "use": "Short free-verse poems built on one image grew out of the Imagist movement of the 1910s (Ezra Pound, H.D.), which learned from Japanese haiku.",
  "poem": "Three lines, three moments: the last rays visit a glade, the trees turn loudly to gold, and then silence. The lines get shorter as the light fades, so the form performs the sunset. Calling colour loud (trees turn loudly to gold, grass to roaring fires) is the poem's surprise, and it is what makes the final silence audible.",
  "book": "echoes",
  "stanzas": [
   [
    "The last rays of the day briefly visit a glade;",
    "Trees turn loudly to gold, grass to roaring fires -",
    "A moment later, silence"
   ]
  ],
  "beat": "free"
 },
 {
  "id": "notitle",
  "level": "easy",
  "title": "No title",
  "marks": [
   "-",
   "-",
   "-"
  ],
  "markLabel": "none",
  "form": "Free-verse tercet",
  "scheme": "No rhyme",
  "metre": "No fixed metre",
  "sample": "the [FOR]-est goes [SI]-lent at [DUSK]",
  "how": "Three unrhymed lines that work like a tiny film: a scene, a sudden change, an ending. The order is carried by the image, not by sound.",
  "character": "Still and visual, close in spirit to the Japanese haiku without its syllable count.",
  "use": "Short free-verse poems built on one image grew out of the Imagist movement of the 1910s (Ezra Pound, H.D.), which learned from Japanese haiku.",
  "poem": "Dusk in a forest, a parallel world in still water, and a watcher who watches himself. The three lines move from the world to its reflection and then inward to the self, so the poem becomes a mirror too. With no rhyme to guide you, the order lies in that movement, and in the light that is running out.",
  "book": "echoes",
  "stanzas": [
   [
    "The forest goes silent at dusk;",
    "A parallel world under still water -",
    "I watch myself while the light lasts"
   ]
  ],
  "beat": "free"
 },
 {
  "id": "townact2",
  "level": "easy",
  "title": "The Town",
  "excerpt": "Act II, the second of three acts",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "B"
  ],
  "markLabel": "rhyme",
  "form": "Short-line cinquain",
  "scheme": "ABABB",
  "metre": "Short lines of two and three beats",
  "sample": "so [MA]-ny [POOR] / [BUILD]-ings [REACH]-ing [HIGH]-er",
  "how": "Five short lines on two rhymes. The extra fifth line repeats the B rhyme, so the stanza seems to end once and then keeps going, like a disaster that won't stop.",
  "character": "Terse and ominous, a chronicle in headlines.",
  "use": "Five-line stanzas (cinquains) come in many forms, from medieval song to the limerick, which also rhymes on two sounds.",
  "poem": "The middle act of The Town sits between two sonnets about building and rebuilding, and it is the shortest: in five lines the town grows poor, builds higher, bars its doors and burns. The short lines and the extra fifth line on the same rhyme make it feel like a chronicle written in headlines. The songs of ruin from the choir close it like a funeral.",
  "book": "hearts",
  "stanzas": [
   [
    "So many poor",
    "Buildings reaching higher",
    "Make sure you bar your doors",
    "Then famine and the fire",
    "Songs of ruin from the choir"
   ]
  ],
  "beat": "short"
 },
 {
  "id": "thisisyours",
  "level": "easy",
  "title": "This is yours",
  "marks": [
   "A",
   "A",
   "B",
   "B",
   "C",
   "C"
  ],
  "markLabel": "rhyme",
  "form": "Anapestic couplets",
  "scheme": "AABBCC",
  "metre": "Four beats per line in a rolling triple rhythm",
  "sample": "i [SEE] it, she [SAID] with a [SHRUG] and a [SMILE]",
  "how": "Rhymed pairs of four-beat lines with two light syllables between most beats. Some rhymes are slant (smile, eye; dreams, feels), and the last couplet runs one sentence across the line break.",
  "character": "Conversational and light on its feet.",
  "use": "Anapestic tetrameter is the metre of Clement Clarke Moore's A Visit from St. Nicholas and of many comic and children's poems.",
  "poem": "A conversation in three couplets. Someone sees a future the others cannot see, and asked to explain it, she can only say how it feels. The rolling anapestic rhythm keeps the dialogue light, and the inexact rhymes of the first two couplets (smile, eye; dreams, feels) are as blurred as the vision itself. The last couplet rhymes fully and runs one sentence across the line break: the future is a wish, not a fate, and it is yours to create.",
  "book": "echoes",
  "stanzas": [
   [
    "I see it, she said with a shrug and a smile",
    "Well we don’t, frowned I, we could use your eye",
    "Feel free to explain what you see in your dreams",
    "I cannot, she sighed, but here’s how it feels",
    "That future is faint. It’s a wish, not a fate",
    "that you must accept. It’s yours to create."
   ]
  ],
  "beat": "tetra"
 },
 {
  "id": "teacher",
  "level": "easy",
  "title": "The Teacher",
  "marks": [
   "A",
   "A",
   "B",
   "B",
   "C",
   "C",
   "D",
   "D",
   "E",
   "E",
   "F",
   "F"
  ],
  "markLabel": "rhyme",
  "form": "Heroic couplets",
  "scheme": "AABB CCDD EEFF",
  "metre": "Loose iambic pentameter in rhyming pairs",
  "sample": "the [GUARD]-ian's [TORCH], for a [WHILE], is [MINE]",
  "how": "Rhymed pairs of five-beat lines. Each couplet tends to close a thought, which gives the form a neat finality. Here every couplet turns to a different listener around the fire.",
  "character": "Polished, confident and often satirical, but here warm and direct.",
  "use": "The great form of English satire and translation in the seventeenth and eighteenth centuries: John Dryden, Alexander Pope.",
  "poem": "The teacher gathers the pupils round the fire and speaks to each in turn: the sweet one feeling the heat, the young man who is not fond of the teacher, the friend with fire in his eyes. Each couplet is a small, closed lesson. The fire becomes a torch of truth handed from one guardian to the next, and the last couplet is the handing over itself: if you so yearn, I'll pass it on to you.",
  "book": "hearts",
  "stanzas": [
   [
    "Gather ’round, come closer to the fire",
    "See the sparks rise effortlessly higher",
    "The way, sweet one, you feel the heat has grown",
    "One day, I’m sure, will help you make your own",
    "It’s fine, young man, if you’re not fond of me",
    "My mission is to teach you to be free"
   ],
   [
    "And you my friend, with fire in your eyes",
    "Who so reject the darkness and the lies",
    "Those embers have glowed since the dawn of time",
    "The guardian’s torch—for a while—is mine",
    "Ever it burns to shine on what is true",
    "If you so yearn I’ll pass it on to you"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "illusion",
  "level": "easy",
  "title": "The Jester’s Illusion",
  "marks": [
   "-",
   "A",
   "-",
   "A",
   "-",
   "B",
   "-",
   "B",
   "-",
   "C",
   "-",
   "C"
  ],
  "markLabel": "rhyme",
  "form": "Common metre",
  "scheme": "xAxA",
  "metre": "Iambic lines of four and three beats in turn",
  "sample": "some [TIME] a-[GO], and [FAR] a-[WAY]",
  "how": "Four-line stanzas alternating four and three beats, with only the short lines rhyming. The pattern is so familiar that the ear expects each rhyme before it arrives.",
  "character": "Plain, sing-able and storytelling.",
  "use": "The metre of hymns such as Amazing Grace, of folk ballads and of most of Emily Dickinson's poems.",
  "poem": "The last poem of Hearts Around the Fire: a crown lost long ago, and a jester who told the king so. The plain common metre sounds like a story told by the fire, and the rhymes on the short lines (lost, frost; stand, sand; rule, fool) carry the moral. The final stanza turns the joke inward: it is hard to tell whether the king or the jester deserves to play the fool.",
  "book": "hearts",
  "stanzas": [
   [
    "Some time ago, and far away",
    "A golden crown was lost",
    "A patient rise, yet quick to fall",
    "The rhythm of the frost"
   ],
   [
    "I told him so, the Jester said,",
    "His reign would never stand",
    "I said they’d had enough of kings",
    "And castles in the sand"
   ],
   [
    "I always thought, he said and sighed,",
    "You earn the right to rule",
    "It’s hard to tell if he or I",
    "Deserves to play the fool"
   ]
  ],
  "beat": "common"
 },
 {
  "id": "fathering",
  "level": "medium",
  "title": "Fathering",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F"
  ],
  "markLabel": "rhyme",
  "form": "Common metre",
  "scheme": "ABAB CDCD EFEF",
  "metre": "Iambic lines of four and three beats in turn",
  "sample": "i [KNOW] that [LOOK] of [HERS], my [BAD]",
  "how": "Four-line stanzas alternating four and three beats. Here all four lines rhyme crosswise, which tightens the ballad stanza into something closer to a hymn.",
  "character": "Wry and tender; the jog of the metre keeps the frustration light.",
  "use": "The metre of hymns, folk ballads and Emily Dickinson.",
  "poem": "Two stanzas of a father's exasperation with his daughter's look: whatever he does is wrong, speak up and be snubbed, keep quiet and be frustrated. The jogging hymn metre keeps it wry rather than bitter. The third stanza turns the whole poem around: the father who felt lost at sea beside her finds she was always there for him. The turn comes at the stanza break, where the ballad stanza gives you room to breathe.",
  "book": "echoes",
  "stanzas": [
   [
    "I know that look of hers, my bad",
    "It’s all on me, again",
    "Just hang in there, when you’re the dad",
    "You mustn’t show the strain"
   ],
   [
    "Displeasured eyes are déja vu",
    "Best shut up, but you won’t",
    "Deeply frustrated if you do",
    "Quickly snubbed if you don’t"
   ],
   [
    "It’s funny you felt lost at sea",
    "Beside her as she grew",
    "You took it on yourself but she",
    "Was always there for you"
   ]
  ],
  "beat": "common"
 },
 {
  "id": "ohana",
  "level": "medium",
  "title": "Ohana",
  "marks": [
   "A",
   "A",
   "B",
   "B",
   "C",
   "C",
   "D",
   "D",
   "E",
   "E"
  ],
  "markLabel": "rhyme",
  "form": "Couplets in long lines",
  "scheme": "AABB CC DDEE",
  "metre": "Six beats per line, close to the alexandrine",
  "sample": "[STRAN]-gers in the [CROWD], yet [SIB]-lings [BY] de-[FAULT]",
  "how": "Rhymed pairs of long six-beat lines, most with a pause in the middle. The long line gives room for a thought and its answer, and the couplet rhyme ties them together. Some rhymes are slant (default, bought).",
  "character": "Earnest and steady, like a promise spoken slowly.",
  "use": "Rhyming alexandrine couplets are the classic form of French drama (Racine, Molière). In English, Michael Drayton wrote a whole topographical epic, Poly-Olbion, in them.",
  "poem": "Ohana is the Hawaiian word for family, including the family you choose. The poem speaks to a sibling in spirit: strangers in the crowd, yet siblings by default. The long, steady lines in rhymed pairs give it the sound of a promise. A two-line stanza of dark water and a lonely night road sits in the middle like a low point, and the last stanza climbs out of it: one stroke, one step, one perfect moment at a time.",
  "book": "echoes",
  "stanzas": [
   [
    "Strangers in the crowd, yet siblings by default",
    "Silent understanding, sweet but dearly bought",
    "Your power and your drive just as strong as mine",
    "I share your doubts and fear of failure by design"
   ],
   [
    "The waters are so dark, out of breath by fright",
    "A lonely stretch of road in the dying night"
   ],
   [
    "But listen, we’re alive! There still might be a chance",
    "Just keep moving forward, that’s how we advance",
    "Remember your tattoo; no mountain we can’t climb",
    "One stroke, one step, one perfect moment at a time"
   ]
  ],
  "beat": "hexa"
 },
 {
  "id": "dyer",
  "level": "medium",
  "title": "The Dyer",
  "marks": [
   "A",
   "A",
   "B",
   "B",
   "C",
   "C",
   "D",
   "D",
   "E",
   "E",
   "F",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Octosyllabic couplets",
  "scheme": "AABBCC DDEE FFGG",
  "metre": "Iambic tetrameter in rhyming pairs",
  "sample": "i [STRAIGHT]-en [OUT] a [TI]-ny [CREASE]",
  "how": "Lines of eight syllables and four beats, rhymed in pairs. The short couplets move quickly from one small action to the next.",
  "character": "Brisk and precise, like a craftsman's hands.",
  "use": "Chaucer's early dream poems, Samuel Butler's Hudibras and Andrew Marvell's To His Coy Mistress all use it.",
  "poem": "The dyer works by touch: the palm reads the fleece, the cloth says what it needs, colours sing in the head. The brisk octosyllabic couplets match the small, precise movements of a craftsman's hands. The three stanzas move from touch to image to transformation, and the last couplet makes the turn: through all the stories the cloths will tell, the dyer is transformed as well.",
  "book": "hearts",
  "stanzas": [
   [
    "I straighten out a tiny crease,",
    "Feeling the fabric of the fleece",
    "The touch of the palm of my hand",
    "Takes stock of every single strand",
    "The way it speaks and how it reads,",
    "The cloth will tell me what it needs"
   ],
   [
    "An image forms inside my mind",
    "Of soul and colour intertwined",
    "Both earthy brown or crimson red",
    "Sing clear to me inside my head"
   ],
   [
    "With each new fabric that is dyed",
    "Each cloth transformed with worker’s pride",
    "By all the stories they will tell",
    "The dyer is transformed as well"
   ]
  ],
  "beat": "tetra"
 },
 {
  "id": "prologue",
  "level": "medium",
  "title": "Prologue – The Jester speaks",
  "partOf": "The North Wind by the Tail",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "A",
   "B",
   "C",
   "C"
  ],
  "markLabel": "rhyme",
  "form": "Ottava rima",
  "scheme": "ABABABCC",
  "metre": "Iambic pentameter",
  "sample": "it [TAKES] a [FOOL] to [TELL] a [TALE] like [OURS]",
  "how": "Eight lines of iambic pentameter: two rhymes alternate through six lines, then a couplet delivers the punchline. The rhymes are slanted on purpose (ours, towers, power; disregard, façade, bard), as the jester himself announces.",
  "character": "In English it became the form of wit: build up for six lines, deflate in two.",
  "use": "It comes from Italy (Boccaccio, Ariosto, Tasso). In English, Lord Byron's Don Juan made it the form of satire.",
  "poem": "The Jester opens the tale of Guilda and the North Wind and promises a story told in slanted rhyme, and the stanza keeps the promise: ours, towers, power and disregard, façade, bard only nearly rhyme. Ottava rima, the form of comic wit, suits a fool about to mock a proud town and its walls. The couplet states the theme of the whole tale: how truth is shaped, a story old as time.",
  "book": "hearts",
  "stanzas": [
   [
    "It takes a fool to tell a tale like ours",
    "To whisper truths we must not disregard",
    "A town there was, complete with walls and towers",
    "So strong and proud yet only a façade",
    "Come learn to see the limit of their power",
    "Pray silence for the fool, the roguish bard",
    "A tale of wit and jest in slanted rhyme",
    "How truth is shaped, a story old as time"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "bardjester",
  "level": "medium",
  "title": "The Bard and the Jester",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "B",
   "C",
   "C",
   "D",
   "E",
   "D",
   "E",
   "E",
   "F",
   "F"
  ],
  "markLabel": "rhyme",
  "form": "Rhyme royal",
  "scheme": "ABABBCC DEDEEFF",
  "metre": "Iambic pentameter",
  "sample": "i [SEE] the [QUI]-et [DIG]-ni-[TY] of [MAN]",
  "how": "Seven-line stanzas of five-beat lines. The fourth and fifth lines share a rhyme, linking the opening to the final couplet, and the couplet sums up.",
  "character": "Stately and reflective, with room to argue and then conclude.",
  "use": "Brought into English by Geoffrey Chaucer in Troilus and Criseyde, and named after King James I of Scotland. Shakespeare used it for The Rape of Lucrece.",
  "poem": "Two stanzas, two views of humanity. The bard sings of quiet dignity: we try and fail and fall, but the soul rises because it is free. The jester answers, with a frown, that men only swim because they do not wish to drown. Rhyme royal gives each speaker a full stanza, and the final couplet, which the form reserves for the conclusion, goes back to the bard: they swim because they are part of humankind.",
  "book": "hearts",
  "stanzas": [
   [
    "I see the quiet dignity of man",
    "How each of us will try and fail and fall",
    "Yet every one of us since we began",
    "In secret wields the will to heed the call",
    "To live and love whatever might befall",
    "Though often beaten down upon one knee",
    "The human soul will rise, for it is free"
   ],
   [
    "The Bard thus sang of beauty with a smile",
    "While Jester speaks the truth but with a frown",
    "I see you think their spirit is worthwhile",
    "It’s true that men get up when they fall down",
    "They swim because they do not wish to drown",
    "Oh Jester, said the Bard, you must be blind",
    "They swim for they are part of humankind"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "spring",
  "level": "medium",
  "title": "Spring",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "H",
   "G",
   "H"
  ],
  "markLabel": "rhyme",
  "form": "Hymn quatrains",
  "scheme": "ABAB CDCD EFEF GHGH",
  "metre": "Iambic lines of four and three beats, with soft endings in the long lines",
  "sample": "as [DARK]-ness [SPEAKS] of [DAWN] be-[HIND] us",
  "how": "Cross-rhymed quatrains that mostly alternate four and three beats, like a hymn. Several long lines end on a soft extra syllable (dying, sighing; behind us, remind us), and some rhymes are slant (spring, begin; smile, alive).",
  "character": "Hopeful and song-like, with a catch of grief in the last stanza.",
  "use": "Hymn quatrains are the backbone of English church song, from Isaac Watts and Charles Wesley onward.",
  "poem": "Winter is dying, the birds will return, life begins anew. The hymn-like quatrains carry the hope, and the soft double endings in the long lines (dying, sighing; behind us, remind us) give them a sighing, song-like fall. The last stanza turns from the season to the people: we long for those we've lost, and smile that friends like us still love and breathe. The slant rhyme of its last words, smile and alive, is the poem's catch in the throat.",
  "book": "echoes",
  "stanzas": [
   [
    "I realised winter is dying",
    "Just now, with the first hint of spring",
    "Come temperate winds, gently sighing!",
    "Come new life, about to begin"
   ],
   [
    "As darkness speaks of dawn behind us",
    "The skeins of birds that flew",
    "Will soon return and thus remind us",
    "That life begins anew"
   ],
   [
    "As signs of hope and joy set free",
    "A million birds will sing",
    "From winter’s muted hills and trees",
    "Like every year in spring"
   ],
   [
    "We long for those we’ve lost and grieve",
    "I think of us and smile",
    "That friends like us still love and breathe",
    "So very much alive"
   ]
  ],
  "beat": "common"
 },
 {
  "id": "thief",
  "level": "medium",
  "title": "The Thief",
  "marks": [
   "-",
   "A",
   "-",
   "A",
   "-",
   "A",
   "-",
   "A",
   "-",
   "B",
   "-",
   "B",
   "-",
   "A",
   "-",
   "A",
   "-",
   "B",
   "-",
   "B"
  ],
  "markLabel": "rhyme",
  "form": "Ballad stanza with refrain",
  "scheme": "xAxA",
  "metre": "Common metre: iambic lines of four and three beats in turn",
  "sample": "the [BOOTS] step [SOFT]-ly [ON] the [STONE]",
  "how": "Four-line stanzas alternating four and three beats, where only the short lines rhyme. The poem uses just two rhymes throughout, and the refrains (as they have done before; as you have ever been) return like footsteps.",
  "character": "Hushed and menacing, a voice in the dark.",
  "use": "The traditional ballad, from medieval folk songs to Coleridge's The Rime of the Ancient Mariner.",
  "poem": "The thief speaks as he creeps into a rich man's house, and turns the accusation around: you sleep on riches from the poor, so if thief I am, then thug are you. The ballad metre and its two refrains (as they have done before; as you have ever been) return like footsteps in the dark. By the end the refrain has become a verdict on both of them: we are as we are seen.",
  "book": "hearts",
  "stanzas": [
   [
    "The boots step softly on the stone",
    "In silence to the door",
    "They fall like snowflakes silently",
    "As they have done before"
   ],
   [
    "A thief deserves a thief they say",
    "I’ll even out the score",
    "Enjoy the rich man’s righteous rest",
    "Like you have done before"
   ],
   [
    "You sleep on riches from the poor",
    "A sordid little scene",
    "If thief I am then thug are you",
    "As you have ever been"
   ],
   [
    "A shadow in the dark I creep",
    "Faceless ’cross your floor",
    "The smell of fear is foul in here",
    "As it has been before"
   ],
   [
    "Never doubt what they will do",
    "We are as we are seen",
    "Vile are you while thief am I",
    "As we have ever been"
   ]
  ],
  "beat": "common"
 },
 {
  "id": "discovery",
  "level": "hard",
  "title": "Discovery",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Loose pentameter",
  "sample": "the [RUGS] are [SHIPS] in a [SEA] of [FIRE]",
  "how": "Three quatrains with alternating rhyme and a closing couplet. Here the metre is loose and the voices of a father and a child interrupt each other. The couplet ends on beholder, the word that closes all four sonnets in the sequence The Edge of Perception.",
  "character": "Balanced and argumentative, ideal for a setup and a twist; here playful.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "The first sonnet of The Edge of Perception, about noticing. A child turns rugs into ships on a sea of fire, and the father, trying to join in, gets the rules and the facts tangled. The loose metre lets the voices of father and child tumble over each other. The third quatrain gives the child the wisdom (trying too hard prevents me from seeing), and the couplet introduces the line that closes all four sonnets: it lies in the eyes of the beholder.",
  "book": "echoes",
  "stanzas": [
   [
    "The rugs are ships in a sea of fire",
    "Those are the rules, and without exception",
    "Dad, were there really pirates for hire?",
    "Must have earned them a YEAR of detention"
   ],
   [
    "Every little piece leads him somewhere new",
    "Rugs are ships to shore on a burning floor",
    "Facts are only facts if you think they’re true",
    "You said pirates were rugged once before"
   ],
   [
    "Listen dad, just chill, he said later on",
    "Trying too hard prevents me from seeing",
    "My self-conscious mind is not so much gone",
    "As keenly alive by simply just being"
   ],
   [
    "Our floors may burn, our socks may smoulder",
    "That’s still in the eyes of the beholder"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "vertigo",
  "level": "hard",
  "title": "Vertigo",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Loose pentameter",
  "sample": "there [IS] a [HOUSE] in a [FOR]-est [SOME]-where",
  "how": "Three quatrains with alternating rhyme and a closing couplet. The second quatrain ends its rhymes on a soft syllable (chosen, frozen), and the couplet ends on beholder, as in all four sonnets of The Edge of Perception.",
  "character": "Balanced and argumentative, ideal for a setup and a twist; here full of wonder.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "The second sonnet of The Edge of Perception, about imagining. A man carries a house into a forest on his back and builds an infinity room to look down on the pines. The poem borrows an old saying, that architecture is frozen music, and asks for whom the music plays. The quatrains move from the labour to the impossible proportions to the view from above, and the couplet asks once more whether the vision is real or in the eye of the beholder.",
  "book": "echoes",
  "stanzas": [
   [
    "There is a house in a forest somewhere",
    "A man had to bring it there on his back",
    "The building became his food, drink and air",
    "With ev’ry brick, ev’ry stick, ev’ry sack"
   ],
   [
    "Touching the sky, his infinity room",
    "Impossible proportions so chosen",
    "To perfectly fit. I wonder to whom",
    "Does it cater, this music so frozen"
   ],
   [
    "To see pines from above; tall trees and proud,",
    "Stretching towards you, frustrated, in vain,",
    "Is that why he built this personal cloud,",
    "For new perspectives, again and again?"
   ],
   [
    "Precarious views from heaven’s shoulder",
    "And yet, in the eyes of the beholder"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "chisel",
  "level": "hard",
  "title": "Chisel",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Loose pentameter",
  "sample": "the [CAN]-vas is [BLANK], the [MU]-sic un-[PLAYED]",
  "how": "Three quatrains with alternating rhyme and a closing couplet. Many of the rhymes are slant (unplayed, shape; loss, was; surprise, life), so the ear has to work harder. The couplet ends on beholder, as in all four sonnets of The Edge of Perception.",
  "character": "Balanced and argumentative; here restless, like work in progress.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "The third sonnet of The Edge of Perception, about making. A piece fails, then an idea flies past at the edge of perception and the artist hangs on for dear life. The many slant rhymes (unplayed, shape; loss, was; surprise, life) make the sonnet feel unfinished, like work in progress. She never has a say in the matter, and enjoys doing what she's told: the poem pictures creation as obedience to the idea.",
  "book": "echoes",
  "stanzas": [
   [
    "The canvas is blank, the music unplayed",
    "All that hard work to end up in a loss",
    "This particular piece never took shape",
    "However brilliant she thought it was"
   ],
   [
    "Suddenly, at the edge of perception",
    "Something flies, she is taken by surprise",
    "A different idea, craving for attention",
    "So it begins, she hangs on for dear life"
   ],
   [
    "It might turn out elegant, or bold",
    "She never has a say in the matter",
    "No matter. She enjoys doing what she’s told",
    "Searching for meaning, mad as a hatter"
   ],
   [
    "Whether her search gets warmer or colder",
    "Is left in the eyes of the beholder"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "years",
  "level": "hard",
  "title": "Years and years",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Loose pentameter",
  "sample": "the [BIRDS] are [STILL] at the [END] of the [DAY]",
  "how": "Three quatrains with alternating rhyme and a closing couplet. The quatrains move from evening to memory to an eternal June, and the couplet turns the elegy into consolation.",
  "character": "Balanced and reflective; here elegiac and gentle.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "A couple long gone, remembered by no one, still walk together in a glade by the Braemalune in eternal June. The quatrains move from evening, to the lifetime they shared (he smoothing a crease in her brow, she bearing him from flawed to the sublime), to the timeless glade. The couplet turns the elegy into consolation: still today they meet again, and it is never fully dark.",
  "book": "echoes",
  "stanzas": [
   [
    "The birds are still at the end of the day",
    "The sky is deeply violet and blue",
    "The tides of time have swept them both away",
    "Long ago they lost everyone they knew"
   ],
   [
    "A lifetime shared, once upon a time",
    "He, smoothing another crease in her brow",
    "She, bearing him from flawed to the sublime",
    "They did so but who remembers them now"
   ],
   [
    "As evening falls they are still together",
    "Gently holding hands in eternal June",
    "A subtle scent of honey from the heather",
    "Walking in a glade by the Braemalune"
   ],
   [
    "Still today, in that glade they meet again",
    "It is never fully dark, even then"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "neverfail",
  "level": "hard",
  "title": "I never fail",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Loose pentameter",
  "sample": "i [NE]-ver [FAIL]. i suc-[CEED], or i [LEARN]",
  "how": "Three quatrains with alternating rhyme and a closing couplet. The poem opens with a motto, tests it for twelve lines, and the couplet delivers the verdict.",
  "character": "Balanced and argumentative; here a pep talk with teeth.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "The poem opens with a motto, I never fail: I succeed, or I learn, and then tests it for twelve lines. Successes are earned away from the light, and the comfortable couch is where they are lost. The sonnet's argumentative shape suits a pep talk, and the couplet gives its verdict without mercy: your many reasons will not justify that you never made the effort to try.",
  "book": "echoes",
  "stanzas": [
   [
    "I never fail. I succeed, or I learn.",
    "At first glance, that looks easy, does it not?",
    "It’s hard when your hopes are all overturned",
    "Bravado can truly cost you a lot"
   ],
   [
    "Successes are earned away from the light",
    "Alone and in doubt, where demons will lurk",
    "It’s not on the day you put up the fight",
    "Deep down you know you should have done the work"
   ],
   [
    "But here you are now, it is what it is",
    "A comfortable couch, so cosy and slack",
    "With horizons to touch. Now tell me this",
    "Dear friend, how bad do you need to bounce back?"
   ],
   [
    "Your many reasons will not justify",
    "That you never made the effort to try"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "townact3",
  "level": "hard",
  "title": "The Town",
  "excerpt": "Act III, the last of three acts",
  "marks": [
   "A",
   "B",
   "B",
   "A",
   "A",
   "B",
   "B",
   "A",
   "C",
   "D",
   "E",
   "C",
   "D",
   "E"
  ],
  "markLabel": "rhyme",
  "form": "Petrarchan sonnet",
  "scheme": "ABBAABBA CDECDE",
  "metre": "Iambic pentameter",
  "sample": "the [STREETS] re-[TURN] to [LIFE] but [NOW] they're [BROAD]",
  "how": "An octave of eight lines on two rhymes, folded inward (ABBA ABBA), then a sestet on three new rhymes (CDE CDE). The volta at line 9 brings in silent tensions, and some sestet rhymes are slant (mine, die; found, town).",
  "character": "Architectural and demanding: the octave sets the scene, the sestet complicates it.",
  "use": "Perfected by Petrarch in fourteenth-century Italy and brought into English by Thomas Wyatt. Milton and Wordsworth made it their own.",
  "poem": "The last act of The Town: the streets return, broad and paved, the boats and merchants come back, the blacksmith finds his tools. The octave rebuilds the town on two rhymes, as the first act built it. But the turn at line nine brings silent tensions: someone thinks the land might well be his, and the choice between the builder's tools and the soldier's sword lies open. The last line is the hope the whole collection lives by: a pocket of communion makes a town.",
  "book": "hearts",
  "stanzas": [
   [
    "The streets return to life but now they're broad",
    "Straight and paved and wide, like the plans they laid",
    "With life renewed the cries of anguish fade",
    "There is a bridge where once there was a ford"
   ],
   [
    "The boats come back with families on board",
    "The merchants too, and makers to persuade",
    "The blacksmith finds the tools that he had made",
    "The builder’s hammer, and the soldier’s sword"
   ],
   [
    "With every step the silent tensions rise",
    "When he is gone this land might well be mine",
    "The builder’s tools, the sword the blacksmith found",
    "The choice of which to wield, so say the wise",
    "To build or to protect, to do or die",
    "A pocket of communion makes a town"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "pathexile",
  "level": "hard",
  "title": "Path to Exile",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Loose pentameter",
  "sample": "the [MAN] i [SAW] [WALK]-ing [TO] the [STA]-tion",
  "how": "Three quatrains with alternating rhyme and a closing couplet. The odd lines of the first two quatrains end on soft syllables (station, destination; persuasion, demarcations), and the couplet admits the speaker may have been wrong.",
  "character": "Balanced and argumentative; here curious and self-mocking.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "A stranger walks to the station with Path to Exile across his chest, and the speaker makes three guesses: a political statement, an author's famous quote, or just a company that makes games. Each quatrain is one guess, the sonnet's natural rhythm of argument. The couplet admits the speaker may have been wrong and wonders if the stranger was smiling after all. The poem is really about how quickly we read strangers.",
  "book": "echoes",
  "stanzas": [
   [
    "The man I saw walking to the station",
    "He sported Path to Exile cross his chest",
    "As if Exile was a destination",
    "An active choice, in earnest or in jest"
   ],
   [
    "Might it show political persuasion",
    "Or could it be an author’s famous quote",
    "Maybe he was setting demarcations",
    "His stony face forbidding and remote"
   ],
   [
    "And then again it also sounds like fun",
    "Maybe Path to Exile just make games",
    "A friendly crew who welcome everyone",
    "The cutting edge, just shy to flaunt their names"
   ],
   [
    "So maybe I was wrong, it’s hard to call",
    "If he was smiling at me after all"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "fringe",
  "level": "easy",
  "title": "The Fringe of reality",
  "marks": [
   "-",
   "-",
   "-",
   "-",
   "-"
  ],
  "markLabel": "none",
  "form": "Free verse",
  "scheme": "No rhyme",
  "metre": "No fixed metre",
  "sample": "i am an e-[LU]-sive i-[DE]-a",
  "how": "Unrhymed lines with no fixed beat. With nothing to listen for at the line ends, the order is carried by the image and the thought: what comes first, what changes, where it lands.",
  "character": "Wry and dreamlike, a self-portrait as weather.",
  "use": "Free verse has been central to modern poetry since Walt Whitman, and short free-verse poems built on one image grew out of the Imagist movement (Ezra Pound, H.D.).",
  "poem": "The speaker is an elusive idea with its collar turned against the rain, at the fringe of reality. A road sign promises Awareness, 3 miles on, a joke in the middle of a dreamscape. With no rhyme or beat, the lines drift like the idea itself, and the last line gives the only direction home: only poetry can bring me home.",
  "book": "echoes",
  "stanzas": [
   [
    "I am an elusive idea",
    "Turning my collar to the rain",
    "This is the fringe of reality",
    "Did the sign say Awareness, 3 miles on?",
    "Only poetry can bring me home"
   ]
  ],
  "beat": "free"
 },
 {
  "id": "solstice",
  "level": "easy",
  "title": "Winter solstice",
  "marks": [
   "-",
   "-",
   "-",
   "-"
  ],
  "markLabel": "none",
  "form": "Free verse",
  "scheme": "No rhyme",
  "metre": "No fixed metre",
  "sample": "the [SUN] [GENT]-ly [KISS]-es the [ROCKS]",
  "how": "Unrhymed lines with no fixed beat. With nothing to listen for at the line ends, the order is carried by the image and the thought: what comes first, what changes, where it lands.",
  "character": "Quiet and patient, like the shortest day itself.",
  "use": "Free verse has been central to modern poetry since Walt Whitman, and short free-verse poems built on one image grew out of the Imagist movement (Ezra Pound, H.D.).",
  "poem": "The shortest day, told as a near miss: just when our patience runs out, the sun gently kisses the rocks and springs back up. The tiny third line is the bounce itself. The last line turns the turning of the year into a feeling: suddenly, the stillness brings hope.",
  "book": "echoes",
  "stanzas": [
   [
    "Just when our patience runs out",
    "The sun gently kisses the rocks",
    "and springs back up -",
    "Suddenly, the stillness brings hope"
   ]
  ],
  "beat": "free"
 },
 {
  "id": "afterwards",
  "level": "easy",
  "title": "Afterwards",
  "marks": [
   "-",
   "-",
   "-",
   "-"
  ],
  "markLabel": "none",
  "form": "Free verse",
  "scheme": "No rhyme",
  "metre": "No fixed metre",
  "sample": "the [SET]-ting [SUN] is [WARM] on their [FA]-ces",
  "how": "Unrhymed lines with no fixed beat. With nothing to listen for at the line ends, the order is carried by the image and the thought: what comes first, what changes, where it lands.",
  "character": "Warm on the surface, with something unsaid underneath.",
  "use": "Free verse has been central to modern poetry since Walt Whitman, and short free-verse poems built on one image grew out of the Imagist movement (Ezra Pound, H.D.).",
  "poem": "Five friends meet again on a summer evening, their backs to an ancient wall and their faces in the setting sun. Everything is warm until the last line: relieved laughter hides their stunned silence. We are never told what happened. The title and that last line turn the whole calm scene into an aftermath.",
  "book": "echoes",
  "stanzas": [
   [
    "On a summer evening, the five friends meet again",
    "The ancient wall cools their backs",
    "The setting sun is warm on their faces",
    "Relieved laughter hides their stunned silence"
   ]
  ],
  "beat": "free"
 },
 {
  "id": "maybe",
  "level": "easy",
  "title": "Maybe",
  "marks": [
   "-",
   "-",
   "-",
   "-"
  ],
  "markLabel": "none",
  "form": "Free verse",
  "scheme": "No rhyme",
  "metre": "No fixed metre",
  "sample": "[LIT]-tle [WAVES] [GENT]-ly [GREET] the [SHORE]",
  "how": "Unrhymed lines with no fixed beat. With nothing to listen for at the line ends, the order is carried by the image and the thought: what comes first, what changes, where it lands.",
  "character": "Lazy and sunlit, a poem about not yet writing a poem.",
  "use": "Free verse has been central to modern poetry since Walt Whitman, and short free-verse poems built on one image grew out of the Imagist movement (Ezra Pound, H.D.).",
  "poem": "A poem about not yet writing a poem. Little waves, a hot sun, a speaker waiting for inspiration in a bath robe that cloaks the indecision. The unrhymed, unhurried lines are as lazy as the afternoon, and the title is the answer to whether the poem will ever come.",
  "book": "echoes",
  "stanzas": [
   [
    "Little waves gently greet the shore;",
    "I wait patiently for inspiration -",
    "The sun is hot on my skin",
    "My bath robe cloaks my indecision"
   ]
  ],
  "beat": "free"
 },
 {
  "id": "crownepilogue",
  "level": "easy",
  "title": "The Fire and the Crown",
  "excerpt": "Epilogue, the end of the poem",
  "marks": [
   "-",
   "-",
   "-",
   "-",
   "-"
  ],
  "markLabel": "none",
  "form": "Free verse",
  "scheme": "No rhyme",
  "metre": "No fixed metre",
  "sample": "be-[CAUSE] we [MUST], / be-[CAUSE] we are [HU]-man",
  "how": "Unrhymed lines with no fixed beat, getting shorter and then repeating a word (because, because), so the poem ends like a refrain.",
  "character": "Bare and solemn after a story full of rhyme.",
  "use": "Free verse has been central to modern poetry since Walt Whitman, and short free-verse poems built on one image grew out of the Imagist movement (Ezra Pound, H.D.).",
  "poem": "After a revolution told in strict rhyme and metre, The Fire and the Crown ends with five unrhymed lines that grow shorter and then repeat themselves: because we must, because we are human. Truth has a cost for the honest and the liar alike, but still we sing. Dropping the rhyme at the very end feels like the poet stepping out from behind the story.",
  "book": "hearts",
  "stanzas": [
   [
    "Truth ever has a cost—",
    "for the honest as for the liar—",
    "but still we sing,",
    "because we must,",
    "because we are human"
   ]
  ],
  "beat": "free"
 },
 {
  "id": "healing1",
  "level": "easy",
  "title": "The Healing of Bælwythe",
  "excerpt": "Act 1 chorus, after the Disaster",
  "marks": [
   "-",
   "A",
   "B",
   "A",
   "B"
  ],
  "markLabel": "rhyme",
  "form": "Short-line chorus",
  "scheme": "xABAB",
  "metre": "Short lines of two and three beats",
  "sample": "the [DOUBT] pro-[VIDES] its [KING]",
  "how": "A tiny closing chorus: an exclamation on its own, then four short lines whose rhymes cross (B and C, B and C). The short lines snap shut like a door. Here lingering and king are a slant rhyme.",
  "character": "Hushed and uneasy, the town holding its breath.",
  "use": "Short choruses that comment on the action go back to Greek drama, and to the burden or refrain of medieval carols.",
  "poem": "The guild hall has burned, and the town stands watching in silence. Then the chorus asks the only question left: what now? The rhymes cross and no line is longer than three beats, as if nobody dares to speak at length. The doubt provides its king, and the dice will have its throw: chance, not leadership, will decide what happens next.",
  "book": "hearts",
  "stanzas": [
   [
    "What now?",
    "The silence lingering",
    "Where now is there to go?",
    "The doubt provides its king",
    "The dice will have its throw"
   ]
  ],
  "beat": "short"
 },
 {
  "id": "healing2",
  "level": "easy",
  "title": "The Healing of Bælwythe",
  "excerpt": "Act 2 chorus, after Salvation",
  "marks": [
   "-",
   "A",
   "B",
   "A",
   "B"
  ],
  "markLabel": "rhyme",
  "form": "Short-line chorus",
  "scheme": "xABAB",
  "metre": "Short lines of two and three beats",
  "sample": "if [TOW]-ers [TRUMP] our [BREAD]",
  "how": "A tiny closing chorus: an exclamation on its own, then four short lines whose rhymes cross (B and C, B and C). The short lines snap shut like a door.",
  "character": "Grumbling and resigned, a town doing as it is told.",
  "use": "Short choruses that comment on the action go back to Greek drama, and to the burden or refrain of medieval carols.",
  "poem": "The bishop has blamed the town for the fire and demanded a taller church tower. The chorus mutters its reply: extend the church, he said, is that for us to do? The crossed rhymes carry a grumbling irony, and the last two lines say what the town will do anyway: if towers trump our bread, we'd better see it through.",
  "book": "hearts",
  "stanzas": [
   [
    "Hold on!",
    "Extend the church, he said",
    "Is that for us to do?",
    "If towers trump our bread",
    "We’d better see it through"
   ]
  ],
  "beat": "short"
 },
 {
  "id": "healing4",
  "level": "easy",
  "title": "The Healing of Bælwythe",
  "excerpt": "Act 4 chorus, after the Revelation",
  "marks": [
   "-",
   "A",
   "B",
   "A",
   "B"
  ],
  "markLabel": "rhyme",
  "form": "Short-line chorus",
  "scheme": "xABAB",
  "metre": "Short lines of two and three beats",
  "sample": "the [GOLD] has [TURNED] to [DUST]",
  "how": "A tiny closing chorus: an exclamation on its own, then four short lines whose rhymes cross (B and C, B and C). The short lines snap shut like a door.",
  "character": "Angry and resolved, the moment the town stops listening.",
  "use": "Short choruses that comment on the action go back to Greek drama, and to the burden or refrain of medieval carols.",
  "poem": "The tower the town built for God has been struck by lightning, and the bishop stands alone in the firelight. The chorus is short and furious: well then, the gold has turned to dust, a castle in the sand. The clipped lines and hard rhymes (dust, trust; sand, stand) sound like a decision being made, and the last line is the turning point of the whole poem: I say this will not stand.",
  "book": "hearts",
  "stanzas": [
   [
    "Well then!",
    "The gold has turned to dust",
    "A castle in the sand",
    "Now let them earn our trust",
    "I say this will not stand"
   ]
  ],
  "beat": "short"
 },
 {
  "id": "interlude2",
  "level": "medium",
  "title": "Interlude – The Jester speaks",
  "partOf": "The North Wind by the Tail, second interlude",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "B",
   "C",
   "C"
  ],
  "markLabel": "rhyme",
  "form": "Rhyme royal",
  "scheme": "ABABBCC",
  "metre": "Iambic pentameter",
  "sample": "so [OFF] she [WENT], the [WO]-man [POOR] and [BRAVE]",
  "how": "A seven-line stanza of five-beat lines. The fourth and fifth lines share a rhyme (here a slant one, knife and fight), linking the opening to the final couplet.",
  "character": "Stately and reflective; here the jester's mockery melts in the couplet.",
  "use": "Brought into English by Geoffrey Chaucer in Troilus and Criseyde, and named after King James I of Scotland. Shakespeare used it for The Rape of Lucrece.",
  "poem": "Guilda sets off to kill the North Wind with a kitchen knife, and the Jester cannot resist the joke: don't ever bring a fish-knife to a fight. Rhyme royal, a stately form, makes the mockery sound like a chronicle. Then the couplet changes key: the folly is too great, and the fool admits, I try, but I can't mock her anymore. It is one of the few moments the jester's mask slips.",
  "book": "hearts",
  "stanzas": [
   [
    "So off she went, the woman poor and brave",
    "Who never once saw violence or strife",
    "To send the wind—THE WIND—into its grave",
    "She had no sword but brought her kitchen-knife",
    "Don’t ever bring a fish-knife to a fight",
    "The folly, as if blinded to the core",
    "I try, but I can’t mock her anymore"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "bride1",
  "level": "medium",
  "title": "The Bride and the King",
  "excerpt": "Act I, Humble beginnings",
  "marks": [
   "-",
   "-",
   "-",
   "-",
   "A",
   "B",
   "A",
   "B",
   "A"
  ],
  "markLabel": "rhyme",
  "form": "Long lines with a rhymed chorus",
  "scheme": "xxxx ABABA",
  "metre": "Long unrhymed lines, then short lines of two to four beats",
  "sample": "[SAVED] by the [LOVE] for the [LA]-dy she [SERVED]",
  "how": "Four long, loose lines tell the story, full of alliteration (dreary days, chore and cheerless). Then a short chorus of five lines on two rhymes comments on it, like a voice from the court.",
  "character": "Ballad-like and sorrowful, with the chorus whispering gossip.",
  "use": "Alternating narration and a sung comment is the shape of many ballads and of the chorus in drama.",
  "poem": "A soldier's daughter serves a lady at court: soft straw, dreary days, and moments secretly shared. The long, alliterative lines tell her story with sympathy. Then a short chorus, like a voice from the court, warns in clipped rhymes that life there is never simple, positions are dearly bought, and envy has the patience to wait.",
  "book": "hearts",
  "stanzas": [
   [
    "The straw was soft for the lass, a simple soldier’s daughter",
    "Destined for dreary days and hopeless dreams—and forever a maid"
   ],
   [
    "Every chore much the same, cheerless in the shadow of the crown",
    "Saved by the love for the lady she served, with moments secretly shared"
   ],
   [
    "Above your state",
    "Life is never simple at court",
    "Surrounded by ambition and hate",
    "Such positions are dearly bought",
    "Envy has the patience to wait"
   ]
  ],
  "beat": "short"
 },
 {
  "id": "bride4",
  "level": "medium",
  "title": "The Bride and the King",
  "excerpt": "Act IV, The public fall",
  "marks": [
   "-",
   "-",
   "-",
   "-",
   "A",
   "B",
   "A",
   "B",
   "A"
  ],
  "markLabel": "rhyme",
  "form": "Long lines with a rhymed chorus",
  "scheme": "xxxx ABABA",
  "metre": "Long unrhymed lines, then short lines of two to four beats",
  "sample": "the [DOOR] on their [BED]-room [CELL]",
  "how": "Four long, loose lines tell the story in two pairs. Then a short chorus of five lines on two rhymes slams shut, starting with the words Slammed shut.",
  "character": "Brutal and sudden, a fall told in headlines.",
  "use": "Alternating narration and a sung comment is the shape of many ballads and of the chorus in drama.",
  "poem": "The maid has become queen, crowned before cheering crowds, and then a wave brought by brothers once beloved sweeps her and the king away. The long lines swell with the adulation; the chorus slams shut, beginning with the words Slammed shut. Its short rhymes (shut, cut; cell, dwell) are as brutal as the gossip they report, and the whole fall takes nine lines.",
  "book": "hearts",
  "stanzas": [
   [
    "Crowned in a church, with cheering crowds amassed",
    "Swept away by adulation and all that she could ask for"
   ],
   [
    "The wave that rudely wiped away her ambitions and dreams",
    "Brought to her—and to him—by brothers once beloved"
   ],
   [
    "Slammed shut",
    "The door on their bedroom cell",
    "A dream-thread brutally cut",
    "Here, let them dwell",
    "The mad-dog king and his slut"
   ]
  ],
  "beat": "short"
 },
 {
  "id": "windepilogue",
  "level": "medium",
  "title": "Epilogue – The Jester speaks",
  "partOf": "The North Wind by the Tail",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "A",
   "B",
   "C",
   "C",
   "-",
   "D",
   "-",
   "D"
  ],
  "markLabel": "rhyme",
  "form": "Ottava rima with a ballad coda",
  "scheme": "ABABABCC xDxD",
  "metre": "Iambic pentameter, then lines of four and three beats",
  "sample": "so [THERE] it [IS], the [JES]-ter [SAYS] with [GLEE]",
  "how": "Eight lines of ottava rima, two rhymes alternating and a closing couplet with the moral, followed by a short ballad stanza that steps back and watches the jester leave.",
  "character": "Witty, then suddenly quiet.",
  "use": "Ottava rima comes from Italy and became the form of wit in Byron's Don Juan; the ballad stanza is the oldest storytelling stanza in English.",
  "poem": "The Jester draws the moral of Guilda's tale: she hunted the wind and became it, forever locked, or maybe free. Ottava rima gives him six lines of wit and a couplet with the bitter lesson: you can only become your foe, or fight him and lose. Then the form changes to a plain ballad quatrain, and the poem simply watches the jester put away his lute, lost for words for once.",
  "book": "hearts",
  "stanzas": [
   [
    "So there it is, the Jester says with glee",
    "Our Guilda has become what she detests",
    "Forever locked—or maybe she is free—",
    "To ride the tail, to storm and to forget"
   ],
   [
    "If you would hunt the wind, I do foresee",
    "You will resist advice and even threats",
    "By then your only option is to choose",
    "To be your foe, or fight him—and to lose"
   ],
   [
    "The Jester puts away his lute",
    "He’s lost for words somehow",
    "The faintest smile—Before he leaves",
    "He takes a final bow"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "tofriend",
  "level": "medium",
  "title": "To a friend",
  "marks": [
   "A",
   "A",
   "B",
   "B",
   "C",
   "C",
   "D",
   "E",
   "D",
   "E"
  ],
  "markLabel": "rhyme",
  "form": "Couplets with a ballad coda",
  "scheme": "AABBCC DEDE",
  "metre": "Long lines of five and six beats, then lines of three beats",
  "sample": "[MEET]-ing is a [BREATH] we [TAKE] be-[FORE] fare-[WELL]",
  "how": "Three rhymed couplets in long lines, each a memory, then a short cross-rhymed quatrain that speaks to the friend directly.",
  "character": "Tender and plain, an elegy that sounds like a toast.",
  "use": "Couplets for remembrance go back to classical epitaphs; the short closing stanza works like a farewell song.",
  "poem": "A farewell to a friend whose life was a house of open doors. The three long couplets each hold one memory, and their rhymes (tell, farewell; goodbye, why) chime like glasses in a toast. The short closing quatrain speaks to the friend directly, and the sudden short lines sound like a voice catching: we stood out from the crowd, I hope we did you proud.",
  "book": "echoes",
  "stanzas": [
   [
    "Even when we met that first time I could tell",
    "Meeting is a breath we take before farewell",
    "From our first hello to our last goodbye",
    "You never let us go, never questioned why",
    "It would leave its mark, your life of open doors",
    "You were part of ours, but we were all of yours"
   ],
   [
    "For noone but you",
    "We stood out from the crowd",
    "We’ll see each other through",
    "I hope we did you proud"
   ]
  ],
  "beat": "hexa"
 },
 {
  "id": "facades",
  "level": "medium",
  "title": "Façades",
  "marks": [
   "-",
   "A",
   "-",
   "A",
   "-",
   "B",
   "-",
   "B",
   "-",
   "-",
   "-",
   "-",
   "-",
   "C",
   "-",
   "C"
  ],
  "markLabel": "rhyme",
  "form": "Common metre",
  "scheme": "xAxA xBxB xxxx xCxC",
  "metre": "Iambic lines of four and three beats in turn",
  "sample": "i [DROVE] through [SOME]-one's [SUB]-urb [ONCE]",
  "how": "Four-line stanzas alternating four and three beats, with the short lines rhyming. In the third stanza the rhyme disappears and the sentences break across the lines (ballet of / Clones of prefab houses, I), as if the poem itself loses its footing.",
  "character": "Sardonic and tidy, until the twist.",
  "use": "The metre of hymns such as Amazing Grace, of folk ballads and of most of Emily Dickinson's poems.",
  "poem": "The speaker drives through a perfect suburb and sneers: trimmed gardens, expensive cars, well-behaved skateboard kids, a sign that Jesus saves. Common metre, the tidy hymn stanza, suits the tidiness being mocked. In the third stanza the rhyme vanishes and sentences break across the lines, like the frozen Dutch ballet of prefab houses. The last stanza looks for one sign of life in a pathetic home, and realises it's mine.",
  "book": "echoes",
  "stanzas": [
   [
    "I drove through someone’s suburb once",
    "But wasn’t too impressed",
    "By all its gardens neatly trimmed",
    "And people smartly dressed"
   ],
   [
    "Expensive cars and skateboard kids",
    "Appearing well-behaved",
    "The only mark of discontent;",
    "A sign that Jesus saves"
   ],
   [
    "Tapping to the rhythm of this",
    "Frozen Dutch ballet of",
    "Clones of prefab houses, I",
    "Prepared to speed away"
   ],
   [
    "It’s too clean to be real, I thought",
    "While looking for some sign",
    "Of life in one pathetic home;",
    "And realised it’s mine"
   ]
  ],
  "beat": "common"
 },
 {
  "id": "lettinggo",
  "level": "medium",
  "title": "Letting go",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "H",
   "G",
   "H",
   "I",
   "I",
   "J",
   "J"
  ],
  "markLabel": "rhyme",
  "form": "Common metre",
  "scheme": "ABAB CDCD EFEF GHGH IIJJ",
  "metre": "Iambic lines of four and three beats in turn",
  "sample": "a [SUD]-den [THOUGHT]; that's [IT], you're [DONE]",
  "how": "Cross-rhymed quatrains alternating four and three beats. The last stanza switches to rhymed couplets, closing the argument with two firm clicks.",
  "character": "A pep talk in the voice of a hymn.",
  "use": "The metre of hymns, folk ballads and Emily Dickinson.",
  "poem": "A voice talks someone out of quitting: who are you to fold and quit at the drop of a hat? The hymn metre gives the pep talk a firm, almost preacherly beat. The argument turns in the fourth stanza: tasks that once stretched you are routine now, so where are the mountains to climb? The final stanza switches to couplets and closes on a paradox: respect yourself and your work, and embrace the need to lose control.",
  "book": "echoes",
  "stanzas": [
   [
    "A sudden thought; that’s it, you’re done",
    "Don’t want to see it through",
    "You brush it off, you’ve just begun",
    "And this is what you do"
   ],
   [
    "Who are you to fold and quit",
    "At the drop of a hat",
    "Lower the mask just when it fits",
    "You know better than that"
   ],
   [
    "Challenge yourself is what you preach",
    "Succeed and take a bow",
    "But tasks that made you have to reach",
    "Are second nature now"
   ],
   [
    "The efforts made, the things you’ve seen",
    "The lessons over time",
    "You’re letting them become routine",
    "What mountains now to climb"
   ],
   [
    "Respect yourself and all that work",
    "Feel free to drop that smirk",
    "Embrace the need to lose control",
    "Inside your restless soul"
   ]
  ],
  "beat": "common"
 },
 {
  "id": "retort",
  "level": "hard",
  "title": "Retort to the old",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Sonnet in ballad metre",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Iambic lines of four and three beats in turn",
  "sample": "we [CRASHED] it, [NOW] it's [UP] to [YOU]",
  "how": "The Shakespearean sonnet shape of three quatrains and a couplet, but in the short alternating lines of a ballad. The couplet goes back to four beats for the last word.",
  "character": "Blunt and defiant; the sonnet's dignity cut down to a chant.",
  "use": "Sonnets usually use pentameter; shorter lines are a modern liberty, used for speed and bite.",
  "poem": "Placed after To the young in the book, this is the young answering back: we crashed it, now it's up to you, they are told, and they refuse. The sonnet shape is cut down to the short lines of a ballad, so it sounds like a chant at a protest rather than a meditation. These queens don't need your thrones; and the couplet's last word is a wish, not a demand: I almost wish you'd understand.",
  "book": "echoes",
  "stanzas": [
   [
    "We crashed it, now it’s up to you",
    "A film we’ve seen before",
    "Why don’t you stop and think it through",
    "Since when are we your whore"
   ],
   [
    "A generation set apart",
    "Together or alone",
    "A hundred million beating hearts",
    "These queens don’t need your thrones"
   ],
   [
    "It’s not on us to save your realm",
    "To build or to forgive",
    "It’s not on us to take the helm",
    "We just want to live"
   ],
   [
    "We won’t create your wonderland",
    "I almost wish you’d understand"
   ]
  ],
  "beat": "common"
 },
 {
  "id": "morning",
  "level": "hard",
  "title": "On every morning light the dark descends",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Loose iambic pentameter",
  "sample": "on [EV]-ery [MOR]-ning [LIGHT] the [DARK] de-[SCENDS]",
  "how": "Three quatrains with alternating rhyme and a closing couplet. The title line sits in the middle of the second quatrain, turning a proverb about dawn upside down.",
  "character": "Balanced and argumentative; here anxious and wry.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "We set our goals and add some more; we are owners of the world, birds of prey, mice and kings. The title line turns the proverb about dawn inside out: on every morning light the dark descends. The quatrains move from ambition to dread to the daily act of pretending we never cared, and the couplet leaves the end waiting in the wings: the brewing doom of kings.",
  "book": "echoes",
  "stanzas": [
   [
    "We set our goals and quickly add some more",
    "Owners of the world, we are birds of prey",
    "For everyone, as we have learned before",
    "We’re mice, we’re kings; and life gets in our way"
   ],
   [
    "Despair will fade at dawn when night must end",
    "He boldly said, when he had seen it through",
    "On every morning light the dark descends",
    "A silent dragon that we never slew"
   ],
   [
    "While every day brings hope, we wake up scared",
    "A thousand tasks to face, we mustn’t fail",
    "We do, but smile, pretend we never cared",
    "Another breath; remember to exhale"
   ],
   [
    "In our minds, waiting calmly in the wings",
    "The sordid end, the brewing doom of kings"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "court",
  "level": "hard",
  "title": "The Fire and the Crown",
  "excerpt": "Act III, The Court",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Iambic pentameter",
  "sample": "i [HEAR] the [SOUND] of [SING]-ing [IN] the [STREET]",
  "how": "Three quatrains with alternating rhyme and a closing couplet. The king speaks the first two quatrains, the chamberlain answers in the third, and the couplet gives the king his cynical last word.",
  "character": "Balanced and argumentative, ideal for a setup and a twist.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "The revolution has reached the palace. The frightened king hears singing in the street and smells the smoke, and the chamberlain calms him with a plan: use the Church to teach the people that what they give is what they get. The sonnet splits between them, the king in the first two quatrains and the chamberlain in the third, and the couplet gives the king his cynical last word: let the bishops preach on after-life.",
  "book": "hearts",
  "stanzas": [
   [
    "The King said you must tell me what to do",
    "You’re scared, I know, and wish to hide away",
    "The throne and crown do not belong to you",
    "You’d better bring your sharpest anyway"
   ],
   [
    "I hear the sound of singing in the street",
    "The sky vibrates with anger and with hate",
    "I smell the smoke and hear the marching feet",
    "So is the day then here to seal my fate?"
   ],
   [
    "The Chamberlain said, no my Lord, not yet",
    "There’s still the holy Mother Church to use",
    "To teach them what they give is what they get",
    "That’s how a revolution is defused"
   ],
   [
    "Of course, the King said, celebrate their strife",
    "We’ll let the bishops preach on after-life"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "spark",
  "level": "hard",
  "title": "The Fire and the Crown",
  "excerpt": "Act IV, The Spark",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "D",
   "C",
   "D",
   "E",
   "F",
   "E",
   "F",
   "G",
   "G"
  ],
  "markLabel": "rhyme",
  "form": "Shakespearean sonnet",
  "scheme": "ABAB CDCD EFEF GG",
  "metre": "Loose iambic pentameter",
  "sample": "the [SPARK] was [LIT], there [WAS] no [TURN]-ing [BACK]",
  "how": "Three quatrains with alternating rhyme and a closing couplet, here printed as eight, four and two lines. Several rhymes are feminine (alley, valley) and the couplet is slant (downs, town).",
  "character": "Fast and fatalistic; events outrun the form.",
  "use": "Shakespeare's 154 sonnets made this the English sonnet, and it is still the most used sonnet form in English.",
  "poem": "A word, a push in a crowded alley, and the fire spreads from village to valley. The sonnet moves as fast as the events: the king flees, the chamberlain keeps the key, and the bishop understands he is to be the fodder for the beast. The feminine rhymes (alley, valley) and the slant couplet (downs, town) make the form feel slightly out of control, like the revolution itself.",
  "book": "hearts",
  "stanzas": [
   [
    "The spark was lit, there was no turning back",
    "A word, a push in a crowded alley",
    "The swift retaliatory attack",
    "The fire raged from village to valley",
    "And even as the word had spread in court",
    "The Chamberlain advised the King to flee",
    "To go, to use this very last resort",
    "Such a noble plea—Leave the key with me"
   ],
   [
    "So I’m dead, said the Bishop to the Priest",
    "They think the cross can stop a violent mob",
    "Then I should be the fodder for the beast",
    "Indeed a way of learning on the job"
   ],
   [
    "So as the King rode away across the downs",
    "His Bishop sacrifice headed into town"
   ]
  ],
  "beat": "pent"
 },
 {
  "id": "pilgrim1",
  "level": "hard",
  "title": "The Pilgrim",
  "excerpt": "Act I, Departure",
  "marks": [
   "A",
   "B",
   "A",
   "B",
   "B",
   "C",
   "C",
   "D",
   "E",
   "D",
   "E",
   "E",
   "F",
   "F"
  ],
  "markLabel": "rhyme",
  "form": "Rhyme royal",
  "scheme": "ABABBCC DEDEEFF",
  "metre": "Iambic pentameter",
  "sample": "what [LAY] a-[HEAD] she [KNEW] not, [BUT] she [PRAYED]",
  "how": "Seven-line stanzas of five-beat lines. The fourth and fifth lines share a rhyme, linking the opening to the final couplet, and the couplet sums up.",
  "character": "Stately and reflective, suited to a solemn journey.",
  "use": "Brought into English by Geoffrey Chaucer in Troilus and Criseyde, and named after King James I of Scotland. Shakespeare used it for The Rape of Lucrece.",
  "poem": "A girl sets out alone on a pilgrimage with a psalm on her lips, a leg of lamb and two small loaves of bread. Rhyme royal, the stately form of Chaucer's Troilus, gives her departure the gravity of a quest. The first stanza is prayer and leave-taking; the second is courage and doubt, and it ends on the honest alternative in the pilgrim's faith: I'll live, or I might die.",
  "book": "hearts",
  "stanzas": [
   [
    "The Lord is my shepherd, I shall not want,",
    "The Pilgrim said aloud and turned away",
    "From everything she knew at Rue du Pont",
    "And from the thought that she would rather stay",
    "What lay ahead she knew not, but she prayed",
    "Please let me come home safely from this quest",
    "The glory be to you—then let me rest"
   ],
   [
    "A leg of lamb and two small loaves of bread",
    "With anxious heart into a great unknown",
    "There’s nothing for it but to go ahead",
    "There’ll come a day they’ll say How you have grown",
    "From what you learned and did—a girl, alone",
    "It was not I, but God, here at my side",
    "I trust in him; I’ll live—or I might die"
   ]
  ],
  "beat": "pent"
 }
];
