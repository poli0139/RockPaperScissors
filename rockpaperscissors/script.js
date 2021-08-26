"use strict";
let winner;
let userChoice;
let computerChoice;
const user = document.querySelector("#player1");
const computer = document.querySelector("#player2");
window.addEventListener("DOMContentLoaded", start);

function start() {
  getPlayerChoice();
}

function getPlayerChoice() {
  document.querySelector(".rock").addEventListener("click", function () {
    userChoice = "rock";
    showAnimations();
  });
  document.querySelector(".paper").addEventListener("click", function () {
    userChoice = "paper";
    showAnimations();
  });
  document.querySelector(".scissors").addEventListener("click", function () {
    userChoice = "scissors";
    showAnimations();
  });
  showAnimations();
}

function makeRandomChoice() {
  var arr = ["rock", "paper", "scissors"];
  computerChoice = arr[Math.floor(Math.random() * arr.length)];
  showAnimations();
}
function shake() {
  user.classList.add("shake");
  computer.classList.add("shake");
}

function showAnimations() {
  document.querySelector("#button1").addEventListener("click", function () {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    shake();
    makeRandomChoice();
  });
  document.querySelector("#button2").addEventListener("click", function () {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    shake();
    makeRandomChoice();
  });
  document.querySelector("#button3").addEventListener("click", function () {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    shake();
    makeRandomChoice();
  });

  if (userChoice === "rock") {
    user.addEventListener("animationend", function () {
      user.classList.remove("shake");
      user.classList.remove("paper");
      user.classList.remove("scissors");
      user.classList.add("rock");
    });
  } else if (userChoice === "paper") {
    user.addEventListener("animationend", function () {
      user.classList.remove("shake");
      user.classList.remove("rock");
      user.classList.remove("scissors");
      user.classList.add("paper");
    });
  } else {
    user.addEventListener("animationend", function () {
      user.classList.remove("shake");
      user.classList.remove("rock");
      user.classList.remove("paper");
      user.classList.add("scissors");
    });
  }
  if (computerChoice === "rock") {
    computer.addEventListener("animationend", function () {
      computer.classList.remove("shake");
      computer.classList.remove("paper");
      computer.classList.remove("scissors");
      computer.classList.add("rock");
      determineWinner();
    });
  } else if (computerChoice === "paper") {
    computer.addEventListener("animationend", function () {
      computer.classList.remove("shake");
      computer.classList.remove("rock");
      computer.classList.remove("scissors");
      computer.classList.add("paper");
      determineWinner();
    });
  } else {
    computer.addEventListener("animationend", function () {
      computer.classList.remove("shake");
      computer.classList.remove("rock");
      computer.classList.remove("paper");
      computer.classList.add("scissors");
      determineWinner();
    });
  }
}

function determineWinner() {
  if (computerChoice === userChoice) {
    showDraw();
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    showWin();
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    showLose();
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    showLose();
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    showWin();
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    showLose();
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    showWin();
  }
}
function showWin() {
  document.querySelector("#win").classList.remove("hidden");
  start();
}
function showLose() {
  document.querySelector("#lose").classList.remove("hidden");
  start();
}
function showDraw() {
  document.querySelector("#draw").classList.remove("hidden");
  start();
}
