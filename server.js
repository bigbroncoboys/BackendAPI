const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.set('json spaces', 4);

app.use('/account', require('./api/routes/account'));

app.listen(port, () => console.log(`Listening on port ${port}!`));