
const express = require('express');
const productControllers = require('../controllers/productControllers')
const userController = require('../controllers/userControllers')
const authorise = require('../middleware/authorise');

const router = express.Router();

router.get('/getAllProducts',productControllers.getAllProducts);
router.post('/addProduct',productControllers.addProduct);


//http://localhost:5005/api/addProduct/
router.get('/getWithQuery',productControllers.getWithQuery);
//http://localhost:5005/api/getWithQuery/

router.get('/getByCategory');
router.get('/getByName');

router.delete('/product/:id',productControllers.deleteProduct);
//http://localhost:5005/api/product/

router.put('/product/:id',productControllers.updateProduct);
//http://localhost:5005/api/product/



//user

router.post('/register',userController.addUser);
//http://localhost:5005/api/register/
router.post('/login',userController.getUser);
//http://localhost:5005/api/login
router.get('/getProductsWithAuth',authorise,productControllers.getAllProducts);
//http://localhost:5005/api/getProductsWithAuth

module.exports = router;