// config
//Banco de dados
const Sequelize = require("../node_modules/sequelize");
const sequelize = new Sequelize("postapp", "root", "Capitu123654789!", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
