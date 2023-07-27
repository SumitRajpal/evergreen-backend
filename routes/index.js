const { Router } = require('express');
const router = Router();
router.use('/constants', require('../routes/constants'))
router.use('/users', require('../routes/users'))
router.use('/vendors', require('../routes/vendors'))
router.use('/employees', require('../routes/employees'))
router.use('/products', require('../routes/products'))
router.use('/inventory', require('../routes/inventory'))
router.use('/offer', require('../routes/offer'))
router.use('/price', require('../routes/price'))
router.use('/stale', require('../routes/stale'))
router.use('/cart', require('../routes/cart'))
router.use('/cart-details', require('../routes/cart-details'))
router.use('/subscription', require('../routes/subscription'))
router.use('/permission', require('../routes/permission'))
module.exports = router;