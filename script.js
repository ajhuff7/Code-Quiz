
var starter = document.getElementById("starter");
var timerEl = document.getElementById("clock");
var questions = document.getElementById("questionsCard");
var score = document.getElementById("scoreCard");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var timeLeft = 90


let questions = [
  {
      title: "1. Megan's real last name is...",
      choices: ["A) Pete ", "B) Jackson", "C) Thee", "D) Marino"],
      answer: "A) Pete",
  },
  {
      title: "2. She was born in...",
      choices: ["A) New York", "B) Alabama", "C) Texas", "D) Ohio"],
      answer: "C) Texas",
  },
  {
      title: "3. Her mother was also a rapper under the name...",
      choices: ["A) MC Lyte", "B) Lil Filly", "C) Susie P", "D) Holly Wood"],
      answer: "D) Holly Wood",
  },
  {
      title: "4. In college she studied...",
      choices: ["A) Musical Theater", "B) Business and Finance", "C) Health Administration", "D) Hotel Management"],
      answer: "C) Health Administration",
  },
{
      title: "5. Megan refers to her fans as...",
      choices: ["A) Thee Stable", "B) Hotties", "C) Studs", "D) Meganites"],
      answer: "B) Hotties",
  },
  {
      title: "6. Megan's alter ego is..",
      choices: ["A) Tina Snow", "B) Mercy Neaux", "C) Jovon Truth", "D) Boss Ratchet"],
      answer: "A) Tina Snow",
  },

{
      title: "7. Which of these is not one of Megan's biggest influences:",
      choices: ["A) Beyonce", "B) Three 6 Mafia", "C) Pimp C", "D) Queen Latifah"],
      answer: "D) Queen Latifah",
  },
  {
      title: "8. Megan's year of birth was...",
      choices: ["A) 1996", "B) 1997", "C) 1995", "D) 1993"],
      answer: "C) 1995",
  },

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