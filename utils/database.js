const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`postgres://sumitrajpal:8eul9InKfBJuvOHEdvD6p7g5ZUrUncB0@dpg-cju3oq15mpss73bj6fd0-a.oregon-postgres.render.com/mandi_d4sh?ssl=true`);
//  const sequelize = new Sequelize('evergreen', 'postgres', '123456', {
//        host: 'localhost',
//        dialect: 'postgres',
//        logging: true,
//      });
module.exports = sequelize;