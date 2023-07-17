const { Users, User_Details, Vendors } = require("../models/users");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");
/**
 * @swagger
 * /vendors:
 *   get:
 *     tags:
 *       - All Vendors
 *     description: Returns all Vendors
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Vendor
 *         schema:
 *           $ref: '#/definitions/Vendor'
 */
const getVendors = async (request, response, next) => {
  try {
    const vendors = await Users.findAndCountAll({
      where: request.body,
      limit: 20,
      offset: 0,
      include: [{ model: Vendors, required:true,as: "vendors", attributes: { exclude: "id" } },
      { model: User_Details, as: "user_details", attributes: { exclude: "user_id" } }],
    });
    response.status(200).json(vendors).end();
  } catch (error) {
    next(error);
  }
};

/**
 * @swagger
 * /vendors/{id}:
 *   get:
 *     tags:
 *       - Vendors by Id
 *     description: Returns a single Vendor
 *     produces:
 *       - application/json
 *     parameters:
 *       - id: id
 *         description: Vendor's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Vendor Details
 *         schema:
 *           $ref: '#/definitions/Vendor'
 */
const getVendorsById = async (request, response, next) => {
  const id = request.params.id;
  try {
    const vendors = await Users.findByPk(id, {
      include: [{
        model: Vendors,
        as: "vendors", required:true,attributes: { exclude: "id" }
      },{ model: User_Details, as: "user_details", attributes: { exclude: "user_id" } }],
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
 *       - Create Vendors
 *     description: Creates a new Vendor
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Vendors
 *         description: Vendors object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Vendors'
 *     responses:
 *       200:
 *         description: Successfully created
 */
const setVendors = async (request, response, next) => {
  try {
    const vendors = await Vendors.create(request.body)
    response.status(200).json(vendors).end();
  } catch (error) {
    next(error)
  }

};

const putVendors = async (request, response, next) => {
  try {
    const vendors = await Vendors.update(request.body,
      { where: { id: request.params.id } });
    response.status(200).json({ message: vendors ? "Updated Successfully" : "Updation Failed" }).end();
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