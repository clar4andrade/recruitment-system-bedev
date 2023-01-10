const express = require('express')
const { userLogin, userSignup, getUser} = require('../controllers/userController')

const router = express.Router()

//signup route
router.post('/signup', userSignup)

//login route
router.post('/login', userLogin)

//get user profile
router.get('/id/:id', getUser)



module.exports = router