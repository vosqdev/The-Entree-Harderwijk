import React from 'react';
import { STATUS_STEPS, PDF_DOCUMENT_URL } from '../data/projectData';
import { Activity, CheckCircle2, Clock, CircleDot, ShieldAlert, FileText } from 'lucide-react';

export const ProjectStatusSection: React.FC = () => {
  return (
    <section id="status" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#509799] mb-3">
              <Activity className="w-4 h-4" />
              <span>Status &amp; Transparantie · Ambitiedocument v0.3</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
              Waar staat het initiatief nu?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
              Voor u ligt versie 0.3 (een 80%-versie, update november 2026) in de consultatiefase. Dit document vormt een leidraad om in de komende maanden het gesprek te voeren met gemeente Harderwijk, netbeheerders en stakeholders.
            </p>
          </div>

          <a
            href={PDF_DOCUMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E9E4D8] hover:border-[#509799] text-sm font-semibold text-[#1F2928] transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <FileText className="w-4 h-4 text-[#509799]" />
            <span>Open Ambitiedocument v0.3 (PDF)</span>
          </a>
        </div>

        {/* Formal Notice */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-white border border-[#99336F]/30 flex flex-col sm:flex-row items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#99336F] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-bold text-[#1F2928]">
              Consultatiefase · Nog geen formeel besluit of vergunning
            </h3>
            <p className="text-xs sm:text-sm text-[#1F2928]/80 mt-1 leading-relaxed">
              Dit ambitiedocument is een uitnodiging om samen de volgende stap te zetten. Gemeente Harderwijk, TenneT, Liander en grondeigenaren hebben nog geen definitieve besluiten genomen. Meedenken over versie 0.4? Wij stellen graag een volgende versie samen met u op.
            </p>
          </div>
        </div>

        {/* 6 Status Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STATUS_STEPS.map((step) => {
            const isCompleted = step.state === 'completed';
            const isInProgress = step.state === 'in_progress';
            const isPlanned = step.state === 'planned';

            return (
              <div
                key={step.step}
                className={`rounded-xl border p-6 flex flex-col justify-between ${
                  isInProgress
                    ? 'bg-white border-[#509799] ring-2 ring-[#509799]/20'
                    : isCompleted
                    ? 'bg-white border-[#557A64]/40'
                    : 'bg-white/75 border-[#E9E4D8]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-mono font-bold text-[#1F2928]/50 tabular-nums">
                      Stap {step.step} van 6
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 font-semibold ${
                        isCompleted
                          ? 'text-[#557A64]'
                          : isInProgress
                          ? 'text-[#509799]'
                          : isPlanned
                          ? 'text-[#D97706]'
                          : 'text-[#1F2928]/55'
                      }`}
                    >
                      {isCompleted && <CheckCircle2 className="w-3.5 h-3.5" />}
                      {isInProgress && <CircleDot className="w-3.5 h-3.5" />}
                      {isPlanned && <Clock className="w-3.5 h-3.5" />}
                      <span>
                        {isCompleted
                          ? 'Afgerond'
                          : isInProgress
                          ? 'Huidige fase'
                          : isPlanned
                          ? 'Voorgenomen'
                          : 'Nog te starten'}
                      </span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#1F2928]">{step.title}</h4>
                  <div className="text-xs font-semibold text-[#509799] mt-1">
                    {step.statusText}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
                    {step.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
