// node application to request the server and recieve a response
const https = require('https');
const options = "https://www.google.com/";
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    let str = '';
    str += d;
    htmlLoaded = cheerio.load(str);
    loadHTML(htmlLoaded); 
  })
});

req.on('error', error => {
  console.error(error)
})

req.end();
