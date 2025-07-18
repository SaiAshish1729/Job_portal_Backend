const mongoose = require("mongoose");

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Successfully!");
    } catch (error) {
        console.log("Error whine Connection", error)
    }
}
module.exports = Connection