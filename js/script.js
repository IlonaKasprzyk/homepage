{
  const welcome = () => {
    console.log("Hello world!");
  }

  welcome();

  const toggleFont = () => {
    const body = document.querySelector(".js-body");
    body.classList.toggle("body--newFont");
  };

  const initFont = () => {
    const buttonFont = document.querySelector(".js-buttonFont");
    buttonFont.addEventListener("click", toggleFont);
  }

  initFont();

  const hidePhoto = () => {
    const photo = document.querySelector(".js-photo");
    const buttonText = document.querySelector(".js-buttonText");
    photo.classList.toggle("header__photo--hidden");
    buttonText.innerText = photo.classList.contains("header__photo--hidden") ? "Pokaż" : "Usuń"
  }

  const initPhoto = () => {
    let buttonPhoto = document.querySelector(".js-buttonPhoto");
    buttonPhoto.addEventListener("click", hidePhoto);
  }

  initPhoto();

}


