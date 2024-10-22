const projectService = require('../services/projectService');

const resolvers = {
    Query: {
        projects: () => projectService.getAllProjects(),
    },

    Mutation: {
        createProject: (_, { title }) => {
            return projectService.createProject(title);
        },

        updateProject: (_, { _id, completed }) => {
            return projectService.updateProject(_id, completed);
        },

        deleteProject: (_, { _id }) => {
            return projectService.deleteProject(_id);
        }
    }

}

module.exports = resolvers;