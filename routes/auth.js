const { Router } = require('express');
const router = Router();

const { getPermission } = require('../controllers/auth/permission');
const { login } = require('../controllers/auth/login');

router.get('/permissions',getPermission);
router.post('/login',login);

module.exports = router;