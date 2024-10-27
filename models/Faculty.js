const mongoose = require("mongoose")
const faculty_schema = mongoose.Schema(
    {
        "faculty_username": { type: String, required: true },
        "faculty_password": { type: String, required: true }
    }
)
let facultyLoginModel = mongoose.model("Faculty_Login", faculty_schema)
module.exports = { facultyLoginModel }