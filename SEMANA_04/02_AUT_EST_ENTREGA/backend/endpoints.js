const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/curriculo.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();



/* Colocar toda a parte estática no frontend */
app.use(express.static("../frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/TblPessoa', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblPessoa ORDER BY NOME_PESSOA COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

app.get('/TblDados_Pessoais', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblDados_Pessoais ORDER BY TELEFONE COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

//Unindo tabelas
app.get('/TblDados_Pessoais_e_TblPessoa', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblDados_Pessoais, TblPessoa WHERE TblDados_Pessoais.ID_PESSOA = TblPessoa.ID_PESSOA';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

app.get('/TblExperiencias', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblExperiencias ORDER BY NOME_EXPERIENCIAS COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

//Unindo tabelas
app.get('/TblExperiencias_e_TblPessoa', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblExperiencias, TblPessoa WHERE TblExperiencias.ID_PESSOA = TblPessoa.ID_PESSOA';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

app.get('/TblFormacoes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblFormacoes ORDER BY NOME_FORMACOES COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

//Unindo tabelas
app.get('/TblFormacoes_e_TblPessoa', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblFormacoes, TblPessoa WHERE TblFormacoes.ID_PESSOA = TblPessoa.ID_PESSOA';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

app.get('/TblHabilidades', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblHabilidades ORDER BY NOME_HABILIDADES COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

//Unindo tabelas
app.get('/TblHabilidades_e_TblPessoa', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblHabilidades, TblPessoa WHERE TblHabilidades.ID_PESSOA = TblPessoa.ID_PESSOA';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

app.get('/TblRealizacoes', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblRealizacoes ORDER BY NOME_REALIZACOES COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

//Unindo tabelas
app.get('/TblRealizacoes_e_TblPessoa', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TblRealizacoes, TblPessoa WHERE TblRealizacoes.ID_PESSOA = TblPessoa.ID_PESSOA';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
            
		});
		db.close(); // Fecha o banco
});

app.get('/inserePessoa', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <form method= "post" action="/inserePessoa">
            <input type="text" name="NOME_PESSOA" placeholder="Insira o nome"><br>
            <button type="submit">Enviar</button>
        </form>    
    `);
});

// Insere um registro (é o C do CRUD - Create)
app.post('/inserePessoa', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO TblPessoa (NOME_PESSOA) VALUES ('" + req.body.NOME_PESSOA + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>USUARIO INSERIDO COM SUCESSO!</p><a href="/TblPessoa">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

app.post('/insereDadosPessoais', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO TblDados_Pessoais (TELEFONE, EMAIL, LINK_LINKEDIN) VALUES ('" + req.body.TELEFONE + "','" + req.body.EMAIL + "','" + req.body.LINK_LINKEDIN + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>DADOS PESSOAIS INSERIDOS COM SUCESSO!</p><a href="/TblDados_Pessoais">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

app.post('/insereExperiencias', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO TblExperiencias (NOME_EXPERIENCIAS, PERIODO, NOME_CARGO, NOME_EMPRESA) VALUES ('" + req.body.NOME_EXPERIENCIAS + "','" + req.body.PERIODO + "','" + req.body.NOME_CARGO + "','" + req.body.NOME_EMPRESA + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>EXPERIENCIAS INSERIDAS COM SUCESSO!</p><a href="/TblExperiencias">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

app.post('/insereFormacoes', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO TblFormacoes (NOME_FORMACOES, NOME_INSTITUICAO, PERIODO) VALUES ('" + req.body.NOME_FORMACOES + "','" + req.body.NOME_INSTITUICAO + "','" + req.body.PERIODO + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>FORMACOES INSERIDAS COM SUCESSO!</p><a href="/TblFormacoes">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

app.post('/insereHabilidades', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO TblHabilidades (NOME_HABILIDADES) VALUES ('" + req.body.NOME_HABILIDADES + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>HABILIDADES INSERIDAS COM SUCESSO!</p><a href="/TblHabilidades">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

app.post('/insereRealizacoes', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO TblRealizacoes (NOME_REALIZACOES) VALUES ('" + req.body.NOME_REALIZACOES + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>REALIZACOES INSERIDAS COM SUCESSO!</p><a href="/TblRealizacoes">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/atualizaTblPessoa', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM TblPessoa WHERE ID_PESSOA="+ req.query.ID_PESSOA;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/atualizaTblPessoa', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = `UPDATE TblPessoa SET NOME_PESSOA='${req.body.NOME_PESSOA}' WHERE ID_PESSOA=${req.body.ID_PESSOA}`;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>USUARIO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/removeTblPessoa', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM TblPessoa WHERE ID_PESSOA='" + req.query.ID_PESSOA + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeTblDados_Pessoais', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM TblDados_Pessoais WHERE ID_DADOS_PESSOAIS='" + req.query.ID_DADOS_PESSOAIS + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>DADOS REMOVIDOS COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeTblExperiencias', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM TblExperiencias WHERE ID_EXPERIENCIAS='" + req.query.ID_EXPERIENCIAS + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>EXPERIENCIAS REMOVIDAS COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeTblFormacoes', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM TblFormacoes WHERE ID_FORMACOES='" + req.query.ID_FORMACOES + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>FORMACOES REMOVIDAS COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeTblHabilidades', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM TblHabilidades WHERE ID_HABILIDADES='" + req.query.ID_HABILIDADES + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>HABILIDADES REMOVIDAS COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

app.get('/removeTblRealizacoes', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM TblRealizacoes WHERE ID_REALIZACOES='" + req.query.ID_REALIZACOES + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>REALIZACOES REMOVIDAS COM SUCESSO!</p><a href="/">VOLTAR</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});


app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});