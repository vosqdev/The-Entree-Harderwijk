import React, { useState } from 'react';
import { ArrowDown, FileText, Compass } from 'lucide-react';
import { PDF_DOCUMENT_URL } from '../data/projectData';

interface HeroProps {
  onOpenStatus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStatus }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-[#141F1E] text-white border-b border-[#E9E4D8]">
      {/* Full-bleed aerial background image with editorial filter */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {!imgError && (
          <img
            src="/assets/aistudio/achtergrond_ff6ff3d3.png"
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center scale-[1.04] brightness-[0.82] contrast-[1.06] saturate-[0.9]"
          />
        )}
        {/* Multi-layered atmospheric filter for readability & cohesion */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#101C1B]/88 via-[#182625]/74 to-[#1B2C2B]/58" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101A19]/90 via-transparent to-[#101A19]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Editorial Headline & Core Proposition */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold text-[#63B9BB] tracking-wide mb-2.5">
            Greenfield · The Entree Harderwijk
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white tracking-tight leading-[1.06] text-balance drop-shadow-xs">
            Smart Energyhub Zandlaan
          </h1>

          <p className="mt-4 text-lg sm:text-2xl text-[#9CE0E2] font-semibold leading-snug text-balance">
            “Niet wachten op ruimte in het net, maar ruimte creëren door slim te verbinden.”
          </p>

          <p className="mt-5 text-base sm:text-lg text-white/88 leading-relaxed max-w-2xl">
            Langs het spoor, de A28, de N302 en nabij het 150kV-hoogspanningsstation ligt een unieke kans om een versnipperd werkterrein te transformeren tot een multimodale energiehub en innovatiezone voor Harderwijk en de Noord-Veluwe.
          </p>

          {/* Action Cluster */}
          <div className="mt-8 pt-1 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#voorstellen"
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-[#1F2928] bg-[#63B9BB] hover:bg-white rounded-xl transition-colors whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ontdek de 5 voorstellen</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={PDF_DOCUMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-white bg-white/12 hover:bg-white/22 border border-white/25 backdrop-blur-md rounded-xl transition-colors whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#63B9BB]" />
              <span>Ambitiedocument v0.3 (PDF)</span>
            </a>

            <button
              type="button"
              onClick={onOpenStatus}
              className="w-full sm:w-auto px-3 py-2.5 sm:py-3 text-sm font-medium text-white/90 hover:text-[#63B9BB] underline underline-offset-4 whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#63B9BB]" />
              <span>Status consultatiefase</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
