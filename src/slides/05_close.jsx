import { ClipboardCheck, CircleCheck, Reply, CalendarCheck, Star, Lightbulb } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { Card, IconBadge } from '../components/ui.jsx';
import { usePick } from '../store.jsx';
import { C } from '../theme.js';

/* 18 — Checklist diário */
export function Checklist() {
  const t = usePick();
  const items = [
    { h: { pt: 'Abra o inbox todos os dias', en: 'Open the inbox every day' }, b: { pt: 'De preferência várias vezes ao dia.', en: 'Preferably several times a day.' } },
    { h: { pt: 'Responda os leads em negrito primeiro', en: 'Reply to leads in bold first' }, b: { pt: 'Eles estão aguardando você.', en: 'They are waiting for you.' } },
    { h: { pt: 'Ouça as gravações das ligações', en: 'Listen to the call recordings' }, b: { pt: 'Para entender bem cada pedido.', en: 'To fully understand each request.' } },
    { h: { pt: 'Marque MARK BOOKED ao agendar/fechar', en: 'Mark MARK BOOKED when you schedule/close' }, b: { pt: 'Sinaliza ao Google o que virou cliente.', en: 'It signals Google what became a customer.' } },
    { h: { pt: 'Avalie TODOS os leads, com o motivo certo', en: 'Rate ALL leads, with the right reason' }, b: { pt: 'Bons e ruins — sempre com honestidade.', en: 'Good and bad — always honestly.' } },
    { h: { pt: 'Avalie os leads inválidos o quanto antes', en: 'Rate invalid leads as soon as possible' }, b: { pt: 'É o caminho para o possível crédito.', en: 'It’s the path to a possible credit.' } },
  ];
  return (
    <Slide icon={ClipboardCheck} title={t({ pt: 'Seu checklist diário', en: 'Your daily checklist' })} accent={C.green}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
        {items.map((it, i) => (
          <Card key={i} tint={C.card} className="p-4 flex items-start gap-3">
            <IconBadge icon={CircleCheck} color={C.green} size="sm" />
            <div>
              <h3 className="font-bold text-sm sm:text-base" style={{ color: C.heading }}>{t(it.h)}</h3>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: C.muted }}>{t(it.b)}</p>
            </div>
          </Card>
        ))}
      </div>
    </Slide>
  );
}

/* 19 — Encerramento */
export function Closing() {
  const t = usePick();
  const three = [
    { icon: Reply, color: C.blue, h: { pt: 'Responda rápido', en: 'Reply fast' }, b: { pt: 'Sobretudo os leads em negrito.', en: 'Especially the leads in bold.' } },
    { icon: CalendarCheck, color: C.blue, h: { pt: 'Marque como Booked', en: 'Mark as booked' }, b: { pt: 'Sempre que agendar ou fechar.', en: 'Whenever you schedule or close.' } },
    { icon: Star, color: C.amber, h: { pt: 'Avalie sempre', en: 'Always rate' }, b: { pt: 'Melhora os anúncios e pode gerar crédito.', en: 'It improves the ads and can earn credit.' } },
  ];
  return (
    <Slide variant="dark" contentClassName="flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-3">
        <IconBadge icon={CircleCheck} color={C.green} size="md" shadow={false} />
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          {t({ pt: 'Tudo pronto para gerenciar seus leads!', en: 'You’re all set to manage your leads!' })}
        </h2>
      </div>
      <p className="text-base sm:text-lg mb-6" style={{ color: C.ice }}>{t({ pt: 'Lembre sempre dos 3 essenciais:', en: 'Always remember the 3 essentials:' })}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {three.map((tc, i) => (
          <Card key={i} tint={C.navy2} border={C.navy2} className="p-5">
            <IconBadge icon={tc.icon} color={tc.color} size="md" shadow={false} />
            <h3 className="mt-3 font-bold text-base sm:text-lg text-white">{t(tc.h)}</h3>
            <p className="text-sm mt-1" style={{ color: C.ice }}>{t(tc.b)}</p>
          </Card>
        ))}
      </div>
      <Card tint={C.navy2} border={C.navy2} className="mt-6 p-4 flex items-center gap-3">
        <IconBadge icon={Lightbulb} color={C.blue} size="sm" shadow={false} />
        <p className="text-sm sm:text-base">
          <span className="font-bold text-white">{t({ pt: 'Dúvidas? ', en: 'Questions? ' })}</span>
          <span style={{ color: C.ice }}>{t({ pt: 'Fale com o seu gestor de tráfego.', en: 'Talk to your traffic manager.' })}</span>
        </p>
      </Card>
    </Slide>
  );
}
