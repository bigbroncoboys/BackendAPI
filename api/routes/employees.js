const { Router } = require('express');
const employeesRouter = Router();

employeesRouter.get('/employees/:accountID', require('../controllers/employees/getEmployees'));
employeesRouter.put('/employees/:accountID', require('../controllers/employees/updateEmployees'));

module.exports = employeesRouter