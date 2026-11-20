import React from 'react';
import { Mail, ArrowUp, FileText } from 'lucide-react';
import { PDF_DOCUMENT_URL } from '../data/projectData';

interface FooterProps {
  onOpenContact: () => void;
  onOpenStatus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenStatus }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#17201F] text-white border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Initiatiefnemers */}
          <div className="md:col-span-2 lg:col-span-5 space-y-4">
            <div className="text-xl font-bold tracking-tight text-white font-display">
              Smart Energyhub Zandlaan · The Entree
            </div>
            <div className="text-xs font-semibold text-[#63B9BB]">
              Harderwijk · Noord-Veluwe · Ambitiedocument v0.3 (november 2026)
            </div>
            <p className="text-xs sm:text-sm text-[#E9E4D8]/75 leading-relaxed max-w-md">
              Een initiatief van <strong>Circul8 Development</strong> en <strong>VOVON Development</strong> om samen met gemeente Harderwijk, netbeheerders en stakeholders de Zandlaan te ontwikkelen tot een toekomstbestendige energiehub.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#509799] hover:bg-[#63B9BB] hover:text-[#1F2928] text-white transition-colors cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Deel uw ambities (versie 0.4)</span>
              </button>

              <a
                href={PDF_DOCUMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <FileText className="w-3.5 h-3.5 text-[#63B9BB]" />
                <span>Ambitiedocument PDF</span>
              </a>
            </div>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-1 lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#E9E4D8]/60">Onderdelen</div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E9E4D8]/80">
              <li><a href="#historie" className="hover:text-[#63B9BB] transition-colors">Historie Zandlaan</a></li>
              <li><a href="#locatie" className="hover:text-[#63B9BB] transition-colors">Analyse &amp; Zonering</a></li>
              <li><a href="#voorstellen" className="hover:text-[#63B9BB] transition-colors">De 5 Voorstellen</a></li>
              <li><a href="#techniek" className="hover:text-[#63B9BB] transition-colors">Referentiebeelden Techniek</a></li>
              <li><a href="#proces" className="hover:text-[#63B9BB] transition-colors">Routekaart 2025–2040</a></li>
              <li><a href="#toekomst" className="hover:text-[#63B9BB] transition-colors">De Zandlaan 2030</a></li>
              <li><a href="#samenwerking" className="hover:text-[#63B9BB] transition-colors">Samenwerkingstafel</a></li>
              <li><a href="#faq" className="hover:text-[#63B9BB] transition-colors">Veelgestelde vragen</a></li>
            </ul>
          </div>

          {/* Locatie & Disclaimer */}
          <div className="md:col-span-1 lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-[#E9E4D8]/60">Gebiedsgegevens &amp; Disclaimer</div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-[#E9E4D8]/80">
              <div className="flex justify-between gap-2">
                <span className="text-[#E9E4D8]/50">Gebied:</span>
                <span className="font-semibold text-white text-right">De Zandlaan, Harderwijk</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[#E9E4D8]/50">Corridors:</span>
                <span className="text-right">A28 · N302 · Spoorlijn</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[#E9E4D8]/50">Netwerk:</span>
                <span className="text-[#63B9BB] font-semibold text-right">150kV HS-station · MS · FGU gas</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[#E9E4D8]/50">Initiatief:</span>
                <span className="text-right">Circul8 &amp; VOVON Development</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenStatus}
              className="w-full text-center py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-[#63B9BB] border border-white/10 transition-colors cursor-pointer"
            >
              Status consultatiefase v0.3 bekijken →
            </button>
          </div>
        </div>

        {/* Bottom Legal Disclaimer from Page 31 */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#E9E4D8]/55 gap-4">
          <p className="max-w-3xl leading-relaxed">
            © 2026 Smart Energyhub Zandlaan — Circul8 Development &amp; VOVON Development. De afgebeelde gegevens, waaronder teksten, foto’s, beeldmerken, (handels)namen en logo’s, zijn puur ter illustratie en vallen onder de disclaimer uit het Ambitiedocument v0.3.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#E9E4D8]/75 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Naar boven</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
