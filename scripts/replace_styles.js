const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') && !file.includes('app/page.tsx') && !file.includes('app/quiz/page.tsx') && !file.includes('app/layout.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./app');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Backgrounds and colors
  content = content.replace(/bg-\[var\(--background\)\]/g, 'bg-cream text-ink');
  content = content.replace(/text-\[var\(--text-primary\)\]/g, 'text-ink');
  content = content.replace(/text-\[var\(--text-secondary\)\]/g, 'text-ink-2');
  content = content.replace(/text-\[\#8da399\]/g, 'text-sage');
  content = content.replace(/bg-\[var\(--primary\)\]/g, 'bg-sage-dark text-white');
  content = content.replace(/hover:bg-\[var\(--primary-dark\)\]/g, 'hover:bg-sage');
  content = content.replace(/border-\[\#8da399\]\/[0-9]+/g, 'border-rule');
  content = content.replace(/bg-\[\#EBE9E1\](\/[0-9]+)?/g, 'bg-cream-2');
  content = content.replace(/bg-white/g, 'bg-cream');
  content = content.replace(/hover:bg-gray-50/g, 'hover:bg-cream-3');
  content = content.replace(/bg-gray-50/g, 'bg-cream-2');
  content = content.replace(/border-gray-200/g, 'border-rule');
  content = content.replace(/border-gray-100/g, 'border-rule');
  content = content.replace(/text-gray-600/g, 'text-ink-2');
  content = content.replace(/text-gray-900/g, 'text-ink');
  content = content.replace(/text-gray-500/g, 'text-ink-3');
  
  // Replace old typography with new
  content = content.replace(/font-serif/g, 'font-cormorant font-light');
  content = content.replace(/tracking-widest/g, 'tracking-[0.16em]');

  if (content !== original) {
    fs.writeFileSync(file, content);
    modifiedCount++;
  }
});

console.log('Modified ' + modifiedCount + ' files out of ' + files.length);
