import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenStatus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStatus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { label: 'Historie', href: '#historie' },
    { label: 'Locatie', href: '#locatie' },
    { label: 'Voorstellen', href: '#voorstellen' },
    { label: 'Techniek', href: '#techniek' },
    { label: 'Samenwerking', href: '#samenwerking' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F7F8F6]/95 backdrop-blur-md border-b border-[#E9E4D8] py-3 shadow-xs'
          : 'bg-[#F7F8F6]/85 backdrop-blur-xs border-b border-[#E9E4D8]/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6 lg:gap-8">
          {/* Zone 1: Single-line Brand wordmark */}
          <a
            href="#"
            className="text-sm sm:text-lg font-bold tracking-tight text-[#1F2928] hover:text-[#509799] transition-colors whitespace-nowrap shrink-0 font-display"
          >
            Zandlaan · The Entree
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav aria-label="Hoofdnavigatie" className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#1F2928]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#509799] transition-colors py-1 whitespace-nowrap shrink-0 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#509799] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenStatus}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#1F2928] hover:bg-[#509799] transition-colors rounded-lg whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Consultatiefase</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/75 shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1F2928] hover:bg-[#E9E4D8]/60 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobiele navigatie"
            className="lg:hidden mt-3 pt-3 border-t border-[#E9E4D8] pb-4 px-2 space-y-1.5 bg-[#F7F8F6] rounded-b-xl max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#1F2928] hover:bg-[#E9E4D8]/40 hover:text-[#509799] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStatus();
                }}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#509799] hover:bg-[#1F2928] transition-colors rounded-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Bekijk Consultatiefase (v0.3)</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
