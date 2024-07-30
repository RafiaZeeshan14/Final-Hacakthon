const mongoose = require("mongoose")

async function dbconnect() {
    // database connection
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err))
    }
module.exports = dbconnect