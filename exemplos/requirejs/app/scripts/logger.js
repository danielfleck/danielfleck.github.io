(function() {

  var qtdeLogs = 0;

	define(
	  [],
	  function(){
	  	
	  	var logar = function(msg) {
	  		qtdeLogs += 1;
	  		console.log(msg);
	  	};
	  	var getQtdeLogs = function() {
	  		return qtdeLogs;
	  	};
	  	return {
	  		'logar': logar,
	  		'getQtdeLogs': getQtdeLogs
	  	};
	  }
	)
})();