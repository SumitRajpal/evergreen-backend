const { DataTypes } = require("sequelize");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");

const Cart = sequelize.define(EvergreenTable.cart, {
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
Cart_Details.removeAttribute('id');
module.exports = {Cart,Cart_Details};