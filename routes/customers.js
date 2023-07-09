const { Router } = require('express');
const router = Router();
const { getCustomer
} = require('../controllers/customers/customers');
router.get('/', getCustomer);
module.exports = router;