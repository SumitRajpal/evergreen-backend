const { DataTypes } = require('sequelize');
const {Customers_Detail,Customers} = require('./customers');
Customers.hasOne(Customers_Detail,{
      foreignKey:"customer_id",sourceKey:"id"
});
Customers_Detail.belongsTo(Customers,{foreignKey: "customer_id"})
module.exports = {
      Customers,Customers_Detail
}