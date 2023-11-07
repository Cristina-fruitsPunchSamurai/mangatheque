const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../database');

// On peut destructurer {Model } de sequelize
class Bd extends Sequelize.Model{}
//méthode  statique  du Core modèle. La classe BD hérite des méthodes d'instance fournis par Sequelize
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
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.TEXT,
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