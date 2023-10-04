export const BurgerMenu = () => {
  let btnBurger = document.querySelector("#btnBurger");
  let boxCategories = document.querySelector(".box-categories");
  btnBurger.addEventListener("click", () => {
    boxCategories.classList.toggle("open");
    btnBurger.classList.toggle("open");
  });
};
