import React, { useState } from 'react';
import { ArrowDown, FileText, Compass, MapPin } from 'lucide-react';
import { PDF_DOCUMENT_URL } from '../data/projectData';

interface HeroProps {
  onOpenStatus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStatus }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-b border-[#E9E4D8]">
      <div className="max-w-7xl mx-auto">
        {/* Quiet unboxed metadata line */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#1F2928]/70 font-medium mb-6">
          <span className="font-semibold text-[#509799]">Ambitiedocument · Versie 0.3 (80%)</span>
          <span aria-hidden="true" className="text-[#1F2928]/30">·</span>
          <span>Consultatiefase november 2026</span>
          <span aria-hidden="true" className="text-[#1F2928]/30">·</span>
          <span>Harderwijk — Noord-Veluwe</span>
          <span aria-hidden="true" className="text-[#1F2928]/30">·</span>
          <span>Circul8 &amp; VOVON Development</span>
        </div>

        {/* Two-column Hero Split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Editorial Headline & Core Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-sm font-semibold text-[#557A64] tracking-wide mb-2">
                Greenfield · The Entree Harderwijk
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#1F2928] tracking-tight leading-[1.08] text-balance">
                Smart Energyhub Zandlaan
              </h1>

              <p className="mt-4 text-lg sm:text-2xl text-[#509799] font-semibold leading-snug text-balance">
                “Niet wachten op ruimte in het net, maar ruimte creëren door slim te verbinden.”
              </p>

              <p className="mt-5 text-base sm:text-lg text-[#1F2928]/80 leading-relaxed max-w-2xl">
                Langs het spoor, de A28, de N302 en nabij het 150kV-hoogspanningsstation ligt een unieke kans om een versnipperd werkterrein te transformeren tot een multimodale energiehub en innovatiezone voor Harderwijk en de Noord-Veluwe.
              </p>
            </div>

            {/* Action Cluster */}
            <div className="mt-8 pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#voorstellen"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#1F2928] hover:bg-[#509799] rounded-xl transition-colors whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ontdek de 5 voorstellen</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PDF_DOCUMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-[#1F2928] bg-white border border-[#E9E4D8] hover:border-[#509799] hover:bg-[#F4F1EB] rounded-xl transition-colors whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#509799]" />
                <span>Ambitiedocument v0.3 (PDF)</span>
              </a>

              <button
                type="button"
                onClick={onOpenStatus}
                className="w-full sm:w-auto px-3 py-2.5 sm:py-3 text-sm font-medium text-[#1F2928]/80 hover:text-[#509799] underline underline-offset-4 whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#509799]" />
                <span>Status consultatiefase</span>
              </button>
            </div>
          </div>

          {/* Right Column: Aerial Hero Photograph */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full h-[260px] sm:h-[360px] lg:h-auto lg:min-h-full rounded-2xl overflow-hidden border border-[#E9E4D8] bg-[#1F2928]">
              {!imgError ? (
                <img
                  src="/assets/zandlaan/zandlaan_aerial_hero.jpg"
                  alt="Luchtopname van De Zandlaan tussen het spoor, de A28, Harderwijk en het Wolderwijd"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center lg:h-full"
                />
              ) : (
                <div className="w-full h-full min-h-[320px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1F2928] to-[#2B3B39] text-white">
                  <MapPin className="w-8 h-8 text-[#63B9BB] mb-2" />
                  <span className="font-semibold text-sm">De Zandlaan, Harderwijk</span>
                  <span className="text-xs text-white/70 mt-1">A28 · Spoorlijn · N302 · 150kV HS-station</span>
                </div>
              )}

              {/* Scrim for high-contrast caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 pt-14 text-white">
                <div className="text-xs text-[#63B9BB] font-semibold">
                  Kruispunt infrastructuur &amp; energie
                </div>
                <p className="text-sm font-medium text-white/95 mt-0.5 leading-snug">
                  Tussen spoorlijn, A28-corridor, bedrijventerrein Lorentz en het Wolderwijd
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Context Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-[#E9E4D8] p-5">
            <div className="text-xs font-medium text-[#1F2928]/60">Netbesparing energyhub (schatting)</div>
            <div className="mt-1.5 text-2xl sm:text-3xl font-bold text-[#1F2928] font-display tabular-nums">
              40–60%
            </div>
            <div className="mt-1 text-xs text-[#557A64]">
              Minder investeringen in netverzwaring
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E9E4D8] p-5">
            <div className="text-xs font-medium text-[#1F2928]/60">TenneT BESS-opgave Noord-Veluwe</div>
            <div className="mt-1.5 text-2xl sm:text-3xl font-bold text-[#1F2928] font-display tabular-nums">
              50–250 MW
            </div>
            <div className="mt-1 text-xs text-[#509799]">
              Ca. 1–4 hectare rond HS-station Harderwijk
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E9E4D8] p-5">
            <div className="text-xs font-medium text-[#1F2928]/60">Directe netinfrastructuur</div>
            <div className="mt-1.5 text-2xl sm:text-3xl font-bold text-[#1F2928] font-display tabular-nums">
              150 kV &amp; 20–50 kV
            </div>
            <div className="mt-1 text-xs text-[#1F2928]/70">
              TenneT HS-station, Liander MS &amp; FGU gasnet
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E9E4D8] p-5">
            <div className="text-xs font-medium text-[#1F2928]/60">Power-to-X netbalancering</div>
            <div className="mt-1.5 text-2xl sm:text-3xl font-bold text-[#1F2928] font-display tabular-nums">
              ~5 min aFRR
            </div>
            <div className="mt-1 text-xs text-[#99336F]">
              Elektrolyse als flexibele netstabilisator
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
