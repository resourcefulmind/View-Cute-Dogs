// the below code is to grab all our ids so we can run the DOM

const main = document.getElementById("main");
const loader = document.getElementById("loader");
const pickBreed = document.getElementById("breed");

// now we shall write the function to interact with the dog API
async function init() {
    // first we get the list of dogs from the API
    const list = await fetch("https://dog.ceo/api/breeds/list/all");
    // then we convert it to JSON
    const listJson = await list.json();

    // now we declare a variable to be able to select an option with the DOM
    let breedOptions = "<option></option>";


    let breedList = Object.keys(listJson.message);

    for (let i = 0; i < breedList.length; i++) {
        breedOptions += `<option value = ${breedList[i]}>${breedList[i]}</option>`;
    }

    pickBreed.innerHTML = breedOptions;








}

init();
