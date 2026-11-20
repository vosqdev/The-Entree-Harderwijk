export interface NavItem {
  id: string;
  label: string;
}

export interface ZandlaanZone {
  id: string;
  name: string;
  color: string;
  description: string;
  spatialRole: string;
  elements: string[];
}

export interface ProposalItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  metrics?: string;
}

export interface PhaseItem {
  number: string;
  period: string;
  title: string;
  focus: string;
  statusLabel: string;
  items: string[];
}

export interface StakeholderGroup {
  id: string;
  name: string;
  role: string;
  perspective: string;
  focalPoints: string[];
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'algemeen' | 'techniek' | 'omgeving' | 'planning';
}

export interface StatusStep {
  step: number;
  title: string;
  statusText: string;
  state: 'completed' | 'in_progress' | 'planned' | 'pending';
  explanation: string;
}

export interface HistoryPhoto {
  id: number;
  title: string;
  eraLabel: string;
  credit?: string;
  imageUrl: string;
  caption: string;
  details: string;
}
