"use strict";

// const shirtsBtn = document.querySelector("#shirtsBtn");
// const pantsBtn = document.querySelector("#pantsBtn");
// const skirtsBtn = document.querySelector("#skirtBtn");
const clothesOutcomeList = document.querySelector("#clothesOutcomeList");

//creating a class for clothes
class ClothesItem {
  constructor(clothes, sex, color, size) {
    this.clothes = clothes;
    this.sex = sex;
    this.color = color;
    this.size = size;
  }
}

const clothes1 = new ClothesItem("skirt", "female", "pink", "small");
const clothes2 = new ClothesItem("pants", "female", "pink", "small");
const clothes3 = new ClothesItem("tshirts", "female", "pink", "small");
const clothes4 = new ClothesItem("skirt", "female", "blue", "large");
const clothes5 = new ClothesItem("pants", "female", "blue", "large");
const clothes6 = new ClothesItem("tshirts", "female", "blue", "large");
const clothes7 = new ClothesItem("skirt", "female", "yellow", "small");
const clothes8 = new ClothesItem("pants", "female", "yellow", "small");
const clothes9 = new ClothesItem("tshirts", "female", "yellow", "small");

const clothesArr = [
  clothes1,
  clothes2,
  clothes3,
  clothes4,
  clothes5,
  clothes6,
  clothes7,
  clothes8,
  clothes9,
];

function addClothes(clothes, sex, color, size) {
  const newList = document.createElement("li");
  newList.classList.add("clothes_outcome");
  var newListImg = document.createElement("img");
  newListImg.classList.add("pink_s");
  newListImg.src = decideImgSource(clothesArr);
  const clothesDetail = document.createTextNode(`${sex}, ${size} size`);
  newList.appendChild(newListImg);
  newList.appendChild(clothesDetail);
  clothesOutcomeList.appendChild(newList);
}

// <li class="clothes_outcome ${color} ${kind} ${sex} ${size}">
// <img src="style/imgs/${color}_${first letter of kinds}.png" alt="" /> ${sex}, ${size} size
// </li>

function addClothesWithArray(array) {
  array.forEach((element) => addClothes(element.sex, element.size));
}

function decideImgSource(array) {
  array.forEach((element) => {
    switch (element.clothes) {
      case "skirt":
        return `style/imgs/pink_s.png`;
        break;
      case "pants":
        return `style/imgs/pink_p.png`;
        break;
      case "tshirts":
        return `style/imgs/pink_t.png`;
        break;
      default:
        console.log(`what's your information?`);
    }
  });
}

addClothesWithArray(clothesArr);
