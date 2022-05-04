let btnRoll = document.querySelector(".btn-roll");
let diceFace = [
  "dé-0.png",
  "dé-1.png",
  "dé-2.png",
  "dé-3.png",
  "dé-4.png",
  "dé-5.png",
  "dé-6.png",
];
diceFace[0] = diceFace[1];

/* a chaque fois que je clqiue sur le bouton roll l'image du dé change aleatoirement */
/* fonction math*/
/* changer l'img*/

btnRoll.addEventListener("click", function () {
  let diceChange = Math.floor(Math.random() * diceFace.length);
  console.log(diceChange); /** change les nombre et le dé 4 */
  document.querySelector(".dice").setAttribute("src", diceFace[diceChange ]);
});
