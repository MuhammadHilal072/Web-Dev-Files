const express = require("express");
const app = express();
const path = require("path");             // to run the server in any directory or system we use path modeule.

const port = 8080;

// Using EJS as a template engine :

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));    // to run the server in any directory or system we use path modeule.


app.listen(port, () => {
    console.log("server is running on port ", port);
});

app.get("/", (req, res) => {
    // res.send("This is home page");
    res.render("home.ejs");
    // res.render("home");
});

// Passing data to EJS templates :

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });
});

// Instagram EJS template :

app.get("/ig/:username", (req, res) => {
    const followers = ["user1", "user2", "user3"];
    let { username } = req.params;
    res.render("instagram.ejs", { username, followers });
});

// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     const instaData = require("./data.json");
//     const data = instaData[username];
//     if(!data) {
//         res.render("error.ejs");
//     }
// });
