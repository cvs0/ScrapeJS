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

  async getCurrentPage() {
    if (this.browser) {
      const pages = await this.browser.pages();
      return pages[pages.length - 1];
    }
    return null;
  }

  async blockRequests(patterns) {
    const page = await this.getCurrentPage();
    if (page) {
      await page.setRequestInterception(true);
      page.on('request', (request) => {
        const url = request.url();
        if (patterns.some((pattern) => url.includes(pattern))) {
          request.abort();
        } else {
          request.continue();
        }
      });
    }
  }

  async unblockRequests() {
    const page = await this.getCurrentPage();
    if (page) {
      await page.setRequestInterception(false);
    }
  }

  async setUserAgent(userAgent) {
    const page = await this.getCurrentPage();
    if (page) {
      await page.setUserAgent(userAgent);
    }
  }

  async setProxy(proxyUrl) {
    if (this.browser) {
      await puppeteerExtra.use(PuppeteerExtraPluginProxy({
        address: proxyUrl,
      }));
    }
  }
}

module.exports = WebScraper;