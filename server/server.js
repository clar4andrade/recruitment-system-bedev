require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/user')
const applicationRoutes = require('./routes/application')
const mongoose = require('mongoose')

//app setup
const app = express()
app.use(express.json())

//defining routes
app.use('/api/user', userRoutes)
app.use('/api/application', applicationRoutes)

//connection to db
mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT , () => {
            console.log('Connected to db and listening for requestes on port', process.env.PORT)
        })
    })
    .catch(error => {
        console.log('error')
    })

