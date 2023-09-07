const { DataTypes } = require("sequelize");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");

const Cart_Details = sequelize.define(EvergreenTable.cart_details, {
      
      id:{
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
            unique:true
      },
      invoice_id: {
            type: DataTypes.UUID,
            allowNull: false,
      },
      product_id: {
            type: DataTypes.UUID,
            allowNull: false,
      },
      offer_id: {
            type: DataTypes.UUID,
            allowNull: true,
      },
      user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      price_id: {
            type: DataTypes.UUID,
            allowNull: false,
      },
      weight: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      }
}, {
      timestamps: true,
      freezeTableName: true,
      underscored:true
});
module.exports = {Cart_Details};