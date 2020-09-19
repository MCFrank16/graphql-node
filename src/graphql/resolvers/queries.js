const userDB = require('../../database/userDB');

const queryResolvers = {
    Query: {
        getUsers: () => {
            return userDB.collection;
        },

        getUser: (_, { id }) => {
            return userDB.getUserById(id);
        }
    }
}

module.exports = queryResolvers;