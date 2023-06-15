// Appel au dataMapper
const dataMapper = require('../dataMapper');

const mangaController = {
    //Liste de tous les mangas
    async mangaList(req, res) {
        try {
            const result = await dataMapper.findAllMangas();
            //console.log(result)
            res.render('mangaList',{
                mangas : result
            });
        }catch (error) {
            console.trace(error)
            res.status(500).send('Error on mangaList')
        }
    },
    //Page info detail de chaque manga
    async mangaDetail (req,res) {
        const mangaId = req.params.id;
        try{
            const foundManga = await dataMapper.findMangaDetail(mangaId)
            res.render('mangaDetail', {foundManga : foundManga})

        } catch (error) {
            console.trace(error);
            res.status(500).send('Error on mangaDetail')
        }

    }
}

module.exports = mangaController;