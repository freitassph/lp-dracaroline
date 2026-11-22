import { site } from './site';

declare global {
  interface Window {
    dataLayer?: IArguments[];
    [flag: `ga-disable-${string}`]: boolean | undefined;
  }
}

const configuredId = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
const publicOrigin = location.origin === site.origin;

export const measurementId =
  publicOrigin && configuredId && /^G-[A-Z0-9]{6,20}$/.test(configuredId) ? configuredId : null;

const channels = {
  google: ['cpc', 'organic'],
  bing: ['cpc', 'organic'],
  instagram: ['paid_social', 'social'],
  facebook: ['paid_social', 'social'],
  chatgpt: ['referral'],
  perplexity: ['referral'],
} as const;

const sectionHashes = new Set(['#inicio', '#conteudo', '#sobre', '#tratamentos', '#diferenciais', '#contato', '#presencial', '#online', '#leituras', '#faq']);
let active = false;

function campaignFields() {
  const params = new URLSearchParams(location.search);
  const source = params.get('utm_source')?.toLowerCase();
  if (!source || !Object.prototype.hasOwnProperty.call(channels, source)) return {};

  const approvedMedia: readonly string[] = channels[source as keyof typeof channels];
  const medium = params.get('utm_medium')?.toLowerCase();
  return {
    campaign_source: source,
    campaign_medium: medium && approvedMedia.includes(medium) ? medium : approvedMedia[approvedMedia.length - 1],
  };
}

export function beginMeasurement(id: string) {
  if (active || location.pathname !== '/' || !document.querySelector('[data-home]')) return;

  const campaign = campaignFields();
  const hash = sectionHashes.has(location.hash) ? location.hash : '';
  if (location.search || location.hash !== hash) {
    history.replaceState(history.state, '', '/' + hash);
  }

  active = true;
  window[`ga-disable-${id}`] = false;
  const queue = window.dataLayer ??= [];
  function gtag(..._command: unknown[]) {
    queue.push(arguments);
  }
  const advertisingDenied = {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  };

  const pageFields = {
    page_location: site.origin + '/',
    page_title: 'Página inicial',
    page_referrer: '',
  };

  gtag('consent', 'default', { ...advertisingDenied, analytics_storage: 'denied' });
  gtag('consent', 'update', { ...advertisingDenied, analytics_storage: 'granted' });
  gtag('set', { ...pageFields, ads_data_redaction: true, send_page_view: false });
  gtag('js', new Date());
  gtag('config', id, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_domain: 'none',
    cookie_expires: 90 * 24 * 60 * 60,
    cookie_update: false,
    ...pageFields,
    ...campaign,
  });
  gtag('event', 'page_view', { ...pageFields, send_to: id });

  const script = document.createElement('script');
  script.async = true;
  script.referrerPolicy = 'no-referrer';
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.append(script);
}

export function stopMeasurement(id: string | null) {
  if (id) window[`ga-disable-${id}`] = true;

  try {
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0].trim();
      if (/^_ga(?:_[A-Z0-9]+)?$/.test(name)) {
        document.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax; Secure';
      }
    }
  } catch {
    // The browser may deny access to cookies in restricted contexts.
  }

  return active;
}
