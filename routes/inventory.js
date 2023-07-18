const { Router } = require('express');
const router = Router();
const {  getInventory,
      getInventoryById,
      setInventory,
      putInventory } = require('../controllers/products/inventory');
router.post('/', setInventory);
router.get('/', getInventory);
router.get('/:id', getInventoryById);
router.put('/:id', putInventory);
module.exports = router;