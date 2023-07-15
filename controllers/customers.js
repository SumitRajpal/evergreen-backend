const { UUIDV4 } = require("sequelize");
const { Customers, Customer_Details } = require("../models/customers");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");
/**
 * @swagger
 * /customers:
 *   get:
 *     tags:
 *       - All Customers
 *     description: Returns all customers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of customers
 *         schema:
 *           $ref: '#/definitions/Customers'
 */
const getCustomer = async (request, response, next) => {
  try {
    const customers = await Customers.findAndCountAll({
      where: request.body,
      limit: 20,
      offset: 0,
      include: { model: Customer_Details, as: "customer_details", attributes: { exclude: "customer_id" } },
    });
    response.status(200).json(customers).end();
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
 *         description: Customers's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Customer Details
 *         schema:
 *           $ref: '#/definitions/Customer'
 */
const getCustomerById = async (request, response, next) => {
  const id = request.params.id;
  try {
    const customers = await Customers.findByPk(id, {
      include: {
        model: Customer_Details,
        as: "customer_details", attributes: { exclude: "customer_id" }
      },
    });
    response.status(200).json(customers).end();
  } catch (error) {
    next(error);
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
const setCustomer = async (request, response, next) => {
  try {
    const customers = await Customers.create(request.body,
      {
        include: [{
          model: Customer_Details,
          as: "customer_details"
        }]
      })
    response.status(200).json(customers).end();
  } catch (error) {
    next(error)
  }

};


const putCustomer = async (request, response, next) => {
  try {
    const transaction = await sequelize.transaction();
    const customer = await Customers.update(request.body,
      { where: { id: request.params.id } },
      { transaction });

    const customer_details = await Customer_Details.update(request.body.customer_details,
      { where: { customer_id: request.params.id } },
      { transaction });

    await transaction.commit();
    response.status(200).json({ message: "Updated Successfully" }).end();
  } catch (error) {
    next(error);
    if (transaction) {
      await transaction.rollback();
    }
  }

};



module.exports = {
  getCustomer,
  getCustomerById,
  setCustomer,
  putCustomer
};