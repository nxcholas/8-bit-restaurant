import { buttonNamesArray, mainContainer } from ".";

import HamburgerIcon from './pixel_food_hamburger.png';
import PizzaIcon from './pixel_food_pizza.png';
import CakeIcon from './pixel_food_cake.png';
import ChickenIcon from './pixel_food_chicken.png';
import DonutIcon from './pixel_food_donut.png';
import FriesIcon from './pixel_food_fries.png';
import HotdogIcon from './pixel_food_hotdog.png';
import IcecreamIcon from './pixel_food_icecream.png';

const setTitleMenu = () => {
    const titleContainer = document.createElement("div");
    const titleText = document.createElement('h1');
    const htmlString = buttonNamesArray[1];

    titleContainer.classList.add("section-content");
    titleContainer.setAttribute("id", "heading");
    titleText.innerHTML = htmlString;

    titleContainer.appendChild(titleText);
    mainContainer.appendChild(titleContainer);
}

const setMenuItems = () => {
    const iconArray = [];
    const textArray = [
        "hamburg hamburg HAMBURG!",
        "HOT DIGGITY DAWWWG",
        "AYYYY ITS DA ZAZA",
        "CRIPY CHIMKEN STIK",
        "p o t a t o s t i c k s",
        "i wonder where this goes",
        "GYAAAAAAAAAAAAAAAAAT",
        "i scream u scream we all scream 4 ice cream"
    ]

    const hamburger = new Image();
    hamburger.src = HamburgerIcon;
    iconArray.push(hamburger);

    const hotdog = new Image();
    hotdog.src = HotdogIcon;
    iconArray.push(hotdog);

    const pizza = new Image();
    pizza.src = PizzaIcon;
    iconArray.push(pizza);

    const chicken = new Image();
    chicken.src = ChickenIcon;
    iconArray.push(chicken);
    
    const fries = new Image();
    fries.src = FriesIcon;
    iconArray.push(fries);

    const donut = new Image();
    donut.src = DonutIcon;
    iconArray.push(donut);

    const cake = new Image();
    cake.src = CakeIcon;
    iconArray.push(cake);

    const icecream = new Image();
    icecream.src = IcecreamIcon;
    iconArray.push(icecream);

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

export {setTitleMenu, setMenuItems};