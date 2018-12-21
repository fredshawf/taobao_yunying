const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const XLSX = require('xlsx')

module.exports = class UploadController{
  
  async new() {
    
    await this.render("top20_words/upload");
  }
  
  async create() {
    let file_path = this.params.tags.path;
    let file_name= this.params.tags.name
    let workbook = XLSX.readFile(file_path);
    // console.log(workbook)
    let tags_data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header:1}).slice(1);
    
    for(let tags of tags_data){
      let tag_name = tags[0];
      let category_names = tags.slice(1);
      console.log(category_names)
      
      let parent_id = 0;
      for(let category_name of category_names) {
        let category = await Category.query().findOne({name: category_name})
        if (!category) {
          category = await Category.query().insertAndFetch({name: category_name, parent_id: parent_id})
        }
        
        let tag = await Tag.query().findOne({name: tag_name});
        if (!tag) {
          tag = await Tag.query().insertAndFetch({name: tag_name, built_from: file_name});
        }
        
        try {
          await category.$relatedQuery('tags').relate([tag.id]);
        } catch (e) {  
        }
        parent_id = category.id;
      }
    }
    
    this.ctx.body = tags_data
  }
  
  
  
}