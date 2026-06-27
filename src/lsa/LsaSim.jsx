import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Eye, Archive, Star, X, Check, Hand,
  Play, Pause, Phone,
} from 'lucide-react';
import { C } from '../theme.js';
import { usePick } from '../store.jsx';

/* =========================================================================
   Recriação da interface do LSA (dados FICTÍCIOS — nada real).
   Os rótulos do produto ficam em inglês (como na tela real); as dicas do
   guia são bilíngues via usePick().
   ========================================================================= */

const LEADS = [
  {
    id: '8042193', phone: '(555) 014-2079', job: 'Roof inspection', intent: 'Category',
    city: 'Springfield', type: 'Message', charge: 'Charged',
    received: 'Mar 17, 7:03 PM', last: 'Mar 19, 10:37 AM', unread: true,
    msg: 'Hi! I noticed a small water stain on my bedroom ceiling and I think it would be important to get a roof inspection. My house is fairly new, so I want to be sure it was built correctly.',
  },
  {
    id: '7991864', phone: '(555) 027-5510', job: 'Roof repair', intent: 'Category',
    city: 'Fairview', type: 'Phone', charge: 'Not charged',
    received: 'Feb 27, 9:38 AM', last: 'Feb 27, 9:38 AM', unread: false,
    callDuration: '1:23',
  },
  {
    id: '7767661', phone: '(555) 031-8842', job: 'Gutter replacement', intent: 'Category',
    city: 'Riverside', type: 'Phone', charge: 'Charged',
    received: 'Feb 18, 6:07 PM', last: 'Feb 19, 6:09 PM', unread: false,
    callDuration: '2:07',
  },
  {
    id: '7449970', phone: '(555) 040-2281', job: 'Roof inspection', intent: 'Category',
    city: 'Greenville', type: 'Message', charge: 'Not charged',
    received: 'Jan 28, 6:08 PM', last: 'Jan 28, 6:08 PM', unread: false,
    msg: 'Good afternoon, I need a quote for a roof inspection. What\'s your availability?',
  },
];

const COLS = ['Customer', 'Job type', 'Search Intent', 'Location', 'Lead type', 'Charge status', 'Lead received', 'Last activity', 'Lead id'];

function ChargePill({ value }) {
  const charged = value === 'Charged';
  return (
    <span className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap"
      style={{ backgroundColor: charged ? C.blueTint : C.card, color: charged ? C.blue : C.muted }}>
      {value}
    </span>
  );
}

/* ----------------------------- Dashboard ----------------------------- */
export function LeadsTable({ onOpen }) {
  return (
    <div className="rounded-xl overflow-hidden w-full" style={{ border: `1px solid ${C.line}`, backgroundColor: C.surface }}>
      <div className="slide-scroll overflow-x-auto">
        <table className="w-full border-collapse" style={{ minWidth: 820 }}>
          <thead>
            <tr style={{ backgroundColor: C.card }}>
              {COLS.map((c) => (
                <th key={c} className="text-left text-[11px] sm:text-xs font-semibold uppercase tracking-wide px-3 py-2.5 whitespace-nowrap"
                  style={{ color: C.muted, borderBottom: `1px solid ${C.line}` }}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LEADS.map((l) => {
              const b = l.unread;
              return (
                <tr key={l.id} onClick={() => onOpen?.(l)}
                  className="cursor-pointer transition-colors"
                  style={{ borderBottom: `1px solid ${C.line}` }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.card)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
                  <Td bold={b}>{l.phone}</Td>
                  <Td bold={b}>{l.job}</Td>
                  <Td bold={b}>{l.intent}</Td>
                  <Td bold={b}>{l.city}</Td>
                  <Td bold={b}>{l.type}</Td>
                  <td className="px-3 py-3"><ChargePill value={l.charge} /></td>
                  <Td bold={b}>{l.received}</Td>
                  <Td bold={b}>{l.last}</Td>
                  <Td bold={b}>{l.id}</Td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Td({ children, bold }) {
  return (
    <td className="px-3 py-3 text-xs sm:text-sm whitespace-nowrap"
      style={{ color: bold ? C.heading : C.text, fontWeight: bold ? 700 : 400 }}>
      {children}
    </td>
  );
}

/* ----------- Guia numerado dos botões (faixa abaixo da barra azul) ----------- */
function ActionGuide({ pick }) {
  const items = [
    {
      n: '①', name: 'SHOW NUMBER',
      desc: pick({ pt: 'Revela o telefone completo para você ligar de volta', en: 'Reveals the full phone number so you can call back' }),
      color: C.blue,
    },
    {
      n: '②', name: 'ARCHIVE',
      desc: pick({ pt: 'Arquiva o lead da lista (histórico permanece)', en: 'Archives the lead from the list (history is kept)' }),
      color: C.grey,
    },
    {
      n: '③', name: 'MARK BOOKED',
      desc: pick({ pt: 'Agendou ou fechou o serviço? Clique aqui!', en: 'Scheduled or closed the job? Click here!' }),
      color: C.green,
    },
    {
      n: '④', name: 'Rate this lead →',
      desc: pick({ pt: 'Avalie a qualidade do lead — muito importante!', en: 'Rate the lead quality — very important!' }),
      color: C.amber,
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-2.5 px-3 py-3"
      style={{ backgroundColor: C.card, borderBottom: `1px solid ${C.line}` }}>
      {items.map((it) => (
        <div key={it.n} className="flex items-start gap-1.5">
          <span
            className="shrink-0 mt-0.5 inline-flex items-center justify-center rounded text-[10px] font-bold leading-none px-1.5 py-0.5"
            style={{ backgroundColor: it.color, color: '#fff', minWidth: 18 }}>
            {it.n}
          </span>
          <div>
            <p className="text-[11px] font-bold leading-none" style={{ color: C.heading }}>{it.name}</p>
            <p className="text-[10px] mt-0.5 leading-snug" style={{ color: C.muted }}>{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------- Player de gravação para leads do tipo Phone ----------- */
function PhoneCallSection({ lead, pick }) {
  const [playing, setPlaying] = useState(false);
  const duration = lead.callDuration || '1:45';
  return (
    <div className="mt-5">
      <h4 className="font-bold text-sm sm:text-base" style={{ color: C.heading }}>Conversation</h4>
      <div className="mt-2 rounded-xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
        {/* Cabeçalho da chamada */}
        <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: C.card, borderBottom: `1px solid ${C.line}` }}>
          <span className="h-9 w-9 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: C.blueTint }}>
            <Phone size={16} color={C.blue} />
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm" style={{ color: C.heading }}>
              {pick({ pt: 'Ligação recebida', en: 'Incoming phone call' })}
            </p>
            <p className="text-xs" style={{ color: C.muted }}>{lead.received}</p>
          </div>
          <span className="text-xs font-semibold tabular-nums px-2.5 py-1 rounded-full"
            style={{ backgroundColor: C.blueTint, color: C.blue }}>
            {duration}
          </span>
        </div>

        {/* Player de áudio */}
        <div className="px-4 py-3" style={{ backgroundColor: C.surface }}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPlaying(p => !p)}
              className="h-9 w-9 rounded-full flex items-center justify-center shrink-0 transition-transform active:scale-90"
              style={{ backgroundColor: C.blue }}>
              {playing
                ? <Pause size={14} color="#fff" />
                : <Play size={14} color="#fff" fill="#fff" />}
            </button>
            <div className="flex-1 h-1.5 rounded-full relative" style={{ backgroundColor: C.line }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: playing ? '35%' : '0%',
                  backgroundColor: C.blue,
                  transition: playing ? 'width 30s linear' : 'width 0.3s ease',
                }} />
            </div>
            <span className="text-xs tabular-nums shrink-0" style={{ color: C.muted }}>
              {playing ? '0:29' : '0:00'} / {duration}
            </span>
          </div>

          {/* Dica de uso */}
          <div className="mt-3 flex items-start gap-2 rounded-lg px-3 py-2.5"
            style={{ backgroundColor: C.amberTint }}>
            <span className="text-sm shrink-0">💡</span>
            <p className="text-xs leading-snug" style={{ color: C.text }}>
              <span className="font-semibold" style={{ color: C.amber }}>
                {pick({ pt: 'Como usar: ', en: 'How to use: ' })}
              </span>
              {pick({
                pt: 'Clique no play para ouvir a gravação da ligação. Isso ajuda a entender o pedido do cliente antes de retornar — e a avaliar o lead com mais precisão.',
                en: 'Click play to listen to the call recording. This helps you understand the customer\'s request before calling back — and to rate the lead more accurately.',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- Lead detail ---------------------------- */
export function LeadDetail({ lead = LEADS[0], onBack }) {
  const pick = usePick();
  const [revealed, setRevealed] = useState(false);
  const [archived, setArchived] = useState(false);
  const [booked, setBooked] = useState(false);
  const [modal, setModal] = useState(null);

  const isPhone = lead.type === 'Phone';

  const BarBtn = ({ onClick, children, primary }) => (
    <button onClick={onClick}
      className="px-2.5 py-1.5 rounded-md text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-colors active:scale-95"
      style={primary
        ? { backgroundColor: '#fff', color: C.blue }
        : { color: '#fff', border: '1px solid rgba(255,255,255,.55)' }}>
      {children}
    </button>
  );

  return (
    <div className="rounded-xl overflow-hidden w-full" style={{ border: `1px solid ${C.line}`, backgroundColor: C.surface }}>

      {/* ── Barra de ações (azul) ── */}
      <div className="flex items-center gap-2 sm:gap-2.5 px-3 py-2.5 flex-wrap" style={{ backgroundColor: C.blue }}>
        {onBack && (
          <button onClick={onBack} aria-label="Back" className="text-white/90 hover:text-white shrink-0">
            <ArrowLeft size={20} />
          </button>
        )}
        <span className="text-white font-semibold text-sm sm:text-base">Potential Customer</span>
        <span className="text-white/80 text-xs sm:text-sm tabular-nums">
          {revealed ? lead.phone : lead.phone.replace(/\d(?=\d{0,3}$)/g, '•')}
        </span>
        <div className="flex items-center gap-1.5 ml-auto flex-wrap">
          <BarBtn onClick={() => setRevealed(true)}>
            <Eye size={11} className="inline mr-1" />① SHOW NUMBER
          </BarBtn>
          <BarBtn onClick={() => setArchived(true)}>
            <Archive size={11} className="inline mr-1" />② ARCHIVE
          </BarBtn>
          <BarBtn primary onClick={() => setModal('booked')}>
            ③ MARK BOOKED
          </BarBtn>
        </div>
      </div>

      {/* ── Guia numerado dos botões ── */}
      <ActionGuide pick={pick} />

      <div className="p-4 sm:p-5">
        {/* Feedback de status */}
        {(archived || booked) && (
          <div className="mb-3 text-xs sm:text-sm rounded-md px-3 py-1.5" style={{ backgroundColor: C.greenTint, color: C.green }}>
            {archived && pick({ pt: 'Lead arquivado (apenas demonstração).', en: 'Lead archived (demo only).' })}
            {booked && pick({ pt: ' Marcado como agendado!', en: ' Marked as booked!' })}
          </div>
        )}

        {/* Lead summary + botão de rating */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold text-base sm:text-lg" style={{ color: C.heading }}>Lead summary</h3>
            <p className="text-xs" style={{ color: C.muted }}>Received on {lead.received}.</p>
          </div>
          <button
            onClick={() => setModal('rate')}
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-[13px] font-semibold shrink-0 transition-transform active:scale-95"
            style={{ backgroundColor: C.amberTint, color: C.amber, border: `1px solid ${C.amber}` }}>
            <Star size={13} />
            ④ Rate this lead
          </button>
        </div>

        {/* Campos do lead */}
        <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
          <Field k="Status" v="Active" />
          <Field k="Charge status" v={<ChargePill value={lead.charge} />} />
          <Field k="Lead id" v={lead.id} />
          <Field k="Lead type" v={lead.type} />
          <Field k="Business category" v="roofer" />
          <Field k="Service type" v={lead.job} />
          <Field k="Location" v={lead.city} />
          <Field k="Search intent" v={lead.intent} />
        </dl>

        {/* Conversation: Phone → player | Message → bolhas de texto */}
        {isPhone ? (
          <PhoneCallSection lead={lead} pick={pick} />
        ) : (
          <>
            <h4 className="mt-5 font-bold text-sm sm:text-base" style={{ color: C.heading }}>Conversation</h4>
            <div className="mt-2 space-y-3">
              <Bubble who="P" color="#F4663B" name="Potential customer" time={lead.received}>
                {lead.msg || 'Hi, I would like to get a quote for my roof. Thanks!'}
              </Bubble>
              <Bubble who="U" color={C.blue} name="Your business" time={lead.received}>
                {pick({ pt: 'Olá! Claro 😊 Podemos passar quinta às 10h. Funciona pra você?', en: 'Hi! Sure 😊 We can stop by Thursday at 10am. Does that work?' })}
              </Bubble>
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {modal === 'rate' && <RatingFlow onClose={() => setModal(null)} />}
        {modal === 'booked' && <MarkBookedFlow onClose={() => setModal(null)} onDone={() => { setBooked(true); setModal(null); }} />}
      </AnimatePresence>
    </div>
  );
}

function Field({ k, v }) {
  return (
    <div className="flex gap-2">
      <dt className="w-28 shrink-0" style={{ color: C.muted }}>{k}</dt>
      <dd className="font-medium" style={{ color: C.text }}>{v}</dd>
    </div>
  );
}

function Bubble({ who, color, name, time, children }) {
  return (
    <div className="flex gap-2.5">
      <span className="h-7 w-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: color }}>{who}</span>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold" style={{ color: C.heading }}>{name}</span>
          <span className="text-[11px]" style={{ color: C.muted }}>{time}</span>
        </div>
        <p className="text-xs sm:text-sm" style={{ color: C.text }}>{children}</p>
      </div>
    </div>
  );
}

/* ----------------------------- Modais ------------------------------- */
function Modal({ onClose, children, maxW = 'max-w-md' }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,.55)' }} onClick={onClose} />
      <motion.div className={`relative w-full ${maxW} rounded-2xl p-5 sm:p-6 max-h-[85vh] overflow-y-auto slide-scroll`}
        style={{ backgroundColor: C.surface, border: `1px solid ${C.line}`, boxShadow: '0 24px 70px rgba(0,0,0,.4)' }}
        initial={{ scale: 0.96, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.97, opacity: 0 }}>
        <button onClick={onClose} aria-label="Close"
          className="absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center"
          style={{ color: C.muted }}><X size={18} /></button>
        {children}
      </motion.div>
    </motion.div>
  );
}

const FACES = [
  { e: '😀', label: 'Very satisfied', mood: 'pos' },
  { e: '🙂', label: 'Somewhat satisfied', mood: 'pos' },
  { e: '😐', label: 'Neither satisfied nor dissatisfied', mood: 'neutral' },
  { e: '🙁', label: 'Somewhat dissatisfied', mood: 'neg' },
  { e: '☹️', label: 'Very dissatisfied', mood: 'neg' },
];

const REASONS_NEG = [
  'It is not located in the service area(s) for the business',
  'It is for a service the business does not provide',
  'The person calling was not ready to book services',
  'It is spam (e.g., unwanted robocall or message, silent caller, scam)',
  'It is a duplicate lead (i.e., a person contacted the business more than once)',
  'It is a person seeking employment or trying to sell a product or service',
  'Other (please specify)',
];
const REASONS_POS = [
  'It converted into a booked customer or client',
  'It could convert into a booked customer or client soon',
  'It is relevant to the services the business provides',
  'It is for a service that generates high value for the business',
  'Other (please specify)',
];

export function RatingFlow({ onClose }) {
  const pick = usePick();
  const [face, setFace] = useState(null);
  const [picked, setPicked] = useState(() => new Set());
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <Modal onClose={onClose}>
        <div className="text-center py-4">
          <div className="mx-auto h-14 w-14 rounded-full flex items-center justify-center" style={{ backgroundColor: C.greenTint }}>
            <Check size={28} color={C.green} />
          </div>
          <p className="mt-4 font-bold text-lg" style={{ color: C.heading }}>
            {pick({ pt: 'Avaliação enviada!', en: 'Rating submitted!' })}
          </p>
          <p className="mt-1 text-sm" style={{ color: C.muted }}>
            {pick({ pt: 'Obrigado — isso ajuda a melhorar os próximos leads.', en: 'Thanks — this helps improve future leads.' })}
          </p>
          <button onClick={onClose} className="mt-5 rounded-full px-5 py-2 text-sm font-semibold text-white" style={{ backgroundColor: C.blue }}>OK</button>
        </div>
      </Modal>
    );
  }

  if (!face) {
    return (
      <Modal onClose={onClose}>
        <h3 className="font-semibold text-base sm:text-lg pr-6" style={{ color: C.heading }}>How satisfied are you with the quality of this lead?</h3>
        <div className="mt-4 flex flex-col gap-1">
          {FACES.map((f) => (
            <button key={f.label} onClick={() => setFace(f)}
              className="flex items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.card)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}>
              <span className="text-2xl leading-none">{f.e}</span>
              <span className="text-sm sm:text-base" style={{ color: C.text }}>{f.label}</span>
            </button>
          ))}
        </div>
      </Modal>
    );
  }

  const reasons = face.mood === 'pos' ? REASONS_POS : REASONS_NEG;
  const positive = face.mood === 'pos';
  const toggle = (r) => setPicked((s) => { const n = new Set(s); n.has(r) ? n.delete(r) : n.add(r); return n; });

  return (
    <Modal onClose={onClose}>
      <h3 className="font-semibold text-base sm:text-lg pr-6" style={{ color: C.heading }}>
        {positive
          ? 'Which of the following best describes why you are satisfied with this lead? Select all that apply.'
          : 'Which of the following best describes why you are not satisfied with this lead? Select all that apply.'}
      </h3>
      <div className="mt-3 flex flex-col">
        {reasons.map((r) => {
          const on = picked.has(r);
          return (
            <button key={r} onClick={() => toggle(r)} className="flex items-start gap-3 py-2 text-left">
              <span className="mt-0.5 h-5 w-5 rounded shrink-0 flex items-center justify-center"
                style={{ border: `2px solid ${on ? C.blue : C.line}`, backgroundColor: on ? C.blue : 'transparent' }}>
                {on && <Check size={13} color="#fff" />}
              </span>
              <span className="text-sm" style={{ color: C.text }}>{r}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button onClick={onClose} className="px-4 py-2 text-sm font-semibold" style={{ color: C.muted }}>Cancel</button>
        <button onClick={() => setDone(true)} disabled={picked.size === 0}
          className="px-5 py-2 rounded-full text-sm font-semibold text-white disabled:opacity-40" style={{ backgroundColor: C.blue }}>
          Submit
        </button>
      </div>
    </Modal>
  );
}

export function MarkBookedFlow({ onClose, onDone }) {
  const pick = usePick();
  const [choice, setChoice] = useState('completed');
  const opts = [
    ['completed', 'The job is already completed'],
    ['scheduled', 'The job is scheduled for a future date'],
  ];
  return (
    <Modal onClose={onClose}>
      <h3 className="font-semibold text-base sm:text-lg pr-6" style={{ color: C.heading }}>Is this job booked?</h3>
      <div className="mt-4 flex flex-col gap-1">
        {opts.map(([id, label]) => (
          <button key={id} onClick={() => setChoice(id)} className="flex items-center gap-3 py-2 text-left">
            <span className="h-5 w-5 rounded-full shrink-0 flex items-center justify-center" style={{ border: `2px solid ${choice === id ? C.green : C.line}` }}>
              {choice === id && <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: C.green }} />}
            </span>
            <span className="text-sm sm:text-base" style={{ color: C.text }}>{label}</span>
          </button>
        ))}
      </div>
      <div className="mt-5 flex justify-end gap-2">
        <button onClick={onClose} className="px-4 py-2 text-sm font-semibold" style={{ color: C.muted }}>Cancel</button>
        <button onClick={onDone} className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: C.green }}>
          {pick({ pt: 'Confirmar', en: 'Confirm' })}
        </button>
      </div>
    </Modal>
  );
}

/* ------------------- Peças estáticas p/ os slides ------------------- */
export function SatisfactionScale() {
  return (
    <div className="rounded-xl p-4 sm:p-5 w-full" style={{ border: `1px solid ${C.line}`, backgroundColor: C.surface }}>
      <p className="font-semibold text-sm sm:text-base" style={{ color: C.heading }}>How satisfied are you with the quality of this lead?</p>
      <div className="mt-3 flex flex-col gap-1.5">
        {FACES.map((f) => (
          <div key={f.label} className="flex items-center gap-3">
            <span className="text-xl leading-none">{f.e}</span>
            <span className="text-sm" style={{ color: C.text }}>{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReasonsCard({ kind = 'neg' }) {
  const reasons = kind === 'pos' ? REASONS_POS : REASONS_NEG;
  const accent = kind === 'pos' ? C.green : C.red;
  return (
    <div className="rounded-xl p-4 sm:p-5 w-full" style={{ border: `1px solid ${C.line}`, backgroundColor: C.surface }}>
      <p className="font-semibold text-sm" style={{ color: C.heading }}>
        {kind === 'pos'
          ? 'Why are you satisfied with this lead? Select all that apply.'
          : 'Why are you not satisfied with this lead? Select all that apply.'}
      </p>
      <div className="mt-3 flex flex-col gap-2">
        {reasons.map((r) => (
          <div key={r} className="flex items-start gap-2.5">
            <span className="mt-0.5 h-4 w-4 rounded shrink-0" style={{ border: `2px solid ${accent}` }} />
            <span className="text-sm" style={{ color: C.text }}>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CreditBanner() {
  return (
    <div className="rounded-lg px-3 py-2.5 flex items-center gap-2 w-full" style={{ backgroundColor: C.greenTint, border: `1px solid ${C.green}` }}>
      <Check size={16} color={C.green} className="shrink-0" />
      <span className="text-xs sm:text-sm" style={{ color: C.text }}>
        So far, you're expected to receive a <b>$45.00</b> credit to spend towards leads next month.
      </span>
    </div>
  );
}

export function BoldRowsDemo() {
  const rows = [LEADS[0], LEADS[1]];
  return (
    <div className="rounded-xl overflow-hidden w-full" style={{ border: `1px solid ${C.line}`, backgroundColor: C.surface }}>
      <div className="slide-scroll overflow-x-auto">
        <table className="w-full" style={{ minWidth: 560 }}>
          <tbody>
            {rows.map((l) => (
              <tr key={l.id} style={{ borderBottom: `1px solid ${C.line}` }}>
                <Td bold={l.unread}>{l.city}</Td>
                <Td bold={l.unread}>{l.type}</Td>
                <td className="px-3 py-3"><ChargePill value={l.charge} /></td>
                <Td bold={l.unread}>{l.received}</Td>
                <Td bold={l.unread}>{l.id}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ----------------------- Simulador completo ------------------------- */
export function LsaSimulator() {
  const pick = usePick();
  const [lead, setLead] = useState(null);
  return (
    <div className="w-full">
      {lead ? (
        <LeadDetail lead={lead} onBack={() => setLead(null)} />
      ) : (
        <>
          <p className="mb-2 text-sm font-semibold flex items-center gap-1.5" style={{ color: C.blue }}>
            <Hand size={15} /> {pick({ pt: 'Clique em um lead para abrir os detalhes', en: 'Click a lead to open its details' })}
          </p>
          <LeadsTable onOpen={setLead} />
        </>
      )}
    </div>
  );
}
