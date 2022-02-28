const createElement = (tagName, value, classes,) => {
    const element = document.createElement(tagName);
    if (value) {
      element.innerHTML = value;
    }
    if (classes) {
      element.classList = classes;
    }
    return element;
  };

const populate = (arr) => {
const dropdown = document.getElementById("cat-select")
for(let cat of arr){
    dropdown.append(createElement("option", cat, "cat-opt"));
}
}

tags = [];

async function GetTags() {
    let response = await fetch('https://cataas.com/api/tags');
    let returnedTags = await response.json();
    tags.push(...returnedTags.slice(4, 9));
    tags.push(...returnedTags.slice(14, 19));
    populate(tags)
}

window.addEventListener("DOMContentLoaded", GetTags);

async function getCatByTag() {
    let response = await fetch('https://cataas.com/cat?json=true');
    const cat = await response.json();
    const container = document.querySelector("div");
    const catImg = document.createElement("img")
    catImg.src = `https://cataas.com${cat.url}`;
    container.append(catImg);
    console.log(cat.tags)
}

const select = document.getElementById("cat-select");

// select.addEventListener("change", (event) => {
//     console.log(event.target.value)
// });