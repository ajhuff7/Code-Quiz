

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
