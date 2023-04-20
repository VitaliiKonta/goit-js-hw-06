const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("ul#ingredients");
const liIngredientArray = [];

ingredients.forEach((ingredient) => {
  const liAdding = document.createElement("li");
  liAdding.textContent = ingredient;
  liAdding.classList.add("item");
  liIngredientArray.push(liAdding);
});

ulIngredients.append(...liIngredientArray);
console.log(ulIngredients);
