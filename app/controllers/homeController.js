// Appel au dataMapper

const homeController = {
    welcome (req,res) {
        res.status(200)
        res.render('home')
    }
}

module.exports = homeController;