const { Router } = require('express');
const router = Router();

const { getPermission } = require('../controllers/auth/permission');

router.get('/',getPermission);

module.exports = router;