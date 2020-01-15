var currentQuestionsIndex = 0;

var timeLeftID = document.querySelector("#time-left");
var startScreenID = document.querySelector("#start-screen");
var quizContentID = document.querySelector("#quiz-content");
var postGameQuizID = document.querySelector("#user-score");

var startGameButtonID = document.querySelector("#start-game-btn");
var playAgainBtnID = document.querySelector("#play-again-btn");





// time-left
function startQuiz() {
  startScreenID.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
      startScreenID.setAttribute("class", "hide");
      quizContentID.removeAttribute("class");
    }
    var count = 30;
    var interval = setInterval(function () {
      document.getElementById('time-left').innerHTML = count;
      count--;
      if (count === 0) {
        clearInterval(interval);
        stopQuiz();
        document.getElementById('time-left').innerHTML = 'Done';
        // or...
        alert("You're out of time!");
      }
    }, 1000);
  });
  getQuestions()
}

function getQuestions() {


    var currentQuestion = questions[currentQuestionsIndex];
    var questionsLocationID = document.querySelector("#questions-location");
    questionsLocationID.textContent = currentQuestion.question;
    
    
    for (i = 0; i < currentQuestion.choices.length; i++) {
      
      var choice = document.createElement("button");
      choice.setAttribute("class", "choice");
      choice.setAttribute("value", choice);
      choice.textContent = currentQuestion.choices[i];
      questionsLocationID.appendChild(choice);
      choice.onclick = nextQuestion;
    };
    
  
}

function nextQuestion() {

  if(this.value !== questions[currentQuestionsIndex].answer) {
   count -= 15;
  }
  currentQuestionsIndex++;


  if(currentQuestionsIndex === questions.length) {
    return stopQuiz();
  } else {
    getQuestions();
  }

};

function stopQuiz() {
  
  var postGameScreenID = document.querySelector("#post-game-screen");
  postGameScreenID.removeAttribute("class");
  startScreenID.setAttribute("class", "hide");
  quizContentID.setAttribute("class", "hide");
  clearInterval();
}

startQuiz();




  
