import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// `base` precisa bater com o nome do repositório no GitHub Pages:
// em produção o site fica em https://<usuario>.github.io/lsa-instrucoes/
// Em desenvolvimento (npm run dev) usamos '/' para o servidor abrir na raiz.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/lsa-instrucoes/' : '/',
  plugins: [react(), tailwindcss()],
  server: { port: 5173, strictPort: true },
}));
