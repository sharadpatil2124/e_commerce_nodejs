const Product = require('../models/productModel');

async function addProduct(req, res){
    console.log("req.body get Product****",req.body);
    
    try{
        const newProduct = new Product(req.body);

        const result = await newProduct.save();
        res.status(200).send({ message : "Product added successfully",task : result});

    }catch (error){
        res.status(500).send(error);
    }
}

async function getAllProducts(req, res){
    console.log("*********")
    try {
        result = await Product.find({},{__v:0});
        console.log(result);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}


async function getWithQuery(req, res){
    console.log(req.errorquery);

Category = req.query.CATEGORY,
Price = req.query.Price

try {
    result = await addProduct.find({category : Category, price : Price})

    res.status(200).send(result)
} catch (error) {
    res.status(500).send(error);
    
}
}

async function deleteProduct(req,res){
    console.log("req.params.id",req.params.id);
    // ID = req.params.id;
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product){
            res.status(400).send({ message : "Product not found"});
        }
        res.send({task : product, message : "Product deleted"});
    } catch (error) {
        res.status(500).send(error);
    }
}


async function updateProduct(req,res){
    console.log("UpdateProduct req.body.params.id",req.params.id);
    console.log("updateProduct req.body",req.body);
    try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        });
    if (!product){
        res.status(400).send({message:"Product not found"});
    }
    res.status(200).send({message : "Product updated",task : product});
        
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    getWithQuery,
    deleteProduct,
    updateProduct
}