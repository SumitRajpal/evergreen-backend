const sequelize = require('../utils/database')
const { DataTypes } = require('sequelize');

const Customers = sequelize.define('customers', {
      id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      fullname: {
            type: DataTypes.STRING
      }
      , phone: {
            type: DataTypes.TEXT
      },
      email: {
            type: DataTypes.TEXT
      },
      active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
      }
}, {
      timestamps:false,
      tableName: 'customers'
});

const Customers_Detail = sequelize.define('customers_detail', {
      customer_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
      },
      pincode: {
            type: DataTypes.REAL(6)
      }
      , member: {
            type: DataTypes.SMALLINT
      },
      children: {
            type: DataTypes.SMALLINT,
      },
      address_1: {
            type: DataTypes.TEXT
      },
      address_2: {
            type: DataTypes.TEXT
      },
      location: {
            type: DataTypes.TEXT
      },
      government_id: {
            type: DataTypes.TEXT
      },
      referral_id: {
            type: DataTypes.TEXT,
            unique: true
      }
}, {
      timestamps:false,
      tableName: 'customers_detail'
});

module.exports = { Customers, Customers_Detail };

