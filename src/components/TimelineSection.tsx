import React, { useState } from 'react';
import { TIMELINE_PHASES } from '../data/projectData';
import { Clock, Calendar, CheckCircle2, ChevronRight, Info } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  return (
    <section id="planning" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#557A64] mb-3">
            <Clock className="w-4 h-4 text-[#509799]" />
            <span>Fasering &amp; Doorkijk (2025 – 2040+)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
            Gefaseerd Ontwikkelperspectief
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            Elke stap is schaalbaar van pilot naar volwaardig greenfield zonder extra grondbeslag, passend bij de netbehoefte en ruimtelijke besluitvorming.
          </p>
        </div>

        {/* 4 Phase Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {TIMELINE_PHASES.map((phase, idx) => {
            const isSelected = selectedPhase === idx;
            return (
              <button
                key={phase.number}
                type="button"
                onClick={() => setSelectedPhase(idx)}
                className={`text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#509799] ring-2 ring-[#509799]/20'
                    : 'bg-white/75 border-[#E9E4D8] hover:bg-white hover:border-[#1F2928]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-bold text-[#509799]">Fase {phase.number}</span>
                    <span className="tabular-nums text-[#1F2928]/70">{phase.period}</span>
                  </div>
                  <div className="text-base font-bold text-[#1F2928] leading-snug">
                    {phase.title}
                  </div>
                  <div className="text-xs text-[#557A64] mt-1 font-medium">{phase.focus}</div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E9E4D8]/70 flex items-center justify-between text-xs">
                  <span className="text-[#1F2928]/60">{phase.statusLabel}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#509799] translate-x-1' : 'text-[#1F2928]/30'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Details */}
        <div className="bg-white rounded-2xl border border-[#E9E4D8] p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#E9E4D8]">
            <div>
              <div className="text-xs font-mono font-bold text-[#509799] mb-1 tabular-nums">
                Fase {TIMELINE_PHASES[selectedPhase].number} · {TIMELINE_PHASES[selectedPhase].period}
              </div>
              <h3 className="text-2xl font-extrabold text-[#1F2928]">
                {TIMELINE_PHASES[selectedPhase].title}
              </h3>
              <p className="text-sm text-[#557A64] font-medium mt-1">
                Focus: {TIMELINE_PHASES[selectedPhase].focus}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1F2928]/80">
              <Calendar className="w-4 h-4 text-[#509799]" />
              <span className="tabular-nums">Horizon: {TIMELINE_PHASES[selectedPhase].period}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {TIMELINE_PHASES[selectedPhase].items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F8F6] border border-[#E9E4D8]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#509799] shrink-0 mt-0.5" />
                <span className="text-sm text-[#1F2928] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-white border border-[#E9E4D8] flex items-start gap-3 text-xs sm:text-sm text-[#1F2928]/75">
          <Info className="w-4 h-4 text-[#509799] shrink-0 mt-0.5" />
          <p>
            Deze fasering is indicatief en bedoeld als leidraad in de consultatiefase. Uitwerking gebeurt gezamenlijk aan de Samenwerkingstafel met gemeente Harderwijk, netbeheerders en stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
};
