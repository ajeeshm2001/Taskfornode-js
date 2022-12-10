const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const [page] = await browser.pages();
    await page.goto('https://www.google.com/');
    let prev =  page.url();
    let current
    setInterval(async()=>{
      prev =  page.url();
      if(current != prev) 
      {
        console.log(page.url());
        current = prev;
      }
    } , 500)
  } catch (err) {
    console.error(err);
  }
})();