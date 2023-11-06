class WebScraperNavigation {
    async navigateTo(url) {
      const page = await this.browser.newPage();
      await page.goto(url);
      await page.close();
    }
  
    async goBack() {
      const page = await this.browser.newPage();
      await page.goBack();
      await page.close();
    }
  
    async goForward() {
      const page = await this.browser.newPage();
      await page.goForward();
      await page.close();
    }
  }
  
  module.exports = WebScraperNavigation;
  