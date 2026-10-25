import { LiturgicalColor, LiturgicalDayInfo } from '../types';

export interface MonthCalendarData {
  year: number;
  month: number; // 0-11
  days: LiturgicalDayInfo[];
}

export const LITURGICAL_COLORS_INFO: Record<LiturgicalColor, { name: string; hex: string; bgClass: string; textClass: string; borderClass: string; meaning: string }> = {
  green: {
    name: 'Green',
    hex: '#15803d',
    bgClass: 'bg-emerald-800 text-white',
    textClass: 'text-emerald-700',
    borderClass: 'border-emerald-700',
    meaning: 'Symbol of spiritual growth, life, and hope in Ordinary Time.'
  },
  white: {
    name: 'White / Gold',
    hex: '#eab308',
    bgClass: 'bg-amber-100 text-amber-950 border border-amber-300',
    textClass: 'text-amber-700',
    borderClass: 'border-amber-400',
    meaning: 'Symbol of light, divine majesty, joy, purity, and resurrection; used on Solemnities, Feasts of the Lord, Mary, and non-martyred Saints.'
  },
  red: {
    name: 'Red',
    hex: '#b91c1c',
    bgClass: 'bg-red-800 text-white',
    textClass: 'text-red-700',
    borderClass: 'border-red-700',
    meaning: 'Symbol of the blood of Christ, passion of the Martyrs, and the fire of the Holy Spirit on Pentecost.'
  },
  violet: {
    name: 'Violet',
    hex: '#6b21a8',
    bgClass: 'bg-purple-900 text-white',
    textClass: 'text-purple-700',
    borderClass: 'border-purple-700',
    meaning: 'Symbol of penance, sorrow, and solemn anticipation in Advent and Lent.'
  },
  rose: {
    name: 'Rose',
    hex: '#be185d',
    bgClass: 'bg-rose-600 text-white',
    textClass: 'text-rose-700',
    borderClass: 'border-rose-400',
    meaning: 'Symbol of anticipated joy on Gaudete Sunday (Advent III) and Laetare Sunday (Lent IV).'
  },
  black: {
    name: 'Black',
    hex: '#1f2937',
    bgClass: 'bg-stone-900 text-white',
    textClass: 'text-stone-800',
    borderClass: 'border-stone-800',
    meaning: 'Symbol of mourning and Christian hope for the faithful departed on All Souls Day (Nov 2) and Requiems.'
  }
};

// Known feast days and historical Catholic events for every single day in October
export const KNOWN_OCTOBER_DAYS: Record<number, Partial<LiturgicalDayInfo>> = {
  1: { 
    title: 'Memorial of St. Thérèse of the Child Jesus, Doctor of the Church', 
    rank: 'Memorial', 
    color: 'white', 
    saintName: 'St. Thérèse of Lisieux',
    historicalEvent: {
      year: '1997 AD',
      title: 'Proclamation of St. Thérèse as Doctor of the Church',
      description: 'Pope St. John Paul II declared St. Thérèse of Lisieux the 33rd Doctor of the Universal Church, affirming the sublime theological depth of her "Little Way" of spiritual childhood.',
      significance: 'Youngest Doctor of the Church, showing holiness is accessible to every humble soul.'
    }
  },
  2: { 
    title: 'Memorial of the Holy Guardian Angels', 
    rank: 'Memorial', 
    color: 'white', 
    saintName: 'The Holy Guardian Angels',
    historicalEvent: {
      year: '1608 AD',
      title: 'Universal Institution of the Feast of Guardian Angels',
      description: 'Pope Paul V officially added the Feast of the Holy Guardian Angels to the General Roman Calendar, honoring the celestial protectors appointed to every soul.',
      significance: 'Affirming biblical teaching (Mt 18:10) that each Christian is accompanied by an angelic minister of God.'
    }
  },
  3: { 
    title: 'Saturday of the Twenty-Sixth Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '1226 AD',
      title: 'Transitus of Saint Francis of Assisi',
      description: 'On the evening of October 3, 1226, Saint Francis of Assisi died at the Portiuncula surrounded by his friars, welcoming "Sister Death" while chanting Psalm 141.',
      significance: 'Founder of the Franciscan Order and first recorded stigmatist in Church history.'
    }
  },
  4: { 
    title: 'Twenty-Seventh Sunday in Ordinary Time (or St. Francis of Assisi)', 
    rank: 'Sunday', 
    color: 'green', 
    saintName: 'St. Francis of Assisi',
    historicalEvent: {
      year: '1582 AD',
      title: 'Promulgation of the Gregorian Calendar',
      description: 'Pope Gregory XIII implemented the Gregorian Calendar to accurately restore the celebration of Easter to the vernal equinox as decreed by the Council of Nicaea.',
      significance: 'The global standard civil calendar was created and calculated by Catholic Jesuit astronomers.'
    }
  },
  5: { 
    title: 'Monday of the Twenty-Seventh Week in Ordinary Time (or St. Faustina Kowalska)', 
    rank: 'Weekday', 
    color: 'green', 
    saintName: 'St. Maria Faustina Kowalska',
    historicalEvent: {
      year: '1938 AD',
      title: 'Death of Saint Faustina Kowalska',
      description: 'Sister Faustina passed into eternal life at age 33 in Krakow, Poland, having recorded the words of Jesus Christ for the worldwide Divine Mercy devotion in her spiritual Diary.',
      significance: 'Christ\'s message of infinite mercy prepared the Church for World War II and the modern era.'
    }
  },
  6: { 
    title: 'Optional Memorial of St. Bruno, Priest', 
    rank: 'Optional Memorial', 
    color: 'green', 
    saintName: 'St. Bruno',
    historicalEvent: {
      year: '1084 AD',
      title: 'Foundation of the Carthusian Order',
      description: 'Saint Bruno and six companions settled in the valley of the Grande Chartreuse in the French Alps, founding the Carthusian Order dedicated to silent contemplation and perpetual prayer.',
      significance: 'The only monastic order that has "never been reformed because it never deformed".'
    }
  },
  7: { 
    title: 'Memorial of Our Lady of the Rosary', 
    rank: 'Memorial', 
    color: 'white', 
    saintName: 'Our Lady of the Rosary',
    historicalEvent: {
      year: '1571 AD',
      title: 'The Miraculous Victory of Lepanto',
      description: 'The Christian fleet of the Holy League defeated the mighty Ottoman Turkish navy in the Gulf of Patras, saving Christian Europe from conquest while Pope St. Pius V and the faithful throughout Europe prayed the Holy Rosary.',
      significance: 'Pope St. Pius V established this feast day in thanksgiving to Our Lady, Help of Christians.'
    }
  },
  8: { 
    title: 'Thursday of the Twenty-Seventh Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '451 AD',
      title: 'Opening of the Fourth Ecumenical Council of Chalcedon',
      description: 'Over 500 Catholic bishops convened to define the Hypostatic Union against Monophysitism, declaring Christ is one Divine Person in two natures, divine and human, without confusion or division.',
      significance: 'The bishops famously cried out upon hearing Pope St. Leo\'s Tome: "Peter has spoken through Leo!"'
    }
  },
  9: { 
    title: 'Optional Memorial of St. Denis and Companions, or St. John Leonardi', 
    rank: 'Optional Memorial', 
    color: 'green', 
    saintName: 'St. Denis',
    historicalEvent: {
      year: '1845 AD',
      title: 'Conversion of St. John Henry Newman',
      description: 'John Henry Newman was received into the Catholic Church at Littlemore by Blessed Dominic Barberi, Passionist priest, completing his spiritual journey from the Oxford Movement.',
      significance: 'One of the most consequential conversions in English Church history.'
    }
  },
  10: { 
    title: 'Saturday of the Twenty-Seventh Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '732 AD',
      title: 'The Battle of Tours (Poitiers)',
      description: 'Charles Martel and Frankish infantry halted the Umayyad caliphate\'s advance into Western Europe, preserving the Christian foundations of medieval Europe.',
      significance: 'Decisive military defense of Christendom.'
    }
  },
  11: { 
    title: 'Twenty-Eighth Sunday in Ordinary Time (or St. John XXIII, Pope)', 
    rank: 'Sunday', 
    color: 'green', 
    saintName: 'St. John XXIII',
    historicalEvent: {
      year: '1962 AD',
      title: 'Opening of the Second Vatican Ecumenical Council',
      description: 'Pope St. John XXIII solemnly opened the Second Vatican Council in Saint Peter\'s Basilica with the historic address "Gaudet Mater Ecclesia" (Rejoice, O Mother Church).',
      significance: 'The 21st Ecumenical Council of the Catholic Church.'
    }
  },
  12: { 
    title: 'Monday of the Twenty-Eighth Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '1492 AD',
      title: 'Arrival of the Catholic Faith in the Americas',
      description: 'Christopher Columbus and Catholic crew members made landfall in the Americas, planting the Holy Cross and dedicating the first island as "San Salvador" (Holy Savior).',
      significance: 'Beginning of the evangelization of the Western Hemisphere.'
    }
  },
  13: { 
    title: 'Tuesday of the Twenty-Eighth Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '1917 AD',
      title: 'The Miracle of the Sun at Fátima, Portugal',
      description: 'Over 70,000 people, including secular journalists and skeptics, witnessed the sun dance and plummet toward earth at the Cova da Iria, validating the apparitions of Our Lady of Fátima.',
      significance: 'Greatest publicly witnessed modern miracle in Church history.'
    }
  },
  14: { 
    title: 'Optional Memorial of St. Callistus I, Pope and Martyr', 
    rank: 'Optional Memorial', 
    color: 'red', 
    saintName: 'St. Callistus I',
    historicalEvent: {
      year: '222 AD',
      title: 'Martyrdom of Pope Saint Callistus I',
      description: 'Pope Callistus I, who had been an enslaved worker in the mines before his ordination, reorganized the Catacombs of St. Callixtus along the Appian Way before suffering martyrdom in Trastevere.',
      significance: 'Built the first official burial place of the early Popes.'
    }
  },
  15: { 
    title: 'Memorial of St. Teresa of Jesus (of Ávila), Doctor of the Church', 
    rank: 'Memorial', 
    color: 'white', 
    saintName: 'St. Teresa of Ávila',
    historicalEvent: {
      year: '1582 AD',
      title: 'Death of Saint Teresa of Ávila during the Calendar Reform',
      description: 'Saint Teresa died on the night between October 4 and October 15, 1582—the exact night the papal calendar jumped 10 days to correct the solar drift.',
      significance: 'Foundress of the Discalced Carmelites and first woman proclaimed a Doctor of the Church.'
    }
  },
  16: { 
    title: 'Memorial of St. Margaret Mary Alacoque, Virgin / St. Hedwig, Religious', 
    rank: 'Memorial', 
    color: 'white', 
    saintName: 'St. Margaret Mary Alacoque',
    historicalEvent: {
      year: '1978 AD',
      title: 'Election of Cardinal Karol Wojtyła as Pope Saint John Paul II',
      description: 'White smoke rose over the Sistine Chapel as the College of Cardinals elected the Archbishop of Krakow as the 264th Bishop of Rome—the first Slavic Pope in history.',
      significance: 'A 26-year pontificate that defeated totalitarian communism and published the Catechism.'
    }
  },
  17: { 
    title: 'Memorial of St. Ignatius of Antioch, Bishop and Martyr', 
    rank: 'Memorial', 
    color: 'red', 
    saintName: 'St. Ignatius of Antioch',
    historicalEvent: {
      year: '108 AD',
      title: 'Martyrdom of Saint Ignatius in the Colosseum',
      description: 'The third Bishop of Antioch was thrown to wild beasts in Rome under Emperor Trajan, having written the immortal words: "I am the wheat of God, ground by the teeth of wild beasts."',
      significance: 'First Christian writer to use the term "Catholic Church" (Katholike Ekklesia).'
    }
  },
  18: { 
    title: 'Feast of St. Luke the Evangelist', 
    rank: 'Feast', 
    color: 'red', 
    saintName: 'St. Luke',
    historicalEvent: {
      year: '1598 AD',
      title: 'Translation of St. Luke\'s Relics',
      description: 'The sacred relics of the Holy Evangelist Luke were solemnly enshrined in the Basilica of Santa Giustina in Padua, Italy, where pilgrims venerate them to this day.',
      significance: 'Author of the Gospel of Divine Mercy and the Acts of the Apostles.'
    }
  },
  19: { 
    title: 'Memorial of Sts. John de Brébeuf and Isaac Jogues, Martyrs', 
    rank: 'Memorial', 
    color: 'red', 
    saintName: 'North American Martyrs',
    historicalEvent: {
      year: '1646 AD',
      title: 'Martyrdom of Saint Isaac Jogues',
      description: 'Jesuit missionary priest Isaac Jogues, who had previously been tortured and had his fingers severed, returned courageously to present-day Auriesville, New York, where he was martyred for Christ.',
      significance: 'First canonized Catholic martyrs of North America.'
    }
  },
  20: { 
    title: 'Optional Memorial of St. Paul of the Cross, Priest', 
    rank: 'Optional Memorial', 
    color: 'green', 
    saintName: 'St. Paul of the Cross',
    historicalEvent: {
      year: '1959 AD',
      title: 'Consecration of the National Shrine in Washington, D.C.',
      description: 'The Upper Church of the Basilica of the National Shrine of the Immaculate Conception in Washington, D.C., was solemnly dedicated to the Patroness of the United States.',
      significance: 'The largest Roman Catholic church in North America.'
    }
  },
  21: { 
    title: 'Wednesday of the Twenty-Ninth Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '383 AD',
      title: 'Veneration of Saint Ursula and Companions',
      description: 'Early Christian martyrs who refused to renounce their faith or chastity under Hun invaders were commemorated in ancient Cologne with the building of a grand basilica.',
      significance: 'Patronesses of holy education and young women.'
    }
  },
  22: { 
    title: 'Optional Memorial of St. John Paul II, Pope', 
    rank: 'Optional Memorial', 
    color: 'white', 
    saintName: 'St. John Paul II',
    historicalEvent: {
      year: '1978 AD',
      title: 'Inauguration of the Pontificate of St. John Paul II',
      description: 'Pope John Paul II formally inaugurated his Petrine ministry in St. Peter\'s Square, crying out to the nations: "Do not be afraid! Open wide the doors to Christ!"',
      significance: 'His chosen feast day commemorates this historic inaugural homily.'
    }
  },
  23: { 
    title: 'Optional Memorial of St. John of Capistrano, Priest', 
    rank: 'Optional Memorial', 
    color: 'green', 
    saintName: 'St. John of Capistrano',
    historicalEvent: {
      year: '1456 AD',
      title: 'Death of the "Soldier Priest" of Belgrade',
      description: 'Saint John of Capistrano died in Ilok after personally leading the crusade that lifted the Siege of Belgrade, holding aloft the Holy Name of Jesus.',
      significance: 'Defended Europe following the fall of Constantinople in 1453.'
    }
  },
  24: { 
    title: 'Optional Memorial of St. Anthony Mary Claret, Bishop', 
    rank: 'Optional Memorial', 
    color: 'green', 
    saintName: 'St. Anthony Mary Claret',
    historicalEvent: {
      year: '1260 AD',
      title: 'Consecration of Chartres Cathedral',
      description: 'The monumental Cathedral of Notre-Dame de Chartres, a pinnacle of High Gothic architecture holding the sacred Veil of the Virgin Mary, was consecrated in the presence of King St. Louis IX.',
      significance: 'Medieval masterwork expressing the theology of light and the City of God.'
    }
  },
  25: { 
    title: 'Thirtieth Sunday in Ordinary Time', 
    rank: 'Sunday', 
    color: 'green',
    historicalEvent: {
      year: '1415 AD',
      title: 'The Battle of Agincourt and St. Crispin\'s Mass',
      description: 'Catholic chaplains celebrated dawn Holy Mass before English soldiers under King Henry V on the feast of Saints Crispin and Crispinian.',
      significance: 'Historic battle commemorated with solemn prayers for the dead.'
    }
  },
  26: { 
    title: 'Monday of the Thirtieth Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '97 AD',
      title: 'Accession of Pope Saint Evaristus',
      description: 'Saint Evaristus succeeded Saint Clement as the fifth Pope of the Catholic Church, establishing the division of Rome into parishes and appointing seven deacons to assist the Bishop.',
      significance: 'Early development of diocesan parish structures.'
    }
  },
  27: { 
    title: 'Tuesday of the Thirtieth Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '312 AD',
      title: 'The Vision of the Cross: "In Hoc Signo Vinces"',
      description: 'On the eve of the Battle of the Milvian Bridge, Emperor Constantine looked into the sky and saw the luminous sign of the Cross with the words: "In this sign, conquer."',
      significance: 'Paved the way for the legal recognition of Christianity in the Roman Empire.'
    }
  },
  28: { 
    title: 'Feast of Sts. Simon and Jude, Apostles', 
    rank: 'Feast', 
    color: 'red', 
    saintName: 'Sts. Simon and Jude',
    historicalEvent: {
      year: '312 AD',
      title: 'Battle of the Milvian Bridge and Christian Liberty',
      description: 'Constantine defeated Maxentius under the Christian standard of the Chi-Rho (Labarum), ending two and a half centuries of brutal Roman persecutions against Catholics.',
      significance: 'Led directly to the Edict of Milan (313 AD) granting full religious freedom to the Church.'
    }
  },
  29: { 
    title: 'Thursday of the Thirtieth Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '324 AD',
      title: 'Dedication of Saint John Lateran Basilica',
      description: 'Pope Saint Sylvester I dedicated the Archbasilica of the Most Holy Savior (St. John Lateran), the mother and head of all churches in Rome and the entire world (*Omnium Urbis et Orbis Ecclesiarum Mater et Caput*).',
      significance: 'The official cathedral seat of the Bishop of Rome.'
    }
  },
  30: { 
    title: 'Friday of the Thirtieth Week in Ordinary Time', 
    rank: 'Weekday', 
    color: 'green', 
    isFastingDay: true,
    historicalEvent: {
      year: '1311 AD',
      title: 'Opening of the Council of Vienne',
      description: 'Pope Clement V opened the 15th Ecumenical Council in southeastern France, which dealt with the dissolution of the Knights Templar and Catholic scholastic education in universities.',
      significance: 'Promoted chairs of Greek, Hebrew, and Arabic at major Catholic universities.'
    }
  },
  31: { 
    title: 'Vigil of All Saints (All Hallows\' Eve)', 
    rank: 'Weekday', 
    color: 'green',
    historicalEvent: {
      year: '1512 AD',
      title: 'Unveiling of Michelangelo\'s Sistine Chapel Ceiling',
      description: 'Pope Julius II celebrated Solemn Vespers in the Sistine Chapel on the Eve of All Saints to unveil Michelangelo\'s newly completed ceiling frescoes portraying Genesis and the ancestors of Christ.',
      significance: 'The greatest artistic synthesis of Catholic theology, human dignity, and salvation history.'
    }
  }
};

// Known feast days and historical Catholic events for every single day in November
export const KNOWN_NOVEMBER_DAYS: Record<number, Partial<LiturgicalDayInfo>> = {
  1: {
    title: 'Solemnity of All Saints',
    rank: 'Solemnity',
    color: 'white',
    isHolyDay: true,
    saintName: 'All Saints of God',
    historicalEvent: {
      year: '835 AD',
      title: 'Universal Extension of the Solemnity of All Saints',
      description: 'Pope Gregory IV, with the support of Emperor Louis the Pious, extended the celebration of All Saints on November 1 to the entire Frankish Empire and the Universal Church.',
      significance: 'Honoring all holy men and women who dwell in the Beatific Vision, both known and unknown.'
    }
  },
  2: {
    title: 'The Commemoration of All the Faithful Departed (All Souls\' Day)',
    rank: 'Feast',
    color: 'violet',
    saintName: 'Holy Souls in Purgatory',
    historicalEvent: {
      year: '998 AD',
      title: 'Institution of All Souls\' Day by Saint Odilo of Cluny',
      description: 'Saint Odilo, fifth Abbot of Cluny, decreed that all Cluniac monasteries offer special prayers, Psalms, and Holy Masses annually on November 2 for the relief of suffering souls in Purgatory.',
      significance: 'Promoted the Church Suffering devotion across Europe.'
    }
  },
  3: {
    title: 'Optional Memorial of St. Martin de Porres, Religious',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Martin de Porres',
    historicalEvent: {
      year: '1639 AD',
      title: 'Transitus of Saint Martin de Porres in Lima, Peru',
      description: 'The beloved Dominican lay brother, known for his miraculous healings, levitation, and tender care for the sick and poor of Lima, entered eternal life holding a crucifix.',
      significance: 'Patron of social justice, barbers, and racial harmony.'
    }
  },
  4: {
    title: 'Memorial of St. Charles Borromeo, Bishop',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Charles Borromeo',
    historicalEvent: {
      year: '1584 AD',
      title: 'Death of Saint Charles Borromeo, Reformer of Milan',
      description: 'Archbishop of Milan and leading figure of the Council of Trent, St. Charles established diocesan seminaries, catechized over 40,000 children, and personally ministered to plague victims.',
      significance: 'Patron of seminarians and Catholic catechists.'
    }
  },
  5: {
    title: 'Feast of Saints Elizabeth and Zechariah',
    rank: 'Weekday',
    color: 'green',
    saintName: 'Sts. Elizabeth and Zechariah',
    historicalEvent: {
      year: '1st Century AD',
      title: 'The Visitation and the Chant of the Magnificat',
      description: 'Saint Elizabeth, filled with the Holy Spirit upon hearing Mary\'s greeting, proclaimed: "Blessed art thou among women, and blessed is the fruit of thy womb!"',
      significance: 'Parents of St. John the Baptist and figures of the Dawn of Salvation.'
    }
  },
  6: {
    title: 'Memorial of All Saints of Ireland / St. Illtud',
    rank: 'Weekday',
    color: 'green',
    saintName: 'All Saints of Ireland',
    historicalEvent: {
      year: '1921 AD',
      title: 'Approval of the Feast of All Saints of Ireland',
      description: 'Pope Benedict XV authorized the solemn commemoration of all holy Irish monks, martyrs, and virgins who evangelized Europe during the Early Middle Ages.',
      significance: 'Celebrating the "Island of Saints and Scholars".'
    }
  },
  7: {
    title: 'Optional Memorial of St. Willibrord, Bishop',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Willibrord',
    historicalEvent: {
      year: '739 AD',
      title: 'Death of Saint Willibrord, Apostle to the Frisians',
      description: 'Northumbrian Benedictine monk sent by Saint Egbert to convert the Frisian tribes (modern Netherlands), becoming first Bishop of Utrecht.',
      significance: 'Pioneer of Anglo-Saxon missionary expansions in Western Europe.'
    }
  },
  8: {
    title: 'Commemoration of Blessed John Duns Scotus, Priest',
    rank: 'Weekday',
    color: 'green',
    saintName: 'Blessed John Duns Scotus',
    historicalEvent: {
      year: '1308 AD',
      title: 'Theological Defense of the Immaculate Conception',
      description: 'Franciscan theologian Duns Scotus argued at the University of Paris that God preserved Mary from original sin in anticipation of Christ\'s merits (*Subtilis Doctor*).',
      significance: 'Laid the scholastic foundations for the dogma of the Immaculate Conception.'
    }
  },
  9: {
    title: 'Feast of the Dedication of the Lateran Basilica',
    rank: 'Feast',
    color: 'white',
    saintName: 'Dedication of the Archbasilica of St. John Lateran',
    historicalEvent: {
      year: '324 AD',
      title: 'Consecration of the Cathedral of Rome by Pope St. Sylvester I',
      description: 'Emperor Constantine gifted the Laterani palace to the Church, where Pope Sylvester dedicated the mother church of all Catholic Christendom (*Omnium Urbis et Orbis Ecclesiarum Mater et Caput*).',
      significance: 'Symbol of unity with the Cathedral Seat of the Successor of Saint Peter.'
    }
  },
  10: {
    title: 'Memorial of St. Leo the Great, Pope and Doctor of the Church',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Leo the Great',
    historicalEvent: {
      year: '452 AD',
      title: 'Pope Saint Leo Confronts Attila the Hun',
      description: 'Pope Leo I rode out unarmed to Mantua to meet Attila the Hun, persuading the invader to turn back from destroying the city of Rome.',
      significance: 'Defended the Petrine primacy and defined Christ\'s two natures at Chalcedon.'
    }
  },
  11: {
    title: 'Memorial of St. Martin of Tours, Bishop',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Martin of Tours',
    historicalEvent: {
      year: '397 AD',
      title: 'The Cloak of Saint Martin of Tours',
      description: 'As a Roman soldier at Amiens, Martin cut his military cloak in two to share with a freezing beggar. That night, Christ appeared to him wearing the half-cloak.',
      significance: 'First non-martyr saint venerated in the Western Church.'
    }
  },
  12: {
    title: 'Memorial of St. Josaphat, Bishop and Martyr',
    rank: 'Memorial',
    color: 'red',
    saintName: 'St. Josaphat Kuncevyč',
    historicalEvent: {
      year: '1623 AD',
      title: 'Martyrdom of Saint Josaphat for Church Unity',
      description: 'Ruthenian Catholic Archbishop of Polotsk was martyred in Vitebsk while striving to reunite Eastern Orthodox Christians with the See of Saint Peter.',
      significance: 'Patron saint of Christian ecumenism and Ukrainian Catholics.'
    }
  },
  13: {
    title: 'Memorial of St. Frances Xavier Cabrini, Virgin',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Frances Xavier Cabrini',
    historicalEvent: {
      year: '1946 AD',
      title: 'Canonization of Mother Cabrini (First US Citizen Saint)',
      description: 'Pope Pius XII canonized Mother Cabrini, foundress of the Missionary Sisters of the Sacred Heart of Jesus, who established 67 orphanages, hospitals, and schools across North and South America.',
      significance: 'Patroness of immigrants and hospital administrators.'
    }
  },
  14: {
    title: 'Optional Memorial of St. Gertrude the Great, Virgin',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Gertrude the Great',
    historicalEvent: {
      year: '1302 AD',
      title: 'Mystical Visions of the Sacred Heart of Jesus',
      description: 'Benedictine nun Gertrude at Helfta recorded profound mystical revelations of the Sacred Heart centuries before St. Margaret Mary Alacoque.',
      significance: 'Pioneer of Sacred Heart devotion and patroness of mystic theologians.'
    }
  },
  15: {
    title: 'Optional Memorial of St. Albert the Great, Bishop and Doctor',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Albert the Great',
    historicalEvent: {
      year: '1280 AD',
      title: 'Death of Doctor Universalis in Cologne',
      description: 'Dominican friar Albertus Magnus, scientist, philosopher, and teacher of St. Thomas Aquinas, reconciled Aristotelian philosophy with Catholic theology.',
      significance: 'Patron saint of natural scientists and chemists.'
    }
  },
  16: {
    title: 'Optional Memorial of St. Margaret of Scotland / St. Gertrude',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Margaret of Scotland',
    historicalEvent: {
      year: '1093 AD',
      title: 'Death of Queen Saint Margaret of Scotland',
      description: 'Queen Margaret, mother of three Scottish kings, reformed the Church in Scotland, fed hundreds of poor daily, and promoted liturgical renewal.',
      significance: 'Patroness of Scotland and royal charity.'
    }
  },
  17: {
    title: 'Memorial of St. Elizabeth of Hungary, Religious',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Elizabeth of Hungary',
    historicalEvent: {
      year: '1231 AD',
      title: 'Passing of Saint Elizabeth, Princess of Peace',
      description: 'Daughter of the King of Hungary and Franciscan tertiary who gave up royal wealth to build hospitals and personally care for leprosy patients.',
      significance: 'Patroness of Catholic Charities and secular Franciscans.'
    }
  },
  18: {
    title: 'Optional Memorial of Dedication of the Basilicas of Sts. Peter and Paul',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'Saints Peter and Paul',
    historicalEvent: {
      year: '1626 AD',
      title: 'Solemn Consecration of the New Saint Peter\'s Basilica',
      description: 'Pope Urban VIII consecrated the grand new Renaissance-Baroque Basilica of St. Peter built over the tomb of the Prince of the Apostles.',
      significance: 'Honoring the two apostolic pillars of Rome.'
    }
  },
  19: {
    title: 'Weekday (or St. Agnes of Assisi)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'St. Agnes of Assisi',
    historicalEvent: {
      year: '1253 AD',
      title: 'Transitus of Saint Agnes of Assisi',
      description: 'Younger sister of Saint Clare of Assisi who joined her at San Damiano, establishing Poor Clare convents across Northern Italy.',
      significance: 'Example of heroic virginity and monastic sisterhood.'
    }
  },
  20: {
    title: 'Weekday (or Blessed Solanus Casey / St. Edmund)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'Blessed Solanus Casey',
    historicalEvent: {
      year: '2017 AD',
      title: 'Beatification of Blessed Solanus Casey in Detroit',
      description: 'Capuchin friar who served as a humble doorkeeper in Detroit and New York, renowned for thousands of miraculous healings and spiritual counsel.',
      significance: 'Patron of the downhearted and door-to-door charity.'
    }
  },
  21: {
    title: 'Memorial of the Presentation of the Blessed Virgin Mary',
    rank: 'Memorial',
    color: 'white',
    saintName: 'Presentation of Mary',
    historicalEvent: {
      year: '543 AD',
      title: 'Dedication of the New Church of Saint Mary in Jerusalem',
      description: 'Commemorating Mary\'s self-offering to God in the Temple of Jerusalem as a child, preparing her immaculate heart to become the Tabernacle of the Most High.',
      significance: 'Patronal feast of contemplative religious sisters.'
    }
  },
  22: {
    title: 'Memorial of St. Cecilia, Virgin and Martyr',
    rank: 'Memorial',
    color: 'red',
    saintName: 'St. Cecilia',
    historicalEvent: {
      year: '230 AD',
      title: 'Martyrdom and Sacred Song of Saint Cecilia',
      description: 'Roman noblewoman martyred for Christ who sang in her heart to the Lord during her wedding and execution, preserved incorrupt in her catacomb.',
      significance: 'Patroness of musicians, singers, and sacred liturgy.'
    }
  },
  23: {
    title: 'Optional Memorial of St. Clement I, Pope / Bl. Miguel Pro',
    rank: 'Optional Memorial',
    color: 'red',
    saintName: 'Blessed Miguel Agustín Pro',
    historicalEvent: {
      year: '1927 AD',
      title: 'Martyrdom of Blessed Miguel Pro in Mexico City',
      description: 'Mexican Jesuit priest executed without trial by firing squad, raising his arms in the form of a cross and crying: "¡Viva Cristo Rey!" (Long Live Christ the King!).',
      significance: 'Symbol of heroic resistance to religious persecution in Mexico.'
    }
  },
  24: {
    title: 'Memorial of St. Andrew Dũng-Lạc and Companions, Martyrs',
    rank: 'Memorial',
    color: 'red',
    saintName: 'Vietnamese Martyrs',
    historicalEvent: {
      year: '1839 AD',
      title: 'Martyrdom of Saint Andrew Dũng-Lạc',
      description: 'Vietnamese Catholic priest martyred alongside 117 companions (bishops, priests, catechists, and mothers) during brutal 19th-century persecutions in Indochina.',
      significance: 'Seed of the thriving Catholic Church in Vietnam.'
    }
  },
  25: {
    title: 'Optional Memorial of St. Catherine of Alexandria, Virgin and Martyr',
    rank: 'Optional Memorial',
    color: 'red',
    saintName: 'St. Catherine of Alexandria',
    historicalEvent: {
      year: '305 AD',
      title: 'Martyrdom of Saint Catherine of Alexandria',
      description: 'Scholarly noblewoman who refuted 50 pagan philosophers before Emperor Maxentius before her breaking wheel miraculously shattered.',
      significance: 'Patroness of philosophers, theologians, and female students.'
    }
  },
  26: {
    title: 'Thursday of 34th Week in Ordinary Time (or Thanksgiving Mass)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'Saint John Berchmans',
    historicalEvent: {
      year: '1621 AD',
      title: 'First Catholic Mass of Thanksgiving in North America',
      description: 'Catholic pilgrims and native peoples gathered for Holy Mass and feast days in Spanish Florida and Maryland colonies to thank Almighty God.',
      significance: 'Eucharist means "Thanksgiving" in Greek.'
    }
  },
  27: {
    title: 'Feast of Our Lady of the Miraculous Medal',
    rank: 'Weekday',
    color: 'white',
    saintName: 'Our Lady of the Miraculous Medal',
    historicalEvent: {
      year: '1830 AD',
      title: 'Apparition of Our Lady to Saint Catherine Labouré',
      description: 'The Blessed Mother appeared in Paris revealing the design of the Miraculous Medal with the invocation: "O Mary, conceived without sin, pray for us who have recourse to thee."',
      significance: 'Paved the way for the dogma of the Immaculate Conception.'
    }
  },
  28: {
    title: 'Optional Memorial of St. Catherine Labouré',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Catherine Labouré',
    historicalEvent: {
      year: '1876 AD',
      title: 'Incorrupt Body of Saint Catherine Labouré',
      description: 'Daughter of Charity novice who received the Miraculous Medal. Her body remains perfectly incorrupt in the chapel at Rue du Bac, Paris.',
      significance: 'Model of silent humility and Marian devotion.'
    }
  },
  29: {
    title: 'FIRST SUNDAY OF ADVENT',
    rank: 'Sunday',
    color: 'violet',
    season: 'Advent',
    historicalEvent: {
      year: 'Liturgical Year B/C',
      title: 'Beginning of the Sacred Season of Advent',
      description: 'The Catholic Church begins a new Liturgical Year, lighting the first violet candle on the Advent Wreath in joyful, penitential expectation of Christ\'s Nativity.',
      significance: 'Season of holy vigilance, hope, and longing for the Second Coming.'
    }
  },
  30: {
    title: 'Feast of St. Andrew the Apostle',
    rank: 'Feast',
    color: 'red',
    saintName: 'St. Andrew the Apostle',
    historicalEvent: {
      year: '60 AD',
      title: 'Martyrdom of Saint Andrew on the Decussate Cross',
      description: 'The first-called Apostle (*Protokletos*), brother of Saint Peter, was crucified in Patras, Greece, on an X-shaped cross, preaching Christ to his last breath.',
      significance: 'Patron saint of Scotland, Greece, and the Ecumenical Patriarchate.'
    }
  }
};

// Known feast days and historical Catholic events for every single day in December
export const KNOWN_DECEMBER_DAYS: Record<number, Partial<LiturgicalDayInfo>> = {
  1: {
    title: 'Tuesday of the First Week of Advent / St. Edmund Campion',
    rank: 'Weekday',
    color: 'violet',
    saintName: 'St. Edmund Campion',
    historicalEvent: {
      year: '1581 AD',
      title: 'Martyrdom of Saint Edmund Campion at Tyburn',
      description: 'Jesuit priest and Oxford scholar martyred under Queen Elizabeth I for celebrating secret Holy Mass, declaring his famous "Campion\'s Brag" in defense of the Catholic Faith.',
      significance: 'Hero of the English Catholic Reformation.'
    }
  },
  2: {
    title: 'Wednesday of the First Week of Advent / Bl. Rafqa',
    rank: 'Weekday',
    color: 'violet',
    saintName: 'Blessed Rafqa Pietra Choboq Ar-Rayès',
    historicalEvent: {
      year: '1914 AD',
      title: 'Passing of Saint Rafqa of Lebanon',
      description: 'Lebanese Maronite nun who prayed to share in Christ\'s suffering, bearing blindness and severe illness with unceasing joy and prayer.',
      significance: 'Patroness of sick and suffering souls in the Middle East.'
    }
  },
  3: {
    title: 'Memorial of St. Francis Xavier, Priest',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Francis Xavier',
    historicalEvent: {
      year: '1552 AD',
      title: 'Death of Saint Francis Xavier on Shangchuan Island',
      description: 'Co-founder of the Jesuits and "Apostle of the Indies" died at age 46 gazing toward mainland China, having baptized over 700,000 souls in India, Japan, and the East Indies.',
      significance: 'Patron saint of Catholic foreign missions.'
    }
  },
  4: {
    title: 'Optional Memorial of St. John Damascene, Priest and Doctor',
    rank: 'Optional Memorial',
    color: 'violet',
    saintName: 'St. John Damascene',
    historicalEvent: {
      year: '749 AD',
      title: 'Theological Defense of Sacred Icons',
      description: 'Syrian monk and Doctor of the Church who successfully defended the veneration of holy images against Iconoclasm, writing *On the Divine Images*.',
      significance: 'Last of the Greek Church Fathers.'
    }
  },
  5: {
    title: 'Saturday of the First Week of Advent / St. Sabas',
    rank: 'Weekday',
    color: 'violet',
    saintName: 'St. Sabas, Abbot',
    historicalEvent: {
      year: '532 AD',
      title: 'Foundation of the Great Laura of Saint Sabas',
      description: 'Desert monk who established the Mar Saba Monastery overlooking the Kidron Valley near Jerusalem, a stronghold of Orthodox and Catholic monasticism.',
      significance: 'Pioneer of Palestinian monasticism and liturgical offices.'
    }
  },
  6: {
    title: 'SECOND SUNDAY OF ADVENT (or St. Nicholas, Bishop)',
    rank: 'Sunday',
    color: 'violet',
    saintName: 'St. Nicholas of Myra',
    historicalEvent: {
      year: '343 AD',
      title: 'Feast of Saint Nicholas of Myra',
      description: 'Bishop of Myra in Lycia who defended the deity of Christ at Nicaea (325 AD) and secretly dropped gold coins down chimneys to save impoverished daughters.',
      significance: 'Origin of Saint Nicholas / Santa Claus charity.'
    }
  },
  7: {
    title: 'Memorial of St. Ambrose, Bishop and Doctor of the Church',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Ambrose of Milan',
    historicalEvent: {
      year: '374 AD',
      title: 'Consolidation of Milan Cathedral and Conversion of Augustine',
      description: 'Governor of Milan acclaimed Bishop by public acclamation before he was even baptized, going on to convert St. Augustine through his preaching.',
      significance: 'One of the four Great Doctors of the Western Church.'
    }
  },
  8: {
    title: 'Solemnity of the Immaculate Conception of Mary',
    rank: 'Solemnity',
    color: 'white',
    isHolyDay: true,
    saintName: 'Blessed Virgin Mary, Immaculate',
    historicalEvent: {
      year: '1854 AD',
      title: 'Dogmatic Definition of the Immaculate Conception',
      description: 'Pope Pius IX solemnly defined in *Ineffabilis Deus* that Mary was preserved exempt from all stain of original sin from the first instant of her conception by a singular grace of God.',
      significance: 'Patronal Feast of the United States, Philippines, and Spain.'
    }
  },
  9: {
    title: 'Optional Memorial of St. Juan Diego Cuauhtlatoatzin',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Juan Diego',
    historicalEvent: {
      year: '1531 AD',
      title: 'Apparition of Our Lady of Guadalupe at Tepeyac',
      description: 'Indigenous Mexican peasant Juan Diego heard celestial music on Tepeyac Hill as Mary appeared to him, leaving her miraculous image on his tilma.',
      significance: 'First indigenous saint of the Americas.'
    }
  },
  10: {
    title: 'Optional Memorial of Our Lady of Loreto',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'Our Lady of Loreto',
    historicalEvent: {
      year: '1294 AD',
      title: 'Arrival of the Holy House of Nazareth in Loreto',
      description: 'The ancient stone walls of the Holy House of the Annunciation in Nazareth were translated to Loreto, Italy, where saints and popes have prayed for centuries.',
      significance: 'Patroness of aviators and Christian homes.'
    }
  },
  11: {
    title: 'Optional Memorial of St. Damasus I, Pope',
    rank: 'Optional Memorial',
    color: 'violet',
    saintName: 'St. Damasus I',
    historicalEvent: {
      year: '384 AD',
      title: 'Commissioning of the Latin Vulgate Bible',
      description: 'Pope Damasus I instructed his secretary Saint Jerome to produce an accurate Latin translation of the Holy Scriptures from Hebrew and Greek manuscripts.',
      significance: 'Established the official Latin Vulgate of the Catholic Church.'
    }
  },
  12: {
    title: 'Feast of Our Lady of Guadalupe',
    rank: 'Feast',
    color: 'white',
    saintName: 'Our Lady of Guadalupe',
    historicalEvent: {
      year: '1531 AD',
      title: 'Unfolding of Castilian Roses and Tilma Miraculous Image',
      description: 'Juan Diego opened his tilma before Bishop Zumárraga; Castilian roses tumbled out, revealing the radiant image of Our Lady imprinted onto the cactus fibers.',
      significance: 'Patroness of the Americas, the Philippines, and Protectress of Unborn Children.'
    }
  },
  13: {
    title: 'THIRD SUNDAY OF ADVENT (Gaudete Sunday) / St. Lucy',
    rank: 'Sunday',
    color: 'rose',
    saintName: 'St. Lucy, Virgin and Martyr',
    historicalEvent: {
      year: '304 AD',
      title: 'Gaudete Sunday Rose Vestments and St. Lucy of Syracuse',
      description: 'The Church wears Rose vestments signaling anticipated joy ("Gaudete in Domino semper"). Commemorating St. Lucy, virgin martyr whose name means "Light".',
      significance: 'Midpoint of Advent anticipating Christ\'s birth.'
    }
  },
  14: {
    title: 'Memorial of St. John of the Cross, Priest and Doctor',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. John of the Cross',
    historicalEvent: {
      year: '1591 AD',
      title: 'Transitus of the Mystical Doctor in Úbeda',
      description: 'Carmelite friar, poet, and co-reformer with St. Teresa of Ávila, author of *Dark Night of the Soul* and *Ascent of Mount Carmel*.',
      significance: 'Doctor of Mystical Theology.'
    }
  },
  15: {
    title: 'Tuesday of the Third Week of Advent',
    rank: 'Weekday',
    color: 'violet',
    historicalEvent: {
      year: '1931 AD',
      title: 'Establishment of Vatican Radio by Pope Pius XI',
      description: 'Guglielmo Marconi constructed the first broadcast station for the Holy See, allowing the Pope\'s voice to reach Catholics globally.',
      significance: 'Beginning of Catholic global mass communications.'
    }
  },
  16: {
    title: 'Wednesday of 3rd Week of Advent / Start of Simbang Gabi',
    rank: 'Weekday',
    color: 'violet',
    historicalEvent: {
      year: '1587 AD',
      title: 'Origins of the 9-Day Dawn Simbang Gabi Masses',
      description: 'Pope Sixtus V granted permission for dawn Masses in the Philippines and Mexico in honor of the Blessed Virgin Mary leading to Christmas Eve.',
      significance: 'Cherished Filipino Catholic novena tradition.'
    }
  },
  17: {
    title: 'Late Advent Weekday — O Antiphon: O Sapientia (O Wisdom)',
    rank: 'Weekday',
    color: 'violet',
    historicalEvent: {
      year: '8th Century AD',
      title: 'First Great O Antiphon of Advent Vespers',
      description: 'The Church begins chanting the seven magnificent O Antiphons at Vespers: "O Sapientia" (O Wisdom, coming forth from the mouth of the Most High!).',
      significance: 'Direct Messianic titles invocations leading to Christmas.'
    }
  },
  18: {
    title: 'Late Advent Weekday — O Antiphon: O Adonai (O Lord)',
    rank: 'Weekday',
    color: 'violet',
    historicalEvent: {
      year: '8th Century AD',
      title: 'Second O Antiphon: O Adonai',
      description: 'Invoking Christ as the Ruler of the House of Israel who appeared to Moses in the burning bush: "Come and redeem us with outstretched arm!"',
      significance: 'Prophetic fulfillment of the Old Covenant.'
    }
  },
  19: {
    title: 'Late Advent Weekday — O Antiphon: O Radix Jesse (O Root of Jesse)',
    rank: 'Weekday',
    color: 'violet',
    historicalEvent: {
      year: '8th Century AD',
      title: 'Third O Antiphon: O Radix Jesse',
      description: 'Invoking Christ as the Root of Jesse standing as a sign for the nations: "Come to deliver us, do not delay!"',
      significance: 'Messianic lineage of King David.'
    }
  },
  20: {
    title: 'FOURTH SUNDAY OF ADVENT — O Antiphon: O Clavis David',
    rank: 'Sunday',
    color: 'violet',
    historicalEvent: {
      year: '8th Century AD',
      title: 'Fourth O Antiphon: O Clavis David (O Key of David)',
      description: 'Invoking Christ who opens what no man can shut: "Come and lead the captive from the prison house!"',
      significance: 'Final Sunday before the Nativity of the Lord.'
    }
  },
  21: {
    title: 'Late Advent Weekday — O Antiphon: O Oriens / St. Peter Canisius',
    rank: 'Weekday',
    color: 'violet',
    saintName: 'St. Peter Canisius',
    historicalEvent: {
      year: '1597 AD',
      title: 'Fifth O Antiphon: O Oriens (O Radiant Dawn)',
      description: 'Invoking Christ as the Sun of Justice and Eternal Light. Commemorating St. Peter Canisius, Jesuit Doctor of the Church who authored the Catholic Catechism in Germany.',
      significance: 'Second Apostle of Germany.'
    }
  },
  22: {
    title: 'Late Advent Weekday — O Antiphon: O Rex Gentium',
    rank: 'Weekday',
    color: 'violet',
    historicalEvent: {
      year: '8th Century AD',
      title: 'Sixth O Antiphon: O Rex Gentium (O King of Nations)',
      description: 'Invoking Christ as the King of Nations and Cornerstone of Humanity: "Come and save man whom You formed from the dust!"',
      significance: 'Universal reign of Christ over all peoples.'
    }
  },
  23: {
    title: 'Late Advent Weekday — O Antiphon: O Emmanuel / St. John of Kanty',
    rank: 'Weekday',
    color: 'violet',
    saintName: 'St. John of Kanty',
    historicalEvent: {
      year: '8th Century AD',
      title: 'Seventh O Antiphon: O Emmanuel (God With Us)',
      description: 'The final O Antiphon spelling backwards *ERO CRAS* ("I will be there tomorrow!"). Commemorating St. John of Kanty, Polish priest renowned for radical generosity.',
      significance: 'Immediate threshold of the Nativity.'
    }
  },
  24: {
    title: 'Vigil of the Nativity of the Lord (Christmas Eve)',
    rank: 'Weekday',
    color: 'violet',
    historicalEvent: {
      year: 'c. 1 BC',
      title: 'The Sacred Night of the Savior\'s Birth',
      description: 'Joseph and Mary arrived in Bethlehem, finding no room in the inn. In a quiet cave manger, Mary brought forth the Savior of the World while angels sang *Gloria in Excelsis Deo* to shepherds.',
      significance: 'Midnight Mass and Christmas Vigil.'
    }
  },
  25: {
    title: 'SOLEMNITY OF THE NATIVITY OF THE LORD (CHRISTMAS)',
    rank: 'Solemnity',
    color: 'white',
    isHolyDay: true,
    saintName: 'The Infant Jesus Christ',
    historicalEvent: {
      year: 'c. 1 AD',
      title: 'The Word Was Made Flesh and Dwelt Among Us',
      description: 'The Eternal Son of God took human flesh from the Virgin Mary in Bethlehem for the salvation of humanity (*Et Verbum caro factum est*).',
      significance: 'The Incarnation of God—center of human history.'
    }
  },
  26: {
    title: 'Feast of St. Stephen, the First Martyr',
    rank: 'Feast',
    color: 'red',
    saintName: 'St. Stephen',
    historicalEvent: {
      year: '34 AD',
      title: 'Martyrdom of Saint Stephen the Protomartyr',
      description: 'The first Christian deacon was stoned to death outside Jerusalem, gazing into heaven and praying for his executioners like Christ: "Lord, do not hold this sin against them."',
      significance: 'First martyr of the Catholic Church.'
    }
  },
  27: {
    title: 'Feast of St. John, Apostle and Evangelist',
    rank: 'Feast',
    color: 'white',
    saintName: 'St. John the Evangelist',
    historicalEvent: {
      year: '100 AD',
      title: 'Passing of the Beloved Disciple at Ephesus',
      description: 'Author of the Fourth Gospel, three Epistles, and the Book of Revelation, who reclined on the Sacred Heart of Jesus at the Last Supper and stood at the foot of the Cross.',
      significance: 'Patron of theologians, writers, and Marian devotions.'
    }
  },
  28: {
    title: 'Feast of the Holy Innocents, Martyrs',
    rank: 'Feast',
    color: 'red',
    saintName: 'The Holy Innocents',
    historicalEvent: {
      year: 'c. 1 BC',
      title: 'Martyrdom of the Infant Boys of Bethlehem',
      description: 'King Herod ordered the massacre of all male children two years old and under in Bethlehem in a futile attempt to destroy the newborn King of Kings.',
      significance: 'Patron saints of unborn children and babies.'
    }
  },
  29: {
    title: 'Fifth Day in Octave of Christmas / St. Thomas Becket',
    rank: 'Weekday',
    color: 'white',
    saintName: 'St. Thomas Becket',
    historicalEvent: {
      year: '1170 AD',
      title: 'Martyrdom of Saint Thomas Becket in Canterbury Cathedral',
      description: 'Archbishop of Canterbury assassinated at the altar by king\'s knights for defending the rights and freedoms of the Church, crying: "For the Name of Jesus and protection of the Church I am ready to embrace death."',
      significance: 'Symbol of Church freedom against state tyranny.'
    }
  },
  30: {
    title: 'Sixth Day in the Octave of Christmas / Holy Family Eve',
    rank: 'Weekday',
    color: 'white',
    historicalEvent: {
      year: '1904 AD',
      title: 'Pius X Decrees Frequent Holy Communion',
      description: 'Pope St. Pius X urged all Catholic faithful to receive Holy Communion daily and lowered the age of First Communion for children.',
      significance: 'Eucharistic renewal across the universal Church.'
    }
  },
  31: {
    title: 'Seventh Day in Octave of Christmas / Te Deum Mass',
    rank: 'Weekday',
    color: 'white',
    saintName: 'St. Sylvester I, Pope',
    historicalEvent: {
      year: '335 AD',
      title: 'Te Deum Thanksgiving Mass at Year\'s End',
      description: 'Catholics worldwide gather on New Year\'s Eve for Exposition of the Blessed Sacrament and solemn chanting of the *Te Deum* hymn of thanksgiving for graces received.',
      significance: 'Consecrating time and civil years to Almighty God.'
    }
  }
};

// Known feast days and historical Catholic events for every single day in January
export const KNOWN_JANUARY_DAYS: Record<number, Partial<LiturgicalDayInfo>> = {
  1: {
    title: 'Solemnity of Mary, the Holy Mother of God',
    rank: 'Solemnity',
    color: 'white',
    isHolyDay: true,
    saintName: 'Mary, Holy Mother of God',
    historicalEvent: {
      year: '431 AD',
      title: 'Dogmatic Proclamation of Mary as Theotokos at Ephesus',
      description: 'The Third Ecumenical Council of Ephesus declared Mary to be truly *Theotokos* (Mother of God), as Jesus Christ is one Divine Person with a true human nature.',
      significance: 'Octave Day of Christmas and World Day of Peace.'
    }
  },
  2: {
    title: 'Memorial of Sts. Basil the Great and Gregory Nazianzen',
    rank: 'Memorial',
    color: 'white',
    saintName: 'Sts. Basil and Gregory Nazianzen',
    historicalEvent: {
      year: '379 AD',
      title: 'Defenders of the Holy Spirit and the Trinity',
      description: 'Cappadocian Church Fathers and Doctors who formulated classical Catholic Trinitarian theology against the Arian heresy.',
      significance: 'Pillars of Eastern Christian monasticism and theology.'
    }
  },
  3: {
    title: 'Optional Memorial of the Most Holy Name of Jesus',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'The Holy Name of Jesus',
    historicalEvent: {
      year: '1530 AD',
      title: 'Promotion of the Holy Name Monogram (IHS)',
      description: 'Saint Bernardino of Siena and Saint John of Capistrano promoted the public veneration of the Holy Name of Jesus (*IHS* monogram) across Europe.',
      significance: '"At the name of Jesus every knee should bow" (Phil 2:10).'
    }
  },
  4: {
    title: 'Memorial of St. Elizabeth Ann Seton, Religious',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Elizabeth Ann Seton',
    historicalEvent: {
      year: '1821 AD',
      title: 'Passing of Saint Elizabeth Ann Seton in Emmitsburg',
      description: 'Episcopalian widow who converted to Catholicism, founded the Sisters of Charity of St. Joseph, and established the first free Catholic parochial school in the US.',
      significance: 'First native-born United States citizen canonized a Saint.'
    }
  },
  5: {
    title: 'Memorial of St. John Neumann, Bishop',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. John Neumann',
    historicalEvent: {
      year: '1860 AD',
      title: 'Pioneer of Catholic Parochial Schools in Philadelphia',
      description: 'Bohemian Redemptorist priest who became 4th Bishop of Philadelphia, building 89 Catholic churches and multiplying parochial schools from 2 to 100.',
      significance: 'First male US saint and organizer of 40-Hour Eucharistic Adoration.'
    }
  },
  6: {
    title: 'SOLEMNITY OF THE EPIPHANY OF THE LORD (Three Kings)',
    rank: 'Solemnity',
    color: 'white',
    isHolyDay: true,
    saintName: 'The Holy Magi',
    historicalEvent: {
      year: 'c. 1 AD',
      title: 'Adoration of the Magi in Bethlehem',
      description: 'Wise Men from the East guided by the miraculous Star brought gifts of gold, frankincense, and myrrh to the Infant King of Kings.',
      significance: 'Manifestation of Christ to the Gentile nations.'
    }
  },
  7: {
    title: 'Optional Memorial of St. Raymond of Peñafort, Priest',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Raymond of Peñafort',
    historicalEvent: {
      year: '1275 AD',
      title: 'Compilation of the Decretals of Gregory IX',
      description: 'Dominican friar and master general who compiled the first official collection of Catholic Canon Law (*Decretales Gregorii IX*) used for 700 years.',
      significance: 'Patron saint of Canon Lawyers.'
    }
  },
  8: {
    title: 'Weekday (or St. Severinus / St. Gudula)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'St. Severinus of Noricum',
    historicalEvent: {
      year: '482 AD',
      title: 'Passing of Saint Severinus, Apostle to Noricum',
      description: 'Monk who evangelized the Danube provinces during the collapse of the Western Roman Empire, establishing monasteries and ransoming captives.',
      significance: 'Protector of refugees during barbarian invasions.'
    }
  },
  9: {
    title: 'Feast of the Black Nazarene (Manila) / St. Adrian',
    rank: 'Feast',
    color: 'red',
    saintName: 'Poong Itim na Nazareno',
    historicalEvent: {
      year: '1606 AD',
      title: 'Traslación of the Black Nazarene in Quiapo, Manila',
      description: 'Augustinian Recollects brought the life-sized dark wooden statue of Jesus carrying the Cross from Mexico to Manila, producing millions of miraculous healings.',
      significance: 'One of the largest religious processions in global Christianity.'
    }
  },
  10: {
    title: 'FEAST OF THE BAPTISM OF THE LORD',
    rank: 'Feast',
    color: 'white',
    historicalEvent: {
      year: 'c. 27 AD',
      title: 'Baptism of Jesus Christ in the Jordan River',
      description: 'Saint John the Baptist baptized Jesus as the Heavens opened, the Holy Spirit descended like a dove, and the Father proclaimed: "This is my beloved Son!"',
      significance: 'Conclusion of Christmas Season and inauguration of Christ\'s public ministry.'
    }
  },
  11: {
    title: 'Monday of the First Week in Ordinary Time',
    rank: 'Weekday',
    color: 'green',
    historicalEvent: {
      year: '529 AD',
      title: 'Passing of Saint Theodosius the Cenobiarch',
      description: 'Founder of organized communal monasticism in the Judean desert who housed over 400 monks of various languages in unity.',
      significance: 'Father of cenobitic monasticism in the East.'
    }
  },
  12: {
    title: 'Weekday (or St. Marguerite Bourgeoys, Virgin)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'St. Marguerite Bourgeoys',
    historicalEvent: {
      year: '1700 AD',
      title: 'Founding of the Congregation of Notre Dame of Montreal',
      description: 'French Catholic sister who traveled to New France (Canada) to build the first uncloistered religious community educating French and indigenous girls.',
      significance: 'Mother of Catholic education in Canada.'
    }
  },
  13: {
    title: 'Optional Memorial of St. Hilary, Bishop and Doctor',
    rank: 'Optional Memorial',
    color: 'green',
    saintName: 'St. Hilary of Poitiers',
    historicalEvent: {
      year: '367 AD',
      title: 'Defense of the Nicene Creed Against Arianism',
      description: 'Bishop of Poitiers known as the "Hammer of the Arians" (*Malleus Arianorum*), who suffered exile for defending the divinity of Jesus Christ.',
      significance: 'Doctor of the Divinity of Christ.'
    }
  },
  14: {
    title: 'Weekday (or St. Felix of Nola, Priest)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'St. Felix of Nola',
    historicalEvent: {
      year: '255 AD',
      title: 'Miraculous Escape of Saint Felix in the Catacombs',
      description: 'Confessor priest who escaped Decian persecutions when a spider rapidly spun a web over his hiding cave opening, fooling pursuers.',
      significance: 'Subject of Saint Paulinus of Nola\'s yearly poems.'
    }
  },
  15: {
    title: 'Weekday (or St. Paul the First Hermit)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'St. Paul the First Hermit',
    historicalEvent: {
      year: '341 AD',
      title: 'Meeting of Saint Anthony the Great and Saint Paul the Hermit',
      description: '90-year-old Anthony walked into the Egyptian desert to meet 113-year-old Paul, who had lived in a palm cave fed daily by a raven bringing half a loaf of bread.',
      significance: 'First recorded Christian hermit in Church history.'
    }
  },
  16: {
    title: 'Weekday (or St. Berard and Companions, Franciscan Martyrs)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'Franciscan First Martyrs',
    historicalEvent: {
      year: '1220 AD',
      title: 'Martyrdom of Saint Berard and Companions in Morocco',
      description: 'Five Franciscan friars sent by Saint Francis to preach in Morocco were martyred, inspiring young Anthony of Padua to join the Franciscans.',
      significance: 'First martyrs of the Franciscan Order.'
    }
  },
  17: {
    title: 'SOLEMNITY OF SANTO NIÑO (Philippines) / St. Anthony, Abbot',
    rank: 'Solemnity',
    color: 'white',
    saintName: 'Santo Niño de Cebú / St. Anthony',
    historicalEvent: {
      year: '1521 AD',
      title: 'Arrival of the Image of Santo Niño de Cebú',
      description: 'Ferdinand Magellan presented the miraculous image of the Holy Child Jesus (Santo Niño) to Queen Juana of Cebu upon her baptism.',
      significance: 'Cradle of Christian faith in the Philippines and Asia.'
    }
  },
  18: {
    title: 'Start of the Week of Prayer for Christian Unity',
    rank: 'Weekday',
    color: 'green',
    historicalEvent: {
      year: '1908 AD',
      title: 'Inauguration of the Octave of Christian Unity',
      description: 'Father Paul Wattson and Sister Lurana White initiated eight days of prayer between the Feast of the Chair of Peter (Jan 18) and Conversion of St. Paul (Jan 25).',
      significance: 'Universal Catholic movement for Christian reconciliation.'
    }
  },
  19: {
    title: 'Weekday (or St. Wulstan / St. Sebastian)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'St. Wulstan of Worcester',
    historicalEvent: {
      year: '1095 AD',
      title: 'Passing of Saint Wulstan, Bishop of Worcester',
      description: 'Benedictine bishop who abolished the slave trade in Bristol and was the last surviving Anglo-Saxon bishop after the Norman Conquest.',
      significance: 'Patron saint of vegetarianism and opponents of slavery.'
    }
  },
  20: {
    title: 'Optional Memorial of St. Fabian, Pope / St. Sebastian',
    rank: 'Optional Memorial',
    color: 'red',
    saintName: 'St. Sebastian, Martyr',
    historicalEvent: {
      year: '288 AD',
      title: 'Martyrdom of Saint Sebastian under Diocletian',
      description: 'Captain of the Pretorian Guard who secretly encouraged imprisoned Christians before being shot with arrows and beaten for his faith.',
      significance: 'Patron saint of athletes, soldiers, and plague protection.'
    }
  },
  21: {
    title: 'Memorial of St. Agnes, Virgin and Martyr',
    rank: 'Memorial',
    color: 'red',
    saintName: 'St. Agnes of Rome',
    historicalEvent: {
      year: '304 AD',
      title: 'Martyrdom of 12-Year-Old Saint Agnes in Rome',
      description: 'Young Roman maiden who refused suitors to preserve her consecrated virginity for Christ, martyred under Diocletian with heroic serenity.',
      significance: 'Patroness of young girls, chastity, and victims of abuse.'
    }
  },
  22: {
    title: 'Day of Prayer for Legal Protection of Unborn Children',
    rank: 'Weekday',
    color: 'violet',
    isFastingDay: true,
    historicalEvent: {
      year: '1973 AD',
      title: 'Catholic Day of Penance and Prayer for Unborn Children',
      description: 'Bishops established a national day of prayer, fasting, and Eucharistic adoration for the restoration of legal protection for unborn human lives.',
      significance: 'Promoting the Gospel of Life (*Evangelium Vitae*).'
    }
  },
  23: {
    title: 'Optional Memorial of St. Marianne Cope, Virgin',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Marianne Cope',
    historicalEvent: {
      year: '1918 AD',
      title: 'Mission of Saint Marianne Cope to Molokai',
      description: 'Syracuse Franciscan sister who volunteered with six sisters to care for victims of Hansen\'s disease (leprosy) in Hawaii alongside Saint Damien.',
      significance: 'Patroness of lepers and healthcare workers.'
    }
  },
  24: {
    title: 'Memorial of St. Francis de Sales, Bishop and Doctor',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Francis de Sales',
    historicalEvent: {
      year: '1622 AD',
      title: 'Passing of the Gentle Doctor of Love',
      description: 'Bishop of Geneva who converted 72,000 Calvinists through gentle pamphlets and wrote *Introduction to the Devout Life*, proving holiness is for all states of life.',
      significance: 'Patron saint of Catholic journalists, writers, and deaf people.'
    }
  },
  25: {
    title: 'Feast of the Conversion of Saint Paul the Apostle',
    rank: 'Feast',
    color: 'white',
    saintName: 'St. Paul the Apostle',
    historicalEvent: {
      year: '34 AD',
      title: 'The Road to Damascus Conversion of Saul of Tarsus',
      description: 'Saul was struck down by a blinding light as the Risen Christ asked: "Saul, Saul, why do you persecute Me?", transforming the persecutor into the Great Apostle to the Gentiles.',
      significance: 'Conclusion of the Week of Prayer for Christian Unity.'
    }
  },
  26: {
    title: 'Memorial of Sts. Timothy and Titus, Bishops',
    rank: 'Memorial',
    color: 'white',
    saintName: 'Sts. Timothy and Titus',
    historicalEvent: {
      year: '1st Century AD',
      title: 'Apostolic Companions of Saint Paul',
      description: 'Saint Timothy (first Bishop of Ephesus) and Saint Titus (first Bishop of Crete), faithful disciples who received Saint Paul\'s Pastoral Epistles.',
      significance: 'Models of apostolic succession and episcopal ministry.'
    }
  },
  27: {
    title: 'Optional Memorial of St. Angela Merici, Virgin',
    rank: 'Optional Memorial',
    color: 'white',
    saintName: 'St. Angela Merici',
    historicalEvent: {
      year: '1540 AD',
      title: 'Founding of the Company of Saint Ursula',
      description: 'Italian Franciscan tertiary who founded the Ursulines in Brescia, the first teaching order of women in Church history.',
      significance: 'Pioneer of Catholic women\'s education.'
    }
  },
  28: {
    title: 'Memorial of St. Thomas Aquinas, Priest and Doctor',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. Thomas Aquinas',
    historicalEvent: {
      year: '1274 AD',
      title: 'Translation of the Relics of Doctor Angelicus',
      description: 'Dominican friar, author of the *Summa Theologiae*, and composer of Eucharistic hymns (*Pange Lingua*, *Panis Angelicus*, *Adoro Te Devote*).',
      significance: 'Patron saint of Catholic schools, universities, and theologians.'
    }
  },
  29: {
    title: 'Weekday (or St. Gildas / Bl. Mutien-Marie)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'Blessed Mutien-Marie Wiaux',
    historicalEvent: {
      year: '1917 AD',
      title: 'Passing of Brother Mutien-Marie ("The Praying Brother")',
      description: 'De La Salle Christian Brother in Belgium who spent 50 years teaching music and drawing, known as "the brother who prays always".',
      significance: 'Model of sanctification in hidden daily duties.'
    }
  },
  30: {
    title: 'Weekday (or St. Hyacintha Mariscotti)',
    rank: 'Weekday',
    color: 'green',
    saintName: 'St. Hyacintha Mariscotti',
    historicalEvent: {
      year: '1640 AD',
      title: 'Conversion and Sanctification of Saint Hyacintha',
      description: 'Franciscan Third Order nun who converted from worldly vanity to heroic penance and care for the sick and elderly in Viterbo.',
      significance: 'Patroness of repentant sinners.'
    }
  },
  31: {
    title: 'Memorial of St. John Bosco, Priest',
    rank: 'Memorial',
    color: 'white',
    saintName: 'St. John Bosco (Don Bosco)',
    historicalEvent: {
      year: '1888 AD',
      title: 'Passing of Don Bosco, Father and Teacher of Youth',
      description: 'Italian priest who founded the Salesians and Daughters of Mary Help of Christians, building oratories, trade schools, and homes for poor street youth of Turin.',
      significance: 'Patron saint of youth, apprentices, and Catholic publishers.'
    }
  }
};


// Generates liturgical information for any month and year
export function getLiturgicalMonth(year: number, month: number): LiturgicalDayInfo[] {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const result: LiturgicalDayInfo[] = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const dateObj = new Date(year, month, day);
    const dayOfWeekStr = dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayOfWeekNum = dateObj.getDay();

    // Determine default season
    let season: LiturgicalDayInfo['season'] = 'Ordinary Time';
    if ((month === 10 && day >= 27) || (month === 11 && day <= 24)) {
      season = 'Advent';
    } else if ((month === 11 && day >= 25) || (month === 0 && day <= 10)) {
      season = 'Christmas';
    }

    let title = `${dayOfWeekStr} in ${season}`;
    let rank: LiturgicalDayInfo['rank'] = dayOfWeekNum === 0 ? 'Sunday' : 'Weekday';
    let color: LiturgicalColor = season === 'Advent' ? 'violet' : season === 'Christmas' ? 'white' : 'green';
    let isHolyDay = false;
    let isFasting = dayOfWeekNum === 5; // Friday abstinence
    let saintName: string | undefined = undefined;
    let historicalEvent: LiturgicalDayInfo['historicalEvent'] = undefined;

    // Check specific month override
    let knownDay: Partial<LiturgicalDayInfo> | undefined = undefined;
    if (month === 9 && KNOWN_OCTOBER_DAYS[day]) {
      knownDay = KNOWN_OCTOBER_DAYS[day];
    } else if (month === 10 && KNOWN_NOVEMBER_DAYS[day]) {
      knownDay = KNOWN_NOVEMBER_DAYS[day];
    } else if (month === 11 && KNOWN_DECEMBER_DAYS[day]) {
      knownDay = KNOWN_DECEMBER_DAYS[day];
    } else if (month === 0 && KNOWN_JANUARY_DAYS[day]) {
      knownDay = KNOWN_JANUARY_DAYS[day];
    }

    if (knownDay) {
      if (knownDay.title) title = knownDay.title;
      if (knownDay.rank) rank = knownDay.rank;
      if (knownDay.color) color = knownDay.color;
      if (knownDay.saintName) saintName = knownDay.saintName;
      if (knownDay.isHolyDay !== undefined) isHolyDay = knownDay.isHolyDay;
      if (knownDay.isFastingDay !== undefined) isFasting = knownDay.isFastingDay;
      if (knownDay.historicalEvent) historicalEvent = knownDay.historicalEvent;
      if (knownDay.season) season = knownDay.season;
    } else {
      if (dayOfWeekNum === 0) {
        title = `Sunday of the Liturgical Year`;
      }
    }

    result.push({
      date: dateKey,
      dayOfWeek: dayOfWeekStr,
      title,
      rank,
      season,
      color,
      isHolyDay,
      isFastingDay: isFasting,
      saintName,
      historicalEvent
    });
  }

  return result;
}
