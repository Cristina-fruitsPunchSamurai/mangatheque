const {User} = require('../models');
const bcrypt = require('bcrypt');

const loginController = {
    index(req, res) {
        res.render('login');
    },

    login: async(req,res)=> {
        try{
            const {username,password}= req.body
            //vérification
            if(!username || !password) {
                return res.render('login', {
                    error: 'Veuillez remplir tous les champs du formulaire',
                })
            };

            const user = await User.findOne({
                where: {username},
                include: 'role'
            });
            //vérification
            if(!user){
                return res.render('login', {
                    error: 'Utilisateur ou mdp incorrect',
                })
            };

            const validUser = await bcrypt.compare(password, user.password);

            //vérification
            if (!validUser) {
                return res.render('login', {
                    error: 'Access denied',
                })
            };

            const formattedUser = {
                id: user.id,
                username: user.username,
                role: {
                    name: user.role.name,
                },
            };

            //On cree une session user
            req.session.user = formattedUser;
            //console.log(req.session.user)
            res.redirect('/');

        }catch(error){
            console.log(error.message)
            console.log(error.stack)
            return res.status(500).send('Une erreur sur loginController')
        }
    },

    logout: (req,res) =>{
        req.session.destroy();
        console.log("logout")
        res.redirect('/');
    }
}

module.exports = loginController;