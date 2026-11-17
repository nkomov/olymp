/* Стартовий банк завдань. Усі тексти оригінальні, написані для цього тренажера.
   Поля питання: kind (mcq | tfng | gap), text, options, a (правильна відповідь), n (пояснення для учня). */
window.STARTER_BANK = [
  {
    id: 'starter-r1', vocab: [{"w": "to mend", "t": "лагодити, ремонтувати", "ex": "People had simply forgotten that objects can be mended."}, {"w": "landfill", "t": "сміттєзвалище", "ex": "two tonnes of things that did not end up in landfill"}, {"w": "spare parts", "t": "запчастини", "ex": "usually because spare parts are no longer produced"}, {"w": "to be encouraged to", "t": "отримувати заохочення (до чогось)", "ex": "they are encouraged to hold the screwdriver themselves"}, {"w": "to guarantee", "t": "гарантувати", "ex": "Nothing is guaranteed."}, {"w": "duty", "t": "обов’язок", "ex": "opening every week would turn a pleasure into a duty"}, {"w": "to turn up", "t": "приходити, з’являтися", "ex": "Nineteen people turned up to the first meeting."}], type: 'reading', level: 'A', minutes: 20, title: 'The Repair Café',
    intro: 'Read the article. For questions 1–5 choose the best answer. For questions 6–10 decide if the statement is True, False or Not Given.',
    passage: `On the first Saturday of every month, the community hall in Millbrook smells of coffee and hot solder. Long tables fill up with broken toasters, torn jackets, silent radios and bicycles with bent wheels. This is the Repair Café, where volunteers fix things for free and, more importantly, show their owners how to do it.

The idea came from Hanna Lindqvist, a retired electrical engineer who moved to the town six years ago. "I kept seeing perfectly good things in the rubbish," she says. "A lamp with a loose wire. A chair with one wobbly leg. People had simply forgotten that objects can be mended." She put a notice in the local newspaper asking for helpers, expecting two or three replies. Nineteen people turned up to the first meeting.

Today the café has more than forty regular volunteers, and not all of them are pensioners. Fifteen-year-old Daniel Okafor started coming with his grandmother's sewing machine and never really left. He now runs the "small electronics" table together with a former watchmaker. "At school we learn how a circuit works on paper," Daniel explains. "Here I learn what to do when it doesn't."

The rules are simple. Visitors must stay with their item while it is being repaired, and they are encouraged to hold the screwdriver themselves. Nothing is guaranteed: about a third of the objects cannot be saved, usually because spare parts are no longer produced. Even so, the volunteers weigh everything that leaves the hall in working order. Last year the total came to just over two tonnes of things that did not end up in landfill.

Lindqvist insists, however, that the numbers are not the point. What pleases her most is the change in the way visitors talk. "They arrive saying, 'It's broken, I need a new one.' They leave saying, 'Next time I'll try it myself first.' That sentence is worth more to me than any statistic."

The town council has recently offered the café a permanent room. The volunteers are still deciding whether to accept: some worry that opening every week would turn a pleasure into a duty.`,
    questions: [
      { kind: 'mcq', text: 'What is the main purpose of the Repair Café?', options: ['To sell repaired items at low prices', 'To collect old objects for recycling', 'To mend things and teach their owners how to mend them', 'To train young people for a career in engineering'], a: 2, n: 'Абзац 1: волонтери лагодять речі безкоштовно і показують власникам, як це робити.' },
      { kind: 'mcq', text: "How did the response to Hanna's newspaper notice compare with her expectations?", options: ['It was far greater than she had expected', 'It was smaller than she had hoped', 'It was exactly what she had planned for', 'It came mostly from teenagers'], a: 0, n: 'Абзац 2: вона чекала двох-трьох відповідей, а прийшло дев’ятнадцять людей.' },
      { kind: 'mcq', text: 'What does Daniel suggest about his lessons at school?', options: ['They are too difficult for him', 'He no longer needs them', 'They are less interesting than sewing', 'They explain theory but not how to deal with real faults'], a: 3, n: 'Абзац 3: у школі вчать, як схема працює «на папері», а в кафе він дізнається, що робити, коли вона не працює.' },
      { kind: 'mcq', text: 'Why can about a third of the objects not be repaired?', options: ['The volunteers lack the necessary skills', 'The necessary parts are usually unavailable', 'The owners refuse to wait', 'The objects are too heavy to bring in'], a: 1, n: 'Абзац 4: «spare parts are no longer produced».' },
      { kind: 'mcq', text: 'What matters most to Hanna Lindqvist?', options: ['The weight of the things saved from landfill', 'The growing number of volunteers', "The change in visitors' attitude to broken things", 'The support of the town council'], a: 2, n: 'Абзац 5: цифри — не головне; найбільше її тішить те, як змінюються слова відвідувачів.' },
      { kind: 'tfng', text: 'Hanna Lindqvist was born in Millbrook.', a: 'F', n: 'Абзац 2: вона переїхала до міста шість років тому.' },
      { kind: 'tfng', text: 'Daniel first came to the café with something that belonged to a relative.', a: 'T', n: 'Абзац 3: він прийшов зі швейною машинкою своєї бабусі.' },
      { kind: 'tfng', text: 'Visitors may leave their items at the café and collect them later.', a: 'F', n: 'Абзац 4: відвідувачі мусять залишатися поруч зі своєю річчю під час ремонту.' },
      { kind: 'tfng', text: 'The café is paid for by the town council.', a: 'NG', n: 'У тексті сказано лише, що рада запропонувала постійне приміщення; про фінансування нічого немає.' },
      { kind: 'tfng', text: 'All the volunteers want the café to open every week.', a: 'F', n: 'Абзац 6: дехто побоюється, що щотижнева робота перетворить задоволення на обов’язок.' }
    ]
  },
  {
    id: 'starter-r2', vocab: [{"w": "compartment", "t": "купе", "ex": "The compartment was already half asleep when she found it."}, {"w": "bunk", "t": "спальна полиця", "ex": "a narrow bunk and three strangers"}, {"w": "to reserve something for", "t": "приберігати щось для", "ex": "with the care most people reserve for babies"}, {"w": "bar", "t": "такт (у музиці)", "ex": "a mistake in the eleventh bar"}, {"w": "conductor", "t": "провідник (у потязі)", "ex": "The conductor will offer it in ten minutes."}, {"w": "entrance exam", "t": "вступний іспит", "ex": "the music school entrance exam"}], type: 'reading', level: 'A', minutes: 25, title: 'The Night Train',
    intro: 'Read the story. Questions 1–5: choose the best answer. Questions 6–9: complete each sentence with ONE word from the text. Questions 10–12: True, False or Not Given.',
    passage: `Mira had never travelled alone before, and the night train to Lviv was not the place she would have chosen to begin. Her aunt had promised to meet her at the station at six in the morning; until then there were nine hours, a narrow bunk and three strangers.

The compartment was already half asleep when she found it. An elderly man was reading a newspaper by the light of his phone. A woman of about thirty was arranging a violin case on the upper bunk with the care most people reserve for babies. The third passenger, a boy of Mira's age, had his headphones on and his eyes shut, though his foot was moving in time to something.

Mira sat down, held her rucksack on her knees and tried to look like someone who did this every week. It did not work. "First time?" the old man asked without lowering his paper. She nodded. "Then take the tea," he said. "The conductor will offer it in ten minutes. It is too hot and too sweet, and you will remember it all your life."

He was right about the tea. It arrived in a glass with a metal holder, and it burned her fingers. While she waited for it to cool, the violinist asked where she was going, and Mira heard herself explaining everything: the music school entrance exam, the piece she still could not play without a mistake in the eleventh bar, her mother's opinion that music was a hobby, not a profession.

The violinist listened, then smiled. "Play the eleventh bar slowly a hundred times," she said. "Not to get it right. To stop being afraid of it."

Later, lying in the dark, Mira noticed that the wheels kept a steady rhythm, four beats, again and again. She moved her fingers on the blanket, bar eleven, slowly, in time with the train. Somewhere after midnight she stopped counting. When the conductor knocked at half past five, she realised with surprise that she had slept, and that she was no longer frightened of arriving.`,
    questions: [
      { kind: 'mcq', text: 'How does Mira feel at the beginning of the journey?', options: ['Excited about her independence', 'Annoyed with her aunt', 'Uneasy about travelling on her own', 'Bored by the long trip ahead'], a: 2, n: 'Абзац 1: вона ніколи не подорожувала сама і не обрала б нічний потяг для першого разу.' },
      { kind: 'mcq', text: 'The way the woman handles her violin case suggests that', options: ['she is in a hurry', 'the instrument is very precious to her', 'she is travelling with a baby', 'she is nervous about the other passengers'], a: 1, n: 'Абзац 2: вона кладе футляр з обережністю, з якою зазвичай поводяться з немовлятами.' },
      { kind: 'mcq', text: '"It did not work" (paragraph 3) means that Mira', options: ['could not fall asleep', 'found her rucksack too heavy', 'failed to look like an experienced traveller', "could not get the old man's attention"], a: 2, n: 'Абзац 3: вона намагалася виглядати як людина, що їздить так щотижня, але старий одразу зрозумів, що це вперше.' },
      { kind: 'mcq', text: "The violinist's advice is mainly about", options: ['overcoming fear rather than reaching perfection', 'practising faster than before', 'choosing an easier piece for the exam', "changing her mother's mind"], a: 0, n: 'Абзац 5: грати не для того, щоб вийшло правильно, а щоб перестати боятися.' },
      { kind: 'mcq', text: 'What finally helped Mira to calm down?', options: ['The hot, sweet tea', 'A conversation with the boy', 'Counting the hours until morning', 'Practising the difficult bar in time with the train'], a: 3, n: 'Абзац 6: вона рухала пальцями по ковдрі в ритмі коліс.' },
      { kind: 'gap', text: 'The old man was reading his newspaper by the light of his ______.', a: ['phone'], n: 'Абзац 2.' },
      { kind: 'gap', text: 'The tea was served in a glass with a metal ______.', a: ['holder'], n: 'Абзац 4.' },
      { kind: 'gap', text: "In her mother's opinion, music is only a ______.", a: ['hobby'], n: 'Абзац 4: «a hobby, not a profession».' },
      { kind: 'gap', text: 'At half past five Mira was woken by the ______.', a: ['conductor'], n: 'Абзац 6.' },
      { kind: 'tfng', text: 'The boy was listening to something when Mira came in.', a: 'T', n: 'Абзац 2: він був у навушниках, а його нога рухалася в такт.' },
      { kind: 'tfng', text: 'The violinist was on her way to give a concert.', a: 'NG', n: 'Мета її поїздки в тексті не згадується.' },
      { kind: 'tfng', text: 'Mira stayed awake for the whole night.', a: 'F', n: 'Абзац 6: вона з подивом зрозуміла, що спала.' }
    ]
  },
  {
    id: 'starter-r3', vocab: [{"w": "bargain", "t": "вигідна угода", "ex": "what an extraordinary bargain it offers"}, {"w": "shortcut", "t": "коротший шлях", "ex": "can afterwards sketch the route and suggest shortcuts"}, {"w": "to sketch", "t": "накреслити, зробити ескіз", "ex": "can afterwards sketch the route"}, {"w": "to acquire", "t": "набувати, здобувати", "ex": "a skill that is not practised is not acquired"}, {"w": "to inhabit", "t": "жити, мешкати (в)", "ex": "a city one passes through rather than inhabits"}, {"w": "on purpose", "t": "навмисно", "ex": "for taking the long way home on purpose"}, {"w": "to consult", "t": "звертатися (до джерела), радитися", "ex": "an internal model of space that can be consulted"}], type: 'reading', level: 'B', minutes: 30, title: 'Arriving Without Travelling',
    intro: 'Read the essay. Questions 1–6: choose the best answer. Questions 7–10: True, False or Not Given. Questions 11–13: complete each sentence with ONE word from the text.',
    passage: `Ask anyone under thirty how to get to a place they visit every week and there is a fair chance they will reach for their phone. Satellite navigation has become so ordinary that we rarely notice what an extraordinary bargain it offers: perfect directions in exchange for never needing to know where we are.

For most of human history, finding one's way was a skill that had to be earned. Polynesian sailors read the swell of the ocean; desert traders memorised the order of the stars. Even the modest task of crossing an unfamiliar city demanded attention. One had to notice a church tower, remember a turning, build what psychologists call a cognitive map, an internal model of space that can be consulted, corrected and extended.

Following a blue dot requires none of this. The instructions arrive one at a time, each cancelling the need to remember the last. Researchers who compare the two styles of travel tend to find the same pattern: people who navigate by themselves can afterwards sketch the route and suggest shortcuts, while those who obey a device often cannot say whether they went north or south. They have arrived without having travelled.

It would be easy to turn this into a familiar complaint about technology making us stupid, and some commentators have done exactly that. The evidence, however, is more modest than the headlines. Nobody has shown that using an app damages the brain. What the studies indicate is narrower: a skill that is not practised is not acquired. The same could be said of mental arithmetic after the calculator, or handwriting after the keyboard, and few of us lie awake regretting long division.

Yet navigation may differ from long division in one respect. A sense of place is bound up with memory and with belonging. To know a neighbourhood is to know where the bakery used to be, which street floods in spring, where one first rode a bicycle. A city experienced as a sequence of instructions is a city one passes through rather than inhabits.

None of this is an argument for throwing the phone into the river. It is an argument for occasionally leaving it in the pocket: for taking the long way home on purpose, for getting slightly and safely lost. Getting lost, after all, was never merely a failure of navigation. It was also the oldest method of discovering something one had not been looking for.`,
    questions: [
      { kind: 'mcq', text: 'By calling satellite navigation "an extraordinary bargain", the writer suggests that', options: ['it is much cheaper than people realise', 'we gain accurate guidance but lose awareness of where we are', 'it has made travelling faster than ever before', 'young people use it more wisely than older people'], a: 1, n: 'Абзац 1: ідеальні вказівки в обмін на те, що нам не потрібно знати, де ми.' },
      { kind: 'mcq', text: 'Polynesian sailors and desert traders are mentioned in order to', options: ['show that ancient travel was dangerous', 'prove that people used to have better memories', 'compare sea travel with travel on land', 'illustrate that finding the way once required learned expertise'], a: 3, n: 'Абзац 2: орієнтування було вмінням, яке треба було здобути.' },
      { kind: 'mcq', text: '"They have arrived without having travelled" (paragraph 3) implies that these people', options: ['reached their destination but learned nothing about the route', 'did not enjoy the journey', 'travelled much faster than the others', 'were not sure they had reached the right place'], a: 0, n: 'Абзац 3: ті, хто слухався пристрою, часто не можуть сказати, чи їхали на північ, чи на південь.' },
      { kind: 'mcq', text: 'What is the writer\'s attitude to the claim that technology is "making us stupid"?', options: ['Full agreement', 'Complete lack of interest', 'It goes further than the evidence allows', 'It applies to navigation but not to arithmetic'], a: 2, n: 'Абзац 4: докази скромніші за заголовки; ніхто не довів, що застосунок шкодить мозку.' },
      { kind: 'mcq', text: 'According to the writer, navigation may differ from long division because it', options: ['is more difficult to learn', 'is connected with personal memory and a sense of belonging', 'is still taught at school', 'cannot be done by a machine'], a: 1, n: 'Абзац 5: відчуття місця пов’язане з пам’яттю та приналежністю.' },
      { kind: 'mcq', text: 'What does the writer recommend in the final paragraph?', options: ['Giving up navigation apps completely', 'Using paper maps instead of phones', 'Travelling only along familiar routes', 'Sometimes choosing to find the way without the device'], a: 3, n: 'Абзац 6: не викидати телефон, а іноді залишати його в кишені.' },
      { kind: 'tfng', text: 'Building a cognitive map happens without any effort.', a: 'F', n: 'Абзац 2: навіть перехід незнайомим містом «demanded attention».' },
      { kind: 'tfng', text: 'Studies have proved that navigation apps cause damage to the brain.', a: 'F', n: 'Абзац 4: «Nobody has shown that using an app damages the brain».' },
      { kind: 'tfng', text: 'Most people are upset about no longer doing arithmetic in their heads.', a: 'F', n: 'Абзац 4: «few of us lie awake regretting long division».' },
      { kind: 'tfng', text: 'People under thirty get lost more often than older people.', a: 'NG', n: 'У тексті не порівнюється, хто частіше губиться.' },
      { kind: 'gap', text: 'A cognitive map is described as an internal ______ of space.', a: ['model'], n: 'Абзац 2.' },
      { kind: 'gap', text: 'Because instructions come one at a time, there is no need to ______ the previous one.', a: ['remember'], n: 'Абзац 3: «each cancelling the need to remember the last».' },
      { kind: 'gap', text: 'Getting lost is called the oldest ______ of discovering something unexpected.', a: ['method'], n: 'Абзац 6.' }
    ]
  },
  {
    id: 'starter-r4', vocab: [{"w": "anecdote", "t": "історія з життя, випадок", "ex": "such remarks were treated as charming anecdotes"}, {"w": "to dismiss", "t": "відкидати, не брати до уваги", "ex": "the results are harder to dismiss"}, {"w": "to be swayed by", "t": "піддаватися впливу", "ex": "less swayed by the way a choice is worded"}, {"w": "consequences", "t": "наслідки", "ex": "judge an action by its consequences"}, {"w": "disgust", "t": "огида", "ex": "the feeling of disgust it provokes"}, {"w": "lullaby", "t": "колискова", "ex": "in the middle of quarrels, lullabies and scoldings"}, {"w": "mutually exclusive", "t": "взаємовиключні", "ex": "The two explanations are not mutually exclusive."}], type: 'reading', level: 'B', minutes: 30, title: 'The Second-Language Self',
    intro: 'Read the article. Questions 1–6: choose the best answer. Questions 7–10: True, False or Not Given. Questions 11–13: complete each sentence with ONE word from the text.',
    passage: `Bilingual people often report a curious sensation: they feel like slightly different persons depending on the language they are speaking. One is bolder in English, more polite in Japanese, funnier in the language of one's childhood. For a long time such remarks were treated as charming anecdotes. In recent decades, though, psychologists have begun to test them, and the results are harder to dismiss.

In a typical experiment, volunteers are given a moral or financial dilemma, sometimes in their mother tongue and sometimes in a language learned later at school. The problems are identical; only the language changes. Yet the answers do not stay the same. People reasoning in a foreign language tend to be less swayed by the way a choice is worded, less frightened of small risks, and more willing to judge an action by its consequences rather than by the feeling of disgust it provokes.

The most widely accepted explanation is emotional distance. A first language is learned in the kitchen and the playground, in the middle of quarrels, lullabies and scoldings; its words arrive loaded with feeling. A second language is usually acquired in a classroom, where the worst thing a verb can do is appear in a test. Swear words learned from a textbook do not make the heart beat faster. Thinking in such a language, the argument goes, is a little like thinking with gloves on: the grip is less sure, but the hands stay cool.

A rival account points instead to effort. Operating in a weaker language is slow and demanding, and that very slowness may interrupt the quick, intuitive responses on which we normally rely. On this view the foreign language does not cool the emotions so much as force the mind to change gear.

The two explanations are not mutually exclusive, and neither has been conclusively proved. Results vary with how well people know the language, how old they were when they learned it, and how similar it is to their own. Some attempts to repeat the best-known experiments have produced weaker effects than the originals.

Still, the practical implications are intriguing. Diplomats, doctors and judges increasingly work in languages that are not their own. If the tongue we think in shapes the decisions we reach, then a negotiation conducted in a second language is not simply the same negotiation in translation. It might be a calmer one. Whether it is also a wiser one is a question the laboratories have yet to settle.`,
    questions: [
      { kind: 'mcq', text: "In the past, bilingual people's remarks about feeling different were regarded as", options: ['reliable scientific data', 'pleasant stories of no scientific value', 'signs of a psychological problem', 'evidence of poor language skills'], a: 1, n: 'Абзац 1: «treated as charming anecdotes».' },
      { kind: 'mcq', text: 'In the experiments described in paragraph 2, what differs between the two conditions?', options: ['The difficulty of the dilemma', 'The age of the volunteers', 'Only the language in which the problem is presented', 'The amount of time allowed'], a: 2, n: 'Абзац 2: «The problems are identical; only the language changes».' },
      { kind: 'mcq', text: 'The image of "thinking with gloves on" is used to show that a second language', options: ['makes thinking impossible', 'protects speakers from making mistakes', 'is mostly used in cold, formal situations', 'reduces emotional involvement at some cost to precision'], a: 3, n: 'Абзац 3: хватка менш упевнена, зате руки лишаються холодними.' },
      { kind: 'mcq', text: 'The "rival account" explains the effect by', options: ['the mental effort of using a weaker language, which slows intuitive reactions', 'the emotional memories attached to childhood words', 'the similarity between the two languages', 'the influence of classroom teaching methods'], a: 0, n: 'Абзац 4: повільність перериває швидкі інтуїтивні реакції.' },
      { kind: 'mcq', text: 'Which statement best reflects the writer\'s view of the research in paragraph 5?', options: ['It has been shown to be mistaken', 'It is interesting but not yet conclusive', 'It is complete and needs no further work', 'It applies only to people who learned languages as children'], a: 1, n: 'Абзац 5: жодне пояснення не доведено остаточно, а повторні експерименти дали слабші ефекти.' },
      { kind: 'mcq', text: 'The final sentence suggests that', options: ['negotiations should always be held in a second language', 'laboratories are not interested in the question', 'calmer decisions are certainly better decisions', 'it is still unknown whether such decisions are better'], a: 3, n: 'Абзац 6: чи є такі рішення мудрішими — питання, на яке лабораторії ще не відповіли.' },
      { kind: 'tfng', text: 'People reasoning in a foreign language are more influenced by how a choice is phrased.', a: 'F', n: 'Абзац 2: вони «less swayed by the way a choice is worded».' },
      { kind: 'tfng', text: 'The two explanations of the effect cannot both be true.', a: 'F', n: 'Абзац 5: «not mutually exclusive».' },
      { kind: 'tfng', text: 'The effect is stronger in people who learned their second language as adults.', a: 'NG', n: 'Абзац 5 каже лише, що результати залежать від віку, але не уточнює, як саме.' },
      { kind: 'tfng', text: 'Every repetition of the famous experiments has confirmed the original results.', a: 'F', n: 'Абзац 5: деякі повторення дали слабші ефекти.' },
      { kind: 'gap', text: 'The most widely accepted explanation for the effect is emotional ______.', a: ['distance'], n: 'Абзац 3.' },
      { kind: 'gap', text: 'A second language is usually acquired in a ______.', a: ['classroom'], n: 'Абзац 3.' },
      { kind: 'gap', text: 'According to the second theory, a foreign language forces the mind to change ______.', a: ['gear'], n: 'Абзац 4.' }
    ]
  },
  {
    id: 'starter-u1', type: 'use', level: 'A', minutes: 15, title: 'Why We Yawn',
    intro: 'Questions 1–8: read the text and think of ONE word which best fits each gap. Questions 9–14: use the word in capitals to form a word that fits the gap.',
    passage: `Everybody yawns, but scientists still cannot agree (1) ______ why we do it. For a long time, people believed that yawning brought more oxygen (2) ______ the brain. However, experiments have shown that breathing extra oxygen does not make people yawn any (3) ______ often.

A more recent theory suggests that yawning helps to cool the brain down. When the brain gets too warm, it works less efficiently, (4) ______ a deep breath of cooler air may help it to stay alert. This may be the reason (5) ______ we often yawn when we are tired or bored.

Yawning is also contagious. Simply reading about it can make you yawn, and you might (6) ______ be yawning right now! Interestingly, people are more likely to "catch" a yawn from a friend (7) ______ from a stranger, which suggests that empathy plays a part. Even dogs can catch yawns (8) ______ their owners.`,
    vocab: [
      {w:'to yawn', t:'позіхати', ex:'Everybody yawns, but scientists still cannot agree why we do it.'},
      {w:'contagious', t:'заразний', ex:'Yawning is also contagious.'},
      {w:'alert', t:'пильний, бадьорий', ex:'may help it to stay alert'},
      {w:'empathy', t:'емпатія, співпереживання', ex:'which suggests that empathy plays a part'},
      {w:'efficiently', t:'ефективно', ex:'it works less efficiently'}
    ],
    questions: [
      { kind: 'gap', text: 'Gap (1)', a: ['on', 'about'], n: 'agree on / agree about — дійти згоди щодо чогось.' },
      { kind: 'gap', text: 'Gap (2)', a: ['to', 'into'], n: 'bring something to the brain — доставляти до мозку.' },
      { kind: 'gap', text: 'Gap (3)', a: ['more'], n: 'not … any more often — не частіше.' },
      { kind: 'gap', text: 'Gap (4)', a: ['so', 'and'], n: 'Сполучник наслідку: so (тому).' },
      { kind: 'gap', text: 'Gap (5)', a: ['why', 'that'], n: 'the reason why — причина, чому.' },
      { kind: 'gap', text: 'Gap (6)', a: ['even', 'well', 'already'], n: 'you might even be yawning — можливо, ти навіть позіхаєш.' },
      { kind: 'gap', text: 'Gap (7)', a: ['than'], n: 'more likely … than — порівняння.' },
      { kind: 'gap', text: 'Gap (8)', a: ['from'], n: 'catch something from somebody — «підхопити» від когось.' },
      { kind: 'wf', text: 'Yawning is a completely ______ reaction that we cannot control.', word: 'VOLUNTARY', a: ['involuntary'], n: 'Заперечний префікс in-: involuntary — мимовільний.' },
      { kind: 'wf', text: 'Scientists have carried out several ______ into why animals yawn.', word: 'INVESTIGATE', a: ['investigations'], n: 'Після several потрібен іменник у множині.' },
      { kind: 'wf', text: 'The results of the study were rather ______.', word: 'SURPRISE', a: ['surprising'], n: 'Прикметник на -ing описує те, що викликає почуття.' },
      { kind: 'wf', text: 'Lack of sleep can seriously affect your ______.', word: 'CONCENTRATE', a: ['concentration'], n: 'Після your потрібен іменник.' },
      { kind: 'wf', text: 'Many people consider yawning in public ______.', word: 'POLITE', a: ['impolite'], n: 'Заперечний префікс im- перед p: impolite.' },
      { kind: 'wf', text: 'Children often yawn when they feel ______.', word: 'BORE', a: ['bored'], n: 'Прикметник на -ed описує почуття людини.' }
    ]
  },
  {
    id: 'starter-u2', type: 'use', level: 'B', minutes: 15, title: 'Key Word Transformations',
    intro: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. Use between three and six words, including the word given.',
    passage: '',
    questions: [
      { kind: 'kwt', text: "I haven't seen Tom for three years.", word: 'LAST', stem: 'I ______ three years ago.', a: ['last saw Tom', 'last saw him'], n: 'Present Perfect з for → Past Simple з ago: last saw.' },
      { kind: 'kwt', text: "It wasn't necessary for you to bring food.", word: 'NEED', stem: 'You ______ food.', a: ["didn't need to bring", 'did not need to bring', "needn't have brought", 'need not have brought'], n: "needn't have done / didn't need to do — не було потреби." },
      { kind: 'kwt', text: '"I\'m sorry I broke your phone," said Mark.', word: 'APOLOGISED', stem: 'Mark ______ my phone.', a: ['apologised for breaking', 'apologised for having broken'], n: 'apologise for + -ing.' },
      { kind: 'kwt', text: 'They say the castle was built in the 12th century.', word: 'SAID', stem: 'The castle ______ in the 12th century.', a: ['is said to have been built'], n: 'Безособовий пасив: is said to have been done (дія в минулому).' },
      { kind: 'kwt', text: 'I regret not studying harder for the exam.', word: 'WISH', stem: 'I ______ harder for the exam.', a: ['wish I had studied', "wish I'd studied"], n: 'Жаль про минуле: wish + Past Perfect.' },
      { kind: 'kwt', text: "It's possible that she missed the train.", word: 'HAVE', stem: 'She ______ the train.', a: ['may have missed', 'might have missed', 'could have missed'], n: 'Припущення про минуле: may/might/could have + V3.' },
      { kind: 'kwt', text: 'He started playing the piano ten years ago.', word: 'BEEN', stem: 'He ______ the piano for ten years.', a: ['has been playing', "'s been playing"], n: 'Present Perfect Continuous з for.' },
      { kind: 'kwt', text: 'The film was so boring that we left early.', word: 'SUCH', stem: 'It ______ that we left early.', a: ['was such a boring film'], n: 'so + прикметник → such a + прикметник + іменник.' }
    ]
  },
  {
    id: 'starter-w1', type: 'writing', level: 'A', minutes: 40, title: 'Opinion essay: part-time jobs', genre: 'essay', formal: true,
    minWords: 150, maxWords: 200, minParagraphs: 4,
    prompt: `Some people believe that teenagers should have a part-time job while they are still at school.

Do you agree? Write an essay giving your opinion. Support it with reasons and examples.

Write 150–200 words.`
  },
  {
    id: 'starter-w2', type: 'writing', level: 'A', minutes: 40, title: 'Letter of application: volunteering camp', genre: 'letter', formal: true,
    minWords: 150, maxWords: 200, minParagraphs: 4,
    prompt: `You have seen an advertisement for an international summer volunteering camp for students aged 15–18.

Write a letter of application to the organisers. In your letter:
• explain why you want to take part;
• describe your relevant skills and experience;
• ask two questions about the programme.

Write 150–200 words. Do not write any addresses.`
  },
  {
    id: 'starter-w3', type: 'writing', level: 'B', minutes: 50, title: 'Discursive essay: translation apps', genre: 'essay', formal: true,
    minWords: 220, maxWords: 270, minParagraphs: 4,
    prompt: `"Translation apps will soon make learning foreign languages unnecessary."

Write an essay discussing this statement. Consider arguments for and against it and give your own opinion.

Write 220–270 words.`
  },
  {
    id: 'starter-w4', type: 'writing', level: 'B', minutes: 50, title: "Article: the skill schools don't teach", genre: 'article', formal: false,
    minWords: 220, maxWords: 270, minParagraphs: 4,
    prompt: `An international students' magazine has invited readers to send in articles on the following topic:

"A skill every school-leaver should have — and why schools don't teach it"

Write your article. Give it a title, explain your choice of skill and suggest how it could be taught.

Write 220–270 words.`
  }
];

/* Зразки робіт для демо-режиму. */
window.DEMO_ESSAYS = {
  strong: `Nowadays a lot of teenagers think about getting a part-time job. In my opinion, it is a good idea, but only if the job doesn't take too much time.

Firstly, a job teaches responsibility. When you have a job, you must come on time and do what you promised. For example, my cousin works in a bookshop on Saturdays and she has become much more organised.

Secondly, teenagers can earn their own money. It means that they don't need to ask their parents for everything and they learn how to plan a budget. Moreover, they understand that money is not easy to get.

However, school must remain the most important thing. If a student works every evening, he will be tired and his marks will go down. That is why I think that a few hours at the weekend is enough.

To sum up, I believe that a part-time job is useful for teenagers because it gives them experience and independence, but it should not become more important than studying.`,
  weak: `I think teenagers should have part-time job. It is good for them.

First, they get money. They can buy things what they want and dont ask parents. My friend works in cafe and he is happy because he has money for new phone.

Second, they get experience. When they finish school they will know how to work with people and this is important for future.

But some people say that job is bad for school. i am not agree with this. If you plan your time, you can do homework and work too.

So, I think part-time job is good idea for teenagers.`
};
