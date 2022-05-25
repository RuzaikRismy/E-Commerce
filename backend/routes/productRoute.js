const express = require('express');

const router = express.Router();

const { getProducts, getProductById } = require('../controller/productController');


//@desc GET all product from db
//@desc GET /api/products
//@access public
router.get('/',getProducts)

//@desc GET a  product from db
//@desc GET /api/products/:id
//@access public
router.get('/:id',getProductById)     

//@desc delete product from db
//@desc DELTE /api/products
//@access public
// router.delete('/:id',(req,res) => {

//   })

  module.exports = router;