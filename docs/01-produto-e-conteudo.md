# Dra. Caroline Aires · Produto e conteúdo

Versão 1.0 de 21/11/2026. Redesign médico `delivery / medical_regulated / critical`, tráfego futuro misto. Pedro integra a entrega. Caroline responde pela oferta, identidade clínica, revisão e liberação pública.

## O que a página precisa resolver

Quem chega de uma busca sobre psiquiatria em Campinas ou online precisa identificar a médica, entender como acontece a primeira consulta e saber como consultar horários. A ação principal leva à seção **Agendamento**. Ali, a pessoa escolhe presencial ou online e abre o WhatsApp público do consultório com uma saudação administrativa própria para cada modalidade. A abertura do canal é distinta da confirmação pela equipe. A página funciona sem formulário, cadastro ou escolha de diagnóstico.

A leitura autorizada da reunião de 11/11, já registrada no projeto, aponta para uma agenda particular própria, com espaço para psicoses e transtornos do humor e uma operação que caiba na rotina da médica. Esses sinais orientam a proposta. O site abre pela categoria e pela praça, explica o cuidado e dá visibilidade às áreas de atuação no corpo da home. A alternativa de abrir exclusivamente por esquizofrenia estreitaria a entrada e poderia sugerir uma subespecialidade. Essa decisão volta à discussão se a médica confirmar um escopo mais restrito ou se a procura qualificada mostrar outro perfil. O indicador de resultado é a consulta realizada, apurada pela operação em contagem agregada. Volume e taxa atuais seguem desconhecidos.

## Fontes e decisão sobre as afirmações

| Afirmação | Evidência em 21/11/2026 | Aplicação |
| --- | --- | --- |
| Nome completo, psiquiatria, CRM-SP 166488, RQE 104664 | Perfil público apresentado por Pedro, código anterior e perfil profissional na Doctoralia. | Identificação visível na home. Confirmação registral direta integra o aceite público. |
| Campinas e telefone do consultório | Bio atual de `@dracarolineaires`, captura de 21/11 de Pedro. | Número profissional preservado. Consultas mediante confirmação de disponibilidade. |
| Consulta particular e opção online | Site anterior, registro local da reunião e perfil profissional no Instituto MHS. | Modalidades visíveis. Nenhuma cobertura, horário, preço ou forma de pagamento presumidos. |
| Residência em Psiquiatria no HSPE/IAMSPE | Roteiro da marca, site anterior e perfil profissional no Instituto MHS. | Credencial de formação na bio. Revisão final pela profissional. |
| Clínica Médica na Santa Casa de Santos | Perfil profissional no Instituto MHS. | Formação na trajetória, sem anúncio de segunda especialidade registrada. |
| Preceptoria no HSLMandic | Bio indicada pelo usuário e capturada nesta tarefa. | Informada na trajetória. A titulação em Neurociências fica fora até esclarecer a natureza da formação. |
| Psicoses, esquizofrenia e transtornos do humor | Oferta anterior, relato da médica na reunião e perfil profissional. | Áreas de atuação, sem resultados, garantia ou exclusividade. |
| Local presencial | Pedro confirmou o Espaço Núr por captura de 21/11. O endereço público coincide com o da [página de contato de outra profissional no espaço](https://www.dramelina.com.br/contato). | Rua Percílio Neto, 293, Parque Taquaral, Campinas (SP), CEP 13087-090. Rota externa sem incorporar mapa. As fotos do ambiente e os horários do local ficaram fora da página. |

[Perfil indicado pela cliente](https://www.instagram.com/dracarolineaires/) · [Perfil profissional na Doctoralia](https://www.doctoralia.com.br/caroline-aires-henrique-de-santana/psiquiatra/gurupi) · [Perfil no Instituto MHS](https://mhs.med.br/equipe/dra-caroline-aires) · [Consulta oficial de inscrição](https://guiamedico.cremesp.org.br/)

O perfil no MHS serve para cotejar a apresentação profissional. O site não anuncia vínculo, telefone ou endereço dessa instituição. Os roteiros de Stories disponíveis na pasta Caroline da Mesa dão o eixo de escuta e história, sem tomar roteiro por post observado, nem reproduzir as sugestões de escassez e depoimentos. A captura do Instagram confirma a bio, o contato e a URL atual. Nenhuma transcrição ou dado de pacientes entra no site ou neste repositório.

## Jornada e texto

| ID | Seção | Pergunta do visitante | Aceite observável |
| --- | --- | --- | --- |
| V01 | Abertura | Quem atende e onde? | Categoria, Campinas, online, retrato e ação aparecem juntos. Nome, CRM e RQE ficam na primeira seção. |
| V02 | Sobre | Qual é a trajetória da médica? | Formação e preceptoria têm apresentação legível. Uma só profissional ocupa o destaque. |
| V03 | Atuação e consulta | Que cuidado posso procurar? O que vai acontecer? | As áreas aparecem em texto e as etapas explicam avaliação, conversa e continuidade sem diagnóstico digital. |
| V04 | Agendamento | Como começo? | As duas modalidades levam ao número confirmado com mensagens editáveis e distintas. A presencial identifica o Espaço Núr. A online pergunta sobre a videochamada. As URLs não incluem informações clínicas de visitantes. |
| V05 | Menu e FAQ | Consigo chegar diretamente a uma resposta? | Navegação por âncora, menu de tela inteira no tablet e celular, teclado, foco e Escape. Dúvidas operacionais ficam na home. |
| V06 | Leituras | Como me preparar ou apoiar alguém? | Três leituras curtas e páginas legais funcionam com e sem interface JavaScript. Conteúdo clínico final sujeito à revisão da médica. |
| V07 | Descoberta | Google, Bing e assistentes conseguem compreender a oferta? | Somente a home é elegível e listada. HTML inicial tem os mesmos fatos da interface e referências estruturadas coerentes. |
| V08 | Privacidade | Posso usar a página recusando medição? | Primeiro acesso e recusa sem tags. Aceite opcional, revogação e ausência de saída de dados clínicos. |
| V09 | Segurança e operação | O site expõe apenas o necessário? | Saída estática com ativos próprios e controles HTTP. Rotas inexistentes devolvem 404. Builds verificáveis. |
| V10 | Compartilhamento | O link representa a mesma médica e a mesma marca? | Novo Open Graph com retrato, além de favicon legível e versões de atalho. |

A copy final em `src/` é a versão da revisão local. A ação administrativa, os textos de link, o conteúdo e as páginas legais têm critérios de verificação em [auditoria](04-auditoria.md).
