// GitHub Pages için tüm yolları düzelten script
// Kullanım: node fix-paths.js REPO_ADI

const fs = require('fs');
const path = require('path');

const repoName = process.argv[2];
if (!repoName) {
  console.error('Lütfen repo adını belirtin: node fix-paths.js REPO_ADI');
  process.exit(1);
}

const basePath = `/${repoName}`;

function fixPaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // _next/ yollarını düzelt
  content = content.replace(/href="_next\//g, `href="${basePath}/_next/`);
  content = content.replace(/src="_next\//g, `src="${basePath}/_next/`);
  
  // Diğer asset yollarını düzelt
  content = content.replace(/href="favicon/g, `href="${basePath}/favicon`);
  content = content.replace(/href="manifest/g, `href="${basePath}/manifest`);
  content = content.replace(/href="android-chrome/g, `href="${basePath}/android-chrome`);
  
  // HTML sayfa linklerini düzelt (href="index.html" gibi)
  content = content.replace(/href="([a-z0-9-]+\.html)"/g, `href="${basePath}/$1"`);
  content = content.replace(/href="blog\//g, `href="${basePath}/blog/`);
  
  // Image src düzeltmeleri
  content = content.replace(/\/_next\/image\?url=%2F/g, `/_next/image?url=${encodeURIComponent(basePath)}%2F`);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${filePath} düzeltildi`);
}

// Tüm HTML dosyalarını bul ve düzelt
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      fixPaths(filePath);
    }
  });
}

console.log(`GitHub Pages base path: ${basePath}`);
processDirectory('.');
console.log('\n✓ Tüm HTML dosyaları düzeltildi!');
