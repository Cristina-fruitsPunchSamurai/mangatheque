const { Router } = require('express');
const router = Router();

// Appel aux view controllers
const homeController = require('./controllers/homeController');
const mangaController = require('./controllers/mangaController');
const tagController = require('./controllers/tagController')
// const adminController = require('./controllers/adminController');



router.get('/', homeController.welcome);
router.get('/list', mangaController.mangaList);
router.get('/manga/:id', mangaController.mangaDetail);
router.get('/categories', tagController.showTags);
router.get('/categories/:name', tagController.tagTitles);


// //Espace admin
// router.get('/login', adminController.login)
// router.post('/login', adminController.handleLogin)
// router.get('/admin/addManga/', adminController.addMangaPage);
// router.post('/admin/addManga/', adminController.insertManga);

router.get('/');

module.exports = router;