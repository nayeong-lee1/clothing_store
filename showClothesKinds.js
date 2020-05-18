"use strict";

const homeBtn = document.getElementById("homeBtn");
const tshirtBtn = document.querySelector("#tshirtsBtn");
const pantsBtn = document.querySelector("#pantsBtn");
const skirtBtn = document.querySelector("#skirtBtn");
// const clothesOutcomeList = document.querySelector("#clothesOutcomeList");
const pinkClothes = document.querySelectorAll(".pink");

//add class "hidden" to hide unwanted items
function showSkirts() {
  for (let i = 0; i < pinkClothes.length; i++) {
    if (pinkClothes[i].classList.contains("hidden")) {
      pinkClothes[i].classList.remove("hidden");
    }
    if (pinkClothes[i].classList.contains("skirt") !== true) {
      pinkClothes[i].classList.toggle("hidden");
    }
  }
}

function showPants() {
  for (let i = 0; i < pinkClothes.length; i++) {
    if (pinkClothes[i].classList.contains("hidden")) {
      pinkClothes[i].classList.remove("hidden");
    }
    if (pinkClothes[i].classList.contains("pants") !== true) {
      pinkClothes[i].classList.toggle("hidden");
    }
  }
}

function showTshirt() {
  for (let i = 0; i < pinkClothes.length; i++) {
    if (pinkClothes[i].classList.contains("hidden")) {
      pinkClothes[i].classList.remove("hidden");
    }
    if (pinkClothes[i].classList.contains("tshirt") !== true) {
      pinkClothes[i].classList.toggle("hidden");
    }
  }
}

function reset() {
  for (let i = 0; i < pinkClothes.length; i++) {
    if (pinkClothes[i].classList.contains("hidden")) {
      pinkClothes[i].classList.remove("hidden");
    }
  }
}

homeBtn.addEventListener("click", reset);
skirtBtn.addEventListener("click", showSkirts);
pantsBtn.addEventListener("click", showPants);
tshirtBtn.addEventListener("click", showTshirt);
