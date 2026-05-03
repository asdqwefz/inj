const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Önce %2Finj%2F gibi encode edilmiş yolları temizle
  content = content.replace(/%2Finj%2F/g, '%2F');
  
  // Sonra tüm /_next/ yollarını /inj/_next/ yap
  content = content.replace(/="(\/_next\/[^"]*)"/g, '="/inj$1"');
  
  // Image URL'lerindeki %2F'leri %2Finj%2F yap
  content = content.replace(/\?url=%2F(logo-|videos%2F)/g, '?url=%2Finj%2F$1');
  
  // Diğer asset yolları
  content = content.replace(/="(\/favicon[^"]*)"/g, '="/inj$1"');
  content = content.replace(/="(\/manifest[^"]*)"/g, '="/inj$1"');
  content = content.replace(/="(\/android-chrome[^"]*)"/g, '="/inj$1"');
  content = content.replace(/="(\/logo-[^"]*)"/g, '="/inj$1"');
  content = content.replace(/="(\/opengraph[^"]*)"/g, '="/inj$1"');
  content = content.replace(/="(\/videos\/[^"]*)"/g, '="/inj$1"');
  
  // HTML page links
  content = content.replace(/="(\/[a-z0-9-]+\.html)"/g, '="/inj$1"');
  content = content.replace(/="(\/blog\/[^"]*)"/g, '="/inj$1"');
  
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

console.log('Son düzeltme yapılıyor...\n');
processDir('.');
console.log('\n✅ Tamam!');
