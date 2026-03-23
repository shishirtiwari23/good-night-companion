const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const metadataRegex = /export const metadata: Metadata = \{([\s\S]*?)\};/m;

walkDir(appDir, (filePath) => {
  if (filePath.endsWith('page.tsx')) {
    let relativePath = filePath.replace(appDir, '').replace('/page.tsx', '');
    if (relativePath === '') relativePath = '/';
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('export const metadata: Metadata = {')) {
      if (!content.includes('alternates:')) {
        let replacement = `export const metadata: Metadata = {$1  alternates: {\n    canonical: '${relativePath}',\n  },\n};`;
        let newContent = content.replace(metadataRegex, replacement);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated canonical for ${relativePath}`);
      }
    } else {
      console.log(`No metadata found in ${relativePath}, adding it...`);
      // We will add basic metadata if missing, but primarily we depend on inherited.
      // Easiest is to add metadata at the top if there's an import of Metadata, or just add the export.
      if (content.includes("export default function")) {
          let importMeta = content.includes('import { Metadata }') ? '' : 'import { Metadata } from "next";\n\n';
          let newMetadata = `\nexport const metadata: Metadata = {\n  alternates: {\n    canonical: '${relativePath}',\n  },\n};\n\n`;
          let injectedContent = importMeta + content.replace(/export default function/, newMetadata + 'export default function');
          fs.writeFileSync(filePath, injectedContent, 'utf8');
      }
    }
  }
});
