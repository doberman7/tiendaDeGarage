const express = require('express');
const router = express.Router();
const {
  createProcessProduct,
  editProduct,
  deleteProduct,
  getUserProducts,
  getProductDetails,
} = require('../controllers/Product.Controllers');

router.post('/create', createProcessProduct);
router.put('/edit/:id', editProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/get-user-products', getUserProducts);

router.get('/get-product-details/:productId', getProductDetails);
router.get('/product/edit-product', editProduct);

module.exports = router;
