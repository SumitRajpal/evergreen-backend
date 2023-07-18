const { DataTypes } = require("sequelize");
const { PRODUCT_CATEGORY, EvergreenTable } = require("../utils/constants");
const sequelize = require("../utils/database");

const Products = sequelize.define(EvergreenTable.products, {
      product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      name: { type: DataTypes.STRING },
      category: {
            type: DataTypes.ENUM,
            values: PRODUCT_CATEGORY
      },
      tags: { type: DataTypes.JSON,defaultValue: [] },
      picture: { type: DataTypes.STRING },
      active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
      }
}, {
      timestamps: false,
      freezeTableName: true
});
const Inventory = sequelize.define(EvergreenTable.inventory, {
      product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      updated_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
}, {
      timestamps: false,
      freezeTableName: true
});
const Price = sequelize.define(EvergreenTable.price, {
      product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      price: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      start_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      end_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
}, {
      timestamps: false,
      freezeTableName: true
});
const Offer = sequelize.define(EvergreenTable.offer, {
      product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      discount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      start_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      end_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
}, {
      timestamps: false,
      freezeTableName: true
});
const Stale = sequelize.define(EvergreenTable.stale, {
      product_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
      },
      price: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },
      discount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
      },

      stale_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
}, {
      timestamps: false,
      freezeTableName: true
});
module.exports = { Products, Inventory,Price,Offer,Stale };
