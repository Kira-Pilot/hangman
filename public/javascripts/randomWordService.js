app.factory("randomWordService", ["$http", function($http){
    
    //here's an anonymous function that randomizes words pulled from the word bank.
    var getRandomWord = function(){
        var ajaxPromise = $http.get('/api/word/random');
        return ajaxPromise;
    };
    
    return {
        getRandomWord: getRandomWord 
    };
}]);


