
let start = document.querySelector("#start")
let timerEl = document.getElementById("clock");
let questions = document.getElementById("questionsCard");
let boxes = document.getElementById("answersBox");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");


let timeLeft = 90
let currentQuestion = 0


let questionsAnswers = [
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



/*functions*/
function showCurrentQuestion() {
  questions.textContent =  questionsAnswers[currentQuestion].title
  option1.textContent = questionsAnswers[currentQuestion].choices[0]
  option2.textContent = questionsAnswers[currentQuestion].choices[1]
  option3.textContent = questionsAnswers[currentQuestion].choices[2]
  option4.textContent = questionsAnswers[currentQuestion].choices[3]
  console.log(questionsAnswers[currentQuestion].title)
}

/*functions*/
function checkFinished() {
  //check to see if done
  if (currentQuestion === 8) return true
  return false
}

function finish() {
  console.log("Game Over!")
  questions.textContent.display = "none"
  document.body.textContent = "Game Over!"
  clearInterval(timeInterval);
  questions.textContent = timeLeft
  localStorage.setItem("Hi-Score", timeLeft);
}

/*event listeners*/

//when user clicks anywhere in answers box
boxes.addEventListener("click", function (event) {
  //check that user clicked on button
  if (event.target.tagName === "BUTTON") {
      //show correct / incorrect answer
      console.log("Answer: " + (event.target.textContent === questionsAnswers[currentQuestion].answer))
      console.log("\n")

      //increase question counter
      currentQuestion++

      //go to next question or done
      let finished = checkFinished()
      if (finished) finish()
      else showCurrentQuestion()
  }
})

start.addEventListener("click", function (event) {
  start.style.display = "none"
  questions.style.display = "block"
  timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds left...";
    timeLeft--;
    
    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      finish();
    }   
  }, 1000);

  //show first question
  showCurrentQuestion()
})

/*entry point*/
questions.style.display = "none"
