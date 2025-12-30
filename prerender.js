import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { spawn } from 'node:child_process';
import net from 'node:net';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper to extract slugs
const extractSlugs = (filePath, pattern) => {
  try {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, "utf-8");
    const matches = [...content.matchAll(pattern)];
    return matches.map((m) => m[1]);
  } catch (e) {
    console.warn(`Failed to extract slugs from ${filePath}`, e);
    return [];
  }
};

// Extract dynamic routes
const blogSlugs = extractSlugs(
  path.resolve(__dirname, "./src/data/blogs.ts"),
  /slug:\s*"([^"]+)"/g
);
const projectSlugs = extractSlugs(
  path.resolve(__dirname, "./src/data/projectDetails.ts"),
  /slug:\s*"([^"]+)"/g
);
const serviceHrefs = extractSlugs(
  path.resolve(__dirname, "./src/data/services.ts"),
  /href:\s*"([^"]+)"/g
);

const routes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/blogs",
  "/contact",
  ...blogSlugs.map((slug) => `/blogs/${slug}`),
  ...projectSlugs.map((slug) => `/projects/${slug}`),
  ...serviceHrefs,
];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

async function prerender() {
  console.log('Starting prerender...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const route of routes) {
    const page = await browser.newPage();
    try {
        // Optimize: skip images, fonts, stylesheets
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if (['image', 'stylesheet', 'font', 'media'].includes(req.resourceType())) {
                req.abort();
            } else {
                req.continue();
            }
        });

        const url = `${BASE_URL}${route}`;
        console.log(`Prerendering ${route}...`);
        
        // Go to page
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Wait for a bit to ensure JS execution (adjust as needed)
        await new Promise(r => setTimeout(r, 1000));

        const content = await page.content();
        
        // Save to file
        // If route is /, save to index.html
        // If route is /about, save to about/index.html
        const filePath = path.join(__dirname, 'dist', route === '/' ? 'index.html' : `${route}/index.html`);
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(filePath, content);
        console.log(`Generated ${filePath}`);
    } catch (e) {
        console.error(`Failed to prerender ${route}:`, e);
    } finally {
        await page.close();
    }
  }

  await browser.close();
  console.log('Prerendering complete.');
}



const checkServer = (port) => {
    return new Promise((resolve) => {
        const client = new net.Socket();
        client.once('connect', () => {
            client.destroy();
            resolve(true);
        });
        client.once('error', () => {
            client.destroy();
            resolve(false);
        });
        client.connect(port, 'localhost');
    });
};

const waitForServer = async (port, timeout = 60000) => {
    const start = Date.now();
    while (Date.now() - start < timeout) {
        if (await checkServer(port)) return true;
        await new Promise(r => setTimeout(r, 1000));
    }
    return false;
};

const server = spawn('npm', ['run', 'preview', '--', '--port', PORT.toString()], {
    stdio: 'inherit',
    shell: true,
    detached: false
});

(async () => {
    try {
        console.log('Waiting for server to start...');
        const isReady = await waitForServer(PORT);
        if (!isReady) {
            throw new Error('Server failed to start within timeout');
        }
        await prerender();
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        server.kill();
        process.exit(0);
    }
})();
