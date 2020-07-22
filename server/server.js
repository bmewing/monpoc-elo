// server/server.js
const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

const key = fs.readFileSync('../../certs/kaiju-elo.com+5-key.pem');
const cert = fs.readFileSync('../../certs/kaiju-elo.com+5.pem');
const options = {
  key: key,
  cert: cert,
  hostname: 'kaiju-elo.com'
}

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Now using https!`)
});

var server = https.createServer(options, app);

// listen on the port
server.listen(port, () => {
  console.log("server starting on port : " + port)
})