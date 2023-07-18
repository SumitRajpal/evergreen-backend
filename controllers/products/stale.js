const { Inventory, Products, Offer, Stale } = require("../../models/products");
const { EvergreenTable } = require("../../utils/constants");
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
const getStale = async (request, response, next) => {
      try {
            const stale = await Products.findAndCountAll({
                  where: request.body,
                  limit: 20,
                  offset: 0,
                  include: { model: Stale, as: 'stale', attributes: { exclude: "user_id" } },
            });
            response.status(200).json(stale).end();
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
const getStaleById = async (request, response, next) => {
      const id = request.params.id;
      try {
            const stale = await Products.findByPk(id, {
                  include: {
                        model: Stale,
                        as: "stale"
                  }
            });
            response.status(200).json(stale).end();
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
const setStale = async (request, response, next) => {
      try {
            const stale = await Stale.create(request.body)
            response.status(200).json(stale).end();
      } catch (error) {
            next(error)
      }

};

const putStale = async (request, response, next) => {
      try {
            const stale = await Stale.update(request.body,
                  { where: { product_id: request.params.id } },
            );
            response.status(200).json({ message: "Updated Successfully" }).end();
      } catch (error) {
            next(error);
      }

};



module.exports = {
      getStale,
      getStaleById,
      setStale,
      putStale
};