const { Router } = require('express');
const router = Router();

////////// Appel aux view controllers
const homeController = require('./controllers/homeController');
const mangaController = require('./controllers/mangaController');
const tagController = require('./controllers/tagController');
const loginController = require('./controllers/loginController');
const signupController = require('./controllers/signupController');
const addMangaController = require('./controllers/addMangaController');
// const adminController = require('./controllers/adminController');

////////// Routes

//Mangas
router.get('/', homeController.welcome);
router.get('/list', mangaController.mangaList);
router.get('/manga/:id', mangaController.mangaDetail);

router.get('/form', addMangaController.addMangaForm);
router.post('/form', addMangaController.createNewTitle);

//Catégories
router.get('/categories', tagController.showTags);
router.get('/categories/:name', tagController.tagTitles);

//Form login
router.get('/login', loginController.index);
router.post('/login', loginController.login)

//Form signup
router.get('/register', signupController.index);
router.post('/register', signupController.addUser);

//logout
router.get('/logout', loginController.logout);

// Espace admin
// router.get('/login', adminController.login)
// router.post('/login', adminController.handleLogin)
// router.get('/admin/addManga/', adminController.addMangaPage);
// router.post('/admin/addManga/', adminController.insertManga);



module.exports = router;