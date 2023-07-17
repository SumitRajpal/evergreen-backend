const { Router } = require('express');
const router = Router();
const { getEmployeeById,
      setEmployees,
      getEmployees,
      putEmployees } = require('../controllers/employees');
router.post('/', setEmployees);
router.get('/', getEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', putEmployees);
module.exports = router;