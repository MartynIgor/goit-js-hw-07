function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  let boxesMarkup = '';

  for (let i = 0; i < amount; i++) {
  const size = 30 + i * 10; 
  const color = getRandomHexColor(); 
  boxesMarkup += `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }

  boxesContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}
    
document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input[type="number"]');
  const amountIn = parseInt(input.value, 10);

  if (amountIn >= 1 && amountIn <= 100) {
    createBoxes(amountIn);
  }
    input.value = '';
  });

 document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);