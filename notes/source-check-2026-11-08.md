# Ladders of Awakening: research notes

Checked against the updated data.js: 43 columns, with Chinese and Japanese as separate families, the new Kūkai and āśrama columns, and the own-term fields p[4] and p[5].

## Summary

**Part A, checking the maps.** 10 of the 43 columns need a change. The other 33 hold up against the sources.

- Of the 16 maps you flagged for extra care, 5 need fixing: Pythagorean, Zoroastrian, Sikh, Zhuangzi and Cook-Greuter. The other 11 are sound: Seneca, Porphyry, Jain, Mahamudra, Neidan, Hegel, Martin, Dąbrowski, Fowler, Aurobindo and Wilber.
- 4 maps you did not flag also need fixing: Orphic, Advaita, Chakras and Kierkegaard.
- Of the two new columns, Kūkai is sound. The four stages of life needs one small fix.
- The biggest fixes: the Zoroastrian maiden is given a quotation that no translation contains. Zhuangzi chapter 6 is misread at two steps and leaves three steps out. The chakra column adds modern Western meanings to a 16th-century text whose own title means “the six centres”. The Cook-Greuter stage names don’t match the source and year given.

**Part B, new maps.** 14 candidates, ranked by how much variety each adds. Kūkai has been taken off the list because it is now in the file. The top five:

1. **The six Bambara initiation societies** (Mali, as described by Dominique Zahan): the first African map.
2. **Kohlberg’s stages of moral reasoning, with his tentative stage 7**: the first map from non-religious moral psychology.
3. **Ibn Tufayl’s Hayy ibn Yaqzan** (al-Andalus, c. 1170): union with God reached by reason and observation alone.
4. **Rupa Goswami’s nine stages of devotion** (Bengal, 1541): the first map where love, not knowledge or discipline, carries the seeker.
5. **Sima Chengzhen’s Sitting in Oblivion** (China, early 8th century): a Daoist meditation path for the Chinese family, which now has only 3 columns.

Two candidates (13 and 14) mostly repeat maps already in the file and are flagged as such.

**Part C, the original terms.** 7 entries are wrong or doubtful:

- 2 Avestan and Middle Persian spellings for the Chinvat Bridge;
- the third term of Dionysius’s triad;
- the Pythagorean term for the hearers;
- mixed old and modern Danish spellings;
- a Qur’an citation that implies a fixed phrase the verse does not contain;
- the two readings of the Sikh Saram;
- the chakra title, which contradicts its own Sanskrit.

Everything else checks out: the polytonic Greek, all the Chinese, all the Kūkai and ox-herding characters and readings, the Sanskrit, Pali and Wylie, and the Hebrew, Arabic, Persian and Gurmukhi script.

Style: all new descriptions use British spelling and no em dashes. Each is under 20 words. Any quote is under 15 words. Replacement lines use the file’s curly quotes (’ “ ”) and keep the p[4] and p[5] term fields, so they can be pasted straight in.

---

## Part A. Corrections

### 1. Orphic, The gold tablets

Phase 1 reads more into the text than it says. The tablets only describe a spring by a white cypress where the souls of the dead go down to cool themselves, and they tell the initiate to keep away from it. Calling it the spring of forgetting (Lethe) is a scholars’ reading, likely but not stated. The p[5] note already says “later called”. Replace with:

```
['The first spring', 'By the white cypress the souls of the dead stop to drink; the initiate is told to pass it by.', 1, 1, 'λευκὴ κυπάρισσος', 'the white cypress that marks the spring; later readers call it Λήθη, forgetting'],
```

Optional: in the tablets the soul says who it is first and that it is parched second, in a single speech to the guardians. The current order, with thirst first, is a reading and not the text’s order.

Source: https://assets.cambridge.org/97805215/18314/excerpt/9780521518314_excerpt.htm (Edmonds, The “Orphic” Gold Tablets and Greek Religion, introduction)

### 2. Pythagorean, The grades of the school

Gellius (1.9) gives a silence of at least two years. The five years and the curtain both come from Iamblichus. As it stands, the description presents Iamblichus as if he were the only source. Replace phase 2 with the line below; the term change is explained in Part C.

```
['The hearers', 'At least two years of silent listening, says Gellius; five, says Iamblichus, who adds a curtain.', 3, 3, 'ἀκουστικοί', 'Gellius’s name; the silence was ἐχεμυθία. Iamblichus’s ἀκουσματικοί are a separate group'],
```

The grade names and their order are right. Gellius gives the hearers, then the learners (geometry, sundials, music, higher studies), then the students of nature. Gellius says Pythagoras judged face, expression and bearing; laughter is mentioned only by Iamblichus. Since `s` names both writers, that line can stay.

Source: https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Gellius/1*.html

### 3. Zoroastrian, The soul’s ascent

Three fixes.

(a) In phase 1 the maiden is quoted as saying “I am your own good thoughts, words and deeds”, but no translation has her say that. In Arda Viraf she says she is his actions. In the Hadokht Nask she is his own Daena, made lovelier by his good thoughts, words and deeds. Replace with:

```
['Meeting one’s conscience', 'At dawn after the third night the soul meets a radiant maiden: its own conscience, made lovely by its good thoughts, words and deeds.', 3, 3, 'daēnā', 'Avestan; Middle Persian dēn'],
```

(b) The Hadokht Nask gives only the four steps: good thought, good word, good deed, then the Endless Lights. The stations of the stars, moon and sun come from Arda Viraf (chapters 7 to 10). Change `s` to:

```
s: 'Hadokht Nask (the four steps); the Book of Arda Viraf (the star, moon and sun stations): the soul’s road after death',
```

(c) The date is too narrow. The Hadokht Nask is an Avestan text. Arda Viraf reached its final form in the 9th to 10th century CE; Boyce dates it there, and Gignoux puts it as late as the 10th or 11th century. Change `d` to:

```
d: 'Avestan; Arda Viraf c. 900 CE',
```

The bridge’s term is covered in Part C.

Sources: https://www.avesta.org/mp/viraf.html (the text) and https://www.iranicaonline.org/articles/hadoxt-nask (on the Hadokht Nask)

### 4. Hindu, The four stages of life (new column)

The placement and the descriptions are sound. The order is right, and so is the source: Manu covers the student in chapter 2, the householder in chapters 3 to 5, and the forest-dweller and the renunciant in chapter 6. Mokṣa is rightly called an aim of life, not a fifth stage. One fix: Manu’s renunciant gives up home, the household fire and possessions, but not his name. Taking a new name belongs to later monastic orders. Replace phase 4 with:

```
['Renunciant', 'Giving up home, the household fire and possessions; wandering alone, seeking only liberation.', 7, 7, 'saṃnyāsa', 'संन्यास'],
```

Optional, for fairness: Manu sets out this scheme for twice-born men only. `s` could add “(a scheme for twice-born men)”.

Source: https://www.britannica.com/topic/ashrama

### 5. Advaita Vedanta, The path of knowledge

Most modern scholars, among them Mayeda, Comans and Isayeva, doubt that Shankara wrote the Vivekachudamani. The four qualifications on this ladder are also listed in his undisputed commentary on the Brahma Sutra (1.1.1). Change `s` to:

```
s: 'Shankara, commentary on the Brahma Sutra 1.1.1; the Vivekachudamani, traditionally attributed to him',
```

Source: https://en.wikipedia.org/wiki/Vivekac%C5%AB%E1%B8%8D%C4%81ma%E1%B9%87i

### 6. Sikh, The five realms

The realms and their order are right (Japji 34 to 37). One small misreading in Karam Khand: the text says no one else lives there except the mighty, filled with the Lord. That is not the same as “nothing else remains”. Replace phase 4 with:

```
['Realm of grace', 'Its speech is power; only the mighty, filled with the Lord, dwell there.', 7, 7, 'Karam Khand', 'ਕਰਮ ਖੰਡ'],
```

The title “Realm of effort” is one of two readings; see Part C.

Source: https://www.sikhiwiki.org/index.php/Japji_Sahib_Pauri_37

### 7. Hindu tantra, The seven chakras

Purnananda’s text is the Ṣaṭ-cakra-nirūpaṇa, “the description of the six centres”, and that is already the column’s own title in `o`. The thousand-petalled lotus sits above the six and is not counted among them, so `f` contradicts `o`. The qualities “desire”, “will and power” and “love opens”, and the “inner eye”, are 20th-century Western additions and are not in the 1577 text. That text describes each centre by its element, petals and place in the body. The new titles (“Root support”, “Its own seat” and so on) are good translations and can stay. Change `f` and these six phases:

```
f: 'The six centres and the crown',
...
['Its own seat', 'Water: a six-petalled lotus at the root of the genitals.', 2, 2, 'svādhiṣṭhāna', 'स्वाधिष्ठान'],
['City of jewels', 'Fire: the ten-petalled lotus at the navel.', 3, 4, 'maṇipūra', 'मणिपूर'],
['The unstruck', 'At the heart: air, and a twelve-petalled lotus where the sound no one strikes is heard.', 5, 5, 'anāhata', 'अनाहत'],
['The purified', 'At the throat: ether, and a lotus of sixteen petals.', 6, 6, 'viśuddha', 'विशुद्ध'],
['Command', 'Between the eyebrows: the two-petalled lotus, seat of the mind.', 7, 7, 'ājñā', 'आज्ञा'],
['Thousand-petalled', 'Above the six centres, at the crown: kundalini meets Shiva in union.', 8, 9, 'sahasrāra', 'सहस्रार']
```

Source: https://www.wisdomlib.org/hinduism/book/shat-cakra-nirupana-english/d/doc1144813.html

### 8. Daoist, Putting things outside (Zhuangzi 6)

Two steps are misread and three are left out. In the text, the teacher Woman Crookback keeps at it with her pupil. The pupil puts things outside himself; it is not things letting go of him. After the dawn he sees his own aloneness, which is the solitary one in himself and not “the One”. Then come three further steps: past and present are done away with, he enters where there is no life and no death, and the whole is named Peace-in-Strife. The characters and pinyin are all correct; only the English needs changing. Replace all phases with:

```
['The world outside', 'After three days of teaching, he could put the world outside himself.', 4, 4, '外天下', 'wài tiānxià'],
['Things outside', 'After seven more days, he could put things outside himself.', 5, 5, '外物', 'wài wù'],
['Life outside', 'After nine more, he could put life itself outside him.', 6, 7, '外生', 'wài shēng'],
['Dawn, and aloneness', 'Then a clarity like dawn, and he could see his own aloneness: what stands alone.', 8, 8, '朝徹 · 見獨', 'zhāochè, jiàn dú'],
['No past, no death', 'Past and present fall away; he enters where there is no life and no death.', 8, 8, '無古今 · 不死不生', 'wú gǔjīn, bù sǐ bù shēng'],
['Peace in strife', 'Sending off and welcoming, destroying and completing all things, yet at peace.', 9, 9, '攖寧', 'yīngníng, “Peace-in-Strife” in Watson’s translation']
```

Source: https://terebess.hu/english/tao/Zhuangzi-Burton-Watson.pdf (Watson, The Complete Works of Zhuangzi, chapter 6)

### 9. Kierkegaard, Stages on life’s way

The column is titled after a book of his, Stadier paa Livets Vei (1845), but `s` leaves that book out. Change `s` to:

```
s: 'Either/Or (1843); Fear and Trembling (1843); Stages on Life’s Way (1845); Concluding Unscientific Postscript (1846)',
```

The spelling of the Danish terms is covered in Part C.

Source: https://plato.stanford.edu/entries/kierkegaard/

### 10. Susanne Cook-Greuter, Ego development

The names Expert, Achiever, Pluralist and Strategist do not appear in the 1999 dissertation named in `s`. That work keeps Loevinger’s names: Self-protective, Conformist, Self-aware, Conscientious, Individualistic, Autonomous, Construct-aware, Unitive. The four leadership names come from her later work, which reached its full form in Nine Levels of Increasing Embrace (2013). There, each stage carries both names, for example Conscientious/Achiever. The fix that touches the fewest lines is to keep the names and correct the source and date:

```
d: '1999–2013',
s: 'After Jane Loevinger; Postautonomous Ego Development (1999); Nine Levels of Increasing Embrace (2013)',
```

Alternative: keep `s` and `d` and change the four titles to the 1999 names, Self-aware, Conscientious, Individualist and Autonomous. The descriptions are fair either way.

Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC6208876 (Table 1 gives the 1999 Loevinger-based names, with Construct-aware and Unitive added)

### Checked and sound, with notes

- **Kūkai, The ten stages of mind (new column).** The order, the schools matched to each stage, the date (c. 830) and the sources are right. Stage 3 is rightly matched to Brahmanical and Daoist paths. The bands are a fair reading. The terms are confirmed in Part C.
- **Christian, The three ways.** Tagging it Religious is fine. One term is doubtful; see Part C.
- **Seneca, Letter 75.** The order is right. The first rank is nearest wisdom and can no longer slip back, but does not yet know it. The second has shed the worst passions but can still fall back. The third is free of many great vices but not all (§9 to 15).
- **Porphyry, Sentences 32.** Four grades, in this order: civic, purifying, contemplative, exemplary (paradigmatic). “Union with the One” comes from Plotinus VI.9, which `s` already names.
- **Jain gunasthanas.** All 14 stages and their grouping check out.
- **Mahamudra.** The four yogas and their order are right. Gampopa taught them as his gradual approach, and later Kagyu masters such as Pema Karpo set them out in full, so “Gampopa and the Kagyu lineage” is fair.
- **Neidan.** The stages match the Zhong-Lü scheme as Pregadio presents it, and “the golden elixir forms” is right for the breath-into-spirit stage. If you want more precision, `s` could read “Zhong-Lü tradition and Zhang Boduan, Awakening to Reality (1075)”.
- **Hegel.** The sections and their order match the Phenomenology.
- **Jeffery Martin.** The four descriptions agree with published summaries of his continuum, from a quieter story-telling self to no sense of self or agency. The book itself is not online, so the wording could not be checked line by line.
- **Dąbrowski, Fowler, Aurobindo, Wilber.** Names, order and dates are right. Aurobindo’s ladder of higher mind, illumined mind, intuition, overmind and supermind comes from the 1939–40 revision of The Life Divine, so the date fits.

---

## Part B. Proposed additions, ranked by variety

Each phase line reads: title (term): description. [suggested band]

### 1. The six Bambara initiation societies (Mali)
- **Family:** new family needed, “African”
- **Kind:** Religious
- **Date:** living tradition, described in the 20th century; Zahan 1960 and 1987
- **Source:** Dominique Zahan, Sociétés d’initiation bambara (1960), and his entry “Bambara Religion” in the Encyclopedia of Religion (1987)
- **Phases:**
  - N’domo: Boys before circumcision learn where humans come from and where they go: from God, back to God. [2–3]
  - Komo: After circumcision, knowledge is given, pictured as coming down on people from beyond. [3]
  - Nama: Learning how spirit and body, man and woman, good and evil belong together. [4]
  - Kono: Going deeper into human doubleness: thought joined to body gives birth to conscience. [5]
  - Tyiwara: Knowing the cosmos through farming: the bond of sun and earth, mimed as growing plants. [6]
  - Korè: Becoming spiritual, even divine: learning to resemble God in a brief, gentle touch. [8]
- **URL:** https://encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/bambara-religion
- **Why it adds variety:** the chart’s first African map, and a communal path through masked societies rather than a solitary one.
- **Care needed:** this is a living tradition with secret teachings. Reading the six societies as a single ladder is Zahan’s interpretation; he is explicit about Korè being the last and highest, and the middle order follows his sequence. He also says contact with God is brief and that salvation means rebirth within one’s lineage, which is why Korè sits at 8 and not 9. A specialist should review the wording before it is published.

### 2. Kohlberg’s stages of moral reasoning, with stage 7
- **Family:** Modern West
- **Kind:** Psychological
- **Date:** 1958–1981
- **Source:** Lawrence Kohlberg, Essays on Moral Development, vol. 1 (1981); Kohlberg and Clark Power, “Moral Development, Religious Thinking, and the Question of a Seventh Stage” (Zygon, 1981)
- **Phases:**
  - Stage 1, Obedience: Right is whatever avoids punishment. [1]
  - Stage 2, Fair exchange: Right is a deal that serves me: you help me, I help you. [1]
  - Stage 3, Good person: Being good in the eyes of family and friends; trust and approval matter most. [1]
  - Stage 4, Law and order: Duty to keep society’s rules and institutions working. [1]
  - Stage 4½, In between: Rules start to look arbitrary; everything feels relative and open to question. [2]
  - Stage 5, Social contract: Laws as agreements that serve rights and welfare, open to change by fair means. [3–4]
  - Stage 6, Universal principles: Conscience chooses principles of justice and dignity that hold for everyone. [5–6]
  - Stage 7, Cosmic orientation: Goodness rooted in a felt oneness with life, nature or God; Kohlberg offered it tentatively. [7–8]
- **URL:** https://relbib.de/Record/1827945788/Details
- **Why it adds variety:** the first ladder from non-religious moral psychology, built on justice rather than spirit. At its edge, in stage 7, it reaches something close to union.
- **Note:** stage 4½ is Kohlberg’s transitional stage. You can drop it if you only want the main stages.

### 3. Ibn Tufayl, Hayy ibn Yaqzan (Alive, Son of Awake)
- **Family:** Abrahamic & Persian
- **Kind:** Philosophical
- **Date:** c. 1170 CE
- **Source:** Ibn Tufayl, Hayy ibn Yaqzan, a philosophical tale from al-Andalus whose hero’s life unfolds in seven-year periods
- **Phases:**
  - With the doe (to 7): Raised by a gazelle, he lives as one of the animals and copies their calls. [1]
  - The doe’s death (7): Grief and wonder: he opens her body to find what has gone out of it. [2]
  - Fire and craft (to 21): He tames fire and makes clothes and shelter: practical reason grows. [3]
  - The natural world (21 to 28): Studying matter and form, he sees all living things as one family. [4]
  - The heavens and their Maker (28 to 35): The sky’s order shows the world needs a Maker beyond all bodies. [5–6]
  - The knowing self (35): His true self is no body but what knows God; he longs to return to it. [6]
  - Three likenesses: Living simply like the animals, pure and steady like the stars, and still like God. [7]
  - The vision (about 50): In contemplation the self vanishes, and only the Real remains. [8]
  - Absal and the island: He learns most people need law and story, and returns to solitude with a friend. [9]
- **URL:** https://www.ias.edu/ideas/2018/guenther-mysteries
- **Why it adds variety:** a lone child reaches union through observation and reason, with no prophet or scripture. It is Islamic but not scriptural, and from Muslim Spain.
- **Note:** sources agree on the seven-year structure and on knowledge of the Necessary Being at 35. The ages after that are approximate.

### 4. Rupa Goswami’s nine stages of devotion
- **Family:** Indian
- **Kind:** Religious
- **Date:** 1541
- **Source:** Rupa Goswami, Bhakti-rasamrita-sindhu 1.4.15–16 (Gaudiya Vaishnava tradition)
- **Phases:**
  - Faith (śraddhā): Trust in the path of devotion takes root. [2]
  - Holy company (sādhu-saṅga): Seeking out devotees and a teacher. [3]
  - Practice (bhajana-kriyā): Steady practice: chanting the names, hearing the stories, serving. [3]
  - Clearing (anartha-nivṛtti): Unwanted habits and desires fall away. [4]
  - Steadiness (niṣṭhā): Devotion becomes firm and unbroken. [5]
  - Taste (ruci): Delight in practice for its own sake. [5]
  - Attachment (āsakti): The heart clings to God as to a beloved. [6]
  - Feeling (bhāva): The first dawn of pure love: tears, trembling, the heart melting. [7]
  - Love (prema): Pure, all-absorbing love for Krishna: union in love, without merging. [8–9]
- **URL:** https://www.brajrasik.org/articles/599dd92159e8c72a534d85b4/the-nine-stages-of-bhakti-yoga-bhakti-rasamrit-sindhu-by-shri-roop-goswami
- **Why it adds variety:** the first map driven by love and feeling. The Indian column so far is all knowledge, discipline, energy and life stages.
- **Note:** commentators disagree on whether holy company comes before faith or after it. The verse’s order is kept here.

### 5. Sima Chengzhen, Sitting in Oblivion
- **Family:** Chinese
- **Kind:** Mystical
- **Date:** early 8th century CE (Sima Chengzhen died in 735)
- **Source:** Sima Chengzhen, Zuowang lun 坐忘論 (Discourse on Sitting in Oblivion), seven steps; translated by Livia Kohn
- **Phases:**
  - Respect and faith (jìngxìn 敬信): Trust that the Dao can be reached, and reverence for the path. [2]
  - Cutting off karma (duànyuán 斷緣): Ending needless ties and dealings that tangle the mind. [3]
  - Gathering the mind (shōuxīn 收心): Bringing the wandering mind home to rest in emptiness. [4]
  - Simplifying affairs (jiǎnshì 簡事): Keeping only what life truly needs and letting the rest go. [5]
  - True observation (zhēnguān 真觀): Seeing things clearly as they are, without being moved by them. [6]
  - Deep stillness (tàidìng 泰定): Concentration so deep the body is still as wood; wisdom comes unsought. [7]
  - Attaining the Dao (dédào 得道): Body and spirit join the Dao, free and at one with its change. [8–9]
- **URL:** https://en.wikipedia.org/wiki/Zuowanglun
- **Why it adds variety:** Chinese is now the second-thinnest family, with 3 columns. This is a meditation path that sits between Zhuangzi’s sayings and inner alchemy, Daoist with Buddhist touches.

### 6. The Hermetic ascent through the spheres (Poimandres)
- **Family:** Greek & Roman
- **Kind:** Mystical
- **Date:** c. 100–300 CE
- **Source:** Corpus Hermeticum I (Poimandres), sections 24–26
- **Phases:**
  - The body handed back: At death the body dissolves and the senses return to their sources. [1]
  - First zone: The power of growth and decay is given back. [2]
  - Second zone: Cunning and scheming are surrendered. [3]
  - Third zone: The deceit of desire is laid down. [3]
  - Fourth zone: The ruler’s arrogance, the love of power, is let go. [4]
  - Fifth zone: Unholy daring and rash boldness are given up. [4]
  - Sixth zone: Greedy striving for wealth falls away. [5]
  - Seventh zone: The lie that lies in wait is left behind. [6]
  - The eighth sphere (ὀγδοάς): Stripped of all the spheres added, the soul sings with the blessed to the Father. [7]
  - Into God: Rising to the Father, it becomes one of the powers and enters God. [8–9]
- **URL:** https://sacred-texts.com/chr/herm/hermes1.htm
- **Why it adds variety:** a Greek-Egyptian ascent shaped as an undressing, where each sphere takes back one vice. Nothing else in the chart has this shape.
- **Note:** the text speaks of zones, not named planets. Matching each zone to a planet is a later reading, so the titles above stay neutral.

### 7. Maimonides, the parable of the palace
- **Family:** Abrahamic & Persian
- **Kind:** Philosophical
- **Date:** c. 1190
- **Source:** Maimonides, The Guide for the Perplexed III.51
- **Phases:**
  - Outside the city: People with no religion at all, by reason or by tradition. [1]
  - Backs to the palace: Belief, but false; the further they walk, the further away they go. [1]
  - Seeking the palace: The many who keep the commandments without understanding them. [2]
  - Round the walls: Students of the law who take its truths on trust, without proof. [3]
  - In the antechambers: Those who reason about the foundations: logic and mathematics, then natural science. [4–5]
  - The inner court: Those who know of God all that can be proved: the rank of prophets. [6–7]
  - With God among people: The heart stays with God even while talking and working: Moses and the patriarchs. [8–9]
- **URL:** https://ccel.org/ccel/maimonides/guide/guide.vii.lii.html
- **Why it adds variety:** a Jewish rationalist ladder, where understanding brings a person near. It differs from Luzzatto’s ethical ladder already in the file.

### 8. The ten grounds of the bodhisattva (Mahayana)
- **Family:** Indian
- **Kind:** Religious
- **Date:** c. 1st–3rd century CE
- **Source:** Daśabhūmika Sūtra (Ten Grounds Sutra), also part of the Avataṃsaka Sūtra; each ground pairs with one of ten perfections
- **Phases:**
  - The awakening mind (bodhicitta): The wish to wake up for the sake of all beings, then long practice. [3–5]
  - Ground 1, Joyful (pramuditā): First direct sight of emptiness; great joy; giving made perfect. [6]
  - Grounds 2–3, Stainless and Luminous (vimalā, prabhākarī): Conduct made spotless; patience, and the light of the teaching. [6]
  - Grounds 4–6, Radiant, Hard to conquer, Facing (arciṣmatī, sudurjayā, abhimukhī): Effort, meditation and wisdom ripen until emptiness is faced directly. [7]
  - Ground 7, Far-going (dūraṅgamā): Skilful means: helping beings in countless ways; the last ground needing effort. [7]
  - Ground 8, Immovable (acalā): Effortless and unshakeable; no falling back. [8]
  - Grounds 9–10, Good mind, Cloud of Dharma (sādhumatī, dharmameghā): Perfect skill in teaching, which rains down on all beings. [8]
  - Buddhahood: Full awakening, for the good of all. [9]
- **URL:** https://www.britannica.com/topic/Dashabhumika-sutra
- **Why it adds variety:** the bodhisattva path, where awakening is for others. The existing Buddhist map is Theravada, the Mahamudra map is a meditation path, and Kūkai ranks the schools rather than tracing one path.

### 9. Mencius, the six grades of person
- **Family:** Chinese
- **Kind:** Philosophical
- **Date:** c. 300 BCE
- **Source:** Mencius 7B25 (the dialogue on Haosheng Buhai)
- **Phases:**
  - Good (shàn 善): Someone whose goodness others want. [3]
  - True (xìn 信): Someone who truly has that goodness in himself. [4]
  - Beautiful (měi 美): Someone filled with it through and through. [5]
  - Great (dà 大): Someone whose fullness shines out for all to see. [6]
  - Sage (shèng 聖): Someone whose greatness quietly transforms others. [7]
  - Spirit-like (shén 神): A sage beyond all understanding. [8–9]
- **URL:** https://sacred-texts.com/cfu/menc/menc28.htm
- **Why it adds variety:** a short Confucian ascent from goodness to the numinous, measured by inner fullness rather than age.
- **Partial overlap:** this would be the second Confucian map, after Analects 2.4.

### 10. Mulla Sadra, The Four Journeys
- **Family:** Abrahamic & Persian
- **Kind:** Philosophical
- **Date:** completed 1628
- **Source:** Mulla Sadra, al-Ḥikma al-mutaʿāliya fī’l-asfār al-ʿaqliyya al-arbaʿa (The Four Journeys), Shiraz
- **Phases:**
  - From the world to God: From many appearances towards the one reality beneath them. [3–6]
  - In God, with God: Absorbed in God’s nature and names; the self effaced. [7–8]
  - From God back to the world: A sober return, now with God, seeing the world flow from God. [9]
  - In the world, with God: Living and guiding among creatures, knowing all return to their source. [9]
- **URL:** https://plato.stanford.edu/entries/mulla-sadra/
- **Why it adds variety:** Persian Shiʿi philosophy, and the second Persian map after the Zoroastrian one. The climb includes the return, like the Cave and the ox-herding pictures.

### 11. Bonaventure, The Journey of the Mind into God
- **Family:** Abrahamic & Persian
- **Kind:** Mystical
- **Date:** 1259
- **Source:** Bonaventure, Itinerarium mentis in Deum
- **Phases:**
  - Prayer and longing: No one climbs without prayer and burning desire, says the prologue. [2]
  - Footprints in the world (per vestigia): God’s power, wisdom and goodness traced in the order of things. [3]
  - Footprints in the senses (in vestigiis): God traced in how we see, enjoy and judge the world. [4]
  - The image in the mind (per imaginem): Memory, understanding and will mirror God within. [5]
  - The image renewed (in imagine): Faith, hope and love restore that inner image by grace. [5]
  - God as Being: Reason sees God as pure Being, the One. [6]
  - God as Good: Faith sees God as overflowing Good, the Trinity. [7]
  - Passing over (excessus): The mind falls silent, and love crosses over into God. [8]
- **URL:** https://plato.stanford.edu/entries/bonaventure/
- **Why it adds variety:** a scholastic route that climbs from the outer world, through the mind, to God. The other Christian maps follow the soul’s purification.
- **Partial overlap:** this would be the fourth Christian map.

### 12. The five sheaths, Bhrigu’s inquiry (Taittiriya Upanishad)
- **Family:** Indian
- **Kind:** Mystical
- **Date:** c. 6th–5th century BCE
- **Source:** Taittirīya Upaniṣad 3.1–6 (Bhṛgu Vallī), with the five sheaths of 2.1–5
- **Phases:**
  - Food (anna): Sent to seek through austerity, Bhrigu first sees Brahman as food: the body and matter. [1–2]
  - Breath (prāṇa): Then as breath, the life that moves all beings. [3–4]
  - Mind (manas): Then as mind, which thinks and wants. [4–5]
  - Understanding (vijñāna): Then as understanding, the knowing behind the mind. [6]
  - Bliss (ānanda): At last as bliss, from which all beings are born and to which they return. [8–9]
- **URL:** https://miscellanie.com/allthetexts/hindu/Others/taittiriyaka-iii-1.html
- **Why it adds variety:** the oldest map in the set. A son questions his father and is sent inward, step by step, through the layers of the self.
- **Partial overlap:** it is shaped by layers, like Wilber’s states and the chakras.

### 13. The seven stages of the self (Sufi)
- **Family:** Abrahamic & Persian
- **Kind:** Mystical
- **Date:** 17th century CE, Khalwati order, building on the Qur’an
- **Source:** Qasim al-Khani, al-Sayr wa’l-sulūk ilā malik al-mulūk, and other Khalwati manuals: the “seven phases” (al-aṭwār al-sabʿa)
- **Phases:**
  - Commanding self (ammāra): The self that urges towards wrong. [1]
  - Blaming self (lawwāma): Conscience wakes; the self blames itself and struggles. [2–3]
  - Inspired self (mulhama): The heart begins to hear inspiration and to love the good. [4]
  - Self at peace (muṭmaʾinna): Calm trust in God; the struggle quietens. [5–6]
  - Content self (rāḍiya): Content with whatever God decrees. [7]
  - Pleasing self (marḍiyya): Well pleasing to God; living for God alone. [8]
  - Perfected self (kāmila): Purified and complete, and sent back to serve. [9]
- **URL:** https://dergipark.org.tr/en/download/article-file/2768031
- **Why it adds variety:** it shows how later Sufis built the Qur’an’s three states into a full ladder.
- **Duplicate:** it extends the existing Islam column (the three states of the self) and repeats its first three stages. Use it to replace that column, not alongside it. Lists vary between orders: some merge the last two stages into “pure and perfected”.

### 14. The seven grounds of knowledge (Yoga Vasistha)
- **Family:** Indian
- **Kind:** Mystical
- **Date:** c. 10th–12th century CE, Kashmir (dates debated)
- **Source:** Yoga Vāsiṣṭha, book 3, chapter 118, and later passages
- **Phases:**
  - Good wish (śubhecchā): A longing for freedom, with dispassion and study. [2]
  - Inquiry (vicāraṇā): Reflecting on the teaching, in good company. [3–4]
  - Thinning of the mind (tanumānasā): Attachments wear thin and the mind grows light. [5]
  - Reaching the real (sattvāpatti): The mind rests in pure being; truth is seen. [6]
  - Non-attachment (asaṃsakti): Untouched by anything, inside or out. [7]
  - Objects fall away (padārthābhāvanī): Things no longer appear as separate from the Self. [8]
  - The fourth (turyagā): Beyond waking, dreaming and sleep: liberation. [9]
- **URL:** https://enjoylearningsanskrit.com/scriptures/yoga-vasishtha/book-3/chapter-118
- **Why it adds variety:** little. It is a well-loved non-dual ladder.
- **Duplicate:** it largely repeats the Advaita column, which has the same aim and a similar early stretch. Add it only if you want a second non-dual Indian voice.

### Considered and not proposed

- **Zeami, The Nine Levels** (Kyūi 九位, c. 1428). A Japanese ladder of mastery in Noh acting, using Zen imagery. Zeami tells the actor to start in the middle, climb to the top three “flowers”, and only then take up the lowest styles. It would add a non-religious Japanese voice to a family of two columns. It is left out for now because I could not check the nine names and the training order against a translation online. It should be checked against Rimer and Yamazaki (1984) before use.
- **John of the Cross** (the nights of sense and spirit; the ten steps of the ladder of love, Dark Night II.19–20). Real and staged, but it overlaps heavily with Teresa and Underhill. It would make a good replacement for Underhill, since it is the primary source for the “dark night” that band 7 takes its name from.
- **Guigo II, The Ladder of Monks** (reading, meditation, prayer, contemplation). A method for a single sitting, not a life path, and its four steps repeat the three ways.
- **John Climacus, The Ladder of Divine Ascent.** Thirty rungs of virtues and vices, an ordered list rather than distinct phases; too long and too uneven for the chart.
- **Kabbalah.** In the classical sources the sefirot are divine qualities, not stages of a seeker’s path. The four worlds do appear as an ascent in Lurianic prayer, but as a daily climb through the morning service, not a life path. Leave it out unless a specialist source is used.
- **Ibn Arabi and al-Ghazali.** Ibn Arabi’s stations run into the hundreds. Al-Ghazali’s Deliverance from Error is an autobiography (senses, reason, Sufi experience), not a named scheme of stages.
- **Theravada progress of insight** (the sixteen knowledges). Staged and striking, including its own dark night, but it overlaps the Buddhist four stages. It could serve as an alternative version of that column.
- **The nine stages of calm abiding.** As you suspected, it ends in calm, not awakening.
- **The Mithraic grades** (Raven, Bride, Soldier, Lion, Persian, Sun-runner, Father). The names and their order are well attested, but what each grade meant inwardly is unknown, so any description would be guesswork.
- **Epicurean.** There is no staged path in the sources. Seneca (Letter 52) reports three types of learner, which are types, not stages.
- **Kegan, Spiral Dynamics, Daniel P. Brown.** Kegan and Spiral Dynamics largely repeat Cook-Greuter. Brown’s stages of meditation largely repeat Mahamudra.
- **Bucke** (simple, self and cosmic consciousness). Only three stages, and thin.
- **Gebser and Teilhard.** Stages of cultures and of the cosmos, not of a person.
- **Steiner** (preparation, illumination, initiation; then imagination, inspiration, intuition) **and Assagioli** (knowing the personality, mastering it, finding the Self, rebuilding around it). Both are real and staged, but Modern West already has 15 of the 43 columns.
- **Erikson.** Life-cycle crises rather than a climb; most phases would sit in bands 1 to 4.
- **Native American.** The Ojibwe Midewiwin has documented degrees (Hoffman, 1891), but their inner teachings are restricted by the tradition itself. No reliable source found gives a staged path to awakening that could be described without flattening it.

---

## Part C. The original terms

Only wrong or doubtful terms are listed. All the others were checked; the list of what was confirmed follows the corrections.

### Wrong or doubtful

1. **Zoroastrian, The Chinvat Bridge.** Wrong on two counts.
   - The Avestan should begin with č, not C: write `činuuatō pərətu`.
   - The usual Middle Persian form is Činwad, not Čēnwad.
   - Corrected term fields: `'činuuatō pərətu', 'Avestan; Middle Persian Činwad puhl'`.
   - Also doubtful: the description calls it “the bridge of the separator”. That is the traditional reading; Kellens argues for “the bridge of the accumulator”. To be safe, write “The bridge traditionally called the separator’s: …”.
   - Source: https://www.iranicaonline.org/articles/cinwad-puhl-av

2. **Christian, The three ways, phase 3.** Doubtful. Dionysius’s own triad is κάθαρσις, φωτισμός, τελείωσις: purification, illumination, perfection. θέωσις (deification) is the goal he names, not the third term of the triad. Suggested fields: `'τελείωσις', 'perfection; its goal is θέωσις, deification; Latin via unitiva'`. The English title “Deification” can stay.
   - Source: https://www.encyclopedia.com/environment/encyclopedias-almanacs-transcripts-and-maps/dionysius-areopagite

3. **Pythagorean, The hearers.** Doubtful. ἀκουσματικοί is Iamblichus’s name for one of two groups of followers: those who kept the sayings (ἀκούσματα), as against the μαθηματικοί. It is not the first grade of a single ladder. The grades in this column follow Gellius, who calls the first grade ἀκουστικοί. The p[4] term should be ἀκουστικοί; see the replacement line in Part A, section 2.
   - Source: https://plato.stanford.edu/entries/pythagoreanism/

4. **Kierkegaard.** Doubtful, because the spelling is mixed. The title is in Kierkegaard’s own 1845 spelling (Stadier paa Livets Vei), but the terms are modernised. He wrote “det Æsthetiske”, “det Ethiske” and “Religieusitet A / B”; the data has “det æstetiske”, “det etiske” and “Religiøsitet A / B”. Pick one system:
   - Original: `det Æsthetiske`, `det Ethiske`, `Religieusitet A`, `Religieusitet B` (the other terms already match).
   - Modern: also change `o` to `Stadier på livets vej`.
   - Source: https://tekster.kb.dk/text/sks-ae-txt-shoot-idfbb85a40-7526-4835-9db0-bed09d912a97.pdf (Søren Kierkegaards Skrifter, the Postscript)

5. **Islam, The commanding self.** Doubtful citation. Qur’an 12:53 does not contain the fixed phrase “al-nafs al-ammāra”. It says the self is indeed “commanding to evil”: إن النفس لأمارة بالسوء. The two-word name is later usage. 75:2 and 89:27 do contain their phrases as cited. Suggested p[5]: `'النفس الأمارة; from 12:53, إن النفس لأمارة بالسوء'`.
   - Source: https://quran.com/12/53

6. **Sikh, Realm of effort.** Doubtful translation. Saram has two standard readings: effort (Sanskrit śrama) and humility (Persian sharm). The widely used Sant Singh Khalsa translation has “in the realm of humility, the Word is Beauty”. Suggested p[5]: `'ਸਰਮ ਖੰਡ; saram read as effort or as humility'`. The Gurmukhi itself is correct.
   - Source: https://searchgurbani.com/guru-granth-sahib/ang/8

7. **Hindu tantra.** Wrong pairing. The column’s own title, ṣaṭ-cakra-nirūpaṇa, means “description of the six centres”, so it contradicts `f: 'The seven chakras'`. Fixed in Part A, section 7.
   - Source: https://www.wisdomlib.org/hinduism/book/shat-cakra-nirupana-english/d/doc1144813.html

### Checked and correct

- **Greek (polytonic).**
  - Orphic: all six terms and the thirst line, including δίψῃ, αὖος, κύκλος βαρυπενθής and θεὸς δ’ ἔσῃ ἀντὶ βροτοῖο.
  - Pythagorean: φυσιογνωμονία, ἐχεμυθία, μαθηματικοί, φυσικοί, ἕπου θεῷ.
  - Plato’s Cave: σκιαί, εἰκασία, περιαγωγή (518d), τραχεῖα ἀνάβασις (515e), τὰ ἐν τοῖς ὕδασι εἴδωλα, ἡ τοῦ ἀγαθοῦ ἰδέα (517b), καταβατέον (520c).
  - Diotima: τὸ πολὺ πέλαγος τοῦ καλοῦ, ἐξαίφνης.
  - Aristotle’s three βίοι; Porphyry’s four ἀρεταί; φυγὴ μόνου πρὸς μόνον (VI.9.11); the alchemical μελάνωσις, λεύκωσις, ξάνθωσις, ἴωσις.
- **Latin.** Seneca’s primum, secundum, tertium genus and proficientes. Spinoza’s imaginatio · opinio, ratio, scientia intuitiva, Deus sive Natura, amor Dei intellectualis, beatitudo. Magnum opus, prima materia, lapis philosophorum.
- **German.**
  - Hegel: modern spelling of Bewusstsein, which is fine; das unglückliche Bewusstsein; das absolute Wissen.
  - Schopenhauer: reines, willenloses Subjekt der Erkenntnis; Verneinung des Willens zum Leben.
  - Nietzsche: Kameel is his own spelling; also Du-sollst, Ich will, ein heiliges Ja-sagen.
  - Jung: Mana-Persönlichkeit, die zweite Lebenshälfte, das Selbst.
- **Danish.** Stadier paa Livets Vei, Enten – Eller, Fortvivlelse, den uendelige Resignation, Troen, i Kraft af det Absurde. Only the spelling mix above is doubtful.
- **Spanish.** All the moradas, oración de quietud, oración de unión, desposorio espiritual, matrimonio espiritual. The title Las moradas del castillo interior is one of the accepted titles; the work is also known as Castillo interior and as Las moradas.
- **Polish.** dezintegracja pozytywna.
- **Chinese characters and pinyin.**
  - Analects 2.4: 志于學, 而立, 不惑, 知天命, 耳順, 從心所欲，不踰矩. Bú huò shows the tone change; bù huò, the dictionary tone, is also acceptable.
  - Zhuangzi: 外天下, 外物, 外生, 朝徹, 見獨, 攖寧, 無古今, 不死不生.
  - Neidan: 內丹, 築基, 煉精化氣, 煉氣化神, 金丹, 煉神還虛, 煉虛合道.
- **Japanese, Kūkai.** All ten are correct in characters and readings:
  - 異生羝羊心 ishō teiyō shin; 愚童持斎心 gudō jisai shin; 嬰童無畏心 yōdō mui shin; 唯蘊無我心 yuiun muga shin; 抜業因種心 batsugō inshu shin;
  - 他縁大乗心 taen daijō shin; 覚心不生心 kakushin fushō shin; 一道無為心 ichidō mui shin; 極無自性心 gokumu jishō shin; 秘密荘厳心 himitsu shōgon shin.
  - Also 十住心論 Jūjūshinron and Hizō hōyaku.
  - The data uses modern Japanese forms (斎, 抜, 覚, 乗, 荘). Kūkai’s text has the older forms 齋, 拔, 覺, 乘, 莊. Both are acceptable for a Japanese reading.
- **Japanese, ox-herding.** All ten are correct, matching Kuoan’s titles:
  - 尋牛 jingyū; 見跡 kenseki; 見牛 kengyū; 得牛 tokugyū; 牧牛 bokugyū;
  - 騎牛帰家 kigyū kika; 忘牛存人 bōgyū zonnin; 人牛倶忘 ningyū gubō; 返本還源 henpon kangen; 入鄽垂手 nitten suishu.
  - Also 十牛図 jūgyūzu.
  - Modern 帰 and 図 stand for the older 歸 and 圖, and 倶 is a variant of 俱; all are fine.
  - Source for the Kūkai stages: https://www.japanesewiki.com/Buddhism/Jujushinron%20(Ten%20Stages%20of%20Mind%20Development).html
- **Sanskrit (IAST and Devanagari).** All correct:
  - the āśramas;
  - the eight limbs;
  - the Advaita terms, including ṣaṭ-sampatti, mumukṣutva and ahaṃ brahmāsmi;
  - all the guṇasthāna names;
  - the chakra names;
  - Aurobindo’s caitya puruṣa, vijñāna and ṛta-cit;
  - turīya and turīyātīta.
- **Pali.** ariya-puggala, puthujjana, kalyāṇa-puthujjana, saṃyojana, sīla, samādhi, paññā, sotāpanna, sakadāgāmī, anāgāmī, arahant, kataṃ karaṇīyaṃ.
- **Tibetan (Wylie).** phyag rgya chen po, sngon ’gro, rtse gcig, spros bral, ro gcig, sgom med. The phonetic forms ngöndro, tsechik, trödral, rochik and gommé are fine.
- **Hebrew.** מסילת ישרים and all nine traits, including ענוה in Luzzatto’s own spelling.
- **Arabic and Persian.** النفس اللوامة (75:2), النفس المطمئنة (89:27), الجهاد الأكبر. Attar’s منطق الطیر and all seven valleys, correctly in Persian spelling with ی: طلب, عشق, معرفت, استغنا, توحید, حیرت, فقر و فنا, سیمرغ.
- **Gurmukhi.** ਜਪੁਜੀ ਸਾਹਿਬ and all five khands. The text itself has the inflected form ਸਚਿ ਖੰਡਿ; the dictionary form ਸਚ ਖੰਡ is right for a label.
- **Avestan and Middle Persian, apart from item 1.** daēnā / dēn; humata, hūxta, hvaršta; humat, hūxt, huwaršt; anaγra raocå. Garō dəmāna is the Gathic form. The Hadokht Nask’s own Young Avestan form would be garō nmāna, which could go in p[5] if you want.
