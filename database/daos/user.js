
const Sequelize = require("sequelize");
module.exports = (sequelize) => {
    const User = sequelize.define("User", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            field: 'id_user'
        },
        username: {
            type: Sequelize.STRING,
            field: 'username'
        }
    },{
        tableName: 'users', // Specify the table name here
        timestamps: false, // Optional: Disable timestamps (createdAt, updatedAt)
      });
    
    return User;
};