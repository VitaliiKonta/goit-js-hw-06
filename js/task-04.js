let elValue = Number(document.querySelector("#value").textContent);
let counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrClick = (event) => {
  elValue += 1;
  counterValue.innerText = elValue;
};

const decrClick = (event) => {
  elValue -= 1;
  counterValue.innerText = elValue;
};

incrementBtn.addEventListener("click", incrClick);
decrementBtn.addEventListener("click", decrClick);
