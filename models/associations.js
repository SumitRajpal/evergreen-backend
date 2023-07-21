const { User_Details, Users, Vendors, Employees } = require('./users');
const { EvergreenTable, TABLE_ASSOCIATION } = require('../utils/constants');
const { Products, Inventory, Price, Offer, Stale } = require('./products');
const { Cart, Cart_Details } = require('./cart');

/**
 * @association users->user_details
 */
Users.hasOne(User_Details, {
      foreignKey: "user_id", sourceKey: "id", as: EvergreenTable.user_details
});
User_Details.belongsTo(Users, { foreignKey: "user_id", as: EvergreenTable.users })

/**
 * @association customer->vendors
 */
Users.hasOne(Vendors, {
      foreignKey: "id", sourceKey: "id", as: EvergreenTable.vendors
});
Vendors.belongsTo(Users, { foreignKey: "id", as: EvergreenTable.users })

/**
 * @association customer->employee
 */
Users.hasOne(Employees, {
      foreignKey: "id", sourceKey: "id", as: EvergreenTable.employees
});
Employees.belongsTo(Users, { foreignKey: "id", as: EvergreenTable.users })


/**
 * @association products->inventory
 */
Products.hasOne(Inventory, {
      foreignKey: "product_id", sourceKey: "product_id",
      as: EvergreenTable.inventory
});

Inventory.belongsTo(Products, {
      foreignKey: "product_id",
      as: EvergreenTable.products
})

/**
 * @association products->price
 */
Products.hasMany(Price, {
      foreignKey: "product_id", sourceKey: "product_id",
      as: EvergreenTable.price
});

Price.belongsTo(Products, {
      foreignKey: "product_id",
      as: EvergreenTable.products
})

/**
 * @association products->offer
 */
Products.hasOne(Offer, {
      foreignKey: "product_id", sourceKey: "product_id",
      as: EvergreenTable.offer
});

Offer.belongsTo(Products, {
      foreignKey: "product_id",
      as: EvergreenTable.products
})
/**
 * @association products->stale
 */
Products.hasMany(Stale, {
      foreignKey: "product_id", sourceKey: "product_id",
      as: EvergreenTable.stale
});

Stale.belongsTo(Products, {
      foreignKey: "product_id",
      as: EvergreenTable.products
})

/**
 * @association user,userdetails -> cart
 */
Users.hasOne(Cart, {
      foreignKey: "user_id", sourceKey: "id", as: TABLE_ASSOCIATION.user_cart
});
Users.hasOne(Cart_Details, {
      foreignKey: "user_id", sourceKey: "id", as: TABLE_ASSOCIATION.user_cart_details
});
/**
 * @association cart->user
 */

Cart.belongsTo(Users, {
      foreignKey: "user_id",
      as: TABLE_ASSOCIATION.cart_user
})
Cart_Details.belongsTo(Users, {
      foreignKey: "user_id",
      as: TABLE_ASSOCIATION.cart_details_user
})
/**
 * @association cart->product
 */
Cart.hasMany(Products, {
      foreignKey: "product_id", sourceKey: "product_id",
      as: TABLE_ASSOCIATION.cart_product
});
Cart_Details.hasMany(Products, {
      foreignKey: "product_id", sourceKey: "product_id",
      as: TABLE_ASSOCIATION.cart_product
});
module.exports = {
      Cart_Details,Cart, Users, User_Details, Vendors, Employees, Products, Inventory, Price, Stale, Offer
}
