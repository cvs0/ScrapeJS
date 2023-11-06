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
}

module.exports = WebScraper;
