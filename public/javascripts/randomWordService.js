app.factory("randomWordService",
    [function(){
        //Array of words, which should eventually be replaced by a word bank
        var wordArray = ["mavrck", "marketing", "angular", "influencers", "node", "express", "html", "css"];
        //Function that randomizes words pulled from the above array
        var getRandomWord = function(){
            return wordArray[Math.floor(Math.random() * wordArray.length)];
        };
        
        return {
            getRandomWord: getRandomWord 
        };
}]);

//If using an API, requests to the server would go in this service
