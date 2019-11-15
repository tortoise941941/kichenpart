
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('registrations').del()
    .then(function () {
      // Inserts seed entries
      return knex('registrations').insert([
        {
          id: 1, 
          username: 'sadru',
          email: 'sadru@gmail.com',
          password: '12345'
        }
      ]);
    });
};
