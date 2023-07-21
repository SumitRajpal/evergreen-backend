const { Router } = require('express');
const router = Router();
const { getCartDetails,
      getCartDetailsById,
      setCartDetails,
      putCartDetails } = require('../controllers/cart_details');
/**
 * Cart Details
 */
router.post('/', setCartDetails);
router.get('/', getCartDetails);
router.get('/:id', getCartDetailsById);
router.put('/:id', putCartDetails);
module.exports = router;