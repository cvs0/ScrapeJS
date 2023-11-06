class WebScraperCookies {
    async setCookie(url, cookie) {
      const page = await this.browser.newPage();
      await page.goto(url);
      await page.setCookie(cookie);
      await page.close();
    }
  
    async clearCookies(url) {
      const page = await this.browser.newPage();
      await page.goto(url);
      await page.deleteCookie();
      await page.close();
    }
  }
  
  module.exports = WebScraperCookies;
  