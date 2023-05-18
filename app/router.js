const { Router } = require('express');

// Appel aux controllers
const homeController = require('./controllers/homeController');
const mangaController = require('./controllers/mangaController');
const adminController = require('./controllers/adminController');

const router = Router();

router.get('/', homeController.welcome);
router.get('/list', mangaController.mangaList);
router.get('/manga/:id', mangaController.mangaDetail);

//Espace admin
router.get('/login', adminController.login)
router.post('/login', adminController.handleLogin)
router.get('/admin/addManga/', adminController.addMangaPage);
router.post('/admin/addManga/', adminController.insertManga);


module.exports = router;