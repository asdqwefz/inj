const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Temizlik: Tüm /inj/ öneklerini kaldır
  content = content.replace(/\/inj\//g, '/');
  content = content.replace(/%2Finj%2F/g, '%2F');
  
  // 2. Yeniden ekle: Tüm absolute paths'e /inj/ ekle
  content = content.replace(/href="\/_next\//g, 'href="/inj/_next/');
  content = content.replace(/src="\/_next\//g, 'src="/inj/_next/');
  content = content.replace(/imageSrcSet="\/_next\//g, 'imageSrcSet="/inj/_next/');
  content = content.replace(/srcSet="\/_next\//g, 'srcSet="/inj/_next/');
  
  // 3. Image URL parameters içindeki yolları düzelt
  content = content.replace(/\/_next\/image\?url=%2F/g, '/inj/_next/image?url=%2Finj%2F');
  
  // 4. Assets
  content = content.replace(/href="\/favicon/g, 'href="/inj/favicon');
  content = content.replace(/href="\/manifest/g, 'href="/inj/manifest');
  content = content.replace(/href="\/android-chrome/g, 'href="/inj/android-chrome');
  content = content.replace(/href="\/logo-/g, 'href="/inj/logo-');
  content = content.replace(/href="\/opengraph/g, 'href="/inj/opengraph');
  
  // 5. Videos
  content = content.replace(/src="\/videos\//g, 'src="/inj/videos/');
  
  // 6. HTML pages
  content = content.replace(/href="\/([a-z0-9-]+\.html)"/g, 'href="/inj/$1"');
  content = content.replace(/href="\/blog\//g, 'href="/inj/blog/');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${path.basename(filePath)}`);
}

function processDir(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!item.startsWith('.') && !item.startsWith('_') && item !== 'node_modules' && item !== 'cdn-cgi') {
        processDir(fullPath);
      }
    } else if (item.endsWith('.html')) {
      fixFile(fullPath);
    }
  }
}

console.log('Düzeltiliyor...\n');
processDir('.');
console.log('\n✅ Bitti!');
