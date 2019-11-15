
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('demo').del()
    .then(function () {
      // Inserts seed entries
      return knex('demo').insert([
        {
          id: 1,
          firstname: 'sadru',
          lastname: 'mkude',
          sirname: 'msumi'
        },
        {
          id: 2,
          firstname: 'sadru',
          lastname: 'mkude',
          sirname: 'msumi'
        }
      ]);
    });
};
