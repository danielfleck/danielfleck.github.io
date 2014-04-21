define([],function(){
	var cdOpm,
		seq,
		ano;
	return {
		getCdOpm : function() {
			return cdOpm;
		},
		getSeq : function() {
			return seq;
		},
		getAno : function() {
			return ano;
		},
		setCdOpm : function(value) {
			cdOpm = value;
			return this;
		},
		setSeq : function(value) {
			seq = value;
			return this;
		},
		setAno : function(value) {
			ano = value;
			return this;
		},
	}
});