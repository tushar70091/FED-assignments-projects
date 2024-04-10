const express = require("express");
const router = express.Router()
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const USER = mongoose.model("USER");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../key");
const requireLogin = require("../middlewares/requireLogin");

router.post("/signupwithemail", (req, res) => {
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const { email, password, cpassword } = req.body;
    if (!email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    else if (!(passwordRegex.test(password))) {
        return res.status(422).json({ error: "Enter Strong Password" });
    }
    else if (password != cpassword) {
        return res.status(422).json({ error: "Passwords do not match" });
    } else {
        USER.findOne({ email: email }).then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already exists with that email. Try loging in" });
            }
            else {
                bcrypt.hash(password, 10).then((hashedPwd) => {
                    const user = new USER({
                        name: email.split('@')[0],
                        email,
                        password: hashedPwd,
                        cpassword: hashedPwd
                    })
                    user.save().then(() => {
                        res.send({ Status: "Sign Up Successful" });
                    }).catch((err) => {
                        console.log(err);
                    })
                })
            }
        })
    }
})
router.post("/signupwithphone", (req, res) => {
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const { phone, password, cpassword } = req.body;
    if (!phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    else if (!(passwordRegex.test(password))) {
        return res.status(422).json({ error: "Enter Strong Password" });
    }
    else if (password != cpassword) {
        return res.status(422).json({ error: "Passwords do not match" });
    } else {
        USER.findOne({ phone_numbeer: phone }).then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already exists with that phone number. Try loging in" });
            }
            else {
                bcrypt.hash(password, 10).then((hashedPwd) => {
                    const user = new USER({
                        phone_number: phone,
                        password: hashedPwd,
                        cpassword: hashedPwd
                    })
                    user.save().then(() => {
                        res.send({ Status: "Sign Up Successful" });
                    }).catch((err) => {
                        console.log(err);
                    })
                })
            }
        })
    }
})
router.post("/signinwithemail", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please fill all the fields" })
    }
    USER.findOne({ email: email })
        .then((savedUser) => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid email" })
            }
            bcrypt.compare(password, savedUser.password)
                .then((doMatch) => {
                    if (doMatch) {
                        const token = jwt.sign({ _id: savedUser._id }, jwt_secret)
                        const { _id, name, email } = savedUser
                        res.json({ token, user: { _id, name, email } })
                        return "Sign In Successfully"
                    } else {
                        return res.status(422).json({ error: "Invalid password" })
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        })
})
router.post("/signinwithphone", (req, res) => {
    const { phone, password } = req.body;
    if (!phone || !password) {
        return res.status(422).json({ error: "Please fill all the fields" })
    }
    USER.findOne({ phone_number: phone })
        .then((savedUser) => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid phone number" })
            }
            bcrypt.compare(password, savedUser.password)
                .then((doMatch) => {
                    if (doMatch) {
                        const token = jwt.sign({ _id: savedUser._id }, jwt_secret)
                        const { _id, name, phone_number } = savedUser
                        res.json({ token, user: { _id, name, phone_number } })
                        return "Sign In Successfully"
                    } else {
                        return res.status(422).json({ error: "Invalid password" })
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        })
})

module.exports = router;