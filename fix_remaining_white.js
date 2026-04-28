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
    
    // Split by lines to carefully replace text-white
    let lines = content.split('\n');
    lines = lines.map(line => {
      // If line has bg-[#00A3FF], bg-[#00a3ff], or to-[#003366], or bg-black, skip replacing text-white
      if (line.includes('bg-[#00A3FF]') || line.includes('bg-[#00a3ff]') || line.includes('to-[#003366]') || line.includes('bg-black')) {
        return line;
      }
      return line.replace(/text-white/g, 'text-[#111827]');
    });
    
    content = lines.join('\n');

    // Also replace text-white/40, text-white/50, etc.
    content = content.replace(/text-white\//g, 'text-[#111827]/');

    if (original !== content) {
      fs.writeFileSync(file, content, 'utf8');
      count++;
    }
  });
  console.log(`Fixed remaining in ${count} files.`);
});
