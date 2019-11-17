const knex = require('../../../database');

const updateEmployees = async (req, res) => {
    const accountID = req.params.accountID;

    const employees = req.body.employees; // Array

    await knex('employees').delete().where({ account_id: accountID });

    for (const employee of employees) {
        await knex('employees').insert({ account_id: accountID, name: employee });
    }

    res.end();
}

module.exports = updateEmployees
