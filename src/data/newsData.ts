import { HistoryPhoto } from '../types';

export interface TechVisualItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  caption: string;
  sourceLabel: string;
}

export const ZANDLAAN_HISTORY_STORY = {
  title: 'Van zand, hout tot stroom',
  subtitle: 'De Zandlaan beweegt met zijn tijd mee — een rijke historie als logistieke draaischijf langs spoor en N302',
  badge: 'Historie & Identiteit',
  date: 'Jaren ’50 – Heden',
  summary:
    'Ooit was de Zandlaan de overgangszone tussen de zandruggen van de Veluwe en de lage, natte gronden richting het Veluwemeer. Waar vanaf de jaren ’50 dagelijks zand en later hout en brandstoffen werden vervoerd, kan in de toekomst schone, lokaal opgewekte energie stromen.',
  photos: [
    {
      id: 1,
      title: 'Huidige bedrijvigheid langs het spoor en de Zandlaan',
      eraLabel: 'Foto 1 · Huidige situatie (2025/2026)',
      credit: 'Luchtopname Zandlaan Harderwijk',
      imageUrl: '/assets/zandlaan/zandlaan_aerial_woodyard.jpg',
      caption:
        'Vandaag de dag is de Zandlaan een functioneel maar versnipperd gebied met houthandel (o.a. De Weerd), logistiek en productie tussen de spoorlijn, bedrijventerrein Overveld/Lorentz en de A28.',
      details:
        'De ondernemers in het gebied willen dat de Zandlaan weer meer onderdeel van Harderwijk wordt en zien kansen om ruimte en energie-infrastructuur slim te verbinden.'
    },
    {
      id: 2,
      title: 'Zandtransport vanaf de jaren ’50 langs het spoor',
      eraLabel: 'Foto 2 · Historisch zandtransport',
      credit: 'Archief Harderwijk',
      imageUrl: '/assets/zandlaan/historie_spoor_zand.jpg',
      caption:
        'De Zandlaan ontleent zijn naam aan het zandtransport dat hier vanaf de jaren ’50 dagelijks plaatsvond richting de stad voor de aanleg van nieuwe woonwijken en industrieterreinen.',
      details:
        'De combinatie van de spoorlijn en de nabijgelegen N302 maakte het gebied al vroeg tot een logistieke draaischijf voor grondstoffen en goederen.'
    },
    {
      id: 3,
      title: 'Spoorwegovergang en verkeersader N302 / Zandlaan',
      eraLabel: 'Foto 3 · Logistieke draaischijf',
      credit: 'Foto: Hendrik Jan ter Hoeve',
      imageUrl: '/assets/zandlaan/historie_overweg.jpg',
      caption:
        'De spoorovergang aan de Zandlaan verbond de zandwinning en bedrijvigheid met Harderwijk. Ook vandaag speelt de bereikbaarheid en een mogelijke toekomstige spoorondertunneling (horizon 2040) een sleutelrol.',
      details:
        'De historische verkeers- en spoorverbinding biedt directe kansen voor een multimodale hub en waterstofafvoer per spoor.'
    },
    {
      id: 4,
      title: 'Cursus elektrotechniek in Vormingscentrum De Kuil',
      eraLabel: 'Foto 4 · Vakmanschap & Techniek',
      credit: 'Vormingscentrum De Kuil aan de Zandlaan',
      imageUrl: '/assets/zandlaan/historie_de_kuil.jpg',
      caption:
        'Ook onderwijs en techniek horen historisch bij deze plek: in Vormingscentrum De Kuil aan de Zandlaan werden praktijkcursussen elektrotechniek gegeven.',
      details:
        'Precies die traditie keert terug in de ambitie om van De Entree weer een living lab te maken voor scholen, mbo’s en hogescholen rond energie en duurzaamheid.'
    },
    {
      id: 5,
      title: 'Overgangszone tussen stad, spoor en Veluwse natuur',
      eraLabel: 'Foto 5 · Landschap & Verbinding',
      credit: 'Archief Harderwijk',
      imageUrl: '/assets/zandlaan/historie_fietsers.jpg',
      caption:
        'Van open zandvlakte naar een groen en energiek knooppunt: waar vroeger zand en brandstof werden vervoerd, kan in de toekomst circulaire energie stromen tussen stad en Veluwe.',
      details:
        'De Zandlaan verbindt de stedelijke energiebehoefte van Harderwijk met de natuurwaarden richting Hierden en het Veluwemeer.'
    }
  ] as HistoryPhoto[]
};

export const TECH_GALLERY_ITEMS: TechVisualItem[] = [
  {
    id: 'entree-concept',
    title: 'Concept “The Entree” langs de A28',
    subtitle: 'Verticale-as windturbine (Wingardium), laadhub & demonstratiecentrum',
    imageUrl: '/assets/zandlaan/zandlaan_the_entree_concept.jpg',
    caption:
      'Zichtbare groene toegangspoort waar verticale-as windopwek, zwaar elektrisch/waterstof laden, logistiek en een publiek ontmoetingscentrum samenkomen.',
    sourceLabel: 'Afb | Wingardium verticale-as windturbine'
  },
  {
    id: 'battery-opslag',
    title: 'Modulaire Batterijopslag (BESS)',
    subtitle: 'Kortcyclische netbalancering & piekafvlakking nabij 150kV station',
    imageUrl: '/assets/zandlaan/zandlaan_tech_battery.jpg',
    caption:
      'Inzet als 110–150 kV systeembatterij of GDS co-locatie batterij via TDTR- en CSC-contracten om netcongestie en transporttarieven te verlagen.',
    sourceLabel: 'Afb | Battery opslag'
  },
  {
    id: 'h2-adsesys',
    title: 'Modulaire Waterstofproductie (H2)',
    subtitle: 'Elektrolyse als flexibele netdienst (aFRR) & Power-to-X',
    imageUrl: '/assets/zandlaan/zandlaan_tech_h2_adsesys.jpg',
    caption:
      'Modulaire elektrolyse-units zetten overschotten aan hernieuwbare stroom om in groene waterstof en bieden binnen ~5 minuten op- en afregelvermogen.',
    sourceLabel: 'Afb | Adsesys, H2 production'
  }
];
