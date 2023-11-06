class WebScraperInteractions {
    async hoverOverElement(url, selector) {
      const page = await this.browser.newPage();
      await page.goto(url);
      await page.hover(selector);
      await page.close();
    }
  
    async scrollToElement(url, selector) {
      const page = await this.browser.newPage();
      await page.goto(url);
      await page.$eval(selector, (element) => element.scrollIntoView());
      await page.close();
    }
  
    async emulateDevice(url, device) {
      const page = await this.browser.newPage();
      await page.emulate(puppeteer.devices[device]);
      await page.goto(url);
      await page.close();
    }
  }
  
  module.exports = WebScraperInteractions;
  