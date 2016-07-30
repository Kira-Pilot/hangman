app.factory("randomWordService",
    [function(){
        //here's an array of words, which should eventually be replaced by a word bank.
        var wordArray = ["marge", "whiskers", "treats", "fuzzface"];
        //here's an anonymous function that randomizes words pulled from the word bank.
        var getRandomWord = function(){
            return wordArray[Math.floor(Math.random() * wordArray.length)];
        };
        //here we return an object. The value of the one key-value pair is a function that 
        //will get called in the controller (to give us our one, random word).
        return {
            getRandomWord: getRandomWord 
        };
}]);
