var database = require("../database/config");

// function buscarAquariosPorEmpresa(empresaId) {

//   var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }

function buscarRegistrosPorEmpresa(idEmpresa) {

  var instrucaoSql = `SELECT idregistro, Usuario.fkEmpresa AS idEmpresa, Registro.dht11Umidade, Registro.dht11Temperatura, DATE_FORMAT(dataHora, '%d/%m/%y às %h:%i:%s') AS dataHora FROM Registro JOIN Usuario ON Registro.fkUsuarioRepresentante = Usuario.idUsuario WHERE Usuario.fkEmpresa = ${idEmpresa} ORDER BY idRegistro DESC LIMIT 10`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimoRegistroPorEmpresa(idEmpresa) {
  var instrucaoSql = `SELECT idRegistro, Usuario.fkEmpresa AS idEmpresa, Registro.dht11Umidade, Registro.dht11Temperatura, DATE_FORMAT(dataHora, '%d/%m/%y às %h:%i:%s') AS dataHora FROM Registro JOIN Usuario ON Registro.fkUsuarioRepresentante = Usuario.idUsuario WHERE Usuario.fkEmpresa = ${idEmpresa} ORDER BY idRegistro DESC LIMIT 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



// function cadastrar(empresaId, descricao) {
  
//   var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }


module.exports = {
  // buscarAquariosPorEmpresa,
  buscarRegistrosPorEmpresa,
  buscarUltimoRegistroPorEmpresa,
  // cadastrar
}
