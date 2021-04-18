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