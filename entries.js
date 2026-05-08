/* =============================================================
   ENTRIES — the lexicon, ~100 headwords, in document order.
   Each entry: { word, ipa?, origin?, pos, defs[], examples?, see? }
   - word: the headword (display form)
   - ipa: pronunciation aid (optional)
   - origin: small-cap etymology line (optional)
   - pos: part of speech, abbreviated like a real dictionary
   - defs: array of definition strings (1-3 entries)
   - examples: array of italicised use-in-context (optional)
   - see: array of cross-reference word IDs (kebab-case of word)
   ID is auto-generated as kebab-case of `word` (lowercased, ASCII).
   =============================================================*/

window.LEXICON = [

  /* ───── A ───── */
  {
    word: "Aerosol",
    pos: "n.",
    origin: "from Greek aēr 'air' + Latin sol 'solution'",
    defs: [
      "What burns in the atmosphere when a war is loud enough.",
      "A satellite-visible proxy for combustion, and therefore for trouble. The map I show when somebody asks me where the violence is and I do not know."
    ],
    see: ["proxy", "satellite"]
  },
  {
    word: "Alone",
    pos: "adj.",
    defs: [
      "The condition in which I am most reliably myself.",
      "Not absent of company, but present of self."
    ],
    examples: [
      "I am alone four hours a day. The other twenty are negotiations."
    ],
    see: ["solitude", "introvert"]
  },
  {
    word: "Apatheia",
    ipa: "ə-PA-thay-ah",
    origin: "Greek, Stoic; freedom from passions",
    pos: "n.",
    defs: [
      "Not the absence of feeling. The presence of feeling without the obligation to act on it.",
      "What Marcus Aurelius is doing in the Meditations between the lines."
    ]
  },
  {
    word: "Architecture",
    pos: "n.",
    defs: [
      "What I trained in before I knew it was a way of looking, not a way of building.",
      "The discipline that taught me to walk into a room and notice the height of the ceiling."
    ],
    see: ["kahn", "anthropology"]
  },

  /* ───── B ───── */
  {
    word: "Bad faith",
    pos: "phrase",
    origin: "after Sartre, mauvaise foi",
    defs: [
      "The condition of pretending one is not free.",
      "Chiefly observable in waiters, professors, and bicycle technicians on Saturday afternoons."
    ],
    see: ["bicycle", "freedom"]
  },
  {
    word: "Bangkok",
    pos: "n.",
    defs: [
      "The city my mother still lives in, on a side canal where the houses stand on stilts.",
      "The smell of lemongrass and exhaust before six in the morning. The dialect I still answer my mother in when she calls."
    ],
    see: ["mother", "home"]
  },
  {
    word: "Begin",
    pos: "v.",
    defs: [
      "The verb most people misuse. They think it means to feel ready. It means to start anyway."
    ],
    examples: [
      "Most days I begin. Some days I begin again. The two are different verbs."
    ]
  },
  {
    word: "Bicycle",
    pos: "n.",
    defs: [
      "A device for thinking, by way of the legs.",
      "The vehicle of someone who has accepted the speed of cities."
    ],
    examples: [
      "I do my best thinking by the Huangpu, on a bicycle that ticks in a slightly different time signature than before."
    ],
    see: ["huangpu", "thinking"]
  },
  {
    word: "Boston",
    pos: "n.",
    defs: [
      "The city where I learned to be cold, and to be alone with books.",
      "Where the radiators clicked all night in the MIT library, and I read Bachelard until I forgot to be Thai for an hour."
    ],
    see: ["mit", "winter"]
  },
  {
    word: "Butterfly",
    pos: "n.",
    origin: "after Zhuangzi, 蝴蝶夢",
    defs: [
      "An insect.",
      "A dream.",
      "The suspicion that one is, on most days, the wrong of two possibilities."
    ],
    see: ["zhuangzi", "dream"]
  },

  /* ───── C ───── */
  {
    word: "Café",
    pos: "n.",
    defs: [
      "A place that sells you, for the price of a coffee, two hours of being alone among strangers — which is the cheapest version of company."
    ],
    examples: [
      "I prefer the third floor of small ones, near the old French Concession."
    ]
  },
  {
    word: "Cambridge",
    pos: "n.",
    defs: [
      "Either of two places, both quiet — Massachusetts in winter, England in fog.",
      "Where I learned to be a stranger, twice."
    ]
  },
  {
    word: "Coffee",
    pos: "n.",
    defs: [
      "What my father would have drunk, if he had not so completely committed to tea.",
      "Taken at the right hour, postpones a number of small unhappinesses."
    ],
    see: ["flask", "father"]
  },
  {
    word: "Committee",
    pos: "n.",
    defs: [
      "The internal panel that argues against every project, gathering quorum somewhere behind the eyes.",
      "Most of writing practice is firing the committee, regularly, until it gets bored and goes home."
    ],
    examples: [
      "The committee is, on most days, the majority."
    ]
  },
  {
    word: "Compress",
    pos: "v.",
    defs: [
      "To say in eighteen words what your earlier self took twenty-seven words to say.",
      "The single skill writers acquire over time. Everything else is style."
    ]
  },

  /* ───── D ───── */
  {
    word: "Daily",
    pos: "adj.",
    defs: [
      "What separates a habit from a hobby.",
      "What I do not negotiate with."
    ]
  },
  {
    word: "Discipline",
    pos: "n.",
    defs: [
      "Not severity. Repetition.",
      "What you have when you have stopped asking yourself whether you feel like it."
    ],
    see: ["sweep", "practice"]
  },
  {
    word: "Dragon",
    pos: "n.",
    defs: [
      "The bureaucracy. The vendor's price sheet. The fact that the one person in your office who knows how to do this thing has been on leave for two months.",
      "Not slain. Slipped past."
    ],
    see: ["ninja", "oblique"]
  },
  {
    word: "Dust",
    pos: "n.",
    defs: [
      "What the floor knows about you and refuses to be embarrassed by.",
      "Always returning. Always sweepable."
    ],
    see: ["sweep"]
  },

  /* ───── E ───── */
  {
    word: "Enough",
    pos: "adj.",
    defs: [
      "The hardest word in any of my three languages.",
      "Not a defeat. The destination."
    ],
    examples: [
      "More is what you do. Enough is what you become."
    ],
    see: ["less", "minimalism"]
  },
  {
    word: "Ethnography",
    pos: "n.",
    defs: [
      "The discipline of watching people do what they do — as opposed to asking them what they do — and trusting the difference.",
      "Four years of it in Shanghai's alleyways taught me that policy by ethnography is the only policy that survives."
    ],
    see: ["lilong", "shanghai", "anthropology"]
  },

  /* ───── F ───── */
  {
    word: "Father",
    pos: "n.",
    defs: [
      "The man who carried his work to the ministry every morning in a green steel flask, and brought it back, every evening, exactly empty.",
      "The calmest happy man I have known."
    ],
    examples: [
      "He has been gone five years. The flask is still here."
    ],
    see: ["flask", "typewriter", "mother"]
  },
  {
    word: "Field-note",
    pos: "n.",
    defs: [
      "A sentence written on the spot because you do not yet trust your memory.",
      "Most of my books are field-notes that survived the years."
    ]
  },
  {
    word: "Flask",
    pos: "n.",
    defs: [
      "Specifically: a green steel thermos with a cup that screws off the top. My father carried it to the ministry every day for twenty-eight years.",
      "It is the only object in the house I would run back into a fire for."
    ],
    examples: [
      "I fill it now, every morning, with hot water and one Lipton tea bag, the way he did. It is not very good tea. It is, however, the only ritual I have not invented for myself."
    ],
    see: ["father", "ritual"]
  },
  {
    word: "Floor",
    pos: "n.",
    defs: [
      "What the day actually rests on.",
      "Worth sweeping."
    ],
    see: ["sweep"]
  },
  {
    word: "Forced to be free",
    pos: "phrase",
    origin: "after Rousseau, forcé d'être libre",
    defs: [
      "The predicament of a man who has finished his protected work — a doctorate, a marriage, a youth — and finds himself, suddenly, the only author left of his life."
    ],
    examples: [
      "It is the most consoling phrase I know, and the cruellest."
    ],
    see: ["rousseau", "freedom"]
  },
  {
    word: "Freedom",
    pos: "n.",
    defs: [
      "Not the absence of constraint.",
      "The capacity to stand still in a wide, ordinary field at six in the evening and feel, distinctly, that this — and not the next thing — is the appointed place."
    ]
  },
  {
    word: "Friend",
    pos: "n.",
    defs: [
      "Someone you can sit with in silence for an hour and feel met.",
      "Usually four. Occasionally five. Never twelve."
    ],
    see: ["alone", "people"]
  },

  /* ───── G ───── */
  {
    word: "Genius",
    pos: "n.",
    defs: [
      "A rumour, frequently repeated by people who have not done the work."
    ],
    examples: [
      "Habit is a receipt. Genius is a rumour."
    ],
    see: ["habit"]
  },
  {
    word: "Grace",
    pos: "n.",
    defs: [
      "What is given to you when you have done nothing to deserve it. Most of life works this way."
    ]
  },

  /* ───── H ───── */
  {
    word: "Habit",
    pos: "n.",
    defs: [
      "A receipt for a person you used to want to be."
    ],
    see: ["genius", "discipline"]
  },
  {
    word: "Home",
    pos: "n.",
    defs: [
      "Not a postcode.",
      "A verb you have to keep conjugating.",
      "The place where you do not have to explain your silences."
    ],
    examples: [
      "I have three of them, in three time zones. The chair heights are different. The work is the same."
    ],
    see: ["bangkok", "boston", "shanghai"]
  },
  {
    word: "Honest",
    pos: "adj.",
    defs: [
      "What a face becomes after about fifty years of weather, if its owner has not actively prevented it."
    ],
    see: ["weather"]
  },
  {
    word: "Hortus conclusus",
    ipa: "HOR-toos kon-KLOO-soos",
    origin: "Latin, 'enclosed garden'",
    pos: "n.",
    defs: [
      "A small, walled garden, in the medieval iconography.",
      "What every introvert is trying to keep, even when guests are involved."
    ],
    see: ["introvert", "alone"]
  },
  {
    word: "Huangpu",
    ipa: "HWAHNG-poo",
    pos: "n.",
    defs: [
      "The river that runs through Shanghai and, mostly, through me. I bicycled along its Puxi side most evenings of the decade I lived there.",
      "Where I wrote the first day of the hundred."
    ],
    see: ["shanghai", "bicycle", "yangtze"]
  },

  /* ───── I ───── */
  {
    word: "Ikigai",
    ipa: "ee-kee-GAH-ee",
    origin: "Japanese, 生き甲斐 — 'reason for being'",
    pos: "n.",
    defs: [
      "Not what you do for a living. What gets you out of the bed on the days you do not want to.",
      "Different for each of the three cities I live in. The same in all three."
    ]
  },
  {
    word: "Ink",
    pos: "n.",
    defs: [
      "What the typewriter commits to. There is no soft option.",
      "What the brush commits to, in Sesshū's hands, in twenty-eight strokes."
    ],
    see: ["typewriter", "kodawari"]
  },
  {
    word: "Intention",
    pos: "n.",
    defs: [
      "A feeling.",
      "Different from purpose, which is a measurable outcome you have committed to. People confuse these two and lose decades."
    ],
    see: ["purpose"]
  },
  {
    word: "Introvert",
    pos: "n.",
    defs: [
      "Someone who can love people genuinely for four hours a day and after that, must close the door without apology.",
      "I am one. My father was one. Most of the calmest happy men I have known were."
    ],
    see: ["alone", "father"]
  },

  /* ───── J ───── */
  {
    word: "Joy",
    pos: "n.",
    defs: [
      "The quiet kind. The kind that does not announce itself. The kind that arrives, for example, in the smell of rice, just before the rice is done."
    ]
  },

  /* ───── K ───── */
  {
    word: "Kahn",
    pos: "n.",
    defs: [
      "Louis Kahn, the architect — the one who said good architecture ages beautifully.",
      "He did not say it endures. He did not say it is fashionable. He said it gets better with weather, with use, with the small disasters of living."
    ],
    examples: [
      "I want to age like a building by Kahn."
    ],
    see: ["architecture", "weather"]
  },
  {
    word: "Kindness",
    pos: "n.",
    defs: [
      "The first form of intelligence. Almost no one is intelligent who is also unkind, and almost no one is unkind who has been paying attention for long enough."
    ]
  },
  {
    word: "Kodawari",
    ipa: "ko-da-WAH-ree",
    origin: "Japanese, 拘り — 'persistent attention'",
    pos: "n.",
    defs: [
      "The unending pursuit of a small precise excellence.",
      "A dignity reserved for those who have decided, finally, what is and is not worth doing well."
    ],
    examples: [
      "Kodawari is the difference between a man and a man playing a man."
    ],
    see: ["bad-faith", "ink"]
  },
  {
    word: "Kreng jai",
    ipa: "kreng JAI",
    origin: "Thai, เกรงใจ",
    pos: "n.",
    defs: [
      "A polite restraint that has no good English equivalent.",
      "The instinct, in a Thai person, not to impose — even when imposing would be clearly better for everybody."
    ],
    examples: [
      "Kreng jai is the second-most-Thai thing about me. The first I can no longer name in English."
    ],
    see: ["sabai", "mai-pen-rai"]
  },

  /* ───── L ───── */
  {
    word: "Less",
    pos: "adj.",
    defs: [
      "What the room is asking for, every time.",
      "What I do not do enough of, but which I notice when I do."
    ],
    see: ["enough", "minimalism"]
  },
  {
    word: "Lilong",
    ipa: "lee-LOHNG",
    origin: "Chinese, 里弄 — 'lane neighbourhood'",
    pos: "n.",
    defs: [
      "The Shanghai alleyway-housing typology. Two- or three-storey rowhouses arranged around shared lanes.",
      "Where I did four years of fieldwork, and where I learned that most of urban life happens in the space between rooms."
    ],
    see: ["shanghai", "ethnography"]
  },
  {
    word: "Listen",
    pos: "v.",
    defs: [
      "Not the same as hearing.",
      "Hearing is what your ears do. Listening is what your whole life does, when it is going well."
    ]
  },
  {
    word: "Loneliness",
    pos: "n.",
    defs: [
      "A small, almost-good loneliness, of the kind one can drink.",
      "Not empty. The loneliness of being without — and being aware that one is without — and finding that this awareness was, itself, a kind of company."
    ],
    see: ["alone", "solitude"]
  },

  /* ───── M ───── */
  {
    word: "Mai pen rai",
    ipa: "MIE pen RAI",
    origin: "Thai, ไม่เป็นไร",
    pos: "phrase",
    defs: [
      "Literally: 'it is nothing.' Functionally: a way of releasing yourself and the other person from the obligation of the small inconvenience that just happened.",
      "The Thai phrase a foreigner learns in week one and almost never uses correctly."
    ],
    see: ["kreng-jai", "sabai"]
  },
  {
    word: "Marcus Aurelius",
    pos: "n.",
    defs: [
      "Roman emperor, 121–180 CE. The author of the Meditations, which my mother gave me the year I most needed it, and which I have been reading on trains ever since."
    ],
    see: ["mother", "stoic"]
  },
  {
    word: "Memento mori",
    ipa: "meh-MEN-toh MOR-ee",
    origin: "Latin, 'remember you must die'",
    pos: "phrase",
    defs: [
      "Not a morbid phrase.",
      "A clarifying one. The shortest discipline I know."
    ],
    examples: [
      "You are going to die. Almost everything else is preparation."
    ]
  },
  {
    word: "Minimalism",
    pos: "n.",
    defs: [
      "Not an aesthetic. A budget.",
      "Seven kilograms is the airline's limit; seven kilograms became my life."
    ],
    see: ["seven-kilograms", "less"]
  },
  {
    word: "Mother",
    pos: "n.",
    defs: [
      "The river between the two trees, in Kōrin's painting.",
      "The one who taught me to make rice by smelling the steam, and who gave me Marcus Aurelius the year I most needed him."
    ],
    examples: [
      "I did not understand, for most of my life, that my mother had spent forty years being the band of pattern that allowed the two trees to be in a single painting at all."
    ],
    see: ["father", "marcus-aurelius", "bangkok"]
  },
  {
    word: "Mountain",
    pos: "n.",
    defs: [
      "What Cézanne painted sixty times, not because he could not get it right, but because getting it right was the wrong frame.",
      "A relationship. He visited it. He listened. He went home. He returned the next morning."
    ],
    see: ["return", "patience"]
  },
  {
    word: "Mu",
    ipa: "moo",
    origin: "Japanese, 無 — 'nothing, no thing'",
    pos: "n.",
    defs: [
      "The answer to a question that should not have been asked.",
      "Not 'no.' Closer to 'unask.'"
    ]
  },

  /* ───── N ───── */
  {
    word: "Ninja",
    pos: "n., adj.",
    defs: [
      "Not heroic. Not adversarial. Just oblique.",
      "The posture I want for the practice — slipping past the dragon, not slaying it."
    ],
    see: ["oblique", "dragon"]
  },
  {
    word: "Non-ism",
    pos: "n.",
    origin: "from Latin non, 'not'",
    defs: [
      "General abstention from activities and substances regarded as damaging to one's well-being.",
      "See also: minimalism; the practice of leaving things alone."
    ]
  },
  {
    word: "Notice",
    pos: "v.",
    defs: [
      "The whole assignment.",
      "The verb most people stop doing in their twenties, who then spend the next forty years wondering why they are sad."
    ]
  },

  /* ───── O ───── */
  {
    word: "Oblique",
    pos: "adj.",
    defs: [
      "The angle of the ninja. Not the angle of the hero.",
      "How you ask the wrong question on purpose, because the wrong question can be answered today and the right one cannot."
    ],
    see: ["ninja", "proxy"]
  },
  {
    word: "Otium",
    ipa: "OH-tee-um",
    origin: "Latin, 'unhurried leisure'",
    pos: "n.",
    defs: [
      "Roman idea: the highest form of life is not work, not play, but the unhurried leisure in which one cultivates oneself.",
      "I will get there. I am behind schedule."
    ]
  },

  /* ───── P ───── */
  {
    word: "Patience",
    pos: "n.",
    defs: [
      "Not waiting.",
      "Participating in a slower thing."
    ],
    examples: [
      "Hokusai's two cranes have not moved. The painter, in his seventies, is no longer trying to impress anyone."
    ],
    see: ["return"]
  },
  {
    word: "Phuket",
    pos: "n.",
    defs: [
      "An island where I built a smart-bus prototype in forty-five minutes in a coffee shop, on a second-hand laptop, and changed transit for half a million people."
    ]
  },
  {
    word: "Postcard",
    pos: "n.",
    defs: [
      "What I would write to the man I was at twenty-six, if I could.",
      "Probably one sentence: You will be all right. Not because nothing bad happens. Because you become, eventually, a person who does not need nothing-bad to be happening."
    ]
  },
  {
    word: "Practice",
    pos: "n.",
    defs: [
      "What you cannot stop doing even unpaid.",
      "The opposite of a career, which is what you can be paid for."
    ],
    examples: [
      "Pick the second one if you can."
    ]
  },
  {
    word: "Proof",
    pos: "n.",
    defs: [
      "What the system tells you, after you have shipped it.",
      "Not what you guess in advance, however confidently."
    ],
    examples: [
      "Ship. Measure. Then optimise. The order matters."
    ]
  },
  {
    word: "Proxy",
    pos: "n.",
    defs: [
      "What is almost-the-same-thing, free.",
      "The substitute that nobody has thought of yet, before someone packages it as a product."
    ],
    examples: [
      "You wanted ground truth. You got aerosol concentration. You wanted bus demand. You used flight arrivals."
    ],
    see: ["aerosol", "oblique"]
  },
  {
    word: "Purpose",
    pos: "n.",
    defs: [
      "A measurable outcome you have committed to.",
      "Different from intention, which is a feeling."
    ],
    see: ["intention"]
  },

  /* ───── Q ───── */
  {
    word: "Question",
    pos: "n.",
    defs: [
      "Worth more than the answer, almost always.",
      "A good question stays open for a decade. A good answer closes in an afternoon."
    ]
  },
  {
    word: "Quiet",
    pos: "adj.",
    defs: [
      "What everyone says they want, until it arrives.",
      "Then, for about ten minutes, the brain protests. After that, the good things start."
    ]
  },

  /* ───── R ───── */
  {
    word: "Radio",
    pos: "n.",
    defs: [
      "An analog instrument I keep at home, with a microphone in front of it, listening twenty-four hours a day to the Bangkok traffic-accident channel.",
      "Every time the radio reports an accident, an AI transcribes it and writes a pin on a map."
    ],
    examples: [
      "Total cost: the price of a radio."
    ],
    see: ["proxy"]
  },
  {
    word: "Rest",
    pos: "v., n.",
    defs: [
      "What you do not do enough of, until you cannot.",
      "Sleep is part of it. Reading is part of it. Walking with no destination is most of it."
    ]
  },
  {
    word: "Return",
    pos: "v.",
    defs: [
      "What Cézanne did to the mountain, sixty times.",
      "What the plum tree does, every spring, to the same patch of sky."
    ],
    see: ["mountain", "patience"]
  },
  {
    word: "Ritual",
    pos: "n.",
    defs: [
      "An action repeated until it becomes a question your body asks of itself.",
      "I have one, with the flask, every morning. I did not invent it. It is the only one I have not invented for myself."
    ],
    see: ["flask"]
  },
  {
    word: "Rousseau",
    pos: "n.",
    defs: [
      "Jean-Jacques. Author of the Reveries of a Solitary Walker. The man who first phrased the problem of being forced to be free, which I have been trying to answer for ten years."
    ],
    see: ["forced-to-be-free"]
  },

  /* ───── S ───── */
  {
    word: "Sabai",
    ipa: "sa-BAI",
    origin: "Thai, สบาย",
    pos: "adj.",
    defs: [
      "More than 'relaxed.' Closer to: in agreement with the conditions, whatever they are.",
      "What a Thai person says when their day is going well, when they do not want to brag about it."
    ]
  },
  {
    word: "Satellite",
    pos: "n.",
    defs: [
      "What I look at when I want to know what is true, and the people who would normally tell me are not in my contact list.",
      "NASA, JAXA, ESA. Free. Public. Daily."
    ],
    see: ["aerosol", "proxy"]
  },
  {
    word: "Seven kilograms",
    pos: "phrase",
    defs: [
      "The airline's limit on cabin baggage.",
      "Eventually, my life."
    ],
    examples: [
      "The first month I kept reaching for things that were no longer in my life. The second month I stopped reaching. The third month I noticed I had stopped, and the noticing was, itself, a small private joy."
    ],
    see: ["minimalism", "non-ism"]
  },
  {
    word: "Shanghai",
    pos: "n.",
    defs: [
      "The third city. The longest. Ten years.",
      "Where I learned that a city can teach you to be both bigger and smaller — bigger because the city is large, smaller because, in a city of twenty-six million, no single person is the protagonist."
    ],
    see: ["lilong", "huangpu"]
  },
  {
    word: "Slow",
    pos: "adj., v.",
    defs: [
      "Not lazy.",
      "The discipline of looking long enough to see the whole thing."
    ],
    examples: [
      "The world is not going to slow down. So you must."
    ],
    see: ["patience", "notice"]
  },
  {
    word: "Solitude",
    pos: "n.",
    defs: [
      "Not a punishment.",
      "A small territory in which a person may rehearse, in private, the voice they would like to use in public."
    ],
    examples: [
      "Cf. Montaigne, his tower."
    ],
    see: ["alone", "loneliness"]
  },
  {
    word: "Stoic",
    pos: "n., adj.",
    defs: [
      "Not unfeeling. Trained.",
      "What I am trying to be on the days I do not feel like it, and what I usually fail at, in interesting ways."
    ],
    see: ["marcus-aurelius", "apatheia"]
  },
  {
    word: "Substitute",
    pos: "v., n.",
    defs: [
      "What the ninja does instead of fighting.",
      "What public data is, for the data you do not have."
    ],
    see: ["proxy", "ninja"]
  },
  {
    word: "Sweep",
    pos: "v.",
    defs: [
      "What I do every morning to a small floor that does not require sweeping.",
      "Begin at one corner, end at the other, and try to leave behind only what is supposed to be there."
    ],
    examples: [
      "The motion is the same as the motion of writing a sentence."
    ],
    see: ["floor", "discipline"]
  },

  /* ───── T ───── */
  {
    word: "Tea",
    pos: "n.",
    defs: [
      "What my father made in the flask. Lipton. One bag. Hot water.",
      "Not very good. Not the point."
    ],
    see: ["flask", "father"]
  },
  {
    word: "Time",
    pos: "n.",
    defs: [
      "The only thing you cannot earn back.",
      "The only thing you keep giving away for free."
    ]
  },
  {
    word: "Train",
    pos: "n.",
    defs: [
      "My most favourite mode of transport.",
      "Twelve hours, sixteen hours, more — bring it on."
    ],
    examples: [
      "I read Marcus Aurelius on a high-speed train, and the country changes colour while I do."
    ]
  },
  {
    word: "Tunnel",
    pos: "n.",
    defs: [
      "What a hard year is, looked at later.",
      "The mistake, every time, is thinking the tunnel is the destination — and getting angry at the dark."
    ]
  },
  {
    word: "Typewriter",
    pos: "n.",
    defs: [
      "What my father used at the ministry. There were two — Thai script on one, English on the other.",
      "The keys hit harder than I remembered. The typewriter, after all, has no soft option. It commits to every letter."
    ],
    examples: [
      "I thought I could learn from this."
    ],
    see: ["father", "ink"]
  },

  /* ───── U ───── */
  {
    word: "Underline",
    pos: "v.",
    defs: [
      "What I do to about every twentieth sentence in a good book.",
      "The list of forty-four books from the hundred days is, exactly, a list of what I had underlined."
    ]
  },
  {
    word: "Unhurried",
    pos: "adj.",
    defs: [
      "Not slow.",
      "Operating, deliberately, at the speed of the work — not the speed of the calendar."
    ]
  },

  /* ───── V ───── */
  {
    word: "Vermilion",
    pos: "n.",
    defs: [
      "The colour of a Chinese name-seal.",
      "The colour of every accent line in every book I have written, for reasons the maker thinks are obvious and which we are not, here, going to argue with."
    ]
  },
  {
    word: "Voice",
    pos: "n.",
    defs: [
      "What you find, slowly, by writing badly for a long time, alone.",
      "Cf. solitude."
    ],
    see: ["solitude"]
  },

  /* ───── W ───── */
  {
    word: "Wabi-sabi",
    ipa: "WAH-bee SAH-bee",
    origin: "Japanese, 侘寂",
    pos: "n.",
    defs: [
      "The aesthetic of the imperfect, the impermanent, the incomplete.",
      "What an old building has, and a new one is decades away from."
    ],
    see: ["kahn", "kodawari"]
  },
  {
    word: "Wait",
    pos: "v.",
    defs: [
      "What I do not do well.",
      "What the work, eventually, teaches me to do anyway."
    ],
    see: ["patience"]
  },
  {
    word: "Walk",
    pos: "n., v.",
    defs: [
      "Once a week, with no destination, no podcast, no phone in the hand, and no person.",
      "The first ten minutes are uncomfortable. Around minute twenty, the brain gives up and starts to think for itself."
    ]
  },
  {
    word: "Watch",
    pos: "v.",
    defs: [
      "What my mother taught me was its own labour.",
      "I am still learning."
    ],
    see: ["mother", "notice"]
  },
  {
    word: "Weather",
    pos: "n.",
    defs: [
      "What a face earns over time, if its owner does not actively prevent it.",
      "What a Kahn building accepts, and a glass tower spends millions trying to refuse."
    ],
    see: ["kahn", "honest"]
  },
  {
    word: "Window",
    pos: "n.",
    defs: [
      "Where I am at my best. By one of them, at a desk.",
      "And on a long train, which is a moving one."
    ]
  },
  {
    word: "Writing",
    pos: "n.",
    defs: [
      "Something one can only do alone.",
      "A friend who keeps your profound silent words."
    ],
    examples: [
      "Day one of the hundred."
    ],
    see: ["alone", "solitude", "voice"]
  },

  /* ───── X ───── */
  {
    word: "X",
    pos: "n. (absent)",
    defs: [
      "There is no entry under X.",
      "The words I do not have are still being looked for."
    ]
  },

  /* ───── Y ───── */
  {
    word: "Yangtze",
    pos: "n.",
    defs: [
      "The river south of Shanghai. Where I went, in the green country, when I had not written for a month.",
      "The river, doing its long careful sentence, was sufficient."
    ],
    see: ["shanghai", "huangpu"]
  },
  {
    word: "Yes",
    pos: "adv.",
    defs: [
      "What I say to fewer things, every year.",
      "What I get better at meaning, when I do."
    ]
  },

  /* ───── Z ───── */
  {
    word: "Zhuangzi",
    ipa: "JWANG-dzuh",
    origin: "Chinese, 莊子, 4th c. BCE",
    pos: "n.",
    defs: [
      "Daoist philosopher. The one who dreamed he was a butterfly, and was not certain, when he woke, whether he was Zhuangzi who had dreamed of being a butterfly, or a butterfly who was now dreaming of being Zhuangzi.",
      "I have had this dream. I have had it more than once."
    ],
    examples: [
      "The butterfly seems, on most Tuesdays, to be winning."
    ],
    see: ["butterfly"]
  },
  {
    word: "Zen",
    pos: "n.",
    defs: [
      "Not what most people who use the word mean.",
      "Closer to: paying complete attention to the activity in front of you, including the cutting of the bamboo."
    ],
    examples: [
      "Liang Kai's Sixth Patriarch is calmly cutting bamboo at the moment of his enlightenment. Nothing visible has changed. That is the entire teaching."
    ],
    see: ["notice", "kodawari"]
  },

];
