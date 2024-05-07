
const Sequelize = require("sequelize");
module.exports = (sequelize) => {
    const Customer = sequelize.define("User", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'FirstName'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'LastName'
        }
    },{
        tableName: 'User', // Specify the table name here
        timestamps: false, // Optional: Disable timestamps (createdAt, updatedAt)
      });
    
    return Customer;
};