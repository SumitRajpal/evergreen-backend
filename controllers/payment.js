

const { Cart_Details } = require("../models/cart");
const { Invoice } = require("../models/invoice");
const { Payment } = require("../models/payment");
const sequelize = require("../utils/database");
const { v4: uuidv4 } = require('uuid');
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
const getPayment = async (request, response, next) => {
      try {
            const payment = await Payment.findAndCountAll({
                  where: request.body,
                  limit: 20,
                  offset: 0
            });
            response.status(200).json(payment).end();
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
const getPaymentById = async (request, response, next) => {
      const id = request.params.id;
      try {
            const payment = await Payment.findByPk(id, {
            });
            response.status(200).json(payment).end();
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
const setPayment = async (request, response, next) => {
      // try {
      //       const payment = await Payment.create(request.body).then;
      //       response.status(200).json(payment).end();
      // } catch (error) {
      //       next(error)
      // }

      const t = await sequelize.transaction();
const {payment,invoice,cart} = request?.body;
      try {
            
            const paymentResponse = await Payment.create(payment,
                  { transaction: t });
                  invoice.payment_id = paymentResponse.dataValues.payment_id
                  const invoiceResponse =  await Invoice.create(invoice, { transaction: t });
                  const invoice_id = invoiceResponse.dataValues.invoice_id;
                  const cartArray = cart.map(value => {return {...value,...{invoice_id:invoice_id}}} )
                  const cartResponse =  await Cart_Details.bulkCreate(cartArray, { transaction: t });
            await t.commit();
            const res = {
                  payment:paymentResponse,
                  invoice:invoiceResponse,
                  cart:cartResponse
            }
            response.status(200).json(res).end();
      } catch (error) {

            // If the execution reaches this line, an error was thrown.
            // We rollback the transaction.
            await t.rollback();

      }

};

const putPayment = async (request, response, next) => {
      try {
            const payment = await Payment.update(request.body,
                  { where: { product_id: request.params.id } },
            );
            response.status(200).json({ message: "Updated Successfully" }).end();
      } catch (error) {
            next(error);
      }

};



module.exports = {
      getPayment,
      getPaymentById,
      setPayment,
      putPayment
};