import React, { useState, useMemo } from 'react';
import { 
  Globe2, 
  History, 
  Sparkles, 
  Search, 
  Volume2, 
  VolumeX, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Building2, 
  GraduationCap, 
  HeartHandshake, 
  Flame, 
  Calendar, 
  Check, 
  Copy, 
  ArrowUpDown, 
  Layers, 
  Info, 
  Compass, 
  Scroll, 
  ShieldCheck, 
  Activity, 
  Users,
  Cross
} from 'lucide-react';
import { 
  CHURCH_ERAS_INFO, 
  CHURCH_TIMELINE_EVENTS, 
  MAJOR_ECUMENICAL_COUNCILS, 
  ChurchEra, 
  TimelineEvent, 
  EcumenicalCouncil 
} from '../data/churchHistoryTimeline';
import { 
  GLOBAL_CATHOLIC_STATISTICS, 
  COUNTRIES_CATHOLIC_DATA, 
  INTERESTING_CHURCH_FACTS, 
  CountryCatholicData, 
  InterestingChurchFact 
} from '../data/catholicDemographics';
import { SacredReader } from '../utils/speech';

type MainSection = 'timeline' | 'demographics' | 'facts';

export const ChurchHistoryInfographicView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<MainSection>('timeline');
  const [recitationVoice, setRecitationVoice] = useState<'ava-grace' | 'david'>(() => SacredReader.getRecitationVoice());
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingItemId, setSpeakingItemId] = useState<string | null>(null);

  // Timeline States
  const [selectedEra, setSelectedEra] = useState<ChurchEra | 'all'>('all');
  const [timelineSearch, setTimelineSearch] = useState('');
  const [selectedEventModal, setSelectedEventModal] = useState<TimelineEvent | null>(null);
  const [showCouncilsDrawer, setShowCouncilsDrawer] = useState(false);

  // Demographics States
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [countrySearch, setCountrySearch] = useState('');
  const [sortBy, setSortBy] = useState<'percentage' | 'population' | 'name'>('percentage');
  const [selectedCountryModal, setSelectedCountryModal] = useState<CountryCatholicData | null>(null);

  // Facts States
  const [factCategory, setFactCategory] = useState<string>('All');
  const [copiedFactId, setCopiedFactId] = useState<string | null>(null);

  const handleVoiceSelect = (v: 'ava-grace' | 'david') => {
    setRecitationVoice(v);
    SacredReader.setRecitationVoice(v);
    if (isSpeaking) {
      SacredReader.stop();
      setIsSpeaking(false);
      setSpeakingItemId(null);
    }
  };

  const handleSpeakText = (id: string, text: string) => {
    if (isSpeaking && speakingItemId === id) {
      SacredReader.stop();
      setIsSpeaking(false);
      setSpeakingItemId(null);
    } else {
      setIsSpeaking(true);
      setSpeakingItemId(id);
      SacredReader.speak(text, () => {
        setIsSpeaking(false);
        setSpeakingItemId(null);
      }, recitationVoice);
    }
  };

  // Filtered Timeline Events
  const filteredEvents = useMemo(() => {
    return CHURCH_TIMELINE_EVENTS.filter(ev => {
      const matchesEra = selectedEra === 'all' || ev.era === selectedEra;
      const q = timelineSearch.toLowerCase().trim();
      const matchesSearch = !q || 
        ev.title.toLowerCase().includes(q) ||
        ev.subtitle.toLowerCase().includes(q) ||
        ev.year.toLowerCase().includes(q) ||
        ev.location.toLowerCase().includes(q) ||
        ev.keyFigures.some(f => f.toLowerCase().includes(q)) ||
        ev.description.toLowerCase().includes(q);
      return matchesEra && matchesSearch;
    });
  }, [selectedEra, timelineSearch]);

  // Filtered and Sorted Countries
  const filteredCountries = useMemo(() => {
    let list = COUNTRIES_CATHOLIC_DATA.filter(c => {
      const matchesContinent = selectedContinent === 'All' || c.continent === selectedContinent;
      const q = countrySearch.toLowerCase().trim();
      const matchesSearch = !q || 
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.primaryArchdiocese.toLowerCase().includes(q);
      return matchesContinent && matchesSearch;
    });

    return list.sort((a, b) => {
      if (sortBy === 'percentage') return b.catholicPercentage - a.catholicPercentage;
      if (sortBy === 'population') return b.catholicPopulation - a.catholicPopulation;
      return a.name.localeCompare(b.name);
    });
  }, [selectedContinent, countrySearch, sortBy]);

  // Filtered Facts
  const filteredFacts = useMemo(() => {
    return INTERESTING_CHURCH_FACTS.filter(f => {
      return factCategory === 'All' || f.category === factCategory;
    });
  }, [factCategory]);

  const handleCopyFact = (fact: InterestingChurchFact) => {
    const text = `CATHOLIC CHURCH FACT: ${fact.title}\n\n${fact.detailedText}\n\nMetric: ${fact.metric || 'N/A'}\nSource: ${fact.scriptureOrSource || 'Catholic Tradition'}`;
    navigator.clipboard.writeText(text);
    setCopiedFactId(fact.id);
    setTimeout(() => setCopiedFactId(null), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn text-stone-900">
      
      {/* 1. Header Banner and Section Navigation */}
      <div className="rounded-3xl bg-gradient-to-br from-[#1C120C] via-[#2A180E] to-[#120A05] border border-amber-500/30 p-6 sm:p-8 text-amber-100 shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xs uppercase tracking-widest text-amber-300 font-bold">
                HISTORIA ET POPULUS ECCLESIAE
              </span>
              <span className="text-stone-500">·</span>
              <span className="text-xs text-stone-400 font-serif">AD 33 – 2026</span>
            </div>

            {/* Recitation Voice Option */}
            <div className="flex items-center gap-2 bg-black/50 border border-amber-500/30 rounded-xl p-1 text-xs">
              <span className="text-stone-400 pl-1.5 hidden sm:inline font-serif">Recitation:</span>
              <button
                type="button"
                onClick={() => handleVoiceSelect('ava-grace')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1 ${
                  recitationVoice === 'ava-grace'
                    ? 'bg-amber-600 text-white font-bold shadow-xs'
                    : 'text-stone-300 hover:text-amber-200'
                }`}
                title="Ava Grace (Prioritized Devotional Voice)"
              >
                <span>Ava Grace</span>
              </button>
              <button
                type="button"
                onClick={() => handleVoiceSelect('david')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1 ${
                  recitationVoice === 'david'
                    ? 'bg-amber-600 text-white font-bold shadow-xs'
                    : 'text-stone-300 hover:text-amber-200'
                }`}
                title="Microsoft David (Traditional Solemn Male Voice)"
              >
                <span>David</span>
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <h1 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              History and Global Infographics of the Catholic Church
            </h1>
            <p className="text-sm sm:text-base text-stone-300 font-serif italic max-w-3xl leading-relaxed">
              Explore 2,000 years of unbroken apostolic history from Pentecost to the present, alongside worldwide Catholic demographics, country-by-country statistics, and extraordinary milestones.
            </p>
          </div>

          {/* 3 Main View Tabs */}
          <div className="pt-2 flex flex-wrap gap-2">
            {[
              { id: 'timeline', label: '2,000-Year Timeline', icon: History, count: '6 Epochs' },
              { id: 'demographics', label: 'Global Infographic and Countries', icon: Globe2, count: '1.39 Billion' },
              { id: 'facts', label: 'Astonishing Facts and Science', icon: Sparkles, count: '10 Discoveries' }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id as MainSection)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-cinzel font-bold transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white border-amber-400/60 shadow-lg scale-102'
                      : 'bg-black/40 hover:bg-black/60 text-stone-300 border-amber-500/20 hover:border-amber-400/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-200' : 'text-amber-400'}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-sans ${isActive ? 'bg-black/30 text-amber-200' : 'bg-white/10 text-stone-400'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 1: 2,000-YEAR CHURCH HISTORY TIMELINE */}
      {activeSection === 'timeline' && (
        <div className="space-y-6">
          
          {/* Timeline Toolbar: Era filter and Search */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-md space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-amber-700" />
                <h2 className="font-cinzel text-lg font-bold text-stone-900 tracking-wide">
                  Chronological Epochs and Milestones
                </h2>
              </div>

              {/* Ecumenical Councils Button */}
              <button
                onClick={() => setShowCouncilsDrawer(prev => !prev)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-cinzel font-bold transition-colors cursor-pointer self-start md:self-auto"
                title="View Major Ecumenical Councils of the Church"
              >
                <Scroll className="w-4 h-4 text-amber-700" />
                <span>{showCouncilsDrawer ? 'Hide Councils Guide' : 'Ecumenical Councils (Nicaea to Vatican II)'}</span>
              </button>
            </div>

            {/* Era Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <button
                onClick={() => setSelectedEra('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-cinzel whitespace-nowrap transition-all cursor-pointer ${
                  selectedEra === 'all'
                    ? 'bg-amber-900 text-white font-bold shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                All (2,000 Years)
              </button>
              {(Object.keys(CHURCH_ERAS_INFO) as ChurchEra[]).map((eraKey) => {
                const era = CHURCH_ERAS_INFO[eraKey];
                const isSelected = selectedEra === eraKey;
                return (
                  <button
                    key={eraKey}
                    onClick={() => setSelectedEra(eraKey)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-serif whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-900 text-white font-bold shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    <span>{era.name}</span>
                    <span className="text-[10px] opacity-75 ml-1.5 font-sans">({era.period})</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={timelineSearch}
                onChange={(e) => setTimelineSearch(e.target.value)}
                placeholder="Search history by event, saint, pope, council, or doctrine (e.g. Pentecost, Aquinas, Trent, Guadalupe, Nicaea)..."
                className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm font-serif focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
          </div>

          {/* Optional Councils Reference Drawer */}
          {showCouncilsDrawer && (
            <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-amber-300 shadow-md space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-amber-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-800" />
                  <h3 className="font-cinzel text-base font-bold text-amber-950">
                    The 21 Ecumenical Councils of the Universal Catholic Church
                  </h3>
                </div>
                <span className="text-xs text-stone-500 font-serif">Apostolic Magisterium</span>
              </div>
              <p className="text-xs text-stone-600 font-serif leading-relaxed">
                Ecumenical Councils represent the solemn gathering of bishops under the authority of the Pope to definitively articulate dogma, protect against heresy, and govern the universal Church.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                {MAJOR_ECUMENICAL_COUNCILS.map((c) => (
                  <div key={c.number} className="p-3.5 bg-white rounded-xl border border-stone-200/80 shadow-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel font-bold text-amber-900 text-xs">
                        #{c.number}. {c.name}
                      </span>
                      <span className="text-[11px] font-sans font-semibold text-stone-500">{c.year}</span>
                    </div>
                    <div className="text-[11px] text-amber-800 font-serif">Pope: {c.pope}</div>
                    <p className="text-xs text-stone-700 font-serif line-clamp-3">
                      <strong>Dogma:</strong> {c.keyDogma}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Cards Container */}
          <div className="space-y-4 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-amber-300/60 before:z-0">
            {filteredEvents.map((event, idx) => {
              const isEventSpeaking = isSpeaking && speakingItemId === event.id;
              const eraMeta = CHURCH_ERAS_INFO[event.era];

              return (
                <div key={event.id} className="relative z-10 pl-10 sm:pl-16">
                  {/* Timeline Node Icon */}
                  <div className="absolute left-2 sm:left-6 -translate-x-1/2 top-5 w-6 h-6 rounded-full bg-amber-900 border-2 border-amber-200 shadow-md flex items-center justify-center text-white text-[10px] font-bold">
                    {idx + 1}
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-2xl border border-stone-200/90 shadow-md hover:shadow-lg transition-all p-5 sm:p-6 space-y-3">
                    
                    {/* Header: Year, Era, Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-cinzel text-lg sm:text-xl font-extrabold text-amber-950">
                          {event.year}
                        </span>
                        <span className="text-stone-300">·</span>
                        <span className="text-xs font-serif text-amber-800 font-medium">
                          {eraMeta.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleSpeakText(event.id, `${event.title}. Year: ${event.year}. ${event.description} Theological Significance: ${event.theologicalSignificance}`)}
                          className={`p-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            isEventSpeaking
                              ? 'bg-amber-600 text-white animate-pulse'
                              : 'bg-stone-100 hover:bg-amber-100 text-amber-900'
                          }`}
                          title={`Listen to this event in ${recitationVoice === 'ava-grace' ? 'Ava Grace' : 'Microsoft David'}`}
                        >
                          {isEventSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Title and Subtitle */}
                    <div>
                      <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 font-serif italic">
                        {event.subtitle} • {event.location}
                      </p>
                    </div>

                    {/* Description Prose */}
                    <p className="text-sm sm:text-base text-stone-700 font-serif leading-relaxed">
                      {event.description}
                    </p>

                    {/* Theological Significance Box */}
                    <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-stone-800 font-serif space-y-1">
                      <span className="font-bold text-amber-950 font-cinzel text-[11px] block uppercase tracking-wider">
                        Theological and Historical Impact:
                      </span>
                      <p className="leading-relaxed">{event.theologicalSignificance}</p>
                    </div>

                    {/* Footer Meta: Key Figures and Document Reference */}
                    <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 font-serif">
                      <div>
                        <strong className="text-stone-700">Key Figures:</strong> {event.keyFigures.join(', ')}
                      </div>
                      {event.scriptureOrDocumentRef && (
                        <span className="italic text-amber-900 font-medium">
                          Ref: {event.scriptureOrDocumentRef}
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* SECTION 2: GLOBAL CATHOLIC INFOGRAPHIC and COUNTRIES EXPLORER */}
      {activeSection === 'demographics' && (
        <div className="space-y-6">
          
          {/* Key Metric Headline KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-md text-center space-y-1">
              <span className="font-cinzel text-xs text-stone-500 uppercase tracking-wider font-semibold block">
                Total Baptized Catholics
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-900 font-cinzel tabular-nums">
                {GLOBAL_CATHOLIC_STATISTICS.formattedTotal}
              </div>
              <span className="text-[11px] text-stone-500 font-serif block">
                {GLOBAL_CATHOLIC_STATISTICS.percentageOfWorld}% of Earth's population
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-md text-center space-y-1">
              <span className="font-cinzel text-xs text-stone-500 uppercase tracking-wider font-semibold block">
                Daily Holy Masses
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-900 font-cinzel tabular-nums">
                415,000+
              </div>
              <span className="text-[11px] text-stone-500 font-serif block">
                Celebrated in 195+ nations daily
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-md text-center space-y-1">
              <span className="font-cinzel text-xs text-stone-500 uppercase tracking-wider font-semibold block">
                Catholic Schools
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-900 font-cinzel tabular-nums">
                141,250
              </div>
              <span className="text-[11px] text-stone-500 font-serif block">
                35.4 Million students educated
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-md text-center space-y-1">
              <span className="font-cinzel text-xs text-stone-500 uppercase tracking-wider font-semibold block">
                Hospitals and Clinics
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-900 font-cinzel tabular-nums">
                19,600+
              </div>
              <span className="text-[11px] text-stone-500 font-serif block">
                Largest healthcare provider
              </span>
            </div>

          </div>

          {/* Continental Distribution Chart Card */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-md space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div>
                <h3 className="font-cinzel text-lg font-bold text-stone-900">
                  Global Catholic Distribution by Continent
                </h3>
                <p className="text-xs text-stone-500 font-serif">
                  Regional breakdown of the 1.39 billion faithful worldwide
                </p>
              </div>
              <span className="text-xs text-amber-900 font-serif italic">
                Source: Vatican Central Office of Church Statistics
              </span>
            </div>

            {/* Visual Multi-Segment Bar */}
            <div className="h-6 w-full rounded-xl overflow-hidden flex bg-stone-100 shadow-inner">
              {GLOBAL_CATHOLIC_STATISTICS.continentalDistribution.map(item => (
                <div
                  key={item.continent}
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  className="h-full relative group transition-all"
                  title={`${item.continent}: ${item.percentage}% (${(item.catholics / 1000000).toFixed(0)}M Catholics)`}
                />
              ))}
            </div>

            {/* Continental Breakdown Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
              {GLOBAL_CATHOLIC_STATISTICS.continentalDistribution.map(c => (
                <div key={c.continent} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="font-cinzel text-xs font-bold text-stone-800">{c.continent}</span>
                  </div>
                  <div className="text-xl font-extrabold text-stone-900 font-cinzel tabular-nums">
                    {c.percentage}%
                  </div>
                  <div className="text-[11px] text-stone-500 font-serif">
                    {(c.catholics / 1000000).toFixed(0)} Million
                  </div>
                  <span className="text-[10px] text-emerald-700 font-semibold block">
                    {c.growthRate}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Worldwide Clergy and Vocations Breakdown */}
          <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-amber-200 shadow-sm space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-amber-950 uppercase tracking-wider">
              Catholic Clergy and Consecrated Vocations Worldwide
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-xs text-stone-500 font-serif block">Bishops</span>
                <span className="text-lg font-bold font-cinzel text-amber-900 tabular-nums">5,353</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-xs text-stone-500 font-serif block">Priests</span>
                <span className="text-lg font-bold font-cinzel text-amber-900 tabular-nums">407,872</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-xs text-stone-500 font-serif block">Deacons</span>
                <span className="text-lg font-bold font-cinzel text-amber-900 tabular-nums">50,150</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-xs text-stone-500 font-serif block">Religious Sisters</span>
                <span className="text-lg font-bold font-cinzel text-amber-900 tabular-nums">599,228</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-xs text-stone-500 font-serif block">Brothers</span>
                <span className="text-lg font-bold font-cinzel text-amber-900 tabular-nums">49,176</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <span className="text-xs text-stone-500 font-serif block">Seminarians</span>
                <span className="text-lg font-bold font-cinzel text-amber-900 tabular-nums">108,481</span>
              </div>
            </div>
          </div>

          {/* Interactive Country-by-Country Catholic Data Table */}
          <div className="bg-white rounded-2xl border border-stone-200/90 shadow-md p-6 sm:p-7 space-y-5">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
              <div className="space-y-1">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900 flex flex-wrap items-center gap-2.5">
                  <span>Catholic Population and Percentage by Country</span>
                  <span className="text-xs sm:text-sm bg-amber-100 text-amber-900 px-3 py-0.5 rounded-full font-sans font-bold">
                    {filteredCountries.length} Countries
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-stone-600 font-serif">
                  Comprehensive demographics, percentages, historical dates of arrival, and notable Catholic heritage facts
                </p>
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-1.5 bg-stone-100 p-1.5 rounded-xl text-sm shrink-0">
                <span className="text-stone-600 font-serif px-2 font-medium">Sort:</span>
                {[
                  { id: 'percentage', label: '% Catholic' },
                  { id: 'population', label: 'Total Catholics' },
                  { id: 'name', label: 'Country A-Z' }
                ].map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSortBy(s.id as 'percentage' | 'population' | 'name')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                      sortBy === s.id
                        ? 'bg-amber-900 text-white shadow-xs'
                        : 'text-stone-700 hover:text-stone-900'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Continent Filters and Country Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {['All', 'Americas', 'Europe', 'Africa', 'Asia', 'Oceania'].map(cont => (
                  <button
                    key={cont}
                    onClick={() => setSelectedContinent(cont)}
                    className={`px-3.5 py-2 rounded-xl text-sm sm:text-base font-serif whitespace-nowrap transition-all cursor-pointer ${
                      selectedContinent === cont
                        ? 'bg-amber-900 text-white font-bold shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    {cont}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  placeholder="Filter country, code, or archdiocese..."
                  className="w-full pl-10 pr-3.5 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm sm:text-base font-serif focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>
            </div>

            {/* Country Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {filteredCountries.map((country) => (
                <div
                  key={country.id}
                  className="p-5 sm:p-6 rounded-xl border border-stone-200 bg-stone-50/60 hover:bg-amber-50/30 hover:border-amber-300 transition-all space-y-3.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" role="img" aria-label={country.name}>
                        {country.flag}
                      </span>
                      <div>
                        <h4 className="font-serif-heading font-bold text-stone-900 text-lg sm:text-xl leading-snug">
                          {country.name}
                        </h4>
                        <span className="text-xs sm:text-sm text-stone-600 font-serif">
                          {country.continent} • Est. {country.yearEstablished}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-cinzel font-extrabold text-amber-950 text-xl sm:text-2xl tabular-nums">
                        {country.catholicPercentage}%
                      </div>
                      <span className="text-xs sm:text-sm text-stone-600 font-sans font-medium block">
                        {(country.catholicPopulation / 1000000 >= 1 
                          ? `${(country.catholicPopulation / 1000000).toFixed(1)}M` 
                          : `${(country.catholicPopulation / 1000).toFixed(0)}K`)} Catholics
                      </span>
                    </div>
                  </div>

                  {/* Percentage Progress Bar */}
                  <div className="w-full h-2.5 rounded-full bg-stone-200 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-700"
                      style={{ width: `${Math.min(100, country.catholicPercentage)}%` }}
                    />
                  </div>

                  {/* Fact / Archdiocese note */}
                  <div className="text-sm sm:text-base text-stone-700 font-serif space-y-1.5 pt-0.5">
                    <div className="text-sm sm:text-base text-amber-950 font-semibold">
                      Archdiocese: {country.primaryArchdiocese}
                    </div>
                    <p className="text-sm sm:text-base text-stone-800 italic leading-relaxed">
                      "{country.notableFact}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      )}

      {/* SECTION 3: ASTONISHING FACTS and MILESTONES */}
      {activeSection === 'facts' && (
        <div className="space-y-6">
          
          {/* Category Filter */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-md space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900">
                  Curated Catholic Facts, Discoveries and Scientific Achievements
                </h3>
              </div>
              <span className="text-sm text-stone-500 font-serif">A Universal Treasury</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {[
                'All',
                'Science and Discovery',
                'Global Humanitarian',
                'Vatican and Papacy',
                'Rites and Liturgy',
                'Art and Culture',
                'Miracles and Mysteries'
              ].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFactCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-sm sm:text-base font-serif whitespace-nowrap transition-all cursor-pointer ${
                    factCategory === cat
                      ? 'bg-amber-900 text-white font-bold shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Facts Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredFacts.map((fact) => {
              const isFactSpeaking = isSpeaking && speakingItemId === fact.id;
              const isCopied = copiedFactId === fact.id;

              return (
                <div
                  key={fact.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    
                    {/* Header: Category and Metric Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <span className="font-cinzel text-sm sm:text-base font-bold text-amber-900 uppercase tracking-wider">
                        {fact.category}
                      </span>
                      {fact.metric && (
                        <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-950 border border-amber-200 text-xs sm:text-sm font-cinzel font-bold">
                          {fact.metric}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="font-serif-heading text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                      {fact.title}
                    </h4>

                    {/* Detailed Prose */}
                    <p className="text-base sm:text-lg text-stone-800 font-serif leading-relaxed">
                      {fact.detailedText}
                    </p>

                    {/* Key Figure and Source */}
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-sm sm:text-base text-stone-700 font-serif space-y-1">
                      {fact.keyFigure && (
                        <div>
                          <strong className="text-stone-900">Key Figure:</strong> {fact.keyFigure}
                        </div>
                      )}
                      {fact.scriptureOrSource && (
                        <div className="italic text-stone-600">
                          Source: {fact.scriptureOrSource}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions: Listen in Ava Grace or Copy */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleSpeakText(fact.id, `${fact.title}. ${fact.detailedText}`)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                        isFactSpeaking
                          ? 'bg-amber-600 text-white animate-pulse'
                          : 'bg-stone-100 hover:bg-amber-50 text-amber-900 border border-stone-200'
                      }`}
                      title={`Listen in ${recitationVoice === 'ava-grace' ? 'Ava Grace' : 'Microsoft David'}`}
                    >
                      {isFactSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      <span>{isFactSpeaking ? 'Stop Audio' : 'Listen Aloud'}</span>
                    </button>

                    <button
                      onClick={() => handleCopyFact(fact)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-serif transition-colors cursor-pointer"
                      title="Copy fact to clipboard"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{isCopied ? 'Copied' : 'Share'}</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};
