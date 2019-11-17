const { Router } = require('express');
const accountRouter = Router();

accountRouter.post('/create', require('../controllers/account/create'));
accountRouter.post('/login', require('../controllers/account/login'));
accountRouter.get('/info/:accountID', require('../controllers/account/info'));

module.exports = accountRouter