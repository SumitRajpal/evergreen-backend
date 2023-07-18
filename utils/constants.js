
const EvergreenTable = {
      users: "users", user_details: "user_details",
      vendors: "vendors", employees: "employees",
      products:'products',inventory:'inventory',
      price:'price',offer:'offer',stale:'stale'
}
const STATUS = ['ORDERED', 'CANCELLED', 'RECEIVED',
      'ACCEPTED', 'DELIVERED', 'PENDING',
      'RETURNED', 'COMING', 'REFUNDED',
      'TRANSFERRED', 'INITIATED'];
const INVOICE_CATEGORY = ['SALARY', 'RETURNED', 'VENDOR', 'CUSTOMER', 'EXPENSES'];
const PRODUCT_CATEGORY = ['FRUITS', 'VEGETABLES', 'SNACK', 'POWDER', 'MILK'];
module.exports = { EvergreenTable, PRODUCT_CATEGORY, INVOICE_CATEGORY, STATUS }