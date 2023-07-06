const { Bd } = require('../models');

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

                //-> ICI OK sauf radio//  console.log(req.body)

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
            //-> ICI OK //  console.log(searchedTitle)

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
                    author
                    // image : image
                })
                console.log(newTitle)

                let message = "Le manga a été ajoutée"

                console.log('Manga ajoutée')

            return res.render('/form', { message, error})

            } catch(error){
            console.log(error.message)
            console.log(error.stack)
            return res.status(500).send('Une erreur sur addMangaController')
        }
    }
}

module.exports = addMangaController;
