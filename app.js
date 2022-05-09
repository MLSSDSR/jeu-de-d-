const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");
const btnNew = document.querySelector(".btn-new");
const diceFace = [
  "dé-1.png",
  "dé-2.png",
  "dé-3.png",
  "dé-4.png",
  "dé-5.png",
  "dé-6.png",
];

let roundScore, activePlayer, gamePlaying;
// annonce des variables

init();
btnRoll.addEventListener("click", function () {
  let diceValue = Math.floor(Math.random() * diceFace.length + 1);
  /*document.querySelector(".dice").setAttribute("src", diceFace[diceValue - 1]);
   */
  let diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dé-" + diceValue + ".png";

  if (diceValue !== 1) {
    roundScore += diceValue;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

btnHold.addEventListener("click", function () {
  if (gamePlaying) {
    // addition des scores
    scores[activePlayer] += roundScore;

    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    

    //gagnant
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";

      //cacher le dé
      document.querySelector(".dice").style.display = "none";

      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");

      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

      //fin de la partie
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
// jouer suivant
function nextPlayer() {
  activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);

  roundScore = 0;

  document.getElementById("current-1").textContent = "0";
  document.getElementById("current-2").textContent = "0";

  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".player-2-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}


// initialisation du jeu 
function init() {
  // jeu en cours 
  gamePlaying = true;

  
  scores = [0, 0];

  // joueur par défaut
  activePlayer = 1;

  // score à 0
  roundScore = 0;

  
  document.querySelector(".dice").style.display = "none";

  // score à 0
  document.getElementById("score-1").textContent = "0";
  document.getElementById("score-2").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("current-2").textContent = "0";

  
  document.getElementById("name-1").textContent = "Player 1";
  document.getElementById("name-2").textContent = "Player 2";
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-2-panel").classList.remove("winner");


  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-2-panel").classList.remove("active");

 
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-2-panel").classList.add("active");
}

