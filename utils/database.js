const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('evergreen', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  logging: true,
});

module.exports = sequelize;