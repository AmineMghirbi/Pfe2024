const RegisterUser = require("./daos/user.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("PfeDb", "root", "Mavie@1995", {
  host: "localhost",
  port: 3306,
  dialect: 'mariadb',
  define: {
    timestamps: false
  }
});

const db = {};
db.connection = sequelize;
db.user = RegisterUser(sequelize);
module.exports = db;