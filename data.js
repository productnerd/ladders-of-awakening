/* Ladders of Awakening: the data.
   Bands run 1 (bottom) to 9 (top). Each phase:
   [title, description, from band, to band, own term (shown under the title), more on the term (shown on hover)].
   Column: g family, k kind, d date, n name, f framework, o its own title, s source, l language of the terms.
   Heights are a reading for comparison: phases at one height are alike in kind. */

var BANDS = [
  null,
  ['Autopilot', 'Life run by appetite, habit and other people’s opinions, without examining it.'],
  ['The question', 'Restlessness or wonder breaks the routine: a question that will not go away.'],
  ['Setting out', 'A first commitment: a teacher, a discipline, a direction of one’s own.'],
  ['Self-mastery', 'Steady work on desires, habits and character.'],
  ['Stillness', 'Attention turns inward and settles; practice deepens.'],
  ['Insight', 'Truth seen directly rather than believed, often first in glimpses.'],
  ['Letting go', 'The separate, defended self loosens or breaks: the dark night, emptiness.'],
  ['Union', 'Oneness with the whole: God, the One, the Dao, Nature or pure awareness.'],
  ['Completion', 'The path fulfilled: for most, freedom lived in the world; for some, final release.']
];

var FAMILIES = [
  ['greek', 'Greek & Roman'],
  ['abrahamic', 'Abrahamic & Persian'],
  ['indian', 'Indian'],
  ['chinese', 'Chinese'],
  ['japanese', 'Japanese'],
  ['modern', 'Modern West']
];

var KINDS = [
  ['rel', 'Religious'],
  ['mys', 'Mystical'],
  ['phil', 'Philosophical'],
  ['psy', 'Psychological']
];

var COLS = [
  /* ---------------- Greek & Roman ---------------- */
  { g: 'greek', k: 'rel', d: 'c. 400 BCE', n: 'Orphic', f: 'The gold tablets', l: 'grc',
    s: 'Grave tablets from Hipponion, Petelia, Thurii and Pelinna: the soul’s road after death',
    p: [
      ['The first spring', 'By the white cypress the souls of the dead stop to drink; the initiate is told to pass it by.', 1, 1, 'λευκὴ κυπάρισσος', 'the white cypress that marks the spring; later readers call it Λήθη, forgetting'],
      ['Parched with thirst', 'The soul cries that it is dry and perishing: the longing that drives it on.', 2, 2, 'δίψα', '“δίψῃ δ’ εἰμὶ αὖος καὶ ἀπόλλυμαι”: I am dry with thirst and perishing'],
      ['Child of Earth and starry Heaven', 'Before the guardians it says who it truly is: earthly in body, heavenly by race.', 5, 5, 'Γῆς παῖς εἰμι καὶ Οὐρανοῦ ἀστερόεντος'],
      ['The lake of Memory', 'It drinks from the lake of Mnemosyne and remembers where it came from.', 6, 6, 'Μνημοσύνης λίμνη'],
      ['Out of the grievous circle', 'Free of the wheel of births: “I have flown out of the heavy, grievous circle.”', 7, 7, 'κύκλος βαρυπενθής'],
      ['A god instead of a mortal', '“Happy and blessed one, you shall be a god instead of a mortal.”', 8, 9, 'θεὸς δ’ ἔσῃ ἀντὶ βροτοῖο']
    ] },
  { g: 'greek', k: 'phil', d: 'c. 530 BCE', n: 'Pythagorean', f: 'The grades of the school', l: 'grc',
    s: 'Iamblichus, Life of Pythagoras; Aulus Gellius, Attic Nights 1.9 (both written centuries later)',
    p: [
      ['Tested at the door', 'Pythagoras read a candidate’s face, gait and laughter before letting them in.', 2, 2, 'φυσιογνωμονία', 'reading character from the face and body'],
      ['The hearers', 'At least two years of silent listening, says Gellius; five, says Iamblichus, who adds a curtain.', 3, 3, 'ἀκουστικοί', 'Gellius’s name; the silence was ἐχεμυθία. Iamblichus’s ἀκουσματικοί are a separate group'],
      ['The learners', 'Admitted to number, geometry, music and astronomy: studies that purify the soul.', 4, 5, 'μαθηματικοί'],
      ['Students of nature', 'Those who went on to first principles and the order of the cosmos.', 6, 6, 'φυσικοί'],
      ['Follow the god', 'The aim of the whole life: to become like the divine.', 8, 9, 'ἕπου θεῷ']
    ] },
  { g: 'greek', k: 'phil', d: 'c. 375 BCE', n: 'Plato', f: 'The Cave', l: 'grc',
    o: 'τὸ σπήλαιον', s: 'Republic VII, 514a–521b',
    p: [
      ['Chained before shadows', 'Prisoners from childhood take the shadows on the wall for all there is.', 1, 1, 'σκιαί', 'on the Divided Line, εἰκασία: thinking in images'],
      ['Turned towards the fire', 'One is freed and turned round, dazzled and confused by the fire.', 2, 2, 'περιαγωγή', 'the turning round of the whole soul (518d)'],
      ['The steep ascent', 'Dragged up the rough road, in pain and resisting.', 3, 4, 'τραχεῖα ἀνάβασις', '“the rough and steep ascent” (515e)'],
      ['Shadows and reflections', 'Outside, the eyes adjust: first shadows, then reflections in water.', 5, 5, 'τὰ ἐν τοῖς ὕδασι εἴδωλα'],
      ['Things, moon and stars', 'Then the things themselves, and the sky at night.', 6, 6, 'αὐτά', 'the things themselves; then ἄστρα καὶ σελήνη, stars and moon'],
      ['The sun itself', 'At last the sun, seen in its own place: the cause of all that is seen.', 8, 8, 'ὁ ἥλιος', 'the image of the Good, ἡ τοῦ ἀγαθοῦ ἰδέα (517b)'],
      ['Back down into the cave', 'The freed one goes back down to free the others, at the risk of their scorn.', 9, 9, 'καταβατέον', '“you must go down” (520c)']
    ] },
  { g: 'greek', k: 'phil', d: 'c. 380 BCE', n: 'Plato', f: 'Diotima’s ladder', l: 'grc',
    s: 'Symposium 210a–212a',
    p: [
      ['One beautiful body', 'Love begins with one person: eros is first woken by a single beautiful body.', 2, 2, 'ἓν σῶμα καλόν'],
      ['All beautiful bodies', 'The lover sees the same beauty in every body and holds the one more lightly.', 3, 3, 'πάντα τὰ καλὰ σώματα'],
      ['Beautiful souls', 'Beauty of soul is prized above beauty of body.', 4, 4, 'τὸ ἐν ταῖς ψυχαῖς κάλλος'],
      ['Laws and ways of life', 'The beauty of customs and practices, seen as one family.', 5, 5, 'ἐπιτηδεύματα καὶ νόμοι'],
      ['Knowledge', 'The great sea of beauty in learning, where many fine thoughts are born.', 6, 6, 'ἐπιστῆμαι', '“τὸ πολὺ πέλαγος τοῦ καλοῦ”, the great sea of the beautiful'],
      ['Beauty itself', 'Suddenly the lover sees Beauty itself, eternal and unmixed, and gives birth to true virtue.', 8, 9, 'αὐτὸ τὸ καλόν', 'seen ἐξαίφνης, suddenly (210e)']
    ] },
  { g: 'greek', k: 'phil', d: 'c. 330 BCE', n: 'Aristotle', f: 'The three lives', l: 'grc',
    s: 'Nicomachean Ethics I.5 and X.7–8',
    p: [
      ['The life of pleasure', 'Living for enjoyment: a life fit for grazing animals, Aristotle says.', 1, 1, 'βίος ἀπολαυστικός'],
      ['The life of honour', 'The active life of the citizen, aiming at honour and practical virtue.', 3, 4, 'βίος πολιτικός'],
      ['The life of contemplation', 'The happiest and most self-sufficient life, lived by “something divine in us”.', 6, 6, 'βίος θεωρητικός', 'θεωρία, contemplation']
    ] },
  { g: 'greek', k: 'phil', d: 'c. 65 CE', n: 'Stoic', f: 'The ranks of progress',
    o: 'proficientes · προκόπτοντες', s: 'Seneca, Letter 75; with Epictetus',
    p: [
      ['The fool', 'Everyone not yet wise: ruled by false judgements and the passions they breed.', 1, 1, 'stultus · φαῦλος'],
      ['Third rank', 'Free of many great vices but not all: past greed, perhaps, but still prone to anger.', 3, 3, 'tertium genus', 'Seneca’s third class of those making progress, proficientes'],
      ['Second rank', 'The worst passions laid aside, but the ground is not yet firm: one can still slip back.', 4, 5, 'secundum genus'],
      ['First rank', 'Close to wisdom and past falling back, though not yet sure of it.', 6, 7, 'primum genus'],
      ['The sage', 'Judgement in full agreement with nature and reason: free, unshaken, at one with the logos.', 8, 9, 'sapiens · σοφός']
    ] },
  { g: 'greek', k: 'mys', d: '3rd c. CE', n: 'Neoplatonic', f: 'The grades of virtue', l: 'grc',
    s: 'Plotinus, Enneads I.2 and VI.9; Porphyry, Sentences 32',
    p: [
      ['Civic virtues', 'Reason puts measure into the passions: virtue in life among others.', 3, 3, 'πολιτικαὶ ἀρεταί'],
      ['Purifying virtues', 'The soul withdraws from the body’s pull and gathers itself.', 4, 4, 'καθαρτικαὶ ἀρεταί'],
      ['Contemplative virtues', 'The purified soul turns to Mind and sees the Forms in it.', 5, 6, 'θεωρητικαὶ ἀρεταί'],
      ['Exemplary virtues', 'The virtues as they are in Mind itself: the soul no longer has virtue, it becomes the model.', 7, 7, 'παραδειγματικαὶ ἀρεταί'],
      ['Union with the One', 'Beyond thought, the soul becomes one with the One: “the flight of the alone to the alone”.', 8, 9, 'ἕνωσις', '“φυγὴ μόνου πρὸς μόνον” (Enneads VI.9.11)']
    ] },
  { g: 'greek', k: 'mys', d: 'c. 300 CE onwards', n: 'Alchemy', f: 'The Great Work',
    o: 'magnum opus', s: 'From Zosimos of Panopolis to the Renaissance adepts; read as inner work by Jung',
    p: [
      ['The raw matter', 'Chaotic, despised stuff from which the work begins.', 1, 1, 'prima materia'],
      ['Blackening', 'Dissolution and rot: the old form breaks down in the dark.', 3, 4, 'nigredo · μελάνωσις'],
      ['Whitening', 'Washing and purification: the matter turns silver-white, lunar and clear.', 5, 5, 'albedo · λεύκωσις'],
      ['Yellowing', 'The dawn of a solar light in the matter.', 6, 6, 'citrinitas · ξάνθωσις'],
      ['Reddening', 'The union of opposites, sun and moon: the philosophers’ stone.', 8, 9, 'rubedo · ἴωσις', 'the stone is the lapis philosophorum']
    ] },

  /* ---------------- Abrahamic & Persian ---------------- */
  { g: 'abrahamic', k: 'rel', d: 'Avestan; Arda Viraf c. 900 CE', n: 'Zoroastrian', f: 'The soul’s ascent',
    s: 'Hadokht Nask (the four steps); the Book of Arda Viraf (the star, moon and sun stations): the soul’s road after death',
    p: [
      ['Meeting one’s conscience', 'At dawn after the third night the soul meets a radiant maiden: its own conscience, made lovely by its good thoughts, words and deeds.', 3, 3, 'daēnā', 'Avestan; Middle Persian dēn'],
      ['The Chinvat Bridge', 'The bridge traditionally called the separator’s: broad for the righteous, a blade’s edge for the wicked.', 4, 4, 'činuuatō pərətu', 'Avestan; Middle Persian Činwad puhl'],
      ['Station of the stars', 'First step: the place of good thoughts.', 5, 5, 'humata', 'good thought; Middle Persian humat'],
      ['Station of the moon', 'Second step: the place of good words.', 6, 6, 'hūxta', 'good word; Middle Persian hūxt'],
      ['Station of the sun', 'Third step: the place of good deeds.', 7, 7, 'hvaršta', 'good deed; Middle Persian huwaršt'],
      ['The House of Song', 'Fourth step: the Endless Lights, in the presence of Ahura Mazda.', 8, 9, 'Garō dəmāna', 'the Endless Lights are anaγra raocå']
    ] },
  { g: 'abrahamic', k: 'rel', d: '1740', n: 'Jewish', f: 'The Path of the Just',
    o: 'Mesillat Yesharim · מסילת ישרים', s: 'Moshe Chaim Luzzatto (Ramchal), after the ladder of Rabbi Pinchas ben Yair',
    p: [
      ['Watchfulness', 'Waking up to one’s own deeds and asking whether they are good.', 2, 2, 'zehirut', 'זהירות'],
      ['Zeal', 'Eagerness to do good, overcoming heaviness and delay.', 3, 3, 'zerizut', 'זריזות'],
      ['Cleanliness', 'Clearing even small faults, and the excuses made for them.', 4, 4, 'nekiut', 'נקיות'],
      ['Separation', 'Holding back from what is allowed but not needed.', 4, 4, 'perishut', 'פרישות'],
      ['Purity', 'Purifying the heart’s motives, so that even needs are met for heaven’s sake.', 5, 5, 'taharah', 'טהרה'],
      ['Piety', 'Going beyond what the law asks, out of love.', 5, 5, 'chassidut', 'חסידות'],
      ['Humility', 'Holding oneself lightly, without self-importance.', 6, 6, 'anavah', 'ענוה'],
      ['Fear of sin', 'Awe before God’s majesty, always careful not to mar it.', 6, 6, 'yirat chet', 'יראת חטא'],
      ['Holiness', 'Cleaving to God so fully that even ordinary acts become holy; in the end, a gift.', 8, 9, 'kedushah', 'קדושה']
    ] },
  { g: 'abrahamic', k: 'rel', d: 'c. 500 CE', n: 'Christian', f: 'The three ways', l: 'grc',
    s: 'Pseudo-Dionysius the Areopagite; standard teaching in the Orthodox and Catholic churches',
    p: [
      ['Purification', 'Repentance, ascetic struggle and the stilling of the passions.', 3, 4, 'κάθαρσις', 'Latin via purgativa'],
      ['Illumination', 'The cleansed mind is lit by God; contemplation of creation and Scripture.', 5, 6, 'φωτισμός', 'Latin via illuminativa'],
      ['Deification', 'Union with God, becoming by grace what God is by nature.', 8, 9, 'τελείωσις', 'perfection; its goal is θέωσις, deification; Latin via unitiva']
    ] },
  { g: 'abrahamic', k: 'mys', d: '1577', n: 'Christian', f: 'Teresa’s Interior Castle', l: 'es',
    o: 'Las moradas del castillo interior', s: 'Teresa of Ávila, The Interior Castle: seven dwelling places',
    p: [
      ['Outside the castle', 'A soul that does not pray lives outside its own castle, among the snakes and vermin.', 1, 1, 'fuera del castillo'],
      ['First mansions', 'Entering through prayer and self-knowledge, with worldly things still crowding in.', 2, 2, 'primeras moradas'],
      ['Second mansions', 'God’s call is heard more clearly; the struggle to keep going.', 3, 3, 'segundas moradas'],
      ['Third mansions', 'An ordered, virtuous life, but cautious and still attached to its own reasoning.', 4, 4, 'terceras moradas'],
      ['Fourth mansions', 'The prayer of quiet: stillness is given rather than made.', 5, 5, 'cuartas moradas', 'oración de quietud'],
      ['Fifth mansions', 'The prayer of union: the silkworm dies in its cocoon and a white butterfly comes out.', 6, 6, 'quintas moradas', 'oración de unión'],
      ['Sixth mansions', 'Betrothal: raptures, longing and great trials.', 7, 7, 'sextas moradas', 'desposorio espiritual'],
      ['Seventh mansions', 'Spiritual marriage: lasting union at the centre, where Martha and Mary work together.', 8, 9, 'séptimas moradas', 'matrimonio espiritual']
    ] },
  { g: 'abrahamic', k: 'rel', d: '7th c. CE', n: 'Islam', f: 'The three states of the self',
    o: 'al-nafs · النفس', s: 'The Qur’an 12:53, 75:2 and 89:27–30',
    p: [
      ['The commanding self', 'The self that urges towards evil.', 1, 1, 'al-nafs al-ammāra', 'النفس الأمارة; from 12:53, إن النفس لأمارة بالسوء'],
      ['The reproaching self', 'Conscience wakes, and the self blames itself and struggles: the greater jihad, al-jihād al-akbar.', 2, 4, 'al-nafs al-lawwāma', 'النفس اللوامة (75:2)'],
      ['The self at peace', '“O soul at peace, return to your Lord, well pleased and well pleasing.”', 5, 8, 'al-nafs al-muṭmaʾinna', 'النفس المطمئنة (89:27)']
    ] },
  { g: 'abrahamic', k: 'mys', d: '1177', n: 'Sufi', f: 'Attar’s seven valleys',
    o: 'Manṭiq al-ṭayr · منطق الطیر', s: 'Farid ud-Din Attar, The Conference of the Birds',
    p: [
      ['The excuses', 'Called by the hoopoe, most birds hold back, each attached to its comforts.', 1, 1],
      ['Quest', 'Leaving everything behind to seek.', 2, 2, 'ṭalab', 'طلب'],
      ['Love', 'A burning love that throws reason away.', 3, 3, 'ʿishq', 'عشق'],
      ['Understanding', 'Each traveller sees the truth by their own capacity, on their own road.', 4, 4, 'maʿrifat', 'معرفت'],
      ['Detachment', 'Desires and claims fall away; free of need.', 5, 5, 'istighnā', 'استغنا'],
      ['Unity', 'The many are seen as one.', 6, 6, 'tawḥīd', 'توحید'],
      ['Wonder', 'Lost in bewilderment, no longer knowing whether one exists.', 7, 7, 'ḥayrat', 'حیرت'],
      ['Poverty and annihilation', 'The self passes away, like a drop into the ocean.', 8, 8, 'faqr va fanā', 'فقر و فنا'],
      ['The Simorgh', 'Thirty birds reach their king and see themselves: si morgh means “thirty birds”.', 9, 9, 'sīmurgh', 'سیمرغ: sī murgh, thirty birds']
    ] },

  /* ---------------- Indian ---------------- */
  { g: 'indian', k: 'rel', d: 'c. 5th c. BCE', n: 'Buddhist', f: 'The four stages of awakening',
    o: 'ariya-puggala, the noble persons', s: 'The Pali Canon (Theravada)',
    p: [
      ['Ordinary person', 'Bound by all ten fetters, above all the belief in a lasting self.', 1, 1, 'puthujjana', 'the fetters are saṃyojana'],
      ['On the path', 'The good ordinary person, training in virtue, concentration and wisdom.', 3, 5, 'kalyāṇa-puthujjana', 'training in sīla, samādhi and paññā'],
      ['Stream-entry', 'First sight of nibbāna: belief in a self, doubt and clinging to rites fall away.', 6, 6, 'sotāpanna'],
      ['Once-returner', 'Sensual desire and ill will much weakened; one more birth in this world.', 7, 7, 'sakadāgāmī'],
      ['Non-returner', 'Sensual desire and ill will gone for good.', 7, 7, 'anāgāmī'],
      ['Arahant', 'All fetters cut, even conceit and restlessness: “done is what had to be done”.', 8, 9, 'arahant', '“kataṃ karaṇīyaṃ”']
    ] },
  { g: 'indian', k: 'rel', d: 'c. 200 BCE–200 CE', n: 'Hindu', f: 'The four stages of life',
    o: 'āśrama · आश्रम', s: 'The Dharmashastras, above all the Laws of Manu, chapters 2–6 (a scheme for twice-born men)',
    p: [
      ['Student', 'Celibate study of the Veda in a teacher’s house.', 3, 3, 'brahmacarya', 'ब्रह्मचर्य'],
      ['Householder', 'Family, work, duty and giving: living the aims of dharma, wealth and pleasure well.', 4, 4, 'gṛhastha', 'गृहस्थ; the aims are dharma, artha and kāma'],
      ['Forest-dweller', 'Handing on the household and withdrawing into simplicity and contemplation.', 5, 6, 'vānaprastha', 'वानप्रस्थ'],
      ['Renunciant', 'Giving up home, the household fire and possessions; wandering alone, seeking only liberation.', 7, 7, 'saṃnyāsa', 'संन्यास'],
      ['Liberation', 'Release from the round of rebirth: the fourth and highest aim of life.', 8, 9, 'mokṣa', 'मोक्ष']
    ] },
  { g: 'indian', k: 'rel', d: 'c. 2nd–5th c. CE', n: 'Jain', f: 'The fourteen stages',
    o: 'guṇasthāna', s: 'The gunasthanas, from the Shatkhandagama and later Jain texts',
    p: [
      ['Delusion', 'Stage 1: wrong belief; the soul does not know itself.', 1, 1, 'mithyātva'],
      ['Glimpse and slip', 'Stages 2–3: a taste of true insight, lost again or mixed with wrong belief.', 2, 2, 'sāsvādana · miśra'],
      ['Right vision', 'Stage 4: the soul first sees its own true nature, though without vows yet.', 3, 3, 'avirata-samyagdṛṣṭi'],
      ['Partial vows', 'Stage 5: the layperson’s vows, keeping some restraints.', 3, 3, 'deśavirata'],
      ['Vows, with lapses', 'Stage 6: the ascetic’s full vows, with moments of carelessness.', 4, 4, 'pramatta-saṃyata'],
      ['Vigilance', 'Stage 7: the vows kept without carelessness; deep meditation.', 5, 5, 'apramatta-saṃyata'],
      ['The ladder', 'Stages 8–11: the passions thinned to their subtlest, then held down or destroyed.', 6, 6, 'śreṇi', 'apūrvakaraṇa, anivṛtti-bādara, sūkṣma-samparāya, upaśānta-moha'],
      ['Delusion destroyed', 'Stage 12: all deluding karma gone, never to return.', 7, 7, 'kṣīṇa-moha'],
      ['Omniscience in life', 'Stage 13: infinite knowledge, while still living and teaching.', 8, 8, 'sayoga-kevalī', 'omniscience is kevala-jñāna'],
      ['Final stillness', 'Stage 14: body, speech and mind fall still; then liberation.', 9, 9, 'ayoga-kevalī', 'then the liberated soul, siddha']
    ] },
  { g: 'indian', k: 'mys', d: 'c. 400 CE', n: 'Hindu yoga', f: 'The eight limbs',
    o: 'aṣṭāṅga yoga · अष्टाङ्ग योग', s: 'Patanjali, Yoga Sutras 2.29 to 4.34',
    p: [
      ['Restraints', 'Non-harm, truthfulness, not stealing, continence, non-grasping.', 3, 3, 'yama', 'यम'],
      ['Observances', 'Purity, contentment, austerity, self-study, devotion to the Lord.', 3, 3, 'niyama', 'नियम'],
      ['Posture', 'A seat that is steady and easy.', 4, 4, 'āsana', 'आसन'],
      ['Breath', 'Regulating the flow of the breath.', 4, 4, 'prāṇāyāma', 'प्राणायाम'],
      ['Withdrawal', 'The senses draw back from their objects.', 5, 5, 'pratyāhāra', 'प्रत्याहार'],
      ['Concentration', 'Holding the mind on one place.', 5, 5, 'dhāraṇā', 'धारणा'],
      ['Meditation', 'An unbroken flow of attention towards that object.', 6, 6, 'dhyāna', 'ध्यान'],
      ['Absorption', 'Only the object shines, the mind as if empty of its own form.', 7, 7, 'samādhi', 'समाधि'],
      ['Isolation', 'Pure awareness stands alone, free of nature’s play: liberation.', 8, 9, 'kaivalya', 'कैवल्य']
    ] },
  { g: 'indian', k: 'mys', d: 'c. 700 CE', n: 'Advaita Vedanta', f: 'The path of knowledge',
    o: 'jñāna-mārga', s: 'Shankara, commentary on the Brahma Sutra 1.1.1; the Vivekachudamani, traditionally attributed to him',
    p: [
      ['Discrimination', 'Telling the eternal from the passing.', 2, 2, 'viveka', 'विवेक'],
      ['Dispassion', 'Losing the taste for the fruits of action, here or in heaven.', 3, 3, 'vairāgya', 'वैराग्य'],
      ['The six virtues', 'Calm, self-control, withdrawal, forbearance, faith and composure.', 4, 4, 'ṣaṭ-sampatti', 'षट्सम्पत्ति: śama, dama, uparati, titikṣā, śraddhā, samādhāna'],
      ['Longing for freedom', 'A burning wish to be free.', 4, 4, 'mumukṣutva', 'मुमुक्षुत्व'],
      ['Hearing', 'Listening to the teaching of the Upanishads from a teacher.', 5, 5, 'śravaṇa', 'श्रवण'],
      ['Reflection', 'Reasoning it through until every doubt is gone.', 6, 6, 'manana', 'मनन'],
      ['Meditation', 'Dwelling on “I am Brahman” until the false self dissolves.', 7, 7, 'nididhyāsana', 'निदिध्यासन; “I am Brahman” is ahaṃ brahmāsmi'],
      ['Liberation in life', 'Knowing oneself as Brahman, free while still in the body.', 8, 9, 'jīvanmukti', 'जीवन्मुक्ति']
    ] },
  { g: 'indian', k: 'mys', d: '12th c. CE', n: 'Tibetan Buddhist', f: 'The four yogas of Mahamudra',
    o: 'mahāmudrā · phyag rgya chen po', s: 'Gampopa and the Kagyu lineage',
    p: [
      ['The preliminaries', 'Reflecting on precious human life, death, karma and suffering, then purifying practices.', 3, 4, 'ngöndro', "Wylie sngon 'gro"],
      ['One-pointedness', 'Calm abiding: the mind rests, clear and still.', 5, 5, 'tsechik', 'Wylie rtse gcig'],
      ['Simplicity', 'Free of elaboration: the mind’s nature seen as empty, without root.', 6, 6, 'trödral', 'Wylie spros bral'],
      ['One taste', 'Mind and world, calm and movement, samsara and nirvana: one flavour.', 7, 7, 'rochik', 'Wylie ro gcig'],
      ['Non-meditation', 'Nothing left to meditate on or to do: awareness is effortless and constant.', 8, 9, 'gommé', 'Wylie sgom med']
    ] },
  { g: 'indian', k: 'rel', d: 'c. 1500', n: 'Sikh', f: 'The five realms',
    o: 'Japjī Sāhib · ਜਪੁਜੀ ਸਾਹਿਬ', s: 'Guru Nanak, Japji Sahib, stanzas 34–37',
    p: [
      ['Realm of duty', 'The earth as the place to practise righteousness; each judged by their deeds.', 3, 3, 'Dharam Khand', 'ਧਰਮ ਖੰਡ'],
      ['Realm of knowledge', 'Knowledge blazes, and the seeker sees creation’s countless worlds.', 4, 5, 'Gian Khand', 'ਗਿਆਨ ਖੰਡ'],
      ['Realm of effort', 'Spiritual effort shapes mind and intellect with beauty.', 6, 6, 'Saram Khand', 'ਸਰਮ ਖੰਡ; saram read as effort or as humility'],
      ['Realm of grace', 'Its speech is power; only the mighty, filled with the Lord, dwell there.', 7, 7, 'Karam Khand', 'ਕਰਮ ਖੰਡ'],
      ['Realm of truth', 'Where the Formless One dwells.', 8, 9, 'Sach Khand', 'ਸਚ ਖੰਡ']
    ] },
  { g: 'indian', k: 'mys', d: '1577', n: 'Hindu tantra', f: 'The six centres and the crown',
    o: 'ṣaṭ-cakra-nirūpaṇa, the description of the six centres', s: 'Purnananda, Shat-chakra-nirupana (1577)',
    p: [
      ['Root support', 'At the base of the spine, where the coiled kundalini sleeps.', 1, 1, 'mūlādhāra', 'मूलाधार; the coiled power is kuṇḍalinī'],
      ['Its own seat', 'Water: a six-petalled lotus at the root of the genitals.', 2, 2, 'svādhiṣṭhāna', 'स्वाधिष्ठान'],
      ['City of jewels', 'Fire: the ten-petalled lotus at the navel.', 3, 4, 'maṇipūra', 'मणिपूर'],
      ['The unstruck', 'At the heart: air, and a twelve-petalled lotus where the sound no one strikes is heard.', 5, 5, 'anāhata', 'अनाहत'],
      ['The purified', 'At the throat: ether, and a lotus of sixteen petals.', 6, 6, 'viśuddha', 'विशुद्ध'],
      ['Command', 'Between the eyebrows: the two-petalled lotus, seat of the mind.', 7, 7, 'ājñā', 'आज्ञा'],
      ['Thousand-petalled', 'Above the six centres, at the crown: kundalini meets Shiva in union.', 8, 9, 'sahasrāra', 'सहस्रार']
    ] },
  { g: 'indian', k: 'mys', d: '1939–40', n: 'Sri Aurobindo', f: 'The ascent beyond mind',
    s: 'The Life Divine; Letters on Yoga',
    p: [
      ['The ordinary mind', 'Surface consciousness, caught up in body, life and thought.', 1, 1],
      ['The psychic being', 'The soul within comes forward and begins to guide.', 3, 4, 'caitya puruṣa'],
      ['Higher mind', 'Thinking in wide masses of truth rather than step by step.', 5, 5],
      ['Illumined mind', 'Truth seen in light, more than thought.', 6, 6],
      ['Intuition', 'Truth known directly, in flashes of recognition.', 7, 7],
      ['Overmind', 'A cosmic, global consciousness, the home of the gods.', 8, 8],
      ['Supermind', 'The Truth-Consciousness, meant to transform life on earth itself.', 9, 9, 'vijñāna · ṛta-cit']
    ] },

  /* ---------------- Chinese ---------------- */
  { g: 'chinese', k: 'phil', d: 'c. 500 BCE', n: 'Confucian', f: 'A life in stages', l: 'zh-Hant',
    o: '論語 Lúnyǔ', s: 'Analects 2.4',
    p: [
      ['At fifteen', 'I set my heart on learning.', 3, 3, '志于學', 'zhì yú xué'],
      ['At thirty', 'I took my stand.', 4, 4, '而立', 'ér lì'],
      ['At forty', 'I had no more doubts.', 5, 5, '不惑', 'bú huò'],
      ['At fifty', 'I knew the will of Heaven.', 6, 6, '知天命', 'zhī tiānmìng'],
      ['At sixty', 'My ear was attuned: I heard without resistance.', 7, 7, '耳順', 'ěr shùn'],
      ['At seventy', 'I could follow my heart’s desire without overstepping what is right.', 8, 9, '從心所欲，不踰矩', 'cóng xīn suǒ yù, bù yú jǔ']
    ] },
  { g: 'chinese', k: 'phil', d: 'c. 300 BCE', n: 'Daoist', f: 'Putting things outside', l: 'zh-Hant',
    o: '莊子 Zhuāngzǐ', s: 'Zhuangzi, chapter 6',
    p: [
      ['The world outside', 'After three days of teaching, he could put the world outside himself.', 4, 4, '外天下', 'wài tiānxià'],
      ['Things outside', 'After seven more days, he could put things outside himself.', 5, 5, '外物', 'wài wù'],
      ['Life outside', 'After nine more, he could put life itself outside him.', 6, 7, '外生', 'wài shēng'],
      ['Dawn, and aloneness', 'Then a clarity like dawn, and he could see his own aloneness: what stands alone.', 8, 8, '朝徹 · 見獨', 'zhāochè, jiàn dú'],
      ['No past, no death', 'Past and present fall away; he enters where there is no life and no death.', 8, 8, '無古今 · 不死不生', 'wú gǔjīn, bù sǐ bù shēng'],
      ['Peace in strife', 'Sending off and welcoming, destroying and completing all things, yet at peace.', 9, 9, '攖寧', 'yīngníng, “Peace-in-Strife” in Watson’s translation']
    ] },
  { g: 'chinese', k: 'mys', d: 'c. 1000 CE', n: 'Daoist', f: 'Inner alchemy', l: 'zh-Hant',
    o: '內丹 nèidān', s: 'The Zhong-Lü tradition, and Zhang Boduan, Awakening to Reality (1075)',
    p: [
      ['Laying the foundation', 'Calming, healing and gathering the body’s energies before the real work.', 3, 3, '築基', 'zhùjī'],
      ['Essence into breath', 'Refining vital essence into living energy.', 4, 4, '煉精化氣', 'liàn jīng huà qì'],
      ['Breath into spirit', 'Refining energy into spirit; the golden elixir forms.', 5, 6, '煉氣化神', 'liàn qì huà shén; the elixir is 金丹 jīndān'],
      ['Spirit back to emptiness', 'Spirit returns to the void; the separate self is let go.', 7, 7, '煉神還虛', 'liàn shén huán xū'],
      ['Emptiness into the Dao', 'One with the Dao, with nothing left apart.', 8, 9, '煉虛合道', 'liàn xū hé dào']
    ] },

  /* ---------------- Japanese ---------------- */
  { g: 'japanese', k: 'rel', d: '830', n: 'Kūkai (Shingon)', f: 'The ten stages of mind', l: 'ja',
    o: '十住心論 Jūjūshinron', s: 'Kūkai, Jūjūshinron and Hizō hōyaku (830): the schools of his day ranked as stages of one mind',
    p: [
      ['The goat’s mind', 'Driven only by appetite, for food and sex, like a goat.', 1, 1, '異生羝羊心', 'ishō teiyō shin'],
      ['The child keeping fasts', 'Ethics dawns: moral rules and giving, as in Confucian teaching.', 2, 3, '愚童持斎心', 'gudō jisai shin'],
      ['The fearless infant', 'Religious practice aimed at heaven, as in Brahmanism and Daoism; fear is soothed for a while.', 4, 5, '嬰童無畏心', 'yōdō mui shin'],
      ['Only parts, no self', 'The hearers’ insight: there are only passing parts of experience, and no lasting self.', 6, 6, '唯蘊無我心', 'yuiun muga shin'],
      ['Karma’s seed uprooted', 'The solitary sage sees the chain of causes and cuts the root of rebirth.', 6, 6, '抜業因種心', 'batsugō inshu shin'],
      ['Concern for others', 'The great vehicle: compassion for all beings, and everything seen as mind.', 7, 7, '他縁大乗心', 'taen daijō shin'],
      ['The unborn', 'Awakening to emptiness: nothing ever truly arises or ceases.', 7, 7, '覚心不生心', 'kakushin fushō shin'],
      ['The one way', 'All paths and all things are seen as one truth.', 8, 8, '一道無為心', 'ichidō mui shin'],
      ['No self-nature', 'Everything holds and mirrors everything else; nothing stands alone.', 8, 8, '極無自性心', 'gokumu jishō shin'],
      ['The secret adornment', 'Becoming a buddha in this very body, through esoteric practice of body, speech and mind.', 9, 9, '秘密荘厳心', 'himitsu shōgon shin']
    ] },
  { g: 'japanese', k: 'mys', d: '12th c. CE', n: 'Zen', f: 'The ten ox-herding pictures', l: 'ja',
    o: '十牛図 jūgyūzu', s: 'Kuoan Shiyuan, 12th-century China; kept, copied and painted above all in Japan',
    p: [
      ['Searching for the ox', 'Looking through the hills for an ox that was never lost.', 2, 2, '尋牛', 'jingyū'],
      ['Seeing the traces', 'Footprints, in the sutras and teachings: the ox exists.', 3, 3, '見跡', 'kenseki'],
      ['Glimpsing the ox', 'A first sight of one’s true nature.', 4, 4, '見牛', 'kengyū'],
      ['Catching the ox', 'Holding on hard: the ox is wild and strong.', 4, 4, '得牛', 'tokugyū'],
      ['Taming the ox', 'Patient practice, until it follows without the rope.', 5, 5, '牧牛', 'bokugyū'],
      ['Riding home', 'At ease on the ox’s back, playing the flute.', 6, 6, '騎牛帰家', 'kigyū kika'],
      ['Ox forgotten', 'Home: the ox is gone, and the herder sits alone.', 7, 7, '忘牛存人', 'bōgyū zonnin'],
      ['Both forgotten', 'An empty circle: neither ox nor self.', 8, 8, '人牛倶忘', 'ningyū gubō'],
      ['Back to the source', 'Rivers flow, flowers are red: things just as they are.', 8, 8, '返本還源', 'henpon kangen'],
      ['Into the marketplace', 'Back among people with helping hands, spreading ease.', 9, 9, '入鄽垂手', 'nitten suishu']
    ] },

  /* ---------------- Modern West ---------------- */
  { g: 'modern', k: 'phil', d: '1677', n: 'Spinoza', f: 'Three kinds of knowledge', l: 'la',
    s: 'Ethics, parts II and V',
    p: [
      ['Imagination', 'Knowing by the senses and hearsay: confused, and the source of passive emotions.', 1, 1, 'imaginatio · opinio'],
      ['Reason', 'Clear ideas of what things share; understanding causes frees us from the passions.', 4, 5, 'ratio'],
      ['Intuitive knowledge', 'Seeing each thing directly as following from God, that is, Nature.', 6, 7, 'scientia intuitiva', 'Deus sive Natura: God, or Nature'],
      ['Intellectual love of God', 'Blessedness: the mind’s joy in understanding itself in God, not the reward of virtue but virtue itself.', 8, 9, 'amor Dei intellectualis', 'blessedness is beatitudo']
    ] },
  { g: 'modern', k: 'phil', d: '1807', n: 'Hegel', f: 'The journey of spirit', l: 'de',
    o: 'Phänomenologie des Geistes', s: 'Phenomenology of Spirit',
    p: [
      ['Consciousness', 'The mind takes the world of the senses as simply given.', 1, 1, 'Bewusstsein'],
      ['Self-consciousness', 'Desire, master and slave, the unhappy consciousness: the self seeks itself in another.', 2, 3, 'Selbstbewusstsein', 'das unglückliche Bewusstsein, the unhappy consciousness'],
      ['Reason', 'Certain of being all reality: observing, acting, giving laws.', 4, 5, 'Vernunft'],
      ['Spirit', 'The self finds itself in a shared world: ethical life, culture, conscience.', 6, 6, 'Geist'],
      ['Religion', 'Absolute truth grasped in images and stories.', 7, 7, 'Religion'],
      ['Absolute knowing', 'Spirit knows itself as spirit, the whole journey gathered up in thought.', 8, 9, 'das absolute Wissen']
    ] },
  { g: 'modern', k: 'phil', d: '1819', n: 'Schopenhauer', f: 'The quieting of the will', l: 'de',
    o: 'Die Welt als Wille und Vorstellung', s: 'The World as Will and Representation, books 3 and 4',
    p: [
      ['Bound to the will', 'Endless wanting: pain when it lacks, boredom when it has.', 1, 1, 'Wille zum Leben'],
      ['Aesthetic contemplation', 'In art and beauty the will falls silent for a while: pure, will-less seeing.', 5, 5, 'willenloses Subjekt', 'reines, willenloses Subjekt der Erkenntnis: the pure, will-less subject of knowing'],
      ['Compassion', 'Seeing through separateness: another’s suffering felt as one’s own.', 6, 6, 'Mitleid'],
      ['Denial of the will', 'The will turns and gives itself up: the saint’s deep calm.', 7, 8, 'Verneinung des Willens', 'Verneinung des Willens zum Leben']
    ] },
  { g: 'modern', k: 'phil', d: '1843–46', n: 'Kierkegaard', f: 'Stages on life’s way', l: 'da',
    o: 'Stadier paa Livets Vei', s: 'Either/Or (1843); Fear and Trembling (1843); Stages on Life’s Way (1845); Concluding Unscientific Postscript (1846)',
    p: [
      ['The aesthetic', 'Living for pleasure and the interesting, from moment to moment.', 1, 1, 'det Æsthetiske'],
      ['Despair', 'Boredom and despair force the either/or: choose yourself.', 2, 2, 'Fortvivlelse', 'Enten – Eller, either/or'],
      ['The ethical', 'Commitment, duty, and choosing oneself among others.', 3, 4, 'det Ethiske'],
      ['Infinite resignation', 'Inward religiousness: giving up the finite world for the eternal.', 5, 7, 'den uendelige Resignation', 'Religieusitet A, religiousness A'],
      ['Faith', 'The leap: receiving the finite back by virtue of the absurd, at home in ordinary life.', 8, 9, 'Troen', '“i Kraft af det Absurde”; Religieusitet B']
    ] },
  { g: 'modern', k: 'phil', d: '1883', n: 'Nietzsche', f: 'The three metamorphoses', l: 'de',
    o: 'Von den drei Verwandlungen', s: 'Thus Spoke Zarathustra, part I',
    p: [
      ['The camel', 'The strong spirit kneels to carry the heaviest loads: “thou shalt”.', 3, 4, 'Kameel', '“Du-sollst”, thou shalt'],
      ['The lion', 'In the desert it fights the dragon “thou shalt” with “I will”: a sacred No.', 6, 7, 'Löwe', '“Ich will”, I will'],
      ['The child', 'Innocence, forgetting, a new beginning: a sacred Yes.', 8, 9, 'Kind', '“ein heiliges Ja-sagen”, a sacred Yes-saying']
    ] },
  { g: 'modern', k: 'mys', d: '1911', n: 'Evelyn Underhill', f: 'The mystic way',
    s: 'Mysticism',
    p: [
      ['Awakening', 'The self wakes, often suddenly, to a divine reality.', 2, 2],
      ['Purgation', 'A painful cleansing of everything that stands in the way.', 3, 4],
      ['Illumination', 'A joyful sense of God’s presence; visions and inner light.', 5, 6],
      ['The dark night', 'The presence is withdrawn: the self is emptied and stripped.', 7, 7],
      ['Union', 'Lasting oneness with the divine, often flowing out into active work.', 8, 9]
    ] },
  { g: 'modern', k: 'mys', d: 'c. 1915', n: 'Gurdjieff', f: 'The seven kinds of man',
    s: 'P. D. Ouspensky, In Search of the Miraculous',
    p: [
      ['Man no. 1, 2 and 3', 'Born mechanical: driven by the body, the feelings or the intellect; asleep.', 1, 1],
      ['Man no. 4', 'Working on oneself in a school: the centres come into balance.', 3, 4],
      ['Man no. 5', 'Inner unity crystallised: self-consciousness.', 5, 6],
      ['Man no. 6', 'Objective consciousness, though not yet permanent.', 7, 7],
      ['Man no. 7', 'All a human being can have: will, a permanent I, freedom.', 8, 9]
    ] },
  { g: 'modern', k: 'psy', d: '1916–51', n: 'C. G. Jung', f: 'Individuation', l: 'de',
    s: 'Two Essays on Analytical Psychology; Aion',
    p: [
      ['The persona', 'The mask shown to the world, taken for who we are.', 1, 1, 'Persona'],
      ['The second half of life', 'Outer success stops satisfying, often in midlife, and the inner journey calls.', 2, 2, 'die zweite Lebenshälfte'],
      ['Meeting the shadow', 'Facing what we have disowned in ourselves: the first, humbling work.', 3, 4, 'Schatten'],
      ['Anima and animus', 'The inner figure of the other sex: a bridge to the unconscious.', 5, 5, 'Anima · Animus'],
      ['The mana personality', 'The pull to identify with the wise one or the magician; it has to be dissolved.', 6, 7, 'Mana-Persönlichkeit'],
      ['The Self', 'The centre and whole of the psyche: wholeness, not perfection.', 8, 9, 'das Selbst']
    ] },
  { g: 'modern', k: 'psy', d: '1943–71', n: 'Abraham Maslow', f: 'The hierarchy of needs',
    s: 'A Theory of Human Motivation (1943); The Farther Reaches of Human Nature (1971)',
    p: [
      ['Body and safety', 'Food, sleep, shelter and security come first.', 1, 1],
      ['Belonging and esteem', 'Love, friendship and respect: the needs of the social self.', 1, 1],
      ['Self-actualisation', 'Becoming fully what one can be; peak experiences.', 5, 6],
      ['Self-transcendence', 'Living for what lies beyond the self: others, a cause, the cosmos.', 7, 8]
    ] },
  { g: 'modern', k: 'psy', d: '1949', n: 'Joseph Campbell', f: 'The hero’s journey',
    s: 'The Hero with a Thousand Faces',
    p: [
      ['The call to adventure', 'Something summons the hero out of the familiar world.', 2, 2],
      ['Crossing the threshold', 'Leaving the known world behind.', 3, 3],
      ['The road of trials', 'Tests that strip and shape the hero.', 4, 4],
      ['Meeting the goddess', 'An encounter with love, beauty and the fullness of life.', 5, 5],
      ['Atonement with the father', 'Facing the power that rules one’s life, and making peace with it.', 6, 6],
      ['Apotheosis', 'The old self dies; the hero goes beyond the pairs of opposites.', 7, 7],
      ['The ultimate boon', 'The goal of the quest is won.', 8, 8],
      ['Master of two worlds', 'Home again with the boon, free in both the everyday and the deep: “freedom to live”.', 9, 9]
    ] },
  { g: 'modern', k: 'psy', d: '1964', n: 'Kazimierz Dąbrowski', f: 'Positive disintegration',
    o: 'dezintegracja pozytywna', s: 'Positive Disintegration (1964)',
    p: [
      ['Primary integration', 'A self held together by instinct, ego and social habit, with little inner conflict.', 1, 1],
      ['Unilevel disintegration', 'Inner conflict without direction: ambivalence, swings of mood, crisis.', 2, 2],
      ['Spontaneous multilevel', 'A painful gap between “what is” and “what ought to be”: a higher ideal pulls.', 3, 4],
      ['Organised multilevel', 'Deliberate self-education: choosing who to become.', 5, 6],
      ['Secondary integration', 'The ideal personality lived: harmony, empathy, autonomy.', 8, 8]
    ] },
  { g: 'modern', k: 'psy', d: '1981', n: 'James Fowler', f: 'Stages of faith',
    s: 'Stages of Faith (1981)',
    p: [
      ['Mythic-literal', 'Childhood faith: the stories taken literally, fairness as tit for tat.', 1, 1],
      ['Synthetic-conventional', 'The faith of one’s group, held without examining it; many adults stay here.', 1, 1],
      ['Individuative-reflective', 'Questioning, and owning one’s beliefs; the symbols are taken apart.', 2, 3],
      ['Conjunctive', 'Holding paradox: a second naïveté that hears truth in other traditions.', 5, 6],
      ['Universalising', 'Rare: living from the unity of all beings, selflessly and often at a cost.', 8, 9]
    ] },
  { g: 'modern', k: 'psy', d: '1999–2013', n: 'Susanne Cook-Greuter', f: 'Ego development',
    s: 'After Jane Loevinger; Postautonomous Ego Development (1999); Nine Levels of Increasing Embrace (2013)',
    p: [
      ['Self-protective', 'Out for oneself: others are a means or a threat.', 1, 1],
      ['Conformist', 'Belonging comes first: the group decides what is right.', 1, 1],
      ['Expert', 'Standing out through skill and craft: a self of one’s own begins.', 2, 2],
      ['Achiever', 'Goals, effectiveness and self-chosen standards.', 3, 3],
      ['Pluralist', 'Every view is relative; the self starts to watch itself.', 4, 4],
      ['Strategist', 'Holding many systems at once; inner conflict owned and worked with.', 5, 5],
      ['Construct-aware', 'Sees that the ego and all meaning are constructed: the ego grows transparent.', 6, 7],
      ['Unitive', 'Witnessing the flow of experience, at one with what is, ordinary and unfixed.', 8, 9]
    ] },
  { g: 'modern', k: 'mys', d: '2006', n: 'Ken Wilber', f: 'States of consciousness',
    s: 'Integral Spirituality (2006)',
    p: [
      ['Gross', 'Ordinary waking life: the physical world and the busy mind.', 1, 1],
      ['Subtle', 'Dream-like inner light, sound, visions and deep feeling.', 5, 5],
      ['Causal', 'Formless: the emptiness of deep sleep, entered awake.', 6, 6],
      ['Witness', 'Pure awareness watching everything, touched by nothing.', 7, 7, 'turīya', 'Sanskrit, “the fourth”'],
      ['Nondual', 'The witness and all it sees are not two: “one taste”.', 8, 9, 'turīyātīta', 'Sanskrit, “beyond the fourth”']
    ] },
  { g: 'modern', k: 'psy', d: '2019', n: 'Jeffery Martin', f: 'The four locations',
    s: 'The Finders (2019): interviews with people reporting lasting awakening',
    p: [
      ['Ordinary consciousness', 'A self made of thoughts and stories, at the centre of everything.', 1, 1],
      ['Location 1', 'The story-telling self loses its grip; a steady sense of well-being.', 6, 6],
      ['Location 2', 'Experience turns nondual; emotions mostly positive; fewer thoughts.', 7, 7],
      ['Location 3', 'One universal feeling of love and joy; a sense of union with all.', 8, 8],
      ['Location 4', 'No sense of self, of agency, or even of the divine: deep freedom.', 9, 9]
    ] }
];

if (typeof module !== 'undefined') module.exports = { BANDS: BANDS, FAMILIES: FAMILIES, KINDS: KINDS, COLS: COLS };
