import './freitaslab-credit.css';
// Import freitaslab-credit.css once in the app/layout or global stylesheet.
// No client directive, JavaScript handler or icon dependency is required.
export function FreitasLabCredit({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  return (
<a className="fl-credit" data-theme={theme} href="https://www.instagram.com/freitas.lab/" target="_blank" rel="noopener noreferrer">
  <span className="fl-credit__copy">
    <span className="fl-credit__line">Criado por <strong>Pedro Freitas</strong> · <strong>Freitas.Lab</strong></span>
    <span className="fl-credit__tagline">Marca e tecnologia</span>
  </span>
  <svg className="fl-credit__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10" /></svg>
  <span className="fl-credit__sr-only"> — Instagram da Freitas.Lab (abre em nova aba)</span>
</a>
  );
}
