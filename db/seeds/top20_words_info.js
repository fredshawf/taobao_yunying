
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(() => knex('categories').del())
    .then(() => knex('categories_tags').del())
    .then(() => {
      return knex('categories').insert([
        {id: 1, name: '零食/坚果/特产'},
        {id: 2, name: '糕点/点心'},
        {id: 3, name: '一级陌路A1'}
      ]);
    })
    .then(() => {
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
