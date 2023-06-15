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
        const tagName = req.params.name;

        try {
            const tagContains = await Tag.findOne({
                where: { name: tagName },
                include: 'mangas'
            })
            console.log(tagContains)
            return res.render('category')

        }catch(error){
            console.log(error.message)
            console.log(error.stack)
            return res.status(500).send('Une erreur sur tagController')
        }
    }
}

module.exports = tagController;