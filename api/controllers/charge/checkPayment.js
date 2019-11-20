const knex = require('../../../database');

const checkPayment = async (req, res) => {
    const sessionID = req.query.session_id;

    const dbRes = await knex('payment_sessions').select('processed').where({ session_id: sessionID }).limit(1);

    console.log('Requested ' + Date.now());

    res.json(dbRes[0]);
}

module.exports = checkPayment
