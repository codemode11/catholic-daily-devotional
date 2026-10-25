import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check,
  ChevronLeft,
  ChevronRight,
  Calendar,
  BookOpen
} from 'lucide-react';
import { SAINTS_DATABASE, getSaintForDate, DailySaintEntry, CompanionSaint } from '../data/saints';
import { LITURGICAL_COLORS_INFO } from '../data/liturgicalCalendar';
import { SacredReader } from '../utils/speech';
import { SaintWithHaloIcon } from './SanctumIcons';

interface SaintOfTheDayViewProps {
  currentMonth?: number;
  currentDay?: number;
}

export const SaintOfTheDayView: React.FC<SaintOfTheDayViewProps> = ({
  currentMonth,
  currentDay
}) => {
  const getTodayParts = () => {
    const now = new Date();
    return {
      month: now.getMonth() + 1,
      day: now.getDate()
    };
  };

  const initialParts = {
    month: currentMonth ?? getTodayParts().month,
    day: currentDay ?? getTodayParts().day
  };

  const [activeMonth, setActiveMonth] = useState<number>(initialParts.month);
  const [activeDay, setActiveDay] = useState<number>(initialParts.day);
  const [selectedSaint, setSelectedSaint] = useState<DailySaintEntry>(() =>
    getSaintForDate(initialParts.month, initialParts.day)
  );
  const [resolvedSaintImageUrl, setResolvedSaintImageUrl] = useState<string | undefined>(
    () => getSaintForDate(initialParts.month, initialParts.day).imageUrl
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [readingCompanionIndex, setReadingCompanionIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Sync when parent date props change
  useEffect(() => {
    if (currentMonth && currentDay) {
      setActiveMonth(currentMonth);
      setActiveDay(currentDay);
      const nextSaint = getSaintForDate(currentMonth, currentDay);
      setSelectedSaint(nextSaint);
      setResolvedSaintImageUrl(nextSaint.imageUrl);
      setImgError(false);
    }
  }, [currentMonth, currentDay]);

  // Automatically check for calendar day rollover so Saint of the Day updates daily
  useEffect(() => {
    const checkDailyRollover = () => {
      if (!currentMonth && !currentDay) {
        const today = getTodayParts();
        if (today.month !== activeMonth || today.day !== activeDay) {
          setActiveMonth(today.month);
          setActiveDay(today.day);
          const nextSaint = getSaintForDate(today.month, today.day);
          setSelectedSaint(nextSaint);
          setResolvedSaintImageUrl(nextSaint.imageUrl);
          setImgError(false);
        }
      }
    };

    const interval = setInterval(checkDailyRollover, 60000);
    window.addEventListener('focus', checkDailyRollover);
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', checkDailyRollover);
    };
  }, [currentMonth, currentDay, activeMonth, activeDay]);

  // Look for an image of the Saint of the Day ONLY (via local asset or Wikimedia/Wikipedia REST API)
  useEffect(() => {
    let isCancelled = false;
    setImgError(false);
    setResolvedSaintImageUrl(selectedSaint.imageUrl);

    const isLocalSaintAsset = selectedSaint.imageUrl?.startsWith('/images/saints/');
    if (isLocalSaintAsset) {
      return;
    }

    const fetchSaintOfTheDayPortrait = async () => {
      const slug =
        selectedSaint.wikiSlug ||
        selectedSaint.name
          .replace(/^(Sts\.|St\.|Pope St\.|Saints|Saint)\s+/i, '')
          .trim()
          .replace(/\s+/g, '_');

      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`
        );
        if (!response.ok) return;
        const data = await response.json();
        const wikiImg: string | undefined =
          data?.originalimage?.source || data?.thumbnail?.source;
        if (!isCancelled && wikiImg) {
          setResolvedSaintImageUrl(wikiImg);
          setImgError(false);
        }
      } catch {
        // Keep existing imageUrl or sacred icon fallback
      }
    };

    fetchSaintOfTheDayPortrait();

    return () => {
      isCancelled = true;
    };
  }, [selectedSaint]);

  const handleShiftDay = (deltaDays: number) => {
    const baseDate = new Date(new Date().getFullYear(), activeMonth - 1, activeDay, 12, 0, 0);
    baseDate.setDate(baseDate.getDate() + deltaDays);
    const nextMonth = baseDate.getMonth() + 1;
    const nextDay = baseDate.getDate();
    setActiveMonth(nextMonth);
    setActiveDay(nextDay);
    const nextSaint = getSaintForDate(nextMonth, nextDay);
    setSelectedSaint(nextSaint);
    SacredReader.stop();
    setIsReadingAloud(false);
    setReadingCompanionIndex(null);
  };

  const handleJumpToToday = () => {
    const today = getTodayParts();
    setActiveMonth(today.month);
    setActiveDay(today.day);
    const nextSaint = getSaintForDate(today.month, today.day);
    setSelectedSaint(nextSaint);
    SacredReader.stop();
    setIsReadingAloud(false);
    setReadingCompanionIndex(null);
  };

  const colorMeta = LITURGICAL_COLORS_INFO[selectedSaint.liturgicalColor] || LITURGICAL_COLORS_INFO.white;

  const handleToggleAudio = () => {
    if (isReadingAloud) {
      SacredReader.stop();
      setIsReadingAloud(false);
      setReadingCompanionIndex(null);
    } else {
      SacredReader.stop();
      setReadingCompanionIndex(null);

      const companionNarration =
        selectedSaint.companionSaints && selectedSaint.companionSaints.length > 0
          ? ` Also commemorated today in Butler's Lives of the Saints: ` +
            selectedSaint.companionSaints
              .slice(0, 3)
              .map((c) => `${c.name}, ${c.title}. ${c.shortDescription}`)
              .join(' ')
          : '';

      const speech = `Saint of the Day for ${selectedSaint.feastDate}: ${selectedSaint.name}, ${selectedSaint.title}.
Patron of: ${selectedSaint.patronage.join(', ')}.
Quote: "${selectedSaint.quote.text}".
Biography: ${selectedSaint.biography}
Collect Prayer: ${selectedSaint.prayer}.${companionNarration}`;

      const isFemaleSaint = /(virgin|mother|queen|sister|abbess|widow|nun|mary|teresa|therese|catherine|faustina|monica|clare|scholastica|agnes|lucy|cecilia|bernadette|gianna|rita|elizabeth|anne|joan|daria|ursula|hedwig)/i.test(
        selectedSaint.name + ' ' + selectedSaint.title
      );
      SacredReader.speak(speech, () => setIsReadingAloud(false), isFemaleSaint ? 'female' : 'male');
      setIsReadingAloud(true);
    }
  };

  const handleToggleCompanionAudio = (companion: CompanionSaint, idx: number) => {
    if (readingCompanionIndex === idx) {
      SacredReader.stop();
      setReadingCompanionIndex(null);
      return;
    }

    SacredReader.stop();
    setIsReadingAloud(false);
    const speech = `${companion.name}, ${companion.title}. ${companion.lifespan ? companion.lifespan + '.' : ''} ${companion.shortDescription}`;
    const isFemale = /(virgin|mother|queen|sister|abbess|widow|nun|martyrs|sabina|christeta|ursula|winifred|bertille|hedwig|thecla|magdalena|galla|anstrudis)/i.test(
      companion.name + ' ' + companion.title
    );
    SacredReader.speak(speech, () => setReadingCompanionIndex(null), isFemale ? 'female' : 'male');
    setReadingCompanionIndex(idx);
  };

  const handleCopyPrayer = () => {
    const companionLines =
      selectedSaint.companionSaints && selectedSaint.companionSaints.length > 0
        ? `\n\nOTHER SAINTS OF ${selectedSaint.feastDate.toUpperCase()} (Butler's Lives of the Saints):\n` +
          selectedSaint.companionSaints
            .slice(0, 3)
            .map((c, i) => `${i + 2}. ${c.name} (${c.title}) — ${c.shortDescription}`)
            .join('\n')
        : '';

    const text = `SAINT OF THE DAY — ${selectedSaint.feastDate.toUpperCase()}
${selectedSaint.name} (${selectedSaint.title})
Source: ${selectedSaint.butlerReference || "Butler's Lives of the Saints"}

COLLECT PRAYER:
"${selectedSaint.prayer}"

QUOTE:
"${selectedSaint.quote.text}" — ${selectedSaint.quote.source || selectedSaint.name}${companionLines}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredSaints = SAINTS_DATABASE.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.patronage.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
    s.feastDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.companionSaints?.some(
      c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const companionSaintsToday = (selectedSaint.companionSaints || []).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* Daily Date Navigation Bar */}
      <div className="bg-white rounded-xl px-4 py-3 shadow-xs border border-stone-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-stone-800">
          <Calendar className="w-4 h-4 text-amber-800 shrink-0" />
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wide text-stone-900">
            Daily Hagiography • {selectedSaint.feastDate}
          </span>
          <span className="hidden sm:inline-block text-xs text-stone-500 font-serif-sacred italic">
            ({selectedSaint.butlerReference || "Butler's Lives of the Saints"})
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleShiftDay(-1)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors cursor-pointer"
            title="Previous Day's Saints"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Prev Day</span>
          </button>

          <button
            onClick={handleJumpToToday}
            className="px-3 py-1.5 rounded-lg bg-amber-900 hover:bg-amber-800 text-amber-50 text-xs font-cinzel font-bold tracking-wider uppercase transition-colors cursor-pointer"
            title="Jump to Today's Saint of the Day"
          >
            Today
          </button>

          <button
            onClick={() => handleShiftDay(1)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors cursor-pointer"
            title="Next Day's Saints"
          >
            <span>Next Day</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 1. Primary Saint of the Day Card (1st Saint from Butler's Lives of the Saints, with Image) */}
      <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden">
        
        {/* Top Hero Header with liturgical color accent */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-[#231d16] via-[#2f241a] to-[#1c150f] text-stone-100 relative">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-200 text-[11px] font-cinzel font-bold uppercase tracking-wider">
                  Saint of the Day
                </span>
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

            {/* Right Side: Image of the Saint of the Day ONLY + Audio/Copy Controls */}
            <div className="flex items-center sm:items-start gap-3.5 shrink-0 self-end sm:self-auto">
              {/* Sacred Arched Portrait of the Saint of the Day */}
              <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-amber-400/60 shadow-2xl bg-stone-900/90 shrink-0 group">
                {resolvedSaintImageUrl && !imgError ? (
                  <img 
                    src={resolvedSaintImageUrl} 
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
                  title="Copy Saint of the Day & Collect Prayer"
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

        {/* Life and Hagiography from Butler's Lives of the Saints */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Life and Spiritual Witness
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-serif-sacred italic text-amber-900 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                <BookOpen className="w-3.5 h-3.5 text-amber-800" />
                {selectedSaint.butlerReference || "Alban Butler's Lives of the Saints"}
              </span>
            </div>
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
                Canonization and Veneration
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
                From the Roman Missal & Martyrology
              </span>
            </div>
            <p className="font-serif-sacred text-stone-900 text-xl sm:text-2xl leading-relaxed italic">
              "{selectedSaint.prayer}"
            </p>
          </div>
        </div>

      </div>

      {/* 2. Next Three Saints of the Day (Shorter Descriptions, NO Images) */}
      {companionSaintsToday.length > 0 && (
        <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-[#231d16] via-[#2f241a] to-[#231d16] text-amber-100 border-b border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold tracking-wide text-amber-100">
                Also Commemorated on {selectedSaint.feastDate}
              </h3>
              <p className="text-xs text-amber-200/80 font-serif-sacred italic">
                The next three saints of the day from Alban Butler's Lives of the Saints & the Roman Martyrology
              </p>
            </div>
            <span className="text-[11px] font-cinzel uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-400/30 text-amber-200 self-start sm:self-auto">
              3 Companion Memorials
            </span>
          </div>

          <div className="divide-y divide-stone-200">
            {companionSaintsToday.map((companion, idx) => {
              const isCompanionSpeaking = readingCompanionIndex === idx;
              return (
                <div
                  key={companion.name}
                  className="p-5 sm:p-6 bg-[#FDFBF8] hover:bg-stone-50/90 transition-colors space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-900 text-amber-100 text-xs font-cinzel font-bold">
                          {idx + 2}
                        </span>
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                          {companion.name}
                        </h4>
                        {companion.lifespan && (
                          <span className="text-xs font-serif-sacred text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded-md border border-amber-300/60">
                            {companion.lifespan}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-serif-sacred italic text-amber-900">
                        {companion.title}
                        {companion.place ? ` • ${companion.place}` : ''}
                      </p>
                    </div>

                    <button
                      onClick={() => handleToggleCompanionAudio(companion, idx)}
                      className={`p-2 rounded-lg text-xs transition-colors cursor-pointer shrink-0 ${
                        isCompanionSpeaking
                          ? 'bg-amber-700 text-white animate-pulse'
                          : 'bg-stone-200/80 hover:bg-amber-900/15 text-stone-700'
                      }`}
                      title={`Listen to ${companion.name}`}
                      aria-label={`Listen to ${companion.name}`}
                    >
                      {isCompanionSpeaking ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <p className="font-serif-sacred text-stone-800 text-base sm:text-lg leading-relaxed">
                    {companion.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Saints Treasury and Search Index */}
      <div className="bg-white rounded-xl p-6 shadow-xs border border-stone-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-cinzel text-lg font-bold text-stone-900">
              Sanctorale — Butler's Lives of the Saints Index
            </h3>
            <p className="text-xs text-stone-500">
              Browse principal saints and companion memorials throughout the liturgical calendar or search by patronage.
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search by saint, date, or patron..."
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
                  setActiveMonth(saint.month);
                  setActiveDay(saint.day);
                  setImgError(false);
                  SacredReader.stop();
                  setIsReadingAloud(false);
                  setReadingCompanionIndex(null);
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
                {saint.companionSaints && saint.companionSaints.length > 0 && (
                  <p className="text-[11px] text-amber-900/80 mt-1 line-clamp-1 italic">
                    + {saint.companionSaints.map(c => c.name).join(', ')}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
