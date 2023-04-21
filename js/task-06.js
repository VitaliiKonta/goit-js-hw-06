// const input = document.querySelector("input");
const inputFrame = document.querySelector("#validation-input");
const atributor = inputFrame.getAttribute("data-length");

inputFrame.addEventListener("blur", (event) => {
  if (event.target.value.length == atributor) {
    inputFrame.classList.add("valid");
    if (inputFrame.classList.contains("invalid")) {
      inputFrame.classList.remove("invalid");
    }
  } else {
    if (inputFrame.classList.contains("valid")) {
      inputFrame.classList.remove("valid");
    }
    inputFrame.classList.add("invalid");
  }
});
// console.log(atributor);

// function inputLengthFoo(event) {
//   event.currentTarget.value.length;
// }
// console.log(inputFrame.addEventListener("input", inputLengthFoo));

// inputFrame.addEventListener("input", inputLengthFoo);

// inputFrame.addEventListener("blur", onInputBlur);

// function onInputBlur() {}

// function isPassCorrect() {
//   if (valueControl == atributor) {
//     inputFrame.classList.add("valid");
//     inputFrame.classList.remove("invalid");
//   }
//   inputFrame.classList.add("invalid");
//   inputFrame.classList.remove("valid");
// }
