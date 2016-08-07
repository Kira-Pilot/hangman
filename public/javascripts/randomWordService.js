app.factory("randomWordService", ["$http", function($http){
    
    //Anonymous function that returns JSON with random word ID and length
    var getRandomWord = function(){
        var ajaxPromise = $http.get('/api/word/random');
        return ajaxPromise;
    };
    
    return {
        getRandomWord: getRandomWord 
    };
}]);


