
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(() => knex('categories').del())
    .then(() => knex('categories_tags').del())
    .then(() => {
      return knex('categories').insert([
        {id: 1, name: '零食/坚果/特产'},
        {id: 2, name: '糕点/点心', parent_id: 1},
        {id: 3, name: '移动电源'}
      ]);
    })
    .then(() => {
      return knex('tags').insert([
        {id: 1, name: '月饼'},
        {id: 2, name: '充电宝'},
        {id: 3, name: '适配器'},
        {id: 4, name: '蛋糕'},
        {id: 5, name: '核桃'}
      ]);
    })
    .then(() => {
      return knex('categories_tags').insert([
        {id: 1, category_id: 1, tag_id: 1},
        {id: 2, category_id: 1, tag_id: 4},
        {id: 3, category_id: 1, tag_id: 5},
        {id: 4, category_id: 2, tag_id: 1},
        {id: 5, category_id: 2, tag_id: 4},
        {id: 6, category_id: 2, tag_id: 5},
        {id: 7, category_id: 3, tag_id: 2},
        {id: 8, category_id: 3, tag_id: 3}
      ])
    });
};
