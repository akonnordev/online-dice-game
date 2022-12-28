"use strict";
let image = [
  "images/dice 1.png",
  "images/dice 2.png",
  "images/dice 3.png",
  "images/dice 4.png",
  "images/dice 5.png",
  "images/dice 6.png",
];
const d = new Date();

document.querySelector(".roll-dice").addEventListener("click", function () {
  const firstdiceValue = Math.floor(Math.random() * 6);
  const SeconddiceValue = Math.floor(Math.random() * 6);
  document.querySelector("#img1").setAttribute("src", image[firstdiceValue]);
  document.querySelector("#img2").setAttribute("src", image[SeconddiceValue]);
  let total = firstdiceValue + 1 + (SeconddiceValue + 1);
  document.querySelector(
    ".score"
  ).innerHTML = ` Your total score is now ${total}`;
});
