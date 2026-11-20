import React from 'react';
import { BatteryCharging, Flame, Leaf, Train, Compass, ArrowUpRight } from 'lucide-react';

interface FuturePerspectiveProps {
  onOpenContact?: () => void;
}

export const FuturePerspective: React.FC<FuturePerspectiveProps> = ({ onOpenContact }) => {
  const pillars2030 = [
    {
      title: 'Kortcyclisch balanceren (BESS)',
      description:
        'Batterijopslag vangt snelle pieken op rond het 150kV HS-station Harderwijk en verlaagt de netbelasting via TDTR-contracten.',
      icon: BatteryCharging
    },
    {
      title: 'Seizoensbuffering (LDES & H2)',
      description:
        'Rond 2030–2040 fungeert de energie eco-keten als Long-Duration Energy Storage: H2-productie en -opslag voor meerdaagse buffering.',
      icon: Flame
    },
    {
      title: 'Spoor & Hynetwork-koppeling',
      description:
        'Afvoer van waterstof per spoor als startpunt, met uitzicht op aansluiting op de Gasunie Hynetwork-buisleiding (10–15 jaar) en spooronderdoorgang (2040).',
      icon: Train
    },
    {
      title: 'Paris Proof · People, Planet, Profit',
      description:
        'Bijdragen aan een circulaire toekomst waarin economie, leefomgeving en ecologie richting Harderwijk en de Noord-Veluwe in balans zijn.',
      icon: Leaf
    }
  ];

  return (
    <section id="toekomst" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#1F2928] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          {/* Left Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#63B9BB] mb-3">
                <Compass className="w-4 h-4" />
                <span>De Zandlaan 2030 – 2040</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance break-words">
                Van productiegebied naar Long-Duration Energie-ecosysteem
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#E9E4D8]/85 leading-relaxed">
                Circul8 Development en VOVON Development maken werk van energie in gebiedsontwikkeling om perspectief te bieden voor de toekomst van de leefomgeving. Rond 2030–2040 kan de Zandlaan fungeren als een energie eco-keten voor het regionale net.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#E9E4D8]/75 leading-relaxed">
                Niets doen betekent dat het gebied niet optimaal gebruikt wordt of onnodig verrommelt. Ondernemers in het gebied willen graag dat de Zandlaan weer meer van Harderwijk wordt en dragen bij door locaties in te brengen.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-[#63B9BB] font-semibold">Gebiedsmotto</div>
                <div className="text-lg font-bold text-white">“The Entree — Doet u mee?”</div>
              </div>

              {onOpenContact && (
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#63B9BB] hover:bg-white text-[#1F2928] text-sm font-bold transition-colors whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Doe mee in versie 0.4</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-auto lg:min-h-full rounded-2xl overflow-hidden border border-white/15 bg-[#141C1B]">
              <img
                src="/assets/zandlaan/zandlaan_2030_skyline.jpg"
                alt="De Zandlaan 2030 - Energie-ecosysteem en hoogspanningsnetwerk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center lg:h-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-14">
                <div className="text-xs font-semibold text-[#63B9BB]">
                  Energie-ecosysteem Noord-Veluwe
                </div>
                <p className="text-sm text-white/90 mt-0.5">
                  Long-Duration Energy Storage (LDES): batterijen voor korte cycli, waterstof voor seizoensbuffering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Future Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars2030.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-9 h-9 rounded-lg bg-[#63B9BB]/15 text-[#63B9BB] flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#E9E4D8]/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
