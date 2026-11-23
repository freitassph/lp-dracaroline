import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const outDir = new URL('../dist/', import.meta.url);
const read = path => readFile(new URL(path, outDir), 'utf8');
const binary = path => readFile(new URL(path, outDir));
const verificationFile = 'google742b2d6687b449d9.html';
const verificationSource = await readFile(new URL('../public/' + verificationFile, import.meta.url));
assert.ok(verificationSource.equals(await binary(verificationFile)), 'Arquivo de verificação deve ser copiado byte a byte.');
const htmlFiles = (await readdir(outDir, { recursive: true }))
  .filter(path => path.endsWith('.html') && path !== verificationFile)
  .sort();
const documents = new Map(await Promise.all(htmlFiles.map(async path => [path, await read(path)])));
const home = documents.get('index.html');

assert.ok(home, 'A home precisa estar no artefato.');
const canonical = home.match(/<link rel="canonical" href="([^"]+)"\s*\/>/)?.[1];
assert.equal(canonical, 'https://dracarolineaires.com.br/');
assert.match(home, /<meta name="robots" content="index, follow, max-image-preview:large"/);
assert.match(home, /<h1[^>]*>Psiquiatria em/);
assert.match(home, /<address><strong>Espaço Núr<\/strong><br\s*\/>Rua Percílio Neto, 293/);
assert.match(home, /CRM-SP 166488 · RQE 104664/);
assert.equal(documents.size, 7, 'Home, três leituras, dois documentos legais e 404.');
assert.ok(documents.has('404.html'));

for (const [path, html] of documents) {
  assert.equal(Array.from(html.matchAll(/<h1\b/g)).length, 1, 'Um H1 em ' + path);
  assert.doesNotMatch(html, /<!-- SITE_(HEAD|BODY) -->|<(script|img)[^>]*\bsrc="https?:/i, path);
  if (path !== 'index.html') {
    assert.match(html, /<meta name="robots" content="noindex, follow"/, path);
    assert.doesNotMatch(html, /rel="canonical"/, path);
  }
  const references = html.matchAll(/(?:href|src)="(\/(?!\/)[^"#]+)(?:#[^"]*)?"/g);
  for (const [, reference] of references) {
    const target = reference === '/' ? 'index.html' : reference.slice(1);
    if (documents.has(target) || documents.has(target + '.html')) continue;
    await binary(target);
  }
}

const schemaJson = home.match(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/)?.[1];
assert.ok(schemaJson);
const graph = JSON.parse(schemaJson)['@graph'];
const person = graph.find(item => item['@type'] === 'Person');
const office = graph.find(item => item['@type'] === 'Place');
assert.ok(person.sameAs.includes('https://www.instagram.com/dracarolineaires/'));
assert.equal(person.workLocation['@id'], office['@id']);
assert.equal(office.address.streetAddress, 'Rua Percílio Neto, 293');
for (const service of graph.filter(item => item['@type'] === 'Service')) {
  assert.equal(service.provider['@id'], person['@id']);
  assert.ok(home.includes(`id="${new URL(service.url).hash.slice(1)}"`));
}

const texts = Array.from(home.matchAll(/href="(https:\/\/wa\.me\/[^"]+)"/g), ([, href]) => {
  const url = new URL(href);
  assert.equal(url.pathname, '/5519990143494');
  assert.deepEqual(Array.from(url.searchParams.keys()), ['text']);
  return url.searchParams.get('text');
});
assert.equal(texts.length, 2);
assert.match(texts[0], /presencial.+Espaço Núr.+Campinas/);
assert.match(texts[1], /consulta online.+videochamada/);
assert.notEqual(texts[0], texts[1]);
assert.match(home, /href="https:\/\/www\.google\.com\/maps\/dir\/\?api=1&amp;destination=Espa%C3%A7o%20N%C3%BAr/);

const sitemap = await read('sitemap.xml');
assert.deepEqual(Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), ([, url]) => url), [canonical]);
const robots = await read('robots.txt');
assert.match(robots, /User-agent: OAI-SearchBot\nAllow: \//);
assert.match(robots, /User-agent: GPTBot\nDisallow: \//);
assert.ok(robots.includes('Sitemap: ' + canonical + 'sitemap.xml'));
assert.ok((await read('llms.txt')).includes(canonical));

async function checkPng(path, width, height) {
  const data = await binary(path);
  assert.equal(data.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.equal(data.readUInt32BE(16), width);
  assert.equal(data.readUInt32BE(20), height);
}
assert.ok(home.includes(`property="og:image" content="${canonical}assets/og-caroline.png"`));
await checkPng('assets/og-caroline.png', 1200, 630);
await checkPng('apple-touch-icon.png', 180, 180);
const ico = await binary('favicon.ico');
assert.equal(ico.readUInt16LE(2), 1);
assert.equal(ico.readUInt16LE(4), 3);
assert.deepEqual([ico[6], ico[22], ico[38]], [16, 32, 48]);

const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
assert.notEqual(config.cleanUrls, true, 'A URL do arquivo de verificação precisa manter .html.');
assert.deepEqual(config.rewrites, [
  { source: '/privacidade', destination: '/privacidade.html' },
  { source: '/termos', destination: '/termos.html' },
  { source: '/leituras/:slug', destination: '/leituras/:slug.html' },
]);
assert.deepEqual(config.headers.find(rule => rule.source === '/' + verificationFile)?.headers, [
  { key: 'X-Robots-Tag', value: 'noindex' },
]);
const headers = Object.fromEntries(config.headers[0].headers.map(({ key, value }) => [key, value]));
assert.equal(headers['Referrer-Policy'], 'no-referrer');
assert.equal(headers['X-Content-Type-Options'], 'nosniff');
assert.match(headers['Content-Security-Policy'], /frame-ancestors 'none'/);
assert.match(headers['Content-Security-Policy'], /form-action 'none'/);
assert.doesNotMatch(headers['Content-Security-Policy'], /unsafe-inline|unsafe-eval/);

console.log('Artefato verificado: 7 rotas, 1 URL indexável, 2 mensagens de contato, mapa, metadados, verificação Google, 3 formatos de ícone e cabeçalhos declarados.');
