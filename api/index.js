const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const User = require("./models/users");

mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json());

app.get("/users", async (req, res) => {
    const users = await User.find({})
    res.json({ users })
})

app.post("/users", async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    console.log(newUser);
    res.json(newUser)
})

app.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    console.log(user)
    res.json({ user })
})

app.listen(3001, () => {
    console.log("App is listening on port 3001!")
})