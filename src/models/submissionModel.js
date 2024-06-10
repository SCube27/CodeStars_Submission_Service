const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "UserId for the submission is required"],
    },
    problemId: {
        type: String,
        required: [true, "ProblemId for the submission is required"],
    },
    code: {
        type: String,
        required: [true, "Code for the submission is required"],
    },
    language: {
        type: String,
        required: [true, "Language for the submission is required"],
    },
    status: {
        type: String,
        enum: ["Pending", "Success", "RE", "TLE", "MLE", "WA"],
        default: "Pending",
    }
});

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;