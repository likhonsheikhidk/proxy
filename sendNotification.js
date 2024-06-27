const https = require('https');

// Extract environment variables
const token = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;  // This can be a numeric ID or username (e.g., @username)
const fetchTime = process.env.FETCH_TIME;
const totalProxies = process.env.TOTAL_PROXIES;
const averagePing = process.env.AVERAGE_PING;

const message = `🔄 *Updated HTTPS Proxies! 📡*\n\n` +
                `*Fetch Time:* ${fetchTime} seconds\n` +
                `*Total Proxies:* ${totalProxies}\n` +
                `*Average Ping:* ${averagePing} ms\n\n` +
                `Check out the new list! #proxies`;

const data = JSON.stringify({
  chat_id: chatId,
  text: message,
  parse_mode: 'Markdown'
});

const options = {
  hostname: 'api.telegram.org',
  port: 443,
  path: `/bot${token}/sendMessage`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(data);
req.end();
