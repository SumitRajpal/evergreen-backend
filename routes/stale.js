const { Router } = require('express');
const router = Router();
const { getStale,
      getStaleById,
      setStale,
      putStale } = require('../controllers/products/stale');
router.post('/', setStale);
router.get('/', getStale);
router.get('/:id', getStaleById);
router.put('/:id', putStale);
module.exports = router;