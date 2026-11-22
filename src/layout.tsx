import type { ReactNode } from 'react';
import { FreitasLabCredit } from '../components/FreitasLabCredit';
import { Icon, Monogram } from './icons';
import { PrivacyControls } from './privacy';
import { credentials, menuItems, site } from './site';

export function Brand({ href = '/#inicio' }: { href?: string }) {
  return (
    <a className="brand" href={href} aria-label="Dra. Caroline Aires, início">
      <Monogram className="brand-mark" />
      <span className="brand-name">Caroline Aires<small>Psiquiatria</small></span>
    </a>
  );
}

export function Action({ children, href, variant = 'primary', icon = 'diagonal', className = '', external = false }: {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'light';
  icon?: 'diagonal' | 'right' | 'left' | 'down' | 'chat';
  className?: string;
  external?: boolean;
}) {
  return (
    <a className={`action action--${variant} ${className}`} href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
      {children}<Icon name={icon} />
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}

export function Header({ home }: { home: boolean }) {
  const prefix = home ? '' : '/';
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="header-slot">
        <header className="site-header">
          <Brand href={`${prefix}#inicio`} />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {menuItems.map(({ label, href }) => <a href={prefix + href} key={href}>{label}</a>)}
          </nav>
          <Action className="header-action" href={`${prefix}#contato`}>Agendamento</Action>
          <button type="button" className="menu-toggle icon-button enhanced" data-open-menu aria-label="Abrir menu" aria-haspopup="dialog" aria-controls="site-menu">
            <Icon name="menu" />
          </button>
        </header>
      </div>
      <dialog id="site-menu" className="site-menu" aria-labelledby="menu-title">
        <div className="menu-inner">
          <div className="menu-top">
            <Brand href={`${prefix}#inicio`} />
            <button type="button" className="icon-button" data-close-dialog aria-label="Fechar menu" autoFocus>
              <Icon name="close" />
            </button>
          </div>
          <span className="sr-only" id="menu-title">Navegação</span>
          <nav className="overlay-nav" aria-label="Seções do site">
            {menuItems.map(({ label, href }) => <a href={prefix + href} key={href}>{label}<Icon name="diagonal" /></a>)}
          </nav>
          <div className="menu-bottom">
            <Action href={`${prefix}#contato`} variant="light" icon="chat">Consultar horários</Action>
            <p>Consultas particulares em Campinas e online</p>
            <p>{credentials}</p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="frame">
        <div className="footer-main">
          <div>
            <Brand />
            <p>{site.fullName}<br />Médica psiquiatra · {credentials}</p>
          </div>
          <nav className="footer-nav" aria-label="Informações do consultório">
            <a href="/#contato">Agendamento</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram <Icon name="diagonal" /><span className="sr-only"> (abre em nova aba)</span></a>
            <a href="/privacidade">Política de Privacidade</a>
            <a href="/termos">Termos de Uso</a>
            <button className="text-button enhanced" type="button" data-open-privacy>Preferências de cookies</button>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>Em caso de urgência, procure um pronto atendimento ou ligue para o SAMU <a href="tel:192">192</a>.</p>
          <FreitasLabCredit theme="dark" />
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children, home = false }: { children: ReactNode; home?: boolean }) {
  return (
    <div id="inicio" className="site" tabIndex={-1} data-home={home ? "true" : undefined}>
      <Header home={home} />
      <main id="conteudo" tabIndex={-1}>{children}</main>
      <Footer />
      <PrivacyControls />
    </div>
  );
}
