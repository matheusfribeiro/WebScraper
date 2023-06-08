const puppeteer = require("puppeteer");
const random_useragent = require('random-useragent')
const { url } = require("./config");

(async () => {
  // open browser
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Setup Browser
  
  await page.setDefaultTimeout(10000); 
  await page.setViewport({ width: 1200, height: 800 })
  await page.setUserAgent(random_useragent.getRandom())

  //close browser
  await browser.close();
})().catch((error) => {
  console.log(error);
  process.exit(1);
});
