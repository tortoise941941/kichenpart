
exports.up = function(knex) {
  
    return knex.schema.createTable('demo', function(attribute){
        attribute.increments()
        attribute.string('firstname')
        attribute.string('lastname')
        attribute.string('sirname')
    })
};

exports.down = function(knex) {
   return knex.schema.dropTable('demo')
};
