const { DataTypes } = require('sequelize');
const { Customer_Details, Customers } = require('./customers');
const EvergreenTable = require('../utils/constants');
Customers.hasOne(Customer_Details, {
      foreignKey: "customer_id", sourceKey: "id", as: EvergreenTable.customer_details
});
Customer_Details.belongsTo(Customers, { foreignKey: "customer_id", as: EvergreenTable.customers })
module.exports = {
      Customers, Customer_Details
}