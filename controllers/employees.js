const { Users, User_Details, Employees } = require("../models/users");
const { EvergreenTable } = require("../utils/constants");

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
const getEmployees = async (request, response, next) => {
  try {
    const employees = await Users.findAndCountAll({
      where: request.body,
      limit: 20,
      offset: 0,
      include: [{ model: Employees,required:true , as: "employees", attributes: { exclude: "id" }},
      { model: User_Details, as: "user_details", attributes: { exclude: "user_id" } }],
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
const getEmployeeById = async (request, response, next) => {
  const id = request.params.id;
  try {
    const employees = await Users.findByPk(id, {
      include: {
        model: Employees,
        as: "employees",required:true, attributes: { exclude: "id" }
      },
    });
    response.status(200).json(employees).end();
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
const setEmployees = async (request, response, next) => {
  try {
    const employees = await Employees.create(request.body)
    response.status(200).json(employees).end();
  } catch (error) {
    next(error)
  }

};

const putEmployees = async (request, response, next) => {
  try {
    const employees = await Employees.update(request.body,
      { where: { id: request.params.id } });
    response.status(200).json({ message: employees ? "Updated Successfully" : "Updation Failed" }).end();
  } catch (error) {
    next(error);
  }

};



module.exports = {
  getEmployees,
  getEmployeeById,
  setEmployees,
  putEmployees
};