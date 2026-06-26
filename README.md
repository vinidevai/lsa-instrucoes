# Guia do Inbox de Leads — Google LSA

Apresentação de slides **interativa e responsiva** (web) ensinando como usar o inbox de
leads do **Google Local Services Ads (LSA)**: dashboard, colunas, resposta a leads,
gravações de chamadas, *Mark Booked* e avaliações (rating).

Construída como uma **single‑page application** em React, pronta para publicar no GitHub Pages.

🔗 **Online:** https://vinidevai.github.io/lsa-instrucoes/ (após o deploy)

---

## 🧰 Ferramentas

| Ferramenta | Para quê |
|---|---|
| **Vite + React** | Inicialização rápida e build do projeto |
| **Tailwind CSS v4** | Layout e estilização dos slides |
| **Framer Motion** | Estado/transições animadas entre os slides |
| **Lucide React** | Ícones |
| **gh-pages** | Publicação no GitHub Pages |

---

## ✅ Pré-requisitos

- **Node.js 18+** (recomendado 20+). Verifique com `node -v`.

## 🚀 Passo a passo (ambiente local)

```bash
# 1) Instalar as dependências
npm install

# 2) Rodar em modo desenvolvimento (abre em http://localhost:5173)
npm run dev

# 3) Gerar o build de produção (pasta dist/)
npm run build

# 4) Pré-visualizar o build localmente
npm run preview
```

## ☁️ Publicar no GitHub Pages

O `homepage` (em `package.json`) e o `base` (em `vite.config.js`) já estão configurados
para o repositório **`lsa-instrucoes`**.

```bash
# Faz o build (predeploy) e publica a pasta dist/ na branch gh-pages
npm run deploy
```

Depois, no GitHub: **Settings → Pages → Source: branch `gh-pages` / `(root)`**.
Em alguns minutos o site fica disponível em
`https://vinidevai.github.io/lsa-instrucoes/`.

> Trocou o nome do repositório? Atualize `homepage` no `package.json` e `base` no
> `vite.config.js` para `/<novo-nome>/`.

---

## 🎮 Como navegar

- **Setas ← →**, **PageUp/PageDown**, **Espaço**, **Home/End** (teclado)
- **Botões** de avançar/voltar e os **pontos** (desktop)
- **Deslize** para os lados (mobile)

## 📁 Estrutura de pastas

```
lsa-instrucoes/
├── index.html              # HTML raiz
├── package.json            # scripts + homepage do GitHub Pages
├── vite.config.js          # base do Pages + plugins (React, Tailwind)
└── src/
    ├── main.jsx            # ponto de entrada do React
    ├── App.jsx             # renderiza o <Deck/>
    ├── index.css           # Tailwind + paleta da marca (@theme)
    ├── theme.js            # cores da marca (uso em estilos inline)
    ├── assets/             # screenshots reais usados nos slides
    ├── components/
    │   ├── Deck.jsx        # estado dos slides, navegação e transições (Framer Motion)
    │   ├── Slide.jsx       # moldura responsiva de cada slide (título + conteúdo)
    │   └── ui.jsx          # primitivos: IconBadge, Card, Pill, NumberBadge, IconRow, Frame
    └── slides/
        ├── index.jsx       # ORDEM dos 19 slides (edite aqui para reordenar)
        ├── 01_intro.jsx    # capa, agenda, o que é o LSA, fluxo
        ├── 02_dashboard.jsx# acesso, dashboard, colunas (1 e 2), negrito
        ├── 03_lead.jsx     # painel do lead, conversa, gravação, Mark Booked
        ├── 04_rating.jsx   # escala, motivos (ruim/bom), por que avaliar
        └── 05_close.jsx    # checklist, encerramento
```

## ✏️ Editar ou adicionar slides

1. Crie/edite um componente em `src/slides/` (use `<Slide>` e os primitivos de `ui.jsx`).
2. Importe-o e posicione-o no array de `src/slides/index.jsx`.

Cada slide já é responsivo: as colunas empilham no mobile e o conteúdo rola quando necessário.

---

> **Conteúdo genérico, não personalizado.** As capturas de tela são exemplos reais da
> interface do LSA (em inglês), com a explicação em português.
