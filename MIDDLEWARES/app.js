const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// Middlewares : 
// app.use((req, res, next) => {
//     console.log("Hi i am 1st middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi i am 2nd middleware");
//     next();
// });

// create a useful middleware : Logger middleware : to log the information of request.
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// for that API path :
// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveaccess") {
//         next();
//     }
//     res.send("ACESSS DENIED!");
// });

const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACESSS DENIED!");
}

app.get("/api", checkToken, (req, res) => {
    res.send("Data");
});

// Middleware for Error Handlings :
app.get("/err", (req, res) => {
    abcd = abcd;
});

// Activity :
app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
    let {status = 500, message = "Error"} = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("Server is runing on port : 8080");
});

app.get("/" , (req, res) => {
    res.send("Hi i am Root");
});

app.get("/random", (req, res) => {
    res.send("This is random page");
});

// for 404 : if no other path found or user access wrong path this function calls.
app.use((req, res) => {
    res.send("Page not found! 404");
});



