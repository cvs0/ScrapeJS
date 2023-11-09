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

  async dragAndDrop(url, sourceSelector, targetSelector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.waitForSelector(sourceSelector);
    await page.waitForSelector(targetSelector);
    await page.mouse.move(sourceSelector);
    await page.mouse.down();
    await page.mouse.move(targetSelector);
    await page.mouse.up();
    await page.close();
  }

  async typeInInput(url, selector, text) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.click(selector);
    await page.keyboard.type(text);
    await page.close();
  }

  async pressKey(url, key) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.keyboard.press(key);
    await page.close();
  }

  async scrollPage(url, scrollAmount) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.evaluate((scrollAmount) => {
      window.scrollBy(0, scrollAmount);
    }, scrollAmount);
    await page.close();
  }
  
  async clickElement(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.click(selector);
    await page.close();
  }

  async clickAndHold(url, selector, duration) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.waitForSelector(selector);
    await page.click(selector, { button: 'left', delay: duration });
    await page.close();
  }

  async selectElementsByText(url, text) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const elements = await page.$x(`//*[contains(text(), "${text}")]`);
    await page.close();
    return elements;
  }
  
  async rightClickElement(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.click(selector, { button: 'right' });
    await page.close();
  }

  async evaluateOnPage(url, script) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const result = await page.evaluate(script);
    await page.close();
    return result;
  }
  
  async doubleClickElement(url, selector) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.click(selector, { clickCount: 2 });
    await page.close();
  }
}
  
module.exports = WebScraperInteractions;