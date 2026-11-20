import React, { useEffect } from 'react';
import { X, ShieldAlert, CheckCircle2, Clock, CircleDot, FileText } from 'lucide-react';
import { STATUS_STEPS, PDF_DOCUMENT_URL } from '../data/projectData';

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StatusModal: React.FC<StatusModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90dvh] overflow-y-auto p-5 sm:p-8 border border-[#E9E4D8] shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="status-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl text-[#1F2928]/60 hover:text-[#1F2928] hover:bg-[#F7F8F6] transition-colors cursor-pointer"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pr-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#99336F] mb-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Ambitiedocument · Versie 0.3 (80% versie)</span>
          </div>
          <h3 id="status-modal-title" className="text-xl sm:text-2xl font-extrabold text-[#1F2928] tracking-tight">
            Status Consultatiefase — The Entree Zandlaan
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
            Dit document is een eerste stap en leidraad om de ambities te tonen. In de komende maanden gaan Circul8 Development en VOVON Development in gesprek met gemeente Harderwijk, TenneT, Liander, grondeigenaren en ondernemers om samen versie 0.4 op te stellen.
          </p>
        </div>

        <div className="mt-5 sm:mt-6 space-y-3">
          {STATUS_STEPS.map((step) => {
            const isCompleted = step.state === 'completed';
            const isInProgress = step.state === 'in_progress';
            const isPlanned = step.state === 'planned';

            return (
              <div
                key={step.step}
                className={`p-3.5 sm:p-4 rounded-xl border ${
                  isInProgress
                    ? 'bg-[#509799]/10 border-[#509799]'
                    : isCompleted
                    ? 'bg-[#F7F8F6] border-[#557A64]/40'
                    : 'bg-white border-[#E9E4D8] opacity-80'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#1F2928] flex items-center gap-2">
                    <span className="font-mono text-[#509799] tabular-nums">0{step.step}</span>
                    <span>{step.title}</span>
                  </span>

                  <span
                    className={`text-xs font-semibold inline-flex items-center gap-1 whitespace-nowrap ${
                      isCompleted
                        ? 'text-[#557A64]'
                        : isInProgress
                        ? 'text-[#509799]'
                        : isPlanned
                        ? 'text-[#D97706]'
                        : 'text-[#1F2928]/50'
                    }`}
                  >
                    {isCompleted && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {isInProgress && <CircleDot className="w-3.5 h-3.5" />}
                    {isPlanned && <Clock className="w-3.5 h-3.5" />}
                    <span>{step.statusText}</span>
                  </span>
                </div>
                <p className="text-xs text-[#1F2928]/80 leading-relaxed sm:pl-6">
                  {step.explanation}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#E9E4D8]">
          <a
            href={PDF_DOCUMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1F2928] bg-[#F7F8F6] hover:bg-[#E9E4D8]/60 border border-[#E9E4D8] transition-colors"
          >
            <FileText className="w-4 h-4 text-[#509799] shrink-0" />
            <span>Open volledig Ambitiedocument (PDF)</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1F2928] hover:bg-[#509799] transition-colors cursor-pointer"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};
