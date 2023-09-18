const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients");
const items = document.createElement("li");
items.textContent = ingredients[0];
items.classList.add("item");
const items2 = document.createElement("li");
items2.textContent = ingredients[1];
items2.classList.add("item");
const items3 = document.createElement("li");
items3.textContent = ingredients[2];
items3.classList.add("item");
const items4 = document.createElement("li");
items4.textContent = ingredients[3];
items4.classList.add("item");
const items5 = document.createElement("li");
items5.textContent = ingredients[4];
items5.classList.add("item");
const items6 = document.createElement("li");
items6.textContent = ingredients[5];
items6.classList.add("item");

console.log(items, items2, items3, items4, items5,items6)
ingredientsUl.append(items, items2, items3, items4, items5,items6)