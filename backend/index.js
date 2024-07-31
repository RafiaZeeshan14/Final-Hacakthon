require('dotenv').config({ path: '.env' })
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/User.js')
const voucherRoutes = require('./routes/Voucher.js')
const cors = require('cors')
const dbconnect = require('./db.js')

const app = express()
const PORT = process.env.port
app.use(express.json())
app.use(cors())
dbconnect()

app.use("/user", userRoutes)
app.use("/voucher", voucherRoutes)

app.get("/test", (req, res) => {
    res.send(`Fee Portal server is runnng on ${PORT}`)
})

app.listen(PORT, () => console.log(`Server is Running on: ${PORT} `))