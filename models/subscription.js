const { DataTypes } = require("sequelize");
const { EvergreenTable, STATUS } = require("../utils/constants");
const sequelize = require("../utils/database");

const Subscription = sequelize.define(EvergreenTable.subscription, {
      subscription_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
      },
      purchase_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      start_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      end_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      note: {
            type: DataTypes.STRING,
            defaultValue: null
      },
      type: {
            type: DataTypes.ENUM,
            values: STATUS,
            allowNull: false
      }
}, {
      timestamps: false,
      freezeTableName: true
});

module.exports = { Subscription }