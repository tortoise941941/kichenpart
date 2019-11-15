 const { Model } = require('objection')

 const env = process.env.ENVIRONMENT || 'development'

 const config = require('../../knexfile')[env]

 const knex = require('knex')(config)

 Model.knex(knex)

 module.exports = knex