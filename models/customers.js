const sequelize = require('../utils/database')
const { DataTypes } = require('sequelize');

const Customers = sequelize.define('Customers', {
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
            type: DataTypes.BOOLEAN
      }
}, {
      tableName: 'customers'
});

const Customers_Details = sequelize.define('customers_details', {
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
      tableName: 'customers_details'
});

module.exports = { Customers, Customers_Details };

