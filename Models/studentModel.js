const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentClass: {
        type: String,
        required: true
    },

    profilePicture:{pictureUrl:String, pictureId:String}
    // department: {
    //     type: String,
    //     enum: {
    //         values: ["Science", "Commercial", "Art"],
    //         message: "Department must be either Science, Art, or Commercial."
    //     },
    //     required: true
    // },
    // gender: {
    //     type: String,
    //     enum: {
    //         values: ["Male", "Female"],
    //         message: "Gender can only be either Male or Female."
    //     },
    //     required: true
    // }
}, { timestamps: true });

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;
