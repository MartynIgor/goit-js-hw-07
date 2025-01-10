function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBody = document.querySelector('body');
const changeBtn = document.querySelector('.change-color');
const spanClr = document.querySelector('.color');

changeBtn.addEventListener('click', () => {
  colorBody.style.backgroundColor = getRandomHexColor();
  spanClr.textContent = colorBody.style.backgroundColor;
});