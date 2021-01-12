// the below code is to grab all our ids so we can run the DOM

const main = document.querySelector("#main");
const loader = document.querySelector("#loader");
const pickBreed = document.querySelector("#breed");

// now we shall write the function to interact with the dog API
async function init() {
// first we get the list of dogs from the API
const list = await fetch("https://dog.ceo/api/breeds/list/all");
// then we convert it to JSON
const listJson = await list.json();




}

// init();
