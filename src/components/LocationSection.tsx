import React, { useState, useEffect } from 'react';
import { MapPin, Maximize2, X, ZoomIn, Quote, ArrowUpRight, Layers } from 'lucide-react';
import { ZANDLAAN_ZONES } from '../data/projectData';

interface LocationSectionProps {
  onOpenContact?: () => void;
}

type MapTabId = 'zonering' | 'voorstel1' | 'lokaal' | 'regionaal';

interface MapViewOption {
  id: MapTabId;
  label: string;
  title: string;
  imageUrl: string;
  caption: string;
  detail: string;
}

const MAP_VIEWS: MapViewOption[] = [
  {
    id: 'zonering',
    label: 'Zonering Greenfield',
    title: 'Mogelijke locatieontwikkelingen: BESS, H2, Logistiek & Groen',
    imageUrl: '/assets/zandlaan/zandlaan_zones_map.jpg',
    caption: 'Indeling in H2-zone, BESS-zone nabij HS-station Harderwijk, Logistiek-zone, Mixed-Use en Groene mobiliteitszone.',
    detail: 'In lijn met TenneT-richtlijnen: reservering van een BESS-zone als voorkeursgebied voor batterijen in de omgevingsvisie.'
  },
  {
    id: 'voorstel1',
    label: 'Ruimtelijk Concept',
    title: 'Voorstel 1: Verbinding met Lorentz, Wonen, Parkzone & Eendenbuiten',
    imageUrl: '/assets/zandlaan/zandlaan_voorstel1_map.jpg',
    caption: 'Overgangszone tussen bedrijventerrein Lorentz, Overveld, de spoorlijn en het groene buitengebied richting Hierden.',
    detail: 'Inclusief toekomstige invulling met een spooronderdoorgang (horizon 2040) tussen natuur, bedrijvigheid en woningbouw.'
  },
  {
    id: 'lokaal',
    label: 'Lokaal Energienet',
    title: 'Lokale infrastructuren, energienetwerken en verbindingen',
    imageUrl: '/assets/zandlaan/zandlaan_local_grid_map.jpg',
    caption: 'Strategische ligging tussen N302 (Knardijk), spoorlijn, A28 en LS/MS-, MS-, 50kV- en HS-tracés.',
    detail: 'De as van Lorentz-corridor en A28 richting het spoor groeit uit tot de energetische ruggengraat van Harderwijk.'
  },
  {
    id: 'regionaal',
    label: 'Regionale Knooppunten',
    title: 'Regionale infrastructuur: Flevoland, Harderwijk, Nunspeet & Veluwe',
    imageUrl: '/assets/zandlaan/zandlaan_regional_grid_map.jpg',
    caption: 'Verbinding tussen 150kV-station HD150, Gasunie-netwerk, N302, A28 en het spoor tussen Flevoland en de Veluwe.',
    detail: 'Het TenneT-net rond Harderwijk vormt de energetische snelweg tussen Flevoland, de Noord-Veluwe en de Randstad.'
  }
];

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenContact }) => {
  const [activeMap, setActiveMap] = useState<MapTabId>('zonering');
  const [activeZoneId, setActiveZoneId] = useState<string>(ZANDLAAN_ZONES[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentMap = MAP_VIEWS.find((m) => m.id === activeMap) ?? MAP_VIEWS[0];
  const activeZone = ZANDLAAN_ZONES.find((z) => z.id === activeZoneId) ?? ZANDLAAN_ZONES[0];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    if (lightboxOpen) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen]);

  return (
    <section id="locatie" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#557A64] mb-3">
              <MapPin className="w-4 h-4 text-[#509799]" />
              <span>Analyse Zandlaan Gebied · Harderwijk in haar context</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight text-balance">
              Waar ruimte, energie en mobiliteit elkaar kruisen
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed max-w-3xl">
              De Zandlaan ligt ingeklemd tussen bedrijventerrein Lorentz (noord), de spoorlijn (oost), de N302 (zuid) en het open landschap richting Hierden (west). Vandaag functioneel maar versnipperd; morgen een samenhangend energielandschap rond het 150kV HS-onderstation Harderwijk.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl border border-[#E9E4D8] p-5">
              <div className="text-xs font-semibold text-[#99336F] mb-1">
                Beleidsurgentie · FGU-regio
              </div>
              <p className="text-xs sm:text-sm text-[#1F2928]/80 leading-relaxed">
                De FGU-regio is het meest urgent bij netcongestie. Tweede Kamer-motie <strong>29-023 nr. 261</strong> (18 dec 2025) vraagt om innovatiegebieden voor versneld congestiemanagement.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Map Switcher Card */}
        <div className="bg-white rounded-2xl border border-[#E9E4D8] p-4 sm:p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E9E4D8]">
            {/* Functional Segmented Map Filter Tabs */}
            <div
              className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1 p-1 bg-[#F7F8F6] rounded-xl border border-[#E9E4D8]"
              role="tablist"
              aria-label="Kies kaartweergave van de Zandlaan"
            >
              {MAP_VIEWS.map((tab) => {
                const isSelected = activeMap === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveMap(tab.id)}
                    className={`px-3 sm:px-3.5 py-2.5 sm:py-2 rounded-lg text-xs font-semibold transition-colors text-center sm:whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1F2928] text-white'
                        : 'text-[#1F2928]/70 hover:text-[#1F2928]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-2 rounded-lg border border-[#E9E4D8] bg-[#F7F8F6] hover:border-[#509799] text-xs font-semibold text-[#1F2928] transition-colors whitespace-nowrap shrink-0 self-stretch sm:self-start md:self-auto cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#509799]" />
              <span>Vergroot kaart</span>
            </button>
          </div>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Map Frame */}
            <div className="lg:col-span-8">
              <div
                onClick={() => setLightboxOpen(true)}
                className="group relative rounded-xl overflow-hidden bg-[#FAF9F5] border border-[#E9E4D8] cursor-zoom-in"
              >
                <img
                  src={currentMap.imageUrl}
                  alt={currentMap.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[540px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#1F2928]/85 text-white text-xs font-medium inline-flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                  <ZoomIn className="w-3.5 h-3.5 text-[#63B9BB]" />
                  <span>Klik om te vergroten</span>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-1 text-xs text-[#1F2928]/70">
                <span className="font-semibold text-[#1F2928]">{currentMap.title}</span>
                <span>{currentMap.caption}</span>
              </div>
            </div>

            {/* Right Interactive Zones Breakdown */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#F7F8F6] rounded-xl border border-[#E9E4D8] p-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#509799] mb-3">
                  <Layers className="w-4 h-4" />
                  <span>Deelgebieden &amp; Zones op de Zandlaan</span>
                </div>

                {/* Zone selector buttons */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ZANDLAAN_ZONES.map((zone) => {
                    const active = zone.id === activeZone.id;
                    return (
                      <button
                        key={zone.id}
                        type="button"
                        onClick={() => setActiveZoneId(zone.id)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
                          active
                            ? 'bg-[#1F2928] text-white border-[#1F2928]'
                            : 'bg-white text-[#1F2928]/80 border-[#E9E4D8] hover:border-[#509799]'
                        }`}
                      >
                        {zone.name.split(' (')[0]}
                      </button>
                    );
                  })}
                </div>

                <h3 className="text-lg font-bold text-[#1F2928]">{activeZone.name}</h3>
                <p className="mt-2 text-sm text-[#1F2928]/80 leading-relaxed">
                  {activeZone.description}
                </p>

                <div className="mt-4 pt-4 border-t border-[#E9E4D8]">
                  <div className="text-xs font-semibold text-[#557A64] mb-1">
                    Ruimtelijke &amp; energetische rol
                  </div>
                  <p className="text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
                    {activeZone.spatialRole}
                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  {activeZone.elements.map((el) => (
                    <li
                      key={el}
                      className="text-xs text-[#1F2928]/85 flex items-start gap-2"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: activeZone.color }}
                      />
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E9E4D8] text-xs text-[#1F2928]/70">
                {currentMap.detail}
              </div>
            </div>
          </div>
        </div>

        {/* Attributable External Endorsement (Claim-to-Proof Adjacency) */}
        <div className="bg-[#1F2928] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#63B9BB] mb-2">
              <Quote className="w-4 h-4" />
              <span>Reflectie uit de waterstof- en energieketen</span>
            </div>
            <blockquote className="text-base sm:text-xl font-medium text-white leading-relaxed">
              “Een mooi voorbeeld van omdenken hoe je samen alle mogelijkheden onderzoekt om dit initiatief te kunnen ontwikkelen. Zowel de manier van productie als de afzet. De beoogde aanpak heeft absoluut potentie!”
            </blockquote>
            <div className="mt-3 text-xs sm:text-sm text-[#E9E4D8]/80">
              <strong className="text-white">Peter Bosma</strong>
              <span aria-hidden="true" className="mx-2 text-white/30">·</span>
              <span>Business Development Hydrogen, Gasunie (namens Hynetwork)</span>
            </div>
          </div>

          {onOpenContact && (
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#63B9BB] hover:bg-white text-[#1F2928] text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Deel uw perspectief</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen Map Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col p-4 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/15 text-white">
            <span className="text-sm font-semibold truncate min-w-0">{currentMap.title}</span>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0 cursor-pointer"
              aria-label="Sluit kaartweergave"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div
            className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentMap.imageUrl}
              alt={currentMap.title}
              referrerPolicy="no-referrer"
              className="max-h-[84vh] max-w-full w-auto h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
