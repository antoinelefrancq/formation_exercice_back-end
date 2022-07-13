const bcrypt = require('bcrypt');
const { User, Role } = require('../models');

const sessionController = {
    index: (req, res) => {
        if (req.session.user) {
            return res.redirect('/');
        }
        res.render('login');
    },

    // post data here and create session
    login: async (req, res) => {
        if (req.session.user) {
            return res.redirect('/');
        }

        try {
            const { email, password } = req.body;
            // !! Votre code à partir d'ici

            const user = await User.findOne({
                where:{
                    email
                },
                include:'role'
            })
            let error =""
            if (user){
                const match = await bcrypt.compare(password, user.password)
                console.log(match)
                if (match){
                    req.session.user = user;
                    delete req.session.user.password;
                    res.redirect('/');
                }else {
                    error = {error:"Mot de passe incorrect"};
                    
                }
            } else {
                error = {error:"l'utilisateur n'existe pas !"};
            }    
            
                res.render('login',{
                    error:error.error
                });

        } catch (e) {
            console.error(e.message);
            res.status(500).send('Server Error');
        }
    },

    logout: (req, res) => {
        // !! Votre code ici
        req.session.destroy();

        res.redirect('/');
    },
};

module.exports = sessionController;
