const registrado = () => {
  document.querySelector(".oculto-register").classList.add("open");
  document.querySelector(".container-register").classList.add("open");
  console.log("first");
  setTimeout(() => {
    window.location.href = "../";
  }, 1000);
};
document.querySelector(".btn-register").addEventListener("click", registrado);
document.querySelector("#facebookLogin").addEventListener("click", registrado);
document.querySelector("#googleLogin").addEventListener("click", registrado);
document.querySelector("#loginBtn").addEventListener("click", registrado);
