
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointments').insert([
        {techId: 1, timeOfAppt: 0500, Notes: 'repair roof'},
        {techId: 2, timeOfAppt: 0830, Notes: "repair the front walkway"},
        {techId: 1, timeOfAppt: 1230, Notes: "set up fence(beware of dog)"}
      ]);
    });
};
