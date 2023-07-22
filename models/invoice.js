const { DataTypes } = require("sequelize");
const { EvergreenTable, STATUS, PRODUCT_CATEGORY } = require("../utils/constants");
const sequelize = require("../utils/database");

const Invoice = sequelize.define(EvergreenTable.invoice, {
      invoice_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      cart_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      vehicle_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      employee_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      invoice_category: {
            type: DataTypes.ENUM,
            values: PRODUCT_CATEGORY,
            allowNull: false
      },
      invoice_status: {
            type: DataTypes.ENUM,
            values: STATUS,
            allowNull: false
      },
      grand_total: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      grand_saving: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      total_quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      delivery_date: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      invoice_date: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      note: {
            type: DataTypes.STRING,
            defaultValue: null
      }
}, {
      timestamps: false,
      freezeTableName: true
});

module.exports = { Invoice }