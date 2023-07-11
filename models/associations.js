const { DataTypes } = require('sequelize');
const {Customers_Details,Customers} = require('./customers');
Customers.hasOne(Customers_Details,{
      foreignKey:{
            type:DataTypes.UUID,
            allowNull:false
      }
});
Customers_Details.belongsTo(Customers)
module.exports = {
      Customers,Customers_Details
}