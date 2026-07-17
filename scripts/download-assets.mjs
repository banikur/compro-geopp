import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const directories = [
  'public/images/hero',
  'public/images/projects',
  'public/images/technology',
  'public/images/team',
  'public/images/clients',
  'public/images/blog'
];

// Create directories
directories.forEach(dir => {
  const fullPath = path.join(projectRoot, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created: ${dir}`);
  }
});

const imagesToDownload = [
  // Hero (high res)
  { url: 'https://images.unsplash.com/photo-1534274988732-475dc8e36473?auto=format&fit=crop&q=80&w=1600&fm=webp', path: 'public/images/hero/hero-bg.webp' },
  // Blog covers
  { url: 'https://images.unsplash.com/photo-1508614589041-895b65101287?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/blog/drone-seeding.webp' },
  { url: 'https://images.unsplash.com/photo-1587391158140-57121b6a38af?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/blog/mining-dome.webp' },
  { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b4b4?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/blog/plta-dam.webp' },
  { url: 'https://images.unsplash.com/photo-1495914580210-9cb97451a3f6?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/blog/groundbase.webp' },
  { url: 'https://images.unsplash.com/photo-1611270417935-7798319f6aeb?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/blog/karhutla.webp' },
  { url: 'https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/blog/aviation-rules.webp' },
  // Team / About
  { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/team/team-story.webp' },
  // Projects
  { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/projects/project-mining.webp' },
  { url: 'https://images.unsplash.com/photo-1544640808514-e538f9064c39?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/projects/project-dam.webp' },
  { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800&fm=webp', path: 'public/images/projects/project-agriculture.webp' }
];

const downloadImage = (url, destPath) => {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(projectRoot, destPath);
    const file = fs.createWriteStream(fullPath);
    
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
           if (res.statusCode === 200) {
             res.pipe(file);
             file.on('finish', () => { file.close(); console.log(`Downloaded: ${destPath}`); resolve(); });
           } else {
             reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
           }
        }).on('error', reject);
        return;
      }
      
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${destPath}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(fullPath, () => {});
      reject(err);
    });
  });
};

async function downloadAll() {
  console.log('Downloading images...');
  for (const img of imagesToDownload) {
    try {
      await downloadImage(img.url, img.path);
    } catch (err) {
      console.error(`Error downloading ${img.path}:`, err.message);
    }
  }
  console.log('Done!');
}

downloadAll();
