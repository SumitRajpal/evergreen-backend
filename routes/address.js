const { Router } = require('express');
const router = Router();
const { getAddress,
      getAddressById } = require('../controllers/address');

router.get('/', getAddress);
router.get('/:id', getAddressById);

module.exports = router;