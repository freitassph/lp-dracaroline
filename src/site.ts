export const site = {
  origin: 'https://dracarolineaires.com.br',
  name: 'Dra. Caroline Aires',
  fullName: 'Caroline Aires Henrique de Santana',
  specialty: 'Psiquiatria',
  crm: '166488',
  rqe: '104664',
  office: {
    name: 'Espaço Núr',
    street: 'Rua Percílio Neto, 293',
    neighborhood: 'Parque Taquaral',
    city: 'Campinas',
    region: 'SP',
    postalCode: '13087-090',
  },
  phone: '5519990143494',
  phoneLabel: '(19) 99014-3494',
  instagram: 'https://www.instagram.com/dracarolineaires/',
  portrait: '/assets/caroline-aires-1080.webp',
  socialImage: '/assets/og-caroline.png',
  title: 'Dra. Caroline Aires | Psiquiatra em Campinas e online',
  description: 'Consulta psiquiátrica particular com a Dra. Caroline Aires em Campinas e online. Conheça a médica, as áreas de atuação e como consultar horários.',
} as const;

const whatsappBase = `https://wa.me/${site.phone}`;
export const contactLinks = {
  inPerson: whatsappBase + '?text=' + encodeURIComponent('Olá! Gostaria de agendar uma consulta presencial com a Dra. Caroline no Espaço Núr, em Campinas. Quais dias e horários estão disponíveis?'),
  online: whatsappBase + '?text=' + encodeURIComponent('Olá! Gostaria de agendar uma consulta online com a Dra. Caroline. Quais horários estão disponíveis e como recebo o link da videochamada?'),
  privacy: whatsappBase,
};
const { name, street, neighborhood, city, region, postalCode } = site.office;
export const mapsRoute = 'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent(`${name}, ${street}, ${neighborhood}, ${city} - ${region}, ${postalCode}`);
export const credentials = `CRM-SP ${site.crm} · RQE ${site.rqe}`;

export const menuItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atuação', href: '#tratamentos' },
  { label: 'A consulta', href: '#diferenciais' },
  { label: 'Leituras', href: '#leituras' },
  { label: 'Dúvidas', href: '#faq' },
] as const;
