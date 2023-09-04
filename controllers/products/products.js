const { Op } = require("sequelize");
const { Products, Offer, Price, Stale, Inventory } = require("../../models/products");
const { Users } = require("../../models/users");
const { EvergreenTable, TABLE_ASSOCIATION } = require("../../utils/constants");
const sequelize = require("../../utils/database");
const { getPagination, getPagingData } = require("../../utils/pagination");
const { Category } = require("../../models/category");
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
  const { page, size } = request.query;
  const { limit, offset } = getPagination(page, size);

  try {
    const products = await Products.findAndCountAll({
      where: {
        tags: {
          [Op.contains]: request.query.filter?.tags ? [request.query.filter.tags] : []
        }
      },
      limit,
      offset,
      include: [{ model: Offer, as: TABLE_ASSOCIATION.product_offer,where:{active:true}, attributes: { exclude: ["product_id","start_at","end_at","active"] } },
      { model: Price, as: "price", required:true, where:{active:true}, attributes: { exclude: ["product_id","start_at","end_at","active"] } },
      { model: Inventory, as: TABLE_ASSOCIATION.product_inventory, required:true, attributes: { exclude: "product_id" } },
      { model: Category, as: "product_category" }
      ],
      order: [[Price, 'start_at', 'DESC']]
    });
    const productResponse = getPagingData(products, page, limit);
    response.status(200).json(productResponse).end();
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
const setProducts = async (request, response, next) => {
  if (Array.isArray(request.body)) {
    try {
      const products = await Products.bulkCreate(request.body)
      response.status(200).json(products).end();
    } catch (error) {
      next(error)
    }
  } else {
    next({ status: 400, message: "Request body should be an array" })
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