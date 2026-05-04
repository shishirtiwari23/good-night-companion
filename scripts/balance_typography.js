const fs = require('fs');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') && !file.includes('app/page.tsx') && !file.includes('app/quiz/page.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./app');
let count = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Revert ALL `font-cormorant font-light` to `font-serif font-medium` to restore Playfair boldness
  content = content.replace(/font-cormorant font-light/g, 'font-serif font-medium');

  // 2. Restore `font-cormorant font-light` for large display headings where it looks beautiful and isn't straining
  content = content.replace(/className="([^"]+)"/g, (match, classes) => {
    if (classes.includes('text-3xl') || classes.includes('text-4xl') || classes.includes('text-5xl') || classes.includes('text-6xl') || classes.includes('clamp')) {
      return `className="${classes.replace('font-serif font-medium', 'font-cormorant font-light')}"`;
    }
    return match;
  });

  // Also fix any body text that got turned into font-serif font-medium by mistake
  // (We want body text to be simple sans-serif, but the previous script didn't touch sans-serif, it only replaced font-serif.)

  if (content !== original) {
    fs.writeFileSync(file, content);
    count++;
  }
});

console.log('Fixed typography in ' + count + ' files.');
