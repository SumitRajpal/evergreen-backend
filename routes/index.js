const { Router } = require('express');
const router = Router();
router.use('/users', require('../routes/users'))
router.use('/vendors', require('../routes/vendors'))
router.use('/employees', require('../routes/employees'))
router.use('/products', require('../routes/products'))
router.use('/inventory', require('../routes/inventory'))
router.use('/offer', require('../routes/offer'))
router.use('/price', require('../routes/price'))
router.use('/stale', require('../routes/stale'))

module.exports = router;