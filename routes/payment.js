const { Router } = require('express');
const router = Router();
const { getPayment,
      getPaymentById,
      setPayment,
      putPayment } = require('../controllers/payment');
router.post('/', setPayment);
router.get('/', getPayment);
router.get('/:id', getPaymentById);
router.put('/:id', putPayment);
module.exports = router;