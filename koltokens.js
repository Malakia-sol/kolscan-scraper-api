const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36');
  await page.goto('https://kolscan.io/tokens', { waitUntil: 'networkidle2' });

  const tokensData = await page.evaluate(async () => {
    const res = await fetch('https://kolscan.io/api/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify({}) // puoi usare anche { limit: 100 } se serve
    });
    return await res.json(); // contiene { data: [...] }
  });

  await browser.close();

  fs.writeFileSync('koltokens.json', JSON.stringify(tokensData, null, 2), 'utf-8');
  console.log('Dati salvati in koltokens.json');
})();
