const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Tag extends Sequelize.Model { }

Tag.init(
    {
        name: DataTypes.STRING,
        color: DataTypes.STRING,
    },
    {
        sequelize,
        tableName: 'tag',
        modelName: 'Tag',
    }
);

module.exports = Tag;