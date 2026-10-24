import React, { useState } from 'react';
import { 
  BookMarked, 
  Calendar, 
  Check, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Plus, 
  Sparkles, 
  Heart, 
  Volume2, 
  Trash2, 
  X,
  ExternalLink 
} from 'lucide-react';
import { Novena, UserNovenaProgress } from '../types';
import { NOVENAS_DATABASE } from '../data/novenas';
import { bellSynth } from '../utils/audioSynth';
import { SacredReader } from '../utils/speech';

export const NovenaTrackerView: React.FC = () => {
  // Initial user active novenas
  const [userNovenas, setUserNovenas] = useState<UserNovenaProgress[]>([
    {
      novenaId: 'novena-surrender',
      startDate: '2026-10-14',
      currentDay: 3,
      completedDays: [1, 2],
      personalIntention: 'For peace of heart, total surrender of work anxieties to Jesus, and healing of family tension.',
      isCompleted: false
    },
    {
      novenaId: 'novena-st-jude',
      startDate: '2026-10-16',
      currentDay: 1,
      completedDays: [],
      personalIntention: 'For healing of baby Michael and for God\'s grace in an impossible financial situation.',
      isCompleted: false
    }
  ]);

  const [selectedNovenaForModal, setSelectedNovenaForModal] = useState<Novena | null>(null);
  const [intentionInput, setIntentionInput] = useState('');
  const [viewingNovenaId, setViewingNovenaId] = useState<string>('novena-surrender');
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customPatron, setCustomPatron] = useState('');
  const [customPrayer, setCustomPrayer] = useState('');

  // Handle checking off a day
  const handleCheckDay = (novenaId: string, dayNumber: number) => {
    setUserNovenas(prev => prev.map(item => {
      if (item.novenaId !== novenaId) return item;

      const alreadyDone = item.completedDays.includes(dayNumber);
      let newDone: number[];

      if (alreadyDone) {
        newDone = item.completedDays.filter(d => d !== dayNumber);
      } else {
        newDone = [...item.completedDays, dayNumber].sort((a, b) => a - b);
        bellSynth.playChurchBell(587, 2.5); // Joyful D chime
      }

      const nextDay = Math.min(9, Math.max(...newDone, 0) + 1);
      const isComplete = newDone.length === 9;

      return {
        ...item,
        completedDays: newDone,
        currentDay: isComplete ? 9 : nextDay,
        isCompleted: isComplete
      };
    }));
  };

  // Start novena from library
  const handleStartNovena = (novena: Novena) => {
    const existing = userNovenas.find(u => u.novenaId === novena.id);
    if (existing) {
      setViewingNovenaId(novena.id);
      return;
    }

    const newProgress: UserNovenaProgress = {
      novenaId: novena.id,
      startDate: new Date().toISOString().split('T')[0],
      currentDay: 1,
      completedDays: [],
      personalIntention: intentionInput.trim() || novena.intentionsSuggestion,
      isCompleted: false
    };

    setUserNovenas([newProgress, ...userNovenas]);
    setViewingNovenaId(novena.id);
    setSelectedNovenaForModal(null);
    setIntentionInput('');
    bellSynth.playBeadChime();
  };

  // Remove novena
  const handleRemoveNovena = (novenaId: string) => {
    setUserNovenas(prev => prev.filter(n => n.novenaId !== novenaId));
    if (viewingNovenaId === novenaId) {
      setViewingNovenaId(userNovenas[0]?.novenaId || NOVENAS_DATABASE[0].id);
    }
  };

  // Find active novena object
  const currentNovenaData = NOVENAS_DATABASE.find(n => n.id === viewingNovenaId) || NOVENAS_DATABASE[0];
  const currentUserProgress = userNovenas.find(u => u.novenaId === currentNovenaData.id);
  const currentDayInfo = currentNovenaData.days.find(d => d.dayNumber === (currentUserProgress?.currentDay || 1)) || currentNovenaData.days[0];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Novena Tracker Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 rounded-xl p-6 sm:p-8 text-amber-50 shadow-md border border-amber-900/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-300">
              Sacred Nine-Day Devotions
            </span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Catholic Novena Tracker
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-serif-sacred max-w-xl">
            In imitation of the Apostles who persevered for nine days in the Upper Room awaiting the Holy Spirit, persevere in prayer for impossible cases, peace, and spiritual graces.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setCustomModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-800/80 hover:bg-amber-700 text-amber-100 font-semibold text-xs border border-amber-600 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Custom Novena</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: ONGOING NOVENAS (MY ACTIVE PRAYERS)
         ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-amber-800" />
            <span>My Active Novenas ({userNovenas.length})</span>
          </h3>
          <span className="text-xs text-stone-500 font-medium">
            Click day beads to record completed prayer
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userNovenas.map(progress => {
            const novena = NOVENAS_DATABASE.find(n => n.id === progress.novenaId);
            if (!novena) return null;
            const isViewing = viewingNovenaId === novena.id;
            const progressPercent = Math.round((progress.completedDays.length / 9) * 100);

            return (
              <div 
                key={progress.novenaId}
                onClick={() => setViewingNovenaId(novena.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer relative ${
                  isViewing 
                    ? 'bg-white border-amber-800/50 shadow-md ring-2 ring-amber-700/20' 
                    : 'bg-stone-50/80 hover:bg-white border-stone-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 font-cinzel">
                      {novena.patronOrSubject}
                    </span>
                    <h4 className="font-cinzel text-base font-bold text-stone-900">
                      {novena.title}
                    </h4>
                    <p className="text-xs text-stone-600 font-serif-sacred italic line-clamp-1">
                      Intention: "{progress.personalIntention}"
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveNovena(novena.id);
                    }}
                    className="p-1 rounded-md text-stone-400 hover:text-red-700 hover:bg-stone-100 transition-colors"
                    title="Remove from active tracker"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 9-Day Bead Bar */}
                <div className="mt-4 pt-3 border-t border-stone-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-amber-950 font-cinzel">
                      Day {progress.currentDay} of 9
                    </span>
                    <span className="text-[11px] text-stone-500 font-medium">
                      {progress.completedDays.length}/9 completed ({progressPercent}%)
                    </span>
                  </div>

                  <div className="grid grid-cols-9 gap-1.5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => {
                      const isDone = progress.completedDays.includes(d);
                      const isCurrent = progress.currentDay === d && !isDone;

                      return (
                        <button
                          key={d}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCheckDay(novena.id, d);
                          }}
                          className={`h-8 rounded-lg flex items-center justify-center text-xs font-bold font-cinzel transition-all cursor-pointer ${
                            isDone 
                              ? 'bg-amber-800 text-amber-100 shadow-xs' 
                              : isCurrent 
                                ? 'bg-amber-200 text-amber-950 ring-2 ring-amber-600 scale-105' 
                                : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                          }`}
                          title={`Day ${d}: Click to mark as prayed`}
                        >
                          {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : d}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: CURRENT DAY PRAYER READER DECK
         ========================================================================= */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 font-cinzel">
              Today's Prayer Focus • Day {currentDayInfo.dayNumber} of 9
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900">
              {currentNovenaData.title}
            </h3>
            <p className="text-xs text-amber-800 font-serif-sacred italic">
              Theme: {currentDayInfo.theme}
            </p>
          </div>

          <button
            onClick={() => handleCheckDay(currentNovenaData.id, currentDayInfo.dayNumber)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              currentUserProgress?.completedDays.includes(currentDayInfo.dayNumber)
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-amber-900 text-amber-100 hover:bg-amber-800 shadow-md'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>
              {currentUserProgress?.completedDays.includes(currentDayInfo.dayNumber)
                ? `Day ${currentDayInfo.dayNumber} Prayed ✓`
                : `Mark Day ${currentDayInfo.dayNumber} as Prayed`}
            </span>
          </button>
        </div>

        {/* Scripture Quote */}
        {currentDayInfo.scriptureVerse && (
          <div className="p-4 rounded-xl bg-[#FAF8F5] border-l-4 border-amber-800 text-stone-900 font-serif-sacred text-lg sm:text-xl md:text-2xl italic leading-relaxed">
            "{currentDayInfo.scriptureVerse}"
          </div>
        )}

        {/* Prayer Text */}
        <div className="font-serif-sacred text-stone-900 text-xl sm:text-2xl md:text-3xl leading-relaxed whitespace-pre-line py-3">
          {currentDayInfo.prayerText}
        </div>

        {/* Closing Prayer */}
        <div className="p-6 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-2.5">
          <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-950">
            Conclusive Novena Prayer
          </span>
          <p className="font-serif-sacred text-stone-900 text-lg sm:text-xl leading-relaxed whitespace-pre-line">
            {currentNovenaData.closingPrayer}
          </p>
        </div>

        {/* User's Intention Banner */}
        {currentUserProgress && (
          <div className="p-4 rounded-xl bg-stone-100 text-xs text-stone-700 font-serif-sacred flex items-center justify-between">
            <div>
              <span className="font-bold font-cinzel text-stone-900 mr-1">Your Stated Intention:</span>
              <span>"{currentUserProgress.personalIntention}"</span>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          SECTION 3: NOVENAS STARTING SOON & LIBRARY
         ========================================================================= */}
      <div className="bg-[#FAF7F2] rounded-xl p-6 sm:p-8 border border-stone-200 space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-800" />
            <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-amber-900">
              Upcoming Feasts & Starting Soon
            </span>
          </div>
          <h3 className="font-cinzel text-xl font-bold text-stone-900">
            Novena Treasury & Upcoming Calendar Starts
          </h3>
          <p className="text-xs text-stone-600">
            Never miss preparing for a solemnity. Start any authentic Catholic novena with custom intentions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {NOVENAS_DATABASE.map(novena => {
            const isUserActive = userNovenas.some(u => u.novenaId === novena.id);

            return (
              <div 
                key={novena.id} 
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider font-cinzel">
                      {novena.associatedFeast}
                    </span>
                    {novena.traditionalStartDate !== 'Anytime' && (
                      <span className="text-[11px] font-semibold text-amber-800">
                        Starts: {novena.traditionalStartDate.replace('-', '/')}
                      </span>
                    )}
                  </div>

                  <h4 className="font-cinzel text-base font-bold text-stone-900">
                    {novena.title}
                  </h4>

                  <p className="text-xs text-stone-600 font-serif-sacred line-clamp-2">
                    {novena.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-serif-sacred italic">
                    9 Days of Meditations
                  </span>

                  {isUserActive ? (
                    <button
                      onClick={() => setViewingNovenaId(novena.id)}
                      className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium cursor-pointer"
                    >
                      View in Tracker
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedNovenaForModal(novena)}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-900 hover:bg-amber-800 text-amber-100 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Start This Novena
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: Start Novena with Personal Intention */}
      {selectedNovenaForModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl border border-amber-900/20">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 font-cinzel">
                  Begin Sacred Novena
                </span>
                <h3 className="font-cinzel text-xl font-bold text-stone-900">
                  {selectedNovenaForModal.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedNovenaForModal(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-600 font-serif-sacred">
              {selectedNovenaForModal.description}
            </p>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-800 font-cinzel">
                Your Personal Intention:
              </label>
              <textarea
                value={intentionInput}
                onChange={(e) => setIntentionInput(e.target.value)}
                placeholder={selectedNovenaForModal.intentionsSuggestion}
                className="w-full h-24 p-3 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm font-serif-sacred focus:outline-none focus:border-amber-800 resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedNovenaForModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-stone-600 hover:bg-stone-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleStartNovena(selectedNovenaForModal)}
                className="px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-amber-100 font-semibold text-xs transition-colors cursor-pointer"
              >
                Start 9-Day Journey
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Custom Novena */}
      {customModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 sm:p-8 max-w-lg w-full space-y-4 shadow-2xl border border-stone-300">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 font-cinzel">
                  Custom Devotion
                </span>
                <h3 className="font-cinzel text-xl font-bold text-stone-900">
                  Create Custom Novena
                </h3>
              </div>
              <button 
                onClick={() => setCustomModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-stone-800 font-cinzel">Novena Title</label>
                <input
                  type="text"
                  placeholder="e.g. Novena to St. Michael for Spiritual Protection"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-stone-50 border border-stone-300 text-xs focus:outline-none focus:border-amber-800 mt-1"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-800 font-cinzel">Patron Saint / Mystery</label>
                <input
                  type="text"
                  placeholder="e.g. Saint Michael the Archangel"
                  value={customPatron}
                  onChange={(e) => setCustomPatron(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-stone-50 border border-stone-300 text-xs focus:outline-none focus:border-amber-800 mt-1"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-800 font-cinzel">Daily Prayer Text</label>
                <textarea
                  placeholder="Paste or write the prayer to be recited each day for 9 days..."
                  value={customPrayer}
                  onChange={(e) => setCustomPrayer(e.target.value)}
                  className="w-full h-24 p-3 rounded-lg bg-stone-50 border border-stone-300 text-xs font-serif-sacred focus:outline-none focus:border-amber-800 resize-none mt-1"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setCustomModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-stone-600 hover:bg-stone-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!customTitle.trim()) return;
                  const customId = `custom-${Date.now()}`;
                  const newCustomNovena: Novena = {
                    id: customId,
                    title: customTitle,
                    subtitle: 'Custom Devotion',
                    patronOrSubject: customPatron || 'Heavenly Patron',
                    associatedFeast: 'Personal Intention',
                    traditionalStartDate: 'Anytime',
                    traditionalFeastDate: 'Anytime',
                    category: 'Special Needs',
                    description: 'Personal custom 9-day novena prayer.',
                    intentionsSuggestion: 'My personal petition',
                    closingPrayer: 'Our Father... Hail Mary... Glory Be...',
                    days: Array.from({ length: 9 }).map((_, i) => ({
                      dayNumber: i + 1,
                      theme: `Day ${i + 1} Supplication`,
                      prayerText: customPrayer || 'Lord hear my prayer.'
                    }))
                  };
                  NOVENAS_DATABASE.push(newCustomNovena);
                  handleStartNovena(newCustomNovena);
                  setCustomModalOpen(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-amber-100 font-semibold text-xs cursor-pointer"
              >
                Save & Track
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
