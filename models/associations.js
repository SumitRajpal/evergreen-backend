const { DataTypes } = require('sequelize');
const {Customers_Details,Customers} = require('./customers');
Customers.hasOne(Customers_Details,{
      foreignKey:"customer_id",sourceKey:"id"
});
Customers_Details.belongsTo(Customers,{foreignKey: "customer_id",})
module.exports = {
      Customers,Customers_Details
}