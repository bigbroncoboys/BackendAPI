const { Router } = require('express');
const chargeRouter = Router();

chargeRouter.post('/createCheckout', require('../controllers/charge/createCheckout'));
chargeRouter.get('/checkPayment', require('../controllers/charge/checkPayment'));

module.exports = chargeRouter