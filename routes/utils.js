const { Router } = require('express');
const { getVersion } = require('../controllers/auth/version');
const router = Router();


router.get('/version',getVersion);

module.exports = router;