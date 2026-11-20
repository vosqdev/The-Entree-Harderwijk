import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/projectData';
import { HelpCircle, ChevronDown, Search, X } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'algemeen' | 'techniek' | 'omgeving' | 'planning'>('all');

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F8F6] border-t border-[#E9E4D8]">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#557A64] mb-3">
            <HelpCircle className="w-4 h-4 text-[#509799]" />
            <span>Analyse-, Onderzoeks- &amp; Ontwerpfase · Ambitiedocument v0.3</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2928] tracking-tight">
            Veelgestelde vragen over De Zandlaan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2928]/75 leading-relaxed">
            Toelichting vanuit de huidige analyse-, onderzoeks- en ontwerpfase: welke kansen, varianten en aandachtspunten we nu verkennen en wat nog gezamenlijk wordt onderzocht aan de Samenwerkingstafel.
          </p>
        </div>

        {/* Search & Segmented Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#1F2928]/45 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Zoek in de vragen (bijv. BESS, waterstof, TDTR, aFRR, spoor, Samenwerkingstafel)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-white border border-[#E9E4D8] text-base sm:text-sm text-[#1F2928] placeholder-[#1F2928]/45 focus:outline-none focus:ring-2 focus:ring-[#509799]/30 focus:border-[#509799]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Wis zoekopdracht"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1F2928]/50 hover:text-[#1F2928] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `Alle vragen (${FAQ_ITEMS.length})` },
              { id: 'algemeen', label: 'Algemeen & Locatie' },
              { id: 'techniek', label: 'BESS, H2 & TDTR' },
              { id: 'omgeving', label: 'Omgeving & Mobiliteit' },
              { id: 'planning', label: 'Consultatie & Proces' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as 'all' | 'algemeen' | 'techniek' | 'omgeving' | 'planning')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1F2928] text-white'
                    : 'bg-white border border-[#E9E4D8] text-[#1F2928]/75 hover:border-[#509799]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-xl border border-[#E9E4D8] text-sm text-[#1F2928]/65">
              Geen vragen gevonden voor uw zoekopdracht. Probeer een andere term.
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition-colors overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#509799]'
                      : 'bg-white border-[#E9E4D8] hover:border-[#1F2928]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-4 sm:p-6 text-left flex items-start justify-between gap-3 sm:gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-lg font-bold text-[#1F2928] tracking-tight leading-snug">
                      {item.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? 'bg-[#509799] text-white rotate-180' : 'bg-white border border-[#E9E4D8] text-[#1F2928]/60'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 text-sm sm:text-base text-[#1F2928]/80 leading-relaxed border-t border-[#E9E4D8]/60">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
