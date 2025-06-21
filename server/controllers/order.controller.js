import createError from "../utils/createError.js";
import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
import Stripe from "stripe";

export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);

  const gig = await Gig.findById(req.params.id);

  const customerName = req.body.name || "Test User";
  const customerAddress = req.body.address || {
    line1: "123 Main Street",
    city: "Mumbai",
    state: "MH",
    postal_code: "400001",
    country: "IN",
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price,
    currency: 'usd',
    description: `Order for gig: ${gig.title} by seller ${gig.userId} for buyer ${req.userId}`,
    automatic_payment_methods: {
      enabled: true,
    },
    shipping: {
      name: customerName,
      address: customerAddress,
    },
  });

  const newOrder = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};
export const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
          new: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};
