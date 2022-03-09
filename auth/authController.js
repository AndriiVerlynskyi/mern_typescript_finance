const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { secret } = require('../config/default.json');

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class authController {
    async registration (req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Registration error", errors})
            }
            const { username, password } = req.body;
            const candidate = await User.findOne({username});
            if (candidate) {
                return res.status(400).json({ message: "User with such name is already exists"})
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({ username, password: hashPassword });
            await user.save();
            return res.json({ message: "User is successfully registered"})
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "Can't register user"})
        }
    }
    async login  (req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({username});
            if ( !user ){
                return res.status(400).json({ message: `User ${username} doesn't exist`})
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({ message: "Password is wrong!"})
            }
            const token = generateAccessToken(user._id);
            return res.json({token})
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "Can't login"})
        }
    }
}


module.exports = new authController()