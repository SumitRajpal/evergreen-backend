const { Customers, Customer_Details } = require("../models/customers");
const { EvergreenTable } = require("../utils/constants");

const getCustomer = async (request, response) => {
  const customers = await Customers.findAll( {
    include: { model: Customer_Details, as:"customer_details", attributes: { exclude: "customer_id" } },
  });
  response.status(200).json(customers).end();
};

const getCustomerById = async (request, response) => {
  const id = request.params.id;
  const customers = await Customers.findByPk(id, {
    include: { model: Customer_Details, attributes: { exclude: "customer_id" } },
  });
  response.status(200).json(customers).end();
};

const setCustomer = async (request, response) => {

  try {
    const customers = await Customers.create({
      fullname: "new me",
      customer_details: { address_1: "7/50" }
    }, { include: [{ model: Customer_Details, as: "customer_details" }] })
    response.status(200).json(customers).end();
  } catch (error) {
    response.status(500).json(error).end();
  }

};

const putCustomer = async (request, response) => {
  const id = request.body;
  try {
    response.status(200).json(id).end();
  } catch {
    response.status(200).json(request).end();
  }
};



module.exports = {
  getCustomer,
  getCustomerById,
  setCustomer,
  putCustomer
};