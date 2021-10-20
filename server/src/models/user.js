const mongoose = require("mongoose")

const User = mongoose.Schema

const userSchema = new User(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            required: true,
        },
        ip_address: {
            type: String,
            required: true,
            unique: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)