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

  async editCookie(url, cookie) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.setCookie(cookie);
    await page.close();
  }

  async getCookiesForDomain(url, domain) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const cookies = (await page.cookies()).filter((cookie) => cookie.domain === domain);
    await page.close();
    return cookies;
  }

  async getCookieValue(url, name) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const cookies = await page.cookies();
    const cookie = cookies.find((c) => c.name === name);
    const value = cookie ? cookie.value : null;
    await page.close();
    return value;
  }

  async clearCookiesForDomain(url, domain) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const cookies = await page.cookies();
    const cookiesToClear = cookies.filter((cookie) => cookie.domain === domain);
    for (const cookie of cookiesToClear) {
      await page.deleteCookie({ name: cookie.name, domain: cookie.domain });
    }
    await page.close();
  }

  async getAllCookies() {
    const page = await this.browser.newPage();
    const cookies = await page.cookies();
    await page.close();
    return cookies;
  }
  
  async getCookiesByPath(url, path) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const cookies = (await page.cookies()).filter((cookie) => cookie.path === path);
    await page.close();
    return cookies;
  }
  
  async deleteCookiesByPath(url, path) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const cookies = (await page.cookies()).filter((cookie) => cookie.path === path);
    for (const cookie of cookies) {
      await page.deleteCookie({ name: cookie.name, path: cookie.path });
    }
    await page.close();
  }

  async getAllCookiesForDomain(domain) {
    const page = await this.browser.newPage();
    const cookies = (await page.cookies()).filter((cookie) => cookie.domain === domain);
    await page.close();
    return cookies;
  }
  
}
  
module.exports = WebScraperCookies;
  