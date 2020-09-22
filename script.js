

var timerEl1 = document.getElementById("countdown");
var timerEl2 = document.getElementById("clock");


function finalScore();{


}


function playGame(); {
    var timeLeft = 90;
    
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " remaining!!";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        finalScore();
      }

      else 
  
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
        playGame();
      }

    }, 1000); 
  }

  readySet();
