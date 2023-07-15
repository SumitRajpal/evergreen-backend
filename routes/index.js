const { Router } = require('express');
const router = Router();
const errorHandler = (error, request, response, next) => {
      const status = error.status || 400
      response.status(status).json(error).end();
}
router.use(errorHandler)
router.use('/customers', require('../routes/customers'))
module.exports = router;