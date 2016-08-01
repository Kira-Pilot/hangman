app.controller('hangmanController',

    ['$scope', 'randomWordService', function($scope, randomWordService){

        //Object that initializes guess and guessError as being blank and false
		$scope.form={
    		guess: "",
    		guessError: false
    	};

        //Initialization of resetGame, and hoisting of function that resets game
    	$scope.resetGame = resetGame;
    	$scope.resetGame();

        //Function that sets spaces for the random word chosen by the randomWordService
    	function setSpaces(randomWord){
    		lengthOfWord =  randomWord.length;
    		setOfSpaces = "";
    		for (i=0; i<lengthOfWord; i++){
    			setOfSpaces+="_ ";
    		};
    		return setOfSpaces.trim();
    	}

        //Function that checks user submission to ensure that user enters one character
        //After submission, input box is cleared.
    	$scope.submit = function () {
    		if ($scope.form.guess.length != 1) {
    			$scope.form.guessError = true;
    		} else {
    			$scope.form.guessError = false;
    			$scope.yourGuess=$scope.form.guess;
    			yourGuess($scope.yourGuess);
    		}
            $scope.form.guess="";
        }

        //Function that checks if the user submission is in the random word 
        function yourGuess(bestGuess){
        	var wordArray = $scope.randomWord.split('');   
        	var spaceArray = $scope.makeSpaces.split(' ');

        	for (i = 0; i < wordArray.length; i++){       		
        		var myLetter = wordArray[i];
        		if (myLetter == $scope.yourGuess){
        			spaceArray[i] = $scope.yourGuess;
        		} 
        	}	

        	if (wordArray.join() == spaceArray.join()){
        		$scope.showRestart = true;
        		$scope.greeting = "You won!";
        	}

    		if (wordArray.indexOf($scope.yourGuess) == -1){
    			var oops = $scope.yourGuess;
    			wrongGuess(oops);
    		}
        	$scope.makeSpaces=spaceArray.join(' ');
        }

        //Function that update the array wrong letters if the user guesses incorrectly
		function wrongGuess(oops){
			if ($scope.wrongLetters.indexOf(oops) == -1){
				$scope.wrongLetters.push(oops);
		
    			if ($scope.wrongLetters.length == 10){
    				$scope.showRestart = true;
    				$scope.greeting = "You lost."
    			}
			}
		}

        //Function that resets the game
		function resetGame () {
			$scope.greeting = "Let's Play Hangman.";
	    	$scope.randomWord = randomWordService.getRandomWord();
	    	$scope.makeSpaces = setSpaces($scope.randomWord);
	    	$scope.showRestart = false;
	    	$scope.wrongLetters = [];
		}


}]);

