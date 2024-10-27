const mongoose = require("mongoose");

const StudLeavesSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        batch: { type: String, required: true },
        rollno: { type: String, required: true },
        Sdate: { type: String, required: true },
        Edate: { type: String, required: true },
        Tdate: { type: String, required: true },
        reasonforleave: { type: String, required: true },
        filepath: { type: String }, // Add filepath for storing uploaded image
        status: { type: String, enum: ['approved', 'rejected', 'pending'], default: 'pending' }  // New field for leave status

    }
);

let StudLeavesModel = mongoose.model("Stud_leaves", StudLeavesSchema);
module.exports = { StudLeavesModel };
