const knex = require('../../../database');

const getInfo = async (req, res) => {
    const accountID = req.params.accountID;

    const infoRes = await knex('business_info').select().where({ account_id: accountID }).limit(1);
    const emplRes = await knex('employees').select('name').where({ account_id: accountID });

    const accountInfo = {
        businessName: infoRes[0].name,
        businessAddress: infoRes[0].address,
        businessType: infoRes[0].type,
        employees: []
    }

    emplRes.forEach(employee => {
        accountInfo.employees.push(employee.name);
    });

    res.json(accountInfo);
}

module.exports = getInfo
