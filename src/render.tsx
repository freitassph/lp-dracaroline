import type { ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { articles, legal } from './content';
import { Home } from './home';
import { ArticlePage, NotFoundPage, PrivacyPage, TermsPage } from './pages';
import { SearchMetadata } from './search';
import { site } from './site';

interface Page {
  title: string;
  description: string;
  content: ReactNode;
}

const pages = new Map<string, Page>([
  ['/', { title: site.title, description: site.description, content: <Home /> }],
  ['/privacidade', { ...legal['/privacidade'], content: <PrivacyPage /> }],
  ['/termos', { ...legal['/termos'], content: <TermsPage /> }],
  ...articles.map(article => [
    `/leituras/${article.slug}`,
    { title: article.title, description: article.description, content: <ArticlePage article={article} /> },
  ] as const),
  ['/404', { title: 'Página não encontrada', description: 'Volte para o site da Dra. Caroline Aires.', content: <NotFoundPage /> }],
]);

export const documentPaths = Array.from(pages.keys());
export { discoveryFiles } from './search';

export function renderDocument(template: string, pathname: string) {
  const path = pathname === '/index.html' ? '/' : pathname.replace(/\/$/, '') || '/';
  const page = pages.get(path) ?? pages.get('/404')!;
  const home = path === '/';
  const head = renderToStaticMarkup(
    <>
      <title>{home ? page.title : `${page.title} | ${site.name}`}</title>
      <meta name="description" content={page.description} />
      <meta name="theme-color" content="#faf5ec" />
      <meta name="referrer" content="no-referrer" />
      <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="preload" href="/assets/fonts/instrument-serif.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      {home && <link rel="preload" href="/assets/fonts/instrument-serif-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />}
      {home ? <SearchMetadata /> : <meta name="robots" content="noindex, follow" />}
    </>,
  );
  return template
    .replace('<!-- SITE_HEAD -->', () => head)
    .replace('<!-- SITE_BODY -->', () => renderToStaticMarkup(page.content));
}
