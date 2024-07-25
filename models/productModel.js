const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name : {type : String},
    discription : {type : String, required : false},
    category : {type : String, required : false},
    price : {type : Number},
    quantity : {type : Number}
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

// {
//     name : "MObile",
//     discription : "Realme Narzo 10 6/128GB",
//     category : "Electronics Device",
//     price : 2000,
//     quantity : 5 
// }