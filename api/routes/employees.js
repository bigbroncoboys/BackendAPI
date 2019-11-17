const { Router } = require('express');
const employeesRouter = Router();

employeesRouter.get('/:accountID', require('../controllers/employees/getEmployees'));
employeesRouter.put('/:accountID', require('../controllers/employees/updateEmployees'));

module.exports = employeesRouter