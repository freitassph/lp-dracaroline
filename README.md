# Dra. Caroline Aires - Landing Page Psiquiátrica

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Uma Landing Page de alta conversão desenvolvida para a Dra. Caroline Aires, focada em Psiquiatria Integrativa. O projeto segue uma estética "Quiet Luxury", priorizando acolhimento, autoridade e acessibilidade.

## 🚀 Tecnologias Utilizadas

- **React 18** (UI Library)
- **Vite** (Build Tool & Dev Server)
- **TypeScript** (Segurança de tipos)
- **Tailwind CSS** (Estilização utilitária via CDN para agilidade)
- **Lucide React** (Ícones modernos e leves)

## 🎨 Design System

- **Paleta de Cores**: Tons terrosos sofisticados (Castanha, Cobre Suave, Alabaster).
- **Tipografia**: *Playfair Display* (Títulos/Serifa) e *Montserrat* (Corpo/Sans-serif).
- **Acessibilidade**: Contraste ajustado para conformidade WCAG AA.

## 🛠️ Como rodar o projeto localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
   cd nome-do-repo
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   O projeto estará rodando em `http://localhost:5173`.

## 📦 Como fazer Deploy na Vercel

A maneira mais fácil de implantar este projeto é usar a Vercel:

1. Suba este código para o seu **GitHub**.
2. Crie uma conta na [Vercel](https://vercel.com).
3. Clique em **"Add New..."** > **"Project"**.
4. Selecione o repositório do GitHub.
5. A Vercel detectará automaticamente que é um projeto **Vite**.
6. Clique em **Deploy**.

## 📁 Estrutura de Pastas

```
/
├── components/       # Botões, Animações (FadeIn)
├── App.tsx           # Componente Principal
├── index.tsx         # Ponto de entrada React
├── index.html        # HTML base
├── package.json      # Dependências e Scripts
├── tsconfig.json     # Configuração TypeScript
└── vite.config.ts    # Configuração do Vite
```

---
Desenvolvido com foco em UX/UI para área médica.

## Runtime local — atualização de 2026-10-21

Use `nvm use` na raiz e confira `node --version`: o pin local é 24.22.1; `engines.node: 24.x` preserva a seleção por major das plataformas.

A atualização acompanha [os patches oficiais de segurança do Node.js](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases). Dependências da aplicação foram preservadas. Execute os checks existentes com esse runtime. Os recibos por comando ficam em `/Users/freitass_ph/Documents/Codex/2026-10-21/atualizacao-node-010312Z/outros-projetos-result.json`. Validação local não prova CI, imagem reconstruída ou patch em produção; essas camadas permanecem `NOT_RUN` nesta entrega.


## Restauração de dependências — 23/10/2026

Por pedido do usuário, os manifests e a instalação local voltaram à pré-imagem anterior à auditoria de 23/10. Conteúdo e estilos foram preservados. Esta reversão não foi publicada; o remoto já mantinha as versões anteriores. Os relatórios de auditoria permanecem históricos; seus alertas voltam a se aplicar ao grafo restaurado. Recuperação e hashes: `/Users/freitass_ph/Documents/Codex/2026-10-23/publicacao-dependencias/user-followup/LP-RESTORE.json`.
