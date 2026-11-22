import { beginMeasurement, measurementId, stopMeasurement } from './analytics';

type Choice = 'necessary' | 'analytics';
type Preference = { version: number; choice: Choice; expiresAt: number };

const storageKey = 'caroline-privacidade';
const policyVersion = 2;
const preferenceLifetime = 180 * 24 * 60 * 60 * 1000;

function readPreference(): Choice | null {
  try {
    const record = JSON.parse(localStorage.getItem(storageKey) ?? 'null') as Partial<Preference> | null;
    if (record?.version !== policyVersion || typeof record.expiresAt !== 'number' || record.expiresAt <= Date.now()) return null;
    return record.choice === 'necessary' || record.choice === 'analytics' ? record.choice : null;
  } catch {
    return null;
  }
}

function writePreference(choice: Choice) {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ version: policyVersion, choice, expiresAt: Date.now() + preferenceLifetime }));
    return true;
  } catch {
    return false;
  }
}

export function setupPrivacy() {
  const banner = document.querySelector<HTMLElement>('[data-cookie-notice]');
  const dialog = document.querySelector<HTMLDialogElement>('#privacy-settings');
  const option = dialog?.querySelector<HTMLInputElement>('[data-cookie-option]');
  const options = dialog?.querySelector<HTMLElement>('[data-privacy-options]');
  const unavailable = dialog?.querySelector<HTMLElement>('[data-privacy-unavailable]');
  const saveButton = dialog?.querySelector<HTMLButtonElement>('[data-cookie-save]');
  const feedback = dialog?.querySelector<HTMLElement>('[data-privacy-feedback]');
  if (!banner || !dialog || !option || !options || !unavailable || !saveButton || !feedback) return;

  const canMeasure = measurementId !== null;
  let choice = readPreference();
  if (canMeasure) {
    options.hidden = false;
    saveButton.hidden = false;
    unavailable.hidden = true;
  }

  function applyPreference(nextChoice: Choice | null, canReload: boolean) {
    choice = nextChoice;
    if (measurementId && nextChoice === 'analytics') {
      beginMeasurement(measurementId);
      return;
    }
    if (stopMeasurement(measurementId) && canReload) location.reload();
  }

  const syncPreference = () => {
    const nextChoice = readPreference();
    banner.hidden = !canMeasure || nextChoice !== null;
    option.checked = canMeasure && nextChoice === 'analytics';
    applyPreference(nextChoice, true);
  };

  syncPreference();

  const save = (nextChoice: Choice) => {
    if (!canMeasure) return;
    banner.hidden = true;

    if (!writePreference(nextChoice)) {
      applyPreference('necessary', false);
      option.checked = false;
      feedback.textContent = 'Seu navegador não permitiu salvar a preferência. A medição permanece desativada nesta visita.';
      feedback.hidden = false;
      if (!dialog.open) dialog.showModal();
      return;
    }
    if (dialog.open) dialog.close();
    applyPreference(nextChoice, true);
  };

  for (const opener of document.querySelectorAll('[data-open-privacy]')) {
    opener.addEventListener('click', () => {
      feedback.hidden = true;
      option.checked = canMeasure && choice === 'analytics';
      if (!dialog.open) dialog.showModal();
    });
  }

  banner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => save('analytics'));
  banner.querySelector('[data-cookie-reject]')?.addEventListener('click', () => save('necessary'));
  saveButton.addEventListener('click', () => save(option.checked ? 'analytics' : 'necessary'));

  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) syncPreference();
  });

  window.addEventListener('pageshow', event => {
    if (event.persisted) syncPreference();
  });
}
