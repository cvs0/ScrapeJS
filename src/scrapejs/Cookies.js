class WebScraperCookies {
    async getCookies(url) {
      const page = await this.browser.newPage();
      await page.goto(url);
      const cookies = await page.cookies();
      await page.close();
      return cookies;
    }

    async deleteCookie(url, cookieName) {
      const page = await this.browser.newPage();
      await page.goto(url);
      await page.deleteCookie({ name: cookieName });
      await page.close();
    }

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
  