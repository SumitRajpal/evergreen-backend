const { Router } = require('express');
const router = Router();
const { getAddress,
      getAddressById,setAddress } = require('../controllers/address');

router.get('/', getAddress);
router.get('/:id', getAddressById);
router.post('/', setAddress);

module.exports = router;