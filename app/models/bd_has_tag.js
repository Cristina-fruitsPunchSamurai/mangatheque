const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

class BdHasTag extends Sequelize.Model {}

BdHasTag.init(
    {
        bd_id: DataTypes.INTEGER,
        tag_id: DataTypes.INTEGER,
    },
    {
        sequelize,
        tableName: 'bd_has_tag',
        modelName: 'BdHasTag',
    }
);

module.exports = BdHasTag;