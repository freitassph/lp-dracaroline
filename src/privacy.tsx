import { Icon } from './icons';

export function PrivacyControls() {
  return (
    <>
      <aside className="cookie-notice" aria-labelledby="cookie-title" data-cookie-notice hidden>
        <div className="cookie-message">
          <Icon name="shield" />
          <div>
            <h2 id="cookie-title">Cookies de análise</h2>
            <p>Você decide se este site pode medir visitas.</p>
          </div>
        </div>
        <div className="cookie-actions">
          <button type="button" className="action" data-cookie-reject>Recusar</button>
          <button type="button" className="action" data-cookie-accept>Permitir</button>
          <button type="button" className="text-button" data-open-privacy>Preferências</button>
        </div>
      </aside>
      <dialog id="privacy-settings" className="privacy-dialog" aria-labelledby="privacy-title">
        <div className="privacy-heading">
          <h2 id="privacy-title">Preferências de cookies</h2>
          <button type="button" className="icon-button" data-close-dialog aria-label="Fechar preferências" autoFocus><Icon name="close" /></button>
        </div>
        <p data-privacy-unavailable>A medição de visitas está desativada neste site.</p>
        <div data-privacy-options hidden>
          <p>Você pode navegar e falar com o consultório com qualquer escolha.</p>
          <div className="preference-row">
            <div><h3>Armazenamento necessário</h3><p>Lembra a sua escolha de privacidade neste navegador.</p></div>
            <span>Ativo</span>
          </div>
          <label className="preference-row">
            <span><strong>Medição de audiência</strong><small>Ajuda a contar visitas e entender por quais canais as pessoas chegam.</small></span>
            <input type="checkbox" data-cookie-option />
          </label>
          <p className="privacy-feedback" role="status" data-privacy-feedback hidden />
        </div>
        <div className="privacy-actions">
          <button type="button" className="action action--primary" data-cookie-save hidden>Salvar preferências</button>
          <a href="/privacidade#cookies">Política de Privacidade</a>
        </div>
      </dialog>
    </>
  );
}
