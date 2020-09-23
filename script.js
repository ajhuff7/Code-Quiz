

var timerEl = document.getElementById("clock");
var boxes = document.getElementById("boxes");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var timeLeft = 90
var scoreCard = 0
var answerKey = ["a", "c", "d", "d", "b", "a", "d", "b", "b", "c"];
var playerAnswers = [];
var playersChoice = [
    option1 = "a",
    option2 = "b", 
    option3 = "c",
    option4 = "d"
];

// function finalScore();{


  // localStorage.setItem("count", count);
    
// }

function playGame(){
    



    boxes.addEventListener("click", function(event) {
        for (var i = 0; i < playerAnswers.length; i++);{
        playerAnswers.push("playersChoice")
        }

        if (playerAnswers[0] === answerKey[0]){
            scoreCard++;
            event.currentTarget.setAttribute(
                "background-color: green"
              );
        }
        else (timeLeft - 5);{ 
            event.currentTarget.setAttribute(
                "background-color: red"
              );
        }
    });

}

function readySet(){
  starter.addEventListener("click", function(event) {
    
    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft + " seconds left...";
        timeLeft--;
    
        if (timeLeft === 0) {
          timerEl.textContent = "";
          clearInterval(timeInterval);
          finalScore();
        }
        
        else playGame();
      }, 1000);
    });
  }

  readySet();



  function renderTodos() {
    // Clear todoList element and update todoCountSpan
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
  
    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
  
      var li = document.createElement("li");
      li.textContent = todo;
      todoList.appendChild(li);




      
// user clicks start game
// question & answer buttons are loaded on the page
// timer starts
// user clicks on a button
// check the answer to see if it's correct or incorrect
// do some work based on the outcome of #5
// check if there's another question to load
// go back to step 2 if there are more questions
// no more questions? do the end game sequence
// load input form for user to enter name
// user submits name
// save user name and score to localstorage


i'll have the question stored somewhere in code using an array, or object, or many variables
i'll associate the answers to that question by linking array indexes, or object key/value pairs, or MANY MANY variables
i'll write a function that does this work
in this function i'll include something to track the current question so i can use this function again for upcoming questions

create an event listener for the buttons
in it, i'll compare the selected answer to the correct answer for the question
determine some course of action depending on the answer
change the current question to the next
run the function i made for rendering questions/answers onto the page
etc

