import {
  LogIn, LayoutList, Table, Bell, Lightbulb, Search, TriangleAlert,
  Phone, Wrench, MapPin, MessageSquare, DollarSign, Clock, History, Hash,
  Zap, TrendingUp,
} from 'lucide-react';
import Slide from '../components/Slide.jsx';
import { Card, IconBadge, Pill, NumberBadge, IconRow, Frame } from '../components/ui.jsx';
import { C } from '../theme.js';
import dashboard from '../assets/dashboard.jpg';
import boldRows from '../assets/bold-rows.jpg';

/* 5 — Acessando o inbox */
export function Access() {
  const steps = [
    'Abra o link acima no seu navegador.',
    'Faça login com a conta Google da empresa.',
    'Pronto: a lista de leads (o dashboard) aparece.',
  ];
  return (
    <Slide icon={LogIn} title="Acessando o inbox" accent={C.blue}>
      <div className="grid gap-6 lg:gap-10 lg:grid-cols-2 items-start">
        <div>
          <div className="inline-block rounded-full px-4 py-2 text-sm sm:text-base font-bold text-white break-all"
            style={{ backgroundColor: C.blue }}>
            ads.google.com/localservices/inbox
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {steps.map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <NumberBadge n={i + 1} color={C.navy} />
                <span className="text-sm sm:text-base" style={{ color: C.ink }}>{t}</span>
              </div>
            ))}
          </div>
          <Card tint={C.card} className="mt-5 p-4 flex items-start gap-3">
            <IconBadge icon={Lightbulb} color={C.amber} size="sm" />
            <p className="text-sm sm:text-base" style={{ color: C.ink }}>
              <span className="font-bold" style={{ color: C.amber }}>Dica: </span>
              salve nos favoritos. Funciona no computador e no celular.
            </p>
          </Card>
        </div>

        {/* Mock do navegador com prévia do dashboard */}
        <div>
          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.line}`, boxShadow: '0 10px 30px rgba(0,0,0,.12)' }}>
            <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: '#DDE1E7' }}>
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#E25B53' }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#E3B341' }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: '#3FA34D' }} />
              <span className="ml-2 flex-1 truncate rounded-full bg-white px-3 py-1 text-[11px]" style={{ color: C.muted }}>
                ads.google.com/localservices/inbox
              </span>
            </div>
            <img src={dashboard} alt="Prévia do dashboard de leads" className="block w-full h-auto" />
          </div>
          <p className="mt-2 text-center text-xs sm:text-sm italic" style={{ color: C.muted }}>
            É isso que você verá ao entrar.
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* 6 — Visão geral do dashboard */
export function DashboardOverview() {
  return (
    <Slide icon={LayoutList} title="Visão geral do dashboard" accent={C.blue}>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-4xl">
          <Frame src={dashboard} alt="Dashboard de leads do LSA" />
          {/* Destaque do banner de crédito (posições em % acompanham a imagem) */}
          <div className="absolute rounded-md pointer-events-none"
            style={{ left: '12.3%', top: '12.1%', width: '75.4%', height: '5.8%', border: `2px solid ${C.green}` }} />
        </div>
        <p className="mt-5 text-center text-sm sm:text-base max-w-3xl" style={{ color: C.muted }}>
          <span className="font-bold" style={{ color: C.navy }}>Cada linha é um lead.</span>{' '}
          No topo, o <span className="font-bold" style={{ color: C.green }}>banner verde</span> mostra o
          crédito previsto para o próximo mês (mais sobre isso no fim).
        </p>
      </div>
    </Slide>
  );
}

/* 7 — Colunas, parte 1 */
export function Columns1() {
  const rows = [
    { icon: Phone, term: 'Customer', t: 'o contato do lead: o número de telefone (ou o nome, se você adicionar).' },
    { icon: Wrench, term: 'Job type', t: 'o serviço que o lead procura (ex.: Roof inspection, Roof repair). Pode vir como “-”.' },
    { icon: Search, term: 'Search Intent', t: 'COMO o cliente te encontrou. “Category” = ele buscou por um tipo de serviço e descobriu o seu anúncio.' },
    { icon: MapPin, term: 'Location', t: 'a cidade do lead (ex.: Rutland, Gardner).' },
    { icon: MessageSquare, term: 'Lead type', t: 'como o lead chegou: “Message” (mensagem) ou “Phone” (ligação).' },
  ];
  return (
    <Slide icon={Table} title="As colunas do dashboard — parte 1"
      subtitle="Os títulos aparecem em inglês — é a tela real do Google." accent={C.blue}>
      <div className="grid gap-6 lg:grid-cols-[1fr_290px]">
        <div className="flex flex-col gap-4 sm:gap-5">
          {rows.map((r, i) => (
            <IconRow key={i} icon={r.icon} color={C.blue} term={r.term}>{r.t}</IconRow>
          ))}
        </div>
        <Card tint={C.blueTint} border="#C6DBFB" className="p-4 sm:p-5 self-start">
          <IconBadge icon={Search} color={C.blueDk} size="sm" />
          <p className="mt-3 font-bold" style={{ color: C.blueDk }}>Atenção</p>
          <p className="text-sm mt-1" style={{ color: C.ink }}>
            “Category” é um <b>valor</b> da coluna <b style={{ color: C.blueDk }}>Search Intent</b> — não é o
            nome da coluna. Quase todos os leads chegam como “Category”.
          </p>
        </Card>
      </div>
    </Slide>
  );
}

/* 8 — Colunas, parte 2 */
export function Columns2() {
  const rows = [
    { icon: DollarSign, color: C.green, term: 'Charge status', t: 'se o Google cobrou pelo lead. Pode ser Charged, Not charged ou In review.' },
    { icon: Clock, color: C.blue, term: 'Lead received', t: 'data e hora do primeiro contato do lead com a empresa.' },
    { icon: History, color: C.blue, term: 'Last activity', t: 'data e hora da última interação na conversa — sua ou do lead.' },
    { icon: Hash, color: C.blue, term: 'Lead id', t: 'número único do lead. Útil para suporte e para o seu controle.' },
  ];
  return (
    <Slide icon={Table} title="As colunas do dashboard — parte 2" accent={C.blue}>
      <div className="grid gap-6 lg:grid-cols-[1fr_290px]">
        <div>
          <div className="flex flex-col gap-4 sm:gap-5">
            {rows.map((r, i) => (
              <IconRow key={i} icon={r.icon} color={r.color} term={r.term}>{r.t}</IconRow>
            ))}
          </div>
          <div className="mt-6">
            <p className="font-bold mb-3" style={{ color: C.navy }}>Os 3 valores de Charge status:</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" style={{ color: C.muted }}>
              <Pill color={C.blue}>Charged</Pill> <span>cobrado</span>
              <Pill color={C.grey}>Not charged</Pill> <span>não cobrado</span>
              <Pill color={C.amber}>In review</Pill> <span>em análise</span>
            </div>
          </div>
        </div>
        <Card tint={C.amberTint} border="#F3D8B0" className="p-4 sm:p-5 self-start">
          <IconBadge icon={TriangleAlert} color={C.amber} size="sm" />
          <p className="mt-3 font-bold" style={{ color: C.amber }}>Não confunda</p>
          <p className="text-sm mt-1" style={{ color: C.ink }}>
            <b style={{ color: C.navy }}>Charge status</b> (cobrança) é diferente do campo{' '}
            <b style={{ color: C.navy }}>Status</b> dentro do lead (Active / Archived).
          </p>
        </Card>
      </div>
    </Slide>
  );
}

/* 9 — Leads em negrito */
export function BoldRows() {
  const cards = [
    { icon: Zap, color: C.blue, h: 'Responda o quanto antes', b: 'A rapidez aumenta muito a chance de fechar — quem responde primeiro costuma ganhar o cliente.' },
    { icon: TrendingUp, color: C.green, h: 'Melhora o seu ranking', b: 'Responder rápido e com frequência ajuda o seu anúncio a aparecer melhor no Google.' },
    { icon: Bell, color: C.amber, h: 'Cheque o inbox todo dia', b: 'Crie o hábito de abrir o inbox várias vezes ao dia para não deixar ninguém esperando.' },
  ];
  return (
    <Slide icon={Bell} title="Leads em negrito = precisam de você" accent={C.amber}>
      <div className="relative max-w-4xl mx-auto w-full">
        <Frame src={boldRows} alt="Duas linhas de leads: a de cima em negrito" />
        <div className="absolute rounded-md pointer-events-none"
          style={{ left: '1%', top: '6%', width: '98%', height: '46%', border: `2.5px solid ${C.amber}` }} />
        <span className="absolute -top-3 right-2">
          <Pill color={C.amber}>EM NEGRITO ▼</Pill>
        </span>
      </div>
      <p className="mt-5 text-center text-sm sm:text-base max-w-3xl mx-auto" style={{ color: C.ink }}>
        Quando os dados de um lead aparecem em <span className="font-bold" style={{ color: C.amber }}>negrito</span>,
        significa que ele respondeu e está <span className="font-bold">aguardando a sua resposta.</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {cards.map((c, i) => (
          <Card key={i} tint={C.card} className="p-4">
            <IconBadge icon={c.icon} color={c.color} size="md" />
            <h3 className="mt-3 font-bold text-sm sm:text-base" style={{ color: C.navy }}>{c.h}</h3>
            <p className="text-xs sm:text-sm mt-1" style={{ color: C.muted }}>{c.b}</p>
          </Card>
        ))}
      </div>
    </Slide>
  );
}
