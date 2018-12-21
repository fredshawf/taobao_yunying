exports.up = async function(knex) {
  return knex.schema.table('tags', function (table) {
    table.boolean('is_free').defaultTo(true);
    table.string('built_from');
  })
};

exports.down = async function(knex) {
  return knex.schema.table('tags', function (table) {
    table.dropColumns('is_free', 'built_from');
  })
};
