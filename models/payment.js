const { DataTypes } = require("sequelize");
const { EvergreenTable, STATUS, PRODUCT_CATEGORY, TRANSACTION_TYPE, PAYMENT_MODE } = require("../utils/constants");
const sequelize = require("../utils/database");

const Payment = sequelize.define(EvergreenTable.payment, {
      payment_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      type: {
            type: DataTypes.ENUM,
            values: TRANSACTION_TYPE,
            allowNull: false
      },
      mode: {
            type: DataTypes.ENUM,
            values: PAYMENT_MODE,
            allowNull: false
      },
      status: {
            type: DataTypes.ENUM,
            values: STATUS,
            allowNull: false
      },
      amount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      payment_date: {
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

module.exports = { Payment }