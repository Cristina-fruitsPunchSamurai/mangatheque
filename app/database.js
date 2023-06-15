//require('dotenv').config();
const { Sequelize } = require('sequelize');
// const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.PG_URL,{
    dialect: process.env.DIALECT,
    host : 'localhost',
    define: {
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    },
    logging: false, // pour disable le console.log de toutes les requetes, on evite de polluer le terminal
});


module.exports = sequelize;