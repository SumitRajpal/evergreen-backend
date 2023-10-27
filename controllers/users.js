const { Users, User_Details, User_Address } = require("../models/users");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");
const jwt = require("jsonwebtoken");
const { PERMISSIONS } = require("./auth/permission");
const crypto = require("crypto");
require("dotenv").config();

const { SECRET_KEY, SECRET_IV, ECNRYPTION_METHOD } = process.env;

const key = crypto
  .createHash("sha512")
  .update(SECRET_KEY)
  .digest("hex")
  .substring(0, 32);
const encryptionIV = crypto
  .createHash("sha512")
  .update(SECRET_IV)
  .digest("hex")
  .substring(0, 16);
function encryptData(data) {
  const cipher = crypto.createCipheriv(ECNRYPTION_METHOD, key, encryptionIV);
  return Buffer.from(
    cipher.update(data, "utf8", "hex") + cipher.final("hex")
  ).toString("base64");
}
function decryptData(encryptedData) {
  const buffer = Buffer.from(encryptedData, "base64");
  const decipher = crypto.createDecipheriv(
    ECNRYPTION_METHOD,
    key,
    encryptionIV
  );
  return (
    decipher.update(buff.toString("utf8"), "hex", "utf8") +
    decipher.final("utf8")
  );
}
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
const getUsers = async (request, response, next) => {
  try {
    const customers = await Users.findAndCountAll({
      where: request.query,
      limit: 20,
      offset: 0,
      include: [
        {
          model: User_Details,
          as: "user_details",
          attributes: { exclude: "user_id" },
        },
        {
          model: User_Address,
          as: "user_address",
          attributes: { exclude: "user_id" },
        },
      ],
    });

    response
      .status(200)
      .json({ key: encryptData(Buffer.from(JSON.stringify(customers))) })
      .end();
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
const getUsersById = async (request, response, next) => {
  const id = request.params.id;
  try {
    const customers = await Users.findByPk(id, {
      include: {
        model: User_Details,
        as: "user_details",
        attributes: { exclude: "user_id" },
      },
    });
    response.status(200).json(customers).end();
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
const setUsers = async (request, response, next) => {
  try {
    const customers = await Users.create(request.body, {
      include: [
        {
          model: User_Details,
          as: "user_details",
        },
      ],
    });
    response.status(200).json(customers).end();
  } catch (error) {
    next(error);
  }
};

const putUsers = async (request, response, next) => {
  try {
    const transaction = await sequelize.transaction();
    const customer = await Users.update(
      request.body,
      { where: { id: request.params.id } },
      { transaction }
    );

    const user_details = await User_Details.update(
      request.body.user_details,
      { where: { user_id: request.params.id } },
      { transaction }
    );

    await transaction.commit();
    response.status(200).json({ message: "Updated Successfully" }).end();
  } catch (error) {
    next(error);
    if (transaction) {
      await transaction.rollback();
    }
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
const signIn = async (request, response, next) => {
  try {
    const awtToken = await jwt.sign(request.body, "mysecret", {
      expiresIn: "30d",
    });
    const [customers, created] = await Users.findOrCreate({
      where: request.body,
      defaults: {
        user_details: {
          referral_id: String(request.body.phone)
            .substring(0, 4)
            .concat(Math.random().toString(36).substring(2, 7).toUpperCase()),
        },
      },
      include: [
        {
          model: User_Details,
          as: "user_details",
        },
        {
          model: User_Address,
          as: "user_address",
        },
      ],
    });
    customers.dataValues.accessToken = awtToken;
    customers.dataValues.roles_key =
      PERMISSIONS[customers.dataValues.user_role];
    response.status(200).json(customers).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUsersById,
  setUsers,
  putUsers,
  signIn,
};
