const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.set('json spaces', 4);

app.use('/account', require('./api/routes/account'));
app.use('/info', require('./api/routes/info'));

app.listen(port, () => console.log(`Listening on port ${port}!`));