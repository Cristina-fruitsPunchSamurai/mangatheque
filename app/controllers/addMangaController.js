const { Bd } = require('../models');
const { Sequelize } = require('sequelize');

const addMangaController = {

    addMangaForm: (req, res) => {
        res.status(200)
        res.render('addMangaForm')
    },

    createNewTitle: async (req,res)=> {
            const { title,
                    original_title,
                    format,
                    status,
                    author,
                    // image
                } = req.body;


            //Vérification 1
            if (!title ||
                !original_title ||
                !format ||
                !status ||
                !author
                // !image
                ) {
                    return res.render('addMangaForm', {
                        error : "Oups, Il faut remplir tous les champs!"}
                        )}

            //Vérification 2
            const searchedTitle = await Bd.findOne({
                where: { title },
            });


            if(searchedTitle) {
                    return res.render('addMangaForm', {
                    error: "Ce titre fait déjà partie de votre mangathèque"}
                    )}
        try {
                const newTitle = await Bd.create({
                    title,
                    original_title,
                    format,
                    status,
                    author,
                    image: ''
                })

    console.log(newTitle);

            console.log('Titre ajouté à la BDD', newTitle)

                let message = "Le manga a été ajoutée"

                console.log('Manga ajoutée')

            return res.render('/form', { message})

            } catch(error){
            console.log(error.message)
            console.log(error.stack)
            return res.status(500).send('Une erreur sur addMangaController')
        }
    }
}

module.exports = addMangaController;
