const { Router } = require('express');
const router = Router();
router.use('/users', require('../routes/users'))
router.use('/vendors', require('../routes/vendors'))
router.use('/employees', require('../routes/employees'))
router.use('/products', require('../routes/products'))

module.exports = router;