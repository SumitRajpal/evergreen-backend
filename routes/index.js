const { Router } = require('express');
const router = Router();
router.use('/customers', require('../routes/customers'))

module.exports = router;