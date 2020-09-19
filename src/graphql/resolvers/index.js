const { response } = require("express");

const queryResolvers = require('../resolvers/queries');

const resolvers = [ queryResolvers ];

module.exports = resolvers;
