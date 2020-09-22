

var timerEl1 = document.getElementById("countdown");
var timerEl2 = document.getElementById("clock");
var boxes = document.getElementById("boxes");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var timeLeft = 90
var scoreCard = 0
var answer = ["a", "c", "d", "d", "b", "a", "d", "b", "b", "c"];
function finalScore();{


}

function playGame(); {
    
    option1.addEventListener("click", function() {
        if (answers[0] == "a" || ){
        count++;
        option1.setAttribute("correct");
        }
        else (timeLeft - 5);{  
        option1.setAttribute("wrong");
        }
      });

      option2.addEventListener("click", function() {
        if (answers[0] == "a"){
        count++;
        option2.setAttribute("correct");
        }
        else (timeLeft - 5);{  
        option2.setAttribute("wrong");
        }
      });

      option3.addEventListener("click", function() {
        if (answers[0] == "a"){
        count++;
        option3.setAttribute("correct");
        }
        else (timeLeft - 5);{  
        option3.setAttribute("wrong");
        }
      });

      option4.addEventListener("click", function() {
        if (answers[0] == "a"){
        count++;
        option4.setAttribute("correct");
        }
        else (timeLeft - 5);{  
        option4.setAttribute("wrong");
        }
      });


}

function gameClock();{
    var timeInterval = setInterval(function() {
        timerEl2.textContent = timeLeft + " remaining!!";
        timeLeft--;
    
        if (timeLeft === 0) {
          timerEl.textContent = "";
          clearInterval(timeInterval);
          finalScore();
        }

        else playGame();
    
    }, 1000);

}


function readySet() {
    var timeLeft = 7;
  
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds until Quiz starts";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        gameClock();
      }

    }, 1000); 
  }

  readySet();
