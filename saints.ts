import { Saint } from '../types';

export const SAINTS_DATABASE: Saint[] = [
  {
    id: 'saint-anthony-mary-claret',
    name: 'St. Anthony Mary Claret',
    title: 'Bishop, Founder of the Claretians, and Confessor',
    feastDate: 'October 24',
    month: 10,
    day: 24,
    birthYear: '1807',
    deathYear: '1870',
    patronage: ['Weavers', 'Textile merchants', 'Catholic press', 'Designers', 'Claretian Missionaries'],
    symbols: ['Episcopal vestments', 'Heart of Mary badge', 'Rosary', 'Open Gospel book'],
    liturgicalColor: 'white',
    imageUrl: 'https://i0.wp.com/www.claret.org/wp-content/uploads/2022/07/st-anthony-mary-claret.webp?w=419&ssl=1',
    biography: `Born in Sallent, Spain, Saint Anthony Mary Claret was an indefatigable missionary, founder of the Missionary Sons of the Immaculate Heart of Mary (Claretians), archbishop of Santiago de Cuba, and confessor to Queen Isabella II. He promoted Eucharistic devotion, the Rosary, and the Catholic press with fiery zeal, enduring numerous assassination attempts, exile, and slander for defending the rights of the Church and the poor.`,
    quote: {
      text: 'The zealot of souls loves God, and consequently loves his neighbor for God\'s sake; he does not fear labors, fatigue, or death.',
      source: 'Autobiography of St. Anthony Mary Claret'
    },
    prayer: `O God, who for the salvation of souls endowed Bishop Saint Anthony Mary with wonderful charity and apostolic strength, grant, we pray, that, following his teaching and example, we may seek you in all things and win our brothers and sisters for Christ. Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever. Amen.`,
    canonization: 'Canonized by Pope Pius XII on May 7, 1950'
  },
  {
    id: 'saint-john-of-capistrano',
    name: 'St. John of Capistrano',
    title: 'Priest, Franciscan Friar, Apostolic Preacher ("Soldier Saint")',
    feastDate: 'October 23',
    month: 10,
    day: 23,
    birthYear: '1386',
    deathYear: '1456',
    patronage: ['Military chaplains', 'Jurists and lawyers', 'Judges', 'Franciscan preachers', 'Belgrade'],
    symbols: ['Banner with the Holy Name of Jesus (IHS)', 'Crucifix', 'Franciscan habit with cord', 'Open Scriptures'],
    liturgicalColor: 'white',
    imageUrl: '/images/saints/saint-jean-brebeuf.jpg',
    biography: `Born in Capestrano, Abruzzo, Saint John of Capistrano was a brilliant doctor of canon and civil law and governor of Perugia before a mystical conversion led him to renounce worldly ambitions and enter the Order of Friars Minor (Franciscans) at age thirty under Saint Bernardino of Siena. He became one of the greatest apostolic preachers in Church history, traveling barefoot across Italy, Germany, Austria, Poland, and Hungary, drawing crowds of up to 120,000 who wept with compunction at his preaching on repentance and the Holy Name of Jesus. At the age of seventy, commissioned by Pope Callixtus III, he rallied Christian defenders at the decisive Siege of Belgrade (1456), marching through cannon fire armed only with a crucifix and a banner bearing the Holy Name of Jesus (IHS), shouting: "Whether in life or death, victory is ours in Jesus!" The siege was heroically lifted, preserving Christian civilization.`,
    quote: {
      text: 'Those who are called to the table of the Lord must glow with the brightness of that good example which is in them, so that all may see their good works and give glory to the Father who is in heaven.',
      source: 'Treatise on the Sacerdotal Life (Office of Readings, October 23)'
    },
    prayer: `O God, who raised up Saint John of Capistrano to give your faithful people comfort and strength in their trials, grant that under your protection we may be kept safe from all harm, and keep your Church in unbroken peace. Through our Lord Jesus Christ, your Son, who lives and reigns with you in the unity of the Holy Spirit, God, for ever and ever. Amen.`,
    canonization: 'Canonized by Pope Alexander VIII in 1690'
  },
  {
    id: 'saint-paul-of-the-cross',
    name: 'St. Paul of the Cross',
    title: 'Priest, Mystic, and Founder of the Passionists',
    feastDate: 'October 20',
    month: 10,
    day: 20,
    birthYear: '1694',
    deathYear: '1775',
    patronage: ['Passionists', 'Those in spiritual darkness', 'Preachers of retreats', 'Sufferers of grief'],
    symbols: ['Passionist Sign (Heart with Cross)', 'Crucifix', 'Crown of thorns', 'Rosary'],
    liturgicalColor: 'white',
    imageUrl: '/images/saints/saint-paul-of-the-cross.jpg',
    biography: `Born Paolo Francesco Danei in Ovada, Italy, St. Paul of the Cross received celestial visions of Our Lady dressed in a black tunic with a white heart bearing the Name of Jesus and a cross. In 1720, he founded the Congregation of the Passion (Passionists), dedicated to keeping alive in the hearts of the faithful the memory of Christ's Passion as the most sublime work of Divine Love. Renowned for his penances, apostolic preaching, and profound mystical gifts, he guided thousands of souls through spiritual desolation.`,
    quote: {
      text: 'The Passion of Jesus Christ is the greatest and most overwhelming work of God’s divine love. Immerse your heart in the wounds of Christ, and you will find peace.',
      source: 'Letters of Spiritual Direction'
    },
    prayer: `May the Priest Saint Paul, whose only love was the Cross, obtain for us your grace, O Lord, so that, urged on more strongly by his example, we may each embrace our own cross with courage. Through Christ our Lord. Amen.`,
    canonization: 'Canonized by Pope Pius IX in 1867'
  },
  {
    id: 'saint-maria-bertilla-boscardin',
    name: 'St. Maria Bertilla Boscardin',
    title: 'Virgin & Servant of the Sick',
    feastDate: 'October 20',
    month: 10,
    day: 20,
    birthYear: '1888',
    deathYear: '1922',
    patronage: ['Nurses', 'Hospital workers', 'Children with cancer', 'Those deemed slow of intellect'],
    symbols: ['Nurse apron over habit', 'Crucifix', 'Rosary'],
    liturgicalColor: 'white',
    imageUrl: '/images/saints/saint-maria-bertilla.jpg',
    biography: `Born to a peasant family in Brendola, Italy, Maria Bertilla was deemed slow of intellect by many in her youth, yet her heart burned with incandescent charity. Entering the Teachers of Saint Dorothy, Daughters of the Sacred Hearts, she was assigned to nurse sick and wounded soldiers and children in Treviso during World War I. Working tirelessly through bombardments with angelic gentleness, she comforted the dying and washed wounds with the tender touch of Christ Himself, saying: "To God all glory, to my neighbor all joy, to me all work."`,
    quote: {
      text: 'I must become small, smaller still, until I am nothing, so that Jesus may be all in all.',
      source: 'Spiritual Notes of St. Maria Bertilla'
    },
    prayer: `O God, who gave Saint Maria Bertilla the grace to see Christ in the suffering and the poor, grant us, through her example, hearts burning with humble charity and selfless service. Through our Lord Jesus Christ, your Son. Amen.`,
    canonization: 'Canonized by Pope John XXIII in 1961'
  },
  {
    id: 'saints-jean-brebeuf-isaac-jogues',
    name: 'Saints Jean de Brébeuf, Isaac Jogues, and Companions',
    title: 'Priests, Religious, and Martyrs (North American Martyrs)',
    feastDate: 'October 19',
    month: 10,
    day: 19,
    birthYear: '1593 / 1607',
    deathYear: '1646–1649',
    patronage: ['Canada', 'North America', 'Missionaries', 'Native peoples of America'],
    symbols: ['Crucifix held high', 'Tomahawk', 'Palms of martyrdom', 'Cassock'],
    liturgicalColor: 'red',
    imageUrl: '/images/saints/saint-jean-brebeuf.jpg',
    biography: `Saints Jean de Brébeuf, Isaac Jogues, and their six Jesuit companions—René Goupil, Jean de Lalande, Gabriel Lalemant, Antoine Daniel, Charles Garnier, and Noël Chabanel—were French missionaries who brought the Catholic Faith to the Huron and Iroquois nations in seventeenth-century North America. Enduring brutal winters, disease, and perilous wilderness journeys, they translated the Catechism into indigenous tongues and composed the first Huron Christmas carol. When captured and tortured, they demonstrated supernatural meekness and forgiving love for their persecutors, dying as seeds of faith for the Church in North America.`,
    quote: {
      text: 'My God, my Savior, I take from your hand the cup of your sufferings and call upon your name: Jesus, Jesus, Jesus! What will separate me from the love of Christ?',
      source: 'Spiritual Journal of St. Jean de Brébeuf'
    },
    prayer: `O God, who chose to manifest the blessed beginnings of your Church in North America through the preaching and martyrdom of Saint Jean de Brébeuf, Saint Isaac Jogues, and their companions, graciously grant that through their intercession, the faith of Christians may grow day by day. Through Christ our Lord. Amen.`,
    canonization: 'Canonized by Pope Pius XI in 1930'
  },
  {
    id: 'saint-luke',
    name: 'St. Luke the Evangelist',
    title: 'Apostle, Physician, and Evangelist',
    feastDate: 'October 18',
    month: 10,
    day: 18,
    birthYear: '1st Century',
    deathYear: 'c. 84',
    patronage: ['Physicians and surgeons', 'Artists and painters', 'Brewers', 'Notaries'],
    symbols: ['Winged Ox', 'Book of the Gospels', 'Painter\'s palette', 'Pen'],
    liturgicalColor: 'red',
    imageUrl: '/images/saints/saint-luke.jpg',
    biography: `St. Luke, a Greek physician from Antioch and loyal companion of St. Paul on his missionary journeys, was inspired by the Holy Spirit to author the Gospel of Luke and the Acts of the Apostles. His Gospel is renowned for its emphasis on prayer, the Holy Spirit, the joy of the Kingdom, and Christ's compassion for the poor, sinners, and outcasts. Christian tradition records that Luke was also an iconographer who painted the first portrait of the Blessed Virgin Mary holding the Christ Child.`,
    quote: {
      text: 'My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has looked on the humble estate of his servant.',
      source: 'Gospel of Luke 1:46-48'
    },
    prayer: `Lord God, who chose Saint Luke to reveal by his preaching and writings the mystery of your love for the poor, grant that those who already glory in your name may persevere as one heart and one soul. Through Christ our Lord. Amen.`,
    canonization: 'Pre-Congregation'
  },
  {
    id: 'saint-ignatius-antioch',
    name: 'St. Ignatius of Antioch',
    title: 'Bishop and Martyr, Apostolic Father',
    feastDate: 'October 17',
    month: 10,
    day: 17,
    birthYear: 'c. 35',
    deathYear: 'c. 108',
    patronage: ['Church in the Eastern Mediterranean', 'Throat ailments', 'Antioch'],
    symbols: ['Lions', 'Chains', 'Eucharistic wheat', 'Bishop\'s miter'],
    liturgicalColor: 'red',
    imageUrl: '/images/saints/saint-ignatius-antioch.jpg',
    biography: `St. Ignatius of Antioch, appointed the third Bishop of Antioch as successor to St. Peter and student of the Apostle St. John, is among the greatest Apostolic Fathers of the Church. Arrested under Emperor Trajan, he was escorted in chains across the empire to Rome to be devoured by beasts. During this journey, he wrote seven immortal epistles to the early Christian communities, providing the earliest historical witnesses to the Catholic hierarchy of Bishops, Priests, and Deacons, the Real Presence of Christ in the Holy Eucharist, and coining the phrase "Catholic Church" (Katholike Ekklesia).`,
    quote: {
      text: 'I am the wheat of God, and let me be ground by the teeth of the wild beasts, that I may be found the pure bread of Christ.',
      source: 'Letter to the Romans'
    },
    prayer: `Almighty ever-living God, who adorn the sacred body of your Church with the confessions of holy Martyrs: grant that just as the glorious passion of Saint Ignatius of Antioch brought him everlasting honor, so it may bring us eternal protection. Through Christ our Lord. Amen.`,
    canonization: 'Pre-Congregation'
  },
  {
    id: 'saint-margaret-mary-alacoque',
    name: 'St. Margaret Mary Alacoque',
    title: 'Virgin & Apostle of the Sacred Heart',
    feastDate: 'October 16',
    month: 10,
    day: 16,
    birthYear: '1647',
    deathYear: '1690',
    patronage: ['Devotees of the Sacred Heart', 'Loss of parents', 'Polio patients'],
    symbols: ['Sacred Heart of Jesus', 'Crown of thorns', 'Visitation Habit', 'Lily'],
    liturgicalColor: 'white',
    imageUrl: '/images/saints/saint-margaret-mary-alacoque.jpg',
    biography: `Margaret Mary Alacoque was born in Burgundy, France. Entering the Order of the Visitation at Paray-le-Monial at age twenty-four, she was chosen by Our Lord Jesus Christ to receive sublime private revelations of His Sacred Heart. Between 1673 and 1675, Jesus appeared to her, revealing His Heart enkindled with flames of love for all humanity, crowned with thorns, and wounded by man's indifference and sacrilege.

Our Lord commissioned Margaret Mary to establish the Feast of the Sacred Heart on the Friday after Corpus Christi, the First Friday Holy Hour of Adoration, and the Nine First Fridays communion reparation. Guided by her spiritual director, St. Claude de la Colombière, S.J., she endured initial skepticism with heroic patience and humility, transforming Catholic devotional life and spreading the burning furnace of Christ's merciful love across the universal Church.`,
    quote: {
      text: 'My divine Master showed me His Heart aflame with love, saying: "Behold this Heart which has loved men so much, yet receives in return only ingratitude and contempt."',
      source: 'Autobiography of St. Margaret Mary'
    },
    prayer: `O Lord Jesus Christ, who wonderfully opened the unsearchable riches of Your Heart to the Virgin Saint Margaret Mary: grant that, loving You in all things and above all things, we may deserve to find our perpetual dwelling within Your Most Sacred Heart. Who live and reign with God the Father in the unity of the Holy Spirit, God, for ever and ever. Amen.`,
    canonization: 'Canonized by Pope Benedict XV in 1920'
  },
  {
    id: 'saint-hedwig',
    name: 'St. Hedwig of Silesia',
    title: 'Religious & Duchess',
    feastDate: 'October 16',
    month: 10,
    day: 16,
    birthYear: '1174',
    deathYear: '1243',
    patronage: ['Brandenburg', 'Silesia', 'Brides', 'Difficult marriages', 'The poor'],
    symbols: ['Church model', 'Crown held in hand', 'Bare feet in snow', 'Rosary'],
    liturgicalColor: 'white',
    imageUrl: '/images/saints/saint-hedwig.jpg',
    biography: `St. Hedwig, Duchess of Silesia (modern Poland and Germany) and aunt of St. Elizabeth of Hungary, used her royal status entirely for the relief of the suffering, orphans, and lepers. After bearing seven children with her husband Duke Henry I, they took mutual vows of chastity. Hedwig founded the famous Cistercian abbey of Trebnitz, built hospitals, and daily invited thirteen poor persons to sit at her table in honor of Christ and the Twelve Apostles. Upon her husband's death, she took up residence in the convent at Trebnitz, living with extreme austerity and washing the feet of the destitute.`,
    quote: {
      text: 'Whatever earthly goods we receive from God\'s hand must immediately be transferred into the hands of Christ\'s poor.',
      source: 'Life of St. Hedwig'
    },
    prayer: `Grant, we pray, almighty God, that the venerable intercession of Saint Hedwig may bring us both heavenly grace and the strength to imitate her humility and boundless charity toward the poor. Through our Lord Jesus Christ, your Son, who lives and reigns with you. Amen.`,
    canonization: 'Canonized by Pope Clement IV in 1267'
  },
  {
    id: 'saint-teresa-avila',
    name: 'St. Teresa of Jesus (of Ávila)',
    title: 'Virgin and Doctor of the Church',
    feastDate: 'October 15',
    month: 10,
    day: 15,
    birthYear: '1515',
    deathYear: '1582',
    patronage: ['Spain', 'Headache sufferers', 'Loss of parents', 'Those in need of grace'],
    symbols: ['Flaming arrow pierced heart', 'Quill and book', 'Dove of the Holy Spirit', 'Carmelite habit'],
    liturgicalColor: 'white',
    imageUrl: '/images/saints/saint-teresa-avila.jpg',
    biography: `St. Teresa of Ávila was a Spanish mystic, reformer of the Carmelite Order alongside St. John of the Cross, and the first woman proclaimed a Doctor of the Church. Overcoming severe illnesses and spiritual tepidity, she attained the heights of interior union with God described in her classic masterworks: The Interior Castle, The Way of Perfection, and her spiritual Autobiography. She founded seventeen reformed Carmelite convents amidst fierce opposition, guided by sheer faith and holy audacity.`,
    quote: {
      text: 'Let nothing disturb you, let nothing frighten you. All things are passing away: God never changes. Patience obtains all things. Whoever has God lacks nothing; God alone suffices.',
      source: 'Bookmark of St. Teresa'
    },
    prayer: `O God, who through your Spirit raised up Saint Teresa of Jesus to show the Church the way to seek perfection, grant that we may always be nourished by the food of her heavenly teaching and fired with longing for true holiness. Through Christ our Lord. Amen.`,
    canonization: 'Canonized by Pope Gregory XV in 1622; Declared Doctor of the Church by Pope Paul VI in 1970'
  },
  {
    id: 'saint-john-paul-ii',
    name: 'Pope St. John Paul II',
    title: 'Supreme Pontiff',
    feastDate: 'October 22',
    month: 10,
    day: 22,
    birthYear: '1920',
    deathYear: '2005',
    patronage: ['World Youth Day', 'Families', 'Young people', 'Krakow'],
    symbols: ['Papal Ferula', 'Tiara', 'Letter M on Papal Crest', 'Rosary'],
    liturgicalColor: 'white',
    imageUrl: '/images/saints/saint-john-paul-ii.jpg',
    biography: `Born Karol Józef Wojtyła in Wadowice, Poland, John Paul II lived through Nazi occupation and Soviet communist oppression before being elevated to the Chair of Peter in 1978 as the first non-Italian Pope in 455 years. In his 26-year pontificate, he traveled to 129 nations, instituted World Youth Day, published the Catechism of the Catholic Church, survived an assassination attempt in 1981, instituted the Luminous Mysteries of the Rosary, and championed the Divine Mercy devotion given to St. Faustina. His motto was "Totus Tuus" (Totally Yours, Mary).`,
    quote: {
      text: 'Do not be afraid! Open wide the doors to Christ! To his saving power open the boundaries of states, economic and political systems, the vast fields of culture, civilization, and development.',
      source: 'Inaugural Papal Homily, 1978'
    },
    prayer: `O God, who are rich in mercy and who willed that Saint John Paul the Second, Pope, should preside over your universal Church, grant, we pray, that instructed by his teaching, we may confidently open our hearts to the saving grace of Christ. Through our Lord Jesus Christ, your Son. Amen.`,
    canonization: 'Canonized by Pope Francis in 2014'
  },
  {
    id: 'saint-jude',
    name: 'St. Jude Thaddaeus',
    title: 'Apostle & Martyr',
    feastDate: 'October 28',
    month: 10,
    day: 28,
    birthYear: '1st Century',
    deathYear: 'c. 65',
    patronage: ['Desperate situations', 'Lost causes', 'Hospitals', 'Police officers'],
    symbols: ['Club or Halberd', 'Medallion of Christ', 'Tongue of fire on head', 'Green mantle'],
    liturgicalColor: 'red',
    imageUrl: '/images/saints/saint-jude.jpg',
    biography: `St. Jude, also known as Thaddaeus, was one of the Twelve Apostles of Jesus and author of the Epistle of Jude in the New Testament. After Pentecost, he preached the Gospel throughout Judea, Samaria, Idumaea, Syria, Mesopotamia, and Libya. He suffered martyrdom for the Faith alongside St. Simon the Zealot in Persia. Because his name was similar to Judas Iscariot, few prayed to him for centuries, until St. Bridget of Sweden and St. Bernard received visions instructing believers to turn to him with great confidence in hopeless circumstances.`,
    quote: {
      text: 'Keep yourselves in the love of God, waiting for the mercy of our Lord Jesus Christ unto eternal life.',
      source: 'Epistle of St. Jude 1:21'
    },
    prayer: `Most holy Apostle, St. Jude, faithful servant and friend of Jesus, the Church honors and invokes you universally as the patron of hopeless cases. Pray for me, for I am so helpless and alone. Intercede that I may receive the consolations of Heaven in all my necessities, and praise God with you forever. Amen.`,
    canonization: 'Pre-Congregation'
  },
  {
    id: 'saint-faustina',
    name: 'St. Maria Faustina Kowalska',
    title: 'Virgin & Apostle of Divine Mercy',
    feastDate: 'October 5',
    month: 10,
    day: 5,
    birthYear: '1905',
    deathYear: '1938',
    patronage: ['World Youth Day', 'Mercy', 'Those suffering spiritual darkness'],
    symbols: ['Divine Mercy Image', 'Red and pale rays', 'Diary of Divine Mercy', 'Habit of Sisters of Our Lady of Mercy'],
    liturgicalColor: 'white',
    imageUrl: '/images/saints/saint-faustina.jpg',
    biography: `Born Helena Kowalska in Poland, St. Faustina entered the Congregation of the Sisters of Our Lady of Mercy in Warsaw. In the 1930s, Jesus appeared to her with red and pale rays flowing from His pierced Heart, instructing her to paint the image of Divine Mercy with the signature: "Jesus, I trust in You." He revealed the Chaplet of Divine Mercy, the Feast of Mercy on the Second Sunday of Easter, and the Hour of Great Mercy at 3:00 PM. Her 600-page Diary remains one of the treasures of mystical theology.`,
    quote: {
      text: 'Jesus, I trust in You. Let no soul fear to draw near to Me, even though its sins be as scarlet. My mercy is greater than your misery.',
      source: 'Diary of St. Faustina (Divine Mercy in My Soul)'
    },
    prayer: `O Jesus, who filled Saint Faustina with profound veneration for your boundless Mercy, vouchsafe through her intercession to grant us the grace to trust completely in your divine love. Through Christ our Lord. Amen.`,
    canonization: 'Canonized by Pope John Paul II on April 30, 2000'
  }
];

export function getSaintForDate(month: number, day: number): Saint {
  const match = SAINTS_DATABASE.find(s => s.month === month && s.day === day);
  if (match) return match;
  return SAINTS_DATABASE[0];
}
