const { Cart_Details } = require("../models/cart");
const { Products, Offer, Price, Inventory } = require("../models/products");
const { EvergreenTable, TABLE_ASSOCIATION } = require("../utils/constants");
const { v4: uuidv4 } = require("uuid");
const sequelize = require("../utils/database");
/**
 * @swagger
 * /employees:
 *   get:
 *     tags:
 *       - All Employees List
 *     description: Returns all Employees
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Employees
 *         schema:
 *           $ref: '#/definitions/Employees'
 */
const getPreviousOrderById = async (request, response, next) => {
  try {
    const cart = await Cart_Details.findAll({
      limit: 20,
      attributes: [
        [sequelize.fn("DISTINCT", sequelize.col("product_id")), "product_id"],
      ],
      include: [
        { model: Products, as: TABLE_ASSOCIATION.cart_details_product },
      ],
      order: [["created_at", "DESC"]],
    });
    response.status(200).json(cart).end();
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getPreviousOrderById
};
