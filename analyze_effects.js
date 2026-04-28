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

walk('./src/components', (err, results) => {
  if (err) throw err;
  results.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let issues = [];
    
    let shadowMatches = content.match(/shadow-\[[^\]]+\]/g);
    if (shadowMatches) {
        shadowMatches.forEach(m => {
            if (m.includes('rgba(0,163,255') || m.includes('0.5') || m.includes('0.4') || m.includes('0.8')) {
                issues.push(m);
            }
        });
    }

    let gradientMatches = content.match(/bg-gradient-[^\s"]+/g);
    if (gradientMatches) issues.push(...gradientMatches);

    let blurMatches = content.match(/blur-\[[^\]]+\]/g);
    if (blurMatches) issues.push(...blurMatches);

    let fromToMatches = content.match(/(from|via|to)-\[[^\]]+\]/g);
    if (fromToMatches) issues.push(...fromToMatches);

    if (issues.length > 0) {
        console.log(`\n--- ${path.basename(file)} ---`);
        console.log([...new Set(issues)].join('\n'));
    }
  });
});
