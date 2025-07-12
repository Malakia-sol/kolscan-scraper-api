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


## 👤 Author

**Malakia.sol**
- Telegram: [@KingMalakia](https://t.me/KingMalakia)

