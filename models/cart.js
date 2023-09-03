const { DataTypes } = require("sequelize");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");

const Cart = sequelize.define(EvergreenTable.cart, {
      
      id:{
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true
      },
      cart_id: {
            type: DataTypes.UUID,
            allowNull: false,
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
      quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      }
}, {
      timestamps: false,
      freezeTableName: true,
      underscored:true
});

const Cart_Details = sequelize.define(EvergreenTable.cart_details, {
      
      id:{
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
            unique:true
      },
      cart_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
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
      price: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      final_price: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      total_discount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      total_weight: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      }
}, {
      timestamps: true,
      freezeTableName: true,
      underscored:true
});
module.exports = {Cart,Cart_Details};