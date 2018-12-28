const request = require('request-promise-native');


module.exports = class SearchSuggestionsController {
  
  // https://suggest.taobao.com/sug?code=utf-8&q=%E5%86%85%E8%A1%A3
  
  async index() {
    
    let keyword = this.params['keyword'];
    let taobao_search_url = `https://suggest.taobao.com/sug?code=utf-8&q=${encodeURIComponent(keyword)}`
    let headers = {}
    Object.assign(headers, this.headers);
    delete headers['host']
    delete headers['accept-encoding']
    
    let str = await request(taobao_search_url, {headers: headers, resolveWithFullResponse: true});
    let data = JSON.parse(str.body).result
    
    if (this.headers['x-requested-with'] === 'XMLHttpRequest'){
      await this.ctx.render("search_suggestions/_tags", {tags: data})
    } else {
      await this.ctx.render("search_suggestions/index")
    }
    
  }
  
  
  
}