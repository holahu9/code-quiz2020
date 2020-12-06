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

if (JSON.parse(localStorage.getItem('scores')) !== null) {
    highScores = JSON.parse(localStorage.getItem("scores"));
}



var questionData = [

    {
        question: " What does COVID-19 stand for? ",
        answerA: "It's a term for Coronavirus Disease 19, because it's the 19th strain of coronavirus discovered.",
        answerB: "It's a term that stands for Coronavirus Disease 2019, the year it was first identified.",
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

// function to set the timer
function quiz() {


var timeLeft = 90;
var min = 0;
var sec = 0;
var counter = 0;
var timeInterval = setInterval(function() {
    counter++;
    min= Math.floor((timeLeft-counter)/60);
    sec= timeLeft - min*60 - counter;
   

//update HTML 
    timer.textContent = "Time Left: " + min +":"+ sec;

    if(timeLeft <= 0) {
      
       resultRender(); 
    }
  }, 1000); // set 1 second interval //

  // function for saving highscore
  function saveScore() {
   
    var newHighScore = {
        initials: initial.value,
        highScore: score
    };
    console.log(newHighScore);
    highScores.push(newHighScore);
    console.log(highScores);
    localStorage.setItem("scores",JSON.stringify(highScores));
}
submit.addEventListener("click",saveScore);

givenQuestion();
};
 

  
//Generate the first question from the array

var i = 0; // index of the first question//
var lastQuestion = questionData.length-1; // index of the last question//

// create a function that render a given question
function givenQuestion(){
    var quest = questionData[i] ; //access to questionData array to get the first question with index i=0//

    //update HTML 
    question.innerHTML = "<h2>" + quest.question + "</h2>";
    answerA.innerHTML = "<span>" + quest.answerA + "</span>";
    answerB.innerHTML = "<span>" + quest.answerB + "</span>";
    answerC.innerHTML = "<span>" + quest.answerC + "</span>";
    answerD.innerHTML = "<span>" + quest.answerD + "</span>";
}

givenQuestion();

// set index question =0 & revoke the function to display first question//

function runningQuestion(){
    for (var index=0; index<= questionData.length; index++){

    }
}


var score = 0;
function check(answer){
    
    var cAnswer = questionData[i].correct;
if (answer == cAnswer && i < lastQuestion){
    score+=10;
    scores.textContent = "score: " + score ;
    i++;
    givenQuestion();

}

else if 
    (answer !== cAnswer && i < lastQuestion){
        score -= 10;
        scores.textContent = "score: " + score ;
        i++;
        givenQuestion();
    }

    
    else{ resultRender();
        box.style.display = "none"
        // end the quiz and show the score
       
        
    }
}



function resultRender(){
   
    box.style.display= "none";
    box1.style.display = "block";
    finalScore.innerHTML = "Your Final Score is : "  +  score;
    
    }
quiz();

