const { Router } = require('express');
const accountRouter = Router();

accountRouter.post('/create', require('../controllers/account/createAccount'));
accountRouter.post('/login', require('../controllers/account/login'));
accountRouter.get('/info/:accountID', require('../controllers/account/getInfo'));
accountRouter.put('/info/:accountID', require('../controllers/account/updateInfo'));

module.exports = accountRouter