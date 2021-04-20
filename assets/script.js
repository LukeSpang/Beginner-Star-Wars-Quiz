var container = document.getElementById('container');
var startButton = document.getElementById('startbutton');
var questionPosition = 0
var optionOneEl = document.getElementById('one')
var optionTwoEl = document.getElementById('two')
var optionThreeEl = document.getElementById('three')
var optionFourEl = document.getElementById('four')
//var questionContainerElement = document.getElementById('questioncontainer');
var nextbutton = document.getElementById('nextButton')
//var timerElement = document.getElementById('timer');
var timerCount = 75;
//var mixQuestions
//var currentIndex
//let questionElement = document.getElementById('question')
//let answerElement = document.getElementById('selections')

var optionBox = document.querySelector('.option');










var questions = [
    {
        question: "What is the name of the first Star Wars movie released in 1977?",
        answers: 'A New Hope',
        choiceOne: 'A New Hope',
        choiceTwo: 'Empire Strikes Back',
        choiceThree: 'Revenge of the Sith',
        choiceFour: 'Attack of the Clones'
    },
    {
        question: "What is the name of the first Star Wars movie released in 1977?",
        answers: 'A New Hope',
        choiceOne: 'A New Hope',
        choiceTwo: 'Empire Strikes Back',
        choiceThree: 'Revenge of the Sith',
        choiceFour: 'Attack of the Clones'
    },
    {
        question: "What is the name of the first Star Wars movie released in 1977?",
        answers: 'A New Hope',
        choiceOne: 'A New Hope',
        choiceTwo: 'Empire Strikes Back',
        choiceThree: 'Revenge of the Sith',
        choiceFour: 'Attack of the Clones'
    },
    {
        question: "What is the name of the first Star Wars movie released in 1977?",
        answers: 'A New Hope',
        choiceOne: 'A New Hope',
        choiceTwo: 'Empire Strikes Back',
        choiceThree: 'Revenge of the Sith',
        choiceFour: 'Attack of the Clones'
    },
    
];

startButton.addEventListener('click', function(event) { 
    console.log(event)
    document.getElementById("intro").hidden = true;
    document.getElementById("startbutton").hidden = true;
    container.removeAttribute('hidden');
    //startTimer();
    //question();
});

optionBox[0].addEventListener('click',function(){
    console.log('option one clicked');
    if (questions[questionPosition].OptionOne == qustions[questionPosition].answers) 
    console.log('correct answer');  
})



function setTimer(){

}