import { Cover, Agenda, WhatIsLSA, Flow } from './01_intro.jsx';
import { Access, DashboardOverview, Columns1, Columns2, BoldRows } from './02_dashboard.jsx';
import { Panel, Conversation, Recording, MarkBooked } from './03_lead.jsx';
import { RateScale, ReasonsBad, ReasonsGood, WhyRating } from './04_rating.jsx';
import { Checklist, Closing } from './05_close.jsx';

// Ordem da apresentação. Para reordenar/adicionar slides, basta mexer aqui.
export const slides = [
  { id: 'capa', Component: Cover },
  { id: 'agenda', Component: Agenda },
  { id: 'o-que-e-lsa', Component: WhatIsLSA },
  { id: 'fluxo', Component: Flow },
  { id: 'acesso', Component: Access },
  { id: 'dashboard', Component: DashboardOverview },
  { id: 'colunas-1', Component: Columns1 },
  { id: 'colunas-2', Component: Columns2 },
  { id: 'negrito', Component: BoldRows },
  { id: 'painel', Component: Panel },
  { id: 'conversa', Component: Conversation },
  { id: 'gravacao', Component: Recording },
  { id: 'mark-booked', Component: MarkBooked },
  { id: 'rating-escala', Component: RateScale },
  { id: 'motivos-ruim', Component: ReasonsBad },
  { id: 'motivos-bom', Component: ReasonsGood },
  { id: 'por-que-avaliar', Component: WhyRating },
  { id: 'checklist', Component: Checklist },
  { id: 'encerramento', Component: Closing },
];
