const { Tag } = require('../models');

const tagController = {
    showTags : async (req, res) =>{
        try{
            const tags = await Tag.findAll();

            return res.render('categories', {tags})

        }catch(error) {
            console.log(error.message)
            console.log(error.stack)
            return res.status(500).send('Une erreur sur tagController')
        }
    },

    tagTitles: async (req, res) => {
        try {
            const tagName = req.params.name;
            const mangaOfTag = await Tag.findOne({
                where: { name: tagName },
                include: 'mangas'
            })
            const titlesArray = []

            mangaOfTag.mangas.forEach((title) => {
                titlesArray.push(title);
            });
            const titleCount = titlesArray.length;

            return res.render('category', {mangaOfTag, titleCount})

        }catch(error){
            console.log(error.message)
            console.log(error.stack)
            return res.status(500).send('Une erreur sur tagController')
        }
    }
}

module.exports = tagController;