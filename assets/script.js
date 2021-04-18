var quizContainer = document.getElementById('quiz');
var button = document.getElementById('startbutton');
var timerElement = document.getElementById('timer');
var timerCount = 5;



function startTimer(){
   var timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = 'Time: '+ timerCount;

        if(timerCount === 0){
            clearInterval(timer);
        }
    }, 1000)
}
button.addEventListener("click",startTimer);

var questions = [
    {
        ques: "What is the name of the first Star Wars movie released in 1977?",
        options: ['A New Hope', "Empire Strikes Back", "Revenge of the Sith", "Attack of the Clones"],
        answer: "A New Hope"
    },
    {
        ques: "What is the name of the first Star Wars movie released in 1977?",
        options: ['A New Hope', "Empire Strikes Back", "Revenge of the Sith", "Attack of the Clones"],
        answer: "A New Hope"
    },
    {
        ques: "What is the name of the first Star Wars movie released in 1977?",
        options: ['A New Hope', "Empire Strikes Back", "Revenge of the Sith", "Attack of the Clones"],
        answer: "A New Hope"
    },
    {
        ques: "What is the name of the first Star Wars movie released in 1977?",
        options: ['A New Hope', "Empire Strikes Back", "Revenge of the Sith", "Attack of the Clones"],
        answer: "A New Hope"
    },
];

var score = 0;
var questionPosition = 0;

var questionDiv = document.getElementById("quiz");
var quizQuestions = document.getElementById("ques");
var quizAnswers = document.getElementById("options")
