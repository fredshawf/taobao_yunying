exports.up = async function(knex) {
  await knex.schema.createTable("categories_tags", function(t) {
    t.increments();
    t.integer('category_id');
    t.integer('tag_id');
    
    t.unique(['category_id', 'tag_id'])
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("categories_tags");
};
