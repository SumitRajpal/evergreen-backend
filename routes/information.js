const { Router } = require('express');
const router = Router();
const { getPreviousOrderById
      } = require('../controllers/information');

router.get('/', getPreviousOrderById);

module.exports = router;