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
	var randomId =  req.body.wordId;
	var yourGuess = req.body.guessedLetter;
	var correct = false;
	var letterArray = wordArray[randomId].split('');
	var letterArrayCopy = letterArray.slice();
	var hiddenArray = letterArrayCopy.fill(0);
	for (i=0; i<letterArray.length; i++){
		var myLetter = letterArray[i];
		console.log(myLetter);
		if (myLetter == yourGuess){
			hiddenArray[i] = yourGuess;
			correct = true;
		}
	}
	console.log(hiddenArray);
	res.send({
		hiddenArray: hiddenArray,
		correct: correct
	});
});


