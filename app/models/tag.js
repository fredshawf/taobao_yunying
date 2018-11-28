module.exports = class tag extends Model {
  static get tableName() {
      return 'tags';
  }
  
  $beforeInsert() {
    this.created_at = new Date().toLocaleString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toLocaleString();
  }
  
  
}