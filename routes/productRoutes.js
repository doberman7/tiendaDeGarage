const express = require('express');
const router = express.Router();
const {
  createProcessProduct,
  editProduct,
  deleteProduct,
} = require('../controllers/Product.Controllers');

router.post('/create', createProcessProduct);

router.put('/edit', editProduct);
router.get('/delete', deleteProduct);

module.exports = router;
