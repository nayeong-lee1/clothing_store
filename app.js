const shirtsBtn = document.querySelector("#shirtsBtn");
const pantsBtn = document.querySelector("#pantsBtn");
const skirtsBtn = document.querySelector("#skirtBtn");
const clothesOutcomeList = document.querySelector("#clothesOutcomeList");

//creaing class for clothes
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

const clothesArr = [clothes1, clothes2, clothes3];

function addClothes(sex, size) {
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
