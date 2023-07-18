const { Products } = require("../../models/products");
const { Users } = require("../../models/users");
const { EvergreenTable } = require("../../utils/constants");
const sequelize = require("../../utils/database");
/**
 * @swagger
 * /customers:
 *   get:
 *     tags:
 *       - All Users
 *     description: Returns all customers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of customers
 *         schema:
 *           $ref: '#/definitions/Users'
 */
const getProducts = async (request, response, next) => {
  try {
    const products = await Products.findAndCountAll({
      where: request.body,
      limit: 20,
      offset: 0
    });
    response.status(200).json(products).end();
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     tags:
 *       - Customer by Id
 *     description: Returns a single customer
 *     produces:
 *       - application/json
 *     parameters:
 *       - id: id
 *         description: Users's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Customer Details
 *         schema:
 *           $ref: '#/definitions/Customer'
 */
const getProductsById = async (request, response, next) => {
  const id = request.params.id;
  try {
    const products = await Products.findByPk(id);
    response.status(200).json(products).end();
  } catch(error) {
    next(error)
  }
};

/**
 * @swagger
 * /customers:
 *   post:
 *     tags:
 *       - Create Customer
 *     description: Creates a new Customer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: customer
 *         description: Customer object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Customer'
 *     responses:
 *       200:
 *         description: Successfully created
 */
const setProducts = async (request, response, next) => {
  try {
    const products = await Products.create(request.body)
    response.status(200).json(products).end();
  } catch (error) {
    next(error)
  }

};


const putProducts = async (request, response, next) => {
  try {
    const products = await Products.update(request.body,
      { where: { id: request.params.id } });
    response.status(200).json({ message: "Updated Successfully" }).end();
  } catch (error) {
    next(error);
  }

};



module.exports = {
  getProducts,
  getProductsById,
  setProducts,
  putProducts
};