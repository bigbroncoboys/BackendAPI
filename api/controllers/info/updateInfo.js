const knex = require('../../../database');

const updateInfo = async (req, res) => {
    const accountID = req.params.accountID;

    const businessName = req.body.businessName;
    const businessAddress = req.body.businessAddress;
    const businessType = req.body.businessType;
    const employees = req.body.employees; // Array

    if (typeof businessName !== 'undefined') {
        await knex('business_info').update({ name: businessName }).where({ account_id: accountID });
    }

    if (typeof businessAddress !== 'undefined') {
        await knex('business_info').update({ address: businessAddress }).where({ account_id: accountID });
    }

    if (typeof businessType !== 'undefined') {
        await knex('business_info').update({ type: businessType }).where({ account_id: accountID });
    }

    if (typeof employees !== 'undefined') {
        await knex('employees').delete().where({ account_id: accountID });

        for (const employee of employees) {
            await knex('employees').insert({ account_id: accountID, name: employee });
        }
    }

    res.end();
}

module.exports = updateInfo
