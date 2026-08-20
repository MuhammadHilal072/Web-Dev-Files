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

const orderSchema = new Schema({
    item: String,
    price: String,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addOrders = async() => {
    let add = await Order.insertMany([
        {item: "Burger", price: 500},
        {item: "Chiken", price: 800},
        {item: "Pizza", price: 1000},
        {item: "Pepsi", price: 200},
    ]);
    console.log(add);
}

const addCustomer = async() => {
    let cust1 = new Customer({
        name: "M.Ali",
    });
    
    let order1 = await Order.findOne({item: "Chiken"});
    let order2 = await Order.findOne({item: "Pizza"});
     
    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let add = await cust1.save();
    console.log(add);

    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

addOrders();
addCustomer();































