const express = require('express');
const router = express.Router();
const {
  createProcessProduct,
  editProduct,
  deleteProduct,
  getUserProducts,
} = require('../controllers/Product.Controllers');

router.post('/create', createProcessProduct);
router.put('/edit/:id', editProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/get-user-products', getUserProducts);

module.exports = router;
