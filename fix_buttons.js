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

walk('./src', (err, results) => {
  if (err) throw err;
  let count = 0;
  results.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Fix cases where bg-[#00A3FF] has text-[#111827]
    content = content.replace(/(bg-\[#00A3FF\]|bg-\[#00a3ff\])[^"]*?text-\[#111827\]/gi, (match) => {
        return match.replace(/text-\[#111827\]/g, 'text-white');
    });

    content = content.replace(/text-\[#111827\][^"]*?(bg-\[#00A3FF\]|bg-\[#00a3ff\])/gi, (match) => {
        return match.replace(/text-\[#111827\]/g, 'text-white');
    });

    // Also fix specific gradients and borders
    content = content.replace(/bg-\[#0B0C10\]/gi, 'bg-white');

    if (original !== content) {
      fs.writeFileSync(file, content, 'utf8');
      count++;
    }
  });
  console.log(`Fixed ${count} files.`);
});
