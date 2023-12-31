
const EvergreenTable = {
      users: "users", user_details: "user_details",
      user_address: "user_address",
      vendors: "vendors", employees: "employees",
      products: 'products', inventory: 'inventory',
      cart: 'cart', cart_details: 'cart_details',
      invoice: 'invoice', payment: 'payment',
      subscription: 'subscription',
      permission: 'permission',
      version: 'version',
      category: 'category',
      price: 'price', offer: 'offer', stale: 'stale'
}
const TABLE_ASSOCIATION = {
      cart_details_product: "cart_details_product",
      cart_user: 'cart_user',
      user_cart: 'user_cart',
      user_cart_details: 'user_cart_details',
      cart_details_user: 'cart_details_user',
      invoice_cart_details: 'invoice_cart_details',
      cart_invoice: 'cart_invoice',
      user_invoice: 'user_invoice',
      invoice_user: 'invoice_user',
      payment_user: 'payment_user',
      user_payment: 'user_payment',
      payment_invoice: 'payment_invoice',
      invoice_payment: 'invoice_payment',
      user_subscription: 'user_subscription',
      subscription_user: 'subscription_user',
      user_address: "user_address",
      address_user: "address_user",
      product_category: "product_category",
      category_product: "category_product",
      product_price: "product_price",
      price_product: "price_product",
      product_offer: "product_offer",
      offer_product: "offer_product",
      product_inventory: "product_inventory",
      inventory_product: "inventory_product",
      cart_details_price: "price",
      price_cart_details: "price_cart_details",
      cart_details_offer: "offer",
      offer_cart_details: "offer_cart_details",
      invoice_address: "invoice_address",
      address_invoice: "address_invoice",

}
const STATUS = ['ORDERED', 'CANCELLED', 'RECEIVED',
      'ACCEPTED', 'DELIVERED', 'PENDING',
      'RETURNED', 'COMING', 'REFUNDED', 'PACKED',
      'TRANSFERRED', 'INITIATED', "SUCCESS", 'FAILED', 'REVERSE'];
const TRANSACTION_TYPE = ['DEBIT', 'CREDIT', 'FREE'];
const PAYMENT_MODE = ['CASH', 'CARD', 'COIN', 'UPI', 'COUPON'];
const CART_CATEGORY = ['PURCHASE', 'SALE', 'RETURN'];
const ROLES_TYPE = ['SUPER_ADMIN', 'MANAGER', 'DRIVER', 'EMPLOYEE', 'USER', 'VENDOR'];
const INVOICE_CATEGORY = ['SALARY', 'VENDOR', 'CUSTOMER', 'FREE', 'INTERNAL_EXPENSES', 'USER_RETURN', 'USER_PURCHASE'];
const CATEGORY_OBJECT = { 'VENDOR': 'CREDIT', 'FREE': 'DEBIT', 'USER_RETURN': 'CREDIT', 'USER_PURCHASE': 'DEBIT' };
const PRODUCT_CATEGORY = ['FRUITS', 'VEGETABLES', 'SNACK', 'POWDER', 'MILK'];
module.exports = {
      TABLE_ASSOCIATION,
      EvergreenTable,
      CART_CATEGORY,
      PRODUCT_CATEGORY,
      INVOICE_CATEGORY,
      STATUS,
      ROLES_TYPE,
      CATEGORY_OBJECT,
      TRANSACTION_TYPE,
      PAYMENT_MODE
}