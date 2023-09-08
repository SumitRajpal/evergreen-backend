const { DataTypes } = require("sequelize");
const { EvergreenTable, STATUS, PRODUCT_CATEGORY, INVOICE_CATEGORY } = require("../utils/constants");
const sequelize = require("../utils/database");

const Invoice = sequelize.define(EvergreenTable.invoice, {
      invoice_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      invoice_category: {
            type: DataTypes.ENUM,
            values: INVOICE_CATEGORY,
            allowNull: false
      },
      invoice_date: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      user_id: {
            type: DataTypes.UUID,
            allowNull: false,
      },
      address_id: {
            type: DataTypes.UUID,
            allowNull: false,
      },
      grand_total: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      vehicle_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      status: {
            type: DataTypes.ENUM,
            values: STATUS,
            allowNull: false
      },
      employee_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      payment_id: {
            type: DataTypes.UUID,
            allowNull: false
      },
      delivery_date: {
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