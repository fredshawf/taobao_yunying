module.exports = class WordAnalysisController {
  
  async index() {
    
    await this.render('word_analysis/index', {a: 'index action'});
    
  }
  
  
  
  async create() {
    await this.render('word_analysis/index', {a: 'index action'});
  }
  
}