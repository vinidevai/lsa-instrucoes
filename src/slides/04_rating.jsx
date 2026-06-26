import { Star, ThumbsDown, ThumbsUp, Brain, HandCoins, TriangleAlert } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { Card, IconBadge, Frame } from '../components/ui.jsx';
import { C } from '../theme.js';
import rateImg from '../assets/rate-satisfaction.jpg';
import reasonsBadImg from '../assets/reasons-dissatisfied.jpg';
import reasonsGoodImg from '../assets/reasons-satisfied.jpg';
import creditBanner from '../assets/credit-banner.png';

/* 14 — Escala de avaliação */
export function RateScale() {
  const levels = [
    { c: C.green, en: 'Very satisfied', pt: 'Muito satisfeito' },
    { c: '#57A639', en: 'Somewhat satisfied', pt: 'Satisfeito' },
    { c: C.grey, en: 'Neither / nor', pt: 'Neutro' },
    { c: C.amber, en: 'Somewhat dissatisfied', pt: 'Insatisfeito' },
    { c: C.red, en: 'Very dissatisfied', pt: 'Muito insatisfeito' },
  ];
  return (
    <Slide icon={Star} title="Avalie o lead: Rate this lead"
      subtitle="Ao terminar o atendimento, avalie — sempre." accent={C.amber}>
      <div className="grid gap-7 lg:grid-cols-2 items-start">
        <div>
          <p className="text-sm sm:text-base" style={{ color: C.ink }}>
            Clique em <span className="font-bold" style={{ color: C.amber }}>Rate this lead</span> e diga o quão
            satisfeita a empresa ficou com aquele lead. São 5 níveis:
          </p>
          <div className="mt-4 flex flex-col gap-2.5">
            {levels.map((l, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full shrink-0" style={{ backgroundColor: l.c }} />
                <span className="text-sm sm:text-base">
                  <b style={{ color: C.navy }}>{l.en}</b>{' '}
                  <span style={{ color: C.muted }}>· {l.pt}</span>
                </span>
              </div>
            ))}
          </div>
          <Card tint={C.amberTint} border="#F3D8B0" className="mt-5 p-4 flex items-center gap-3">
            <IconBadge icon={Star} color={C.amber} size="sm" />
            <p className="text-sm sm:text-base font-bold" style={{ color: C.amber }}>
              Avalie TODOS os leads ao finalizar — bons e ruins.
            </p>
          </Card>
        </div>
        <Frame src={rateImg} alt="Escala de satisfação do lead" className="max-w-sm mx-auto w-full" />
      </div>
    </Slide>
  );
}

/* 15 — Motivos de lead ruim */
export function ReasonsBad() {
  const reasons = [
    'Fora da área de atendimento da empresa',
    'Serviço que a empresa não oferece',
    'A pessoa não estava pronta para contratar',
    'Spam (robocall, trote, golpe, sem resposta)',
    'Lead duplicado (a pessoa já tinha entrado em contato)',
    'Procurando emprego ou tentando vender algo',
  ];
  return (
    <Slide icon={ThumbsDown} title="Por que NÃO ficou satisfeito? (lead ruim)" accent={C.red}>
      <div className="grid gap-7 lg:grid-cols-2 items-start">
        <div>
          <p className="text-sm sm:text-base" style={{ color: C.ink }}>
            Ao escolher uma carinha <span className="font-bold" style={{ color: C.red }}>insatisfeita</span>, o
            Google pergunta o motivo. Você pode marcar <b>mais de um</b>:
          </p>
          <div className="mt-4 flex flex-col gap-2.5">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <ThumbsDown size={18} color={C.red} className="mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base" style={{ color: C.ink }}>{r}</span>
              </div>
            ))}
          </div>
          <Card tint={C.redTint} border="#F2C7C3" className="mt-5 p-4">
            <p className="text-sm sm:text-base" style={{ color: C.ink }}>
              <span className="font-bold" style={{ color: C.red }}>Exemplo: </span>
              alguém ligou só para procurar emprego → marque <b style={{ color: C.navy }}>Very dissatisfied</b> + o
              motivo <span className="italic">“person seeking employment or trying to sell a product or service”.</span>
            </p>
          </Card>
        </div>
        <Frame src={reasonsBadImg} alt="Motivos de insatisfação" className="max-w-xs mx-auto w-full" />
      </div>
    </Slide>
  );
}

/* 16 — Motivos de lead bom */
export function ReasonsGood() {
  const reasons = [
    ['Virou um cliente / contrato fechado', 'It converted into a booked customer'],
    ['Pode virar cliente em breve', 'It could convert into a booked customer soon'],
    ['É relevante para os serviços da empresa', 'It is relevant to the services provided'],
    ['É um serviço de alto valor para a empresa', 'It is for a service that generates high value'],
    ['Outro motivo (descreva manualmente)', 'Other (please specify)'],
  ];
  return (
    <Slide icon={ThumbsUp} title="Por que ficou satisfeito? (lead bom)" accent={C.green}>
      <div className="grid gap-7 lg:grid-cols-2 items-start">
        <div>
          <p className="text-sm sm:text-base" style={{ color: C.ink }}>
            Para avaliações <span className="font-bold" style={{ color: C.green }}>positivas</span>, o Google
            também pede o motivo. Escolha o que melhor descreve o resultado:
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {reasons.map(([pt, en], i) => (
              <div key={i} className="flex items-start gap-2.5">
                <ThumbsUp size={18} color={C.green} className="mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base leading-tight">
                  <b style={{ color: C.ink }}>{pt}</b>
                  <br />
                  <span className="italic text-xs sm:text-sm" style={{ color: C.muted }}>{en}</span>
                </span>
              </div>
            ))}
          </div>
          <Card tint={C.greenTint} border="#BFE3C9" className="mt-5 p-4">
            <p className="text-sm sm:text-base" style={{ color: C.ink }}>
              <span className="font-bold" style={{ color: C.green }}>Fechou contrato? Agendou visita? </span>
              Marque o motivo certo — isso reforça o que é um bom lead para você.
            </p>
          </Card>
        </div>
        <Frame src={reasonsGoodImg} alt="Motivos de satisfação" className="max-w-xs mx-auto w-full" />
      </div>
    </Slide>
  );
}

/* 17 — Por que avaliar é tão importante (slide-chave) */
export function WhyRating() {
  return (
    <Slide icon={Star} title="Por que avaliar é tão importante"
      subtitle="Avaliar traz dois ganhos diretos para o seu negócio." accent={C.amber}>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card tint={C.blueTint} border="#C6DBFB" className="p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <IconBadge icon={Brain} color={C.blue} size="md" />
            <h3 className="text-lg sm:text-xl font-extrabold" style={{ color: C.blueDk }}>
              1. Melhora a inteligência dos anúncios
            </h3>
          </div>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: C.ink }}>
            Cada avaliação ensina a IA do Google quais leads realmente valem a pena para você. Com o tempo, os
            anúncios atraem mais leads parecidos com os bons — e menos com os ruins. Resultado: mais qualidade e
            menor custo por cliente.
          </p>
        </Card>
        <Card tint={C.greenTint} border="#BFE3C9" className="p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <IconBadge icon={HandCoins} color={C.green} size="md" />
            <h3 className="text-lg sm:text-xl font-extrabold" style={{ color: C.green }}>
              2. Crédito por leads inválidos
            </h3>
          </div>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: C.ink }}>
            Ao avaliar com o motivo certo (fora da área, serviço não oferecido, spam, duplicado), o Google analisa
            e pode conceder um crédito para usar nos próximos leads.
          </p>
          <p className="mt-3 text-xs sm:text-sm italic" style={{ color: C.muted }}>
            É assim que o crédito aparece no topo do inbox:
          </p>
          <img src={creditBanner} alt="Banner de crédito do inbox" className="mt-2 w-full h-auto rounded-md"
            style={{ border: `1px solid ${C.line}` }} />
        </Card>
      </div>
      <Card tint={C.amberTint} border="#F3D8B0" className="mt-5 p-4 sm:p-5 flex items-start gap-3">
        <IconBadge icon={TriangleAlert} color={C.amber} size="sm" />
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: C.ink }}>
          <span className="font-bold" style={{ color: C.amber }}>Importante: </span>
          o crédito é um valor para abater nos próximos leads (não é dinheiro de volta na conta), e{' '}
          <b>nem todo motivo gera crédito</b> — “não estava pronto para contratar”, por exemplo, ajuda o algoritmo,
          mas normalmente não gera crédito. O Google decide caso a caso. Avalie sempre com honestidade e{' '}
          <b>o quanto antes (há um prazo limitado).</b>
        </p>
      </Card>
    </Slide>
  );
}
