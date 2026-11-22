import { credentials, mapsRoute, site } from './site';

const homeUrl = site.origin + '/';
const specialty = {
  '@type': 'DefinedTerm',
  name: site.specialty,
};
const personId = homeUrl + '#caroline';
const webpageId = homeUrl + '#pagina';
const websiteId = homeUrl + '#site';
const portrait = site.origin + site.portrait;
const officeId = homeUrl + '#espaco-nur';

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': websiteId, name: site.name, inLanguage: 'pt-BR', url: homeUrl },
    {
      '@type': 'WebPage',
      '@id': webpageId,
      name: site.title,
      description: site.description,
      url: homeUrl,
      isPartOf: { '@id': websiteId },
      inLanguage: 'pt-BR',
      about: { '@id': personId },
      primaryImageOfPage: { '@type': 'ImageObject', url: portrait },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: site.fullName,
      alternateName: site.name,
      jobTitle: 'Médica psiquiatra',
      knowsAbout: specialty,
      image: portrait,
      url: homeUrl,
      sameAs: [site.instagram],
      workLocation: { '@id': officeId },
      contactPoint: { '@type': 'ContactPoint', telephone: '+' + site.phone, contactType: 'agendamento', availableLanguage: 'pt-BR' },
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: `CRM-SP ${site.crm}`, credentialCategory: 'Registro profissional' },
        { '@type': 'EducationalOccupationalCredential', name: `RQE ${site.rqe}`, credentialCategory: 'Registro de Qualificação de Especialista', about: specialty },
      ],
    },
    {
      '@type': 'Place',
      '@id': officeId,
      name: site.office.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.office.street,
        addressLocality: site.office.city,
        addressRegion: site.office.region,
        postalCode: site.office.postalCode,
        addressCountry: 'BR',
      },
      hasMap: mapsRoute,
    },
    {
      '@type': 'Service',
      '@id': homeUrl + '#psiquiatria-presencial',
      name: 'Consulta psiquiátrica presencial em Campinas',
      serviceType: 'Consulta psiquiátrica particular presencial',
      provider: { '@id': personId },
      areaServed: { '@type': 'City', name: 'Campinas', containedInPlace: { '@type': 'State', name: 'São Paulo' } },
      availableChannel: { '@type': 'ServiceChannel', serviceLocation: { '@id': officeId } },
      url: homeUrl + '#presencial',
    },
    {
      '@type': 'Service',
      '@id': homeUrl + '#psiquiatria-online',
      name: 'Consulta psiquiátrica online',
      serviceType: 'Consulta psiquiátrica particular por vídeo',
      provider: { '@id': personId },
      areaServed: { '@type': 'Country', name: 'Brasil' },
      url: homeUrl + '#online',
    },
  ],
};

export function SearchMetadata() {
  const image = site.origin + site.socialImage;
  const imageAlt = 'Retrato da Dra. Caroline Aires. Psiquiatria em Campinas e online.';
  return (
    <>
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={homeUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:url" content={homeUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
    </>
  );
}

export function discoveryFiles() {
  return {
    'robots.txt': `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`,
    'sitemap.xml': `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${homeUrl}</loc></url>\n</urlset>\n`,
    'llms.txt': `# ${site.name}\n\n> ${site.fullName}, médica psiquiatra em Campinas (SP). ${credentials}.\n\n## Página oficial\n\n- [Psiquiatria em Campinas e online](${homeUrl}): formação, áreas de atuação e dúvidas sobre a consulta.\n- [Formas de atendimento](${homeUrl}#contato): consulta particular presencial em Campinas ou por vídeo. O presencial acontece no ${site.office.name}, ${site.office.street}, ${site.office.neighborhood}, Campinas (SP).\n- [Instagram](${site.instagram}): perfil profissional.\n`,
  };
}
