var panel = $("#quiz-area");



// Question set
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

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 10,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  startGame: function() {
    timer = setInterval(game.countdown, 1000);

    $("#wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>10</span> Seconds</h2>");

    $("#startGame").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j] );
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#startGame", function() {
  game.startGame();
});


$(document).on("click", "#done", function() {
  game.done();
});
