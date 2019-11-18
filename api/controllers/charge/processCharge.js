const stripe = require('stripe')('sk_test_TjKyrQkUUknGVTgXRhFyGgZS00eMv0kO65');

const processCharge = async (req, res) => {
    const cardNumber = req.body.cardNumber;
    const cardExpMonth = req.body.cardExpMonth;
    const cardExpYear = req.body.cardExpYear;
    const cardCVC = req.body.cardCVC;
    const amount = req.body.amount;

    try {
        const token = await stripe.tokens.create({
            card: {
                number: cardNumber,
                exp_month: cardExpMonth,
                exp_year: cardExpYear,
                cvc: cardCVC,
            }
        });

        await stripe.charges.create(
            {
                amount: amount,
                currency: 'usd',
                source: token.id
            }
        );

        res.json({ success: true });
    } catch (e) {
        console.error(e);
        res.json({ success: false });
    }
}

module.exports = processCharge
