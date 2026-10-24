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
