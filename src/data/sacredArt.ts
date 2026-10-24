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
    title: 'Eucharistic Adoration and Benediction of the Most Blessed Sacrament',
    shortLabel: '1. Eucharistic Adoration Altar',
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
    shortLabel: '2. The Supper at Emmaus (Caravaggio)',
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
    shortLabel: '3. La Disputa (Raphael)',
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
    shortLabel: '4. Immaculate Conception (Murillo)',
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
    shortLabel: '5. High Cathedral Sanctuary Exposition',
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
Click the green button "Commit changes..." at the top right, then click Commit changes.
Step 3: Update src/components/SacredArtView.tsx
On GitHub, navigate to: src → components → click on SacredArtView.tsx.
Click the pencil icon to edit.
Select everything in that file (Ctrl+A or Cmd+A) and delete it.
Paste the following complete code into the file:
code
Tsx
import React, { useState } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Maximize2, 
  X, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Image as ImageIcon
} from 'lucide-react';
import { SACRED_MASTERPIECES } from '../data/sacredArt';
import { SacredMasterpiece } from '../types';

interface SacredArtViewProps {
  initialSelectedArtId?: string | null;
}

export const SacredArtView: React.FC<SacredArtViewProps> = ({ initialSelectedArtId }) => {
  const [selectedArt, setSelectedArt] = useState<SacredMasterpiece>(() => {
    if (initialSelectedArtId) {
      const found = SACRED_MASTERPIECES.find(a => a.id === initialSelectedArtId);
      if (found) return found;
    }
    return SACRED_MASTERPIECES[0];
  });

  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [filterArtist, setFilterArtist] = useState<string>('All');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const artists = ['All', 'Raphael', 'Leonardo da Vinci', 'Murillo', 'Caravaggio', 'Fra Angelico', 'Georges de La Tour', 'Rembrandt', 'Millet'];

  const filteredArt = SACRED_MASTERPIECES.filter(art => {
    if (filterArtist === 'All') return true;
    return art.artist.toLowerCase().includes(filterArtist.toLowerCase());
  });

  const handleImageError = (artId: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const art = SACRED_MASTERPIECES.find(a => a.id === artId);
    const target = e.currentTarget;
    if (art?.fallbackImageUrl && !target.src.includes('images.unsplash.com')) {
      target.src = art.fallbackImageUrl;
    } else {
      setImgErrors(prev => ({ ...prev, [artId]: true }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-[#1f1915] to-stone-900 rounded-xl p-6 sm:p-8 text-amber-50 shadow-md border border-stone-800">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-300">
              Via Pulchritudinis • The Way of Beauty
            </span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Sacred Art of the Masters
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-serif-sacred max-w-2xl">
            Engage in Visio Divina (divine seeing). Sacred art in Catholic tradition does not merely illustrate, but opens a sacramental window onto the transcendent mysteries of Christ and the saints.
          </p>
        </div>

        {/* Filter Artist tabs */}
        <div className="flex flex-wrap gap-2 mt-5">
          {artists.map(a => (
            <button
              key={a}
              onClick={() => setFilterArtist(a)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium font-cinzel transition-all cursor-pointer ${
                filterArtist === a 
                  ? 'bg-[#6B4423] text-white font-bold shadow-xs border border-[#8B5A2B]' 
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Masterpiece Spotlight Display */}
      <div className="bg-stone-900 rounded-xl overflow-hidden shadow-xl border border-stone-800 text-stone-100 grid grid-cols-1 lg:grid-cols-12">
        
        {/* The Painting Image */}
        <div className="lg:col-span-7 bg-stone-900 flex items-center justify-center relative group min-h-[360px] sm:min-h-[460px] p-2 sm:p-4">
          {imgErrors[selectedArt.id] ? (
            <div className="flex flex-col items-center justify-center p-8 text-center text-stone-400 space-y-2">
              <ImageIcon className="w-12 h-12 text-amber-600/60" />
              <h4 className="font-cinzel text-base font-bold text-amber-200">{selectedArt.title}</h4>
              <p className="text-xs text-stone-400">{selectedArt.artist} ({selectedArt.year})</p>
              <p className="text-xs text-stone-500 italic max-w-md">{selectedArt.theologicalReflection}</p>
            </div>
          ) : (
            <img 
              key={selectedArt.id}
              src={selectedArt.imageUrl} 
              alt={selectedArt.title}
              loading="eager"
              onError={(e) => {
                handleImageError(selectedArt.id, e);
              }}
              className="w-full h-full max-h-[550px] object-contain transition-transform duration-500 group-hover:scale-102 opacity-100 block"
            />
          )}

          <button
            onClick={() => setIsFullscreenModalOpen(true)}
            className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-stone-900/80 hover:bg-[#6B4423] text-white backdrop-blur-xs transition-colors cursor-pointer flex items-center justify-center border border-stone-700 shadow-md"
            title="Enlarge and Visio Divina"
            aria-label="Enlarge and Visio Divina"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Information and Theological Contemplation */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4 bg-gradient-to-b from-stone-900 to-stone-950">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-cinzel bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-800/60 inline-block">
              {selectedArt.associatedMysteryOrSubject}
            </span>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
              {selectedArt.title}
            </h3>

            <p className="text-xs text-amber-200/80 font-serif-sacred italic">
              {selectedArt.artist} ({selectedArt.year}) <br />
              <span className="text-stone-400 not-italic">{selectedArt.location}</span>
            </p>

            {selectedArt.scriptureReference && (
              <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 text-xs font-serif-sacred text-amber-200/90 italic">
                "{selectedArt.scriptureReference}"
              </div>
            )}

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-cinzel font-bold text-amber-400 uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Theological Reflection</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-serif-sacred leading-relaxed text-justify">
                {selectedArt.theologicalReflection}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800 flex justify-between items-center text-xs text-stone-400">
            <span>Visio Divina Companion</span>
            <button
              onClick={() => setIsFullscreenModalOpen(true)}
              className="px-3.5 py-1.5 bg-amber-700/80 hover:bg-amber-600 text-amber-50 rounded-lg font-cinzel text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Contemplate Fullscreen</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Gallery Selector Grid */}
      <div className="space-y-3 pt-4">
        <h3 className="font-cinzel text-base font-bold text-stone-800 dark:text-stone-200 flex items-center gap-2">
          <span>Sacred Masterpiece Collection</span>
          <span className="text-xs text-stone-500 font-sans font-normal">({filteredArt.length} Works)</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {filteredArt.map(art => {
            const isSelected = selectedArt.id === art.id;
            return (
              <div
                key={art.id}
                onClick={() => setSelectedArt(art)}
                className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 bg-stone-900 text-left flex flex-col ${
                  isSelected 
                    ? 'ring-2 ring-amber-500 border-amber-500 shadow-lg scale-102' 
                    : 'border-stone-800 hover:border-stone-700 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="h-32 sm:h-36 bg-stone-950 overflow-hidden relative flex items-center justify-center">
                  {imgErrors[art.id] ? (
                    <div className="flex flex-col items-center justify-center p-2 text-center text-stone-500">
                      <ImageIcon className="w-8 h-8 text-stone-600 mb-1" />
                      <span className="text-[10px] text-stone-400 font-cinzel line-clamp-1">{art.title}</span>
                    </div>
                  ) : (
                    <img 
                      src={art.imageUrl} 
                      alt={art.title}
                      loading="lazy"
                      onError={(e) => {
                        handleImageError(art.id, e);
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                    />
                  )}
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-amber-600 text-white p-1 rounded-md shadow-xs">
                      <Sparkles className="w-3 h-3" />
                    </div>
                  )}
                </div>
                <div className="p-2.5 flex-1 flex flex-col justify-between space-y-1">
                  <p className="font-cinzel text-xs font-bold text-stone-100 group-hover:text-amber-300 line-clamp-1">
                    {art.title}
                  </p>
                  <p className="text-[11px] text-stone-400 line-clamp-1 font-serif-sacred italic">
                    {art.artist}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Visio Divina Modal */}
      {isFullscreenModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col text-white animate-fade-in">
          
          {/* Top Control Bar */}
          <div className="p-4 flex items-center justify-between border-b border-stone-800 bg-stone-950/80">
            <div>
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-amber-200">
                {selectedArt.title}
              </h3>
              <p className="text-xs text-stone-400 font-serif-sacred italic">
                {selectedArt.artist} ({selectedArt.year}) • {selectedArt.location}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setZoomLevel(1)}
                className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                title="Reset View"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button 
                onClick={() => {
                  setIsFullscreenModalOpen(false);
                  setZoomLevel(1);
                }}
                className="p-2 rounded-lg bg-stone-800 hover:bg-red-900/80 text-stone-200 hover:text-white transition-colors ml-2"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Canvas */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-4">
            <div 
              className="transition-transform duration-200 ease-out max-w-full max-h-full flex items-center justify-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img 
                src={selectedArt.imageUrl} 
                alt={selectedArt.title} 
                className="max-h-[82vh] max-w-[92vw] object-contain shadow-2xl rounded-sm block"
              />
            </div>
          </div>

          {/* Bottom theological footer */}
          <div className="p-3 bg-stone-950/90 border-t border-stone-800 text-center text-xs font-serif-sacred text-amber-200/90 italic">
            "{selectedArt.theologicalReflection.slice(0, 200)}..."
          </div>

        </div>
      )}

    </div>
  );
};
