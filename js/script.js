console.log("Hello world!");

let photo = document.querySelector(".js-photo");
let buttonText = document.querySelector(".js-buttonText");
let buttonPhoto = document.querySelector(".js-buttonPhoto");

let body = document.querySelector(".js-body");
let buttonFont = document.querySelector(".js-buttonFont");

buttonPhoto.addEventListener("click", () => {
    photo.classList.toggle("header__photo--hidden");
buttonText.innerText = photo.classList.contains("header__photo--hidden") ? "Pokaż" : "Usuń"
});

buttonFont.addEventListener("click", () => {
  body.classList.toggle("body--newFont") ;
})



