#Hangman in AngularJS and Node.js

##Synopsis
The intention of this project was to write a Hangman game as a Web application, in order to learn AngularJS and Node.js. Although this application is still a work in progress, the game can be played now (see below). More detail on continuing work can be found in the **Next Steps** portion of this README.

Click [here](https://en.wikipedia.org/wiki/Hangman_(game)) to learn more about the Hangman game.
Click [here](https://pilot-hangman-application.herokuapp.com/) to play the Hangman game.

##Motivation
This project originally constituted the technical portion of an interview process, and proved to be a great way to learn AngularJS and Node.js.

##Rules
* When the game is started, the player is represented with an empty field for each letter in the word.
* When the player guesses a letter correctly, each field that represents that letter is filled with the letter.
* When the player guesses a letter incorrectly, a piece of a gallows with a hanging man is drawn.
* After 10 incorrect guesses, the game is over and the player lost.
* Thus, there should be 10 different states of the gallows to be drawn.
* If all fields are filled with their letter before 10 incorrect guesses, the player
has won the game.

##Technical Requirements
* Server/client based with the client being the browser
* Client implemented with AngularJS
* Server implemented with NodeJS
* Business logic executed on the server (so nobody can cheat)
* Allow for keeping simple statistics (games won/lost)
* Game is self-contained
* Game must scale to millions of users

##Next Steps
Building this application has been a learning experience, and there is still progress to be made to complete the project in full. Other work to be done includes:
* Allow for simple statistics (games won/lost): 
 * This will be achieved through local storage (rather than through the use of database).
* Game is self-contained: 
 * Right now, the application uses CDN paths within the HTML. In the future, these files would be served locally.
* Game must scale to millions of users: 
 * Since I don’t plan on using a database, this application could put behind a load balancer and scaled horizontally. This would allow the application to scale to any size without overwhelming a database.

##Installation
One can play the game [here](https://pilot-hangman-application.herokuapp.com/).
Alternatively, one can clone the Master branch and run **nodemon bin/www** from the directory within the terminal.

##Contributors
This application was written by [Kira Pilot](https://www.linkedin.com/in/kira-pilot-30b4a173).

