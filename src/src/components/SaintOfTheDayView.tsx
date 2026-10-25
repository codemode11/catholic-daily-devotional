import React, { useState } from 'react';
import { 
  Search, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check 
} from 'lucide-react';
import { Saint } from '../types';
import { SAINTS_DATABASE, getSaintForDate } from '../data/saints';
import { LITURGICAL_COLORS_INFO } from '../data/liturgicalCalendar';
import { SacredReader } from '../utils/speech';
import { SaintWithHaloIcon } from './SanctumIcons';

interface SaintOfTheDayViewProps {
  currentMonth?: number;
  currentDay?: number;
}

export const SaintOfTheDayView: React.FC<SaintOfTheDayViewProps> = ({
  currentMonth = 10,
  currentDay = 23
}) => {
  const [selectedSaint, setSelectedSaint] = useState<Saint>(() => getSaintForDate(currentMonth, currentDay));
  const [searchQuery, setSearchQuery] = useState('');
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  React.useEffect(() => {
    setSelectedSaint(getSaintForDate(currentMonth, currentDay));
    setImgError(false);
  }, [currentMonth, currentDay]);

  const colorMeta = LITURGICAL_COLORS_INFO[selectedSaint.liturgicalColor] || LITURGICAL_COLORS_INFO.white;

  const handleToggleAudio = () => {
    if (isReadingAloud) {
      SacredReader.stop();
      setIsReadingAloud(false);
    } else {
      const speech = `${selectedSaint.name}, ${selectedSaint.title}. Feast day: ${selectedSaint.feastDate}.
Patron of: ${selectedSaint.patronage.join(', ')}.
Quote: "${selectedSaint.quote.text}".
Biography: ${selectedSaint.biography}
Collect Prayer: ${selectedSaint.prayer}`;
      const isFemaleSaint = /(virgin|mother|queen|sister|abbess|widow|nun|mary|teresa|therese|catherine|faustina|monica|clare|scholastica|agnes|lucy|cecilia|bernadette|gianna|rita|elizabeth|anne|joan)/i.test(selectedSaint.name + ' ' + selectedSaint.title);
      SacredReader.speak(speech, () => setIsReadingAloud(false), isFemaleSaint ? 'female' : 'male');
      setIsReadingAloud(true);
    }
  };

  const handleCopyPrayer = () => {
    const text = `COLLECT PRAYER OF ${selectedSaint.name.toUpperCase()}
Feast Day: ${selectedSaint.feastDate}

"${selectedSaint.prayer}"

Quote:
"${selectedSaint.quote.text}" — ${selectedSaint.quote.source || selectedSaint.name}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredSaints = SAINTS_DATABASE.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.patronage.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
    s.feastDate.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* Hero Card of the Saint */}
      <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden">
        
        {/* Top Hero Header with liturgical color accent */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-[#231d16] via-[#2f241a] to-[#1c150f] text-stone-100 relative">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span 
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: colorMeta.hex, color: selectedSaint.liturgicalColor === 'white' ? '#451a03' : '#ffffff' }}
                >
                  {selectedSaint.feastDate} • {colorMeta.name}
                </span>
                {selectedSaint.birthYear && (
                  <span className="text-xs text-amber-200 font-serif-sacred">
                    ({selectedSaint.birthYear} – {selectedSaint.deathYear})
                  </span>
                )}
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-normal text-amber-100">
                {selectedSaint.name}
              </h2>
              
              <p className="text-sm sm:text-base text-amber-200/90 font-serif-sacred italic">
                {selectedSaint.title}
              </p>
            </div>

            {/* Right Side: Image of the Saint at the right side of the brown header per user request and Controls */}
            <div className="flex items-center sm:items-start gap-3.5 shrink-0 self-end sm:self-auto">
              {/* Sacred Arched Saint Portrait */}
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-amber-400/60 shadow-2xl bg-stone-900/90 shrink-0 group">
                {selectedSaint.imageUrl && !imgError ? (
                  <img 
                    src={selectedSaint.imageUrl} 
                    alt={selectedSaint.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-2 text-amber-300/80 bg-gradient-to-b from-stone-800 to-stone-950">
                    <SaintWithHaloIcon className="w-10 h-10 mb-1 text-amber-300" />
                    <span className="text-[10px] font-serif text-amber-200/80 text-center leading-tight">
                      {selectedSaint.name.split(' ')[0]} {selectedSaint.name.split(' ')[1] || ''}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Audio and Copy Controls */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleToggleAudio}
                  className={`p-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-md ${
                    isReadingAloud
                      ? 'bg-amber-600 text-white animate-pulse'
                      : 'bg-amber-900/70 hover:bg-amber-800 text-amber-100 border border-amber-700/60'
                  }`}
                  title="Listen to Saint of the Day"
                  aria-label="Listen to Saint of the Day"
                >
                  {isReadingAloud ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleCopyPrayer}
                  className="p-2.5 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-amber-200 border border-amber-900/40 transition-colors cursor-pointer shadow-md"
                  title="Copy Collect Prayer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

          {/* Patronage Pills */}
          <div className="mt-5 pt-4 border-t border-stone-700/60 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-amber-300 font-cinzel">Patron of:</span>
            {selectedSaint.patronage.map((p, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-stone-800/90 text-stone-200 text-xs border border-stone-700"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Saint's Authentic Quote Callout */}
        <div className="p-6 bg-[#FCFAF7] border-b border-stone-200">
          <div className="space-y-1">
            <p className="font-serif-sacred text-stone-900 text-xl sm:text-2xl italic leading-relaxed">
              "{selectedSaint.quote.text}"
            </p>
            {selectedSaint.quote.source && (
              <p className="text-xs sm:text-sm text-amber-900 font-medium">
                — {selectedSaint.quote.source}
              </p>
            )}
          </div>
        </div>

        {/* Life and Hagiography */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Life and Spiritual Witness
            </h3>
            <div className="font-serif-sacred text-stone-900 text-lg sm:text-xl md:text-2xl leading-relaxed whitespace-pre-line">
              {selectedSaint.biography}
            </div>
          </div>

          {/* Symbols and Canonization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="text-sm font-bold text-amber-950 font-serif">
                Sacred Symbols and Attributes
              </div>
              <p className="text-base text-stone-800 font-serif">
                {selectedSaint.symbols.join(' • ')}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
              <div className="text-sm font-bold text-amber-950 font-serif">
                Canonization and Honors
              </div>
              <p className="text-base text-stone-800 font-serif">
                {selectedSaint.canonization || 'Venerated from antiquity'}
              </p>
            </div>
          </div>

          {/* Official Collect Prayer of Intercession */}
          <div className="rounded-xl p-6 bg-gradient-to-r from-amber-50 to-[#FAF6EE] border-2 border-amber-300/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-base sm:text-lg font-bold text-amber-950">
                Collect and Intercessory Prayer
              </h4>
              <span className="text-[11px] text-amber-800 font-medium italic">
                From the Roman Missal
              </span>
            </div>
            <p className="font-serif-sacred text-stone-900 text-xl sm:text-2xl leading-relaxed italic">
              "{selectedSaint.prayer}"
            </p>
          </div>
        </div>

      </div>

      {/* Saints Treasury and Search Index */}
      <div className="bg-white rounded-xl p-6 shadow-xs border border-stone-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-cinzel text-lg font-bold text-stone-900">
              Sanctorale — Treasury of Saints
            </h3>
            <p className="text-xs text-stone-500">
              Browse saints commemorated throughout the liturgical year or search by patronage.
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or patron..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-xs pl-8 pr-3 py-2 rounded-lg bg-stone-100 border border-stone-300 focus:outline-none focus:border-amber-700 w-full sm:w-64"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filteredSaints.map(saint => {
            const isSelected = saint.id === selectedSaint.id;
            return (
              <button
                key={saint.id}
                onClick={() => {
                  setSelectedSaint(saint);
                  setImgError(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-amber-50 border-amber-600 shadow-xs ring-1 ring-amber-600'
                    : 'bg-stone-50/70 hover:bg-stone-100 border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-900 font-cinzel">
                    {saint.feastDate}
                  </span>
                  <span 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: LITURGICAL_COLORS_INFO[saint.liturgicalColor].hex }}
                  />
                </div>
                <h4 className="font-cinzel text-sm font-bold text-stone-900 mt-1 line-clamp-1">
                  {saint.name}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-1 font-serif-sacred">
                  {saint.title}
                </p>
                <p className="text-[11px] text-stone-500 mt-1 line-clamp-1 italic">
                  Patron of {saint.patronage[0]}
                </p>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
