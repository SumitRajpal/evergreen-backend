const { Router } = require('express');
const router = Router();
const { getVendors,
      setVendors,
      getVendorsById,
      putVendors } = require('../controllers/vendors');
router.post('/', setVendors);
router.get('/', getVendors);
router.get('/:id', getVendorsById);
router.put('/:id', putVendors);
module.exports = router;