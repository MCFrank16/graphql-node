const mutations = require('../typedefs/mutation');
const queries = require('../typedefs/query');
const types = require('../typedefs/schema');


const bundle = {
    mutations,
    queries,
    types
};

const typeDefs = [ bundle.mutations, bundle.queries, bundle.types ];

module.exports = typeDefs;
