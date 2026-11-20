import React, { useState, useEffect } from 'react';
import { X, Building2, Mail, ExternalLink, CheckCircle2, Send, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NETLIFY_FORM_NAME = 'contact-zandlaan';

function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [ambition, setAmbition] = useState('');
  const [botField, setBotField] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setName('');
    setOrganization('');
    setEmail('');
    setAmbition('');
    setBotField('');
    setError(null);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleResetAndClose();
    };
    window.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedAmbition = ambition.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedName) {
      setError('Vul alstublieft uw naam in.');
      return;
    }
    if (!emailValid) {
      setError('Vul alstublieft een geldig e-mailadres in.');
      return;
    }
    if (!trimmedAmbition) {
      setError('Beschrijf kort uw ambitie, plan of aandachtspunt voor De Zandlaan.');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': NETLIFY_FORM_NAME,
          'bot-field': botField,
          name: trimmedName,
          organization: organization.trim(),
          email: trimmedEmail,
          ambition: trimmedAmbition,
        }),
      });

      const isPreviewHost =
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname.endsWith('.run.app');

      if (!response.ok && !isPreviewHost) {
        throw new Error('Verzenden mislukt');
      }

      setSubmitted(true);
    } catch {
      setError(
        'Het verzenden via het formulier is tijdelijk niet gelukt. Probeer het opnieuw of gebruik de knop “Direct mailen”.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full max-h-[90dvh] overflow-y-auto p-5 sm:p-8 border border-[#E9E4D8] shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl text-[#1F2928]/60 hover:text-[#1F2928] hover:bg-[#F7F8F6] transition-colors cursor-pointer"
          aria-label="Sluiten"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pr-10 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#509799] mb-1">
            <Building2 className="w-4 h-4 shrink-0" />
            <span>Consultatiefase v0.3 · Uw Ambities</span>
          </div>
          <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-extrabold text-[#1F2928] tracking-tight">
            Ruimte voor uw ambities &amp; plannen
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
            Initiatief van <strong>Circul8 Development</strong> &amp; <strong>VOVON Development</strong>. Wilt u aanschuiven aan de Samenwerkingstafel of meedenken over versie 0.4? Deel hier uw inbreng.
          </p>
        </div>

        {submitted ? (
          <div className="p-5 sm:p-6 rounded-xl bg-[#F7F8F6] border border-[#557A64]/30 text-center space-y-3">
            <div className="w-11 h-11 rounded-full bg-[#557A64]/15 text-[#557A64] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#1F2928]">Uw reactie is verzonden</h4>
            <p className="text-xs sm:text-sm text-[#1F2928]/75 leading-relaxed">
              Dank u wel, <strong>{name}</strong>. Uw inbreng voor de Samenwerkingstafel Zandlaan is ontvangen. U kunt desgewenst ook rechtstreeks een e-mail sturen naar de initiatiefnemers.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-3">
              <a
                href={`mailto:pvos@c8.nl?subject=${encodeURIComponent(
                  'Consultatie Ambitiedocument Smart Energyhub Zandlaan'
                )}&body=${encodeURIComponent(
                  `Naam: ${name}\nOrganisatie/Rol: ${organization || '-'}\nE-mail: ${email}\n\nAmbitie / Reactie:\n${ambition}`
                )}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F2928] hover:bg-[#509799] text-white text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>Verzend ook via e-mail (pvos@c8.nl)</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-[#E9E4D8] text-xs font-semibold text-[#1F2928] cursor-pointer"
              >
                Sluiten
              </button>
            </div>
          </div>
        ) : (
          <form
            name={NETLIFY_FORM_NAME}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
            <p className="hidden" aria-hidden="true">
              <label>
                Laat dit veld leeg:{' '}
                <input
                  name="bot-field"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </p>

            {error && (
              <div role="alert" className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs font-medium text-rose-800">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-[#1F2928] mb-1">
                  Naam *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Uw naam"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F8F6] border border-[#E9E4D8] text-base sm:text-sm text-[#1F2928] focus:outline-none focus:border-[#509799]"
                />
              </div>
              <div>
                <label htmlFor="contact-organization" className="block text-xs font-semibold text-[#1F2928] mb-1">
                  Organisatie / Rol
                </label>
                <input
                  id="contact-organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Gemeente, ondernemer, onderwijs..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F8F6] border border-[#E9E4D8] text-base sm:text-sm text-[#1F2928] focus:outline-none focus:border-[#509799]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-[#1F2928] mb-1">
                E-mailadres *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="naam@organisatie.nl"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F8F6] border border-[#E9E4D8] text-base sm:text-sm text-[#1F2928] focus:outline-none focus:border-[#509799]"
              />
            </div>

            <div>
              <label htmlFor="contact-ambition" className="block text-xs font-semibold text-[#1F2928] mb-1">
                Uw ambities, vragen of aandachtspunten voor versie 0.4 *
              </label>
              <textarea
                id="contact-ambition"
                name="ambition"
                rows={4}
                required
                value={ambition}
                onChange={(e) => setAmbition(e.target.value)}
                placeholder="Bijv. locatie-inbreng, aansluitbehoefte, BESS/H2-koppeling, living lab met onderwijs of participatie..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F8F6] border border-[#E9E4D8] text-base sm:text-sm text-[#1F2928] focus:outline-none focus:border-[#509799]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#1F2928] hover:bg-[#509799] disabled:opacity-60 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verzenden...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Inbreng versturen</span>
                  </>
                )}
              </button>

              <a
                href="mailto:pvos@c8.nl?subject=Consultatie%20Smart%20Energyhub%20Zandlaan%20Harderwijk"
                className="w-full sm:w-auto py-3 px-4 rounded-xl text-sm font-semibold text-[#1F2928] bg-[#F7F8F6] hover:bg-[#E9E4D8]/60 border border-[#E9E4D8] transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4 text-[#509799]" />
                <span>Direct mailen</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
