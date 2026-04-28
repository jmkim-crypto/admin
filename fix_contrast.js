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
  { regex: /text-\[#111827\]\/20/g, replacement: 'text-[#6B7280]' },
  { regex: /text-\[#111827\]\/40/g, replacement: 'text-[#4B5563]' },
  { regex: /text-\[#111827\]\/50/g, replacement: 'text-[#374151]' },
  { regex: /text-\[#111827\]\/60/g, replacement: 'text-[#374151]' },
  { regex: /text-\[#111827\]\/90/g, replacement: 'text-[#111827]' },
  { regex: /text-white\/20/g, replacement: 'text-[#6B7280]' },
  { regex: /text-white\/40/g, replacement: 'text-[#4B5563]' },
  { regex: /text-white\/50/g, replacement: 'text-[#374151]' },
  { regex: /text-white\/60/g, replacement: 'text-[#374151]' },
  { regex: /text-white\/90/g, replacement: 'text-[#111827]' },
  { regex: /text-\[#888888\]/g, replacement: 'text-[#4B5563]' }, // Slightly darker grey
  
  // Specific process flow fix
  // bg-[#111111] became bg-white. BEFORE cards used bg-white/5 -> bg-black/[0.05]. Let's make BEFORE card explicitly light gray.
  { regex: /bg-black\/\[0\.02\]/g, replacement: 'bg-[#F9FAFB]' }, // Very subtle gray
  { regex: /bg-black\/\[0\.03\]/g, replacement: 'bg-[#F3F4F6]' }, // Subtle gray
  { regex: /bg-black\/\[0\.04\]/g, replacement: 'bg-[#E5E7EB]' }, // Gray
  { regex: /bg-black\/\[0\.05\]/g, replacement: 'bg-[#E5E7EB]' }, // Gray
  { regex: /bg-black\/\[0\.06\]/g, replacement: 'bg-[#D1D5DB]' }, // Darker gray
];

walk('./src', (err, results) => {
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
  console.log(`Contrast fixed in ${count} files.`);
});
