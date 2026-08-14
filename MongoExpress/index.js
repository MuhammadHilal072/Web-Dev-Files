// MongoDB with Express :

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
.then((res) => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let port = 8080;

app.listen(port, () => {
    console.log("Server is listening on port :", port);
});

app.get("/", (req, res) => {
    res.send("Root is working!");
});

// 1. Index Route/ Main Route : to show all the chats.
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});

// 2. New Route : for creating a new Chat.
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// 3. Create Route : to add the newly create chat into database.
app.post("/chats", (req, res) => {
    let {from, msg, to} = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    newChat.save()
    .then((res) => {
        console.log("newChat added successfuly.");
    }).catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
});

// 4. Edit Route : to edit existing chats:
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

// 5. Update route : to add the edited chat to database.
app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id, 
        {msg: newMsg}, 
        {runValidators: true, new: true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

// 6. Destroy/Deleted Route : to delete a chat.
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});


 






























































































