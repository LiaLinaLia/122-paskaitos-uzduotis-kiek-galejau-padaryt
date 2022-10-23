const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    secret: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_39phYS6Kl9EdfwHb9plGG9ftnPTfM9q13A&usqp=CAU"
    }
})

const exportUser = mongoose.model("aplicatio", userSchema)

module.exports = exportUser