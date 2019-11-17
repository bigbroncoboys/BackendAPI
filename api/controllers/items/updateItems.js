const knex = require('../../../database');

const updateItems = async (req, res) => {
    const accountID = req.params.accountID;

    const items = req.body.items; // Array

    await knex('items').delete().where({ account_id: accountID });

    for (const item of items) {
        await knex('items').insert({ account_id: accountID, name: item.name, price: item.price });
    }

    res.end();
}

module.exports = updateItems
