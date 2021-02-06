const express = require('express');
const router = express.Router();
const {
  createProcessWish,
  editWish,
  getUserWishes,
  getWishDetails,
  deleteWish,
} = require('../controllers/Wish.Controllers');

router.post('/create', createProcessWish);
router.put('/edit/:id', editWish);
// router.delete('/delete/:id', deleteWish);
router.get('/get-user-wishes', getUserWishes);

router.get('/get-wish-details/:wishId', getWishDetails);
router.put('/edit-wish/:wishId', editWish);
router.delete('/delete-wish/:wishId', deleteWish);

module.exports = router;
