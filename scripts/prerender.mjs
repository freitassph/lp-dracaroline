import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { discoveryFiles, documentPaths, renderDocument } from '../dist-ssr/render.js';

const outDir = fileURLToPath(new URL('../dist/', import.meta.url));
const template = await readFile(join(outDir, 'index.html'), 'utf8');

if (!template.includes('<!-- SITE_HEAD -->') || !template.includes('<!-- SITE_BODY -->')) {
  throw new Error('O template do build está sem os pontos de entrada de conteúdo.');
}

for (const pathname of documentPaths) {
  const file = join(outDir, pathname === '/' ? 'index.html' : pathname.slice(1) + '.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, renderDocument(template, pathname));
}

for (const [filename, content] of Object.entries(discoveryFiles())) {
  await writeFile(join(outDir, filename), content);
}

console.log(`Pré-renderizadas ${documentPaths.length} páginas e gerados os arquivos de descoberta.`);
