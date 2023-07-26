const { Router } = require('express');
const router = Router();
const { getSubscription,
      getSubscriptionById,
      setSubscription,
      putSubscription } = require('../controllers/subscription');
router.post('/', setSubscription);
router.get('/', getSubscription);
router.get('/:id', getSubscriptionById);
router.put('/:id', putSubscription);
module.exports = router;