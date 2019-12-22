// create variables to reference all DOM elements we're working with
  var  timeleft = document.queryselector("#time-left")
  var startScreen = document.queryselector("#start-screen")
  var QuizContent = document.queryselector("#quiz-content")
  var PostGameQuiz = document.queryselector("#user-score")
  var PostGameScreen = document.queryselector("#post-game-screen")
  var StartGameButton = document.queryselector("#start-game-btn")
  // time-left
  startScreenID.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
      startScreenID.setAttribute("class", "hide");
      quizContentID.removeAttribute("class");
    }
  });
  StartGameButton.addEventListener("click", function (event) {




  }
  


// create variables for game logic
  // timerIntervalId
  // score
  // secondsLeft


// create function to start game
  // set secondsLeft variable starting time (300 seconds = 5 minutes)
  // write secondsLeft to the page

  // reset score to 0
  // write score to the page (optional)

  // hide start-screen element && post-game-screen
  // show quiz-content element

  // display first question
  displayQuestion(0);

  // set timerIntervalId to setInterval function that decrements secondsLeft every second
  timerIntervalId = setInterval(function() {
    secondsLeft--;
    if (secondsLeft <= 0) {
      stopGame();
    }
  }, 200000);



// create function to display a question and possible choices
function displayQuestion(questionIndex) {
  // check if questionIndex in questions array doesn't exist
  if (!questions[questionIndex]) {
    // stop game, we've hit last question
    return stopGame();
  }

  // get questions[questionIndex]
  // print question to the page
  // use data attribute to know which index the question is
  // loop through choices and print out choices to the page (make them buttons)

}

// create function to handle users answering
  // use event delegation to make sure button was clicked
  // read data attribute of what question we answered (index)
  // check to see if choice picked is same as questions correct answer
  // if yes, increase score++
  // if no, subtract time from secondsLeft
  
  // get index of next question (this question's index + 1)
  // run displayQuestion(nextQuestionIndex)



// create a function to stop the game (either by answering all the questions or time has run out)
  // clearInterval() to stop the timer
  // hide quiz-content element
  // show post-game-screen
  // print out user score



// add event listeners
  // start game button (for starting the game)
  // quizcontent (for answering a question) -> use event delegation
  // play again button (for starting the game)
