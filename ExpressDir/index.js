// Express :

const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// Sending request :

// app.use((req, res) => {
//     console.log(req);
//     console.log("request received");
// });

// sending a response :

// app.use((req, res) => {
//     res.send("This is a basic response");
//     res.send({
//         name: "apple",
//         color: "red",
//         price: "250 per kg"
//     });
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>";
//     res.send(code);
// });

// Routing :

// app.get("/", (req, res) => {
//     res.send("Hello i am root path");
// });

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//     res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("you send a post request to root");
// });

 
// Path Parameters :

// app.get("/", (req, res) => {
//     res.send("Hello i am root path");
// });

// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     res.send("Hello i am root path");
// });

// app.get("/:username/:id", (req, res) => {
//     let { username, id } = req.params;
//     res.send(`Welcom to the page of @${username}.`);
// });

// app.get("/:username/:id", (req, res) => {
//     let { username, id } = req.params;
//     let htmlStr = `<h1>Welcom to the page of @${username}.</h1>`;
//     res.send(htmlStr);
// });

// Query Strings :

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("No results");
// });

// app.get("/search", (req, res) => {
//     let { q } = req.query;
//     res.send(`search results for query: ${q}`);
// });

// app.get("/search", (req, res) => {
//     let { q } = req.query;
//     let htmlStr = `<h1>search results for query: ${q} </h1>`;
//     res.send(htmlStr);
// });

// app.get("/search", (req, res) => {
//     let { q } = req.query;
//     if(!q) {
//         res.send("<h1>Nothing for this search</h1>");
//     }
//     res.send(`<h1>search results for query: ${q} </h1>`);
// });





































































































































