import * as css from "./styles.css";

import { setTitleMenu, setMenuItems } from "./menu";
import { setTitleAbout, setAboutPanel } from "./about";

export const mainContainer = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");
export const buttonNamesArray = [];
let homeBtnCount = 1;
let menuBtnCount = 0;
let aboutBtnCount = 0;

function getButtonNames() {
    const buttonIds = ["homeBtn", "menuBtn", "aboutBtn"];

    buttonIds.forEach(function(buttonId) {
        let button = document.getElementById(buttonId);
        buttonNamesArray.push(button.textContent);
    });
}

const setTitleHome = () => {
    const titleContainer = document.createElement("div");
    const titleText = document.createElement('h1');
    const htmlString = "Pixel Bites Diner";

    titleContainer.classList.add("section-content");
    titleContainer.setAttribute("id", "heading");
    titleText.innerHTML = htmlString;

    titleContainer.appendChild(titleText);
    mainContainer.appendChild(titleContainer);
}

const setDescription = () => {
    const descriptionContainer = document.createElement('div');
    const descriptionText = document.createElement('p');
    const htmlString = `Welcome to "Pixel Bites Diner" - where every byte is a delight! Step into our retro wonderland, where the graphics are blocky, but the flavor is high-def. Our restaurant is designed to take you back to the golden age of gaming, with a twist of culinary creativity.

    Upon entering, you'll be greeted by our pixelated staff, ready to guide you through a menu that's straight out of your favorite vintage video game. Our décor is a nostalgic tribute to the 8-bit era, with walls adorned with pixel art and tables designed like giant game controllers.`;

    descriptionContainer.classList.add("section-content");
    descriptionContainer.setAttribute("id", "description");
    descriptionText.classList.add("section-text");
    
    descriptionText.innerHTML = htmlString;
    descriptionContainer.appendChild(descriptionText);
    mainContainer.appendChild(descriptionContainer);
}

const setHours = () => {
    const hoursContainer = document.createElement('div');
    const hoursHeading = document.createElement('h2');
    const hoursText = "Hours";
    const hoursWeekendString = "8am - 10pm";
    const hoursWeekdayString = "8am - 12am";
    const weekdayArray = [
        "Sunday: ",
        "Monday: ",
        "Tuesday: ",
        "Wednesday: ",
        "Thursday: ",
        "Friday: ",
        "Saturday: "
    ]

    hoursHeading.classList.add('section-text');
    hoursContainer.classList.add('section-content');
    hoursContainer.setAttribute("id", "hours");

    hoursHeading.innerHTML = hoursText;

    hoursContainer.appendChild(hoursHeading);
    mainContainer.appendChild(hoursContainer);

    //create 7 'p'
    for (let i = 0; i < weekdayArray.length; i++){
        let hoursTextContainer = document.createElement('p');
        if (i === 0 || i === 6) {
            hoursTextContainer.textContent = `
            ${weekdayArray[i]}`+ `${hoursWeekendString}`;
            hoursTextContainer.classList.add("section-text");
            hoursContainer.appendChild(hoursTextContainer);
        } else {
            hoursTextContainer.textContent = `
            ${weekdayArray[i]}`+ `${hoursWeekdayString}`;
            hoursTextContainer.classList.add("section-text");
            hoursContainer.appendChild(hoursTextContainer);
        }
    }   
}

const setLocation = () => {
    const locationContainer = document.createElement('div');
    const locationHeading = document.createElement('h2');
    const locationTextContainer = document.createElement('p');
    const locationText = "4141 Magicians Way, Cobblestone Village, Panem";

    locationContainer.classList.add('section-content');
    locationContainer.setAttribute('id', 'location');
    locationHeading.classList.add('section-text');
    locationTextContainer.classList.add('section-text');

    locationHeading.textContent = "Location";
    locationTextContainer.textContent = locationText;

    mainContainer.appendChild(locationContainer);
    locationContainer.appendChild(locationHeading);
    locationContainer.appendChild(locationTextContainer);
}

const resetHTML = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const setHome = () => {
    if (homeBtnCount === 1) {
        setTitleHome();
        setDescription();
        setHours();
        setLocation();
        homeBtnCount = 0;
    }
}

const setMenu = () => {
    if (menuBtnCount === 1) {
        setTitleMenu();
        setMenuItems();
        menuBtnCount = 0;
    }
}

const setAbout = () => {
    if (aboutBtnCount === 1) {
        setTitleAbout();
        setAboutPanel();
        aboutBtnCount = 0;
    }
}

homeBtn.addEventListener('click', function () {
    resetHTML(mainContainer);
    homeBtnCount = 1;
    setHome();
});
menuBtn.addEventListener('click', function() {
    resetHTML(mainContainer);
    menuBtnCount = 1;
    setMenu();
})

aboutBtn.addEventListener('click', function () {
    resetHTML(mainContainer);
    aboutBtnCount = 1;
    setAbout();
})

setHome();
getButtonNames();
