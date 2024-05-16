import { buttonNamesArray, mainContainer } from ".";

import ChefIcon from './pixel_character_chef.png';
import KingIcon from './pixel_character_king.png';
import KnightIcon from './pixel_character_knight.png';
import MedicIcon from './pixel_character_medic.png';
import ThiefIcon from './pixel_character_thief.png';
import WizardIcon from './pixel_character_wizard.png';

const setTitleAbout = () => {
    const titleContainer = document.createElement("div");
    const titleText = document.createElement('h1');
    const htmlString = buttonNamesArray[2];

    titleContainer.classList.add("section-content");
    titleContainer.setAttribute("id", "heading");
    titleText.innerHTML = htmlString;

    titleContainer.appendChild(titleText);
    mainContainer.appendChild(titleContainer);
}

const setAboutPanel = () => {
    const iconArray = [];
    const textArray = [
        "CEO, KING, DAD, i own this place",
        "graceless tarnished",
        "i make sure ur food isn't poisoned",
        "sometimes i rob u sometimes ur not worth robbing",
        "don't know who this is, but he's always here"
    ]

    const king = new Image();
    king.src = KingIcon;
    iconArray.push(king);

    const knight = new Image();
    knight.src = KnightIcon;
    iconArray.push(knight);

    const medic = new Image();
    medic.src = MedicIcon;
    iconArray.push(medic);

    const theif = new Image();
    theif.src = ThiefIcon;
    iconArray.push(theif);

    const wizard = new Image();
    wizard.src = WizardIcon;
    iconArray.push(wizard);

    const heading = document.createElement('h2');
    heading.classList.add('section-content');
    heading.classList.add('section-text');
    heading.classList.add('heading');
    heading.innerHTML = "meet the crew";
    mainContainer.appendChild(heading);

    for (let i = 0; i < iconArray.length; i++) {
        const menuItem = document.createElement("div");
        const menuText = document.createElement("p");

        menuItem.classList.add('section-content');
        menuItem.classList.add('item');
        menuText.classList.add('item-text');

        menuItem.appendChild(iconArray[i]);
        menuItem.appendChild(menuText);
        menuText.innerHTML = textArray[i];
        mainContainer.appendChild(menuItem);
    }
}

export {setTitleAbout, setAboutPanel}