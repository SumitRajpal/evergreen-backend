const { Customers, Customer_Details } = require("../models/customers");
const { EvergreenTable } = require("../utils/constants");

/**
 * @swagger
 * /api/puppies:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
const getCustomer = async (request, response) => {
  const customers = await Customers.findAll( {
    where: request.body ? request.body:{},
    include: { model: Customer_Details, as:"customer_details", attributes: { exclude: "customer_id" } },
  });
  response.status(200).json(customers).end();
};

const getCustomerById = async (request, response) => {
  const id = request.params.id;
  const customers = await Customers.findByPk(id, {
    include: { model: Customer_Details, attributes: { exclude: "customer_id" } },
  });
  response.status(200).json(customers).end();
};

const setCustomer = async (request, response) => {

  try {
    const customers = await Customers.create(request.body, { include: [{ model: Customer_Details, as: "customer_details" }] })
    response.status(200).json(customers).end();
  } catch (error) {
    response.status(500).json(error).end();
  }

};

const putCustomer = async (request, response) => {
  //const id = request.body;
  console.log(request.body)
  // try {
  // //  response.status(200).json(request).end();
  // } catch {
  //   response.status(200).json(request).end();
  // }
};



module.exports = {
  getCustomer,
  getCustomerById,
  setCustomer,
  putCustomer
};