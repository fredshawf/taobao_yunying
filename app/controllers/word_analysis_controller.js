nodejieba = require("nodejieba");

module.exports = class WordAnalysisController {
  
  async index() {
    let article = this.params['article'] || '';
    let words = this.params['words'] || [];
    
    await this.render('word_analysis/index', {article: article, words: words});
  }
  
  
  
  async create() {
    let article = this.params['article'];
    
    // 移除所有标点
    let r = '[’!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~，。、！￥……（）—？《》「」·；：“”‘’ ]+';
    let reg = new RegExp(r, 'g');
    article = article.replace(reg, '');
    
    // 中文分词
    let words = nodejieba.cut(article);
    
    // 统计词频
    words.unshift(new Map());
    let words_group = words.reduce((r, e) => {
      r.set(e, (r.get(e) ? r.get(e) + 1 : 1)); return r;
    })
    
    // 排序
    let words_list = Array.from(words_group.entries())
    words_list = words_list.sort((x, y) => {
      return y[1] - x[1];
    })
    
    this.params['words'] = words_list
    
    await this.index();
  }
  
}