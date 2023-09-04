const { Router } = require('express');
const router = Router();
const { getCategory,
      getCategoryById,
      setCategory,
      putCategory } = require('../controllers/products/category');
router.post('/', setCategory);
router.get('/', getCategory);
router.get('/:id', getCategoryById);
router.put('/:id', putCategory);
module.exports = router;