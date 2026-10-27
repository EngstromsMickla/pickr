/* Pickr: site texts. Edit here, not in app.js. No dashes as punctuation in new texts. */
window.PICKR = {
  version: "v0.4",
  round: { easy: 3, medium: 4, hard: 3 },
  name: "Pickr",
  tagline: "A mischievous little robot, a scrambled poem",
  lede: "Pickr loves poems so much it can't stop picking them up. Unfortunately it also drops them. Put the lines back in order, and Pickr will tell you which poem it is, what metre it is written in, and how that metre works.",
  play: "Play",
  continueBtn: "Continue",
  choose: "Choose a poem",
  howTitle: "How to play",
  steps: [
    { t: "Choose your help", d: "Before each poem, decide how much Pickr should leave in place: the first stanza, rhyme letters, and a few more stanzas picked to help you most." },
    { t: "Put the lines back", d: "Pickr drops the rest. Drag a line by its handle, or tap two lines to swap them. Gaps show where the stanzas break; rhyme, rhythm and sense are your clues." },
    { t: "Check and discover", d: "Lines in the right place turn green and stay put. Get them all and you learn the poem's title, its form and how the metre works." }
  ],
  hintNote: "Each round has ten poems, drawn from forty and starting with the easy ones. Stuck? The first hint shows the rhyme letters if they are hidden, and every hint after that makes Pickr put one line in its right place. New to metre? The guide explains the forms and the words.",
  aboutTitle: "About the poems",
  about: [
    "Every line in Pickr was written by Dan Engström, a poet who writes in English and Swedish. The forty poems come from two collections, and every round Pickr picks ten of them.",
    "<em>Echoes of Life</em> (Piratpensionat Produktion, 2025) gathers short poems about noticing, connection, doubt and resistance, with a sequence of four sonnets, <em>The Edge of Perception</em>, at its heart.",
    "<em>Hearts Around the Fire</em> (Piratpensionat Produktion, 2026) is set in Bælwythe, an imagined town at a river's bend, and is told through the voices of the people who live there: the brewer, the merchant, the bard, the wizard nobody talks about, and the jester who says what everyone else is thinking.",
    "The game was vibe-coded with Claude. The poems were not. Pickr only moves the lines around; it never writes or changes a word."
  ],
  licence: "Poems © Dan Engström, licensed CC BY-NC-SA.",
  licenceUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  copyright: "© Engströms Mickla AB 2026",
  levels: { easy: "Warm up", medium: "Getting tricky", hard: "Sonnets and other beasts" },
  ui: {
    allPoems: "All poems",
    restart: "Start over",
    stanzas: "stanzas",
    roundNote: "This round: ten poems picked at random from forty, easy ones first.",
    newRound: "Play a new round",
    roundDone: "See the whole round",
    restartAsk: "Forget this round and start a new one with ten fresh poems?",
    restartYes: "Yes, start over",
    restartNo: "Keep my progress",
    restartDone: "All gone! Let's drop some poems.",
    home: "Home",
    poem: "Poem",
    of: "of",
    lines: "lines",
    part: "Part",
    check: "Check",
    hint: "Hint",
    setup: {
      title: "How much help would you like?",
      firstStanza: "Put the first stanza in place",
      firstLine: "Put the first line in place",
      marks: { rhyme: "Show rhyme letters", sound: "Show sound letters (this poem alliterates instead of rhyming)", ending: "Show soft and hard line endings (this poem does not rhyme)" },
      noRhyme: "This poem has no rhyme, so there are no letters to show. Follow the image.",
      otherStanzas: "Other stanzas in place",
      otherLines: "Other lines in place",
      strategic: "Pickr picks the ones that help you most.",
      go: "Drop it, Pickr!"
    },
    hintMarks: { none: "This poem has no rhyme. Follow the image.", rhyme: "Letters show which lines rhyme.", sound: "Letters show the sound each line repeats.", ending: "Soft lines end on an unstressed syllable, hard lines on a stress. They take turns." },
    solved: "Solved",
    next: "Next poem",
    again: "Play again",
    reshuffle: "Let Pickr shuffle again",
    sound: "Sound",
    on: "on",
    off: "off",
    form: "The form",
    scheme: "Rhyme scheme",
    metre: "Metre",
    scansion: "Hear the beat",
    scansionNote: "Stressed syllables in capitals.",
    how: "How it works",
    character: "Its character",
    use: "Where you meet it",
    inPoem: "In this poem",
    from: "from",
    hintsUsed: function (n) { return n === 0 ? "Solved without hints. Pickr is impressed." : n === 1 ? "Solved with one hint." : "Solved with " + n + " hints."; },
    progress: function (n, N) { return n + " of " + N + " poems solved"; },
    dragHelp: "Drag the handle, or tap two lines to swap them. Green lines are locked in place.",
    allDone: "You have put all ten poems back together. Pickr is speechless, which has never happened before."
  },
  guide: {
    nav: "Guide",
    title: "Metres and terms",
    intro: "A short guide to the words Pickr uses and to every form in the game. You don't need any of it to play, but it makes the clues easier to hear. The examples are lines from the poems.",
    contents: "On this page",
    formsTitle: "The forms in the game",
    formsIntro: "Every form you meet in Pickr, in the order they appear. Poems you have solved are shown by title.",
    meet: "Meet it in",
    sections: [
      { h: "Lines and stanzas", items: [
        { t: "Line", d: "A single row of a poem. In verse the line, not the sentence, is the basic unit, and where a line ends is part of the meaning." },
        { t: "Stanza", d: "A group of lines set apart by a blank line, like a paragraph in prose. Stanzas are named by their number of lines." },
        { t: "Couplet", d: "Two lines that belong together, usually rhyming. A sonnet often ends with one.", ex: "So let there be light, that’s what he told her / Straight in the eye of any beholder" },
        { t: "Tercet", d: "A stanza of three lines." },
        { t: "Quatrain", d: "A stanza of four lines, the most common stanza in English." },
        { t: "Octave and sestet", d: "The two parts of a Petrarchan sonnet: eight lines that set out a situation and six that answer or complicate it." }
      ] },
      { h: "Sound", items: [
        { t: "Rhyme", d: "Words that sound the same from their last stressed vowel onward, such as sea and free." },
        { t: "Rhyme scheme", d: "Letters that show which lines rhyme. Lines with the same letter rhyme with each other; x marks a line that does not rhyme. ABAB means the first and third lines rhyme, and so do the second and fourth." },
        { t: "Slant rhyme", d: "A near rhyme, where the sounds almost match.", ex: "dress and says, mine and behind" },
        { t: "Hard and soft endings", d: "A line with a hard (masculine) ending finishes on a stressed syllable, like dead. A soft (feminine) ending adds an unstressed syllable after the stress, like absolution. Rhymes are called masculine or feminine in the same way." },
        { t: "Internal rhyme", d: "A rhyme inside a line rather than at its end.", ex: "The King has fled, the Bishop’s dead" },
        { t: "Monorhyme", d: "A passage where every line ends on the same rhyme." },
        { t: "Alliteration", d: "The same sound at the start of nearby stressed words. Old English poetry was built on it instead of rhyme.", ex: "Pebbles in a pond, pearls gently dropped" },
        { t: "Refrain", d: "A line or phrase that returns, often a little changed, through a poem.", ex: "At least that’s what he claims" }
      ] },
      { h: "Rhythm", items: [
        { t: "Stress", d: "The extra weight a syllable gets in normal speech: MOR-ning, not mor-NING. In Pickr stressed syllables are written in capitals." },
        { t: "Metre", d: "A regular pattern of stressed and unstressed syllables. Metre is named by the kind of foot and the number of feet per line, so iambic pentameter means five iambs." },
        { t: "Foot", d: "The building block of metre: one stressed syllable together with its unstressed neighbours." },
        { t: "Scansion", d: "Reading a line aloud and marking its stresses to find the metre. Real lines vary, so scansion is about the main pattern, not every syllable." },
        { t: "Caesura", d: "A pause in the middle of a line. In alliterative verse it splits every line in two.", ex: "Mirrored by the minstrels | the morning sun rises" },
        { t: "Catalexis", d: "Leaving out the final unstressed syllable of a line, so it ends on a stress. A catalectic line sounds clipped.", ex: "BIRDS don’t ASK to TRY" },
        { t: "Volta", d: "The turn in a sonnet, where the argument changes direction. In a Petrarchan sonnet it comes at line 9, in a Shakespearean sonnet often at the final couplet." },
        { t: "Blank verse and free verse", d: "Blank verse is unrhymed but has a regular metre, usually iambic pentameter. Free verse has neither fixed rhyme nor fixed metre." }
      ] },
      { h: "Feet", items: [
        { t: "Iamb", d: "Unstressed, stressed: da DUM. The most natural rhythm of English.", ex: "be-HIND, the PRIDE that FILLS" },
        { t: "Trochee", d: "Stressed, unstressed: DUM da. It sounds firm and chant-like.", ex: "MOR-ning, BIRDS don’t" },
        { t: "Anapest", d: "Two unstressed, then stressed: da da DUM. A galloping, lilting rhythm.", ex: "is POCK-marked with SITES" },
        { t: "Dactyl", d: "Stressed, then two unstressed: DUM da da. A falling, rolling rhythm.", ex: "YOUNG were the" },
        { t: "Spondee", d: "Two stresses in a row: DUM DUM. Used for emphasis, never for a whole poem.", ex: "SUN RI-ses" }
      ] },
      { h: "Line lengths", items: [
        { t: "Dimeter", d: "Two feet, two beats per line." },
        { t: "Trimeter", d: "Three feet, three beats per line." },
        { t: "Tetrameter", d: "Four feet, four beats per line. The line of ballads, hymns and nursery rhymes." },
        { t: "Pentameter", d: "Five feet, five beats per line. Iambic pentameter is the classic line of English poetry, from Chaucer and Shakespeare onward." },
        { t: "Hexameter and alexandrine", d: "Six feet, six beats per line. The iambic hexameter is called an alexandrine, after a French poem about Alexander the Great, and is the classic line of French verse." },
        { t: "Common metre", d: "Lines of four and three beats in turn (8 and 6 syllables), with the short lines rhyming. Also called ballad metre." }
      ] }
    ]
  },
  pickr: {
    setup: [ "I promise to drop it gently this time.", "How much should I hold on to?", "Pick your help. I will try not to sneeze." ],
    drop: [
      "Oops. I tripped.",
      "Whoops! I sneezed on the poem.",
      "I was only holding it for a second!",
      "Don't tell the poet.",
      "It slipped. Poems are very slippery.",
      "I tidied it. Sort of.",
      "Beep. That was not supposed to happen."
    ],
    close: [ "So close! {n} of {N} lines are home.", "{n} of {N}. Getting warmer.", "Beep boop. {n} of {N} are in the right place." ],
    none: [ "Hmm. None of them are home yet.", "Zero! Even I did better than that. Well, no." ],
    part: [ "That part is done! Here comes the next bit.", "Yes! Hold on, I dropped some more." ],
    hintMarks: [ "Psst. Look at the little letters.", "Here's a secret. Don't tell anyone." ],
    hintFix: [ "Fine, I'll put one back myself.", "There. That one goes there. I think." ],
    win: [ "Beep boop! You did it!", "Ta-da! The poem is whole again!", "Perfect. I would clap, but my claws only pinch." ],
    idle: [ "Tap me. Go on.", "I am only a little bit sorry.", "Do you like rhymes? I like rhymes." ]
  }
};
