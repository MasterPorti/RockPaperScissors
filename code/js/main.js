const selectionContainer = document.getElementById("selection");
const resultContainer = document.getElementById("result");
const containerComputer = document.getElementById("containerComputer");
const yourTitle = document.getElementById("yourTitle");
const circleEmpty = document.getElementById("circleEmpty");
const paperComputer = document.getElementById("paperComputer");
const scissorComputer = document.getElementById("scissorComputer");
const rockComputer = document.getElementById("rockComputer");
const refresh = document.getElementById("refresh");
const win = document.getElementById("win");
const lost = document.getElementById("lost");
const draw = document.getElementById("draw");
const scoreContainer = document.getElementById("score");

let end = 3;
let start = 1;
const computer = Math.floor(Math.random() * (end - start + 1)) + start;
let itemComputer;
let itemUser;
let result;
let selected;
let sci;

let score = localStorage.getItem("score");

if (score == null) {
  score = 0;
}

scoreContainer.innerHTML = score;
function ocular() {
  selectionContainer.classList.add("hide");
}

function selection(item) {
  ocular();
  itemUser = item;
  selected = item + "disable";
  const selectedItem = document.getElementById(selected);
  selectedItem.classList.remove("hide");
  setTimeout(() => {
    selectedItem.classList.remove("animation");
  }, 1);
  resultContainer.classList.remove("hide");
  resultContainer.classList.add("visibility");
  containerComputer.classList.remove("hide");
  yourTitle.classList.remove("hide");
  setTimeout(() => {
    circleEmpty.classList.add("circleEmptyAnimation");
  }, 500);
  setTimeout(() => {
    circleEmpty.classList.remove("circleEmptyAnimation");
  }, 1000);
  setTimeout(() => {
    circleEmpty.classList.add("circleEmptyAnimation");
  }, 1500);
  setTimeout(() => {
    circleEmpty.classList.remove("circleEmptyAnimation");
  }, 2000);
  setTimeout(() => {
    circleEmpty.classList.add("circleEmptyAnimation");
  }, 2500);
  setTimeout(() => {
    circleEmpty.classList.remove("circleEmptyAnimation");
    circleEmpty.classList.add("hide");
    switch (computer) {
      case 1:
        console.log("papel");
        paperComputer.classList.remove("hide");
        itemComputer = "paper";
        break;
      case 2:
        scissorComputer.classList.remove("hide");
        itemComputer = "scissors";
        break;
      case 3:
        rockComputer.classList.remove("hide");
        itemComputer = "rock";
        break;
      default:
    }
  }, 3000);
  setTimeout(() => {
    if (itemComputer == itemUser) {
      console.log("empate");
      result = "draw";
    }
    if (itemUser == "paper") {
      if (itemComputer == "scissors") {
        console.log("perder");
        result = "lost";
      }
      if (itemComputer == "rock") {
        console.log("ganaste");
        result = "win";
      }
    }

    if (itemUser == "scissors") {
      if (itemComputer == "rock") {
        console.log("perder");
        result = "lost";
      }
      if (itemComputer == "paper") {
        console.log("ganaste");
        result = "win";
      }
    }

    if (itemUser == "rock") {
      if (itemComputer == "paper") {
        console.log("perder");
        result = "lost";
      }
      if (itemComputer == "scissors") {
        console.log("ganaste");
        result = "win";
      }
    }
  }, 3500);

  setTimeout(() => {
    resultContainer.classList.remove("visibility");
    switch (result) {
      case "draw":
        draw.classList.remove("hide");
        break;
      case "lost":
        if (score != 0) {
          score--;
          scoreContainer.innerHTML = score;
          localStorage.setItem("score", score);
        }
        lost.classList.remove("hide");
        break;
      case "win":
        score++;
        scoreContainer.innerHTML = score;
        localStorage.setItem("score", score);
        win.classList.remove("hide");
        break;
    }
  }, 3501);

  setTimeout(() => {
    switch (result) {
      case "draw":
        draw.classList.remove("anima");
        break;
      case "lost":
        lost.classList.remove("anima");
        break;
      case "win":
        win.classList.remove("anima");
        break;
    }
  }, 3600);
  setTimeout(() => {
    refresh.classList.remove("visibility");
  }, 4000);
}

function reload() {
  location.reload();
}
