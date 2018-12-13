
module.exports = class CategoriesController {
  
  async index() {
    let parent_id = this.params['parent_id'] || 0;
    let categories = await Category.query().where('parent_id', parent_id).eager('children');
    
    let data = await Promise.all(categories.map(async e => {
      let e_json = {};
      if (e.children.length > 0) {
        e_json['id'] = e.id;
        e_json['nodes'] = [];
        e_json['text'] = e.name;
      } else {
        e_json['id'] = e.id;
        e_json['text'] = e.name;
      }
      return e_json;
    }));
    
    
    if (this.headers['x-requested-with'] === 'XMLHttpRequest'){
      this.ctx.body = data
    } else {
      await this.render('top20_words/index', {data: JSON.stringify(data)});
    }
  }
  
  
}