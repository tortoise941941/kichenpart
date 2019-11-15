
var knexObject = {

     development: {
         client : "sqlite3",
         connection: {
             filename: 'dev.sqlite3'
         },
         migrations: {
            directory:  './backend/db/sqlite/migrations'
         },
         seeds: {
            directory:  './backend/db/sqlite/seeds'
         },
         useNullAsDefault: true
     },

     production: {
         client: 'pg',
         connection: {
             host: 'localhost',
             user: '',
             password: '',
             database: ''
         },
         migrations: {
            directory: './backend/db/pg/migrations'
         },
         seeds: {
            directory:  './backend/db/pg/seeds'
         }
     },

     test: {
         client: 'mysql',
         connection:{
            host: 'localhost',
            user: 'root',
            password: 'sadru',
            database: 'browserify'
         },
         migrations: {
            directory: './backend/db/mysql/migrations'
         },
         seeds: {
            directory: './backend/db/mysql/seeds'
         }
     } 
}


module.exports = knexObject