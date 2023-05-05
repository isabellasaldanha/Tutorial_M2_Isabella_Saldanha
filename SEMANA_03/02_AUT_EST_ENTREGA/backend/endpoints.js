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

app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});