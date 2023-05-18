
const express = require("express");
// pour utiliser notre fichier .env
require('dotenv').config();
// nous demandons à express d'utiliser session AVANT le router
const session = require('express-session');

const router = require('./app/router');
const app = express();

// le port est planqué dans le .env, on le récupère
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }))


app.use(session({
    secret: 'keyboard cat"', // le "secret" qui sert à générer les identifiants de sessions uniques.
    resave: true, // sauvegarde automatique de la session à la fin de la requête
    saveUninitialized: true, // créer une session pour l'internaute dans tous les cas, mais si elle est vide.
    cookie: {
        // des options pour le cookie qui contient l'identifiant de session comme sa durée de vie par exemple.
    }
}));



app.use(router);


app.use((req, res, next) => {
    res.status(404).send("404 - NOT FOUND");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
