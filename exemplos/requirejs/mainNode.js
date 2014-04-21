var requirejs = require('requirejs');

requirejs.config({
	baseUrl: "app/scripts",
	nodeRequire: require
})

//console.log(requirejs);
requirejs(['Ocorrencia', 'logger'],function(ocr,logger){

	logger.logar(ocr);

	ocr.setCdOpm(12345678).setSeq(1).setAno(2014);

	logger.logar(ocr.getCdOpm());

	logger.logar(ocr.getSeq());

	logger.logar(ocr.getAno());

	logger.logar(logger.getQtdeLogs());
});