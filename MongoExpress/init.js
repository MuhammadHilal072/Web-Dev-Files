const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then((res) => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
    {
        from: "Hilal",
        to: "Baryal",
        msg: "send me some AI related courses i need to learn AI",
        created_at: new Date()
    },
    {
        from: "Baryal",
        to: "mujeeb",
        msg: "i am in the university ground where are you",
        created_at: new Date()
    },
    {
        from: "mujeeb",
        to: "Shayan",
        msg: "let's go to eat something",
        created_at: new Date()
    },
    {
        from: "Ali",
        to: "Ahmad",
        msg: "i need some money do you have!",
        created_at: new Date()
    },
    {
        from: "Atta",
        to: "shazeeb",
        msg: "i am going to peshawer",
        created_at: new Date()
    },
    {
        from: "Mahadi",
        to: "Hassan",
        msg: "you can bowl the first over",
        created_at: new Date()
    },
    {
        from: "Hadi",
        to: "Meraj",
        msg: "okay i am going see you tommorow",
        created_at: new Date()
    },
    {
        from: "rashid",
        to: "umar",
        msg: "let's go for a walk",
        created_at: new Date()
    },
    {
        from: "sohail",
        to: "hafeez",
        msg: "we need to win this match",
        created_at: new Date()
    },
    {
        from: "Babar",
        to: "rizwan",
        msg: "let's win this series form england",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);
































































































