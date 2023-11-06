const puppeteer = require('puppeteer');

class WebScraper {
  constructor() {
    this.browser = null;
  }

  async initialize() {
    this.browser = await puppeteer.launch();
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async scrapeTitle(url) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const title = await page.title();
    await page.close();
    return title;
  }

  async scrapeText(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const text = await page.$eval(selector, (element) => element.textContent);
    await page.close();
    return text;
  }

  async screenshot(url, outputPath) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: outputPath });
    await page.close();
  }

  async clickAndNavigate(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.click(selector);
    await page.waitForNavigation();
    const newUrl = page.url();
    await page.close();
    return newUrl;
  }

  async scrapeLinks(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const links = await page.$$eval(selector, (elements) =>
      elements.map((element) => element.href)
    );
    await page.close();
    return links;
  }

  async typeText(url, selector, text) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.type(selector, text);
    await page.close();
  }

  async waitForSelector(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.waitForSelector(selector);
    await page.close();
  }

  async evaluate(url, pageFunction) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const result = await page.evaluate(pageFunction);
    await page.close();
    return result;
  }

  async navigateBack(url) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.goBack();
    await page.close();
  }

  async clickElement(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.click(selector);
    await page.close();
  }
}

module.exports = WebScraper;