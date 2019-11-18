const { Router } = require('express');
const chargeRouter = Router();

chargeRouter.post('/process', require('../controllers/charge/processCharge'));

module.exports = chargeRouter