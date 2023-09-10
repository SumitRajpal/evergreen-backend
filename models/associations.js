const { User_Details, Users, Vendors, Employees, User_Address } = require('./users');
const { EvergreenTable, TABLE_ASSOCIATION } = require('../utils/constants');
const { Products, Inventory, Price, Offer, Stale } = require('./products');
const { Cart_Details } = require('./cart');
const { Invoice } = require('./invoice');
const { Payment } = require('./payment');
const { Subscription } = require('./subscription');
const { Category } = require('./category');




/**
 * @association products->category
 */
Products.hasOne(Category, {
      foreignKey: "category_id", sourceKey: "category_id",
      as: TABLE_ASSOCIATION.product_category
});

Category.belongsTo(Products, {
      foreignKey: "category_id",
      as: TABLE_ASSOCIATION.category_product
})

/**
 * @association products->inventory
 */
Products.hasOne(Inventory, {
      foreignKey: "product_id", sourceKey: "product_id",
      as: TABLE_ASSOCIATION.product_inventory
});

Inventory.belongsTo(Products, {
      foreignKey: "product_id",
      as: TABLE_ASSOCIATION.inventory_product
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
      as: TABLE_ASSOCIATION.product_offer
});

Offer.belongsTo(Products, {
      foreignKey: "product_id",
      as: TABLE_ASSOCIATION.offer_product
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
 * @association users->user_details
 */
Users.hasOne(User_Details, {
      foreignKey: "user_id", sourceKey: "id", as: EvergreenTable.user_details
});
User_Details.belongsTo(Users, { foreignKey: "user_id", as: EvergreenTable.users })

Users.hasMany(User_Address, {
      foreignKey: "user_id", sourceKey: "id",
      as: TABLE_ASSOCIATION.user_address
});

User_Address.belongsTo(Users, {
      foreignKey: "user_id",
      as: TABLE_ASSOCIATION.address_user
});

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
 * @association user,userdetails -> cart
 */

Users.hasOne(Cart_Details, {
      foreignKey: "user_id", sourceKey: "id", as: TABLE_ASSOCIATION.user_cart_details
});
/**
 * @association cart->user
 */

Cart_Details.belongsTo(Users, {
      foreignKey: "user_id",
      as: TABLE_ASSOCIATION.cart_details_user
})
/**
 * @association cart->product
 */

Cart_Details.hasOne(Products, {
      foreignKey: "product_id", sourceKey: "product_id",
      as: TABLE_ASSOCIATION.cart_details_product
});

/***
 * @invoices
 */


Users.hasMany(Invoice, {
      foreignKey: "user_id", sourceKey: "id",
      as: TABLE_ASSOCIATION.user_invoice
});

Invoice.hasMany(Cart_Details, {
      foreignKey: "invoice_id", sourceKey: "invoice_id",
      as: TABLE_ASSOCIATION.invoice_cart_details
});

Cart_Details.belongsTo(Invoice, {
      foreignKey: "invoice_id",
      as: TABLE_ASSOCIATION.cart_invoice
})

Cart_Details.hasOne(Price, {
      foreignKey: "price_id", sourceKey: "price_id",
      as: TABLE_ASSOCIATION.cart_details_price
});

Price.belongsTo(Cart_Details, {
      foreignKey: "price_id",
      as: TABLE_ASSOCIATION.price_cart_details
})

Cart_Details.hasOne(Offer, {
      foreignKey: "id", sourceKey: "offer_id",
      as: TABLE_ASSOCIATION.cart_details_offer
});

Offer.belongsTo(Cart_Details, {
      foreignKey: "id",
      as: TABLE_ASSOCIATION.offer_cart_details
})


Invoice.hasOne(User_Address, {
      foreignKey: "address_id",sourceKey: "address_id",
      as: TABLE_ASSOCIATION.invoice_address
});

User_Address.belongsTo(Invoice, {
      foreignKey: "address_id",
      as: TABLE_ASSOCIATION.user_invoice
})

Invoice.belongsTo(Users, {
      foreignKey: "user_id",
      as: TABLE_ASSOCIATION.invoice_user
})



Invoice.hasOne(Payment, {
      foreignKey: "payment_id", sourceKey: "payment_id", as: TABLE_ASSOCIATION.invoice_payment
});

Payment.belongsTo(Invoice, {
      foreignKey: "payment_id",
      as: TABLE_ASSOCIATION.payment_invoice
})



/**
 * @subscription
 */
Users.hasMany(Subscription, {
      foreignKey: "user_id", sourceKey: "id",
      as: TABLE_ASSOCIATION.user_subscription
});

Subscription.belongsTo(Users, {
      foreignKey: "user_id",
      as: TABLE_ASSOCIATION.subscription_user
});

module.exports = {
      Category,
      User_Address,
      Payment,
      Cart_Details,
      Invoice,
      Users,
      User_Details,
      Vendors,
      Employees,
      Products,
      Inventory,
      Price,
      Stale,
      Offer
}
