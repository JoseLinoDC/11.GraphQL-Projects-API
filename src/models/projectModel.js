const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, default: false},
    startDate: {type: String, default: false},
    endDate: {type: String, default: false},
    status: {type: String, default: false},
    budget: {type: Number, default: false},
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;