exports.up = async function(knex) {
  return knex.schema.table('categories', function (table) {
    table.string('code');
  })
};

exports.down = async function(knex) {
  return knex.schema.table('categories', function (table) {
    table.dropColumn('code');
  })
};
