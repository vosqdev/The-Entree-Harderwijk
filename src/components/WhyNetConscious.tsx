import React, { useState } from 'react';
import { CheckCircle2, Layers } from 'lucide-react';
import { FIVE_PROPOSALS, DESIGN_PRINCIPLES_6 } from '../data/projectData';

export const WhyNetConscious: React.FC = () => {
  const [activeProposalIdx, setActiveProposalIdx] = useState(0);
  const [imgError, setImgError] = useState(false);

  const activeProposal = FIVE_PROPOSALS[activeProposalIdx];

  return (
    <section id="voorstellen" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E9E4D8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#509799] mb-3">
            <Layers className="w-4 h-4" />
            <span>Wat stellen wij voor? · Vijf richtinggevende pijlers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight text-balance">
            Vijf voorstellen voor een integrale energiehub
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            Deze lijst is een eerste aanzet om het gesprek te openen met gemeente Harderwijk, netbeheerders, ondernemers, kennisinstellingen en grondeigenaren. Een deel richt zich op het fysieke energiesysteem, een ander deel op samenwerking en regie.
          </p>
        </div>

        {/* Interactive 5-Proposal Selector + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-14">
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
                      ? 'bg-[#1F2928] text-white border-[#1F2928]'
                      : 'bg-[#F7F8F6] text-[#1F2928] border-[#E9E4D8] hover:border-[#509799]'
                  }`}
                >
                  <span
                    className={`text-sm font-mono font-bold tabular-nums shrink-0 mt-0.5 ${
                      isSelected ? 'text-[#63B9BB]' : 'text-[#509799]'
                    }`}
                  >
                    {prop.number}.
                  </span>
                  <div className="min-w-0">
                    <div className="text-base font-bold leading-snug">{prop.title}</div>
                    <div
                      className={`text-xs mt-0.5 ${
                        isSelected ? 'text-[#E9E4D8]/80' : 'text-[#1F2928]/65'
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
          <div className="lg:col-span-7 bg-[#F7F8F6] rounded-2xl border border-[#E9E4D8] p-6 sm:p-8 flex flex-col justify-between">
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
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E9E4D8]"
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

        {/* Sfeerbeeld energienetwerk + 6 Ontwerpprincipes (PDF page 21) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Energy Network Visual */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-2xl overflow-hidden border border-[#E9E4D8] bg-[#1F2928] h-[250px] sm:h-[360px] lg:h-auto lg:min-h-full relative">
              {!imgError ? (
                <img
                  src="/assets/aistudio/Afbeelding1_4464749f.png"
                  alt="Visualisatie van een slim en gekoppeld hoogspannings- en energienetwerk bij de Zandlaan"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center block"
                />
              ) : (
                <div className="w-full h-full min-h-[340px] flex items-center justify-center bg-gradient-to-br from-[#1F2928] via-[#263C3D] to-[#509799] p-8 text-center">
                  <span className="text-sm font-medium text-[#E9E4D8]/80">
                    Smart Energyhub Zandlaan · Slim energienetwerk
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 6 Design Principles */}
          <div className="lg:col-span-5">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2928] mb-4">
              Zes ontwerpprincipes voor The Entree
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {DESIGN_PRINCIPLES_6.map((principle, idx) => (
                <div
                  key={principle.title}
                  className="p-4 rounded-xl bg-white border border-[#E9E4D8]"
                >
                  <div className="text-sm font-bold text-[#1F2928]">
                    {idx + 1}. {principle.title}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
