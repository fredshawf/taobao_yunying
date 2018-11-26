module.exports = class Category extends Model {
  static get tableName() {
      return 'categories';
  }
  
  static get relationMappings() {
    return {
      children: {
        relation: Model.HasManyRelation,
        modelClass: Category,
        join: {
          from: 'categories.id',
          to: 'categories.parent_id'
        }
      },
      
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'categories.id',
          through: {
            from: 'categories_tags.category_id',
            to: 'categories_tags.tag_id'
          },
          to: 'tags.id'
        }
      }
      
    };
  }
  
  
  
  
}