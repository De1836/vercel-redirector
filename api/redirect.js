const fs = require('fs');
const path = require('path');

// get environment variables 
const redirectUrl = process.env.REDIRECT_URL || 'https://example.com';
const siteName = process.env.SITE_NAME || 'Example Site';

// read html file 
const htmlPath = path.join(process.cwd(), 'redirect.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// replace placeholders with variables in .env
html = html
  .replace(/\{\{REDIRECT_URL\}\}/g, redirectUrl)
  .replace(/\{\{SITE_NAME\}\}/g, siteName);

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
};
