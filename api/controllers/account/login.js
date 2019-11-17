const knex = require('../../../database');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    console.log(req.body);

    const email = req.body.email;
    const password = req.body.password;

    const accRes = await knex('accounts').select().where({ email: email }).limit(1);

    const valid = bcrypt.compareSync(password, accRes[0].password);

    res.json({ success: valid });
}

module.exports = login
