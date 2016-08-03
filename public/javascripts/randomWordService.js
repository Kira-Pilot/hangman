app.factory("randomWordService", ["$http", function($http){
      
    //here's an anonymous function that randomizes words pulled from the word bank.
    var getRandomWord = function(){
        //this function returns a promise object
       return $http.get('/api/word/random');
    };
    //here we return an object. The value of the one key-value pair is a function that 
    //will get called in the controller (to give us our one, random word).
    return {
        getRandomWord: getRandomWord 
    };
}]);

//If using an API, requests to the server would go in this service
