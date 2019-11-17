const knex = require('../../../database');

const getItems = async (req, res) => {
    const accountID = req.params.accountID;

    const itemsRes = await knex('items').select('name', 'price').where({ account_id: accountID }).orderBy('name', 'asc');

    const items = [];
    itemsRes.forEach(item => {
        items.push({ name: item.name, price: item.price });
    });

    res.json(items);
}

module.exports = getItems
