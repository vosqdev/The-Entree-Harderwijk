import React, { useState, useEffect } from 'react';
import { ZANDLAAN_HISTORY_STORY } from '../data/newsData';
import { HistoryPhoto } from '../types';
import { Camera, ChevronLeft, ChevronRight, Maximize2, X, CheckCircle2 } from 'lucide-react';

interface NewsSectionProps {
  onOpenContact?: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onOpenContact }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const story = ZANDLAAN_HISTORY_STORY;
  const currentPhoto: HistoryPhoto = story.photos[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? story.photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === story.photos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);

  return (
    <section id="historie" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#509799] mb-3">
            <span className="inline-flex items-center gap-1.5">
              <Camera className="w-4 h-4" />
              <span>{story.badge}</span>
            </span>
            <span aria-hidden="true" className="text-[#1F2928]/30">·</span>
            <span className="text-[#1F2928]/70">{story.date}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight text-balance">
            {story.title}
          </h2>

          <p className="mt-3 text-lg sm:text-xl text-[#557A64] font-medium leading-relaxed">
            {story.subtitle}
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            {story.summary}
          </p>
        </div>

        {/* Interactive Historical Photo Showcase */}
        <div className="bg-[#F7F8F6] rounded-2xl border border-[#E9E4D8] p-4 sm:p-6 lg:p-8">
          {/* Selector bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#E9E4D8]">
            <div className="text-xs font-semibold text-[#1F2928]">
              Beeldarchief De Zandlaan <span className="font-mono text-[#509799] tabular-nums ml-1">({selectedIndex + 1} / {story.photos.length})</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 sm:mx-0 sm:px-0 sm:pb-0 sm:overflow-visible sm:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-w-full">
              {story.photos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`px-3 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedIndex === idx
                      ? 'bg-[#1F2928] text-white'
                      : 'bg-white border border-[#E9E4D8] text-[#1F2928]/75 hover:border-[#509799]'
                  }`}
                >
                  {photo.id}. {photo.eraLabel.split('·')[1]?.trim() || `Beeld ${photo.id}`}
                </button>
              ))}
            </div>
          </div>

          {/* Display Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-8">
              <div className="relative rounded-xl overflow-hidden bg-[#141C1B] h-[250px] sm:h-[400px] lg:h-[500px] flex items-center justify-center border border-[#E9E4D8] group">
                <img
                  src={currentPhoto.imageUrl}
                  alt={currentPhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />

                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/65 hover:bg-black/85 text-white text-xs font-medium cursor-pointer"
                  aria-label="Vergroot foto"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Vergroot</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white cursor-pointer"
                  aria-label="Vorige foto"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/85 text-white cursor-pointer"
                  aria-label="Volgende foto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-xl border border-[#E9E4D8] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#509799] font-semibold mb-2 tabular-nums">
                  <span>Beeld {currentPhoto.id} van {story.photos.length}</span>
                  <span className="text-[#1F2928]/55 font-sans">{currentPhoto.credit}</span>
                </div>

                <h3 className="text-xl font-extrabold text-[#1F2928] tracking-tight mb-3">
                  {currentPhoto.title}
                </h3>

                <div className="p-4 rounded-xl bg-[#F7F8F6] border border-[#E9E4D8] mb-4">
                  <div className="text-xs font-semibold text-[#557A64] mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#509799]" />
                    <span>Verhaal van de plek</span>
                  </div>
                  <p className="text-sm text-[#1F2928] leading-relaxed">
                    {currentPhoto.caption}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
                  {currentPhoto.details}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#E9E4D8] flex flex-wrap items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1F2928]/80 hover:text-[#1F2928] rounded-lg border border-[#E9E4D8] cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Vorige</span>
                </button>
                {onOpenContact && (
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="order-3 w-full text-center pt-1.5 sm:order-none sm:w-auto sm:pt-0 text-xs font-semibold text-[#509799] hover:text-[#1F2928] underline underline-offset-4 cursor-pointer"
                  >
                    Deel historische kennis
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#1F2928] hover:bg-[#509799] rounded-lg cursor-pointer"
                >
                  <span>Volgende</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/15 text-white">
            <span className="text-sm font-semibold truncate min-w-0">{currentPhoto.title}</span>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0 cursor-pointer"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div
            className="flex-1 flex flex-col items-center justify-center p-4 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.imageUrl}
              alt={currentPhoto.title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] max-w-full w-auto h-auto object-contain rounded-xl"
            />
            <p className="mt-4 text-sm text-white/85 max-w-2xl text-center">{currentPhoto.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};
