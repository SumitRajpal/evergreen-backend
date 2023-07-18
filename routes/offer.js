const { Router } = require('express');
const router = Router();
const {  getOffer,
      getOfferById,
      setOffer,
      putOffer } = require('../controllers/products/offer');
router.post('/', setOffer);
router.get('/', getOffer);
router.get('/:id', getOfferById);
router.put('/:id', putOffer);
module.exports = router;