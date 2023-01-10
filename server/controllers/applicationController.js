const Application = require('../models/application')

const sendApplication = async (req, res) => {

    const { user_id, about, degree, school, area, hard_skills, soft_skills, hobbies }  = req.body

    //verifying empty fields
    let fields = [user_id, about, degree, school, area, hard_skills, soft_skills, hobbies]
    let emptyFields = []

    fields.forEach((field) => {
        if(!field) {
            emptyFields.push('one field')
        }
    })

    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Fill in all the fields', emptyFields })
    }

    try {
        const application = await Application.create({user_id, about, degree, school, area, hard_skills, soft_skills, hobbies})
        res.status(200).json(application)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const getApplication = async (req, res) => {
    const { id } = req.params

    try {
        const application = await Application.find({"user_id": id})

        res.status(200).json({application})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    sendApplication,
    getApplication
}