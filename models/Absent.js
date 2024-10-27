const mongoose = require("mongoose")


const schema = mongoose.Schema(
    {
        "student_username": { type: String, required: true },
        "student_password": { type: String, required: true },
        "student_rollnum" : { type: String, required: true },


    }
)
let absentModel = mongoose.model("absenties", schema)
module.exports = { absentModel }


