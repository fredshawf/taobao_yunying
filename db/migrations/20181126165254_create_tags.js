exports.up = async function(knex) {
  await knex.schema.createTable("tags", function(t) {
    t.increments();
    t.string('name').notNullable();
    t.timestamps();
    
    t.index(['name']);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("tags");
};
