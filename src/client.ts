import { setupPrivacy } from './consent';

function setupMenu() {
  const menu = document.querySelector<HTMLDialogElement>('#site-menu');
  const toggle = document.querySelector<HTMLButtonElement>('[data-open-menu]');
  if (!menu || !toggle) return;

  toggle.addEventListener('click', () => { if (!menu.open) menu.showModal(); });
  menu.addEventListener('click', event => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (!link || event.defaultPrevented || !(event instanceof MouseEvent) ||
      event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    menu.close();
    const href = link.getAttribute('href');
    if (!href?.startsWith('#')) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    requestAnimationFrame(() => target.focus({ preventScroll: true }));
  });

  const desktop = window.matchMedia('(min-width: 1101px)');
  desktop.addEventListener('change', () => { if (desktop.matches && menu.open) menu.close(); });
}

function setupMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const viewport = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      (target as HTMLElement).dataset.inView = 'true';
      viewport.unobserve(target);
    }
  }, { threshold: .14 });

  document.querySelectorAll('[data-reveal], .areas').forEach(target => viewport.observe(target));
}

if ('HTMLDialogElement' in window && typeof HTMLDialogElement.prototype.showModal === 'function') {
  for (const button of document.querySelectorAll('dialog [data-close-dialog]')) {
    button.addEventListener('click', () => button.closest('dialog')?.close());
  }

  setupMenu();
  document.documentElement.dataset.siteReady = 'true';
  setupPrivacy();
}
setupMotion();
