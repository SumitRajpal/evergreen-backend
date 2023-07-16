const { DataTypes } = require('sequelize');
const { Customer_Details, Customers, Vendors, Employees } = require('./customers');
const EvergreenTable = require('../utils/constants');

/**
 * @association customer->customer details
 */
Customers.hasOne(Customer_Details, {
      foreignKey: "customer_id", sourceKey: "id", as: EvergreenTable.customer_details
});
Customer_Details.belongsTo(Customers, { foreignKey: "customer_id", as: EvergreenTable.customers })

/**
 * @association customer->vendors
 */
Customers.hasOne(Vendors, {
      foreignKey: "id", sourceKey: "id", as: EvergreenTable.vendors
});
Vendors.belongsTo(Customers, { foreignKey: "id", as: EvergreenTable.customers })

/**
 * @association customer->employee
 */
Customers.hasOne(Employees, {
      foreignKey: "id", sourceKey: "id", as: EvergreenTable.employees
});
Employees.belongsTo(Customers, { foreignKey: "id", as: EvergreenTable.customers })


module.exports = {
      Customers, Customer_Details
}