const { Users, User_Details, User_Address } = require("../models/users");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");
const jwt = require('jsonwebtoken');
const { PERMISSIONS } = require("./auth/permission");

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
const getAddress = async (request, response, next) => {
  try {
    const customers = await User_Address.findAndCountAll({
      where: request.body,
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
const getAddressById = async (request, response, next) => {
  const id = request.params.id;
  try {
    const customers = await User_Address.findAll({
      where: { user_id: id },
    });
    response.status(200).json(customers).end();
  } catch (error) {
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
const setAddress = async (request, response, next) => {
  try {
    const customers = await User_Address.create(request.body)
    response.status(200).json(customers).end();
  } catch (error) {
    next(error)
  }

};


const putAddress = async (request, response, next) => {
  try {
    const customer = await User_Address.update(request.body,
      { where: { address_id: request.params.id } });
    response.status(200).json({ message: "Updated Successfully" }).end();
  } catch (error) {
    next(error);
  }

};


module.exports = {
  getAddress,
  getAddressById,
  setAddress,
  putAddress
};