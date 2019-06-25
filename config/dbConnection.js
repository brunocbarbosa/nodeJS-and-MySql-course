var mySql = require('mysql');

var connMysql = function(){
    return mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com banco de dados!!');
    return connMysql;
}