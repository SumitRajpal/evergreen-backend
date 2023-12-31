
const { CART_CATEGORY, ROLES_TYPE,PRODUCT_CATEGORY, INVOICE_CATEGORY, STATUS } = require("../utils/constants");

/**
 * @swagger
 * /vendors:
 *   get:
 *     tags:
 *       - All Vendors
 *     description: Returns all Vendors
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Vendor
 *         schema:
 *           $ref: '#/definitions/Vendor'
 */



const getConstants = async (request, response, next) => {
  try {
       const allConstant = {
        ROLES_TYPE,CART_CATEGORY, PRODUCT_CATEGORY, INVOICE_CATEGORY, STATUS 
       }
        response.status(200).json(allConstant).end();
      } catch (error) {
        next(error);
      }
    };

    module.exports = {getConstants}