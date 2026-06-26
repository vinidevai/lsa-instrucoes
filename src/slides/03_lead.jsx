import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Contact, Reply, Headphones, CalendarCheck, Play, Lightbulb, TriangleAlert, Zap, MessageSquare, Brain, Mail, TrendingUp, CircleCheck } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { Card, IconBadge, Pill } from '../components/ui.jsx';
import { usePick } from '../store.jsx';
import { C } from '../theme.js';
import { LeadDetail, MarkBookedFlow } from '../lsa/LsaSim.jsx';

/* 10 — O painel do lead (interativo) */
export function Panel() {
  const t = usePick();
  const acts = [
    { tt: 'SHOW NUMBER', color: C.blueDk, d: { pt: 'revela o número de telefone do cliente.', en: 'reveals the customer’s phone number.' } },
    { tt: 'ARCHIVE', color: C.grey, d: { pt: 'arquiva o lead (organiza a sua lista).', en: 'archives the lead (tidies your list).' } },
    { tt: 'MARK BOOKED', color: C.green, d: { pt: 'marca que você agendou ou fechou.', en: 'marks that you scheduled or closed.' } },
    { tt: 'Rate this lead', color: C.amber, d: { pt: 'avalia o lead — muito importante!', en: 'rates the lead — very important!' } },
  ];
  return (
    <Slide icon={Contact} title={t({ pt: 'Abrindo um lead: o painel', en: 'Opening a lead: the panel' })}
      subtitle={t({ pt: 'Tela interativa — clique nos botões!', en: 'Interactive screen — click the buttons!' })} accent={C.blue}>
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        <LeadDetail />
        <div>
          <p className="font-bold mb-3" style={{ color: C.heading }}>{t({ pt: 'Na barra azul (ações):', en: 'In the blue bar (actions):' })}</p>
          <div className="flex flex-col gap-2.5">
            {acts.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <Pill color={a.color} className="shrink-0">{a.tt}</Pill>
                <span className="text-sm sm:text-[15px] flex-1" style={{ color: C.text }}>{t(a.d)}</span>
              </div>
            ))}
          </div>
          <Card tint={C.card} className="mt-5 p-4">
            <p className="font-bold mb-2" style={{ color: C.heading }}>{t({ pt: 'No resumo do lead você também vê:', en: 'In the lead summary you also see:' })}</p>
            <ul className="text-sm sm:text-[15px] space-y-1.5" style={{ color: C.muted }}>
              <li><b style={{ color: C.heading }}>Customer name</b> — {t({ pt: 'adicione o nome do cliente.', en: 'add the customer’s name.' })}</li>
              <li><b style={{ color: C.heading }}>Customer email</b> — {t({ pt: 'liberado após Mark Booked.', en: 'unlocked after Mark Booked.' })}</li>
              <li><b style={{ color: C.heading }}>Your notes</b> — {t({ pt: 'anotações internas; o cliente não vê.', en: 'internal notes; the customer can’t see them.' })}</li>
            </ul>
          </Card>
        </div>
      </div>
    </Slide>
  );
}

/* 11 — Conversando com o lead */
export function Conversation() {
  const t = usePick();
  const tips = [
    { icon: Zap, h: { pt: 'Responda rápido', en: 'Reply fast' }, b: { pt: 'Principalmente os leads em negrito.', en: 'Especially the leads in bold.' } },
    { icon: MessageSquare, h: { pt: 'Seja claro e cordial', en: 'Be clear and friendly' }, b: { pt: 'Apresente a empresa e mostre interesse.', en: 'Introduce the business and show interest.' } },
    { icon: CalendarCheck, h: { pt: 'Confirme o próximo passo', en: 'Confirm the next step' }, b: { pt: 'Combine um orçamento ou agende a visita.', en: 'Arrange a quote or schedule the visit.' } },
  ];
  return (
    <Slide icon={Reply} title={t({ pt: 'Conversando com o lead', en: 'Chatting with the lead' })} accent={C.blue}>
      <div className="max-w-2xl mx-auto w-full rounded-xl p-4 sm:p-5" style={{ border: `1px solid ${C.line}`, backgroundColor: C.surface }}>
        <p className="font-bold text-sm" style={{ color: C.heading }}>Conversation</p>
        <div className="mt-3 space-y-3">
          <ChatBubble who="P" color="#F4663B" name="Potential customer">
            Hi! I’d like to schedule a roof inspection. When are you available?
          </ChatBubble>
          <ChatBubble who="U" color={C.blue} name="Your business" mine>
            {t({ pt: 'Olá! Claro 😊 Podemos passar quinta às 10h. Funciona pra você?', en: 'Hi! Sure 😊 We can stop by Thursday at 10am. Does that work?' })}
          </ChatBubble>
        </div>
      </div>
      <p className="mt-4 text-center text-sm sm:text-base max-w-3xl mx-auto" style={{ color: C.text }}>
        {t({ pt: 'Abra o lead e role até ', en: 'Open the lead and scroll to ' })}
        <span className="font-bold" style={{ color: C.blue }}>Conversation</span>
        {t({ pt: '. Digite a sua mensagem e envie — é por ali que você fala com o lead, direto pelo LSA.', en: '. Type your message and send — that’s where you talk to the lead, right inside the LSA.' })}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {tips.map((tp, i) => (
          <Card key={i} tint={C.card} className="p-4 flex items-start gap-3">
            <IconBadge icon={tp.icon} color={C.blue} size="sm" />
            <div>
              <h3 className="font-bold text-sm sm:text-base" style={{ color: C.heading }}>{t(tp.h)}</h3>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: C.muted }}>{t(tp.b)}</p>
            </div>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

function ChatBubble({ who, color, name, children, mine }) {
  return (
    <div className={`flex gap-2.5 ${mine ? 'flex-row-reverse text-right' : ''}`}>
      <span className="h-7 w-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: color }}>{who}</span>
      <div>
        <p className="text-xs font-semibold mb-0.5" style={{ color: C.muted }}>{name}</p>
        <p className="inline-block rounded-2xl px-3 py-2 text-sm" style={{ backgroundColor: mine ? C.blueTint : C.card, color: C.text }}>{children}</p>
      </div>
    </div>
  );
}

/* 12 — Gravação de chamadas */
export function Recording() {
  const t = usePick();
  const points = [
    { icon: Headphones, color: C.blue, h: { pt: 'Abra o lead e vá em Conversation', en: 'Open the lead and go to Conversation' }, b: { pt: 'Use o player para ouvir a ligação quantas vezes precisar.', en: 'Use the player to replay the call as many times as you need.' } },
    { icon: Lightbulb, color: C.blue, h: { pt: 'Entenda o pedido do cliente', en: 'Understand the customer’s request' }, b: { pt: 'Ouvir de novo ajuda a responder certo e a avaliar o lead com precisão.', en: 'Re-listening helps you reply correctly and rate the lead accurately.' } },
    { icon: TriangleAlert, color: C.amber, h: { pt: 'Disponibilidade', en: 'Availability' }, b: { pt: 'A gravação depende das configurações da conta — nem toda ligação terá áudio.', en: 'Recording depends on the account settings — not every call will have audio.' } },
  ];
  return (
    <Slide icon={Headphones} title={t({ pt: 'Leads por ligação: ouça a gravação', en: 'Phone leads: listen to the recording' })} accent={C.blue}>
      <div className="grid gap-7 lg:grid-cols-2 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-base sm:text-lg" style={{ color: C.text }}>
            {t({ pt: 'Quando o ', en: 'When the ' })}<span className="font-bold" style={{ color: C.heading }}>Lead type</span>
            {t({ pt: ' é ', en: ' is ' })}<span className="font-bold" style={{ color: C.blue }}>Phone</span>
            {t({ pt: ', a ligação fica registrada dentro do lead.', en: ', the call is recorded inside the lead.' })}
          </p>
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <IconBadge icon={p.icon} color={p.color} size="sm" />
              <div>
                <h3 className="font-bold text-sm sm:text-base" style={{ color: C.heading }}>{t(p.h)}</h3>
                <p className="text-xs sm:text-sm mt-0.5" style={{ color: C.muted }}>{t(p.b)}</p>
              </div>
            </div>
          ))}
        </div>
        <Card tint={C.navy} border={C.navy} className="p-6 sm:p-8 flex flex-col items-center text-center">
          <IconBadge icon={Headphones} color={C.blue} size="lg" shadow={false} />
          <p className="mt-4 font-bold text-white">{t({ pt: 'Gravação da chamada', en: 'Call recording' })}</p>
          <div className="mt-4 w-full max-w-sm rounded-full flex items-center gap-3 px-3 py-2" style={{ backgroundColor: C.surface }}>
            <span className="h-7 w-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: C.blue }}>
              <Play size={13} color="#fff" fill="#fff" />
            </span>
            <span className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: C.line }}>
              <span className="block h-full rounded-full" style={{ width: '40%', backgroundColor: C.blue }} />
            </span>
            <span className="text-xs tabular-nums" style={{ color: C.muted }}>0:48</span>
          </div>
        </Card>
      </div>
    </Slide>
  );
}

/* 13 — Marcar como agendado (interativo) */
export function MarkBooked() {
  const t = usePick();
  const [open, setOpen] = useState(false);
  const why = [
    { icon: Brain, h: { pt: 'Melhora o direcionamento', en: 'Improves targeting' }, b: { pt: 'O Google aprende quais leads viram clientes e busca mais leads parecidos.', en: 'Google learns which leads become customers and seeks more like them.' } },
    { icon: Mail, h: { pt: 'Libera o Customer email', en: 'Unlocks Customer email' }, b: { pt: 'Você pode guardar o e-mail do cliente no lead.', en: 'You can store the customer’s email in the lead.' } },
    { icon: TrendingUp, h: { pt: 'Mede os seus resultados', en: 'Measures your results' }, b: { pt: 'Fica fácil acompanhar quantos leads viraram serviço.', en: 'It’s easy to track how many leads turned into jobs.' } },
  ];
  return (
    <Slide icon={CalendarCheck} title={t({ pt: 'Marcar como agendado: MARK BOOKED', en: 'Mark as booked: MARK BOOKED' })} accent={C.green}>
      <p className="text-base sm:text-lg" style={{ color: C.text }}>
        {t({ pt: 'Fechou o serviço ou agendou uma visita? Clique em ', en: 'Closed the job or scheduled a visit? Click ' })}
        <span className="font-bold" style={{ color: C.green }}>MARK BOOKED</span>
        {t({ pt: ' (no topo do lead).', en: ' (at the top of the lead).' })}
      </p>
      <div className="mt-4">
        <button onClick={() => setOpen(true)}
          className="rounded-md px-4 py-2 text-sm font-semibold text-white transition-transform active:scale-95" style={{ backgroundColor: C.green }}>
          MARK BOOKED
        </button>
        <span className="ml-3 text-sm italic" style={{ color: C.muted }}>← {t({ pt: 'experimente!', en: 'try it!' })}</span>
      </div>
      <div className="mt-6">
        <p className="font-bold mb-3" style={{ color: C.heading }}>{t({ pt: 'Por que isso importa:', en: 'Why it matters:' })}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {why.map((w, i) => (
            <Card key={i} tint={C.card} className="p-4">
              <IconBadge icon={w.icon} color={C.green} size="sm" />
              <h3 className="mt-2 font-bold text-sm sm:text-base" style={{ color: C.heading }}>{t(w.h)}</h3>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: C.muted }}>{t(w.b)}</p>
            </Card>
          ))}
        </div>
      </div>
      <Card tint={C.greenTint} border={C.green} className="mt-5 p-4 flex items-center gap-3">
        <IconBadge icon={CircleCheck} color={C.green} size="sm" />
        <p className="text-sm sm:text-base" style={{ color: C.text }}>
          {t({ pt: 'Marque como Booked sempre que houver agendamento ou fechamento. É um sinal valioso para o Google.', en: 'Mark as Booked whenever there’s a scheduling or a closed job. It’s a valuable signal for Google.' })}
        </p>
      </Card>
      <AnimatePresence>
        {open && <MarkBookedFlow onClose={() => setOpen(false)} onDone={() => setOpen(false)} />}
      </AnimatePresence>
    </Slide>
  );
}
