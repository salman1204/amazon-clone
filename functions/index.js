const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51Hs9VnI11fl0uqZF6OzziPS4mGFeV9IXa2PDr1GDDoSNEL8qMGoK442nJqeNFWSruzlpkoU9s1ggk82oE92UcOio00fLbrfO9E')

// API

// API Config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API Routes
app.get('/', (req,res) => res.status(200).send('Hello World'))

app.post('/payments/create', async(req,res) => {
    const total = req.query.total;
    console.log("payment request received", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-ad9dc/us-central1/api
