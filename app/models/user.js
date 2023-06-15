const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model { }

User.init(
    {
        username: DataTypes.STRING,
        color: DataTypes.STRING,
    },
    {
        sequelize,
        tableName: 'user',
        modelName: 'User',
    }
);

module.exports = User;