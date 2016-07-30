app.controller('hangmanController',

    ['$scope', 'randomWordService', function($scope, randomWordService){
    	
		$scope.form={
    		guess: "",
    		guessError: false
    	};

    	$scope.resetGame = resetGame;
    	$scope.resetGame();

    	function setSpaces(randomWord){
    		lengthOfWord =  randomWord.length;
    		setOfSpaces = "";
    		for (i=0; i<lengthOfWord; i++){
    			setOfSpaces+="_ ";
    		};
    		return setOfSpaces.trim();
    	}

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

		function wrongGuess(oops){
			if ($scope.wrongLetters.indexOf(oops) == -1){
				$scope.wrongLetters.push(oops);
		
    			if ($scope.wrongLetters.length == 10){
    				$scope.showRestart = true;
    				$scope.greeting = "You lost."
    			}
			}
		}

		function resetGame () {
			$scope.greeting = "Let's Play Hangman.";
	    	$scope.randomWord = randomWordService.getRandomWord();
	    	$scope.makeSpaces = setSpaces($scope.randomWord);
	    	$scope.showRestart = false;
	    	$scope.wrongLetters = [];
		}


}]);

