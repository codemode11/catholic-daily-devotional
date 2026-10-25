import { SacredMasterpiece } from '../types';

export interface NiepokalanowHighResImage {
  id: string;
  title: string;
  shortLabel: string;
  resolution: string;
  imageUrl: string;
  description: string;
  attributionText: string;
  creditShort?: string;
  attributionUrl?: string;
  objectPosition?: string;
}

export const NIEPOKALANOW_HIGH_RES_IMAGES: NiepokalanowHighResImage[] = [
  {
    id: 'star-of-the-immaculate',
    title: 'Star of the Immaculate Altar of Perpetual Adoration (Niepokalanów)',
    shortLabel: '1. Star of the Immaculate Altar',
    resolution: '3840 × 2160 4K Ultra-Res',
    imageUrl: '/images/sacred-art/star_of_the_immaculate_altar_wide.jpg',
    description: 'The monumental Altar of Perpetual Adoration at the Basilica of the Immaculate Conception in Niepokalanów, Poland—founded by St. Maximilian Kolbe. The Blessed Virgin Mary, living Tabernacle of the Most High, presents her Eucharistic Son in perpetual adoration for world peace.',
    attributionText: 'Drapikowski Studio • Basilica of the Immaculate Conception, Niepokalanów, Poland',
    creditShort: 'Niepokalanów • Star of the Immaculate',
    attributionUrl: 'https://images.unsplash.com/photo-1599752766954-57c001ba82cc?q=80&w=1600&auto=format&fit=crop',
    objectPosition: '50% 80%'
  },
  {
    id: 'unsplash-eucharistic-adoration',
    title: 'Eucharistic Adoration and Benediction of the Most Blessed Sacrament',
    shortLabel: '2. Eucharistic Adoration Altar',
    resolution: '1471 × 981 High-Res',
    imageUrl: 'https://images.unsplash.com/photo-1599752766954-57c001ba82cc?q=80&w=1471&auto=format&fit=crop',
    description: 'Solemn Exposition and Benediction of the Most Blessed Sacrament, with pure white Host and altar candles.',
    attributionText: 'Image Credit: Jacob Bentzinger; Unsplash • Eucharistic Adoration',
    creditShort: 'Jacob Bentzinger; Unsplash',
    attributionUrl: 'https://images.unsplash.com/photo-1599752766954-57c001ba82cc?q=80&w=1471&auto=format&fit=crop',
    objectPosition: '50% 85%'
  },
  {
    id: 'supper-at-emmaus',
    title: 'The Supper at Emmaus',
    shortLabel: '3. The Supper at Emmaus (Caravaggio)',
    resolution: 'High-Res Masterpiece',
    imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    description: 'The Risen Christ blessing and breaking the bread, opening the eyes of His disciples in the Holy Eucharist.',
    attributionText: 'Michelangelo Merisi da Caravaggio (1601) • National Gallery, London',
    creditShort: 'Caravaggio • Emmaus',
    attributionUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    objectPosition: 'center 45%'
  },
  {
    id: 'raphael-disputation',
    title: 'The Disputation of the Holy Sacrament (La Disputa)',
    shortLabel: '4. La Disputa (Raphael)',
    resolution: 'Vatican High-Res Fresco',
    imageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1400&auto=format&fit=crop',
    description: 'The Church triumphant and Church militant united in perpetual adoration of the Blessed Sacrament.',
    attributionText: 'Raphael (1509–1510) • Apostolic Palace, Vatican',
    creditShort: 'Raphael • La Disputa',
    attributionUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1400&auto=format&fit=crop',
    objectPosition: 'center 35%'
  },
  {
    id: 'murillo-immaculate-conception',
    title: 'The Immaculate Conception of Los Venerables',
    shortLabel: '5. Immaculate Conception (Murillo)',
    resolution: 'Prado High-Res Masterpiece',
    imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1400&auto=format&fit=crop',
    description: 'The Blessed Virgin Mary, Woman clothed with the sun and living Tabernacle of the Most High.',
    attributionText: 'Bartolomé Esteban Murillo (1678) • Museo del Prado, Madrid',
    creditShort: 'Murillo • Immaculate Conception',
    attributionUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1400&auto=format&fit=crop',
    objectPosition: 'center 30%'
  },
  {
    id: 'cathedral-sanctum-adoration',
    title: 'Solemn Exposition of the Blessed Sacrament in High Sanctuary',
    shortLabel: '6. High Cathedral Sanctuary Exposition',
    resolution: '1470 × 980 High-Res',
    imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    description: 'The Consecrated Sacred Host exposed in solemn Eucharistic adoration upon the high altar beneath soaring sacred arches.',
    attributionText: 'Sanctuary of the Blessed Sacrament • Unsplash',
    creditShort: 'Catholic Sacred Sanctuary',
    attributionUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    objectPosition: 'center center'
  }
];

export const SACRED_MASTERPIECES: SacredMasterpiece[] = [
  {
    id: 'art-star-of-the-immaculate',
    title: 'Star of the Immaculate Altar of Perpetual Adoration',
    artist: 'Drapikowski Studio (Niepokalanów Basilica, Poland)',
    year: '2018',
    location: 'World Center of Perpetual Adoration, Niepokalanów, Poland',
    imageUrl: '/images/sacred-art/star_of_the_immaculate.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1599752766954-57c001ba82cc?q=80&w=1600&auto=format&fit=crop',
    scriptureReference: 'Luke 1:46-47: "My soul magnifies the Lord, and my spirit rejoices in God my Savior."',
    theologicalReflection: `The monumental Altar of Perpetual Adoration "Star of the Immaculate" (Gwiazda Niepokalanej) fulfills the prophetic vision of Saint Maximilian Maria Kolbe, who desired that from Niepokalanów, perpetual Eucharistic adoration would radiate peace to the whole world. Sculpted by the renowned Drapikowski Studio, the altar depicts the Blessed Virgin Mary in life size, clothed in celestial light with arms gently extended, presenting the Consecrated Sacred Host exposed in a radiant crystal monstrance resting against her Immaculate Heart—visualizing Our Lady as the first living Tabernacle of the Most High.`,
    associatedMysteryOrSubject: 'Perpetual Eucharistic Adoration and The Immaculate Conception'
  },
  {
    id: 'art-supper-at-emmaus',
    title: 'The Supper at Emmaus',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1601',
    location: 'National Gallery, London',
    imageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1400&auto=format&fit=crop',
    scriptureReference: 'Luke 24:30-31: "When he was at table with them, he took the bread and blessed and broke it, and gave it to them. And their eyes were opened and they recognized him; and he vanished out of their sight."',
    theologicalReflection: `At the exact moment Christ blesses and breaks the bread, the disciples suddenly recognize the stranger as their Crucified Master. Cleopas leaps forward in shock while the other disciple throws back his arms in astonishment, forming the shape of a cross. The basket of fruit teeters dramatically over the edge of the table, reminding us of the fragility of earthly life in the presence of the eternal Eucharistic banquet.`,
    associatedMysteryOrSubject: 'The Holy Eucharist and Sacred Liturgy'
  },
  {
    id: 'art-raphael-disputation',
    title: 'The Disputation of the Holy Sacrament (La Disputa)',
    artist: 'Raphael (Raffaello Sanzio)',
    year: '1509–1510',
    location: 'Stanza della Segnatura, Apostolic Palace, Vatican',
    imageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1599752766954-57c001ba82cc?q=80&w=1471&auto=format&fit=crop',
    scriptureReference: 'John 6:51: "I am the living bread that came down from heaven. If anyone eats of this bread, he will live forever; and the bread that I will give for the life of the world is my flesh."',
    theologicalReflection: `Raphael's colossal fresco visualizes the mystery of the Church united in perpetual adoration of the Holy Eucharist. At the focal point on the altar stands a golden monstrance containing the Blessed Sacrament—the physical nexus between Heaven and Earth. Above, the Holy Trinity reigns: God the Father blesses the cosmos, the glorified Risen Christ displays His sacred wounds flanked by the Virgin Mary and Saint John the Baptist, and the Holy Spirit descends in the form of a dove. On earth below, doctors of the Church contemplate and write upon the unfathomable mystery of Transubstantiation.`,
    associatedMysteryOrSubject: 'The Holy Eucharist, The Communion of Saints, and The Holy Trinity'
  },
  {
    id: 'art-murillo-immaculate-conception',
    title: 'The Immaculate Conception of Los Venerables',
    artist: 'Bartolomé Esteban Murillo',
    year: '1678',
    location: 'Museo del Prado, Madrid',
    imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1400&auto=format&fit=crop',
    scriptureReference: 'Revelation 12:1: "And a great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars."',
    theologicalReflection: `Murillo, acclaimed as the master of Marian painting, portrays the Blessed Virgin Mary preserved immune from all stain of original sin from the first instant of her conception. Bathed in golden celestial radiance and robed in pure white and azure blue, Our Lady stands upon the crescent moon with hands folded across her heart, lifted by jubilant hosts of cherubim carrying palms and lilies of purity. Her humble, upward gaze invites every soul into pure contemplation of God's redeeming grace.`,
    associatedMysteryOrSubject: 'The Immaculate Conception and The Blessed Virgin Mary'
  },
  {
    id: 'art-leonardo-last-supper',
    title: 'The Last Supper (Il Cenacolo)',
    artist: 'Leonardo da Vinci',
    year: '1495–1498',
    location: 'Convent of Santa Maria delle Grazie, Milan',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    scriptureReference: 'Luke 22:19: "And he took bread, and when he had given thanks he broke it and gave it to them, saying, \'This is my body which is given for you. Do this in remembrance of me.\'"',
    theologicalReflection: `Leonardo captures the sacred, tense moment immediately following Christ's declaration: "Truly, truly, I say to you, one of you will betray me." At the center, Jesus sits in calm, pyramidical majesty—the still point around which the twelve Apostles surge in waves of agitation and questioning. Jesus gestures with open hands toward the bread and wine, establishing the Holy Sacrifice of the Mass and the Priesthood of the New Covenant.`,
    associatedMysteryOrSubject: 'The Institution of the Holy Eucharist and Holy Thursday'
  },
  {
    id: 'art-millet-angelus',
    title: "L'Angélus (The Angelus)",
    artist: 'Jean-François Millet',
    year: '1857–1859',
    location: "Musée d'Orsay, Paris",
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    scriptureReference: 'Luke 1:38: "And Mary said, \'Behold, I am the handmaid of the Lord; let it be to me according to your word.\' And the angel departed from her."',
    theologicalReflection: `Millet's immortal masterpiece depicts a humble peasant couple in Barbizon at dusk, pausing their arduous harvest work as the distant church bell tolls the evening Angelus. The man removes his cap and clasps it reverently, while the woman folds her hands across her breast in devout recitation of the Incarnation prayer. The twilight golden haze envelopes the scene, sanctifying ordinary daily labor and elevating human work into continuous contemplation and praise of God.`,
    associatedMysteryOrSubject: 'The Incarnation, Sacred Labor, and The Angelus'
  },
  {
    id: 'art-calling-of-matthew',
    title: 'The Calling of Saint Matthew',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1599–1600',
    location: 'Contarelli Chapel, San Luigi dei Francesi, Rome',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1400&auto=format&fit=crop',
    scriptureReference: 'Matthew 9:9: "As Jesus passed on from there, he saw a man called Matthew sitting at the tax office; and he said to him, \'Follow me.\' And he rose and followed him."',
    theologicalReflection: `Caravaggio's revolutionary use of chiaroscuro visually captures the intrusion of unmerited Divine Grace into a dark, sinful world. A piercing beam of heavenly light enters from above Christ's outstretched hand—a hand deliberately mirroring Adam's hand from Michelangelo's Sistine Chapel ceiling, revealing Jesus as the New Adam who re-creates human nature. Matthew looks up in astonished humility, pointing to his chest: "Lord, is it truly me you call?"`,
    associatedMysteryOrSubject: 'Vocation, Divine Grace, and Evangelization'
  },
  {
    id: 'art-incredulity-of-thomas',
    title: 'The Incredulity of Saint Thomas',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1601–1602',
    location: 'Sanssouci Picture Gallery, Potsdam',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    scriptureReference: 'John 20:27-28: "Then he said to Thomas, \'Put your finger here, and see my hands; and put out your hand, and place it in my side; do not be faithless, but believing.\' Thomas answered him, \'My Lord and my God!\'"',
    theologicalReflection: `Caravaggio strips away all decorative distraction to present the raw physical reality of Christ's Resurrection. Jesus Himself gently guides the calloused, sunburnt hand of Saint Thomas directly into the open spear wound of His Sacred Side. The painting demonstrates that faith is not a pious myth, but founded upon tangible, historical encounters with the bodily Risen Lord.`,
    associatedMysteryOrSubject: 'The Resurrection and Faith'
  },
  {
    id: 'art-saint-jerome-writing',
    title: 'Saint Jerome Writing',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1605–1606',
    location: 'Galleria Borghese, Rome',
    imageUrl: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1400&auto=format&fit=crop',
    scriptureReference: '2 Timothy 3:16: "All scripture is inspired by God and profitable for teaching, for reproof, for correction, and for training in righteousness."',
    theologicalReflection: `Caravaggio depicts Saint Jerome, Father and Doctor of the Church, translating Sacred Scripture into the Latin Vulgate. The saint's aged, illuminated brow concentrates upon the sacred text, while his quill extends across the parchment. Beside the scriptures sits a human skull—the Memento Mori—reminding the faithful that worldly vanity perishes, but the Word of God endures forever.`,
    associatedMysteryOrSubject: 'Sacred Scripture and Church Fathers'
  },
  {
    id: 'art-entombment-of-christ',
    title: 'The Entombment of Christ',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1603–1604',
    location: 'Pinacoteca Vaticana, Vatican Museums, Rome',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    scriptureReference: 'Matthew 27:59-60: "And Joseph took the body, and wrapped it in a clean linen shroud, and laid it in his own new tomb, which he had hewn in the rock."',
    theologicalReflection: `Commissioned for the altar of the Chiesa Nuova in Rome, Caravaggio planned this masterpiece so that the viewer stands below the tomb stone. As the priest consecrated the Holy Eucharist at the altar below, Christ's limp sacred body seemed to be lowered directly onto the altar table, bridging the historical sacrifice of Golgotha with the sacramental re-presentation of the Holy Mass.`,
    associatedMysteryOrSubject: 'The 5th Sorrowful Mystery and Holy Saturday'
  },
  {
    id: 'art-fra-angelico-annunciation',
    title: 'The Annunciation',
    artist: 'Fra Angelico (Blessed Angelico)',
    year: '1438–1445',
    location: 'Convent of San Marco, Florence',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1400&auto=format&fit=crop',
    scriptureReference: 'Luke 1:38: "Behold, I am the handmaid of the Lord; let it be to me according to your word."',
    theologicalReflection: `Painted at the top of the dormitory stairs in the Dominican monastery of San Marco so that the friars would bow in veneration each time they passed. The angel Gabriel, clothed in iridescent rainbow wings, bows in reverent awe before the Queen of Angels, who crosses her hands over her breast in total humility, uttering the eternal "Fiat" that brought the Son of God into human flesh.`,
    associatedMysteryOrSubject: 'The 1st Joyful Mystery'
  },
  {
    id: 'art-raphael-transfiguration',
    title: 'The Transfiguration',
    artist: 'Raphael (Raffaello Sanzio)',
    year: '1516–1520',
    location: 'Pinacoteca Vaticana, Rome',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1400&auto=format&fit=crop',
    scriptureReference: 'Matthew 17:2: "And he was transfigured before them, and his face shone like the sun, and his garments became white as light."',
    theologicalReflection: `Raphael's final masterpiece, placed at the head of his funeral bier. The upper half portrays Christ floating in radiant clouds between Moses and Elijah on Mount Tabor, prefiguring the glory of the Resurrection. The lower half portrays the suffering earth below, reminding us that between glory and our present pilgrimage lies the necessity of prayer, fasting, and faith.`,
    associatedMysteryOrSubject: 'The 4th Luminous Mystery'
  },
  {
    id: 'art-joseph-carpenter',
    title: 'Saint Joseph the Carpenter',
    artist: 'Georges de La Tour',
    year: 'c. 1642',
    location: 'Musée du Louvre, Paris',
    imageUrl: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop',
    scriptureReference: 'Mark 6:3: "Is not this the carpenter, the son of Mary and brother of James and Joses and Judas and Simon?"',
    theologicalReflection: `In the darkness of Nazareth, young Jesus holds a single candle, illuminating the weathered, concentrated face of His earthly foster-father Saint Joseph. Joseph drills into a heavy wooden beam—a poignant foreshadowing of the wood of the Cross. The candle's flame, shielded by the hand of the Child Jesus, shines through His fingers with translucent red, recalling the blood of the Lamb who lights the world.`,
    associatedMysteryOrSubject: 'Saint Joseph and Holy Family'
  },
  {
    id: 'art-return-prodigal-son',
    title: 'The Return of the Prodigal Son',
    artist: 'Rembrandt van Rijn',
    year: 'c. 1669',
    location: 'Hermitage Museum, Saint Petersburg',
    imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1400&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1470&auto=format&fit=crop',
    scriptureReference: 'Luke 15:20: "And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him."',
    theologicalReflection: `Rembrandt depicts the fathomless mercy of God the Father embracing the penitent sinner. Notice the Father's two hands on the son's shoulder: the left hand is masculine and strong, representing divine justice and steadfast fatherhood; the right hand is feminine and soft, representing tender maternal compassion. The barefoot son rests his shaved, weary head against the Father's heart.`,
    associatedMysteryOrSubject: 'Penance, Divine Mercy and Forgiveness'
  }
];
