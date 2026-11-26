DROP TABLE IF EXISTS estados;

CREATE TABLE estados (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  sigla VARCHAR(2) NOT NULL,
  regiao ENUM('Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste') NOT NULL,
  populacao DECIMAL(5, 2) NOT NULL, -- População em Milhões
  PRIMARY KEY (id),
  UNIQUE KEY (sigla),
  UNIQUE KEY (nome)
);
