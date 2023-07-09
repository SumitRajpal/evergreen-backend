const { Router } = require('express');
const router = Router();
router.use('/customers', require('./customers'))
module.exports = router;