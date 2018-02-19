var qFrame = $("#question-area");

//********************************************************************************************************
// Trivia Questions
//********************************************************************************************************

var questions = [{
  question: "What female rap group sang the song titled \"Waterfalls\"?",
  answers: ["Salt N' Pepa", "Queen Latifah", "TLC", "SWV"],
  correctAnswer: "TLC"
}, {
  question: "Which New York native rapper was a performing arts student and big screen actor?",
  answers: ["Rakim", "Notorious B.I.G", "T.I", "Tupac Shakur"],
  correctAnswer: "Tupac Shakur"
}, {
  question: "Which of the following rappers was 17 when she/he put out the album titled \"Illmatic\"?",
  answers: ["Nas", "Run from Run DMC", "50 Cent", "Yo Yo"],
  correctAnswer: "Nas"
}, {
  question: "The following group has 9 members to represent the 9 wonders of the world?",
  answers: ["After 7", "Wu-Tang Clan", "A Tribe Called Quest", "No Doubt"],
  correctAnswer: "Wu-Tang Clan"
}, {
  question: "Naughty By Nature was a hit rap group in the 90s from New Jersey. What was the name of the lead performer in the group?",
  answers: ["Shock G", "Tupac Shakur", "Trench", "Busta Rhymes"],
  correctAnswer: "Trench"
}, {
  question: "This rapper was the lead actor on the 90s show The Fresh Prince of Bel-Air.",
  answers: ["Will Smith", "Ice Cube", "Ice T", "Snoop Dogg"],
  correctAnswer: "Will Smith"
}, {
  question: "Finish this rap lyric: \"Nas is like the Afrocentric- Asian...\"",
  answers: ["Half-Man, Half Amazing", "You Suckas Can't Contain It", "My People Think I'm Amazing", "I excel through the mazes"],
  correctAnswer: "Half-Man, Half Amazing"
}, {
  question: "Which rapper was not recorded as an artist that directly inspired Tupac Shakur's music?",
  answers: ["Jay-Z", "Nas", "Rakim", "Snoop Dogg"],
  correctAnswer: "Jay-Z"
}];


//********************************************************************************************************
// Timer Variable
//********************************************************************************************************

var timer;

var gameVariables = {
//********************************************************************************************************
// These are the incremented values based on whether the user wins
//********************************************************************************************************

	ansCorrect: 0, 
	ansIncorrect: 0,
	counter: 180,

//********************************************************************************************************
// timerCountDown - this is the timer that runs - show this on the DOM
//********************************************************************************************************

  	timerCountDown: function() {
  		// Decrement the counter from the set value
    	gameVariables.counter--;
    	// Show the counter on the DOM
    	$("#counter").html(gameVariables.counter);
    	// If the counter = 0, that means time is up and to run the done function which is defined in the game variables 
    	if (gameVariables.counter === 0) {
     	  // Stop the timer
     	  clearInterval(timer);
    	  // Run the done Function
     	  gameVariables.submitAnswers();
    	}
  	},

//********************************************************************************************************
// Start Game Function (attribute within gameVariables)
//********************************************************************************************************

  	startGame: function() {
    	timer = setInterval(gameVariables.timerCountDown, 1000);

    	$("#wrapper").prepend("<h1>Time Remaining: <span id='counter'>180</span> Seconds</h1>");

    	// Remove the start button
    	$("#startGame").remove();

    	// Dynamically append questions to DOM
    	for (var i = 0; i < questions.length; i++) {
     	  qFrame.append("<h2>" + questions[i].question + "</h2>");
     	
     	// Append radio buttons for questions to DOM  
      	for (var r = 0; r < questions[i].answers.length; r++) {
      	  qFrame.append("<h3>" + "<input type='radio' name='question-" + i + 
      	  "' value='" + questions[i].answers[r] + "''>" + questions[i].answers[r] + "</h3>");
      	}
   	 }	
    	qFrame.append("<button id='submitAnswers'>Submit Answers</button>");
    },

//********************************************************************************************************
// Submit Answers Function (attribute within gameVariables)
// Updates the final stats with how many questions were correct and incorrect
//********************************************************************************************************

    submitAnswers: function() {
//********************************************************************************************************
// Increase score on first question based on whether the user selected the correct answer
//********************************************************************************************************


//************
// Question 1
//***********
	    $.each($("input[name='question-0']:checked"), function() {
	      if ($(this).val() === questions[0].correctAnswer) {
	        gameVariables.ansCorrect++;
	      }
	      else {
	        gameVariables.ansIncorrect++;
	      }
	    });
//************
// Question 2
//***********
	    $.each($("input[name='question-1']:checked"), function() {
	      if ($(this).val() === questions[1].correctAnswer) {
	        gameVariables.ansCorrect++;
	      }
	      else {
	        gameVariables.ansIncorrect++;
	      }
	    });
//************
// Question 3
//***********
	    $.each($("input[name='question-2']:checked"), function() {
	      if ($(this).val() === questions[2].correctAnswer) {
	        gameVariables.ansCorrect++;
	      }
	      else {
	        gameVariables.ansIncorrect++;
	      }
	    });
//************
// Question 4
//***********
	    $.each($("input[name='question-3']:checked"), function() {
	      if ($(this).val() === questions[3].correctAnswer) {
	        gameVariables.ansCorrect++;
	      }
	      else {
	        gameVariables.ansIncorrect++;
	      }
	    });
//************
// Question 5
//***********
	    $.each($("input[name='question-4']:checked"), function() {
	      if ($(this).val() === questions[4].correctAnswer) {
	        gameVariables.ansCorrect++;
	      }
	      else {
	        gameVariables.ansIncorrect++;
	      }
	    });
//************
// Question 6
//***********
	    $.each($("input[name='question-5']:checked"), function() {
	      if ($(this).val() === questions[5].correctAnswer) {
	        gameVariables.ansCorrect++;
	      }
	      else {
	        gameVariables.ansIncorrect++;
	      }
	    });
//************
// Question 7
//************
	    $.each($("input[name='question-6']:checked"), function() {
	      if ($(this).val() === questions[6].correctAnswer) {
	        gameVariables.ansCorrect++;
	      }
	      else {
	        gameVariables.ansIncorrect++;
	      }
	    });
//************
// Question 8
//***********
	    $.each($("input[name='question-7']:checked"), function() {
	      if ($(this).val() === questions[7].correctAnswer) {
	        gameVariables.ansCorrect++;
	      }
	      else {
	        gameVariables.ansIncorrect++;
	      }
	    });

	    this.score();
  },
    score: function() {

    qFrame.html("<h2>Game Over!</h2>");
    qFrame.append("<h3>Correct Answers: " + this.ansCorrect + "</h3>");
    qFrame.append("<h3>Incorrect Answers: " + this.ansIncorrect + "</h3>");
    qFrame.append("<h3>Not Answered: " + (questions.length - (this.ansIncorrect + this.ansCorrect)) + "</h3>");
 
  }
};

 
//********************************************************************************************************
// Click-Event to Start the Game
//********************************************************************************************************
$(document).on("click", "#startGame", function() {
  gameVariables.startGame();
});

//********************************************************************************************************
// Click-Event to Submit answers to the Game
//********************************************************************************************************
$(document).on("click", "#submitAnswers", function() {
  gameVariables.submitAnswers();
});
