exports.up = function(knex) {
    return knex.schema.createTable('appointments', table => {
      table.increments('jobId'); // adds an auto incrementing PK column
      table.integer('techId');
      table.integer('timeOfAppt').notNullable()
      table.timestamps(true, true); // adds created_at and updated_at
      table.string('Notes')
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies');
  };
