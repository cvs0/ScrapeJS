class WebScraperClickElement {
  async clickElement(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.click(selector);
    await page.close();
  }
}
  
module.exports = WebScraperClickElement;