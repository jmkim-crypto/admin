const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'navigation_screenshot.png', clip: { x: 0, y: 0, width: 1280, height: 100 } });
  await browser.close();
})();
