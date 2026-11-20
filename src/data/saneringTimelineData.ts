export interface ZandlaanMilestone {
  id: string;
  date: string;
  shortDate: string;
  shortTitle: string;
  era: 'historie' | '2025-2026' | '2027-2030' | '2030-2040';
  title: string;
  categoryLabel: string;
  badge: string;
  iconKey:
    | 'compass'
    | 'scale'
    | 'send'
    | 'fileCheck'
    | 'landmark'
    | 'zap'
    | 'building'
    | 'wrench'
    | 'plugZap'
    | 'megaphone'
    | 'layers';
  description: string;
  highlight?: boolean;
  isCurrent?: boolean;
  note?: string;
}

export const ZANDLAAN_MILESTONES: ZandlaanMilestone[] = [
  {
    id: 'historie-1950',
    date: 'Jaren ’50 – 2024',
    shortDate: 'Jaren ’50+',
    shortTitle: 'Zand & Hout',
    era: 'historie',
    title: 'Van zandwinning en spoorlogistiek naar bedrijvigheid',
    categoryLabel: 'Historische Basis',
    badge: 'Oorsprong Zandlaan',
    iconKey: 'layers',
    description:
      'Vanaf de jaren ’50 werd aan de Zandlaan zand gewonnen en vervoerd voor de uitbreiding van Harderwijk. Met de spoorlijn, de N302, Vormingscentrum De Kuil (elektrotechniek) en de houthandel groeide een praktische, energieke werkzone.',
    note: 'Basis voor de transformatie: van zand en hout naar schone stroom.'
  },
  {
    id: 'verkenning-2025',
    date: '2025',
    shortDate: '2025',
    shortTitle: 'Verkenning',
    era: '2025-2026',
    title: 'Start gebiedsverkenning De Zandlaan — The Entree',
    categoryLabel: 'Visievorming',
    badge: 'Initiatief Circul8 & VOVON',
    iconKey: 'compass',
    description:
      'Initiatiefnemers Circul8 Development en VOVON Development signaleren de strategische kruising tussen het 150kV HS-station Harderwijk, het middenspanningsnet (20–50kV), het FGU-gasnet, het spoor en de A28.',
    note: 'Eerste inventarisatie van koppelkansen met lokale ondernemers.'
  },
  {
    id: 'motie-dec-2025',
    date: '18 december 2025',
    shortDate: '18 dec ’25',
    shortTitle: 'Motie 29-023',
    era: '2025-2026',
    title: 'Tweede Kamer Motie 29-023 nr. 261 aangenomen',
    categoryLabel: 'Landelijk Beleid',
    badge: 'Leveringszekerheid',
    iconKey: 'scale',
    highlight: true,
    description:
      'Aangenomen motie over voorzienings- en leveringszekerheid van energie. Erkent dat de FGU-regio het meest urgent is qua netcongestie en vraagt om meer experimenteerruimte in de vorm van innovatiegebieden.',
    note: 'Directe beleidsrugdekking voor proeftuin Zandlaan.'
  },
  {
    id: 'consultatie-nov-2026',
    date: 'November 2026',
    shortDate: 'Nov ’26',
    shortTitle: 'Versie 0.3',
    era: '2025-2026',
    title: 'Ambitiedocument versie 0.3 — Consultatiefase',
    categoryLabel: 'Huidige Mijlpaal',
    badge: '80% Versie',
    iconKey: 'fileCheck',
    highlight: true,
    isCurrent: true,
    description:
      'Publicatie van de geactualiseerde 80%-versie van het Ambitiedocument met vijf concrete voorstellen voor Energie & Landschap, Community, Techniek, Nettopologie en de Samenwerkingstafel.',
    note: 'Uitnodiging aan gemeente Harderwijk, TenneT, Liander en ondernemers voor versie 0.4.'
  },
  {
    id: 'samenwerkingstafel-2026-2027',
    date: '2026 – 2027',
    shortDate: '2026/’27',
    shortTitle: 'Tafel & SPvE',
    era: '2027-2030',
    title: 'Oprichting Samenwerkingstafel & Ontwerpend Onderzoek',
    categoryLabel: 'Bestuur & Kaders',
    badge: 'Publiek-Privaat',
    iconKey: 'landmark',
    description:
      'Opzetten van een vaste overlegstructuur met gemeente Harderwijk, TenneT, Liander, Gasunie, ondernemers en onderwijs. Vertaling naar Stedenbouwkundig Programma van Eisen (SPvE) en afstemming op de Omgevingsvisie.',
    note: 'Geïnspireerd op het model van Renewable Energyhub Flevoland (REF).'
  },
  {
    id: 'contracten-2027-2028',
    date: '2027 – 2028',
    shortDate: '2027/’28',
    shortTitle: 'TDTR & CSC',
    era: '2027-2030',
    title: 'Toetsing TDTR- & CSC-contracten en Haalbaarheid (GO)',
    categoryLabel: 'Net & Businesscase',
    badge: 'Investeringsagenda',
    iconKey: 'plugZap',
    description:
      'Onderzoek met TenneT en Liander naar Tijdsduurgebonden Transportrechten (TDTR) en Capaciteitssturende Contracten (CSC) om batterijen en elektrolyse rendabel op restruimte aan te sluiten.',
    note: 'Financiële, ruimtelijke en technische haalbaarheidstoets per perceel.'
  },
  {
    id: 'bess-opgave-2030',
    date: 'Tot 2030',
    shortDate: '2030',
    shortTitle: '50–250 MW Hub',
    era: '2027-2030',
    title: 'Realisatie BESS-zone, Mobilityhub & Living Lab',
    categoryLabel: 'TenneT Routekaart',
    badge: '1–4 Hectare',
    iconKey: 'zap',
    highlight: true,
    description:
      'Bijdrage aan TenneT’s FGU-behoefte (1.000–2.000 MW totaal; 50–250 MW rond HS-station Harderwijk) gecombineerd met logistieke EV/H2-laadinfra en aFRR-gestuurde elektrolyse met spoorafvoer.',
    note: '40–60% minder investeringen in reguliere netverzwaring.'
  },
  {
    id: 'ldes-2030-2040',
    date: '2030 – 2040+',
    shortDate: '2030–’40',
    shortTitle: 'LDES & Spoor',
    era: '2030-2040',
    title: 'Long-Duration Storage (LDES), Hynetwork & Spoorondertunneling',
    categoryLabel: 'Lange Termijn Visie',
    badge: 'Paris Proof',
    iconKey: 'building',
    description:
      'De Zandlaan fungeert als energie eco-keten met kortcyclische batterijen en seizoensbuffering in waterstof, aangesloten op de Hynetwork-buisleiding (10–15 jaar) en verbonden via een spooronderdoorgang rond 2040.',
    note: 'Doel: People, Planet, Profit — circulair en toekomstbestendig.'
  }
];
