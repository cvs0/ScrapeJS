const WebScraper = require('./index'); // Use the correct relative path

const scraper = new WebScraper();

async function main() {
  try {
    await scraper.initialize();
    const title = await scraper.scrapeTitle('https://youtube.com');
    const paragraph = await scraper.scrapeText('https://youtube.com', 'p');
    console.log(`Title: ${title}`);
    console.log(`First paragraph: ${paragraph}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await scraper.close();
  }
}

main();
