import React from 'react';
import {
  Users,
  Landmark,
  Zap,
  Compass,
  Building2,
  GraduationCap,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { STAKEHOLDERS } from '../data/projectData';

interface StakeholdersSectionProps {
  onOpenContact: () => void;
}

export const StakeholdersSection: React.FC<StakeholdersSectionProps> = ({ onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return Landmark;
      case 'Zap':
        return Zap;
      case 'Compass':
        return Compass;
      case 'Building2':
        return Building2;
      case 'GraduationCap':
        return GraduationCap;
      default:
        return Users;
    }
  };

  const samenwerkingstafelTaken = [
    'Sturing en uitvoering van ontwerpend onderzoek',
    'Vaste overlegstructuur opzetten met TenneT en Liander',
    'Betrekken van belangrijkste stakeholders en eindgebruikers',
    'Visie op het gebied “The Entree” gezamenlijk vormgeven',
    'Afspraken maken over organisatievorm (gebiedsmanagement)',
    'Verder brengen van het Ambitiedocument (naar versie 0.4+)',
    'Participatie i.s.m. gemeente Harderwijk en omgeving',
    'Communicatie- en living lab-trajecten organiseren'
  ];

  return (
    <section id="samenwerking" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E9E4D8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#509799] mb-3">
            <Users className="w-4 h-4" />
            <span>Voorstel 5 · Publiek-Private Samenwerking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight text-balance break-words">
            Oprichten van een Samenwerkingstafel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            Eendimensionale oplossingen voor energie gaan niet werken. Alleen door samen te werken rond de Zandlaan — geïnspireerd op voorbeelden als <strong>Renewable Energyhub Flevoland (REF)</strong> — maken we van losse percelen één samenhangend energiesysteem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Samenwerkingstafel Agenda Card */}
          <div className="lg:col-span-5 bg-[#F7F8F6] rounded-2xl border border-[#E9E4D8] p-6 sm:p-7">
            <div className="text-xs font-semibold text-[#509799] mb-1">
              Agenda van de Samenwerkingstafel
            </div>
            <h3 className="text-xl font-bold text-[#1F2928]">
              Van visie naar ontwerp &amp; uitvoering
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
              Circul8 Development en VOVON Development zijn bereid te initiëren en te regisseren, met gebruik van de expertise van alle lokale en regionale partners.
            </p>

            <ul className="mt-5 space-y-2.5">
              {samenwerkingstafelTaken.map((task) => (
                <li key={task} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2928]/85">
                  <CheckCircle2 className="w-4 h-4 text-[#509799] shrink-0 mt-0.5" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-[#E9E4D8]">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1F2928] hover:bg-[#509799] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Schuif aan bij de Samenwerkingstafel</span>
              </button>
            </div>
          </div>

          {/* Right: 6 Stakeholder Groups */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STAKEHOLDERS.map((group) => {
              const Icon = getIcon(group.iconName);
              return (
                <div
                  key={group.id}
                  className="bg-[#F7F8F6] rounded-xl border border-[#E9E4D8] p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E9E4D8] text-[#509799] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#1F2928] leading-snug">
                          {group.name}
                        </h4>
                        <div className="text-xs text-[#557A64]">{group.role}</div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#1F2928]/80 leading-relaxed">
                      {group.perspective}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E9E4D8] text-[11px] text-[#1F2928]/65">
                    {group.focalPoints.join(' · ')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
