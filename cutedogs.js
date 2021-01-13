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

    // now we declare a variable to be able to select an option with the DOM
    let breedOptions = "<option></option>";

    // making the code pick out the .message and making it an object from the API response
    let breedList = Object.keys(listJson.message);

    for (let i = 0; i < breedList.length; i++) {
        breedOptions += `<option value = ${breedList[i]}>${breedList[i]}</option>`;
    }

    // then we insert the options into the html
    pickBreed.innerHTML = breedOptions;

    // now we need to get the images when we select the options and also get images when we make a change to our selection in the options

    // to get our first image, we first fetch the image from the API

    const randomResponse = await fetch ("https://dog.ceo/api/breeds/image/random");

    // convert to json display
    const randomResponseJson = await randomResponse.json();

    // now to put the picture response into the img tag in the html

    main.src = randomResponseJson.message;
    
    // now we have images of dogs present, but we need to fix the situation such that when the user selects another breed of dogs, it will give them that specific breed they want to see and to do that we have to listen for events

    // add an event listener to listen for when the user selects another breed













}

init();
