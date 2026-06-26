import {
  Contact, Reply, Headphones, CalendarCheck, Play, Lightbulb,
  TriangleAlert, Zap, MessageSquare, Brain, Mail, TrendingUp, CircleCheck,
} from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { Card, IconBadge, Pill, IconRow, Frame } from '../components/ui.jsx';
import { C } from '../theme.js';
import leadPanel from '../assets/lead-panel.png';
import leadConversation from '../assets/lead-conversation.png';

/* 10 — O painel do lead */
export function Panel() {
  const acts = [
    { t: 'SHOW NUMBER', color: C.blueDk, d: 'revela o número de telefone do cliente.' },
    { t: 'ARCHIVE', color: C.grey, d: 'arquiva o lead (organiza a sua lista).' },
    { t: 'MARK BOOKED', color: C.green, d: 'marca que você agendou ou fechou.' },
    { t: 'Rate this lead', color: C.amber, d: 'avalia o lead — muito importante!' },
  ];
  return (
    <Slide icon={Contact} title="Abrindo um lead: o painel"
      subtitle="Clique em qualquer lead para abrir os detalhes e a conversa." accent={C.blue}>
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 items-start">
        <Frame src={leadPanel} alt="Painel de detalhes de um lead" />
        <div>
          <p className="font-bold mb-3" style={{ color: C.navy }}>Na barra azul (ações):</p>
          <div className="flex flex-col gap-2.5">
            {acts.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <Pill color={a.color} className="shrink-0">{a.t}</Pill>
                <span className="text-sm sm:text-[15px] flex-1" style={{ color: C.ink }}>{a.d}</span>
              </div>
            ))}
          </div>
          <Card tint={C.card} className="mt-5 p-4">
            <p className="font-bold mb-2" style={{ color: C.navy }}>No resumo do lead você também vê:</p>
            <ul className="text-sm sm:text-[15px] space-y-1.5" style={{ color: C.muted }}>
              <li><b style={{ color: C.navy }}>Customer name</b> — adicione o nome do cliente.</li>
              <li><b style={{ color: C.navy }}>Customer email</b> — liberado após Mark Booked.</li>
              <li><b style={{ color: C.navy }}>Your notes</b> — anotações internas; o cliente não vê.</li>
            </ul>
          </Card>
        </div>
      </div>
    </Slide>
  );
}

/* 11 — Conversando com o lead */
export function Conversation() {
  const tips = [
    { icon: Zap, h: 'Responda rápido', b: 'Principalmente os leads em negrito.' },
    { icon: MessageSquare, h: 'Seja claro e cordial', b: 'Apresente a empresa e mostre interesse.' },
    { icon: CalendarCheck, h: 'Confirme o próximo passo', b: 'Combine um orçamento ou agende a visita.' },
  ];
  return (
    <Slide icon={Reply} title="Conversando com o lead" accent={C.blue}>
      <Frame src={leadConversation} alt="Área de conversa com o lead" className="max-w-3xl mx-auto" />
      <p className="mt-5 text-center text-sm sm:text-base max-w-3xl mx-auto" style={{ color: C.ink }}>
        Abra o lead e role até <span className="font-bold" style={{ color: C.blue }}>Conversation</span>.
        Digite a sua mensagem e envie — é por ali que você fala com o lead, direto pelo LSA.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {tips.map((t, i) => (
          <Card key={i} tint={C.card} className="p-4 flex items-start gap-3">
            <IconBadge icon={t.icon} color={C.blue} size="sm" />
            <div>
              <h3 className="font-bold text-sm sm:text-base" style={{ color: C.navy }}>{t.h}</h3>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: C.muted }}>{t.b}</p>
            </div>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

/* 12 — Gravação de chamadas */
export function Recording() {
  const points = [
    { icon: Headphones, color: C.blue, h: 'Abra o lead e vá em Conversation', b: 'Use o player para ouvir a ligação quantas vezes precisar.' },
    { icon: Lightbulb, color: C.blue, h: 'Entenda o pedido do cliente', b: 'Ouvir de novo ajuda a responder certo e a avaliar o lead com precisão.' },
    { icon: TriangleAlert, color: C.amber, h: 'Disponibilidade', b: 'A gravação depende das configurações da conta — nem toda ligação terá áudio.' },
  ];
  return (
    <Slide icon={Headphones} title="Leads por ligação: ouça a gravação" accent={C.blue}>
      <div className="grid gap-7 lg:grid-cols-2 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-base sm:text-lg" style={{ color: C.ink }}>
            Quando o <span className="font-bold" style={{ color: C.navy }}>Lead type</span> é{' '}
            <span className="font-bold" style={{ color: C.blue }}>Phone</span>, a ligação fica registrada dentro do lead.
          </p>
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <IconBadge icon={p.icon} color={p.color} size="sm" />
              <div>
                <h3 className="font-bold text-sm sm:text-base" style={{ color: C.navy }}>{p.h}</h3>
                <p className="text-xs sm:text-sm mt-0.5" style={{ color: C.muted }}>{p.b}</p>
              </div>
            </div>
          ))}
        </div>
        <Card tint={C.navy} border={C.navy} className="p-6 sm:p-8 flex flex-col items-center text-center">
          <IconBadge icon={Headphones} color={C.blue} size="lg" shadow={false} />
          <p className="mt-4 font-bold text-white">Gravação da chamada</p>
          <div className="mt-4 w-full max-w-sm rounded-full bg-white flex items-center gap-3 px-3 py-2">
            <span className="h-7 w-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: C.blue }}>
              <Play size={13} color="#fff" fill="#fff" />
            </span>
            <span className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: '#CBD2DA' }}>
              <span className="block h-full rounded-full" style={{ width: '40%', backgroundColor: C.blue }} />
            </span>
            <span className="text-xs tabular-nums" style={{ color: C.muted }}>0:48</span>
          </div>
        </Card>
      </div>
    </Slide>
  );
}

/* 13 — Marcar como agendado */
export function MarkBooked() {
  const why = [
    { icon: Brain, h: 'Melhora o direcionamento', b: 'O Google aprende quais leads viram clientes e passa a buscar mais leads parecidos.' },
    { icon: Mail, h: 'Libera o Customer email', b: 'Você pode guardar o e-mail do cliente no lead.' },
    { icon: TrendingUp, h: 'Mede os seus resultados', b: 'Fica fácil acompanhar quantos leads viraram serviço.' },
  ];
  return (
    <Slide icon={CalendarCheck} title="Marcar como agendado: MARK BOOKED" accent={C.green}>
      <p className="text-base sm:text-lg" style={{ color: C.ink }}>
        Fechou o serviço ou agendou uma visita? Clique em{' '}
        <span className="font-bold" style={{ color: C.green }}>MARK BOOKED</span> (no topo do lead).
      </p>
      <div className="grid gap-6 lg:grid-cols-2 mt-5 items-start">
        <Card tint={C.card} className="p-5">
          <p className="font-bold mb-3" style={{ color: C.navy }}>Você escolhe a situação:</p>
          {[
            { t: 'O serviço já foi concluído', en: '“Job already completed”', on: true },
            { t: 'Está agendado para uma data', en: '“Scheduled for…” + a data', on: false },
          ].map((o, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <span className="h-5 w-5 rounded-full flex items-center justify-center shrink-0"
                style={{ border: `2px solid ${C.green}` }}>
                {o.on && <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: C.green }} />}
              </span>
              <span className="text-sm sm:text-base">
                <b style={{ color: C.ink }}>{o.t}</b>{' '}
                <span className="italic" style={{ color: C.muted }}>{o.en}</span>
              </span>
            </div>
          ))}
        </Card>
        <div>
          <p className="font-bold mb-3" style={{ color: C.navy }}>Por que isso importa:</p>
          <div className="flex flex-col gap-4">
            {why.map((w, i) => (
              <div key={i} className="flex items-start gap-3">
                <IconBadge icon={w.icon} color={C.green} size="sm" />
                <div>
                  <h3 className="font-bold text-sm sm:text-base" style={{ color: C.navy }}>{w.h}</h3>
                  <p className="text-xs sm:text-sm mt-0.5" style={{ color: C.muted }}>{w.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Card tint={C.greenTint} border="#BFE3C9" className="mt-5 p-4 flex items-center gap-3">
        <IconBadge icon={CircleCheck} color={C.green} size="sm" />
        <p className="text-sm sm:text-base" style={{ color: C.ink }}>
          Marque como Booked sempre que houver agendamento ou fechamento. É um sinal valioso para o Google.
        </p>
      </Card>
    </Slide>
  );
}
