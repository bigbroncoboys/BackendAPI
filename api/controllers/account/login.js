const knex = require('../../../database');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const accRes = await knex('accounts').select().where({ email: email }).limit(1);

    console.log(accRes[0].password);

    const valid = bcrypt.compareSync(password, accRes[0].password);

    res.json({ success: valid });
}

module.exports = login
