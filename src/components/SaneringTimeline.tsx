import React, { useState, useRef } from 'react';
import { ZANDLAAN_MILESTONES, ZandlaanMilestone } from '../data/saneringTimelineData';
import {
  Compass,
  Scale,
  Send,
  FileCheck,
  Landmark,
  Zap,
  Building2,
  Wrench,
  PlugZap,
  Megaphone,
  Layers,
  ChevronLeft,
  ChevronRight,
  Milestone,
  ArrowRight
} from 'lucide-react';

interface SaneringTimelineProps {
  onOpenContact?: () => void;
}

type FilterKey = 'all' | '2025-2026' | '2027-2030' | '2030-2040';

export const SaneringTimeline: React.FC<SaneringTimelineProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [selectedId, setSelectedId] = useState<string>('consultatie-nov-2026');
  const [bgError, setBgError] = useState(false);
  const railScrollRef = useRef<HTMLDivElement | null>(null);

  const filterEvents = (filter: FilterKey) =>
    ZANDLAAN_MILESTONES.filter((m) => (filter === 'all' ? true : m.era === filter));

  const filteredEvents = filterEvents(activeFilter);
  const activeIndex = Math.max(
    0,
    filteredEvents.findIndex((e) => e.id === selectedId)
  );
  const activeEvent = filteredEvents[activeIndex] ?? filteredEvents[0];

  const handleFilterChange = (nextFilter: FilterKey) => {
    setActiveFilter(nextFilter);
    const nextEvents = filterEvents(nextFilter);
    if (!nextEvents.some((e) => e.id === selectedId) && nextEvents.length > 0) {
      setSelectedId(nextEvents[0].id);
    }
  };

  const handleStep = (direction: -1 | 1) => {
    const nextIdx = activeIndex + direction;
    if (nextIdx >= 0 && nextIdx < filteredEvents.length) {
      setSelectedId(filteredEvents[nextIdx].id);
    }
  };

  const scrollRail = (direction: -1 | 1) => {
    railScrollRef.current?.scrollBy({ left: direction * 260, behavior: 'smooth' });
  };

  const getIconComponent = (iconKey: ZandlaanMilestone['iconKey']) => {
    switch (iconKey) {
      case 'compass':
        return Compass;
      case 'scale':
        return Scale;
      case 'send':
        return Send;
      case 'fileCheck':
        return FileCheck;
      case 'landmark':
        return Landmark;
      case 'zap':
        return Zap;
      case 'building':
        return Building2;
      case 'wrench':
        return Wrench;
      case 'plugZap':
        return PlugZap;
      case 'megaphone':
        return Megaphone;
      case 'layers':
        return Layers;
      default:
        return Milestone;
    }
  };

  const n = filteredEvents.length;
  const railInsetPercent = n > 0 ? 50 / n : 0;
  const progressWidthPercent = n > 1 ? (activeIndex / n) * 100 : 0;
  const ActiveIcon = getIconComponent(activeEvent.iconKey);

  return (
    <section
      id="proces"
      className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#141E21] text-white border-t border-[#E9E4D8]"
    >
      {/* Full-bleed sunset smart-grid background image with balanced filter */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {!bgError && (
          <img
            src="/assets/aistudio/achtergrond_2_36eb4021.png"
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setBgError(true)}
            className="w-full h-full object-cover object-center scale-[1.02] brightness-[0.94] contrast-[1.05]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#11191C]/68 via-[#141E21]/50 to-[#11191C]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header + Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#7CD1D3] mb-2">
              <Milestone className="w-4 h-4" />
              <span>Proces, Beleid &amp; Doorkijk · Van 2025 naar 2040</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-xs">
              Routekaart Smart Energyhub Zandlaan
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/90 drop-shadow-xs">
              Selecteer een mijlpaal voor de beleidsmatige, contractuele en ruimtelijke stappen uit het Ambitiedocument.
            </p>
          </div>

          <div
            className="grid grid-cols-2 sm:inline-flex sm:flex-wrap items-center gap-1 p-1 bg-[#101A1D]/65 backdrop-blur-md rounded-xl border border-white/20 w-full sm:w-auto self-start lg:self-auto"
            role="tablist"
            aria-label="Filter routekaart op periode"
          >
            {[
              { id: 'all', label: `Alle (${ZANDLAAN_MILESTONES.length})` },
              { id: '2025-2026', label: '2025–2026' },
              { id: '2027-2030', label: '2027–2030' },
              { id: '2030-2040', label: '2030–2040+' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.id}
                onClick={() => handleFilterChange(tab.id as FilterKey)}
                className={`px-3 sm:px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition-colors text-center whitespace-nowrap shrink-0 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-white text-[#1F2928]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Rail + Detail Stage */}
        <div className="rounded-2xl border border-white/30 bg-white/95 backdrop-blur-md text-[#1F2928] shadow-2xl overflow-hidden">
          <div className="bg-[#FAF9F6] px-4 sm:px-6 pt-6 pb-5 border-b border-[#E9E4D8]">
            {n > 5 && (
              <div className="flex lg:hidden items-center justify-between mb-3">
                <span className="text-xs text-[#1F2928]/60">Scroll langs de tijdlijn</span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => scrollRail(-1)}
                    className="w-8 h-8 rounded-lg bg-white border border-[#E9E4D8] flex items-center justify-center cursor-pointer"
                    aria-label="Scroll links"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollRail(1)}
                    className="w-8 h-8 rounded-lg bg-white border border-[#E9E4D8] flex items-center justify-center cursor-pointer"
                    aria-label="Scroll rechts"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            <div
              ref={railScrollRef}
              className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div
                className={`relative flex items-start ${
                  n > 6 ? 'min-w-[740px] lg:min-w-0' : 'min-w-[420px] sm:min-w-0'
                }`}
              >
                {n > 1 && (
                  <>
                    <div
                      className="absolute top-[46px] -translate-y-1/2 h-[2px] bg-[#E4DED2] z-0"
                      style={{ left: `${railInsetPercent}%`, right: `${railInsetPercent}%` }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute top-[46px] -translate-y-1/2 h-[2px] bg-[#509799] z-0 transition-all duration-200"
                      style={{ left: `${railInsetPercent}%`, width: `${progressWidthPercent}%` }}
                      aria-hidden="true"
                    />
                  </>
                )}

                {filteredEvents.map((event, idx) => {
                  const isSelected = event.id === activeEvent.id;
                  const isPassed = idx < activeIndex;
                  const IconComp = getIconComponent(event.iconKey);

                  return (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => setSelectedId(event.id)}
                      aria-current={isSelected ? 'step' : undefined}
                      className="group relative flex-1 flex flex-col items-center text-center px-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#509799] rounded-xl"
                    >
                      <span
                        className={`h-5 flex items-center text-[11px] font-mono tabular-nums whitespace-nowrap mb-2 ${
                          isSelected
                            ? 'text-[#1F2928] font-bold'
                            : event.isCurrent
                            ? 'text-[#509799] font-bold'
                            : 'text-[#1F2928]/60'
                        }`}
                      >
                        {event.shortDate}
                      </span>

                      <span
                        className={`relative z-10 w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-200 ${
                          isSelected
                            ? 'bg-[#1F2928] border-[#1F2928] text-white scale-110'
                            : event.isCurrent
                            ? 'bg-[#509799] border-[#509799] text-white'
                            : isPassed
                            ? 'bg-[#EEF6F6] border-[#509799] text-[#509799]'
                            : 'bg-white border-[#D6D0C4] text-[#1F2928]/70 group-hover:border-[#509799]'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </span>

                      <span
                        className={`mt-2.5 text-[11px] leading-tight px-1 ${
                          isSelected
                            ? 'font-bold text-[#1F2928]'
                            : 'font-medium text-[#1F2928]/70 group-hover:text-[#1F2928]'
                        }`}
                      >
                        {event.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Detail Stage */}
          <div className="px-5 sm:px-8 py-6 sm:py-7" aria-live="polite">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E9E4D8]">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#1F2928]/65">
                <span className="font-mono tabular-nums font-bold text-[#509799]">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(filteredEvents.length).padStart(2, '0')}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-[#1F2928]">{activeEvent.date}</span>
                <span aria-hidden="true">·</span>
                <span>{activeEvent.badge}</span>
                {activeEvent.isCurrent && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-bold text-[#509799]">Huidige consultatiefase</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleStep(-1)}
                  disabled={activeIndex <= 0}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#E9E4D8] bg-[#FAF9F6] text-xs font-semibold text-[#1F2928] disabled:opacity-35 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Vorige</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleStep(1)}
                  disabled={activeIndex >= filteredEvents.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#E9E4D8] bg-[#FAF9F6] text-xs font-semibold text-[#1F2928] disabled:opacity-35 cursor-pointer"
                >
                  <span>Volgende</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-4">
              <div className="hidden sm:flex w-11 h-11 rounded-xl items-center justify-center shrink-0 bg-[#FAF9F6] text-[#509799] border border-[#E9E4D8]">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2928]">
                  {activeEvent.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#1F2928]/80 leading-relaxed max-w-3xl">
                  {activeEvent.description}
                </p>
                {activeEvent.note && (
                  <p className="mt-3 text-xs sm:text-sm font-medium text-[#557A64]">
                    {activeEvent.note}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-[#1F2928] text-white px-5 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#E9E4D8]/90">
              <strong className="text-white">Versie 0.3 (november 2026)</strong> · Meedenken over versie 0.4 via de Samenwerkingstafel?
            </p>
            {onOpenContact && (
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg bg-[#63B9BB] hover:bg-white text-[#1F2928] font-bold text-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Deel uw ambities &amp; reactie</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
