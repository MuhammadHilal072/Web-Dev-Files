const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then((res) => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async() => {
    let user1 = new User({
        username: "m.hilal",
        email: "m.hilal@gmail.com",
    });

    let post1 = new Post({
        content: "Today wheather is very beautiful, rainy and cloudy",
        likes: 2023,
    });

    post1.user = user1;

    await user1.save();
    await post1.save();

    let user = await User.findOne({username: "m.hilal"});

    let post2 = new Post({
        content: "Let's go for a walk",
        likes: 299,
    });

    post2.user = user;
    await post2.save();
}

addData();

















