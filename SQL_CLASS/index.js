const { faker } = require("@faker-js/faker");
// "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p       : to use MySQL in CLI run this commond in CLI.
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override")

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let port = 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "11720311"
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "SHOW TABLES";
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)"; // Inserting single user data.
// let q = "INSERT INTO user (id, username, email, password) VALUES ?"; // Inserting Multiple users datas.
// let usersValues = [ ["123b", "123_newuserb", "abc@gmail.comb", "abcdb"], ["123c", "123_newuserc", "abc@gmail.comc", "abcdc"] ];  // Inserting Multiple users datas.

// using faker package now we add data 100 users. 

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];

// for(let i=1; i<=100; i++){
//     data.push(getRandomUser());          // adding 100 fake users data.
// }

// try {
//     connection.query(q, [data], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }

// connection.end();

app.listen(port, () => {
    console.log("Server is listenig on port :", port);
});

// Home Route/Page:
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) FROM user`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let count = result[0]["COUNT(*)"];
            res.render("home.ejs", {count});
        });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

// Show Route/Page:
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            res.render("showuser.ejs", {result});
        });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

// Edit Route/Page:
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", {user});
        });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

// Update (into DB) Route/Page:
app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let {password : formPass, username : newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("Wrong Password");
            }else{
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
            res.send(user);
        });
    } catch(err) {
        console.log(err);
        res.send("Some error in DB");
    }
});

 





















































































