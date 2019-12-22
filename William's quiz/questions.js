const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer")




var
var questions = [
  {
    question: "What is a computer?",
    
  ChoiceA:"Some machine that has transistors",
  ChoiceB:"Something I feel like throwing at a wall",
  ChoiceC:"anything with a screen ",
  correct:"A && B"  
},
  {
    
    question = [ "JavaScript is awesome.",
  choiceA:"Why!!! God!!"
  choiceB:"ok"
  ChoiceC:"No it's horrible"
  correct:"A"
  
}
  { 
  question: "What is twelve + 15 ",
 
ChoiceA:"27",
ChoiceB:"It's over 9000",
ChoiceC:"12",
correct:"A"
   }
  {
   question: "what does 2+2=",
   choicesA: "12"
    choiceB: "4"
    choiceC:"5"
  }  
   {question: ""

  }
];
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer  10);
      seconds = parseInt(timer % 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var tenSeconds = 10,
      display = document.querySelector('time');
  startTimer(tenSeconds, display);
};



}