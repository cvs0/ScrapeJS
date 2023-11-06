class Screenshot {
  constructor(browser) {
    this.browser = browser;
  }
  
  async captureElement(url, selector, outputPath) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const element = await page.$(selector);

    if (element) {
      await element.screenshot({ path: outputPath });
    }

    await page.close();
  }

  async captureFullPage(url, outputPath) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const bodyHandle = await page.$('body');
    const { height } = await bodyHandle.boundingBox();
    await bodyHandle.dispose();

    await page.setViewport({ width: 1920, height: height });
    await page.screenshot({ path: outputPath });

    await page.close();
  }

  async captureElementViewport(url, selector, outputPath, width, height) {
    const page = await this.browser.newPage();
    await page.goto(url);
    const element = await page.$(selector);

    if (element) {
      await element.setViewport({ width, height });
      await element.screenshot({ path: outputPath });
    }

    await page.close();
  }

  async captureMultipleElements(url, selectors, outputPath) {
    const page = await this.browser.newPage();
    await page.goto(url);

    for (const selector of selectors) {
      const element = await page.$(selector);
      if (element) {
        const filename = `${outputPath}_${selector.replace(/[^\w\s]/gi, '')}.png`;
        await element.screenshot({ path: filename });
      }
    }

    await page.close();
  }

  async capturePDF(url, outputPath) {
    const page = await this.browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.pdf({ path: outputPath, format: 'A4' });
    await page.close();
  }
}
  
module.exports = Screenshot;