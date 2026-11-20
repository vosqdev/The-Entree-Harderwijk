import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LocationSection } from './components/LocationSection';
import { WhyNetConscious } from './components/WhyNetConscious';
import { ProofOfConceptSection } from './components/ProofOfConceptSection';
import { NewsSection } from './components/NewsSection';
import { SaneringTimeline } from './components/SaneringTimeline';
import { FuturePerspective } from './components/FuturePerspective';
import { StakeholdersSection } from './components/StakeholdersSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StatusModal } from './components/StatusModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenStatus = () => setStatusModalOpen(true);
  const handleCloseStatus = () => setStatusModalOpen(false);

  const handleOpenContact = () => setContactModalOpen(true);
  const handleCloseContact = () => setContactModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F6] text-[#1F2928] selection:bg-[#63B9BB]/30">
      <Navbar onOpenStatus={handleOpenStatus} />

      <main className="flex-1">
        {/* 1. Proloog & Kernpropositie */}
        <Hero onOpenStatus={handleOpenStatus} />

        {/* 2. Rijke Historie: Van zand, hout tot stroom */}
        <NewsSection onOpenContact={handleOpenContact} />

        {/* 3. Analyse Zandlaan Gebied & Interactieve Kaarten + Gasunie Reflectie */}
        <LocationSection onOpenContact={handleOpenContact} />

        {/* 4. De 5 Voorstellen & Zes Ontwerpprincipes */}
        <WhyNetConscious />

        {/* 5. Referentiebeelden Techniek & Innovatie */}
        <ProofOfConceptSection />

        {/* 6. Routekaart Smart Energyhub Zandlaan */}
        <SaneringTimeline onOpenContact={handleOpenContact} />

        {/* 7. De Zandlaan 2030 (LDES & Paris Proof) */}
        <FuturePerspective onOpenContact={handleOpenContact} />

        {/* 9. Samenwerkingstafel & Belanghebbenden */}
        <StakeholdersSection onOpenContact={handleOpenContact} />

        {/* 10. Veelgestelde vragen */}
        <FaqSection />
      </main>

      <Footer onOpenContact={handleOpenContact} onOpenStatus={handleOpenStatus} />

      <StatusModal isOpen={statusModalOpen} onClose={handleCloseStatus} />
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}
