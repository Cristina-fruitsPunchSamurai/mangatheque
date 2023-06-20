// pour utiliser notre fichier .env
require('dotenv').config();
const express = require("express");
const app = express();
// nous demandons à express d'utiliser session AVANT le router
const session = require('express-session');
const path = require('path');
const router = require('./app/router');
const addUserToLocals = require('./middlewares/addUserToLocals')

// Body parser
app.use(express.urlencoded({ extended: true }));

//Charger les données de la session  sur 'req.session' et 'res.locals'
app.use(session({
    secret: process.env.SECRET, // le "secret" qui sert à générer les identifiants de sessions uniques.
    resave: true, // sauvegarde automatique de la session à la fin de la requête
    saveUninitialized: true, // créer une session pour l'internaute dans tous les cas, mais si elle est vide.
    cookie: {
        // des options pour le cookie qui contient l'identifiant de session comme sa durée de vie par exemple.
    }
}));

app.use(addUserToLocals);
//Setup view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

//Use static files
app.use(express.static(path.join(__dirname, "public")));

// Mes routes
app.use(router);

//middleware 404
app.use((req, res, next) => {
    res.status(404).send("404 - NOT FOUND");
})

// le port est planqué dans le .env, on le récupère
app.listen(process.env.PORT, () =>
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
);
