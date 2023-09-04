
const EvergreenTable = {
      users: "users", user_details: "user_details",
      user_address:"user_address",
      vendors: "vendors", employees: "employees",
      products: 'products', inventory: 'inventory',
      cart: 'cart', cart_details: 'cart_details',
      invoice:'invoice',payment:'payment',
      subscription:'subscription',
      permission:'permission',
      version:'version',
      category:'category',
      price: 'price', offer: 'offer', stale: 'stale'
}
const TABLE_ASSOCIATION = {
      cart_product: "cart_product",
      cart_details_product: "cart_details_product",
      cart_user: 'cart_user',
      user_cart: 'user_cart',
      user_cart_details: 'user_cart_details',
      cart_details_user: 'cart_details_user',
      invoice_cart:'invoice_cart',
      cart_invoice:'cart_invoice',
      user_invoice:'user_invoice',
      invoice_user:'invoice_user',
      payment_user:'payment_user',
      user_payment:'user_payment',
      payment_invoice:'payment_invoice',
      invoice_payment:'invoice_payment',
      user_subscription:'user_subscription',
      subscription_user:'subscription_user',
      user_address:"user_address",
      address_user:"address_user",
      product_category:"product_category",
      category_product:"category_product",
      product_price:"product_price",
      price_product:"price_product",
      product_offer:"product_offer",
      offer_product:"offer_product",
      product_inventory:"product_inventory",
      inventory_product:"inventory_product"
}
const STATUS = ['ORDERED', 'CANCELLED', 'RECEIVED',
      'ACCEPTED', 'DELIVERED', 'PENDING',
      'RETURNED', 'COMING', 'REFUNDED', 'PACKED',
      'TRANSFERRED', 'INITIATED'];
      const TRANSACTION_TYPE = ['DEBIT','CREDIT','FREE'];
      const PAYMENT_MODE = ['CASH','CARD','COIN','UPI','COUPON'];
const CART_CATEGORY = ['PURCHASE', 'SALE', 'RETURN'];
const ROLES_TYPE = ['SUPER_ADMIN', 'MANAGER', 'DRIVER', 'EMPLOYEE', 'USER', 'VENDOR'];
const INVOICE_CATEGORY = ['SALARY', 'VENDOR', 'CUSTOMER', 'EXPENSES','RETURN'];
const PRODUCT_CATEGORY = ['FRUITS', 'VEGETABLES', 'SNACK', 'POWDER', 'MILK'];
module.exports = {
      TABLE_ASSOCIATION,
      EvergreenTable,
      CART_CATEGORY,
      PRODUCT_CATEGORY,
      INVOICE_CATEGORY,
      STATUS,
      ROLES_TYPE,
      TRANSACTION_TYPE,
      PAYMENT_MODE
}