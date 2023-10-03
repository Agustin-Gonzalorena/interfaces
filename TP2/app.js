"use strict";

import { burgerMenu } from "./burgerMenu.js";
import { categories } from "./utils/apiCategories.js";
burgerMenu();

document.querySelector("#boxCategories").innerHTML = categories
  .map((category) => {
    return `<li><span><img src=${category.img} alt="s"></span> ${category.name} </li>`;
  })
  .join("");
