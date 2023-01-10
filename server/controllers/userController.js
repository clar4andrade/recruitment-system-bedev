const User = require('../models/user')
const jwt = require('jsonwebtoken')

// rosource function to create a token
const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET, { expiresIn: '5d'} )
}

//Signing user up
const userSignup = async (req,res) => {
    const { first_name, surname, email, password } = req.body

    try {
        //sign user using model static method
        const user = await User.signup(first_name, surname, email, password)

        // creating the token
        const token = createToken(user.id)

        //setting response
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//logging user
const userLogin = async (req,res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // creating the token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//getUser
const getUser = async (req,res) => {
    const { id } = req.params

    try {
        const user = await User.findById(id)

        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    userSignup,
    userLogin,
    getUser
}