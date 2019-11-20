const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const fs = require('fs');
const secure = require('express-force-https');

const app = express();

app.use(secure);
app.use(bodyParser.json());
app.use('/assets', express.static('views/assets'))
app.set('view engine', 'ejs');
app.set('json spaces', 4);

app.use('/api/account', require('./api/routes/account'));
app.use('/api/info', require('./api/routes/info'));
app.use('/api/employees', require('./api/routes/employees'));
app.use('/api/items', require('./api/routes/items'));
app.use('/api/charge', require('./api/routes/charge'));

app.use('/', require('./views'));

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/sendmoney.dev/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/sendmoney.dev/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/sendmoney.dev/chain.pem')
};

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);