const { Users, User_Details } = require("../../models/users");
const jwt = require('jsonwebtoken');
const { PERMISSIONS } = require("./permission");

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
const login = async (request, response, next) => {
  try {
    const awtToken = await jwt.sign(request.body, "mysecret", { expiresIn: 200 });
    const [customers, created] = await Users.findOrCreate({
      where: request.body,
      defaults: {
        user_details: {
          referral_id: String(request.body.phone).substring(0, 4).concat(Math.random().toString(36).substring(2, 7).toUpperCase())
        }
      },
      include: [{
        model: User_Details,
        as: "user_details"
      }]
    });
    customers.dataValues.accessToken = awtToken
    customers.dataValues.roles_key = PERMISSIONS[customers.dataValues.user_role]
    response.status(200).json(customers).end();
  
  } catch (error) {
    next(error)
  }
};




module.exports = {
  login
};