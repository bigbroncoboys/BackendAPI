const knex = require('../../../database');

const getInfo = async (req, res) => {
    const accountID = req.params.accountID;

    const infoRes = await knex('business_info').select().where({ account_id: accountID }).limit(1);

    res.json({
        businessName: infoRes[0].name,
        businessAddress: infoRes[0].address,
        businessType: infoRes[0].type,
    });
}

module.exports = getInfo
