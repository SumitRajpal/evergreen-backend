const { Category } = require("../../models/category");
const { Inventory, Products, Offer, Price } = require("../../models/products");
const { EvergreenTable, TABLE_ASSOCIATION } = require("../../utils/constants");
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
const getCategory = async (request, response, next) => {
      try {
            const offer = await Category.findAndCountAll({
                  where: request.body,
            });
            response.status(200).json(offer).end();
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
const getCategoryById = async (request, response, next) => {
      const id = request?.params?.id;
      try {
            const price = await Category.findByPk(id, {   
            });
            response.status(200).json(price).end();
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
const setCategory = async (request, response, next) => {
      try {
            const category = await Category.bulkCreate(request.body)
            response.status(200).json(category).end();
      } catch (error) {
            next(error)
      }

};

const putCategory = async (request, response, next) => {
      try {
            const offer = await Category.update(request.body,
                  { where: { category_id: request.params.id } },
            );
            response.status(200).json({ message: "Updated Successfully" }).end();
      } catch (error) {
            next(error);
      }

};



module.exports = {
      getCategory,
      getCategoryById,
      setCategory,
      putCategory
};