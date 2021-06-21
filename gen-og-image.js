const puppeteer = require('puppeteer');      // Require Puppeteer module
const url = "http://localhost:3000";        // Set website you want to screenshot

const Screenshot = async () => {             // Define Screenshot function
  const browser = await puppeteer.launch();  // Launch a "browser"
  const page = await browser.newPage();      // Open new page
  await page.setViewport({width: 1280, height: 1024})
  await page.goto(url);                      // Go website
  const logo = await page.$('h1');        // logo is the element you want to capture
  await logo.screenshot({
    path: 'public/og.png'
    });
  await page.close();                        // Close the website
  await browser.close();                     // Close the browser
}
Screenshot();