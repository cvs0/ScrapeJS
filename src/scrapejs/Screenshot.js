class Screenshot {
    constructor(browser) {
      this.browser = browser;
    }
  
    async capture(url, outputPath) {
      const page = await this.browser.newPage();
      await page.goto(url);
      await page.screenshot({ path: outputPath });
      await page.close();
    }
  }
  
  module.exports = Screenshot;
  