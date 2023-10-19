const express = require('express');
const Stripe = require('stripe');

require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  // Warunek sprawdzający czy reservedCar istnieje w req.body
  if (!req.body.reservedCar) {
    //Jeśli nie istnieje to:
    return res.status(400).json({ error: 'Invalid data of reserved car.' });
  }

  const { reservedCar } = req.body;

  const { _id, brand, model, images, description, price } = reservedCar;

  // Tworzenie line_items na podstawie reservedCar
  const line_items = [
    {
      price_data: {
        currency: 'pln',
        product_data: {
          name: `${brand} ${model}`, // Konkatenacja brand i model
          images,
          description,
          metadata: {
            id: _id,
          },
        },
        unit_amount: price * 100,
      },
      quantity: 1,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card','paypal','blik'],
    phone_number_collection: {
      enabled: true
    },
    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/shop`,
  });

  res.json({ url: session.url });
});

module.exports = router;
