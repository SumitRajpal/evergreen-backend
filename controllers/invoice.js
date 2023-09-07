
const { Cart_Details } = require("../models/cart");
const { Invoice } = require("../models/invoice");
const { Payment } = require("../models/payment");
const { Products, Offer, Price } = require("../models/products");
const { TABLE_ASSOCIATION } = require("../utils/constants");
const sequelize = require("../utils/database");
const { getPagingData, getPagination } = require("../utils/pagination");

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
const getInvoice = async (request, response, next) => {
      const { page, size } = request.query;
      const { limit, offset } = getPagination(page, size);

      try {
            const invoice = await Invoice.findAndCountAll({
                  where: {
                  },
                  limit,
                  offset,
                  include: [{
                        model: Cart_Details, limit: 5, as: TABLE_ASSOCIATION.invoice_cart_details,
                        include: [{ model: Products, as: TABLE_ASSOCIATION.cart_details_product },
                        ]
                  }],

            });
            const productResponse = getPagingData(invoice, page, limit);
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
const getInvoiceById = async (request, response, next) => {
      const id = request.params.id;
      try {
            const invoice = await Invoice.findByPk(id, {
                  include: [{
                        model: Cart_Details, limit: 5, as: TABLE_ASSOCIATION.invoice_cart_details,
                        include: [{ model: Products, as: TABLE_ASSOCIATION.cart_details_product },
                              { model: Offer, as: TABLE_ASSOCIATION.cart_details_offer },
                  { model: Price, as: TABLE_ASSOCIATION.cart_details_price }
                        ]
                  },{ model: Payment, as: TABLE_ASSOCIATION.invoice_payment },
                  ]
            });
            response.status(200).json(invoice).end();
      } catch (error) {
            next(error)
      }
};



module.exports = {
      getInvoice,
      getInvoiceById
};