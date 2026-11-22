import type { ReactNode } from 'react';
import { articles } from './content';
import { Action, Layout } from './layout';
import { contactLinks, site } from './site';

export function InnerPage({ title, description, children, backHref = '/', backText = 'Voltar ao início' }: {
  title: string;
  description: string;
  children?: ReactNode;
  backHref?: string;
  backText?: string;
}) {
  return (
    <Layout>
      <article className="document frame">
        <Action href={backHref} variant="secondary" icon="left">{backText}</Action>
        <h1>{title}</h1>
        <p className="document-intro">{description}</p>
        {children && <div className="document-body">{children}</div>}
      </article>
    </Layout>
  );
}

export function ArticlePage({ article }: { article: (typeof articles)[number] }) {
  return (
    <InnerPage title={article.title} description={article.description} backHref="/#leituras" backText="Voltar às leituras">
      {article.sections.map(({ heading, text }) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}
      <section>
        <h2>Fontes</h2>
        {article.sources.map(({ title, url }) => <p key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title}<span className="sr-only"> (abre em nova aba)</span></a></p>)}
      </section>
      <p>Este guia é informativo. Dúvidas sobre sua saúde devem ser conversadas em consulta.</p>
      <Action href="/#contato">Ver formas de atendimento</Action>
    </InnerPage>
  );
}

export function PrivacyPage() {
  return (
    <InnerPage title="Política de Privacidade" description="Saiba quais dados entram em cada etapa e como exercer seus direitos.">
      <section>
        <h2>Responsável e alcance</h2>
        <p>Este site apresenta o atendimento de {site.fullName}, médica psiquiatra em Campinas. Esta política descreve a navegação, as preferências de cookies e a passagem para o contato administrativo. O atendimento médico e o prontuário têm regras próprias de sigilo e guarda.</p>
      </section>
      <section>
        <h2>Navegação e hospedagem</h2>
        <p>A Vercel hospeda este site. O servidor recebe informações técnicas para entregar as páginas, como endereço IP, navegador, horário e página solicitada. A hospedagem pode usá-las para segurança, diagnóstico técnico e cumprimento de obrigações aplicáveis. O site não tem cadastro, campo de sintomas ou envio de arquivos.</p>
      </section>
      <section id="cookies">
        <h2>Preferências de cookies</h2>
        <p>Sua escolha fica neste navegador por até 180 dias sob a chave <code>caroline-privacidade</code>. Ela guarda a opção escolhida, a versão e a validade. Você pode abrir as preferências para mudar sua decisão a qualquer momento.</p>
        <p>Quando a medição de audiência estiver disponível e você a autorizar, o Google Analytics poderá registrar visitas à página inicial e categorias de origem, além de informações técnicas do acesso. A medição pode usar o cookie <code>_ga</code> e um cookie específico da propriedade, configurados para até 90 dias. O uso está vinculado ao consentimento e a preferência pode ser revogada aqui ou no rodapé.</p>
        <p>Informações clínicas, dados do WhatsApp e cliques de agendamento ficam fora da medição. A página não carrega pixel da Meta.</p>
        <button className="action action--secondary enhanced" data-open-privacy type="button">Abrir preferências de cookies</button>
      </section>
      <section>
        <h2>Contato e serviços de terceiros</h2>
        <p>Ao seguir para o WhatsApp, você passa a usar um serviço com política própria. O texto inicial é editável. Se você enviar uma mensagem, o consultório usa o número e o conteúdo enviado para responder ao pedido administrativo e cumprir obrigações aplicáveis. Evite enviar exames, laudos, documentos ou informações clínicas no primeiro contato.</p>
        <p>Hospedagem, contato e eventual análise de audiência usam fornecedores que podem processar informações em outros países. Os dados são mantidos durante o tempo necessário às finalidades e aos prazos aplicáveis. Consulte o canal abaixo para informações sobre os prazos e as operações que se aplicam ao seu caso.</p>
      </section>
      <section>
        <h2>Seus direitos</h2>
        <p>Nos limites da LGPD, você pode pedir confirmação do tratamento, acesso, correção, informação sobre compartilhamento, portabilidade e as medidas cabíveis de bloqueio, anonimização ou eliminação. Também pode revogar o consentimento e apresentar solicitação à ANPD. O consultório pode pedir apenas o necessário para verificar a identidade ou a representação de quem solicita.</p>
        <p>Para tratar de privacidade, <a href={contactLinks.privacy} target="_blank" rel="noopener noreferrer">fale com o consultório pelo WhatsApp {site.phoneLabel}<span className="sr-only"> (abre em nova aba)</span></a> e diga que o assunto é privacidade. Aguarde orientação antes de enviar documentos.</p>
      </section>
    </InnerPage>
  );
}

export function TermsPage() {
  return (
    <InnerPage title="Termos de Uso" description="Condições de uso deste site e dos canais de contato apresentados.">
      <section>
        <h2>Finalidade do site</h2>
        <p>Este site apresenta a atuação e as modalidades de atendimento de {site.fullName}. Os textos têm finalidade informativa e não substituem avaliação médica individual, diagnóstico ou prescrição.</p>
      </section>
      <section>
        <h2>Contato e agendamento</h2>
        <p>O botão de contato abre o WhatsApp. A conversa é voltada a horários, valores, modalidade e orientações. A consulta está marcada depois que o consultório confirmar o horário e as condições. Dúvidas sobre cancelamento ou remarcação devem ser tratadas com a equipe.</p>
      </section>
      <section>
        <h2>Consulta remota</h2>
        <p>O consultório fornece as instruções de acesso quando a modalidade é confirmada. A médica avalia a adequação da teleconsulta e pode orientar atendimento presencial quando necessário.</p>
      </section>
      <section>
        <h2>Situações de urgência</h2>
        <p>Em caso de urgência, procure um pronto atendimento ou ligue <a href="tel:192">192 para o SAMU</a>. O site e o WhatsApp de agendamento não oferecem atendimento de urgência.</p>
      </section>
      <section>
        <h2>Conteúdo, links e privacidade</h2>
        <p>Textos, imagens e identidade visual são protegidos pelos respectivos direitos de autoria e imagem. Você pode compartilhar links públicos da página. Serviços externos seguem seus próprios termos. A <a href="/privacidade">Política de Privacidade</a> explica a navegação, as preferências e o contato administrativo.</p>
      </section>
    </InnerPage>
  );
}

export function NotFoundPage() {
  return <InnerPage title="Página não encontrada" description="Volte ao início para ver as formas de atendimento e os canais do consultório." />;
}
