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
}
  
module.exports = WebScraperNavigation;