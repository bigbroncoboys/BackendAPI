const knex = require('../database');
const { Router } = require('express');
const { STRIPE_PUBLISHABLE_KEY } = require('../config');

const viewsRouter = Router();

viewsRouter.get('/payment', (req, res) => {
    const sessionID = req.query.session_id;

    res.render('payment', { sessionID, STRIPE_PUBLISHABLE_KEY });
});

viewsRouter.get('/success', async (req, res) => {
    const sessionID = req.query.session_id;

    await knex('payment_sessions').update({ processed: true }).where({ session_id: sessionID });

    res.render('success', { sessionID });
});

viewsRouter.get('/cancel', (req, res) => {
    res.render('cancel');
});


module.exports = viewsRouter