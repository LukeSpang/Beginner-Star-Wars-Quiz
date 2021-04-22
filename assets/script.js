var container = document.getElementById('container');
var startButton = document.getElementById('startbutton');
var questionPosition = 0
var optionOneEl = document.getElementById('one')
var optionTwoEl = document.getElementById('two')
var optionThreeEl = document.getElementById('three')
var optionFourEl = document.getElementById('four')
//var nextbutton = document.getElementById('nextButton')
var timerEl = document.getElementById('timer');
var timerCount = 75;
var questionPrompt = document.getElementById('questionPrompt');
var finalScore = document.getElementById('finalScore');
var userScore = document.getElementById('userScore');
var optionBox = document.querySelector('.option');
var userAnswer = document.querySelectorAll('.option');
var answered = document.getElementById('answered');










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
        question: "What is the name of Anakin and Padme's son?",
        answers: 'Luke',
        choiceOne: 'Luke',
        choiceTwo: 'Leon',
        choiceThree: 'Jeff',
        choiceFour: 'Leah'
    },
    {
        question: "What color is Darth Vader's Lightsaber?",
        answers: 'Red',
        choiceOne: 'Red',
        choiceTwo: 'Green',
        choiceThree: 'Purple',
        choiceFour: 'White'
    },
    {
        question: "Someone says to you, General Kenobi! What do you say back?",
        answers: 'Hello there!',
        choiceOne: 'Hello there!',
        choiceTwo: 'Hey whats up?',
        choiceThree: 'Excuse me? That is not my name.',
        choiceFour: 'Howdy-do-bucakroo!'
    },
    
];
// start button function to begin the game, timer, and change display
startButton.addEventListener('click', function(event) { 
    console.log(event)
    document.getElementById("intro").hidden = true;
    document.getElementById("startbutton").hidden = true;
    container.removeAttribute('hidden');
    setTimer();
    question();
});

for (var index = 0; index < questions.length; index++) {
    userAnswer[index].addEventListener('click', function(){
        var selections = event.target
        var picked = selections.dataset.choices
        if (questions[questionPosition][picked] == questions[questionPosition].answers){
            console.log('correct answer')
            answered.textContent = "Nice work! That is right!";
        } else {
            timerCount = timerCount - 5;
            answered.textContent = "That's wrong! Better watch some more Star Wars!"
            console.log('this is getting hit')
        }
        questionPosition++;
        question();
    })
    
}


// Timer at the top of the page function
function setTimer() {
    var timerElement = setInterval(function(){
        timerCount--;
        timerEl.textContent = 'Time: ' + timerCount;
        if(timerCount === 0 || questionPosition === 4) {
            clearInterval(timerElement);
        }

    }, 1000);
}

//circle through the questions array

function question(){
    if (questionPosition < 4) {
        questionPrompt.textContent = questions[questionPosition].question;
        optionOneEl.textContent = questions[questionPosition].choiceOne;
        optionTwoEl.textContent = questions[questionPosition].choiceTwo;
        optionThreeEl.textContent = questions[questionPosition].choiceThree;
        optionFourEl.textContent = questions[questionPosition].choiceFour;
    } else{
        container.setAttribute('hidden', true);
        finalScore.removeAttribute('hidden');
        questionPrompt.textContent = "Quiz Complete";
        userScore.textContent = timerCount;
        document.getElementById('submit-form').style.display="inline-flex";

        
    }
}