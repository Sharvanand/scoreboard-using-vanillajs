var resetDisplay = document.querySelector(".reset");
var buttonP1 = document.querySelector(".playerone");
var buttonP2 = document.querySelector(".playertwo");
var display1 = document.querySelector(".score1");
var display2 = document.querySelector(".score2 ");
var scoreboard1 = 0;
var scoreboard2 = 0;
var finalScore = 5;
var gameOver = false;
buttonP1.addEventListener("click", function() {
  if (!gameOver) {
    scoreboard1++;
    if (scoreboard1 === finalScore) {
      display1.classList.add("winner");
      gameOver = true;
    }
    display1.textContent = scoreboard1;
  }
});

buttonP2.addEventListener("click", function() {
  if (!gameOver) {
    scoreboard2++;
    if (scoreboard2 === finalScore) {
      display2.classList.add("winner");
      gameOver = true;
    }
    display2.textContent = scoreboard2;
  }
});

resetDisplay.addEventListener("click", function() {
  scoreboard2 = 0;
  scoreboard1 = 0;
  display1.textContent = 0;
  display2.textContent = 0;
  display1.classList.remove("winner");
  display2.classList.remove("winner");
  gameOver = false;
});
