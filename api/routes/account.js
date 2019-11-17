const { Router } = require('express');
const accountRouter = Router();

accountRouter.post('/', require('../controllers/account/createAccount'));

module.exports = accountRouter