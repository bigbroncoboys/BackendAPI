const { Router } = require('express');
const accountRouter = Router();

accountRouter.post('/create', require('../controllers/account/createAccount'));
accountRouter.post('/login', require('../controllers/account/login'));

module.exports = accountRouter