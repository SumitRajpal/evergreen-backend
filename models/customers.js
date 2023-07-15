const EvergreenTable = require('../utils/constants');
const sequelize = require('../utils/database')
const { DataTypes } = require('sequelize');

const Customers = sequelize.define(EvergreenTable.customers, {
      id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      fullname: {
            type: DataTypes.STRING,
            validate:{
                  isAlpha: true
            }
      }
      , phone: {
            type: DataTypes.TEXT,
            unique: true,
            validate:{
                  isNumeric: true
            }
      },
      email: {
            type: DataTypes.TEXT,
            unique: true,
            validate:{
                  isEmail:true
            }
      },
      active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
      }
}, {
      timestamps: false,
      freezeTableName: true
});

const Customer_Details = sequelize.define(EvergreenTable.customer_details, {
      customer_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      pincode: {
            type: DataTypes.REAL,
            validate:{
                  min:110000,
                  max:900000
            }
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
            type: DataTypes.TEXT,
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
      timestamps: false,
      freezeTableName: true
});

module.exports = { Customers, Customer_Details };

