
var fs = require('fs');

var definedWords = function () {
	this.Electronics = function(){ 
		var words = ['television', 'mobile', 'radio', 'speaker', 'laptop', 'desktop', 'microwave'];
		var emptyWord = words[Math.floor(Math.random() * words.length)];
		return emptyWord;	
	}
};

module.exports = definedWords;
