const colorSpan = document.querySelector(".color");
const body = document.body;
const changeColor = document.querySelector(".change-color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBackgroundColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

changeColor.addEventListener("click", changeBackgroundColor);


