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
    id: 'unsplash-eucharistic-adoration',
    title: 'Eucharistic Adoration & Benediction of the Most Blessed Sacrament',
    shortLabel: '1. Eucharistic Adoration & Altar Candles',
    resolution: '1471 × 981 High-Res',
    imageUrl: 'https://images.unsplash.com/photo-1599752766954-57c001ba82cc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    description: 'Solemn Exposition and Benediction of the Most Blessed Sacrament, featuring the pure white Consecrated Host enshrined inside a golden sunburst monstrance amidst rising clouds of liturgical incense and ten lit altar candles on flanking brass candelabras.',
    attributionText: 'Image Credit: Jacob Bentzinger; Unsplash • Eucharistic Adoration & Benediction of the Most Blessed Sacrament',
    creditShort: 'Jacob Bentzinger; Unsplash',
    attributionUrl: 'https://images.unsplash.com/photo-1599752766954-57c001ba82cc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    objectPosition: '50% 85%'
  },
  {
    id: 'niepokalanow-ig-exact',
    title: 'Full Sculpture of Mary, Golden Lilies & Pure White Sacred Host (Niepokalanów, Poland)',
    shortLabel: '2. Full Sculpture & White Host',
    resolution: '2160 × 2700 High-Res',
    imageUrl: '/src/assets/images/niepokalanow_ig_exact_hires.jpg',
    description: 'The full vertical photograph of the "Star of the Immaculate" monstrance-altar in the Perpetual Adoration Chapel of Niepokalanów Monastery (Teresin, Poland), showing the radiant white Sacred Host inside the golden monstrance at Mary’s Immaculate Heart and golden lilies rising from the stone base.',
    attributionText: 'Image Credit: @mary_my_mother on Instagram • Monstrance sculpted by Drapikowski Studio, Perpetual Adoration Chapel of Niepokalanów Monastery, Teresin, Poland',
    attributionUrl: 'https://www.instagram.com/p/DEDCk-pPtYJ/?img_index=2',
    objectPosition: 'center top'
  }
];

export const SACRED_MASTERPIECES: SacredMasterpiece[] = [
  {
    id: 'art-monstrance-niepokalanow',
    title: '"Star of the Immaculate" Altar of Perpetual Adoration (Niepokalanów, Poland)',
    artist: 'Drapikowski Studio • Image Courtesy of @mary_my_mother (Instagram)',
    year: '2018',
    location: 'Perpetual Adoration Chapel, Niepokalanów Monastery, Teresin, Poland',
    imageUrl: '/src/assets/images/niepokalanow_ig_exact_hires.jpg',
    fallbackImageUrl: '/src/assets/images/niepokalanow_mary_blessed_sacrament.jpg',
    scriptureReference: 'John 6:51: "I am the living bread that came down from heaven. If anyone eats of this bread, he will live forever. And the bread that I will give for the life of the world is my flesh."',
    theologicalReflection: `In the historic Franciscan sanctuary founded in autumn 1927 by Saint Maximilian Kolbe in Niepokalanów (Teresin), Poland, this breathtaking monstrance-altar represents the Blessed Virgin Mary holding the exposed Blessed Sacrament—the pure white Consecrated Host—in a radiant golden monstrance at the center of her Immaculate Heart. Image attribution: @mary_my_mother on Instagram (https://www.instagram.com/p/DEDCk-pPtYJ/?img_index=2).`,
    associatedMysteryOrSubject: 'The Most Holy Eucharist, Perpetual Adoration, & Mary Tabernacle of the Lord'
  },
  {
    id: 'art-millet-angelus',
    title: "L'Angélus (The Angelus)",
    artist: 'Jean-François Millet',
    year: '1857–1859',
    location: "Musée d'Orsay, Paris",
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859._%C3%93leo_sobre_lienzo%2C_55.5_x_66_cm%29.jpg/1280px-JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859._%C3%93leo_sobre_lienzo%2C_55.5_x_66_cm%29.jpg',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859._%C3%93leo_sobre_lienzo%2C_55.5_x_66_cm%29.jpg/1280px-JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859._%C3%93leo_sobre_lienzo%2C_55.5_x_66_cm%29.jpg',
    scriptureReference: 'Luke 1:38: "And Mary said, \'Behold, I am the handmaid of the Lord; let it be to me according to your word.\' And the angel departed from her."',
    theologicalReflection: `Millet's immortal masterpiece depicts a humble peasant couple in Barbizon at dusk, pausing their arduous harvest work as the distant church bell of Chailly-en-Bière tolls the evening Angelus. The man removes his cap and clasps it reverently, while the woman folds her hands across her breast in devout recitation of the Incarnation prayer. The twilight golden haze envelopes the scene, sanctifying ordinary daily labor and elevating human work into continuous contemplation and praise of God.`,
    associatedMysteryOrSubject: 'The Incarnation, Sacred Labor, & The Angelus'
  },
  {
    id: 'art-calling-of-matthew',
    title: 'The Calling of Saint Matthew',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1599–1600',
    location: 'Contarelli Chapel, San Luigi dei Francesi, Rome',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Caravaggio_%E2%80%94_The_Calling_of_Saint_Matthew.jpg/1280px-Caravaggio_%E2%80%94_The_Calling_of_Saint_Matthew.jpg',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Caravaggio_%E2%80%94_The_Calling_of_Saint_Matthew.jpg',
    scriptureReference: 'Matthew 9:9: "As Jesus passed on from there, he saw a man called Matthew sitting at the tax office; and he said to him, \'Follow me.\' And he rose and followed him."',
    theologicalReflection: `Caravaggio's revolutionary use of chiaroscuro (dramatic light and darkness) visually captures the intrusion of unmerited Divine Grace into a dark, sinful world. A piercing beam of heavenly light enters from above Christ's outstretched hand—a hand deliberately mirroring Adam's hand from Michelangelo's Sistine Chapel ceiling, revealing Jesus as the New Adam who re-creates human nature. Matthew looks up in astonished humility, pointing to his chest as if to say: "Lord, is it truly me you call?"`,
    associatedMysteryOrSubject: 'Vocation, Divine Grace, and Evangelization'
  },
  {
    id: 'art-incredulity-of-thomas',
    title: 'The Incredulity of Saint Thomas',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1601–1602',
    location: 'Sanssouci Picture Gallery, Potsdam',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Der_ungl%C3%A4ubige_Thomas_-_Michelangelo_Merisi%2C_named_Caravaggio.jpg/1280px-Der_ungl%C3%A4ubige_Thomas_-_Michelangelo_Merisi%2C_named_Caravaggio.jpg',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Der_ungl%C3%A4ubige_Thomas_-_Michelangelo_Merisi%2C_named_Caravaggio.jpg',
    scriptureReference: 'John 20:27-28: "Then he said to Thomas, \'Put your finger here, and see my hands; and put out your hand, and place it in my side; do not be faithless, but believing.\' Thomas answered him, \'My Lord and my God!\'"',
    theologicalReflection: `Caravaggio strips away all decorative distraction to present the raw physical reality of Christ's Resurrection. Jesus Himself gently guides the calloused, sunburnt hand of Saint Thomas directly into the open spear wound of His Sacred Side. The painting demonstrates that faith is not a pious myth, but founded upon tangible, historical encounters with the bodily Risen Lord.`,
    associatedMysteryOrSubject: 'The Resurrection & Faith'
  },
  {
    id: 'art-supper-at-emmaus',
    title: 'The Supper at Emmaus',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1601',
    location: 'National Gallery, London',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/1602-3_Caravaggio%2CSupper_at_Emmaus_National_Gallery%2C_London.jpg/1280px-1602-3_Caravaggio%2CSupper_at_Emmaus_National_Gallery%2C_London.jpg',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/1602-3_Caravaggio%2CSupper_at_Emmaus_National_Gallery%2C_London.jpg',
    scriptureReference: 'Luke 24:30-31: "When he was at table with them, he took the bread and blessed and broke it, and gave it to them. And their eyes were opened and they recognized him; and he vanished out of their sight."',
    theologicalReflection: `At the exact moment Christ blesses and breaks the bread, the disciples suddenly recognize the stranger as their Crucified Master. Cleopas leaps forward in shock while the other disciple throws back his arms in astonishment, forming the shape of a cross. The basket of fruit teeters dramatically over the edge of the table, reminding us of the fragility of earthly life in the presence of the eternal Eucharistic banquet.`,
    associatedMysteryOrSubject: 'The Holy Eucharist & Sacred Liturgy'
  },
  {
    id: 'art-saint-jerome-writing',
    title: 'Saint Jerome Writing',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1605–1606',
    location: 'Galleria Borghese, Rome',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Saint_Jerome_Writing-Caravaggio_%281605-6%29.jpg/1280px-Saint_Jerome_Writing-Caravaggio_%281605-6%29.jpg',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Saint_Jerome_Writing-Caravaggio_%281605-6%29.jpg',
    scriptureReference: '2 Timothy 3:16: "All scripture is inspired by God and profitable for teaching, for reproof, for correction, and for training in righteousness."',
    theologicalReflection: `Caravaggio depicts Saint Jerome, Father and Doctor of the Church, translating Sacred Scripture into the Latin Vulgate. The saint's aged, illuminated brow concentrates upon the sacred text, while his quill extends across the parchment. Beside the scriptures sits a human skull—the Memento Mori—reminding the faithful that worldly vanity perishes, but the Word of God endures forever.`,
    associatedMysteryOrSubject: 'Sacred Scripture & Church Fathers'
  },
  {
    id: 'art-entombment-of-christ',
    title: 'The Entombment of Christ',
    artist: 'Michelangelo Merisi da Caravaggio',
    year: '1603–1604',
    location: 'Pinacoteca Vaticana, Vatican Museums, Rome',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/The_Entombment_of_Christ-Caravaggio_%28c.1602-3%29.jpg/1280px-The_Entombment_of_Christ-Caravaggio_%28c.1602-3%29.jpg',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/The_Entombment_of_Christ-Caravaggio_%28c.1602-3%29.jpg',
    scriptureReference: 'Matthew 27:59-60: "And Joseph took the body, and wrapped it in a clean linen shroud, and laid it in his own new tomb, which he had hewn in the rock."',
    theologicalReflection: `Commissioned for the altar of the Chiesa Nuova in Rome, Caravaggio planned this masterpiece so that the viewer stands below the tomb stone. As the priest consecrated the Holy Eucharist at the altar below, Christ's limp sacred body seemed to be lowered directly onto the altar table, bridging the historical sacrifice of Golgotha with the sacramental re-presentation of the Holy Mass.`,
    associatedMysteryOrSubject: 'The 5th Sorrowful Mystery & Holy Saturday'
  },
  {
    id: 'art-fra-angelico-annunciation',
    title: 'The Annunciation',
    artist: 'Fra Angelico (Blessed Angelico)',
    year: '1438–1445',
    location: 'Convent of San Marco, Florence',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Fra_Angelico_-_Annunciation.jpg/1280px-Fra_Angelico_-_Annunciation.jpg',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Fra_Angelico_-_Annunciation.jpg',
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Transfiguration_Raphael.jpg',
    fallbackImageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Transfiguration_Raphael.jpg/1280px-Transfiguration_Raphael.jpg',
    scriptureReference: 'Matthew 17:2: "And he was transfigured before them, and his face shone like the sun, and his garments became white as light."',
    theologicalReflection: `Raphael's final masterpiece, placed at the head of his funeral bier. The upper half portrays Christ floating in radiant clouds between Moses and Elijah on Mount Tabor, prefiguring the glory of the Resurrection. The lower half portrays the suffering earth below, where the remaining disciples attempt to heal a possessed boy, reminding us that between glory and our present pilgrimage lies the necessity of prayer, fasting, and faith.`,
    associatedMysteryOrSubject: 'The 4th Luminous Mystery'
  },
  {
    id: 'art-joseph-carpenter',
    title: 'Saint Joseph the Carpenter',
    artist: 'Georges de La Tour',
    year: 'c. 1642',
    location: 'Musée du Louvre, Paris',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Saint_Joseph_Charpentier.jpg/1280px-Saint_Joseph_Charpentier.jpg',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Saint_Joseph_Charpentier.jpg',
    scriptureReference: 'Mark 6:3: "Is not this the carpenter, the son of Mary and brother of James and Joses and Judas and Simon?"',
    theologicalReflection: `In the darkness of Nazareth, young Jesus holds a single candle, illuminating the weathered, concentrated face of His earthly foster-father Saint Joseph. Joseph drills into a heavy wooden beam—a poignant foreshadowing of the wood of the Cross. The candle's flame, shielded by the hand of the Child Jesus, shines through His fingers with translucent red, recalling the blood of the Lamb who lights the world.`,
    associatedMysteryOrSubject: 'Saint Joseph & Holy Family'
  },
  {
    id: 'art-return-prodigal-son',
    title: 'The Return of the Prodigal Son',
    artist: 'Rembrandt van Rijn',
    year: 'c. 1669',
    location: 'Hermitage Museum, Saint Petersburg',
    imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Rembrandt_Harmensz_van_Rijn_-_Return_of_the_Prodigal_Son_-_Google_Art_Project.jpg/1280px-Rembrandt_Harmensz_van_Rijn_-_Return_of_the_Prodigal_Son_-_Google_Art_Project.jpg',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Rembrandt_Harmensz_van_Rijn_-_Return_of_the_Prodigal_Son_-_Google_Art_Project.jpg',
    scriptureReference: 'Luke 15:20: "And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him."',
    theologicalReflection: `Rembrandt depicts the fathomless mercy of God the Father embracing the penitent sinner. Notice the Father's two hands on the son's shoulder: the left hand is masculine and strong, representing divine justice and steadfast fatherhood; the right hand is feminine and soft, representing tender maternal compassion. The barefoot son rests his shaved, weary head against the Father's heart.`,
    associatedMysteryOrSubject: 'Penance, Divine Mercy & Forgiveness'
  }
];
