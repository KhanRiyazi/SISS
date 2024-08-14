const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 667 }); // Example viewport for mobile
  await page.goto('http://example.com');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
