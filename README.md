# Dra. Caroline Aires

Site de psiquiatria particular em Campinas e online. React renderiza as páginas no build. O visitante recebe HTML estático com estilos e um módulo de interação. O contato é iniciado no WhatsApp do consultório.

## Desenvolvimento

Use Node 24 conforme `.nvmrc`.

```sh
npm ci
npm run dev
npm run check
```

`npm run check` executa TypeScript, gera `dist/` e verifica páginas, arquivos de descoberta, destinos e imagens de marca. Use `npm run preview` para conferir o build local. O arquivo `vercel.json` configura URLs limpas, redirecionamento para a home e cabeçalhos de publicação.

## Onde editar

- `src/site.ts` concentra identificação, origem, contato, endereço e mensagens por modalidade.
- `src/home.tsx`, `src/content.ts` e `src/pages.tsx` concentram a home, as leituras e as páginas legais.
- `src/site.css` contém escala tipográfica, cor, layout responsivo e motion. `src/icons.tsx` contém os vetores.
- `src/search.tsx` gera os metadados e arquivos de descoberta. `scripts/prerender.mjs` escreve as rotas estáticas.
- `src/consent.ts` e `src/analytics.ts` implementam as preferências e a medição com opt-in.
- `public/assets/og-caroline.png` é o Open Graph 1200 × 630. A composição editável está em `docs/brand/open-graph.html` e usa os assets públicos da página. `public/favicon.svg` é a matriz vetorial para ICO e Apple Touch.

## Aceite e operação

A origem pública configurada é `https://dracarolineaires.com.br/`. A home é a única URL no sitemap. Leituras e páginas legais são navegáveis e usam `noindex, follow`. A medição começa desligada. Quando o stream aprovado for configurado no domínio oficial, o aviso oferece consentimento, recusa e revisão das preferências. A documentação descreve a operação do stream e da Meta Ads.

- [Produto, conteúdo e fontes](docs/01-produto-e-conteudo.md)
- [Marca, design e motion](docs/02-marca-design-e-motion.md)
- [Busca, mensuração e segurança](docs/03-busca-mensuracao-e-seguranca.md)
- [Auditoria e validação](docs/04-auditoria.md)
