const { User_Details, Users, Vendors, Employees } = require('./users');
const EvergreenTable = require('../utils/constants');

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


module.exports = {
      Users, User_Details
}