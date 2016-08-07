app.directive('hgHangmanImage', [function() {
	return {
		restrict: 'E',
		scope: {
			incorrectCount: '@'
		},
		//Directive for displaying hangman image dynamically basis wrong guess count
		link: function(scope, element, attrs, controllers){
    		var hangmanMapping = {
	    		0: '',
	    		1: 'images/60px-Hangman-0.png',
	    		2: 'images/60px-Hangman-1.png',
	    		3: 'images/60px-Hangman-2.png',
	    		4: 'images/60px-Hangman-3.png',
	    		5: 'images/60px-Hangman-4.png',
	    		6: 'images/60px-Hangman-5.png',
	    		7: 'images/60px-Hangman-6.png',
	    		8: 'images/60px-Hangman-7.png',
	    		9: 'images/60px-Hangman-8.png',
	    		10: 'images/60px-Hangman-9.png',
	    	};

	    	
	    	scope.hangmanSrc = hangmanMapping[scope.incorrectCount]

	    	//Hook for the digest loop
	    	scope.$watch(
	    		function (scope) {
	    			return scope.incorrectCount
	    		}, 
	    		function(value) {
					scope.hangmanSrc = hangmanMapping[scope.incorrectCount]			
		    	}
		    );
      	},
		template: '<img ng-show="hangmanSrc" src="{{hangmanSrc}}" />'
	};
}]);