
var starter = document.getElementById("starter");
var timerEl = document.getElementById("clock");
var questions = document.getElementById("questionsCard");
var score = document.getElementById("scoreCard");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var timeLeft = 90


var questionsList = [
  "1. Megan's real last name is...",
  "2. She was born in...",
  "3. Her mother was also a rapper under the name...",
  "4. In college she studied...",
  "5. Megan refers to her fans as...",
  "6. Megan's alter ego is..",
  "7. Which of these is not one of Megan's biggest influences:",
  "8. Megan's year of birth was...",
];


var answerList1 = [
  "A) Pete" == true, 
  "B) Jackson" == false,
  "C) Thee" == false,
  "D) Marino" == false,

]

var answerList2 = [
  "A) New York" == false,
  "B) Alabama" == false,
  "C) Texas" == true,
  "D) Ohio" == false,  

]

var answerList3 = [
  "A) MC Lyte" == false,
  "B) Lil Filly" == false,
  "C) Susie P" == false,
  "D) Holly Wood" == true,

]

var answerList4 = [
  "A) Musical Theater" == false,
  "B) Business and Finance" == false,
  "C) Health Administration" == true,
  "D) Hotel Management" == false,
  
]

var answerList5 = [
  "A) Thee Stable" == false,
  "B) Hotties" == true,
  "C) Studs" == false,
  "D) Meganites" == false,
  
]

var answerList6 = [
  "A) Tina Snow" == true,
  "B) Mercy Neaux" == false,
  "C) Jovon Truth" == false,
  "D) Boss Ratchet" == false,
  
]

var answerList7 = [
  "A) Beyonce" == false, 
  "B) Three 6 Mafia" == false,
  "C) Pimp C" == false,
  "D) Queen Latifah" == true,
  
]

var answerList8 = [
"A) 1996" == false,
"B) 1997" == false,
"C) 1995" == true,
"D) 1993" == false,

]

var answerGuide = [
  answerList1, 
  answerList2, 
  answerList3, 
  answerList4, 
  answerList5, 
  answerList6, 
  answerList7, 
  answerList8, 

]


function finalScore();{
  questionCard.textContent = timeLeft
  localStorage.setItem("score", timeLeft);
    

}

function correctAnswer(){

}

function wrongAnswer(){

}


function playGame(){
    
    option1.addEventListener("click", function(event) {
        if (event.currentTarget == true);{ 
          correctAnswer();
        }
        elseif (event.currentTarget == false);{
          (timeLeft - 5);
          wrongAnswer(); 
        }
    })

    option2.addEventListener("click", function(event) {
      if (event.currentTarget == true);{ 
        correctAnswer();
      }
      elseif (event.currentTarget == false);{
        (timeLeft - 5);
        wrongAnswer(); 
      }
  })

    option3.addEventListener("click", function(event) {
      if (event.currentTarget == true);{ 
        correctAnswer();
      }
      elseif (event.currentTarget == false);{
        (timeLeft - 5);
        wrongAnswer(); 
      }
  })

    option4.addEventListener("click", function(event) {
      if (event.currentTarget == true);{ 
        correctAnswer();
      }
      elseif (event.currentTarget == false);{
        (timeLeft - 5);
        wrongAnswer(); 
      }
  })



function startGame() {
  questionCard.textContent = questionList[0];
  option1.textContent = answersGuide[0, 0];
  option2.textContent = answersGuide[0, 1];
  option3.textContent = answersGuide[0, 2];
  option4.textContent = answersGuide[0, 3];
  i++
}


function readySet() {
  timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds left...";
    timeLeft--;
    
    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      finalScore();
    }   
  }, 1000);
}

starter.addEventListener("click", function(event) {

startGame();
readySet();
playGame();

})