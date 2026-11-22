# Dra. Caroline Aires · Auditoria do redesign

## Revisão anterior à implementação

| Ponto | Resultado da revisão | Ajuste incorporado ao plano |
| --- | --- | --- |
| Identidade | O brief de referência trazia uma segunda marca, Campinas no escopo da Caroline e Palmas no da Versetto. | Fatos, contatos e mídia identificados por fonte. Instagram e origem atualizados com a captura enviada em 21/11. |
| Proposta | Abertura anterior centrada em dois diagnósticos e em promessa de acolhimento. | Categoria e praça na primeira dobra, repertório clínico no corpo, próxima etapa administrativa explícita. |
| Consultório | A representação do consultório anterior tinha perdido validade. O usuário confirmou o Espaço Núr como endereço atual durante o redesign. | Retrato do acervo como imagem principal, endereço do Espaço Núr e rota externa, sem fotografia do espaço. |
| SEO | Live HTML tinha canonical NXDOMAIN e resposta 200 com HTML para arquivos de rastreio e caminhos inexistentes. | HTML estático e matriz de rotas verificadas; origem atual no sitemap. |
| Privacidade | CDNs e imagens externas na primeira carga; link de WhatsApp com informação contextual da cidade ou modalidades. | Assets locais, política de referência, mensagem genérica e tag de audiência condicionada. |
| Regulação | Sintomas, promessas, disponibilidade e regras de receitas no texto anterior exigiam reconciliação. | Oferta revisada com CFM e fonte operacional. Bio e modalidade ainda dependem de revisão clínica para release. |

Os critérios V01–V10 estão em [produto e conteúdo](01-produto-e-conteudo.md). A autorrevisão acima conferiu conflito entre requisitos, fontes e experiência planejada. Resultados de runtime pertencem à seção de validação da implementação.

## Resultado local

Snapshot de 21/11/2026, base Git `25a0d11`, Node 24.22.3 e Comet 157.0.8103.366, com motor 157.0.8103.51 no Playwright. A revisão independente foi estática. Ela apontou a necessidade de confirmar a Medição Aprimorada no GA4 e preservar os bloqueios padrão de arquivos do Vite. Os bloqueios foram repostos e a ativação da propriedade segue condicionada à inspeção real da configuração.

| ID | Prova | Observado |
| --- | --- | --- |
| V01–V03 | Render completo em 1.440 e 390 px, mais matriz de 18 larguras entre 320 e 1.920 px | Oferta e identificação aparecem antes da rolagem. O retrato local decodifica, o contorno fica separado do arquivo e os capítulos mostram bio, atuação e etapas da consulta. |
| V04 | Ativação dos dois links pelo teclado, interceptada antes de sair do ambiente | O mesmo número profissional recebe dois rascunhos distintos. Campinas menciona o Espaço Núr. Online pede horários e orientações sobre a videochamada. Endereço no texto, no JSON-LD e na rota de mapa. |
| V05 | Menu e FAQ no Comet | Ação por teclado e ponteiro, Escape devolve foco, a âncora recebe foco e a barra acompanha a rolagem. FAQ abre com Enter e fecha com Espaço. |
| V06–V07 | `npm run check` e leitura das cinco rotas secundárias no Comet com JavaScript desabilitado | Sete documentos estáticos, seis com `noindex, follow` contando a página de erro. A home tem canonical, dados estruturados coerentes e é a única URL no sitemap. |
| V08 | Build sem stream e build isolado com ID fictício, servido por interceptação no navegador | Sem aviso, armazenamento de preferência ou tag na configuração atual. Na simulação, recusa persistiu, opt-in granular disparou a tag interceptada e a revogação em outra aba removeu o cookie simulado. Falha de armazenamento manteve a medição desligada. |
| V09 | `git diff --check`, `npm audit --audit-level=low`, inventário e HTTP local | Zero avisos de vulnerabilidade reportados pelo npm na árvore verificada. O dev retornou 403 para material de marketing privado e o preview deu 404 em rota inexistente. A política de segurança foi conferida no artefato e aplicada ao teste isolado. |
| V10 | Decodificação e inspeção de pixels | Open Graph 1.200 × 630 com o retrato original e identificação profissional. Monograma SVG, ICO de 16, 32 e 48 px e Apple Touch de 180 px. Retratos e Open Graph sem blocos EXIF/XMP observados. |

### Revisão visual após as correções

- O título da abertura informa psiquiatria, Campinas e online. A revisão de entrelinha e escala deixou 5,16 px de intervalo mínimo entre os glifos das linhas adjacentes e zero overflow horizontal, nas 18 larguras avaliadas.
- A foto local substitui a dependência da imagem externa. A nova moldura usa uma borda com raio e margem próprios. A margem medida foi de pelo menos 7 px. O canto superior esquerdo fica fora da fotografia.
- A trajetória saiu da composição de cartões flutuantes e ocupa uma grade editorial com três credenciais legíveis. O bloco em cacau destaca as áreas sem exigir interação para descobri-las.
- A seção de contato mostra as modalidades, a rua, o bairro, o CEP e uma rota separada. Os botões e rascunhos dão elementos diferentes para cada escolha.
- O aviso de análise aparece apenas se há uma medição disponível no domínio. O aviso usa a paleta da marca e ações de aceite e recusa do mesmo tamanho.
- No Comet, a abertura percorreu o recorte completo, passando por uma pose intermediária em 400 ms. A seção de atuação respondeu à rolagem. Com movimento reduzido, a duração computada do contorno foi de 0 s.
- Pares principais de contraste ficaram entre 6,71:1 e 13,98:1 no cálculo sRGB. O teste local cobre os pares listados e os elementos operados pelo teclado.

As capturas e os recibos do site, do consentimento e do movimento foram produzidos na estação de trabalho. O contrato do artefato é verificável por `npm run check`.

Impressão de 35 arquivos de implementação, configuração e ativos em SHA-256, `bcfa350798b6306843b945a12946895117bdd6d9264460a19b854ad9a57a9590`. O cálculo ordena os caminhos e concatena caminho, byte nulo, hash individual e quebra de linha.

### Limites e aceite público

- A bio enviada pelo usuário e o perfil profissional concordam no CRM e no RQE. O Guia Médico do CREMESP abriu, porém a consulta por CRM ainda não devolveu um registro individual legível para a revisão. Falta validação independente do cadastro oficial e liberação do conteúdo pela médica. As leituras e as minutas de privacidade e termos aguardam revisão dos responsáveis.
- O Wispr Flow retornou conector desconectado. O registro local da reunião de 11/11 sustentou a estratégia. A captura do Instagram sustentou a bio, o telefone e o domínio; o feed completo ficou fora da cobertura.
- Google Analytics foi verificado com script interceptado, sem envio ao provedor. A ativação requer o ID e a inspeção da propriedade. O plano de Meta usa UTMs e informações agregadas de campanha. Nenhum pixel ou evento de saúde entra na página.
- Vercel de produção, Google Search Console, Bing Webmaster, pesquisas reais de ranking, recepção de eventos e agenda permanecem `NOT_RUN` para a versão nova. A única evidência remota nesta tarefa é a leitura pública das fontes e da versão anterior. O gate formal `pedro-lp-masterpiece` permanece em `BLOCKED_EVIDENCE` por documentação tipada incompleta e revisão de domínio pendente. Os resultados de browser e build valem para o escopo local descrito acima.
