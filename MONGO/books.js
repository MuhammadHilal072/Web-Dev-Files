const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Creating a Validating Schema :

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is to low for amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    gener: [String],
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Maths XII",
    author: "Rj Rebel",
    price: 850,
});

book1.save()
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

let book2 = new Book({
    title: "Biology XII",
    price: 850,
});

book2.save()
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

let book3 = new Book({
    title: "Physics XII",
    author: "Rj Rebel",
    price: 850,
    gener: ["comic", "fiction", "non-fiction", "other"],
});

book3.save()
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


Book.findByIdAndUpdate("6a7c52fe946b2294acfc8d76", {price: -500}, {runValidators: true})
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message);
});





































