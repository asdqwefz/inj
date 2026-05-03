// Tüm yolları temizleyip GitHub Pages için düzelten script
const fs = require('fs');
const path = require('path');

const basePath = '/inj';

function fixPaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Tüm %2Finj%2F encode edilmiş yolları temizle
  content = content.replace(/%2Finj%2F/g, '%2F');
  
  // Tüm /inj/ yollarını temizle (tekrar ekleyeceğiz)
  content = content.replace(/="\/inj\//g, '="/');
  content = content.replace(/href="inj\//g, 'href="/');
  content = content.replace(/src="inj\//g, 'src="/');
  
  // Şimdi doğru yolları ekle
  // _next/ yolları
  content = content.replace(/href="\/_next\//g, `href="${basePath}/_next/`);
  content = content.replace(/src="\/_next\//g, `src="${basePath}/_next/`);
  
  // imageSrcSet ve srcSet
  content = content.replace(/imageSrcSet="\/_next\//g, `imageSrcSet="${basePath}/_next/`);
  content = content.replace(/srcSet="\/_next\//g, `srcSet="${basePath}/_next/`);
  
  // Favicon, manifest, icons
  content = content.replace(/href="\/favicon/g, `href="${basePath}/favicon`);
  content = content.replace(/href="\/manifest/g, `href="${basePath}/manifest`);
  content = content.replace(/href="\/android-chrome/g, `href="${basePath}/android-chrome`);
  
  // Videos
  content = content.replace(/src="\/videos\//g, `src="${basePath}/videos/`);
  
  // HTML pages
  content = content.replace(/href="\/([a-z0-9-]+\.html)"/g, `href="${basePath}/$1"`);
  content = content.replace(/href="\/blog\//g, `href="${basePath}/blog/`);
  
  // Logo ve opengraph images
  content = content.replace(/href="\/logo-/g, `href="${basePath}/logo-`);
  content = content.replace(/href="\/opengraph/g, `href="${basePath}/opengraph`);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ ${filePath}`);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && !file.startsWith('_') && file !== 'node_modules' && file !== 'cdn-cgi') {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      fixPaths(filePath);
    }
  });
}

console.log('Tüm yollar düzeltiliyor...\n');
processDirectory('.');
console.log('\n✅ Tamamlandı!');
