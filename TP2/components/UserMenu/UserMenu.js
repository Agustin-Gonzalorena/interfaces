export const UserMenu = () => {
  let btnUser = document.querySelector(".btn-user");
  let boxUser = document.querySelector(".box-user");

  btnUser.addEventListener("click", () => {
    if (window.innerWidth < 660) {
      /* location.href = "/cart.html"; */
      console.log("me fui al carrito");
    } else {
      boxUser.classList.toggle("open");
    }
  });
};
