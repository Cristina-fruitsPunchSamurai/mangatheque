const { User } = require('../models');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const signupController = {
    index(req, res) {
        res.render('register');
    },

    addUser: async (req,res)=> {

        const { username,
            email,
            password } = req.body;
        //Vérification-1
        if (
            !username ||
            !email ||
            !password
            ) {
            return res.render('register', {
                error: 'Veuillez remplir tous les champs du formulaire',
            })};
        //Vérification-2
        if (!emailValidator.validate(email)) {
            return res.render('register', {
                error: 'Cet est mail est invalide',
            })
        };
        //Vérification-3
        const userExists = await User.findOne({
            where: {email}
        });

        if(userExists){
            return res.render('register', {
                error: 'Something wrong happened',
            });
        }

        //Gestion password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const encryptedPassword = await bcrypt.hash(password, salt)
        try {
        //On crée la nouvelle instance de user
        const newUser = await User.create({
            username,
            email,
            password: encryptedPassword,
            role_id : 1,
        });
        console.log(newUser)

        res.render('login', {
            message: 'Vous pouvez maintenant vous connecter !',
        });

    }catch(error){
        console.log(error.message)
    }
    }
}

module.exports = signupController;