app.controller('hangmanController',

    ['$scope', 'randomWordService', 'yourGuessService', function($scope, randomWordService, yourGuessService){

        //Object that initializes guess and guessError as being blank and false
		$scope.form={
    		guess: "",
    		guessError: false
    	};

        //Initialization of resetGame, and hoisting of function that resets game
    	$scope.resetGame = resetGame;
    	$scope.resetGame();

        //Function that sets spaces for the random word chosen by the randomWordService
    	function setSpaces(){
    		setOfSpaces = "";
    		for (i=0; i < $scope.lengthOfWord; i++){
    			setOfSpaces+="_ ";
    		};
    		return setOfSpaces.trim();
    	}

        //Function that checks user submission to ensure that user enters one character
        //After submission, input box is cleared
    	$scope.submit = function () {
    		if ($scope.form.guess.length != 1) {
    			$scope.form.guessError = true;
    		} else {
    			$scope.form.guessError = false;
    			var yourGuessPromise = yourGuessService.bestGuess($scope.form.guess, $scope.randomId);
                yourGuessPromise.success(function(data){
                    $scope.hiddenArray = data.hiddenArray;
                    $scope.correct = data.correct;
                    yourGuess($scope.form.guess);
                    $scope.form.guess="";
                })	
    		}
        }

        //Function that updates the string 'makeSpaces' with correct guesses
        function yourGuess(){
            var spaceArray = $scope.makeSpaces.split(' ');
            if ($scope.correct){
                for (i = 0; i < $scope.lengthOfWord; i++){
                    if($scope.hiddenArray[i] !== 0){
                        spaceArray[i] = $scope.hiddenArray[i];
                    }
                }
            } 
            else {
                wrongGuess($scope.form.guess);
            }
            if (spaceArray.indexOf('_') == -1){
                $scope.greeting = "You won!";
                $scope.showRestart = true;               
            } 
            $scope.makeSpaces=spaceArray.join(' ');
        }


        //Function that updates the array of wrong letters if the user guesses incorrectly
		function wrongGuess(){
			if ($scope.wrongLetters.indexOf($scope.form.guess) == -1){
				$scope.wrongLetters.push($scope.form.guess);
		
    			if ($scope.wrongLetters.length == 10){
    				$scope.showRestart = true;
    				$scope.greeting = "You lost."
    			}
			}
		}

        //Function that resets the game
		function resetGame () {
            var randomWordPromise = randomWordService.getRandomWord();
            randomWordPromise.success(function(data){
                $scope.greeting = "Let's Play Hangman.";
                $scope.randomId = data.randomId;
                $scope.lengthOfWord = data.randomLength;
                $scope.makeSpaces = setSpaces($scope.lengthOfWord);
                $scope.showRestart = false;
                $scope.wrongLetters = []; 
            })	
		}
}]);

