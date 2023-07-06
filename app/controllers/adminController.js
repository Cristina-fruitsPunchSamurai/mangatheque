// Appel au dataMapper
//const dataMapper = require('../dataMapper');

const adminController = {

    login(req,res){
        res.status(200)
        res.render('loginForm')
    },

    handleLogin(req, res) {
        const username = req.body.admin

        if(username === "CristinaM"){
            req.session.isAdmin === true;
            res.render('addMangaForm')
        } else {
            res.redirect('/login')
        }

    },

    addMangaPage(req,res) {
        if (req.session.isAdmin === true) {
            res.status(200)
            res.render('addMangaForm')
        } else {
            res.status(403).redirect('/login');
        }
    },

    async insertManga(req,res) {
        const formInfo = req.body

       try{
           const result = await dataMapper.insertMangaDB(formInfo);
           res.send('Ajout effectué')
       } catch (error){
            console.log(error)
            res.status(500).send('Error on insertManga')
       }

    }
}

module.exports = adminController;
