const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Silu933@#1999',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
