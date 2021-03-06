var container = document.getElementById('container');
var startButton = document.getElementById('startbutton');
var homeimg = document.getElementById('homeimg')
var questionPosition = 0
var optionOneEl = document.getElementById('one')
var optionTwoEl = document.getElementById('two')
var optionThreeEl = document.getElementById('three')
var optionFourEl = document.getElementById('four')
var timerEl = document.getElementById('timer');
var timerCount = 75;
var questionPrompt = document.getElementById('questionPrompt');
var finalScore = document.getElementById('finalScore');
var userScore = document.getElementById('userScore');
var userAnswer = document.querySelectorAll('.option');
var answered = document.getElementById('answered');
var correctSE = new Audio('./assets/audio/correctSE.mp3');
var incorrectSE = new Audio('./assets/audio/incorrectSE.mp3');

var submitBtn = document.getElementById('submit');
var localScores = []










//question array
var questions = [
    {
        question: "What is the name of the first Star Wars movie released in 1977?",
        answer: 'OptionOne',
        choiceOne: 'A New Hope',
        choiceTwo: 'Empire Strikes Back',
        choiceThree: 'Revenge of the Sith',
        choiceFour: 'Attack of the Clones'
    },
    {
        question: "What is the name of Anakin and Padme's son?",
        answer: 'OptionOne',
        choiceOne: 'Luke',
        choiceTwo: 'Leon',
        choiceThree: 'Jeff',
        choiceFour: 'Leah'
    },
    {
        question: "What color is Darth Vader's Lightsaber?",
        answer: 'OptionOne',
        choiceOne: 'Red',
        choiceTwo: 'Green',
        choiceThree: 'Purple',
        choiceFour: 'White'
    },
    {
        question: "Someone says to you, General Kenobi! What do you say back?",
        answer: 'OptionOne',
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
    document.getElementById('homeimg').style.display = "none"
    container.removeAttribute('hidden');
    setTimer();
    question();
});



for (var index = 0; index < questions.length; index++) {
    userAnswer[index].addEventListener('click', function(event){
        var selections = event.target
        var picked = selections.dataset.choices.toString()
        var answer = questions[questionPosition].answer
        if  (picked == answer){
            console.log('correct answer')
            answered.textContent = "Nice work! That is right!";
            console.log(answer)
            incorrectSE.pause();
            correctSE.play();
            timerCount = timerCount + 10
        } else {
            timerCount = timerCount - 5;
            answered.textContent = "That's wrong! Better watch some more Star Wars!"
            console.log('this is getting hit')
            console.log(answer)
            console.log(picked)
            correctSE.pause();
            incorrectSE.play();
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
        answered.setAttribute('hidden', true);

        
    }
}

//commits user initials and high score to local storage, to be pulled on socre.js
function localStorageScores(){
    var initials = document.getElementById('initials').value;
    console.log(initials);

    var checkLocal = JSON.parse(localStorage.getItem('scores'));
    if (timerCount < 0){
        timerCount = 0;
    }
    if (checkLocal === null){
        localScores = [{
            playerInitials: initials.trim(),
            userScore: timerCount
        }]
    } else {
        localScores = checkLocal.concat([{
            playerInitials: initials.trim(),
            userScore: timerCount}])
    }
    console.log(localScores)
    localStorage.setItem("scores", JSON.stringify(localScores));
}

//submit button, submits information from localstoragescores
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    localStorageScores();
    //alert comes up to check high scores
    alert('Check to see if you made the high scores!')
    })

