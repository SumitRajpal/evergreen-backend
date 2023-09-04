const { DataTypes } = require("sequelize");
const {  EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");

const Category = sequelize.define(EvergreenTable.category, {
      category_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      name: { type: DataTypes.STRING, allowNull: false, },
      image: { type: DataTypes.STRING, defaultValue: null },
      active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
      }
}, {
      timestamps: false,
      freezeTableName: true
});


module.exports = { Category };

