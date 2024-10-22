const Project = require('../models/projectModel');

module.exports = {

    getAllProjects: async () => {
        return await Project.find();
    },

    createProject: async (name) => {
        const project = new Project({name});
        return await project.save();
    },

    updateProject: async (_id, description) => {
        return await Project.findByIdAndUpdate(_id,{description});
    },

    deleteProject: async (_id) => {
        return await Project.findByIdAndDelete({_id});
    },
    
}