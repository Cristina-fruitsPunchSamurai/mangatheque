const { Bd } = require('../models');

const mangaController = {

    mangaList: async (req,res) => {
        try {
            const titles = await Bd.findAll({
                include: 'tags',
            })
            const titlesCount = await Bd.count()
            return res.render('mangaList', {titles, titlesCount})

        } catch (error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Une erreur sur mangaList controller');
        }
    },

    mangaDetail: async(req,res) => {
        const mangaId = parseInt(req.params.id,10)

        try{
            const bdDetail = await Bd.findByPk(mangaId, {
                include: 'tags'
            });

            return res.render('mangaDetail', {bdDetail})
        }catch(error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Une erreur sur mangaDetail controller');
        }
    },

 };

 module.exports = mangaController;