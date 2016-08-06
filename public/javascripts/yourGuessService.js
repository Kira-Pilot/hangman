app.factory("yourGuessService", ["$http", function($http){
    
    //here's an anonymous function that returns an array with your correct guesses
    //I want this to both post and then return hiddenArray
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
