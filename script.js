var start = document.getElementById("start");
var startButton = document.getElementById("startButton");
var questionArea = document.getElementById("questionArea");
var question = document.getElementById("question");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var scoreChart = document.getElementById("scoreChart");
var score = document.getElementById("score");
var player = document.getElementById("player");
var nameEnter = document.getElementById("nameEnter");
var highScore = document.getElementById("highScore");
var highScorers = document.getElementById("highScorers");
var back = document.getElementById("back");
var highScores = document.getElementById("highScores");
var timerEl = document.getElementById("timerEl");
var checkAnswers = document.getElementById("checkAnswers");


var timeLeft = 90;
var secondsLeft;
var timer;
var scoreCount = 0;
var currentIndex = 0;

var questionText = [
{ 
    question: "What is Megan's real last name?",

    A:"Pete", 
    B:"Jackson", 
    C:"Thee", 
    D:"Marino", 
    correct: "A"

},
{
    question:"In what state was she born?",

    A:"New York",
    B:"Alabama",
    C:"Texas",
    D:"Ohio", 
    correct: "C"
},
{
    question: "Her mother was also a rapper under the name...?",

    A:"MC Lyte", 
    B:"Lil Filly", 
    C:"Susie P", 
    D:"Hollywood", 
    correct: "C"
},
{
    question: "What did she study in college?",

     A:"Drama/Musical Theater",
     B:"Business and Finance", 
     C:"Health Administration", 
     D:"Hotel Management", 
     correct: "C"
},
{
    question: "Megan refers to her fans as...?",

     A:"Thee Stable",
     B:"Hotties", 
     C:"Studs", 
     D:"Meganites", 
     correct: "B"
},
{
    question: "Megan's alter ego is...?",

     A:"Tina Snow",
     B:"Mercy Neaux", 
     C:"Jovon Truth", 
     D:"Boss Ratchet", 
     correct: "A"
},
{
    question: "Which of these is NOT one of Megan's biggest influences?",

     A:"Beyonce",
     B:"Three 6 Mafia", 
     C:"Pimp C", 
     D:"Queen Latifah", 
     correct: "D"
},
{
    question: "Megan was born in...?",

     A:"1996",
     B:"1997", 
     C:"1995", 
     D:"1993", 
     correct: "C"
}



];


questionArea.style.display = "none"
scoreChart.style.display = "none"
highScore.style.display = "none"


function setSecondsLeft(seconds) {
    secondsLeft = seconds;
    timerEl.textContent = secondsLeft;
}

function startTimer() {
    setSecondsLeft(timeLeft);
    timer = setInterval(function() {
        setSecondsLeft(secondsLeft-1);
        if (secondsLeft < 0) {
            timerEl.textContent = "0";
            clearInterval(timer);
            alert("Game Over");
            finishQuiz();
        }
    }, 1000);
}


function startQuiz(){
    promptQuestion();
    startTimer();
   
}

function promptQuestion(){
    questionArea.style.display = "block";
    start.style.display = "none";
    var currentQ = questionText[currentIndex];
    question.textContent = currentQ.question;
    A.textContent = currentQ.A;
    B.textContent = currentQ.B;
    C.textContent = currentQ.C;
    D.textContent = currentQ.D;
}


function answerOnClick(answerId) {
    return function(event){
        if (questionText[currentIndex].correct === answerId) {
            scoreCount = scoreCount + 1;
            checkAnswers.textContent = "You got that right, gurl!";
    
        } 
        else {
            setSecondsLeft(secondsLeft - 5);
            checkAnswers.textContent = "Nuh uh, that's wrong, baby!";
        }

        currentIndex++;
        if (currentIndex < questionText.length) {
            promptQuestion();
        } 
        else {
            finishQuiz();
        }
    }
}


function finishQuiz() {
    clearInterval(timer);
    timerEl.textContent = "0";
    checkAnswers.textContent = " ";
    showScore();
}


function showScore(){
    questionArea.style.display = "none";
    scoreChart.style.display = "block";
    score.textContent = scoreCount;
}


function storeName(event){
    event.preventDefault();
    var nameInput = player.value
    if (nameInput !== ""){
        var nameScore = nameInput + " - " + scoreCount;
        localStorage.setItem("name-score", nameScore);
        player.value = "";
        showHighScores();
    } 
    else {
        alert("Please enter your initials")
    }
}


function showHighScores(){
    scoreChart.style.display = "none";
    highScore.style.display = "block";
    nameScore = localStorage.getItem("name-score");
    var listEl = document.createElement("p");
    listEl.textContent = nameScore;
    highScorers.appendChild(listEl);

}


function goBackPage(){
    questionArea.style.display = "none";
    scoreChart.style.display = "none";
    highScore.style.display = "none";
    start.style.display = "block";
    checkAnswers.textContent = " ";
    setSecondsLeft(0);
    scoreCount = 0;
    currentIndex = 0;
}



function viewScores(){
    start.style.display = "none";
    questionArea.style.display = "none";
    scoreChart.style.display = "none";
    highScore.style.display = "block";
    clearInterval(timer);
    setSecondsLeft(0);
}


// event listeners 
startButton.addEventListener("click", startQuiz);
A.addEventListener("click", answerOnClick("A"));
B.addEventListener("click", answerOnClick("B"));
C.addEventListener("click", answerOnClick("C"));
D.addEventListener("click", answerOnClick("D"));
nameEnter.addEventListener("click", storeName);
back.addEventListener("click", goBackPage);
highScores.addEventListener("click", viewScores);