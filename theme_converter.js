const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const replacements = [
  // Backgrounds
  { regex: /bg-\[#0B0C10\]/g, replacement: 'bg-[#FAFAFA]' },
  { regex: /bg-\[#16171D\]/g, replacement: 'bg-white' },
  { regex: /bg-\[#030303\]/g, replacement: 'bg-gray-100' },
  { regex: /bg-\[#111111\]/g, replacement: 'bg-white' },
  
  // Opacity adjustments for bg-white (assuming they were dark mode subtle highlights)
  { regex: /bg-white\/5/g, replacement: 'bg-black/[0.03]' },
  { regex: /bg-white\/10/g, replacement: 'bg-black/[0.05]' },
  { regex: /bg-white\/\[0\.02\]/g, replacement: 'bg-black/[0.02]' },
  { regex: /bg-white\/\[0\.03\]/g, replacement: 'bg-black/[0.03]' },
  { regex: /bg-white\/\[0\.04\]/g, replacement: 'bg-black/[0.04]' },
  { regex: /bg-white\/\[0\.05\]/g, replacement: 'bg-black/[0.05]' },
  { regex: /bg-white\/\[0\.06\]/g, replacement: 'bg-black/[0.06]' },

  // Borders
  { regex: /border-white\/5/g, replacement: 'border-black/[0.05]' },
  { regex: /border-white\/10/g, replacement: 'border-black/[0.08]' },
  { regex: /border-white\/\[0\.03\]/g, replacement: 'border-black/[0.05]' },
  { regex: /border-white\/\[0\.04\]/g, replacement: 'border-black/[0.06]' },
  { regex: /border-white\/\[0\.05\]/g, replacement: 'border-black/[0.08]' },
  { regex: /border-white\/\[0\.06\]/g, replacement: 'border-black/[0.08]' },
  { regex: /border-white\/\[0\.08\]/g, replacement: 'border-black/[0.1]' },
  { regex: /border-white\/\[0\.1\]/g, replacement: 'border-black/[0.12]' },

  // Text colors
  { regex: /text-white(?! \w)/g, replacement: 'text-[#111827]' },
  { regex: /text-white\//g, replacement: 'text-[#111827]/' }, // Adjust opacity modifiers
  { regex: /text-\[#888888\]/g, replacement: 'text-[#6B7280]' },
  { regex: /text-\[#e8e8e8\]/g, replacement: 'text-[#111827]' },
  { regex: /text-\[#555555\]/g, replacement: 'text-[#6B7280]' },
  { regex: /text-\[#444444\]/g, replacement: 'text-[#9CA3AF]' },
  
  // Specific shadows
  { regex: /shadow-\[0_([0-9]+px)_([0-9]+px)_rgba\(0,0,0,([0-9\.]+)\)\]/g, replacement: 'shadow-[0_$1_$2_rgba(0,0,0,0.05)]' },
  { regex: /shadow-\[0_0_20px_rgba\(255,255,255,0\.08\)\]/g, replacement: 'shadow-[0_0_20px_rgba(0,0,0,0.05)]' },
  { regex: /shadow-\[0_0_30px_rgba\(255,255,255,0\.15\)\]/g, replacement: 'shadow-[0_0_30px_rgba(0,0,0,0.08)]' },
];

walk('./src', (err, results) => {
  if (err) throw err;
  let count = 0;
  results.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Manual overrides for specific elements
    // Don't touch actual white text inside cyan buttons:
    // Need a way to preserve text-white inside buttons or badges where background is #00A3FF
    // Since regex is hard for context, we'll let it convert, then manually fix known cases.
    
    replacements.forEach(r => {
      content = content.replace(r.regex, r.replacement);
    });

    if (original !== content) {
      fs.writeFileSync(file, content, 'utf8');
      count++;
    }
  });
  console.log(`Updated ${count} files.`);
});
