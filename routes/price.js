const { Router } = require('express');
const router = Router();
const { getPrice,
      getPriceById,
      setPrice,
      putPrice } = require('../controllers/products/price');
router.post('/', setPrice);
router.get('/', getPrice);
router.get('/:id', getPriceById);
router.put('/:id', putPrice);
module.exports = router;