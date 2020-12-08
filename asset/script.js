//get all elements
var question=document.querySelector(".question");
var answerA= document.querySelector("#A");
var answerB= document.querySelector("#B");
var answerC= document.querySelector("#C");
var answerD= document.querySelector("#D");
var timer   = document.querySelector(".timerBox");
var scores = document.querySelector(".scoreBox");
var box = document.querySelector(".box");
var box1= document.querySelector("#resultScreen");
var finalScore = document.querySelector(".finalScore");
var initial = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var highScores = [];
var timeInterval;

//  to store and retrieve arrays in/from local storage
if (JSON.parse(localStorage.getItem('scores')) !== null) {
    highScores = JSON.parse(localStorage.getItem("scores"));
}

//create a array containing objects (Q/A)

var questionData = [

    {
        question: " What does COVID-19 stand for? ",
        answerA: "It's the 19th strain of coronavirus discovered.",
        answerB: "It's a term that stands for Coronavirus Disease 2019.",
        answerC: "It's a common flue",
        answerD: "None of above",
        correct: "A",
    },

    {
        question: "What other viruses belong to the coronavirus family?",
        answerA: "SARS and influenza",
        answerB: "SARS and MERS",
        answerC: "SARS-COV-2",
        answerD: "MERS-COV-2",
        correct: "C",

    },

    {
        question: "Which of the following are common signs and symptoms of COVID-19?",
        answerA: "Muscle pain (myalgia)",
        answerB:"Fever",
        answerC: "Sore throat",
        answerD: "All of above",
        correct: "D",
    },

    {
        question:"There are currently vaccines for the following coronaviruses:",
        answerA: "SARS",
        answerB: "MERS",
        answerC: "SARS and MERS",
        answerD: "None of the above",
        correct: "C",

    },
    {
        question: "How many vaccine candidates for COVID-19 have been proposed?",
        answerA: "25",
        answerB: "100",
        answerC: "120+",
        answerD: "75",
        correct:  "A",
    }
];


var timeLeft = 60;

// function to start the quiz
function quiz() {

    givenQuestion(); // function to generate the questions

    var min = 0;
    var sec = 0;
    var counter = 0;
    // function to set the timer
    timeInterval = setInterval(function() {
        counter++;
        min= Math.floor((timeLeft-counter)/60);
        sec= timeLeft - min*60 - counter;
       
    
    //update HTML 
        timer.textContent = 'Time Left:' + min +":"+ sec;
    
        if(timeLeft<=0 || min==0 && sec==0) {
           
           result(); 
        }
      }, 1000); // set 1 second interval //
    };

 // set index question i = 0 & revoke the function to display first question// 
//Generate the first question from the array

var i = 0; // index of the first question//
var lastQuestion = questionData.length-1; // index of the last question//


// create a function that render a given question
function givenQuestion(){
   
    
    var quest = questionData[i] ; //access to properties of questionData array to get the first question with index i=0//
   
    //update HTML 
    question.innerHTML = "<h2>"+ quest.question + "</h2>";
    answerA.innerHTML = "<span>" + quest.answerA + "</span>";
    answerB.innerHTML = "<span>" + quest.answerB + "</span>";
    answerC.innerHTML = "<span>" + quest.answerC + "</span>";
    answerD.innerHTML = "<span>" + quest.answerD + "</span>";
}

/*function runningQuestion(){
    for (var index=0; index<= questionData.length; index++){

    }
}*/

// function to check the answers
var score = 0; // set score = 0;
function check(answer){
// access to the property "correct" to get the answers
    var cAnswer = questionData[i].correct;
if (answer == cAnswer && i !== lastQuestion){
    score+=10;  // score +10 if the answer is correct
    scores.textContent = "score: " + score ;
    i++; // generate the next question
    givenQuestion();
}
else if 
    (answer !== cAnswer && i !== lastQuestion ){
        timeLeft -= 20; //time -20 seconds if the answer is incorrect
        score -= 10; //score -10 if the answer incorrect
        scores.textContent = "score: " + score ; // update score
        i++;
        givenQuestion();
    }

    
    else if (answer == cAnswer && i == lastQuestion){
        score+=10;  // score +10 if the answer is correct
        result();
    }
    
    else {
        score-=10;
        result();
    }
        // end the quiz and show the score
       
}

function result(){
   
    box.style.display= "none";
    box1.style.display = "block";
    finalScore.innerHTML = "Your Final Score is : "  +  score;
    
    }

submit.addEventListener("click",function saveScore(){

// function for saving highscore

   // create an object to store name & score
    var newHighScore = {
        userName: initial.value,
        highScore: score
    };
    console.log(newHighScore);
    highScores.push(newHighScore); // push the object to the empty array (highScores)
    console.log(highScores); 
    localStorage.setItem("scores",JSON.stringify(highScores));
    
});





/*function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newName = document.createElement("li");
        var newScore = document.createElement("li");
        newName.textContent = highscores[i].initials;
        newScore.textContent = highscores[i].highscore;
        highscores.appendChild(newName);
        highscores.appendChild(newScore);
    }*/
    





quiz();

