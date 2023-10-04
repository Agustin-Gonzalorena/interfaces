export const CartMenu = () => {
  let btnCart = document.querySelector(".cart");
  let boxCart = document.querySelector(".box-cart");

  btnCart.addEventListener("click", () => {
    if (window.innerWidth < 660) {
      /* location.href = "/cart.html"; */
      console.log("me fui al carrito");
    } else {
      if (document.querySelector("btn-user").className == "btn-user open")
        console.log("h");
      boxCart.classList.toggle("open");
    }
  });
};
