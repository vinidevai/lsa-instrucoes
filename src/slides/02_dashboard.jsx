import { LogIn, LayoutList, Table, Bell, Lightbulb, Search, TriangleAlert, Phone, Wrench, MapPin, MessageSquare, DollarSign, Clock, History, Hash, Zap, TrendingUp } from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { Card, IconBadge, Pill, NumberBadge, IconRow, InteractiveBanner } from '../components/ui.jsx';
import { usePick } from '../store.jsx';
import { C } from '../theme.js';
import { LeadsTable, LsaSimulator, BoldRowsDemo, CreditBanner } from '../lsa/LsaSim.jsx';

/* 5 — Acessando o inbox */
export function Access() {
  const t = usePick();
  const steps = [
    { pt: 'Abra o link acima no seu navegador.', en: 'Open the link above in your browser.' },
    { pt: 'Faça login com a conta Google da empresa.', en: 'Sign in with the business’s Google account.' },
    { pt: 'Pronto: a lista de leads (o dashboard) aparece.', en: 'Done: the leads list (the dashboard) appears.' },
  ];
  return (
    <Slide icon={LogIn} title={t({ pt: 'Acessando o inbox', en: 'Accessing the inbox' })} accent={C.blue}>
      <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
        <div>
          <a
            href="https://ads.google.com/localservices/inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm sm:text-base font-bold text-white break-all transition-opacity hover:opacity-85 active:opacity-70"
            style={{ backgroundColor: C.blue }}
          >
            ads.google.com/localservices/inbox
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-80"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
          <div className="mt-5 flex flex-col gap-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <NumberBadge n={i + 1} color={C.navy} />
                <span className="text-sm sm:text-base" style={{ color: C.text }}>{t(s)}</span>
              </div>
            ))}
          </div>
          <Card tint={C.card} className="mt-5 p-4 flex items-start gap-3">
            <IconBadge icon={Lightbulb} color={C.amber} size="sm" />
            <p className="text-sm sm:text-base" style={{ color: C.text }}>
              <span className="font-bold" style={{ color: C.amber }}>{t({ pt: 'Dica: ', en: 'Tip: ' })}</span>
              {t({ pt: 'salve nos favoritos. Funciona no computador e no celular.', en: 'bookmark it. It works on desktop and mobile.' })}
            </p>
          </Card>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.line}`, boxShadow: `0 10px 30px ${'rgba(0,0,0,.12)'}` }}>
            <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: C.card, borderBottom: `1px solid ${C.line}` }}>
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#E25B53' }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#E3B341' }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#3FA34D' }} />
              <span className="ml-2 flex-1 truncate rounded-full px-3 py-1 text-[11px]" style={{ backgroundColor: C.surface, color: C.muted, border: `1px solid ${C.line}` }}>
                ads.google.com/localservices/inbox
              </span>
            </div>
            <div className="p-2" style={{ backgroundColor: C.surface }}>
              <LeadsTable />
            </div>
          </div>
          <p className="mt-2 text-center text-xs sm:text-sm italic" style={{ color: C.muted }}>
            {t({ pt: 'É isso que você verá ao entrar.', en: 'This is what you’ll see when you log in.' })}
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* 6 — Dashboard interativo */
export function DashboardOverview() {
  const t = usePick();
  return (
    <Slide icon={LayoutList} title={t({ pt: 'Visão geral do dashboard', en: 'Dashboard overview' })} accent={C.blue}>
      <div className="flex flex-col gap-3">
        <InteractiveBanner>
          {t({ pt: '👆 Tela interativa — clique em qualquer lead para abrir os detalhes!', en: '👆 Interactive screen — click any lead to open its details!' })}
        </InteractiveBanner>
        <CreditBanner />
        <LsaSimulator />
        <p className="text-sm sm:text-base" style={{ color: C.muted }}>
          <span className="font-bold" style={{ color: C.heading }}>{t({ pt: 'Cada linha é um lead.', en: 'Each row is a lead.' })}</span>{' '}
          {t({
            pt: 'O banner verde no topo mostra o crédito previsto para o próximo mês.',
            en: 'The green banner at the top shows the credit expected for next month.',
          })}
        </p>
      </div>
    </Slide>
  );
}

/* 7 — Colunas, parte 1 */
export function Columns1() {
  const t = usePick();
  const rows = [
    { icon: Phone, term: 'Customer', d: { pt: 'o contato do lead: o número de telefone (ou o nome, se você adicionar).', en: 'the lead’s contact: the phone number (or the name, if you add one).' } },
    { icon: Wrench, term: 'Job type', d: { pt: 'o serviço que o lead procura (ex.: Roof inspection, Roof repair). Pode vir como “-”.', en: 'the service the lead wants (e.g., Roof inspection, Roof repair). May show as “-”.' } },
    { icon: Search, term: 'Search Intent', d: { pt: 'COMO o cliente te encontrou. “Category” = ele buscou por um tipo de serviço e descobriu o seu anúncio.', en: 'HOW the customer found you. “Category” = they searched for a type of service and discovered your ad.' } },
    { icon: MapPin, term: 'Location', d: { pt: 'a cidade do lead.', en: 'the lead’s city.' } },
    { icon: MessageSquare, term: 'Lead type', d: { pt: 'como o lead chegou: “Message” (mensagem) ou “Phone” (ligação).', en: 'how the lead arrived: “Message” or “Phone” (a call).' } },
  ];
  return (
    <Slide icon={Table} title={t({ pt: 'As colunas do dashboard — parte 1', en: 'The dashboard columns — part 1' })}
      subtitle={t({ pt: 'Os títulos aparecem em inglês — é a tela real do Google.', en: 'The headers are in English — it’s the real Google screen.' })} accent={C.blue}>
      <div className="grid gap-6 lg:grid-cols-[1fr_290px]">
        <div className="flex flex-col gap-4 sm:gap-5">
          {rows.map((r, i) => (<IconRow key={i} icon={r.icon} color={C.blue} term={r.term}>{t(r.d)}</IconRow>))}
        </div>
        <Card tint={C.blueTint} border={C.blue} className="p-4 sm:p-5 self-start">
          <IconBadge icon={Search} color={C.blueDk} size="sm" />
          <p className="mt-3 font-bold" style={{ color: C.blueDk }}>{t({ pt: 'Atenção', en: 'Heads up' })}</p>
          <p className="text-sm mt-1" style={{ color: C.text }}>
            {t({ pt: '“Category” é um valor da coluna Search Intent — não é o nome da coluna. Quase todos os leads chegam como “Category”.', en: '“Category” is a value of the Search Intent column — not the column name. Almost all leads come in as “Category”.' })}
          </p>
        </Card>
      </div>
    </Slide>
  );
}

/* 8 — Colunas, parte 2 */
export function Columns2() {
  const t = usePick();
  const rows = [
    { icon: DollarSign, color: C.green, term: 'Charge status', d: { pt: 'se o Google cobrou pelo lead. Pode ser Charged, Not charged ou In review.', en: 'whether Google charged for the lead. Can be Charged, Not charged or In review.' } },
    { icon: Clock, color: C.blue, term: 'Lead received', d: { pt: 'data e hora do primeiro contato do lead.', en: 'date and time of the lead’s first contact.' } },
    { icon: History, color: C.blue, term: 'Last activity', d: { pt: 'data e hora da última interação na conversa.', en: 'date and time of the last interaction in the conversation.' } },
    { icon: Hash, color: C.blue, term: 'Lead id', d: { pt: 'número único do lead. Útil para suporte e controle.', en: 'the lead’s unique number. Useful for support and tracking.' } },
  ];
  const legend = [
    { v: 'Charged', c: C.blue, l: { pt: 'cobrado', en: 'charged' } },
    { v: 'Not charged', c: C.grey, l: { pt: 'não cobrado', en: 'not charged' } },
    { v: 'In review', c: C.amber, l: { pt: 'em análise', en: 'under review' } },
  ];
  return (
    <Slide icon={Table} title={t({ pt: 'As colunas do dashboard — parte 2', en: 'The dashboard columns — part 2' })} accent={C.blue}>
      <div className="grid gap-6 lg:grid-cols-[1fr_290px]">
        <div>
          <div className="flex flex-col gap-4 sm:gap-5">
            {rows.map((r, i) => (<IconRow key={i} icon={r.icon} color={r.color} term={r.term}>{t(r.d)}</IconRow>))}
          </div>
          <div className="mt-6">
            <p className="font-bold mb-3" style={{ color: C.heading }}>{t({ pt: 'Os 3 valores de Charge status:', en: 'The 3 Charge status values:' })}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" style={{ color: C.muted }}>
              {legend.map((g) => (
                <span key={g.v} className="inline-flex items-center gap-1.5">
                  <Pill color={g.c}>{g.v}</Pill> <span>{t(g.l)}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <Card tint={C.amberTint} border={C.amber} className="p-4 sm:p-5 self-start">
          <IconBadge icon={TriangleAlert} color={C.amber} size="sm" />
          <p className="mt-3 font-bold" style={{ color: C.amber }}>{t({ pt: 'Não confunda', en: 'Don’t confuse' })}</p>
          <p className="text-sm mt-1" style={{ color: C.text }}>
            {t({ pt: 'Charge status (cobrança) é diferente do campo Status dentro do lead (Active / Archived).', en: 'Charge status (billing) is different from the Status field inside the lead (Active / Archived).' })}
          </p>
        </Card>
      </div>
    </Slide>
  );
}

/* 9 — Leads em negrito */
export function BoldRows() {
  const t = usePick();
  const cards = [
    { icon: Zap, color: C.blue, h: { pt: 'Responda o quanto antes', en: 'Reply as soon as possible' }, b: { pt: 'A rapidez aumenta muito a chance de fechar — quem responde primeiro costuma ganhar o cliente.', en: 'Speed greatly increases your chance to close — whoever replies first usually wins the customer.' } },
    { icon: TrendingUp, color: C.green, h: { pt: 'Melhora o seu ranking', en: 'Improves your ranking' }, b: { pt: 'Responder rápido e com frequência ajuda o seu anúncio a aparecer melhor no Google.', en: 'Replying fast and often helps your ad rank better on Google.' } },
    { icon: Bell, color: C.amber, h: { pt: 'Cheque o inbox todo dia', en: 'Check the inbox every day' }, b: { pt: 'Crie o hábito de abrir o inbox várias vezes ao dia para não deixar ninguém esperando.', en: 'Build the habit of opening the inbox several times a day so no one waits.' } },
  ];
  return (
    <Slide icon={Bell} title={t({ pt: 'Leads em negrito = precisam de você', en: 'Leads in bold = they need you' })} accent={C.amber}>
      <div className="max-w-3xl mx-auto w-full">
        <BoldRowsDemo />
        <p className="mt-2 text-center text-xs font-bold" style={{ color: C.amber }}>
          ↑ {t({ pt: 'a primeira linha está em NEGRITO', en: 'the first row is in BOLD' })}
        </p>
      </div>
      <p className="mt-4 text-center text-sm sm:text-base max-w-3xl mx-auto" style={{ color: C.text }}>
        {t({ pt: 'Quando os dados de um lead aparecem em ', en: 'When a lead’s data appears in ' })}
        <span className="font-bold" style={{ color: C.amber }}>{t({ pt: 'negrito', en: 'bold' })}</span>
        {t({ pt: ', ele respondeu e está aguardando a sua resposta.', en: ', it means they replied and are waiting for your response.' })}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {cards.map((c, i) => (
          <Card key={i} tint={C.card} className="p-4">
            <IconBadge icon={c.icon} color={c.color} size="md" />
            <h3 className="mt-3 font-bold text-sm sm:text-base" style={{ color: C.heading }}>{t(c.h)}</h3>
            <p className="text-xs sm:text-sm mt-1" style={{ color: C.muted }}>{t(c.b)}</p>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
