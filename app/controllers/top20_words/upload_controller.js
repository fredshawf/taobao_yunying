const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const XLSX = require('xlsx')

module.exports = class UploadController{
  
  async new() {
    
    await this.render("top20_words/upload")
  }
  
  async create() {
    let file_path = this.params.tags.path;
    // let xlsx_buffer = await fs.readFileAsync(file_path);
    let workbook = XLSX.readFile(file_path)
    // console.log(xlsx_buffer.byteLength)
    this.ctx.body = '123'
  }
  
  
  
}