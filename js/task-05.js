// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне значення
// в span#name - output.Якщо інпут порожній, у спані повинен
// відображатися рядок "Anonymous".

const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", changeNameFoo);

function changeNameFoo(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  }
}
