
exports.up = function(knex) {
  
     return knex.schema.createTable('registrations', function(table){
        
        table.increments('id'),
        table.string('username').notNullable(),
        table.string('email').notNullable(),
        table.string('password').notNullable()
     })
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('registrations')
};
