const { Subscription } = require("../models/subscription");
const { Users } = require("../models/users");
const { EvergreenTable, TABLE_ASSOCIATION } = require("../utils/constants");

/**
 * @swagger
 * /employees:
 *   get:
 *     tags:
 *       - All Employees List
 *     description: Returns all Employees
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Employees
 *         schema:
 *           $ref: '#/definitions/Employees'
 */
const getSubscription = async (request, response, next) => {
      try {
            const employees = await Subscription.findAndCountAll({
                  where: request.body,
                  limit: 20,
                  offset: 0,
                  include: [
                        { model: Users, required: true, as: TABLE_ASSOCIATION.subscription_user, attributes: { exclude: "id" } },
                  ],
            });
            response.status(200).json(employees).end();
      } catch (error) {
            next(error);
      }
};

/**
 * @swagger
 * /employees/{id}:
 *   get:
 *     tags:
 *       - Employees by Id
 *     description: Returns a single Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - id: id
 *         description: Employees's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Employee Details
 *         schema:
 *           $ref: '#/definitions/Employees'
 */
const getSubscriptionById = async (request, response, next) => {
      const id = request.params.id;
      try {
            const subscription = await Subscription.findByPk(id, {
                  include: {
                        model: Users,
                        as: TABLE_ASSOCIATION.subscription_user, required: true, attributes: { exclude: "user_id" }
                  },
            });
            response.status(200).json(subscription).end();
      } catch (error) {
            next(error);
      }
};

/**
 * @swagger
 * /employees:
 *   post:
 *     tags:
 *       - Create Employee
 *     description: Creates a new Employee
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: employee
 *         description: Employee object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Employee'
 *     responses:
 *       200:
 *         description: Successfully created
 */
const setSubscription = async (request, response, next) => {
      try {
            const subscription = await Subscription
                  .create(request.body)
            response.status(200).json(subscription).end();
      } catch (error) {
            next(error)
      }

};

const putSubscription = async (request, response, next) => {
      try {
            const subscription = await Subscription.update(request.body,
                  { where: { id: request.params.id } });
            response.status(200).json({ message: subscription ? "Updated Successfully" : "Updation Failed" }).end();
      } catch (error) {
            next(error);
      }

};



module.exports = {
      getSubscription,
      getSubscriptionById,
      setSubscription,
      putSubscription
};