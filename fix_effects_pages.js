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
  { regex: /shadow-\[0_0_20px_rgba\(59,130,246,0\.3\)\]/g, replacement: 'shadow-md shadow-[#00A3FF]/20' },
  { regex: /shadow-\[0_0_30px_rgba\(59,130,246,0\.5\)\]/g, replacement: 'hover:shadow-lg hover:shadow-[#00A3FF]/30' },
  { regex: /shadow-\[0_0_20px_rgba\(59,130,246,0\.4\)\]/g, replacement: 'shadow-md shadow-[#00A3FF]/20' },
  { regex: /shadow-\[0_0_20px_rgba\(0,163,255,0\.4\)\]/g, replacement: 'shadow-md shadow-[#00A3FF]/20' },
  { regex: /via-\[#00a3ff\]\/80/g, replacement: 'via-[#00A3FF]/40' },
];

walk('./src/app', (err, results) => {
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
  console.log(`Effects fixed in ${count} files in src/app.`);
});
