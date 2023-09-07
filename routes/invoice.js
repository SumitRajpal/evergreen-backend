const { Router } = require('express');
const router = Router();
const { getInvoice,
      getInvoiceById } = require('../controllers/invoice');

router.get('/', getInvoice);
router.get('/:id', getInvoiceById);

module.exports = router;