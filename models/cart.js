const { DataTypes } = require("sequelize");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");

const Cart = sequelize.define(EvergreenTable.cart, {
      cart_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      price: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      final_price: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      transaction:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
      }

}, {
      timestamps: true,
      freezeTableName: true,
      underscored:true
});
module.exports = {Cart};