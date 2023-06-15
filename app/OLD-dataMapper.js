
//Ici je centralise mes requetes à la BDD
const client = require('./database');

const dataMapper = {

    findAllMangas : async function() {
        //On prepare la requete
        const query = 'SELECT * from manga ORDER BY nom_japonais ASC ;'
        //id,  Nom_japonais, Genres , Lecture_manga
        const result = await client.query(query);
        return result.rows;
    },

    findMangaDetail : async function(id) {

        //On prepare la requete
        const queryText = 'SELECT * from manga WHERE id=$1;'
        const queryValues = [id]
        const result = await client.query(queryText, queryValues);
        return result.rows[0];
        console.log ('DATA MAPPER Result :', result);

    },

    insertMangaDB : async function (formInfo){

        //Si ces clés à gauche correspondent à ce qu'on trouve dans le .body, on va creer des variables possedant le meme nom et valeurs
        const {nom_japonais, nom_français, genres, lecture_manga } = formInfo;
        /*
        const mangaInfoNameFr = req.body.Nom_français
        const mangaInfoNameJp = req.body.Nom_japonais
        const mangaInfoGenres = req.body.Genres
        const mangaInfoStatus = req.body.Lecture_manga
        */
        //On prepare la requete
        const SQLquery = {
            text: `INSERT INTO manga ("nom_japonais", "nom_français", "genres", "lecture_manga" ) VALUES ($1, $2 ,$3, $4);`,
            values: [nom_japonais, nom_français, genres, lecture_manga]
        }
        const result = await client.query(SQLquery);
        return result;
    }
}

module.exports = dataMapper;