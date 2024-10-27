const mongoose = require("mongoose")


const hod_schema = mongoose.Schema(
    {
        "HOD_username": { type: String, required: true },
        "HOD_Password": { type: String, required: true }
    }
)
let hodModel = mongoose.model("Hod", hod_schema)
module.exports = { hodModel }