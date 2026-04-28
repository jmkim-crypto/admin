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
  // Heavy black shadows -> standard subtle shadows
  { regex: /shadow-\[0_0_50px_rgba\(0,0,0,0\.5\)\]/g, replacement: 'shadow-2xl shadow-black/10' },
  { regex: /shadow-\[0_8px_32px_-8px_rgba\(0,0,0,0\.5\)\]/g, replacement: 'shadow-md shadow-black/5' },
  { regex: /shadow-\[0_40px_100px_rgba\(0,0,0,0\.8\),0_0_50px_rgba\(0,163,255,0\.15\)\]/g, replacement: 'shadow-2xl shadow-black/20' },
  
  // Cyan button glows -> subtle drop shadows for light theme
  { regex: /shadow-\[0_0_25px_rgba\(0,163,255,0\.3\)\]/g, replacement: 'shadow-md shadow-[#00A3FF]/20' },
  { regex: /shadow-\[0_0_45px_rgba\(0,163,255,0\.6\)\]/g, replacement: 'hover:shadow-lg hover:shadow-[#00A3FF]/30' },
  { regex: /shadow-\[0_0_20px_rgba\(0,163,255,0\.3\)\]/g, replacement: 'shadow-md shadow-[#00A3FF]/20' },
  { regex: /shadow-\[0_0_40px_rgba\(0,163,255,0\.5\)\]/g, replacement: 'hover:shadow-lg hover:shadow-[#00A3FF]/30' },
  { regex: /shadow-\[0_0_20px_rgba\(0,163,255,0\.4\)\]/g, replacement: 'shadow-md shadow-[#00A3FF]/20' },
  { regex: /shadow-\[0_32px_64px_rgba\(0,163,255,0\.2\)\]/g, replacement: 'shadow-2xl shadow-[#00A3FF]/10' },
  { regex: /shadow-\[0_0_30px_rgba\(0,163,255,0\.1\)\]/g, replacement: 'shadow-xl shadow-[#00A3FF]/5' },
  { regex: /shadow-\[0_0_50px_rgba\(0,163,255,0\.05\)\]/g, replacement: 'shadow-2xl shadow-[#00A3FF]/5' },
  
  // Hardcoded dark gradients fading out -> fade to white/gray
  { regex: /from-\[#0B0C10\]/gi, replacement: 'from-[#FAFAFA]' },
  { regex: /from-\[#030303\]/gi, replacement: 'from-[#FAFAFA]' },
  
  // Phone ring fix
  { regex: /ring-white\/10/gi, replacement: 'ring-black/5' },
  { regex: /ring-white\/20/gi, replacement: 'ring-black/10' },

  // Dialog button gradient fix (too dark for light theme)
  { regex: /to-\[#003366\]/gi, replacement: 'to-[#0072ce]' },

  // Subtle via-[#00A3FF] horizontal lines (dividers) might be okay, but make them lighter
  { regex: /via-\[#00A3FF\]\/40/g, replacement: 'via-[#00A3FF]/20' },
  { regex: /via-\[#00A3FF\]\/80/g, replacement: 'via-[#00A3FF]/40' },
];

walk('./src/components', (err, results) => {
  if (err) throw err;
  let count = 0;
  results.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
      content = content.replace(r.regex, r.replacement);
    });

    if (original !== content) {
      fs.writeFileSync(file, content, 'utf8');
      count++;
    }
  });
  console.log(`Effects fixed in ${count} files.`);
});
