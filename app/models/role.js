const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Role extends Sequelize.Model { }

Role.init(
    {
        name: DataTypes.STRING,

    },
    {
        sequelize,
        tableName: 'role',
        modelName: 'Role',
    }
);


module.exports = Role;
