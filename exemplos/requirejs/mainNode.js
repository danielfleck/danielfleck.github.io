// atribui a variavel requirejs o objeto do módulo requirejs
var requirejs = require('requirejs');

// configura o requirejs
requirejs.config({
	baseUrl: "app/scripts",
	// esta configuração abaixo é importante
	nodeRequire: require
})

// Executa algo que tem como dependencia o código contido em Ocorrencia.js e logger.js
requirejs(['Ocorrencia', 'logger'],function(ocr,logger){

	logger.logar(ocr);

	ocr.setCdOpm(12345678).setSeq(1).setAno(2014);

	logger.logar(ocr.getCdOpm());

	logger.logar(ocr.getSeq());

	logger.logar(ocr.getAno());

	logger.logar(logger.getQtdeLogs());
});