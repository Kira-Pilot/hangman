var express = require('express');
var router = express.Router();

var wordArray = ["marge", "whiskers", "treats", "fuzzface"];

/* GET users listing. */
router.get('/word/random', function(req, res, next) {	
	var randomId = Math.floor(Math.random() * wordArray.length);
	var randomWord = wordArray[randomId];
	var randomLength = wordArray[randomId].length;
  	res.send({
  		randomId: randomId,
  		randomWord: randomWord,
  		randomLength: randomLength
  	});
});

module.exports = router;
