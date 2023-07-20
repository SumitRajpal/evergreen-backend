const { Router } = require('express');
const router = Router();
const { getCart,
      getCartById,
      setCart,
      putCart } = require('../controllers/cart');
router.post('/', setCart);
router.get('/', getCart);
router.get('/:id', getCartById);
router.put('/:id', putCart);
module.exports = router;