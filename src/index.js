const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemes/taskSchema');
const resolvers = require('./resolvers/taskResolver');

const startConnection = async () => {
    await mongoose.connect('mongodb+srv://jolidiazca:20400727@projects.v5kgt.mongodb.net/?retryWrites=true&w=majority&appName=Projects');

    const server = new
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startConnection();
