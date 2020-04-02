const knex = require('knex')

let options = require('../knexfile')

const connection = knex(options.development)

module.exports = connection