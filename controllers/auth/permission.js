const PERMISSIONS = {
  "VENDOR": [
    'product-read',
    'invoice-read',
    'payment-read'],
  "SUPER_ADMIN": [
    'user-read', 'user-create', 'user-update', 'user-delete',
    'vendor-read', 'vendor-create', 'vendor-update', 'vendor-delete',
    'employee-read', 'employee-create', 'employee-update', 'employee-delete',
    'product-read', 'product-create', 'product-update', 'product-delete',
    'cart-read', 'cart-create', 'cart-update', 'cart-delete',
    'invoice-read', 'invoice-create', 'invoice-update', 'invoice-delete',
    'subscription-read', 'subscription-create', 'subscription-update', 'subscription-delete',
    'payment-read', 'payment-create', 'payment-update', 'payment-delete'],
  "MANAGER": ['user-read', 'user-create', 'user-update',
    'vendor-read', 'vendor-create', 'vendor-update',
    'employee-read', 'employee-create', 'employee-update',
    'product-read', 'product-create', 'product-update',
    'cart-read', 'cart-create', 'cart-update', 'cart-delete',
    'invoice-read', 'invoice-create', 'invoice-update', 'invoice-delete',
    'subscription-read', 'subscription-create', 'subscription-update', 'subscription-delete',
    'payment-read', 'payment-create', 'payment-update'],
  "EMPLOYEE": [
    'user-read',
    'product-read',
    'cart-read', 'cart-create', 'cart-update', 'cart-delete',
    'invoice-read', 'invoice-create', 'invoice-update', 'invoice-delete',
    'subscription-read', 'subscription-create', 'subscription-update', 'subscription-delete',
    'payment-read', 'payment-create', 'payment-update', 'payment-delete'
  ],
  "USER": ['user-read', 'user-create', 'user-update', 'user-delete',
    'vendor-read', 'vendor-create', 'vendor-update', 'vendor-delete',
    'employee-read', 'employee-create', 'employee-update', 'employee-delete',
    'product-read', 'product-create', 'product-update', 'product-delete',
    'cart-read', 'cart-create', 'cart-update', 'cart-delete',
    'invoice-read', 'invoice-create', 'invoice-update', 'invoice-delete',
    'subscription-read', 'subscription-create', 'subscription-update', 'subscription-delete',
    'payment-read', 'payment-create', 'payment-update', 'payment-delete']
}
const getPermission = async (request, response, next) => {
  try {
    response.status(200).json(PERMISSIONS).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPermission, PERMISSIONS
}