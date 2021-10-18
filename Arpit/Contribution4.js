// server request and response

const https = require('https');

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
