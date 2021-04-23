var endScores = JSON.parse(localStorage.getItem('scores'));
var resetHStn = document.getElementById('clear');
var tryAgainBtn = document.getElementById('tryAgain');

//creates new list items and places high scores and initials from local storage into said list. 
if (endScores === null){
}else{
for (let index = 0; index < endScores.length; index++) {
    var a = document.createElement('li');
    var b = document.createTextNode(`${index + 1}. ${endScores[index].playerInitials.toUpperCase()} - ${endScores[index].userScore}`);
    a.appendChild(b);
    document.querySelector('#playerList').appendChild(a);
    a.className += 'userList';
}}

//compares current score with new incoming score and sets
function betterThan(a,b){
    if (a.userScore < b.userScore){
        return 1;
    }
    if (a.userScore > b.userScore){
        return -1;
    }
    return 0;
}
//takes you back to homepage to take quiz again
if (tryAgainBtn === null){
}else{
tryAgainBtn.addEventListener('click', function(event){
    console.log(event)
    window.location.replace("./index.html")
})};
// resets the local storage, will display no old high scores
if(resetHStn === null){

}else{
resetHStn.addEventListener('click', function(){
    localStorage.clear();
    document.getElementById('playerList').innerHTML = ""
})};