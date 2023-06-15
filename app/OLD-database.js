//on recupere le client du module postgres
const {Client} = require('pg');

//On definit la connexion à la BDD
const pgClient = new Client('postgresql://mangatheque:mangatheque@localhost/mangatheque');

//On lance la connexion à la BDD
pgClient.connect();

module.exports = pgClient;