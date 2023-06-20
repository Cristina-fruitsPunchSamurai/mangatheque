const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model {}

User.init(
    {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role_id: DataTypes.INTEGER,
    },
    {
        sequelize,
        tableName: 'user',
        modelName: 'User',
    }
);


module.exports = User;
