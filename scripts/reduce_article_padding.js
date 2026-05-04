const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '../app/articles');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace article padding
  const original = 'p-8 md:p-16 rounded-[2rem]';
  const replacement = 'p-6 md:p-12 rounded-[2rem]';
  
  if (content.includes(original)) {
    content = content.replace(original, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      updateFile(fullPath);
    }
  }
}

walkDir(articlesDir);
console.log('Done!');
