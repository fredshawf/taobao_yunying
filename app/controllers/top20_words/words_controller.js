
module.exports = class WordsController {
  
  async index() {
    let category = await Category.query().findById(this.params['categories_id']);
    let tags = await category.$relatedQuery('tags');
    
    await this.render('top20_words/_tags', {tags: tags});
    
  }
  
  
  
  
}