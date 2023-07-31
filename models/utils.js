
const { DataTypes } = require("sequelize");
const { EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");

const VersionCheck = sequelize.define(EvergreenTable.version, {
      id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      ios: {
            type: DataTypes.SMALLINT,
      },
      android: {
            type: DataTypes.SMALLINT,
      },
      web: {
            type: DataTypes.SMALLINT,
      }
      
}, {
      timestamps: false,
      freezeTableName: true
});
module.exports = {VersionCheck}