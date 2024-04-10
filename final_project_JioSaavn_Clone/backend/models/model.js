const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: "user"+Math.floor(Math.random()*10000)
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    phone_number: {
        type: String,
        default: ""
    }
});

mongoose.model('USER', userSchema);