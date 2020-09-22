

var timerEl1 = document.getElementById("countdown");
var timerEl2 = document.getElementById("clock");
var timeLeft = 90
var scoreCard = 0

function finalScore();{


}

function playGame(); {
    
    
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
