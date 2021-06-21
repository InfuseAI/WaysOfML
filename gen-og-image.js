const puppeteer = require('puppeteer');      // Require Puppeteer module
const url = "http://localhost:3000";        // Set website you want to screenshot

const Screenshot = async () => {             // Define Screenshot function
  const browser = await puppeteer.launch();  // Launch a "browser"
  const page = await browser.newPage();      // Open new page
  await page.setViewport({width: 1280, height: 1024})
  await page.goto(url);                      // Go website
  await page.screenshot({
    path: 'public/og2.png',
    clip: {
      x: 0,
      y: 0,
      width: page.viewport().width,
      height: page.viewport().height * 0.8
    }
  });
  await page.close();                        // Close the website
  await browser.close();                     // Close the browser
}
Screenshot();