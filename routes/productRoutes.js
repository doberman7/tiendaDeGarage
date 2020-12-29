const express = require('express');
const router = express.Router();
const {
  createProduct,
  deleteProduct,
  getProductDetails,
  getUserProducts,
  editProduct,
  addProductImage,
  allproducts,
} = require('../controllers/Product.Controllers');
const { isAuth, catchErrs } = require('../middlewares');

router.get('/get-user-products', catchErrs(getUserProducts));
router.get('/get-product-details/:productId', catchErrs(getProductDetails));
router.post('/create', catchErrs(createProduct));
router.put('/edit-product/:productId', catchErrs(editProduct));
router.delete('/delete-product/:productId', catchErrs(deleteProduct));
router.get('/all', allproducts);
module.exports = router;
