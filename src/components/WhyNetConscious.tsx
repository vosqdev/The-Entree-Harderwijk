import React, { useState } from 'react';
import { CheckCircle2, Layers } from 'lucide-react';
import { FIVE_PROPOSALS } from '../data/projectData';

export const WhyNetConscious: React.FC = () => {
  const [activeProposalIdx, setActiveProposalIdx] = useState(0);
  const [bgError, setBgError] = useState(false);

  const activeProposal = FIVE_PROPOSALS[activeProposalIdx];

  return (
    <section
      id="voorstellen"
      className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#101C1E] text-white border-t border-[#E9E4D8]"
    >
      {/* Full-bleed energy-network background image with filter */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {!bgError && (
          <img
            src="/assets/aistudio/Afbeelding1_4464749f.png"
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setBgError(true)}
            className="w-full h-full object-cover object-center scale-[1.03] brightness-[0.96] contrast-[1.06]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1A1D]/68 via-[#102024]/50 to-[#0D181B]/68" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#7CD1D3] mb-3">
            <Layers className="w-4 h-4" />
            <span>Wat stellen wij voor? · Vijf richtinggevende pijlers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance drop-shadow-xs">
            Vijf voorstellen voor een integrale energiehub
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-xs">
            Deze lijst is een eerste aanzet om het gesprek te openen met gemeente Harderwijk, netbeheerders, ondernemers, kennisinstellingen en grondeigenaren. Een deel richt zich op het fysieke energiesysteem, een ander deel op samenwerking en regie.
          </p>
        </div>

        {/* Interactive 5-Proposal Selector + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: 5 Numbered Proposal Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {FIVE_PROPOSALS.map((prop, idx) => {
              const isSelected = idx === activeProposalIdx;
              return (
                <button
                  key={prop.id}
                  type="button"
                  onClick={() => setActiveProposalIdx(idx)}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white text-[#1F2928] border-white shadow-lg'
                      : 'bg-[#101D20]/70 backdrop-blur-md text-white border-white/15 hover:border-[#63B9BB]/70 hover:bg-[#14262A]/80'
                  }`}
                >
                  <span
                    className={`text-sm font-mono font-bold tabular-nums shrink-0 mt-0.5 ${
                      isSelected ? 'text-[#509799]' : 'text-[#63B9BB]'
                    }`}
                  >
                    {prop.number}.
                  </span>
                  <div className="min-w-0">
                    <div className="text-base font-bold leading-snug">{prop.title}</div>
                    <div
                      className={`text-xs mt-0.5 ${
                        isSelected ? 'text-[#1F2928]/70' : 'text-white/70'
                      }`}
                    >
                      {prop.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Proposal Details */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl p-6 sm:p-8 flex flex-col justify-between text-[#1F2928]">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E9E4D8]">
                <div className="text-xs font-mono font-semibold text-[#509799] tabular-nums">
                  Voorstel {activeProposal.number} van 05 · {activeProposal.subtitle}
                </div>
                {activeProposal.metrics && (
                  <div className="text-xs font-semibold text-[#99336F] tabular-nums">
                    {activeProposal.metrics}
                  </div>
                )}
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold text-[#1F2928] tracking-tight">
                {activeProposal.number}. {activeProposal.title}
              </h3>

              <p className="mt-3 text-base text-[#1F2928]/80 leading-relaxed">
                {activeProposal.summary}
              </p>

              <div className="mt-6 space-y-3">
                <div className="text-xs font-semibold text-[#557A64]">
                  Kernpunten van dit voorstel
                </div>
                {activeProposal.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F7F8F6] border border-[#E9E4D8]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#509799] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1F2928]/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E9E4D8] flex items-center justify-between text-xs text-[#1F2928]/65">
              <span>Ambitiedocument Zandlaan v0.3</span>
              <span className="font-mono tabular-nums">
                {activeProposalIdx + 1} / {FIVE_PROPOSALS.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
