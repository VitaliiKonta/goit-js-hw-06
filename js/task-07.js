const scrollerEl = document.querySelector("#font-size-control");
const mainTextEl = document.querySelector("#text");

scrollerEl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  mainTextEl.style.fontSize = `${event.currentTarget.value}px`;
}
