const categoriesEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesEl.length}`);

const headerAndChildren = document.querySelectorAll("#categories>li");
console.log(headerAndChildren);

headerAndChildrenCounter.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`);
});
