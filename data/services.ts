import type { Service } from './types';

export const services: Service[] = [
  {
    icon: 'CloudRain',
    title: 'Manajemen Hujan',
    sub: 'Cloud Dome',
    desc: 'Mengurangi intensitas hujan secara terukur menggunakan lapisan pengurai awan hidronano hingga >60%.',
    items: ['Operasi Tambang & Hauling', 'Mitigasi Risiko Banjir'],
    color: 'bg-steel/8 text-ink group-hover:bg-sky/10 group-hover:text-sky-text',
    href: '/layanan#manajemen-hujan',
  },
  {
    icon: 'Activity',
    title: 'Monitoring Cuaca',
    sub: 'Skala Mikro',
    desc: 'Pemantauan data cuaca real-time menggunakan AWS dan Radar Cuaca untuk keputusan intervensi yang presisi.',
    items: ['Data Hujan Aktual (AWS)', 'Flight Monitoring Real-time'],
    color: 'bg-steel/8 text-ink group-hover:bg-sky/10 group-hover:text-sky-text',
    href: '/layanan#monitoring-cuaca',
  },
  {
    icon: 'Droplets',
    title: 'Penambahan Hujan',
    sub: 'Cloudbuster',
    desc: 'Meningkatkan potensi hujan >20% dengan penyemaian awan selektif menggunakan drone VTOL atau Groundbase Flare.',
    items: ['Pengisian Waduk PLTA', 'Mitigasi Kekeringan & Karhutla', 'Reklamasi & Perkebunan'],
    color: 'bg-steel/8 text-ink group-hover:bg-sky/10 group-hover:text-sky-text',
    href: '/layanan#penambahan-hujan',
  },
];
