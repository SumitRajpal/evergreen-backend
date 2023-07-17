const { Router } = require('express');
const router = Router();
router.use('/customers', require('../routes/customers'))
router.use('/vendors', require('../routes/vendors'))
router.use('/employees', require('../routes/employees'))

module.exports = router;