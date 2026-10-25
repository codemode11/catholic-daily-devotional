import React, { useState, useMemo } from 'react';
import { 
  History, 
  Crown, 
  Users, 
  ScrollText, 
  CheckCircle2, 
  Search, 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Share2, 
  Check, 
  ChevronRight, 
  Award, 
  Landmark,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { ECUMENICAL_COUNCILS_DATABASE, EcumenicalCouncil } from '../data/ecumenicalCouncils';
import { SacredReader } from '../utils/speech';

interface ChurchCouncilsTimelineViewProps {
  showHeroBanner?: boolean;
}

export const ChurchCouncilsTimelineView: React.FC<ChurchCouncilsTimelineViewProps> = ({
  showHeroBanner = true
}) => {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCouncil, setSelectedCouncil] = useState<EcumenicalCouncil | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isNarrating, setIsNarrating] = useState<boolean>(false);

  const eras = [
    { id: 'all', label: 'All 21 Councils', years: '325–1965 AD', count: 21 },
    { id: 'early-church', label: 'Early Church', years: '325–787 AD', count: 7 },
    { id: 'medieval', label: 'High Medieval', years: '869–1312 AD', count: 8 },
    { id: 'reformation-renaissance', label: 'Reformation & Renaissance', years: '1414–1563 AD', count: 4 },
    { id: 'modern', label: 'Modern Era', years: '1869–1965 AD', count: 2 },
  ];

  const themes = [
    { id: 'all', label: 'All Themes' },
    { id: 'christology', label: 'Christology (Divinity & Humanity of Christ)' },
    { id: 'papacy', label: 'Papacy & Petrine Primacy' },
    { id: 'sacraments', label: 'Sacraments & The Holy Mass' },
    { id: 'church-reform', label: 'Moral & Clerical Reform' },
    { id: 'scripture-tradition', label: 'Scripture & Apostolic Tradition' },
    { id: 'sacred-art', label: 'Sacred Art & Holy Icons' },
  ];

  const filteredCouncils = useMemo(() => {
    return ECUMENICAL_COUNCILS_DATABASE.filter(c => {
      if (selectedEra !== 'all' && c.era !== selectedEra) {
        return false;
      }
      if (selectedTheme !== 'all' && !c.theologicalCategory.includes(selectedTheme as any)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inName = c.name.toLowerCase().includes(q) || c.shortName.toLowerCase().includes(q);
        const inPope = c.pontiff.name.toLowerCase().includes(q);
        const inYear = c.year.toLowerCase().includes(q);
        const inSummary = c.summary.toLowerCase().includes(q);
        const inPlayers = [
          ...c.majorPlayers.saintsAndDoctors,
          ...c.majorPlayers.emperorsAndRulers,
          ...c.majorPlayers.theologiansAndLeaders,
          ...c.majorPlayers.adversariesOrHeresies
        ].some(p => p.toLowerCase().includes(q));
        const inAchievements = c.achievements.some(a => a.toLowerCase().includes(q));

        return inName || inPope || inYear || inSummary || inPlayers || inAchievements;
      }
      return true;
    });
  }, [selectedEra, selectedTheme, searchQuery]);

  const handleShareCouncil = (council: EcumenicalCouncil, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const text = `${council.name} (${council.year})\nPONTIFF: ${council.pontiff.name} (${council.pontiff.dates})\n\nKEY ACHIEVEMENTS:\n${council.achievements.map(a => `• ${a}`).join('\n')}\n\nLASTING IMPACT:\n${council.lastingImpact}\n\nExplore all 21 Ecumenical Councils on Soul Sanctum.`;
    navigator.clipboard.writeText(text);
    setCopiedId(council.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleToggleNarration = (council: EcumenicalCouncil, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isNarrating) {
      SacredReader.stop();
      setIsNarrating(false);
    } else {
      const speechText = `${council.name}, held in ${council.year} at ${council.location}. Reigned by ${council.pontiff.name}. ${council.summary}. Key achievements: ${council.achievements.join('. ')}. Lasting impact: ${council.lastingImpact}`;
      SacredReader.speak(speechText, () => setIsNarrating(false));
      setIsNarrating(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-24 text-stone-900">
      
      {/* If embedded inside Church History, show compact header; otherwise show hero banner with balanced font size */}
      {showHeroBanner ? (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 border border-amber-500/40 p-6 sm:p-7 md:p-8 shadow-xl text-stone-100">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.18)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-cinzel font-bold tracking-wider">
              <History className="w-3.5 h-3.5 text-amber-400" />
              <span>Sacred Magisterium of the Catholic Church</span>
            </div>

            <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide leading-tight">
              Timeline of the 21 Ecumenical Councils
            </h2>

            <p className="text-sm sm:text-base text-stone-200 font-serif leading-relaxed">
              From the First Council of Nicaea (325 AD) to the Second Vatican Council (1962–1965), journey through seventeen centuries of Holy Spirit-guided discernment, the reigning Popes, champion saints, dogmas defined, and heresies defeated.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-amber-200 font-serif">
              <span className="font-medium">21 Infallible Assemblies</span>
              <span className="text-amber-500/60">•</span>
              <span className="font-medium">325 AD to 1965 AD</span>
              <span className="text-amber-500/60">•</span>
              <span className="font-medium">Unbroken Petrine Guidance</span>
              <span className="text-amber-500/60">•</span>
              <span className="font-medium">Full Dogmas & Decrees</span>
            </div>
          </div>

          {/* Milestone Epoch Cards: Clear Gold on Charcoal */}
          <div className="relative z-10 mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-amber-500/30 backdrop-blur-xs">
              <span className="font-cinzel text-lg sm:text-xl font-bold text-amber-400 block">325 AD</span>
              <span className="text-xs text-stone-300 font-serif mt-0.5 block">Nicaea I (Homoousios)</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-amber-500/30 backdrop-blur-xs">
              <span className="font-cinzel text-lg sm:text-xl font-bold text-amber-400 block">1215 AD</span>
              <span className="text-xs text-stone-300 font-serif mt-0.5 block">Lateran IV (Transubstantiation)</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-amber-500/30 backdrop-blur-xs">
              <span className="font-cinzel text-lg sm:text-xl font-bold text-amber-400 block">1545 AD</span>
              <span className="text-xs text-stone-300 font-serif mt-0.5 block">Trent (Counter-Reformation)</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-amber-500/30 backdrop-blur-xs">
              <span className="font-cinzel text-lg sm:text-xl font-bold text-amber-400 block">1962 AD</span>
              <span className="text-xs text-stone-300 font-serif mt-0.5 block">Vatican II (Universal Call)</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-600 text-white shrink-0 shadow-xs">
              <ScrollText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 leading-snug">
                Timeline of the 21 Ecumenical Councils
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-serif">
                325 AD – 1965 AD • Popes, Saints, Dogmas, and Sacred Decrees
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-cinzel font-semibold shrink-0">
            <span>21 Assemblies</span>
            <span>•</span>
            <span>Unbroken Tradition</span>
          </div>
        </div>
      )}

      {/* Filter and Search Bar: Large, Clear, and Readable */}
      <div className="space-y-5 bg-white p-6 sm:p-7 rounded-3xl border border-stone-200 shadow-sm">
        
        {/* Search input with large font */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search councils, popes, saints, dogmas (e.g. Nicaea, Trent, Leo the Great, Transubstantiation, Arianism)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-sm sm:text-base pl-11 pr-10 py-3.5 rounded-2xl bg-stone-100 border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white font-serif transition-all"
          />
          <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-4" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-stone-400 hover:text-stone-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Era selector buttons */}
        <div className="space-y-2">
          <div className="text-xs sm:text-sm font-cinzel font-bold text-stone-600 uppercase tracking-wider">
            Filter by Historical Era
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {eras.map(era => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-cinzel font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedEra === era.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <span>{era.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${selectedEra === era.id ? 'bg-amber-700 text-white' : 'bg-stone-200 text-stone-600'}`}>
                  {era.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Theme filter chips */}
        <div className="space-y-2 pt-2 border-t border-stone-100">
          <div className="text-xs sm:text-sm font-cinzel font-bold text-stone-600 uppercase tracking-wider">
            Filter by Doctrinal Theme
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {themes.map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedTheme(t.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-serif transition-all cursor-pointer ${
                  selectedTheme === t.id
                    ? 'bg-stone-900 text-amber-300 font-bold shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Counter & reset */}
        {(selectedEra !== 'all' || selectedTheme !== 'all' || searchQuery) && (
          <div className="flex items-center justify-between text-sm text-stone-500 pt-2 border-t border-stone-100">
            <span>
              Showing {filteredCouncils.length} of 21 Ecumenical Councils
            </span>
            <button
              onClick={() => {
                setSelectedEra('all');
                setSelectedTheme('all');
                setSearchQuery('');
              }}
              className="text-amber-700 hover:underline cursor-pointer font-serif font-medium"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Main Timeline Stream */}
      <div className="relative border-l-3 border-amber-500/40 ml-4 sm:ml-8 pl-5 sm:pl-9 space-y-9">
        {filteredCouncils.map((council) => {
          return (
            <div 
              key={council.id} 
              className="relative group transition-all"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-8 h-8 rounded-full bg-amber-600 border-4 border-white shadow-md flex items-center justify-center text-xs font-extrabold text-white font-cinzel">
                {council.number}
              </div>

              {/* Council Card: Large, Clear, Parchment & Charcoal styling */}
              <div 
                onClick={() => setSelectedCouncil(council)}
                className="bg-white rounded-3xl p-6 sm:p-7 md:p-8 border border-stone-200 shadow-sm hover:shadow-lg hover:border-amber-500/80 transition-all cursor-pointer space-y-5"
              >
                {/* Header: Title + Era Badge + Year */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-cinzel font-bold tracking-wider">
                        Council #{council.number} • {council.eraLabel.split('(')[0].trim()}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="text-sm sm:text-base font-serif font-bold text-stone-900">
                        {council.year}
                      </span>
                      <span className="text-stone-300">•</span>
                      <span className="text-xs sm:text-sm text-stone-500 font-serif">
                        {council.location} ({council.modernCountry})
                      </span>
                    </div>

                    <h3 className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors leading-tight">
                      {council.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => handleShareCouncil(council, e)}
                      className="p-2.5 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                      title="Copy summary and achievements"
                    >
                      {copiedId === council.id ? (
                        <Check className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Share2 className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={(e) => handleToggleNarration(council, e)}
                      className="p-2.5 rounded-xl text-stone-500 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                      title="Listen with voice narration"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Pope Box: Dignified Charcoal & Gold (NO maroon) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F7F2] border border-amber-200/80 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-900 text-amber-300 shrink-0 mt-0.5 shadow-xs">
                    <Crown className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <div className="text-xs font-cinzel font-bold text-amber-800 uppercase tracking-wider">
                      Reigning Roman Pontiff
                    </div>
                    <div className="font-serif text-base sm:text-lg md:text-xl font-bold text-stone-900">
                      {council.pontiff.name} <span className="font-normal text-stone-600 text-sm sm:text-base">({council.pontiff.dates})</span>
                    </div>
                    {council.pontiff.note && (
                      <p className="text-xs sm:text-sm text-stone-600 font-serif italic pt-0.5 leading-relaxed">
                        {council.pontiff.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* Summary with Large Readable Font */}
                <p className="text-sm sm:text-base md:text-lg text-stone-800 font-serif leading-relaxed">
                  {council.summary}
                </p>

                {/* Major Players Chips: Clean Parchment & Charcoal styling (NO maroon or rose) */}
                <div className="space-y-2.5 pt-3 border-t border-stone-100">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-cinzel font-bold text-stone-700">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span>Major Figures, Saints & Rulers</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {council.majorPlayers.saintsAndDoctors.map(s => (
                      <span key={s} className="px-3 py-1 rounded-lg bg-amber-50 text-stone-900 border border-amber-300/70 text-xs sm:text-sm font-serif font-semibold">
                        {s}
                      </span>
                    ))}
                    {council.majorPlayers.emperorsAndRulers.map(r => (
                      <span key={r} className="px-3 py-1 rounded-lg bg-stone-100 text-stone-700 border border-stone-300 text-xs sm:text-sm font-serif">
                        {r}
                      </span>
                    ))}
                    {council.majorPlayers.theologiansAndLeaders.map(t => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-stone-50 text-stone-800 border border-stone-200 text-xs sm:text-sm font-serif">
                        {t}
                      </span>
                    ))}
                    {council.majorPlayers.adversariesOrHeresies.map(h => (
                      <span key={h} className="px-3 py-1 rounded-lg bg-stone-200 text-stone-800 border border-stone-300 text-xs sm:text-sm font-serif font-medium">
                        Refuted: {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements Bullet Highlights */}
                <div className="space-y-2 pt-3 border-t border-stone-100">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-cinzel font-bold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Key Dogmas & Achievements</span>
                  </div>
                  <ul className="space-y-1.5">
                    {council.achievements.slice(0, 3).map((ach, aIdx) => (
                      <li key={aIdx} className="text-sm sm:text-base text-stone-800 font-serif flex items-start gap-2.5 leading-relaxed">
                        <span className="text-emerald-700 font-bold mt-0.5 shrink-0 text-base">✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                  {council.achievements.length > 3 && (
                    <div className="text-xs sm:text-sm text-amber-700 font-cinzel font-bold pt-1">
                      + {council.achievements.length - 3} more historic decrees (click to view full council record)
                    </div>
                  )}
                </div>

                {/* Footer click prompt */}
                <div className="pt-2 flex items-center justify-between text-xs sm:text-sm text-stone-500">
                  <span className="font-serif italic">
                    Convoked by: {council.convenedBy}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-cinzel font-bold text-amber-700 group-hover:underline">
                    <span>Read Full Decrees & Quotes</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Council Full Modal with Large Font and Clean Palette */}
      {selectedCouncil && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-7 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedCouncil(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#FCFAF6] text-stone-900 rounded-3xl shadow-2xl border border-amber-500/50 overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Dark Charcoal with Gold Accents */}
            <div className="p-6 sm:p-7 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-stone-100 flex items-start justify-between gap-4 border-b border-amber-500/40 shrink-0">
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-cinzel font-bold">
                    Council #{selectedCouncil.number} • {selectedCouncil.year}
                  </span>
                  <span className="text-stone-400 text-sm">•</span>
                  <span className="text-sm text-stone-300 font-serif">
                    {selectedCouncil.location} ({selectedCouncil.modernCountry})
                  </span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  {selectedCouncil.name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCouncil(null)}
                className="p-2.5 rounded-2xl text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Action Bar */}
            <div className="px-6 py-3 bg-[#F4F1EA] border-b border-stone-200 flex items-center justify-between gap-3 shrink-0 text-sm">
              <div className="flex items-center gap-2 text-stone-700 font-serif">
                <Landmark className="w-4 h-4 text-amber-700" />
                <span>Attendance: {selectedCouncil.attendeesCount}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleNarration(selectedCouncil)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-cinzel font-bold transition-all cursor-pointer ${
                    isNarrating
                      ? 'bg-amber-600 text-white'
                      : 'bg-white border border-stone-300 text-stone-800 hover:bg-amber-100'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span>{isNarrating ? 'Stop Voice' : 'Listen with Voice'}</span>
                </button>

                <button
                  onClick={() => handleShareCouncil(selectedCouncil)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-stone-300 text-stone-800 hover:bg-amber-100 text-xs sm:text-sm font-cinzel font-bold cursor-pointer"
                >
                  {copiedId === selectedCouncil.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  <span>{copiedId === selectedCouncil.id ? 'Copied' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Scrollable Modal Content with Large Readable Typography */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-7 text-stone-900">
              
              {/* Pontiff & Convener Card */}
              <div className="p-5 rounded-2xl bg-[#F5F2EB] border border-amber-300/80 space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-cinzel font-bold text-amber-800 uppercase tracking-wider">
                  <Crown className="w-4 h-4 text-amber-600" />
                  <span>Petrine Leadership & Convocation</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                  <div>
                    <span className="font-semibold text-stone-600 block text-xs uppercase tracking-wider">Reigning Pope:</span>
                    <span className="font-bold text-stone-950 text-base sm:text-lg">{selectedCouncil.pontiff.name}</span>
                    <span className="text-stone-600 block text-sm">({selectedCouncil.pontiff.dates})</span>
                    {selectedCouncil.pontiff.note && (
                      <span className="text-stone-700 italic block mt-1 text-sm leading-relaxed">{selectedCouncil.pontiff.note}</span>
                    )}
                  </div>
                  <div>
                    <span className="font-semibold text-stone-600 block text-xs uppercase tracking-wider">Convoked By:</span>
                    <span className="text-stone-950 font-medium text-base sm:text-lg">{selectedCouncil.convenedBy}</span>
                  </div>
                </div>
              </div>

              {/* Historical Context */}
              <div className="space-y-2.5">
                <h4 className="font-cinzel text-xs sm:text-sm font-bold text-stone-700 uppercase tracking-wider flex items-center gap-2">
                  <ScrollText className="w-4 h-4 text-amber-600" />
                  <span>Historical Crisis & Context</span>
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-stone-800 font-serif leading-relaxed bg-white p-5 rounded-2xl border border-stone-200">
                  {selectedCouncil.historicalContext}
                </p>
              </div>

              {/* Major Figures Breakdown (NO maroon or rose highlights) */}
              <div className="space-y-3">
                <h4 className="font-cinzel text-xs sm:text-sm font-bold text-stone-700 uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>Major Figures & Protagonists</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm">
                  <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                    <span className="font-cinzel font-bold text-stone-900 text-xs uppercase tracking-wider block">Saints & Doctors:</span>
                    <ul className="space-y-1.5">
                      {selectedCouncil.majorPlayers.saintsAndDoctors.map(s => (
                        <li key={s} className="text-stone-800 font-serif flex items-start gap-2 text-sm sm:text-base">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                    <span className="font-cinzel font-bold text-stone-900 text-xs uppercase tracking-wider block">Theologians & Leaders:</span>
                    <ul className="space-y-1.5">
                      {selectedCouncil.majorPlayers.theologiansAndLeaders.map(t => (
                        <li key={t} className="text-stone-800 font-serif flex items-start gap-2 text-sm sm:text-base">
                          <span className="text-stone-400 font-bold">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedCouncil.majorPlayers.emperorsAndRulers.length > 0 && (
                    <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2">
                      <span className="font-cinzel font-bold text-stone-900 text-xs uppercase tracking-wider block">Emperors & Rulers:</span>
                      <ul className="space-y-1.5">
                        {selectedCouncil.majorPlayers.emperorsAndRulers.map(r => (
                          <li key={r} className="text-stone-800 font-serif flex items-start gap-2 text-sm sm:text-base">
                            <span className="text-stone-400 font-bold">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedCouncil.majorPlayers.adversariesOrHeresies.length > 0 && (
                    <div className="p-4 rounded-2xl bg-stone-100 border border-stone-300 space-y-2">
                      <span className="font-cinzel font-bold text-stone-800 text-xs uppercase tracking-wider block">Heresies & Opponents Refuted:</span>
                      <ul className="space-y-1.5">
                        {selectedCouncil.majorPlayers.adversariesOrHeresies.map(h => (
                          <li key={h} className="text-stone-800 font-serif flex items-start gap-2 text-sm sm:text-base">
                            <span className="text-stone-500 font-bold">✕</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Complete Achievements */}
              <div className="space-y-3">
                <h4 className="font-cinzel text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Key Dogmatic & Canonical Achievements</span>
                </h4>
                <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3">
                  {selectedCouncil.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-800 font-serif leading-relaxed">
                      <span className="p-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Famous Quotes / Creed */}
              {selectedCouncil.famousQuotesOrCreed.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="font-cinzel text-xs sm:text-sm font-bold text-stone-700 uppercase tracking-wider flex items-center gap-2">
                    <ScrollText className="w-4 h-4 text-amber-600" />
                    <span>Historic Conciliar Text</span>
                  </h4>
                  <div className="p-5 rounded-2xl bg-[#F7F4EC] border-l-4 border-amber-600 text-stone-900 font-serif italic text-sm sm:text-base md:text-lg leading-relaxed shadow-2xs">
                    {selectedCouncil.famousQuotesOrCreed[0]}
                  </div>
                </div>
              )}

              {/* Lasting Impact: Clean Charcoal & Gold */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-2">
                <div className="font-cinzel text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Lasting Impact on the Church Today</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-stone-200 font-serif leading-relaxed">
                  {selectedCouncil.lastingImpact}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-stone-100 border-t border-stone-200 text-right shrink-0">
              <button
                onClick={() => setSelectedCouncil(null)}
                className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-cinzel font-bold cursor-pointer transition-colors"
              >
                Close Council Record
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
