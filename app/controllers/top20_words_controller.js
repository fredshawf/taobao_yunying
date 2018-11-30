const util = require('util')

module.exports = class Top20WordsController {
  
  async index() {
    let categories = await Category.query().where('parent_id', 0).eager('children');
    
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
    
    
    await this.render('top20_words/index', {data: JSON.stringify(data)});
    
  }
  
  
  
  
  
  
}