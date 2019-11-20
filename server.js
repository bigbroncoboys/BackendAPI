const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 80;

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

if (fs.existsSync('server.key')) {
    https.createServer({
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
    }, app)
        .listen(port, function () {
            console.log('Listening on port ${port}!')
        })
} else {
    app.listen(port, () => console.log(`Listening on port ${port}!`));
}