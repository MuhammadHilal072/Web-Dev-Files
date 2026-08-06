// GET & POST Requests using Express JS :

const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`);
});

app.get("/register", (req, res) => {
    let { username, password } = req.query;
    res.send(`GET request recieved with username : ${username} and password : ${password}`);
    // res.send("standard GET Response");
});

app.post("/register", (req, res) => {
    let { username, password } = req.body;
    res.send(`POST request recieved with username : ${username} and password : ${password}`);
    // console.log(req.body);
    // res.send("standard POST Response");
}) ;




