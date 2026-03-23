const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/journey/page.tsx',
  'app/page.tsx',
  'app/tools/calculator/page.tsx',
  'app/tools/pmr/page.tsx',
  'app/tools/recharge/page.tsx',
  'app/tools/worry-dump/page.tsx',
  'app/understand/page.tsx'
];

const basePath = path.join(__dirname, '..');

filesToFix.forEach(relPath => {
  const filePath = path.join(basePath, relPath);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to remove the block we injected previously
  const metadataBlockRegex = /import\s*\{\s*Metadata\s*\}\s*from\s*(["'])next\1;\s*export\s*const\s*metadata:\s*Metadata\s*=\s*\{\s*alternates:\s*\{\s*canonical:\s*(['"])[^'"]+\2,\s*\},\s*\};\s*/g;
  
  // It's possible the import was separate
  const standaloneImport = /import\s*\{\s*Metadata\s*\}\s*from\s*(["'])next\1;\n+/g;
  const standaloneExport = /export\s*const\s*metadata:\s*Metadata\s*=\s*\{\n\s*alternates:\s*\{\n\s*canonical:\s*(['"])[^'"]+\1,\n\s*\},\n\s*\};\n+/g;
  
  if (content.match(/import\s*\{\s*Metadata\s*\}\s*from\s*(["'])next\1;/) && content.includes('"use client"')) {
      content = content.replace(metadataBlockRegex, '');
      content = content.replace(standaloneImport, '');
      content = content.replace(standaloneExport, '');
      
      // Make sure "use client" is at the very top again
      content = content.trimStart();

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned up ${relPath}`);
      
      if (relPath !== 'app/page.tsx') {
        const dirPath = path.dirname(filePath);
        const layoutPath = path.join(dirPath, 'layout.tsx');
        
        // Find the canonical path
        let canonicalPath = '/' + path.relative(path.join(basePath, 'app'), dirPath);
        if (canonicalPath.endsWith('/')) canonicalPath = canonicalPath.slice(0, -1);
        
        if (!fs.existsSync(layoutPath)) {
          const layoutContent = `import { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  alternates: {\n    canonical: '${canonicalPath}',\n  },\n};\n\nexport default function Layout({ children }: { children: React.ReactNode }) {\n  return children;\n}\n`;
          fs.writeFileSync(layoutPath, layoutContent, 'utf8');
          console.log(`Created layout.tsx for ${canonicalPath}`);
        }
      } else {
        console.log(`Skipped creating layout for root page.tsx (app directory already has it).`);
      }
  }
});
