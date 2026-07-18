export interface Project {
  name: string;
  location: string;
  type: 'Penambahan Hujan' | 'Pengurangan Hujan';
  result: string;
  year: string;
  sector: string;
  image: string;
  description?: string;
}

export interface Client {
  name: string;
  sector: string;
  logo?: string;
}

export interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  author?: string;
  content?: string;
}

export interface Service {
  icon: string;
  title: string;
  sub: string;
  desc: string;
  items: string[];
  color: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}
