import { ContourArt, Icon, Monogram } from './icons';
import { Action, Layout } from './layout';
import { articles } from './content';
import { contactLinks, credentials, mapsRoute, site } from './site';

export function Home() {
  return (
    <Layout home>
      <section className="hero frame" aria-labelledby="hero-heading">
        <div className="hero-content">
          <p className="eyebrow hero-kicker"><span /> Consulta psiquiátrica particular</p>
          <h1 id="hero-heading">Psiquiatria em<br className="hero-break" /> Campinas <em>e online.</em></h1>
          <p className="hero-summary">Na consulta, conversamos sobre o que mudou na sua rotina, como anda sua saúde e quais caminhos de cuidado fazem sentido para você.</p>
          <div className="hero-actions">
            <Action href="#contato">Consultar horários</Action>
            <a className="quiet-link" href="#diferenciais">Como é a consulta <Icon name="down" /></a>
          </div>
          <div className="hero-identity">
            <Monogram className="identity-mark" />
            <div><p>{site.fullName}</p><p>Médica psiquiatra · {credentials}</p></div>
          </div>
        </div>
        <figure className="portrait">
          <div className="portrait-plate">
            <img src={site.portrait} srcSet="/assets/caroline-aires-640.webp 640w, /assets/caroline-aires-1080.webp 1080w" sizes="(max-width: 760px) 90vw, (max-width: 1100px) 43vw, 562px" width="1080" height="1080" loading="eager" fetchPriority="high" decoding="async" alt="Dra. Caroline Aires" />
          </div>
        </figure>
      </section>
      <div className="access-strip">
        <div className="frame access-grid">
          <a href="#presencial"><Icon name="map" /><span>Campinas, SP<small>Consulta presencial</small></span><Icon name="diagonal" /></a>
          <a href="#online"><Icon name="video" /><span>Consulta online<small>Atendimento por vídeo</small></span><Icon name="diagonal" /></a>
        </div>
      </div>
      <section className="about section-space frame" id="sobre" tabIndex={-1} aria-labelledby="about-heading">
        <div className="about-intro">
          <p className="eyebrow"><span /> Sobre a médica</p>
          <h2 id="about-heading">A consulta começa pela sua <em>história.</em></h2>
        </div>
        <div className="about-profile">
          <h3>Dra. Caroline Aires</h3>
          <p>Minha formação em Clínica Médica veio antes da Psiquiatria. Na consulta, essa trajetória me ajuda a considerar o que você sente, o que mudou na sua rotina e como a saúde física se relaciona com tudo isso.</p>
          <dl className="profile-facts">
            <div><dt>Psiquiatria</dt><dd>Residência médica no Hospital do Servidor Público Estadual de São Paulo, HSPE/IAMSPE</dd></div>
            <div><dt>Clínica Médica</dt><dd>Formação na Santa Casa de Santos</dd></div>
            <div><dt>Preceptoria</dt><dd>Hospital São Leopoldo Mandic</dd></div>
          </dl>
        </div>
      </section>
      <Areas />
      <Consultation />
      <Contact />
      <Readings />
      <Questions />
    </Layout>
  );
}

const areas = [
  { title: 'Transtornos do humor', icon: 'line', text: 'Avaliação de alterações de humor e cuidado em quadros como depressão e transtorno bipolar.' },
  { title: 'Psicoses e esquizofrenia', icon: 'circles', text: 'Avaliação e acompanhamento psiquiátrico de pessoas com esquizofrenia ou outros quadros psicóticos.' },
  { title: 'Ansiedade e sono', icon: 'moon', text: 'Avaliação de dificuldades com ansiedade ou sono, levando em conta a saúde e a rotina de cada pessoa.' },
] as const;

function Areas() {
  return (
    <section className="areas section-space" id="tratamentos" tabIndex={-1} aria-labelledby="areas-heading">
      <div className="frame areas-layout">
        <div className="areas-intro" data-reveal>
          <p className="eyebrow"><span /> Áreas de atuação</p>
          <h2 id="areas-heading">Humor, sono e <em>percepção.</em></h2>
          <p>Você pode procurar uma avaliação mesmo que ainda não saiba dar um nome ao que está sentindo.</p>
        </div>
        <div className="areas-list">
          {areas.map(({ title, icon, text }) => (
            <div className="area-item" key={title} data-reveal>
              <div className="area-icon"><Icon name={icon} /></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
      <ContourArt />
    </section>
  );
}

const steps = [
  { title: 'Conte o que trouxe você', text: 'A médica escuta suas preocupações, pergunta sobre a sua história e conversa sobre o que mudou no seu dia a dia.' },
  { title: 'Tire suas dúvidas', text: 'A partir da avaliação, vocês conversam sobre o que foi observado e as opções de cuidado que fazem sentido para você.' },
  { title: 'Combine os próximos passos', text: 'Quando houver indicação de acompanhamento, a médica orienta como seguir e quando reavaliar o plano.' },
] as const;

function Consultation() {
  return (
    <section className="consultation section-space frame" id="diferenciais" tabIndex={-1} aria-labelledby="consultation-heading">
      <div className="consultation-intro" data-reveal>
        <p className="eyebrow"><span /> A primeira consulta</p>
        <h2 id="consultation-heading">O que você pode <em>esperar.</em></h2>
      </div>
      <ol className="steps">
        {steps.map(({ title, text }, index) => (
          <li className="step" key={title} data-reveal>
            <span className="step-number" aria-hidden="true">0{index + 1}</span>
            <h3>{title}</h3><p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  const office = site.office;
  return (
    <section className="contact section-space" id="contato" tabIndex={-1} aria-labelledby="contact-heading">
      <ContourArt variant="contact" />
      <div className="frame contact-inner">
        <div className="contact-intro" data-reveal>
          <p className="eyebrow"><span /> Agendamento</p>
          <h2 id="contact-heading">Escolha como quer <em>ser atendido.</em></h2>
          <p>Consulte horários e condições do atendimento particular pelo WhatsApp do consultório.</p>
        </div>
        <div className="contact-grid">
          <article className="contact-option" id="presencial" tabIndex={-1}>
            <div className="contact-icon"><Icon name="map" /></div>
            <h3>Presencial em Campinas</h3>
            <div className="contact-detail">
              <address><strong>{office.name}</strong><br />{office.street}<br />{office.neighborhood}, {office.city} – {office.region}<br />CEP {office.postalCode}</address>
              <a className="quiet-link" href={mapsRoute} target="_blank" rel="noopener noreferrer">Como chegar <Icon name="diagonal" /><span className="sr-only"> (abre em nova aba)</span></a>
            </div>
            <Action href={contactLinks.inPerson} external icon="chat">Agendar em Campinas</Action>
          </article>
          <article className="contact-option" id="online" tabIndex={-1}>
            <div className="contact-icon"><Icon name="video" /></div>
            <h3>Consulta online</h3>
            <div className="contact-detail">
              <p>Converse por vídeo de um lugar reservado. Depois de combinar a data e o horário, você recebe as instruções de acesso à consulta.</p>
            </div>
            <Action href={contactLinks.online} external icon="chat">Agendar consulta online</Action>
          </article>
        </div>
        <p className="contact-note"><Icon name="shield" /> O WhatsApp {site.phoneLabel} é para informações e horários. Reserve os detalhes da sua saúde para a consulta.</p>
      </div>
    </section>
  );
}

function Readings() {
  return (
    <section className="readings section-space frame" id="leituras" tabIndex={-1} aria-labelledby="readings-heading">
      <div className="readings-intro" data-reveal>
        <p className="eyebrow"><span /> Leituras</p>
        <h2 id="readings-heading">Antes da <em>consulta.</em></h2>
      </div>
      <div className="readings-grid">
        {articles.map(({ slug, title, description, icon }) => (
          <article className="reading" key={slug} data-reveal>
            <a href={`/leituras/${slug}`}>
              <span className="reading-illustration"><Icon name={icon} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="read-link">Ler o guia <Icon name="diagonal" /></span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

const questions = [
  { question: 'A Dra. Caroline atende presencialmente em Campinas?', answer: `Sim. As consultas presenciais acontecem no ${site.office.name}, na ${site.office.street}, ${site.office.neighborhood}, em Campinas (SP). Consulte os horários pelo WhatsApp do consultório.` },
  { question: 'Como funciona a consulta online?', answer: 'O atendimento acontece por videochamada. Após confirmar o horário, a equipe envia as orientações de acesso. A médica avalia se a modalidade online é adequada e orienta quando o presencial for necessário.' },
  { question: 'O atendimento é particular ou por convênio?', answer: 'O atendimento é particular. O consultório informa as condições antes de confirmar o horário. Para saber se o seu plano oferece reembolso, consulte a operadora.' },
  { question: 'Preciso ter um diagnóstico para marcar?', answer: 'Você pode procurar uma avaliação mesmo sem diagnóstico. Na consulta, pode contar o que tem chamado sua atenção e trazer suas dúvidas.' },
  { question: 'Posso ir com alguém de confiança?', answer: 'Se a presença de outra pessoa te deixar mais à vontade, converse com o consultório e com a médica sobre como você prefere conduzir esse momento.' },
];

function Questions() {
  return (
    <section className="questions section-space" id="faq" tabIndex={-1} aria-labelledby="questions-heading">
      <div className="frame questions-layout">
        <div data-reveal>
          <p className="eyebrow"><span /> Dúvidas frequentes</p>
          <h2 id="questions-heading">Antes de <em>agendar.</em></h2>
          <a className="quiet-link" href="#contato">Ver formas de atendimento <Icon name="right" /></a>
        </div>
        <div className="questions-list">
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary><span>{question}</span><Icon name="plus" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
