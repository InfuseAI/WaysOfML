const puppeteer = require('puppeteer');
const url = "http://localhost:3000";

const Screenshot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 1024});
  await page.goto(url);
  await page.screenshot({
    path: 'public/og4.png',
    clip: {
      x: 0,
      y: 0,
      width: page.viewport().width,
      height: page.viewport().height * 0.8
    }
  });
  await page.close();
  await browser.close();
}
Screenshot();
