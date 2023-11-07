//require('dotenv').config();
const { Sequelize } = require('sequelize');
/**
 * * Cette fonction va retourner une instance de sequelize qui permettra aux modèles sequelize de se connecter à la BDD
 *  */
// const Sequelize = require('sequelize');

//On commence par instancier sequelize
const sequelize = new Sequelize(process.env.PG_URL,{
    //le type de la base de données qu'on va utiliser, expliquer le dialect su r.env
    dialect: process.env.DIALECT,
    host : 'localhost',
    define: {
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    },
    logging: false, // pour disable le console.log de toutes les requetes, on evite de polluer le terminal
});


module.exports = sequelize;