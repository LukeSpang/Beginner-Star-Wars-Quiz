var playerList = document.getElementById('playerList');

var userScore = localStorage.getItem('userScore');
var initials = localStorage.getItem('initials'.trim);

    document.getElementById('playerList').textContent = initials + userScore;
   