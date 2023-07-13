const { Router } = require('express');
const router = Router();
const { getCustomer,
      setCustomer,
      getCustomerById,
      putCustomer } = require('../controllers/customers');
router.post('/', setCustomer);
router.get('/', getCustomer);
router.get('/:id', getCustomerById);
router.put('/:id', putCustomer);
module.exports = router;