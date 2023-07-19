const { Router } = require('express');
const router = Router();
const { getConstants } = require('../controllers/constants');
router.get('/', getConstants);
module.exports = router;