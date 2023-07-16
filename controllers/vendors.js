const { Customers, Customer_Details, Vendors } = require("../models/customers");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");
/**
 * @swagger
 * /vendors:
 *   get:
 *     tags:
 *       - All Vendors
 *     description: Returns all VENDORS
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of customers
 *         schema:
 *           $ref: '#/definitions/Customers'
 */
const getVendors = async (request, response, next) => {
  try {
    const vendors = await Customers.findAndCountAll({
      where: request.body,
      limit: 20,
      offset: 0,
      include: { model: Vendors, as: "vendors", attributes: { exclude: "id" } },
    });
    response.status(200).json(vendors).end();
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
const getVendorsById = async (request, response, next) => {
  const id = request.params.id;
  try {
    const vendors = await Customers.findByPk(id, {
      include: {
        model: Vendors,
        as: "vendors", attributes: { exclude: "id" }
      },
    });
    response.status(200).json(vendors).end();
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
const setVendors = async (request, response, next) => {
  try {
    const [vendors,created] = await Vendors.upsert(request.body)
    response.status(200).json(vendors).end();
  } catch (error) {
    next(error)
  }

};


const putVendors = async (request, response, next) => {
  try {
    const vendors = await Vendors.update(request.body,
      { where: { id: request.params.id } });
    response.status(200).json({ message: "Updated Successfully" }).end();
  } catch (error) {
    next(error);
  }

};



module.exports = {
      getVendors,
  getVendorsById,
  setVendors,
  putVendors
};