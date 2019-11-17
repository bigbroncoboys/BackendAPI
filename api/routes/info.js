const { Router } = require('express');
const infoRouter = Router();

infoRouter.get('/info/:accountID', require('../controllers/info/getInfo'));
infoRouter.put('/info/:accountID', require('../controllers/info/updateInfo'));

module.exports = infoRouter