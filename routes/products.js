const { Router } = require('express');
const router = Router();
const { getProducts,
      setProducts,
      getProductsById,
      putProducts } = require('../controllers/products/products');
router.post('/', setProducts);
router.get('/', getProducts);
router.get('/:id', getProductsById);
router.put('/:id', putProducts);
module.exports = router;