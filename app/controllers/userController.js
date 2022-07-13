const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const { User, Role } = require('../models');
const assert = require('assert')

const userController = {
    index: (req, res) => {
        res.render('register');
    },

    register: async (req, res) => {
        // register a user here
        try {
            // !! votre code à partir d'ici
            // verif email here avec email-validator
            const user = await User.findOne({
                where:{
                    email:req.body.email
                }
            })
            assert.ok(!Boolean(user), `the mail ${req.body.email} si already used`)
            assert.ok(emailValidator.validate(req.body.email), `${req.body.email} is not a correct email`)
            // verif password === password confirm
            assert.ok(req.body.password === req.body.passwordConfirm, `passwords don't match`);
            // Hash password with salt
            const encryptedPwd = await bcrypt.hash(req.body.password, 10);
            // Attribuer un rôle ici, vous devrez auparavant en sélectionner un depuis la BDD : le role customer.
            const role = await Role.findOne({
                where:{
                    name:'customer'
                }
            })
            // sauvegarder user
                const newUser = await User.create({
                ...req.body,
                password: encryptedPwd,
                role_id:role.id
            });

            // !! ne pas modifier cette ligne
            res.render('login', {

                message: 'Vous pouvez maintenant vous connecter !',
            });
        } catch (error) {
            console.log(error);
            res.render('register', { error: error.message });
        }
    },

    show: async (req, res) => {
        res.render('dashboard/dashboard');
    },
};

module.exports = userController;
