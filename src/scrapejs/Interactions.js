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

  async clickAndHold(url, selector, duration) {
    const page = await this.browser.newPage();
    await page.goto(url);
    await page.waitForSelector(selector);
    await page.click(selector, { button: 'left', delay: duration });
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
}
  
module.exports = WebScraperInteractions;
  