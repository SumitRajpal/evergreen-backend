const { EvergreenTable, ROLES_TYPE } = require('../utils/constants');
const sequelize = require('../utils/database')
const { DataTypes } = require('sequelize');

const Users = sequelize.define(EvergreenTable.users, {
      id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      username: {
            type: DataTypes.STRING,
      }
      , phone: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: {
                  msg: "Phone number already exist"
            },
            validate: {
                  isNumeric: true
            }
      },
      email: {
            type: DataTypes.TEXT,
            allowNull: true,
            unique: {
                  msg: "Email already exist"
            },
            validate: {
                  isEmail: true
            }
      },
      user_role:{
            type: DataTypes.ENUM,
            values: ROLES_TYPE,
            defaultValue:'USER'
      },
      active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
      }
}, {
      timestamps: false,
      freezeTableName: true
});

const User_Details = sequelize.define(EvergreenTable.user_details, {
      user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      pincode: {
            type: DataTypes.REAL,
            validate: {
                  min: 110000,
                  max: 900000
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

const Vendors = sequelize.define(EvergreenTable.vendors, {
      id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
      }
}, {
      timestamps: false,
      freezeTableName: true
});

const Employees = sequelize.define(EvergreenTable.employees, {
      id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
      }
}, {
      timestamps: false,
      freezeTableName: true
});

module.exports = { User_Details, Users, Vendors, Employees };

