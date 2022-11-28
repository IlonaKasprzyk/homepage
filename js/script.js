{
  const welcome = () => {
    console.log("Hello world!");
  }


  const toggleFont = () => {
    const body = document.querySelector(".js-body");
    body.classList.toggle("body--newFont");
  };


  const hidePhoto = () => {
    const photo = document.querySelector(".js-photo");
    const buttonText = document.querySelector(".js-buttonText");
    photo.classList.toggle("header__photo--hidden");
    buttonText.innerText = photo.classList.contains("header__photo--hidden") ? "Pokaż" : "Usuń"
  }

  const init = () => {
    const buttonFont = document.querySelector(".js-buttonFont");
    buttonFont.addEventListener("click", toggleFont);

    let buttonPhoto = document.querySelector(".js-buttonPhoto");
    buttonPhoto.addEventListener("click", hidePhoto);

    
    welcome();
  }

  init();

}


