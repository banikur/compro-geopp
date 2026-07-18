/**
 * Sync script: reads Keystatic content files and generates data/*.ts
 * Run: npm run cms:sync
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const contentDir = join(process.cwd(), 'content');
const dataDir = join(process.cwd(), 'data');

function readJsonFile(filePath: string): Record<string, unknown> {
  const raw = readFileSync(filePath, 'utf-8');
  // Keystatic stores as JSON with YAML-like format, parse it
  return JSON.parse(raw);
}

function parseContentFile(raw: string): Record<string, string> {
  const result: Record<string, string> = {};
  const lines = raw.split('\n');
  let currentKey = '';
  let currentValue = '';
  let multiline = false;

  for (const line of lines) {
    if (line.startsWith('---')) {
      if (multiline && currentKey) {
        result[currentKey] = currentValue.trim();
        multiline = false;
        currentKey = '';
        currentValue = '';
      }
      continue;
    }

    const match = line.match(/^(\w+):\s*(.*)/);
    if (match) {
      if (currentKey && currentValue) {
        result[currentKey] = currentValue.trim();
      }
      currentKey = match[1];
      currentValue = match[2];
      multiline = false;
    } else if (currentKey) {
      if (line.startsWith('  ') || line.startsWith('\t')) {
        currentValue += '\n' + line.trim();
        multiline = true;
      }
    }
  }

  if (currentKey && currentValue) {
    result[currentKey] = currentValue.trim();
  }

  return result;
}

function readCollection(collectionPath: string): Record<string, string>[] {
  if (!existsSync(collectionPath)) return [];

  const files = readdirSync(collectionPath).filter(f => f.endsWith('.yaml') || f.endsWith('.md'));
  return files.map(f => {
    const raw = readFileSync(join(collectionPath, f), 'utf-8');
    if (f.endsWith('.yaml')) {
      return parseContentFile(raw);
    }
    // For MDX files, extract frontmatter
    const match = raw.match(/^---\n([\s\S]*?)\n---/);
    if (match) {
      return parseContentFile(match[1]);
    }
    return {};
  });
}

function syncProjects() {
  const items = readCollection(join(contentDir, 'projects'));
  if (items.length === 0) {
    console.log('No Keystatic projects found, keeping static data');
    return;
  }

  const imports = `import type { Project } from './types';\n\n`;
  const entries = items.map(p =>
    `  { name: '${p.name || ''}', location: '${p.location || ''}', type: '${p.type || 'Penambahan Hujan'}', result: '${p.result || ''}', year: '${p.year || ''}', sector: '${p.sector || ''}', image: '${p.image || ''}'${p.description ? `, description: '${p.description}'` : ''} },`
  ).join('\n');

  const content = `${imports}export const projects: Project[] = [\n${entries}\n];\n`;
  writeFileSync(join(dataDir, 'projects.ts'), content);
  console.log(`Synced ${items.length} projects from Keystatic`);
}

function syncArticles() {
  const items = readCollection(join(contentDir, 'articles'));
  if (items.length === 0) {
    console.log('No Keystatic articles found, keeping static data');
    return;
  }

  const imports = `import type { Article } from './types';\n\n`;
  const entries = items.map(a =>
    `  {\n    slug: '${a.slug || ''}',\n    tag: '${a.tag || ''}',\n    title: '${a.title || ''}',\n    excerpt: '${a.excerpt || ''}',\n    date: '${a.date || ''}',\n    readTime: '${a.readTime || ''}',\n    image: '${a.image || ''}',${a.featured ? '\n    featured: true,' : ''}${a.author ? `\n    author: '${a.author}',` : ''}\n  },`
  ).join('\n');

  const content = `${imports}export const articles: Article[] = [\n${entries}\n];\n`;
  writeFileSync(join(dataDir, 'articles.ts'), content);
  console.log(`Synced ${items.length} articles from Keystatic`);
}

function syncClients() {
  const items = readCollection(join(contentDir, 'clients'));
  if (items.length === 0) {
    console.log('No Keystatic clients found, keeping static data');
    return;
  }

  const imports = `import type { Client } from './types';\n\n`;
  const entries = items.map(c =>
    `  { name: '${c.name || ''}', sector: '${c.sector || ''}'${c.logo ? `, logo: '${c.logo}'` : ''} },`
  ).join('\n');

  const content = `${imports}export const clients: Client[] = [\n${entries}\n];\n`;
  writeFileSync(join(dataDir, 'clients.ts'), content);
  console.log(`Synced ${items.length} clients from Keystatic`);
}

function syncServices() {
  const items = readCollection(join(contentDir, 'services'));
  if (items.length === 0) {
    console.log('No Keystatic services found, keeping static data');
    return;
  }

  const imports = `import type { Service } from './types';\n\n`;
  const entries = items.map(s =>
    `  {\n    icon: '${s.icon || 'CloudRain'}',\n    title: '${s.title || ''}',\n    sub: '${s.sub || ''}',\n    desc: '${s.desc || ''}',\n    items: [${(s.items || '').split(',').map((i: string) => `'${i.trim()}'`).join(', ')}],\n    color: 'bg-slate-100 text-slate-700 group-hover:bg-cyan-50 group-hover:text-cyan-700',\n    href: '${s.href || ''}',\n  },`
  ).join('\n');

  const content = `${imports}export const services: Service[] = [\n${entries}\n];\n`;
  writeFileSync(join(dataDir, 'services.ts'), content);
  console.log(`Synced ${items.length} services from Keystatic`);
}

console.log('Syncing Keystatic content to data files...');
syncProjects();
syncArticles();
syncClients();
syncServices();
console.log('Done!');
