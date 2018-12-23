const fs = require('fs');

// https://suggest.taobao.com/sug?code=utf-8&q=%E5%86%85%E8%A1%A3

// https://s.taobao.com/search?q=%E6%89%8B%E6%9C%BA&search_type=item&sourceId=tb.index&ie=utf8&p4ppushleft=5%2C48&s=0

module.exports = class ProductsController {
  
  async index() {
    
    str = fs.readFileSync("abc.txt").toString();
    
    this.ctx.body = str
    
  }
  
  
  
}