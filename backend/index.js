require('dotenv').config({ path: '.env' })
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/User.js')
const voucherRoutes = require('./routes/Voucher.js')
const pdfRoutes = require('./routes/pdf')
const stripeRoutes = require('./routes/Stripe')
const Stripe = require('stripe');
const cors = require('cors')
const dbconnect = require('./db.js')

const app = express()
const PORT = process.env.port
app.use(express.json())
app.use(cors())
dbconnect()

// const corsOptions = {
//   origin: [' https://finalhacakthon.vercel.app', 'https://feeportal.vercel.app'], // List all allowed origins
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

app.use("/user", userRoutes)
app.use("/voucher", voucherRoutes)
app.use('/stripe', stripeRoutes)
app.use('/generate-voucher', pdfRoutes)


app.get("/test", (req, res) => {
    res.send(`Fee portal server is runnng on ${PORT}`)
})


app.listen(PORT, () => console.log(`Server is Running on: ${PORT} `))