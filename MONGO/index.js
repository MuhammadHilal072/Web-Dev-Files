// Create Connection B/W Mongo Shell and JavaScript :

const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
 
// Create Schema for User :

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});


// Create Collection :

const User = mongoose.model("User", userSchema);

// Insertions of Single user into Collections :

const user1 = new User({
    name: "Hilal", 
    email: "hilal@gmail.com", 
    age: 20,
});

user1.save();

const user2 = new User({
    name: "Ali", 
    email: "ali@gmail.com", 
    age: 22,
});
 
user2.save()
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


// Insertion of Many users :

User.insertMany([
    {name: "Tony", email: "tony@gmail.com", age: 40},
    {name: "stark", email: "stark@gmail.com", age: 30},
    {name: "Peter", email: "peter@gmail.com", age: 27},
]).then((res) => {
    console.log(res);
});

// Find All user in a Collection :

User.find({})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.find({ age: { $gt: 18 } })
.then((res) => {
    console.log(res[0].name);
}).catch((err) => {
    console.log(err);
});

User.findOne({ age: { $gt: 18 } })
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.findById("6a7c3dccf8651331cc4544d0")
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


// Updation in a Collection :

User.updateOne({name: "stark"}, {age: 50})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.updateMany({age: {$gt: 30} }, {age: 55})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.findOneAndUpdate({name: "Tony" }, {age: 30}, {new: true})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.findByIdAndUpdate("6a7c3dccf8651331cc4544cf", {age: 60}, {new: true})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


// Deletion in a Collection :

User.deleteOne({name: "Tony"})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.deleteMany({age: 20})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.findOneAndDelete({name: "stark"})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

User.findByIdAndDelete("6a7c3dccf8651331cc4544d1")
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
























































