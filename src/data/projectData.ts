import { ZandlaanZone, ProposalItem, PhaseItem, StakeholderGroup, StatusStep, FaqItem } from '../types';

export const PDF_DOCUMENT_URL = '/assets/aistudio/LS_zandlaan_2026V0.3_ae62b5e9.pdf';

export const ZANDLAAN_ZONES: ZandlaanZone[] = [
  {
    id: 'bess-zone',
    name: 'BESS-zone (Energieopslag)',
    color: '#509799',
    description:
      'Reservering van een batterijopslagzone (BESS) op geringe afstand van het 150kV HS-station Harderwijk, conform TenneT-routekaart.',
    spatialRole:
      'Fungeert als kortcyclische buffer voor piekafvlakking, congestiemanagement en grid balancing rondom het overbelaste onderstation Harderwijk (50–250 MW opgave Noord-Veluwe, 1–4 hectare ruimtegebruik).',
    elements: [
      '110–150 kV systeembatterij of GDS co-locatie batterij',
      'Koppeling via TDTR- en CSC-contracten met TenneT en Liander',
      'Aanmerking als voorkeursgebied batterijen in omgevingsvisie',
      '40–60% minder investeringen in netverzwaring (schatting)'
    ]
  },
  {
    id: 'h2-zone',
    name: 'H2-zone (Waterstof & Power-to-X)',
    color: '#0284C7',
    description:
      'Locatie voor modulaire elektrolyse-installaties die overtollige duurzame elektriciteit omzetten in RFNBO-gecertificeerde groene waterstof.',
    spatialRole:
      'Geïnspireerd op de 20 MW HySynergy-elektrolyser in Denemarken: waterstof niet alleen als brandstof, maar als regelbare aFRR-netstabilisator met circa 5 minuten responstijd en meerdaagse seizoensopslag (LDES).',
    elements: [
      'Flexibele elektrolyse gekoppeld aan aFRR-balancering',
      'Afvoer per spoor als startpunt naast de spoorlijn',
      'Toekomstige aansluiting op Gasunie Hynetwork-buisleiding (10–15 jaar)',
      'Hergebruik restwarmte en zuurstof voor rioolzuivering en bebouwing'
    ]
  },
  {
    id: 'logistiek-mobiliteit',
    name: 'Logistiek & Groene Mobiliteitszone',
    color: '#059669',
    description:
      'Logistieke mobilityhub langs de A28-corridor en N302 met laadinfrastructuur voor zwaar en licht vervoer (EV en H2).',
    spatialRole:
      'Verbindt de A28, N302 en het spoor tot een multimodaal knooppunt met snelle en langzame verkeersroutes en slimme laadpleinen.',
    elements: [
      'Laadinfrastructuur voor zwaar vrachtverkeer (heavy-duty EV)',
      'Waterstoftankvoorziening en logistiek distributiecentrum (DC)',
      'Koppeling met openbaar vervoer en spoorcorridor',
      'Smart grid / DC-grid tussen opwek, opslag en laadplein'
    ]
  },
  {
    id: 'mixed-use',
    name: 'Mixed-Use & Poortgebouw "The Entree"',
    color: '#99336F',
    description:
      'Herkenbare entree langs de A28 en spoorzijde waar bedrijvigheid, onderwijs, innovatiedemonstratie en ontmoeting samenkomen.',
    spatialRole:
      'Transformeert de versnipperde Zandlaan van een verborgen bedrijventerrein naar een zichtbare bestemming en living lab voor mbo’s, hogescholen en mkb.',
    elements: [
      'Living lab en testlocaties voor onderwijs en MKB',
      'Ontmoetingsplek en toegangspoort langs A28 / N302',
      'Onderzoek naar verticale-as windopwek (o.a. Wingardium concept) en zon op daken',
      'Circulaire materialen en herkenbare gebiedsidentiteit'
    ]
  },
  {
    id: 'groen-blauw',
    name: 'Groen-Blauwe Zone & Parkzone',
    color: '#557A64',
    description:
      'Natuurinclusieve overgangszone met waterberging, ecologie en landschappelijke verbinding richting Hierden, Eendenbuiten en de Veluwe.',
    spatialRole:
      'Verbindt het stedelijke bedrijventerrein Lorentz met het groene buitengebied en bereidt de ruimtelijke structuur voor op een mogelijke spooronderdoorgang rond 2040.',
    elements: [
      'Waterberging, ecologische zones en recreatieve paden',
      'Overgang van Lorentz-corridor naar open landschap Hierden',
      'Toekomstige onderdoorgang spoor (horizon 2040)',
      'Natuur-inclusieve inpassing van technische energie-units'
    ]
  }
];

export const CONCRETE_PROPOSALS_10: string[] = [
  'Ontwikkel een energie- en innovatiezone waar productie, opslag en gebruik van duurzame energie samenkomen, met ruimte voor testlocaties voor onderwijs en mkb.',
  'Werk samen aan een integraal energieconcept waarin batterij-opslag, waterstofproductie en hergebruik van restwarmte elkaar versterken.',
  'Verbeter de ruimtelijke en visuele kwaliteit door herinrichting met aandacht voor groen, water en een herkenbare entree langs A28 en spoorzijde.',
  'Verbind bestaande en nieuwe gebiedsfuncties op een logische manier met kansen voor een nieuwe ontsluiting tussen bedrijventerreinen, spoor, A28 en landschap.',
  'Maak de overgang tussen energie- en bedrijfsfuncties aantrekkelijk door toevoeging van water, groen en ruimte voor ontmoeting en innovatiedemonstratie.',
  'Versterk de stedenbouwkundige structuur door logische verkaveling en routing, passend bij toekomstige uitbreiding van energie- en opslagvoorzieningen.',
  'Integreer duurzame mobiliteit: laadinfrastructuur voor zwaar en licht vervoer, snel- en langzaamverkeerroutes en koppeling met OV en spoor (logistieke mobilityhub met DC).',
  'Ontwikkel een gezamenlijk beheer- en exploitatiemodel (gebiedsmanagementorganisatie) met gemeente, netbeheerders en ondernemers.',
  'Zorg voor duidelijke fasering en regie op nieuwe initiatieven, zodat ruimtelijke en energetische ontwikkelingen in balans blijven.',
  'Borg duurzaamheid en identiteit door circulaire materialen, natuur-inclusieve inrichting en een herkenbare gebiedsidentiteit (“Smart Energyhub Zandlaan”).'
];

export const FIVE_PROPOSALS: ProposalItem[] = [
  {
    id: 'voorstel-1',
    number: '01',
    title: 'Energie & Landschap',
    subtitle: 'Energie-logica en Ruimte-logica verbinden',
    summary:
      'De Zandlaan ligt als schakel tussen stad, bedrijventerrein Lorentz, spoor, A28 en het open landschap richting Hierden. Door onderstation, trafo’s en opweklocaties ruimtelijk te koppelen aan groen, water en percelen ontstaat een energieruggengraat.',
    metrics: '40–60% minder netverzwaringsinvesteringen (schatting)',
    highlights: [
      'Minder gelijktijdigheid = minder pieken = minder netinvesteringen',
      'Slimmer combineren op gebieds- en perceelniveau = minder ruimtebeslag',
      'Ruimtelijke doorkijk naar onderdoorgang spoor (2040) tussen wonen, bedrijvigheid en natuur',
      'Gebouwde toegangspoort aan de Zandlaan als ontmoetingsplek waar techniek en mens samenkomen'
    ]
  },
  {
    id: 'voorstel-2',
    number: '02',
    title: 'Samenwerking & Community',
    subtitle: 'Living lab en haalbare energie-businesscase',
    summary:
      'Een verborgen bedrijventerrein transformeren tot het kloppend hart van de Noord-Veluwe. Overheid, netbeheerders, ondernemers, mbo’s, hogescholen en bewoners bouwen samen aan een mini-energiesysteem via open ontwerpend onderzoek.',
    metrics: 'TDTR- & CSC-contracten op restruimte',
    highlights: [
      'Living lab voor scholen, mbo’s en hogescholen waar theorie en praktijk samenkomen',
      'Batterijen en elektrolyse primair aangesloten op restruimte via TDTR-contracten',
      'Inzet op congestiemanagement en grid balancing zonder extra netinvesteringen',
      'Schaalbaar ontwerp van pilot naar volwaardig greenfield zonder extra grondbeslag'
    ]
  },
  {
    id: 'voorstel-3',
    number: '03',
    title: 'Techniek & Innovatie',
    subtitle: 'Multimodale hub & waterstof als netstabilisator',
    summary:
      'Strategisch gelegen tussen TenneT 150kV, Liander 20–50kV en stedelijke distributienetten. Door batterijen, smart/DC-grids, duurzame opwek en elektrolyse te combineren, fungeert de hub als bidirectionele buffer en netstabilisator.',
    metrics: '20 MW HySynergy-inspiratie · ~5 min aFRR respons',
    highlights: [
      'Smart grid / DC-grid voor lokale uitwisseling tussen opwek, BESS en EV/H2-laadpleinen',
      'Waterstofelektrolyse als regelbaar anker (up/down-regulation binnen ~5 min voor aFRR)',
      'Afvoer H2 per spoor als startpunt; op termijn aansluiting op Hynetwork-buisleiding (10–15 jaar)',
      'Hergebruik van restwarmte en zuurstof in nabijgelegen bebouwing en rioolzuivering'
    ]
  },
  {
    id: 'voorstel-4',
    number: '04',
    title: 'Ervaring & Inzet',
    subtitle: 'Geleerde lessen en TenneT batterij-opgave',
    summary:
      'In de FGU-regio is netcongestie het meest urgent in Nederland. Motie 29-023 nr. 261 (18 dec 2025) vraagt om experimenteerruimte en innovatiegebieden. Zandlaan kan direct bijdragen aan TenneT’s opslagbehoefte rond HS-station Harderwijk.',
    metrics: '50–250 MW Noord-Veluwe · 1–4 ha ruimtegebruik',
    highlights: [
      'FGU-regio behoefte TenneT: 1.000–2.000 MW batterijopslag tot 2030 (5–7 GW landelijk)',
      'Systeembatterij (110–150 kV nabij HS-station) én co-locatie batterij in Gesloten Distributiesysteem (GDS)',
      'Oplossing voor hoge transporttarieven: onderzoek naar TDTR en Capaciteitssturende Contracten (CSC)',
      'Praktijklessen: transparante netdata, haalbare doelen en kleinschalige clusters als startpunt'
    ]
  },
  {
    id: 'voorstel-5',
    number: '05',
    title: 'Doel, Product & Strategie',
    subtitle: 'Oprichten van een Samenwerkingstafel',
    summary:
      'Van losse percelen naar één samenhangend systeem. Met de oprichting van een Samenwerkingstafel nodigen Circul8 en VOVON gemeente Harderwijk, TenneT, Liander, ondernemers en onderwijs uit voor integraal gebiedsmanagement.',
    metrics: 'Geïnspireerd op Renewable Energyhub Flevoland (REF)',
    highlights: [
      'Sturing en uitvoering van gezamenlijk ontwerpend onderzoek voor The Entree',
      'Vaste overlegstructuur met netbeheerders en afstemming op de omgevingsvisie',
      'Opstellen van stedenbouwkundig programma van eisen en haalbaarheidstoets',
      'Doorontwikkelen van Ambitiedocument v0.3 naar investeringsagenda en realisatiestrategie'
    ]
  }
];

export const DESIGN_PRINCIPLES_6 = [
  {
    title: 'Kloppend hart van de regio',
    description: 'Mix van functies, behoud energie en versterk de ecologie rond de rand van Harderwijk en de Veluwe.'
  },
  {
    title: 'Hoge ruimtelijke kwaliteit',
    description: 'Inrichten van energielandschappen met uitstraling en identiteit, niet ad-hoc of generiek.'
  },
  {
    title: 'Nieuwe ontwerpprincipes',
    description: 'Van versnippering en verrommeling naar een positieve ruimtelijke en energetische impuls.'
  },
  {
    title: 'Hybride functiemenging',
    description: 'Nieuw systeemperspectief waarin productie, opslag, logistiek, onderwijs en natuur circulair samenkomen.'
  },
  {
    title: 'Richtinggevende concepten',
    description: 'Ontwikkelen van heldere ruimtelijke kaders en processen voor grote energietransitie-opgaven.'
  },
  {
    title: 'Innovatie in productie & opwek',
    description: 'Onderzoek naar passende duurzame opwek, conversie en opslagvormen voor de Zandlaan.'
  }
];

export const ROADMAP_STAGES = [
  {
    stage: 'Stap 1',
    title: 'Haalbaarheid: Visie op het gebied',
    horizon: '5–10 jaar perspectief',
    questions: [
      'Waar werken we naartoe? Visie voor de komende 5–10 jaar.',
      'Wat wordt het gebiedsprofiel, de identiteit en de rol van The Entree?',
      'Heldere doelen en ambities per locatie en perceel vastleggen.'
    ]
  },
  {
    stage: 'Stap 2',
    title: 'Business case: Ontwikkeling van het gebied',
    horizon: 'Programmatisch & Ruimtelijk Kader',
    questions: [
      'Vertaling van ambities en doelen in heldere ontwikkelprincipes en ruimtelijke kaders.',
      'Stedenbouwkundig Programma van Eisen (SPvE) voor energetische koppelingen.',
      'Afstemming op de gemeentelijke omgevingsvisie en regionale energiestrategie.'
    ]
  },
  {
    stage: 'Stap 3',
    title: 'GO: Voorbereiding & Uitwerking',
    horizon: 'Realisatiestrategie & Investeringsagenda',
    questions: [
      'Financiële, ruimtelijke en technische toets van de ontwikkelprincipes en het SPvE.',
      'Investeringsagenda per locatie en vertaling naar haalbare bouw- en gebruiksregels.',
      'Realisatiestrategie: wie realiseert welk onderdeel onder welke contractuele voorwaarden?'
    ]
  }
];

export const TIMELINE_PHASES: PhaseItem[] = [
  {
    number: '01',
    period: '2025 – 2026',
    title: 'Ambitiedocument & Consultatiefase',
    focus: 'Agendering & Samenwerkingstafel',
    statusLabel: 'Huidige fase (v0.3 nov 2026)',
    items: [
      'Analyse van het Zandlaan-gebied langs A28, N302 en spoorlijn',
      'Motie 29-023 nr. 261 (dec 2025) over experimenteerruimte bij netcongestie',
      'Consultaties met gemeente Harderwijk, TenneT, Liander, Gasunie en ondernemers',
      'Oprichting Samenwerkingstafel en uitwerking volgende versie met stakeholders'
    ]
  },
  {
    number: '02',
    period: '2026 – 2028',
    title: 'Ontwerpend Onderzoek & Haalbaarheid',
    focus: 'Kaders, TDTR-contracten & SPvE',
    statusLabel: 'Volgende stap',
    items: [
      'Ruimtelijke reservering BESS-zone nabij 150kV HS-station Harderwijk in omgevingsvisie',
      'Onderzoek naar TDTR- en Capaciteitssturende Contracten (CSC) voor rendabele opslag',
      'Opstellen Stedenbouwkundig Programma van Eisen (SPvE) en gebiedsmanagementmodel',
      'Inrichting living lab en testlocaties met mbo’s, hogescholen en lokaal mkb'
    ]
  },
  {
    number: '03',
    period: '2028 – 2030',
    title: 'Realisatie Multimodale Energyhub',
    focus: '50–250 MW BESS, Laadhub & Elektrolyse',
    statusLabel: 'Ontwikkelperspectief',
    items: [
      'Realisatie modulaire batterijopslag (systeembatterij 110–150 kV en/of GDS co-locatie)',
      'Logistieke mobilityhub met snellaadinfra voor zwaar en licht vervoer (EV en H2)',
      'Eerste fase waterstofproductie met aFRR-netbalancering en spoorafvoer',
      'Herkenbare entree “The Entree” met natuur-inclusieve groen-blauwe inpassing'
    ]
  },
  {
    number: '04',
    period: '2030 – 2040+',
    title: 'LDES Eco-keten & Spooronderdoorgang',
    focus: 'Seizoensopslag & Hynetwork-koppeling',
    statusLabel: 'Langetermijndoorkijk',
    items: [
      'Long-Duration Energy Storage (LDES): batterijen voor korte cycli, H2 voor seizoensbuffering',
      'Aansluiting van de waterstofproductie op Gasunie Hynetwork-buisleiding (10–15 jaar horizon)',
      'Mogelijke ondertunneling van het spoor (2040) als verbinding tussen Lorentz, stad en Veluwe',
      'Volledig circulair, Paris Proof energie-ecosysteem (People, Planet, Profit)'
    ]
  }
];

export const STAKEHOLDERS: StakeholderGroup[] = [
  {
    id: 'gemeente',
    name: 'Gemeente Harderwijk',
    role: 'Ruimtelijke regie, Omgevingsvisie & A28-corridor',
    perspective:
      'Verbindt de Ruimtelijke Structuurvisie Harderwijk met verduurzaming, economie en het expliciet aanmerken van voorkeurslocaties voor BESS en de energyhub.',
    focalPoints: ['Omgevingsvisie & SPvE', 'Ontsluiting A28 / N302', 'Economische & ruimtelijke kwaliteit'],
    iconName: 'Landmark'
  },
  {
    id: 'netbeheerders',
    name: 'TenneT & Liander',
    role: '150kV hoogspanning & 20–50kV middenspanningsnet',
    perspective:
      'Onderzoeken samen met initiatiefnemers hoe batterijen en elektrolyse via TDTR en CSC congestie verlichten en 40–60% netverzwaringsinvesteringen besparen.',
    focalPoints: ['HS-station Harderwijk (150kV)', 'TDTR & CSC contractvormen', '50–250 MW Noord-Veluwe opgave'],
    iconName: 'Zap'
  },
  {
    id: 'gasunie',
    name: 'Gasunie & Hynetwork',
    role: 'Regionale en landelijke waterstofinfrastructuur',
    perspective:
      'Zien potentie in de dubbele benadering van zowel lokale productie (elektrolyse als netstabilisator) als afzet (spoor en toekomstige Hynetwork-aansluiting).',
    focalPoints: ['FGU gas- & waterstofnetwerk', 'Afvoer via spoor & buisleiding', 'NWP Routekaart Waterstof'],
    iconName: 'Compass'
  },
  {
    id: 'ondernemers',
    name: 'Ondernemers & Grondeigenaren Zandlaan',
    role: 'Bedrijvigheid, locaties & lokale energiecollectieven',
    perspective:
      'Willen dat de Zandlaan meer van Harderwijk wordt, brengen locaties in en werken samen in een gebiedsmanagementorganisatie voor flexibele stroom en laadinfra.',
    focalPoints: ['Locatie-inbreng & verkaveling', 'Elektrificatie logistiek & mkb', 'Gebiedsmanagementorganisatie'],
    iconName: 'Building2'
  },
  {
    id: 'onderwijs',
    name: 'Onderwijs & Kennisinstellingen',
    role: 'Scholen, mbo’s en hogescholen in de regio',
    perspective:
      'Benutten The Entree als interactief living lab waar leerlingen en studenten techniek, smart grids, waterstof en duurzaamheid in de praktijk ervaren.',
    focalPoints: ['Living lab & testlocaties', 'Praktijkgerichte leertrajecten', 'Innovatiedemonstratie'],
    iconName: 'GraduationCap'
  },
  {
    id: 'omgeving',
    name: 'Omwonenden & Natuurpartners',
    role: 'Leefomgeving Harderwijk, Hierden & Veluwerand',
    perspective:
      'Hechten aan een groene, natuur-inclusieve en circulaire inrichting met waterberging, veilige routes en behoud van landschappelijke kwaliteit richting de Veluwe.',
    focalPoints: ['Groen-blauwe zone & waterberging', 'Circulaire & veilige inpassing', 'Participatie aan de randen'],
    iconName: 'Users'
  }
];

export const STATUS_STEPS: StatusStep[] = [
  {
    step: 1,
    title: 'Gebiedsanalyse & Proloog',
    statusText: 'Afgerond (v0.1 – v0.2)',
    state: 'completed',
    explanation:
      'Inventarisatie van het Zandlaan-gebied tussen Lorentz, spoor, N302 en A28, inclusief historische context en energetische nettopologie rond HS-station Harderwijk.'
  },
  {
    step: 2,
    title: 'Ambitiedocument Consultatiefase',
    statusText: 'Actief · Versie 0.3 (november 2026)',
    state: 'in_progress',
    explanation:
      'Een 80%-versie met vijf concrete voorstellen als uitnodiging voor gemeente Harderwijk, netbeheerders, grondeigenaren en ondernemers om samen de volgende versie op te stellen.'
  },
  {
    step: 3,
    title: 'Oprichten Samenwerkingstafel',
    statusText: 'Voorgenomen',
    state: 'planned',
    explanation:
      'Vormen van een vaste publiek-private overlegstructuur met gemeente, TenneT, Liander, onderwijs en ondernemers voor integraal gebiedsmanagement.'
  },
  {
    step: 4,
    title: 'Ontwerpend Onderzoek & SPvE',
    statusText: 'Nog op te starten',
    state: 'pending',
    explanation:
      'Vertaling van ambities naar een Stedenbouwkundig Programma van Eisen (SPvE), afstemming met de omgevingsvisie en contractonderzoek (TDTR/CSC).'
  },
  {
    step: 5,
    title: 'Haalbaarheid & Investeringsagenda',
    statusText: 'Nog niet doorlopen',
    state: 'pending',
    explanation:
      'Financiële, ruimtelijke en technische haalbaarheidstoets per perceel en uitwerking van bouw- en gebruiksregels (GO-besluit).'
  },
  {
    step: 6,
    title: 'Gefaseerde Realisatie (2028–2040)',
    statusText: 'Afhankelijk van besluitvorming',
    state: 'pending',
    explanation:
      'Stapsgewijze ontwikkeling van BESS-zone, logistieke laadhub, elektrolyse en eventuele toekomstige spoorondertunneling.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'algemeen',
    question: 'Wat is Smart Energyhub Zandlaan — The Entree Harderwijk?',
    answer:
      'Het is een verkennend initiatief van Circul8 Development en VOVON Development dat zich in de analyse-, onderzoeks- en ontwerpfase bevindt. Samen met betrokken partijen wordt onderzocht of en hoe het bedrijventerrein rond de Zandlaan (tussen het spoor, de N302 en de A28) in de toekomst kan uitgroeien tot een multimodale energiehub en innovatiezone voor Harderwijk en de Noord-Veluwe. Er liggen nog geen definitieve plannen of besluiten vast.'
  },
  {
    id: 'faq-2',
    category: 'planning',
    question: 'Wat is de status van dit Ambitiedocument (versie 0.3)?',
    answer:
      'Versie 0.3 (november 2026) is een werk- en consultatiedocument uit de huidige analyse- en verkenningsfase — nadrukkelijk géén bestemmingsplan, vergunningaanvraag of definitief ontwerp. Het bundelt eerste gebiedsanalyses, kansen en ontwerprichtingen als startpunt om met gemeente Harderwijk, netbeheerders, grondeigenaren, ondernemers en onderwijs het gesprek te voeren en gezamenlijk de onderzoeksvragen voor versie 0.4 vast te stellen.'
  },
  {
    id: 'faq-3',
    category: 'algemeen',
    question: 'Waarom wordt juist De Zandlaan in Harderwijk onderzocht?',
    answer:
      'Uit onze eerste gebiedsanalyse komt De Zandlaan naar voren als een bijzonder knooppunt van infrastructuur: de A28, de N302, de spoorlijn, het gasnet (FGU/Gasunie) en elektriciteitsnetten (20–50kV van Liander nabij het 150kV-hoogspanningsonderstation Harderwijk). Juist omdat het stroomnet in de FGU-regio aan zijn grenzen zit, willen we in de onderzoeks- en ontwerpfase toetsen of opwek, opslag en logistiek op deze plek technisch en ruimtelijk slim te verbinden zijn.'
  },
  {
    id: 'faq-4',
    category: 'techniek',
    question: 'Welke rol speelt batterijopslag (BESS) in de verkenning?',
    answer:
      'In de analyse kijken we naar de regionale opslagbehoefte die netbeheerders schetsen: in de FGU-regio wordt tot 2030 rekening gehouden met circa 1.000 tot 2.000 MW, waarvan een deel rond HS-station Harderwijk zou kunnen landen (indicatief 50 tot 250 MW, circa 1 tot 4 hectare). Of en op welke schaal batterijopslag aan de Zandlaan ruimtelijk, veiligheidsmatig en financieel inpasbaar is, wordt in het komende ontwerpend onderzoek verder getoetst.'
  },
  {
    id: 'faq-5',
    category: 'techniek',
    question: 'Waarom worden TDTR- en CSC-contracten onderzocht?',
    answer:
      'Uit de eerste beleidsmatige en financiële analyse blijkt dat reguliere transporttarieven de haalbaarheid van batterijopslag in Nederland vaak onder druk zetten. Daarom onderzoeken we samen met TenneT en Liander of flexibele contractvormen — zoals Tijdsduurgebonden Transportrechten (TDTR) en Capaciteitssturende Contracten (CSC) op restruimte in het net — mogelijk uitkomst bieden en netinvesteringen kunnen helpen beperken.'
  },
  {
    id: 'faq-6',
    category: 'techniek',
    question: 'Hoe wordt er in het onderzoek gekeken naar waterstof als mogelijke netstabilisator?',
    answer:
      'In deze verkenningsfase bestuderen we praktijkvoorbeelden waarbij elektrolysers niet alleen groene waterstof produceren, maar ook flexibel mee- en terugregelen op het stroomnet (bijvoorbeeld voor aFRR-netbalancering met korte responstijd). Of een dergelijke toepassing technisch, veiligheidsmatig en economisch haalbaar is op de Zandlaan, moet blijken uit vervolgonderzoek met netbeheerders en gespecialiseerde partners.'
  },
  {
    id: 'faq-7',
    category: 'techniek',
    question: 'Hoe wordt eventuele waterstofproductie meegenomen in het ruimtelijk ontwerp?',
    answer:
      'In de huidige ontwerpfase verkennen we verschillende scenario’s zonder al een keuze te maken. Zo wordt gekeken naar kleinschalige lokale inzet of mogelijke afvoer via het naastgelegen spoor in een vroege fase, en naar een eventuele langetermijnkoppeling met de landelijke Gasunie Hynetwork-buisleiding (horizon 10–15 jaar). Ook onderzoeken we of vrijkomende restwarmte en zuurstof op termijn nuttig in de omgeving hergebruikt kunnen worden.'
  },
  {
    id: 'faq-8',
    category: 'techniek',
    question: 'Welke aansluitvarianten voor batterijopslag worden in de studie vergeleken?',
    answer:
      'Tijdens de analyse- en onderzoeksfase leggen we meerdere nettopologieën naast elkaar. Enerzijds bekijken we een netgerelateerde systeembatterij nabij het 110–150kV-hoogspanningsstation voor regionale netbalans; anderzijds verkennen we co-locatie binnen een Gesloten Distributiesysteem (GDS) gekoppeld aan lokale opwek en bedrijven. Welke variant of combinatie het meest kansrijk is, volgt pas uit gezamenlijk technisch onderzoek met TenneT en Liander.'
  },
  {
    id: 'faq-9',
    category: 'omgeving',
    question: 'Wordt er ook gekeken naar zonne-energie of windenergie op deze locatie?',
    answer:
      'Ja, op verkennend niveau. Binnen het ontwerpend onderzoek kijken we naar kansen voor zonne-energie op bestaande en toekomstige daken en verkennen we voorzichtig of kleinschalige, architectonisch ingepaste verticale-as windopwek zou kunnen passen bij het concept “The Entree” langs de A28. Ruimtelijke kwaliteit, milieu- en geluidsnormen en draagvlak in de omgeving zijn daarbij bepalend — er is nog niets besloten.'
  },
  {
    id: 'faq-10',
    category: 'omgeving',
    question: 'Hoe worden groen, water en de spoorlijn meegenomen in het ontwerpend onderzoek?',
    answer:
      'In onze eerste ruimtelijke schetsen onderzoeken we hoe energie-infrastructuur en landschap elkaar kunnen versterken. We verkennen onder meer een groen-blauwe zone met waterberging, ecologie en recreatieve verbindingen richting Parkzone, Hierden en Eendenbuiten. Als langetermijnverkenning (horizon 2040) nemen we in de ontwerpstudie ook de gedachte aan een mogelijke spooronderdoorgang mee.'
  },
  {
    id: 'faq-11',
    category: 'algemeen',
    question: 'Welke rol kunnen onderwijs en lokale ondernemers krijgen in deze fase?',
    answer:
      'In de analyse- en ontwerpfase gaan we eerst actief in gesprek met lokale ondernemers aan de Zandlaan en regionale onderwijsinstellingen (scholen, mbo’s en hogescholen). Samen verkennen we welke energiebehoeften, perceelkansen en praktijkvraagstukken er leven, en of het gebied zich op termijn leent voor een gezamenlijk living lab en een collectieve gebiedsmanagementorganisatie.'
  },
  {
    id: 'faq-12',
    category: 'planning',
    question: 'Hoe kan ik of mijn organisatie meedenken in deze onderzoeks- en ontwerpfase?',
    answer:
      'Juist omdat het initiatief zich nog volledig in de analyse-, onderzoeks- en ontwerpfase bevindt, is inbreng uit de omgeving en van stakeholders erg welkom. Via het consultatieformulier op deze website of per e-mail naar Circul8 Development en VOVON Development kunt u vragen, aandachtspunten, onderzoeksvragen of eigen ambities aandragen voor de Samenwerkingstafel en versie 0.4.'
  }
];
