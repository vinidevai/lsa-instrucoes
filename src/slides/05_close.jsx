import { ClipboardCheck, CircleCheck, Reply, CalendarCheck, Star, Lightbulb } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { Card, IconBadge } from '../components/ui.jsx';
import { C } from '../theme.js';

/* 18 — Checklist diário */
export function Checklist() {
  const items = [
    ['Abra o inbox todos os dias', 'De preferência várias vezes ao dia.'],
    ['Responda os leads em negrito primeiro', 'Eles estão aguardando você.'],
    ['Ouça as gravações das ligações', 'Para entender bem cada pedido.'],
    ['Marque MARK BOOKED ao agendar/fechar', 'Sinaliza ao Google o que virou cliente.'],
    ['Avalie TODOS os leads, com o motivo certo', 'Bons e ruins — sempre com honestidade.'],
    ['Avalie os leads inválidos o quanto antes', 'É o caminho para o possível crédito.'],
  ];
  return (
    <Slide icon={ClipboardCheck} title="Seu checklist diário" accent={C.green}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
        {items.map(([h, b], i) => (
          <Card key={i} tint={C.card} className="p-4 flex items-start gap-3">
            <IconBadge icon={CircleCheck} color={C.green} size="sm" />
            <div>
              <h3 className="font-bold text-sm sm:text-base" style={{ color: C.navy }}>{h}</h3>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: C.muted }}>{b}</p>
            </div>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

/* 19 — Encerramento */
export function Closing() {
  const three = [
    { icon: Reply, color: C.blue, h: 'Responda rápido', b: 'Sobretudo os leads em negrito.' },
    { icon: CalendarCheck, color: C.blue, h: 'Marque como Booked', b: 'Sempre que agendar ou fechar.' },
    { icon: Star, color: C.amber, h: 'Avalie sempre', b: 'Melhora os anúncios e pode gerar crédito.' },
  ];
  return (
    <Slide variant="dark" contentClassName="flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-3">
        <IconBadge icon={CircleCheck} color={C.green} size="md" shadow={false} />
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Tudo pronto para gerenciar seus leads!
        </h2>
      </div>
      <p className="text-base sm:text-lg mb-6" style={{ color: C.ice }}>Lembre sempre dos 3 essenciais:</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {three.map((t, i) => (
          <Card key={i} tint={C.navy2} border={C.navy2} className="p-5">
            <IconBadge icon={t.icon} color={t.color} size="md" shadow={false} />
            <h3 className="mt-3 font-bold text-base sm:text-lg text-white">{t.h}</h3>
            <p className="text-sm mt-1" style={{ color: C.ice }}>{t.b}</p>
          </Card>
        ))}
      </div>
      <Card tint="#16204F" border="#16204F" className="mt-6 p-4 flex items-center gap-3">
        <IconBadge icon={Lightbulb} color={C.blue} size="sm" shadow={false} />
        <p className="text-sm sm:text-base">
          <span className="font-bold text-white">Dúvidas? </span>
          <span style={{ color: C.ice }}>Fale com o seu gestor de tráfego.</span>
        </p>
      </Card>
    </Slide>
  );
}
