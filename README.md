# KolScan Scraper API

A Node.js web scraper for extracting tokens and trades data from [kolscan.io](https://kolscan.io).

## 🚀 Features

- **Token Scraping**: Extract comprehensive token data from kolscan.io/tokens
- **Trade Scraping**: Fetch recent trades data with customizable limits
- **Headless Browsing**: Uses Puppeteer for reliable web scraping
- **JSON Export**: Automatically saves scraped data to JSON files
- **User Agent Simulation**: Mimics real browser behavior to avoid detection

## 📋 Prerequisites

- Node.js (version 12 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Malakia-sol/kolscan-scraper-api.git
cd kolscan-scraper-api
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Usage

### Scraping Tokens

Run the token scraper to extract all token data:

```bash
node koltokens.js
```

This will:
- Navigate to kolscan.io/tokens
- Fetch token data via the API endpoint
- Save results to `koltokens.json`

### Scraping Trades

Run the trades scraper to extract recent trades:

```bash
node koltrades.js
```

This will:
- Navigate to kolscan.io/trades
- Fetch trades data with limit=100 and offset=0
- Save results to `koltrades.json`

## 📁 Output Files

- `koltokens.json` - Contains all token data from kolscan.io
- `koltrades.json` - Contains recent trades data

## 🔧 Configuration

### Token Scraper (`koltokens.js`)
- Modify the request body in the fetch call to add parameters like `{ limit: 100 }`
- Adjust the API endpoint if needed

### Trade Scraper (`koltrades.js`)
- Change the `limit` and `offset` parameters in the API URL
- Modify the endpoint to fetch different trade data

## 🛡️ Rate Limiting

The scraper includes:
- Realistic user agent headers
- `networkidle2` wait condition to ensure complete page loads
- Headless browsing to minimize resource usage

## 📦 Dependencies

- **[Puppeteer](https://pptr.dev/)** - Headless Chrome browser automation
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client
- **[fs](https://nodejs.org/api/fs.html)** - File system operations (built-in)

## 🚨 Important Notes

- This scraper is for educational and research purposes only
- Respect kolscan.io's terms of service and rate limits
- Consider implementing delays between requests for large-scale scraping
- The site structure may change, requiring script updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Malakia.sol**
- Telegram: [@KingMalakia](https://t.me/KingMalakia)

## ⚠️ Disclaimer

This tool is provided as-is for educational purposes. Users are responsible for complying with kolscan.io's terms of service and applicable laws. The author is not responsible for any misuse of this software.

---

*Happy scraping! 🕷️*
