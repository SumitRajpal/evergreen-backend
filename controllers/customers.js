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
const getCustomer = async (request, response,next) => {
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

const getCustomerById = async (request, response,next) => {
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
    response.status(500).json(error).end();
    //next(error);
  }
};

const setCustomer = async (request, response,next) => {
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

const putCustomer = async (request, response,next) => {
  if (request.params.id) {
    try {
      const customers = await Customers.update(request.body,
        { where: { id: request.params.id } },
        {
          include: [{
            model: Customer_Details,
            where: {
              customer_id: request.params.id
            },
            as: "customer_details"
          }]
        })
      response.status(200).json(customers).end();
    } catch (error) {
      next(error);
    }
  } else {
    response.status(400).json(customers).end();
  }
};



module.exports = {
  getCustomer,
  getCustomerById,
  setCustomer,
  putCustomer
};