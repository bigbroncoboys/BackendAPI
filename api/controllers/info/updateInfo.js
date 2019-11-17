const knex = require('../../../database');

const updateInfo = async (req, res) => {
    const accountID = req.params.accountID;

    const businessName = req.body.businessName;
    const businessAddress = req.body.businessAddress;
    const businessType = req.body.businessType;

    if (typeof businessName !== 'undefined') {
        await knex('business_info').update({ name: businessName }).where({ account_id: accountID });
    }

    if (typeof businessAddress !== 'undefined') {
        await knex('business_info').update({ address: businessAddress }).where({ account_id: accountID });
    }

    if (typeof businessType !== 'undefined') {
        await knex('business_info').update({ type: businessType }).where({ account_id: accountID });
    }

    res.end();
}

module.exports = updateInfo
