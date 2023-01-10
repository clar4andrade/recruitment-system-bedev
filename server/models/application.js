const mongoose = require('mongoose')

const Schema = mongoose.Schema

const multipleSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    years: {
        type: Number,
    } 
})

const applicationSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    about: { 
        type: String,
        required: true 
    },
    degree: { 
        type: String,
        required: true 
    },
    school: { 
        type: String, 
        required: true
    },
    area: { 
        type: String, 
        required: true
    },
    hard_skills: [multipleSchema],
    soft_skills: [multipleSchema],
    hobbies: [multipleSchema]
})

module.exports = mongoose.model('Application', applicationSchema)