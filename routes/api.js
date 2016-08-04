var express = require('express');
var router = express.Router();

var wordArray = ["marge", "whiskers", "treats", "fuzzface"];

/* GET random word. */
router.get('/word/random', function(req, res, next) {	
	//gives a random index
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

/* POST user guess. */
router.post('/letter/guess', function(req, res, next) {
	var randomId =  req.body.randomId;
	var yourGuess = req.body.yourGuess;
	console.log(randomId);
	console.log(yourGuess);
	var letterArray = wordArray[randomId].split('');
	var hiddenArray = letterArray.fill(0);	
	for (i=0; i<letterArray.length; i++){
		var myLetter = letterArray[i];
		if (myLetter == yourGuess){
			hiddenArray[i] = yourGuess;
		}
	}
	res.send({
		hiddenArray: hiddenArray
	});
});


