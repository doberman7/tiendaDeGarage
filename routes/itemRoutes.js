const express = require('express');
const router = express.Router();
const {
  createItem,
  deleteItem,
  getItemDetails,
  getUserItems,
  editItem,
  addItemImage,
  allitems,
} = require('../controllers/Item.Controllers');
const { isAuth, catchErrs } = require('../middlewares');

router.get('/get-user-items', catchErrs(getUserItems));
router.get('/get-item-details/:itemId', catchErrs(getItemDetails));
router.post('/create', catchErrs(createItem));
router.put('/edit-item/:itemId', catchErrs(editItem));
router.delete('/delete-item/:itemId', catchErrs(deleteItem));
router.get('/all', allitems);
module.exports = router;
