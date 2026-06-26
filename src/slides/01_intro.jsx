import { Megaphone, Home, ListChecks, BadgeCheck, Search, DollarSign, Inbox, Zap, Route, Reply, Phone, CalendarCheck, Star } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { Card, IconBadge, NumberBadge } from '../components/ui.jsx';
import { usePick } from '../store.jsx';
import { C } from '../theme.js';

/* 1 — Capa */
export function Cover() {
  const t = usePick();
  return (
    <Slide variant="dark" contentClassName="flex flex-col justify-center">
      <div className="relative overflow-hidden">
        <Home size={300} color={C.ice} className="pointer-events-none absolute -right-10 -bottom-24 opacity-10 hidden sm:block" />
        <div className="flex items-center gap-2.5 mb-5">
          <IconBadge icon={Megaphone} color={C.blue} size="sm" shadow={false} />
          <span className="text-[11px] sm:text-sm font-bold tracking-wide" style={{ color: C.ice }}>
            {t({ pt: 'GUIA PRÁTICO • GOOGLE LOCAL SERVICES ADS', en: 'PRACTICAL GUIDE • GOOGLE LOCAL SERVICES ADS' })}
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[0.95]">
          {t({ pt: 'Inbox de Leads', en: 'Leads Inbox' })}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: '#FFC36B' }}>
          {t({ pt: 'Como gerenciar, responder e avaliar seus leads', en: 'How to manage, reply to and rate your leads' })}
        </p>
        <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: C.ice }}>
          {t({
            pt: 'Do primeiro contato ao agendamento — e como as suas avaliações melhoram os anúncios e ainda geram créditos para os próximos leads.',
            en: 'From first contact to booking — and how your ratings improve the ads and even earn credits for future leads.',
          })}
        </p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs sm:text-sm" style={{ backgroundColor: C.navy2, color: C.ice }}>
          {t({ pt: 'Use as setas ← →, clique nos botões ou deslize para navegar', en: 'Use the ← → arrows, the buttons, or swipe to navigate' })}
        </div>
      </div>
    </Slide>
  );
}

/* 2 — Agenda */
export function Agenda() {
  const t = usePick();
  const items = [
    { pt: 'O que é o LSA e por que importa', en: 'What the LSA is and why it matters' },
    { pt: 'O fluxo de um lead, do início ao fim', en: 'A lead’s journey, from start to finish' },
    { pt: 'Como acessar o inbox', en: 'How to access the inbox' },
    { pt: 'O dashboard e o que cada coluna significa', en: 'The dashboard and what each column means' },
    { pt: 'Leads em negrito: responda rápido', en: 'Leads in bold: reply fast' },
    { pt: 'Conversar e ouvir gravações de chamadas', en: 'Chatting and listening to call recordings' },
    { pt: 'Marcar como agendado (Booked)', en: 'Marking as booked' },
    { pt: 'Avaliar o lead (rating) e escolher o motivo', en: 'Rating the lead and choosing the reason' },
    { pt: 'Como o rating melhora os anúncios e gera créditos', en: 'How rating improves the ads and earns credits' },
  ];
  return (
    <Slide icon={ListChecks} title={t({ pt: 'O que você vai aprender', en: 'What you will learn' })} accent={C.blue}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6 mt-2">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3">
            <NumberBadge n={i + 1} color={i === 8 ? C.green : C.blue} />
            <span className="text-sm sm:text-base md:text-lg" style={{ color: C.text }}>{t(it)}</span>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* 3 — O que é o LSA */
export function WhatIsLSA() {
  const t = usePick();
  const rows = [
    { icon: Search, color: C.blue,
      h: { pt: 'Anúncios no topo do Google', en: 'Ads at the top of Google' },
      b: { pt: 'A sua empresa aparece no topo da busca local, com o selo Google Guaranteed — passando confiança para quem procura o serviço.', en: 'Your business appears at the top of local search, with the Google Guaranteed badge — building trust with people looking for the service.' } },
    { icon: DollarSign, color: C.green,
      h: { pt: 'Você paga por lead, não por clique', en: 'You pay per lead, not per click' },
      b: { pt: 'Cada contato — uma mensagem ou uma ligação — é um lead. Por isso, cada lead conta (e pode ser cobrado).', en: 'Each contact — a message or a call — is a lead. So every lead counts (and may be charged).' } },
    { icon: Inbox, color: C.amber,
      h: { pt: 'O inbox é onde tudo acontece', en: 'The inbox is where it all happens' },
      b: { pt: 'É no inbox que você responde, acompanha, agenda e avalia cada lead. Gerenciar bem = mais clientes.', en: 'The inbox is where you reply to, track, book and rate every lead. Manage it well = more customers.' } },
  ];
  return (
    <Slide icon={BadgeCheck} title={t({ pt: 'O que é o Google LSA — e por que importa', en: 'What the Google LSA is — and why it matters' })} accent={C.blue}>
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {rows.map((r, i) => (
            <Card key={i} className="p-4 sm:p-5 flex items-start gap-4">
              <IconBadge icon={r.icon} color={r.color} size="md" />
              <div>
                <h3 className="text-base sm:text-lg font-bold" style={{ color: C.heading }}>{t(r.h)}</h3>
                <p className="text-sm sm:text-[15px] mt-1 leading-snug" style={{ color: C.muted }}>{t(r.b)}</p>
              </div>
            </Card>
          ))}
        </div>
        <Card tint={C.navy} border={C.navy} className="p-6 flex flex-col justify-center">
          <IconBadge icon={Zap} color={C.blue} size="md" shadow={false} />
          <p className="mt-4 text-sm font-bold uppercase tracking-wide" style={{ color: C.ice }}>{t({ pt: 'A regra de ouro', en: 'The golden rule' })}</p>
          <p className="mt-2 text-xl sm:text-2xl font-extrabold leading-tight text-white">
            {t({ pt: 'Responder rápido', en: 'Reply fast' })} <span style={{ color: '#FFC36B' }}>{t({ pt: '+ avaliar sempre', en: '+ always rate' })}</span>
          </p>
          <p className="mt-2 text-base sm:text-lg" style={{ color: C.ice }}>
            {t({ pt: '= mais clientes e menor custo por lead.', en: '= more customers and lower cost per lead.' })}
          </p>
        </Card>
      </div>
    </Slide>
  );
}

/* 4 — O fluxo de um lead */
export function Flow() {
  const t = usePick();
  const steps = [
    { icon: Inbox, color: C.blue, ti: { pt: 'Novo lead', en: 'New lead' }, d: { pt: 'Chega uma mensagem ou ligação.', en: 'A message or call comes in.' } },
    { icon: Reply, color: C.blue, ti: { pt: 'Responda rápido', en: 'Reply fast' }, d: { pt: 'Atenda quem está em negrito.', en: 'Tend to the ones in bold.' } },
    { icon: Phone, color: C.blue, ti: { pt: 'Atenda / retorne', en: 'Handle / call back' }, d: { pt: 'Converse ou ouça a gravação.', en: 'Chat or listen to the recording.' } },
    { icon: CalendarCheck, color: C.green, ti: { pt: 'Marque Booked', en: 'Mark as booked' }, d: { pt: 'Quando agendar ou fechar.', en: 'When you schedule or close.' } },
    { icon: Star, color: C.amber, ti: { pt: 'Avalie o lead', en: 'Rate the lead' }, d: { pt: 'Dê o rating e o motivo.', en: 'Give the rating and reason.' } },
  ];
  return (
    <Slide icon={Route} title={t({ pt: 'O fluxo de um lead', en: 'A lead’s journey' })}
      subtitle={t({ pt: 'Cinco passos simples, do primeiro contato à avaliação.', en: 'Five simple steps, from first contact to rating.' })} accent={C.blue}>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-2">
        {steps.map((s, i) => (
          <Card key={i} className="p-4 flex flex-row lg:flex-col items-center lg:text-center gap-3">
            <div className="relative shrink-0">
              <IconBadge icon={s.icon} color={s.color} size="md" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-[11px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: C.navy }}>{i + 1}</span>
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base" style={{ color: C.heading }}>{t(s.ti)}</p>
              <p className="text-xs sm:text-sm" style={{ color: C.muted }}>{t(s.d)}</p>
            </div>
          </Card>
        ))}
      </div>
      <Card tint={C.amberTint} border={C.amber} className="mt-6 p-4 sm:p-5 flex items-start gap-3">
        <IconBadge icon={Zap} color={C.amber} size="sm" />
        <p className="text-sm sm:text-base" style={{ color: C.text }}>
          {t({ pt: 'E se o lead for inválido (fora da área, spam, sem relação com o serviço)? ', en: 'And what if the lead is invalid (out of area, spam, unrelated to the service)? ' })}
          <span className="font-bold" style={{ color: C.amber }}>
            {t({ pt: 'A sua avaliação pode virar crédito para os próximos leads — veremos isso no final.', en: 'Your rating can turn into credit for future leads — we’ll see this at the end.' })}
          </span>
        </p>
      </Card>
    </Slide>
  );
}
