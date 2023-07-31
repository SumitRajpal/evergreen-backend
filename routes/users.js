const { Router } = require('express');
const router = Router();
const { getUsers,
      setUsers,
      getUsersById,
      putUsers,signIn } = require('../controllers/users');
const { authenticateJWT } = require('../controllers/auth/token');
router.post('/', setUsers);
router.post('/signin', signIn);
router.get('/',authenticateJWT,getUsers);
router.get('/:id', getUsersById);
router.put('/:id', putUsers);
module.exports = router;