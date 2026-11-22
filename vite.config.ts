import { readFile } from 'node:fs/promises';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const templateUrl = new URL('./index.html', import.meta.url);

export default defineConfig({
  appType: 'mpa',
  server: {
    fs: {
      deny: [
        '.env', '.env.*', '*.{crt,pem,key,p12,pfx,cer,der}', '**/.git/**', '.npmrc', '.yarnrc.yml',
        '**/docs/marketing/**', '**/docs/security/**', '**/service-account*.json', '**/.vercel/**',
      ],
    },
  },
  plugins: [
    react(),
    {
      name: 'caroline-static-documents',
      configureServer(server) {
        server.middlewares.use(async (request, response, next) => {
          const url = request.url ?? '/';
          const pathname = url.split('?')[0];
          const route = pathname.replace(/\/$/, '') || '/';
          const pageRoute = !/\/[^/]+\.[^/]+$/.test(route);
          const knownRoute = ['/', '/index.html', '/privacidade', '/termos', '/404'].includes(route) || route.startsWith('/leituras/');
          const documentRequest = knownRoute || (pageRoute && request.headers.accept?.includes('text/html'));
          if (!documentRequest || !['GET', 'HEAD'].includes(request.method ?? '') || pathname.startsWith('/@')) {
            next();
            return;
          }

          try {
            const { renderDocument, documentPaths } = await server.ssrLoadModule('/src/render.tsx');
            const template = await readFile(templateUrl, 'utf8');
            const html = await server.transformIndexHtml(url, renderDocument(template, pathname));
            response.statusCode = route === '/index.html' || (route !== '/404' && documentPaths.includes(route)) ? 200 : 404;
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            response.setHeader('X-Robots-Tag', 'noindex');
            response.end(request.method === 'HEAD' ? undefined : html);
          } catch (error) {
            if (error instanceof Error) server.ssrFixStacktrace(error);
            next(error);
          }
        });
      },
    },
  ],
});
