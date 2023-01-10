const express = require('express')
const { sendApplication, getApplication } = require('../controllers/applicationController')

const router = express.Router()

//post application route
router.post('/', sendApplication)

//get user profile
router.get('/:id', getApplication)



module.exports = router