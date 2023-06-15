const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database');

class Bd extends Sequelize.Model{}

Bd.init(
    {
        title: DataTypes.TEXT,
        original_title: DataTypes.TEXT,
        format: DataTypes.STRING,
        status: DataTypes.STRING,
        author: DataTypes.TEXT,
        image: DataTypes.TEXT,
    },
    {
        sequelize,
        tableName: 'bd',
        modelName: 'Bd',
    }
);

module.exports = Bd;