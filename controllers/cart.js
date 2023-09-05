const { uuid } = require('uuidv4');
const { Cart } = require("../models/cart");
const { Products, Offer, Price, Inventory } = require("../models/products");
const { EvergreenTable, TABLE_ASSOCIATION } = require("../utils/constants");
const { Op } = require('sequelize');
const { Category } = require('../models/category');

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
const getCart = async (request, response, next) => {
      try {
            const products = await Products.findAndCountAll({
              where: {
                product_id: {
                  [Op.in]: request.query.filter?.product_id
                }
              },
              include: [{ model: Offer, as: TABLE_ASSOCIATION.product_offer, where: { active: true }, attributes: { exclude: ["product_id", "start_at", "end_at", "active"] } },
              { model: Price, as: "price", required: true, where: { active: true }, attributes: { exclude: ["product_id", "start_at", "end_at", "active"] } },
              { model: Inventory, as: TABLE_ASSOCIATION.product_inventory, required: true, attributes: { exclude: "product_id" } },
              { model: Category, as: "product_category" }
              ],
              order: [[Price, 'start_at', 'DESC']]
            });
            response.status(200).json(products).end();
          } catch (error) {
            next(error);
          }
};

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     tags:
 *       - Employees by Id
 *     description: Returns a single Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - id: id
 *         description: Employees's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Employee Details
 *         schema:
 *           $ref: '#/definitions/Employees'
 */
const getCartById = async (request, response, next) => {
      const id = request.params.id;
      try {
            const cart = await Cart.findAll({
                  where: { user_id: id },
                  include: [
                        {
                              model: Products, required: true,
                              as: TABLE_ASSOCIATION.cart_product,
                              attributes: { exclude: "id" }, include: [{ model: Offer, as: "offer", attributes: { exclude: "product_id" } },
                              { model: Price, as: "price", attributes: { exclude: "product_id" } },
                              { model: Inventory, as: "inventory", attributes: { exclude: "product_id" } },
                              ]
                        }
                  ]
            });
            response.status(200).json(cart).end();
      } catch (error) {
            next(error);
      }
};

/**
 * @swagger
 * /employees:
 *   post:
 *     tags:
 *       - Create Employee
 *     description: Creates a new Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: employee
 *         description: Employee object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Employee'
 *     responses:
 *       200:
 *         description: Successfully created
 */
const setCart = async (request, response, next) => {
      try {
            const cart = await Cart.create(request.body)
            response.status(200).json(cart).end();
      } catch (error) {
            next(error)
      }

};

const putCart = async (request, response, next) => {
      try {
            const cart = await Cart.update(request.body,
                  { where: { id: request.params.id } });
            response.status(200).json({ message: cart ? "Updated Successfully" : "Updation Failed" }).end();
      } catch (error) {
            next(error);
      }

};



module.exports = {
      getCart,
      getCartById,
      setCart,
      putCart
};