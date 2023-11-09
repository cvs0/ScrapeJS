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

  async reloadPage(url) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.reload();
    await page.close();
  }

  async waitForTimeout(url, milliseconds) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.waitForTimeout(milliseconds);
    await page.close();
  }

  async waitForNavigationTo(url) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.waitForNavigation({ url });
    await page.close();
  }

  async waitForNetworkIdle(url, timeout, maxRequests) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.waitForFunction(
      (timeout, maxRequests) => {
        return (
          window.performance.now() > timeout &&
          window.performance.getEntriesByType('resource').length <= maxRequests
        );
      },
      {},
      timeout,
      maxRequests
    );
    await page.close();
  }

  async openNewPage(url) {
    const newPage = await this.browser.newPage();
    await newPage.goto(url);
    return newPage;
  }

  async waitForSelectorAndNavigate(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.waitForSelector(selector);
    await page.click(selector);
    await page.waitForNavigation();
    await page.close();
  }

  async getTextBySelector(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const text = await page.$eval(selector, (element) => element.textContent);
    await page.close();
    return text;
  }

  async getAttributeValueBySelector(url, selector, attributeName) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const value = await page.$eval(selector, (element, attr) => element.getAttribute(attr), attributeName);
    await page.close();
    return value;
  }

  async getElementsBySelector(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const elements = await page.$$eval(selector, (elements) => elements.map((element) => element.outerHTML));
    await page.close();
    return elements;
  }

  async getElementsByXPath(url, xpath) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const elements = await page.$x(xpath);
    await page.close();
    return elements;
  }

  async getElementsByType(url, elementType) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const elements = await page.$$eval(elementType, (elements) => elements.map((element) => element.outerHTML));
    await page.close();
    return elements;
  }

  async getElementsByText(url, text) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const elements = await page.$$eval(`//*[contains(text(), "${text}")]`, (elements) => elements.map((element) => element.outerHTML));
    await page.close();
    return elements;
  }
}
  
module.exports = WebScraperNavigation;