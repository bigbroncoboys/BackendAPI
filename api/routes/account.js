const { Router } = require('express');
const accountRouter = Router();

accountRouter.post('/create', require('../controllers/account/create'));
accountRouter.post('/login', require('../controllers/account/login'));

module.exports = accountRouter