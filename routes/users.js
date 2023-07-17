const { Router } = require('express');
const router = Router();
const { getUsers,
      setUsers,
      getUsersById,
      putUsers } = require('../controllers/users');
router.post('/', setUsers);
router.get('/', getUsers);
router.get('/:id', getUsersById);
router.put('/:id', putUsers);
module.exports = router;