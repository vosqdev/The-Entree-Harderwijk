import React, { useState, useEffect } from 'react';
import { Maximize2, X } from 'lucide-react';
import { TECH_GALLERY_ITEMS, TechVisualItem } from '../data/newsData';

export const ProofOfConceptSection: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<TechVisualItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxItem(null);
    };
    if (lightboxItem !== null) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxItem]);

  return (
    <section id="techniek" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]">
      <div className="max-w-7xl mx-auto">
        {/* Technical Visual Gallery */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2928] tracking-tight">
              Referentiebeelden Techniek &amp; Innovatie
            </h2>
            <span className="text-xs text-[#1F2928]/60">Klik op een beeld om te vergroten</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {TECH_GALLERY_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxItem(item)}
                className="text-left bg-white rounded-xl border border-[#E9E4D8] overflow-hidden hover:border-[#509799] transition-colors flex flex-col cursor-pointer group"
              >
                <div className="aspect-[4/3] w-full bg-[#1F2928] overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 text-white opacity-80 group-hover:opacity-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-medium text-[#509799]">{item.sourceLabel}</div>
                    <h4 className="text-sm font-bold text-[#1F2928] mt-1 leading-snug">{item.title}</h4>
                    <p className="text-xs text-[#1F2928]/70 mt-1.5 leading-relaxed">{item.caption}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col p-4 sm:p-6"
          onClick={() => setLightboxItem(null)}
        >
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/15 text-white">
            <div className="min-w-0">
              <div className="text-xs text-[#63B9BB] font-semibold truncate">{lightboxItem.sourceLabel}</div>
              <div className="text-sm font-bold truncate">{lightboxItem.title}</div>
            </div>
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
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
              src={lightboxItem.imageUrl}
              alt={lightboxItem.title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] max-w-full w-auto h-auto object-contain rounded-xl"
            />
            <p className="mt-4 text-sm text-white/85 max-w-2xl text-center">{lightboxItem.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};
