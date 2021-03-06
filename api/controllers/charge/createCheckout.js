const stripe = require('stripe')(require('../../../config').STRIPE_SECRET_KEY);
const knex = require('../../../database');

const createCheckout = async (req, res) => {
    const checkoutItems = req.body.checkoutItems;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: checkoutItems,
        success_url: 'https://sendmoney.dev/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'https://sendmoney.dev/cancel',
    });

    await knex('payment_sessions').insert({ session_id: session.id });

    res.json({ session_id: session.id });
}

module.exports = createCheckout
