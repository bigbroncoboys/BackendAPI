const knex = require('../../../database');

const getEmployees = async (req, res) => {
    const accountID = req.params.accountID;

    const emplRes = await knex('employees').select('name').where({ account_id: accountID });

    const employees = [];

    emplRes.forEach(employee => {
        employees.push(employee.name);
    });

    res.json(employees);
}

module.exports = getEmployees
