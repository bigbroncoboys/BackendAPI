const { Router } = require('express');
const infoRouter = Router();

infoRouter.get('/:accountID', require('../controllers/info/getInfo'));
infoRouter.put('/:accountID', require('../controllers/info/updateInfo'));

module.exports = infoRouter