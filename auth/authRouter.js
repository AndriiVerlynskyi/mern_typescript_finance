const Router = require('express');
const { check } = require('express-validator');
const authController = require('./authController');

const router = new Router;

router.post('/registration', 
[
    check('username', "The username field can't be empty").notEmpty(),
    check('password', "Password should consist of at least 3 symbols and no more than 12").isLength({min: 3, max: 12})
], authController.registration);
router.post('/login', authController.login);

module.exports = router;