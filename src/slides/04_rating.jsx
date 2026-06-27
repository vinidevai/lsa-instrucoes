import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Star, Brain, HandCoins, TriangleAlert } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { Card, IconBadge, InteractiveBanner } from '../components/ui.jsx';
import { usePick } from '../store.jsx';
import { C } from '../theme.js';
import { SatisfactionScale, ReasonsCard, CreditBanner, RatingFlow } from '../lsa/LsaSim.jsx';

/* 14 — Escala de avaliação (interativa) */
export function RateScale() {
  const t = usePick();
  const [open, setOpen] = useState(false);
  return (
    <Slide icon={Star} title={t({ pt: 'Avalie o lead: Rate this lead', en: 'Rate the lead: Rate this lead' })} accent={C.amber}>
      <InteractiveBanner>
        {t({ pt: '👆 Tela interativa — clique em "Rate this lead" abaixo para experimentar!', en: '👆 Interactive screen — click "Rate this lead" below to try it out!' })}
      </InteractiveBanner>
      <div className="grid gap-7 lg:grid-cols-2 items-start">
        <div>
          <p className="text-sm sm:text-base" style={{ color: C.text }}>
            {t({ pt: 'Ao terminar o atendimento, clique em ', en: 'When you finish handling the lead, click ' })}
            <span className="font-bold" style={{ color: C.amber }}>Rate this lead</span>
            {t({ pt: ' e diga o quão satisfeita a empresa ficou. São 5 níveis:', en: ' and say how satisfied the business was. There are 5 levels:' })}
          </p>
          <button onClick={() => setOpen(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition-transform active:scale-95" style={{ backgroundColor: C.amber }}>
            <Star size={16} /> Rate this lead
          </button>
          <Card tint={C.amberTint} border={C.amber} className="mt-5 p-4 flex items-center gap-3">
            <IconBadge icon={Star} color={C.amber} size="sm" />
            <p className="text-sm sm:text-base font-bold" style={{ color: C.amber }}>
              {t({ pt: 'Avalie TODOS os leads ao finalizar — bons e ruins.', en: 'Rate EVERY lead when you finish — good and bad.' })}
            </p>
          </Card>
        </div>
        <SatisfactionScale />
      </div>
      <AnimatePresence>{open && <RatingFlow onClose={() => setOpen(false)} />}</AnimatePresence>
    </Slide>
  );
}

/* 15 — Motivos de lead ruim */
export function ReasonsBad() {
  const t = usePick();
  return (
    <Slide icon={Star} title={t({ pt: 'Por que NÃO ficou satisfeito? (lead ruim)', en: 'Why are you NOT satisfied? (bad lead)' })} accent={C.red}>
      <div className="grid gap-7 lg:grid-cols-2 items-start">
        <div>
          <p className="text-sm sm:text-base" style={{ color: C.text }}>
            {t({ pt: 'Ao escolher uma carinha ', en: 'When you pick a ' })}
            <span className="font-bold" style={{ color: C.red }}>{t({ pt: 'insatisfeita', en: 'dissatisfied' })}</span>
            {t({ pt: ' face, o Google pergunta o motivo. Você pode marcar mais de um:', en: ' face, Google asks the reason. You can select more than one:' })}
          </p>
          <Card tint={C.redTint} border={C.red} className="mt-5 p-4">
            <p className="text-sm sm:text-base" style={{ color: C.text }}>
              <span className="font-bold" style={{ color: C.red }}>{t({ pt: 'Exemplo: ', en: 'Example: ' })}</span>
              {t({ pt: 'alguém ligou só para procurar emprego → marque ', en: 'someone called just looking for a job → choose ' })}
              <b style={{ color: C.heading }}>Very dissatisfied</b>
              {t({ pt: ' + o motivo ', en: ' + the reason ' })}
              <span className="italic">“person seeking employment or trying to sell a product or service”.</span>
            </p>
          </Card>
        </div>
        <ReasonsCard kind="neg" />
      </div>
    </Slide>
  );
}

/* 16 — Motivos de lead bom */
export function ReasonsGood() {
  const t = usePick();
  return (
    <Slide icon={Star} title={t({ pt: 'Por que ficou satisfeito? (lead bom)', en: 'Why are you satisfied? (good lead)' })} accent={C.green}>
      <div className="grid gap-7 lg:grid-cols-2 items-start">
        <div>
          <p className="text-sm sm:text-base" style={{ color: C.text }}>
            {t({ pt: 'Para avaliações ', en: 'For ' })}
            <span className="font-bold" style={{ color: C.green }}>{t({ pt: 'positivas', en: 'positive' })}</span>
            {t({ pt: ', o Google também pede o motivo. Escolha o que melhor descreve o resultado:', en: ' ratings, Google also asks the reason. Pick the one that best describes the outcome:' })}
          </p>
          <Card tint={C.greenTint} border={C.green} className="mt-5 p-4">
            <p className="text-sm sm:text-base" style={{ color: C.text }}>
              <span className="font-bold" style={{ color: C.green }}>{t({ pt: 'Fechou contrato? Agendou visita? ', en: 'Closed a deal? Scheduled a visit? ' })}</span>
              {t({ pt: 'Marque o motivo certo — isso reforça o que é um bom lead para você.', en: 'Choose the right reason — it reinforces what a good lead means for you.' })}
            </p>
          </Card>
        </div>
        <ReasonsCard kind="pos" />
      </div>
    </Slide>
  );
}

/* 17 — Por que avaliar é tão importante (slide-chave) */
export function WhyRating() {
  const t = usePick();
  return (
    <Slide icon={Star} title={t({ pt: 'Por que avaliar é tão importante', en: 'Why rating matters so much' })}
      subtitle={t({ pt: 'Avaliar traz dois ganhos diretos para o seu negócio.', en: 'Rating brings two direct gains for your business.' })} accent={C.amber}>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card tint={C.blueTint} border={C.blue} className="p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <IconBadge icon={Brain} color={C.blue} size="md" />
            <h3 className="text-lg sm:text-xl font-extrabold" style={{ color: C.blueDk }}>{t({ pt: '1. Melhora a inteligência dos anúncios', en: '1. Improves the ads’ intelligence' })}</h3>
          </div>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: C.text }}>
            {t({ pt: 'Cada avaliação ensina a IA do Google quais leads realmente valem a pena para você. Com o tempo, os anúncios atraem mais leads parecidos com os bons — e menos com os ruins. Resultado: mais qualidade e menor custo por cliente.', en: 'Each rating teaches Google’s AI which leads are truly worth it for you. Over time, the ads attract more leads like the good ones — and fewer like the bad ones. Result: more quality and lower cost per customer.' })}
          </p>
        </Card>
        <Card tint={C.greenTint} border={C.green} className="p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <IconBadge icon={HandCoins} color={C.green} size="md" />
            <h3 className="text-lg sm:text-xl font-extrabold" style={{ color: C.green }}>{t({ pt: '2. Crédito por leads inválidos', en: '2. Credit for invalid leads' })}</h3>
          </div>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: C.text }}>
            {t({ pt: 'Ao avaliar com o motivo certo (fora da área, serviço não oferecido, spam, duplicado), o Google analisa e pode conceder um crédito para usar nos próximos leads.', en: 'When you rate with the right reason (out of area, service not offered, spam, duplicate), Google reviews it and may grant a credit to use on future leads.' })}
          </p>
          <p className="mt-3 text-xs sm:text-sm italic" style={{ color: C.muted }}>
            {t({ pt: 'É assim que o crédito aparece no topo do inbox:', en: 'This is how the credit shows at the top of the inbox:' })}
          </p>
          <div className="mt-2"><CreditBanner /></div>
        </Card>
      </div>
      <Card tint={C.amberTint} border={C.amber} className="mt-5 p-4 sm:p-5 flex items-start gap-3">
        <IconBadge icon={TriangleAlert} color={C.amber} size="sm" />
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: C.text }}>
          <span className="font-bold" style={{ color: C.amber }}>{t({ pt: 'Importante: ', en: 'Important: ' })}</span>
          {t({ pt: 'o crédito é um valor para abater nos próximos leads (não é dinheiro de volta na conta), e nem todo motivo gera crédito — “não estava pronto para contratar”, por exemplo, ajuda o algoritmo, mas normalmente não gera crédito. O Google decide caso a caso. Avalie sempre com honestidade e o quanto antes (há um prazo limitado).', en: 'the credit is an amount to offset future leads (not cash back to your account), and not every reason earns a credit — “not ready to book”, for example, helps the algorithm but usually doesn’t earn a credit. Google decides case by case. Always rate honestly and as soon as possible (there’s a limited window).' })}
        </p>
      </Card>
    </Slide>
  );
}
