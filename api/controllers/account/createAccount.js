const knex = require('../../../database');
const bcrypt = require('bcrypt');

const createAccount = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const businessName = req.body.businessName;
    const businessAddress = req.body.businessAddress;
    const businessType = req.body.businessType;
    const employees = req.body.employees; // Array

    const hash = await bcrypt.hash(password, await bcrypt.genSalt());

    const insertResult = await knex('accounts').insert({ email: email, password: hash });
    const accountID = insertResult[0];

    await knex('business_info').insert({
        account_id: accountID,
        name: businessName,
        address: businessAddress,
        type: businessType
    });

    for (const employee of employees) {
        await knex('employees').insert({ account_id: accountID, name: employee });
    }

    res.json({ success: 1 });
}

module.exports = createAccount
