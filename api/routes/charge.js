const { Router } = require('express');
const chargeRouter = Router();

chargeRouter.post('/createCheckout', require('../controllers/charge/createCheckout'));

module.exports = chargeRouter