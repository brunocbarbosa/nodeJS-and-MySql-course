function NoticiasDAO(connection){
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(idNoticia, callback){
    this._connection.query('SELECT * FROM noticias WHERE id =' + idNoticia.id, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

NoticiasDAO.prototype.getCincoUltimasNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5 ', callback);
}

module.exports = function(){
    return NoticiasDAO;
}