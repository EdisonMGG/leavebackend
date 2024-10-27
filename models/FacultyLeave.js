const mongoose = require("mongoose");

const FacultyLeaves_schema = mongoose.Schema({
    name: { type: String, required: true },
    IdNo: { type: String, required: true },
    Sdate: { type: String, required: true },
    Edate: { type: String, required: true },
    Tdate: { type: String, required: true },
    reasonforleave: { type: String, required: true },
    filepath: { type: String } // Field to store the file path
});

let FacultyLeavesModel = mongoose.model("Faculty_Leaves", FacultyLeaves_schema);
module.exports = { FacultyLeavesModel };
