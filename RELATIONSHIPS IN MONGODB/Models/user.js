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
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);
const addUser = async() => {
    let user1 = new User ({
        username: "M.Hilal",
        addresses: [
            {
                location: "Street no 07, House no 418",
                city: "Mardan",

            },
        ],
    });

    user1.addresses.push({ location: "Fazal killi saleem khan stop", city: "Mardan" }, { location: "Charsadda road UET Mardan", city: "Mardan" });
    let add = await user1.save();
    console.log(add);
}

addUser();





















































