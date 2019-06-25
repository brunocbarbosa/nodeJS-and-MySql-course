CREATE TABLE noticias (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(100) NOT NULL,
    noticias TEXT,
    resumo varchar(100),
    autor varchar(30) NOT NULL,
    data_noticia DATE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);