exports.up = async function(knex) {
  await knex.schema.createTable("categories", function(t) {
    t.increments();
    t.string('name').notNullable();
    t.integer('parent_id').defaultTo(0);
    t.timestamps();
    
    t.index(['name', 'parent_id']);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("categories");
};
