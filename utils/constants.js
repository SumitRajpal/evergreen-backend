
const EvergreenTable = {
      users: "users", user_details: "user_details",
      vendors: "vendors", employees: "employees",
      products: 'products', inventory: 'inventory',
      cart:'cart',
      price: 'price', offer: 'offer', stale: 'stale'
}
const TABLE_ASSOCIATION =  {
  cart_product:"cart_product" ,
  cart_user:'cart_user' ,
  user_cart:'user_cart'  
}
const STATUS = ['ORDERED', 'CANCELLED', 'RECEIVED',
      'ACCEPTED', 'DELIVERED', 'PENDING',
      'RETURNED', 'COMING', 'REFUNDED', 'PACKED',
      'TRANSFERRED', 'INITIATED'];
const CART_TYPE = ['PURCHASE', 'SALE', 'RETURN','']
const INVOICE_CATEGORY = ['SALARY', 'RETURNED', 'VENDOR', 'CUSTOMER', 'EXPENSES'];
const PRODUCT_CATEGORY = ['FRUITS', 'VEGETABLES', 'SNACK', 'POWDER', 'MILK'];
module.exports = {
      TABLE_ASSOCIATION,
      EvergreenTable,
      CART_TYPE,
      PRODUCT_CATEGORY,
      INVOICE_CATEGORY,
      STATUS
}