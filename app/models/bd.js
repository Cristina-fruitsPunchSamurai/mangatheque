const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database');

class Bd extends Sequelize.Model{}

Bd.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        original_title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        format: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'bd',
        modelName: 'Bd',
    }
);

module.exports = Bd;