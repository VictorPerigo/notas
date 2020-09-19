// config
//Banco de dados
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postagens', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
