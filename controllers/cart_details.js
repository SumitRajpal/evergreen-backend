const { Cart_Details } = require("../models/cart");
const { Products, Offer, Price, Inventory } = require("../models/products");
const { EvergreenTable, TABLE_ASSOCIATION } = require("../utils/constants");
const { v4: uuidv4 } = require('uuid');
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
const getCartDetails = async (request, response, next) => {
      try {
            const cart = await Cart_Details.findAll({
                  include: [
                        {
                              model: Products, required: true,
                              as: TABLE_ASSOCIATION.cart_product,
                               include: [{ model: Offer, as: "offer", attributes: { exclude: "product_id" } },
                              { model: Price, as: "price", attributes: { exclude: "product_id" } },
                              { model: Inventory, as: "inventory", attributes: { exclude: "product_id" } },
                              ]
                        }
                  ],
            });
            response.status(200).json(cart).end();
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
const getCartDetailsById = async (request, response, next) => {
      const id = request.params.id;
      try {
            const cart = await Cart_Details.findAll({
                  where: { user_id: id },
                  include: [
                        {
                              model: Products, required: true,
                              as: TABLE_ASSOCIATION.cart_details_product,
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
const setCartDetails = async (request, response, next) => {
         let cartId = uuidv4();
      let requestObject = request.body;
      requestObject?.map((data) => {return {...data,...{cart_id:cartId}}})
      try {
           // const cart = await Cart_Details.create(request.body)
            response.status(200).json(requestObject).end();
      } catch (error) {
            next(error)
      }

};

const putCartDetails = async (request, response, next) => {
      try {
            const cart = await Cart_Details.update(request.body,
                  { where: { id: request.params.id } });
            response.status(200).json({ message: cart ? "Updated Successfully" : "Updation Failed" }).end();
      } catch (error) {
            next(error);
      }

};



module.exports = {
      getCartDetails,
      getCartDetailsById,
      setCartDetails,
      putCartDetails
};