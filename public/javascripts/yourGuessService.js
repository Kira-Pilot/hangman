app.factory("yourGuessService", ["$http", function($http){
    
    //Anonymous function that returns an array with user's correct guesses
    var bestGuess = function(guessedLetter, wordId){
        var ajaxPromise = $http.post('/api/letter/guess', {
        	guessedLetter: guessedLetter,
        	wordId: wordId
        });
        return ajaxPromise;
    };
    
    return {
        bestGuess: bestGuess 
    };
}]);
