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

            if (!bdDetail) {
                return res.status(404).render('404');
            }
            console.log(bdDetail.tags instanceof Array)

            return res.render('mangaDetail', {bdDetail})
        }catch(error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Une erreur sur mangaDetail controller');
        }
    },

    searchMangaForm: async(req, res) => {
        res.status(200)
        res.render('recherche')
    },

    searchManga: async(req, res)=> {
        try {
            const title = req.query.title
            console.log("🚀 ~ file: mangaController.js:41 ~ searchManga:async ~ title:", title)


            const titlesFound = await Bd.findAll({
                where: {
                    title: {
                        [Op.like]: `%${title}%`
                    }
                },
            })
            console.log('Titles found',titlesFound)
            res.render('mangaList')

        }catch(error){
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Une erreur sur searchManga controller');
        }
    }

};

module.exports = mangaController;