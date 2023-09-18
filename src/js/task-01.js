const categories = document.querySelector("#categories");
const numberOfCategories = `Number of Categories: ${categories.children.length}`;
console.log(numberOfCategories);


const categoryTitle = document.querySelector("#categories .item h2")
console.log(`Category: ${categoryTitle.textContent}`)

const numberOfElements = document.querySelector("#categories .item ul")
console.log(`Elements: ${numberOfElements.children.length}`);

const categoryTitle2 = document.querySelector("#categories .item:nth-child(2) h2")
console.log(`Category: ${categoryTitle2.textContent}`)

const numberOfElements2 = document.querySelector("#categories .item:nth-child(2) ul")
console.log(`Elements: ${numberOfElements2.children.length}`);

const categoryTitle3 = document.querySelector("#categories .item:nth-child(3) h2")
console.log(`Category: ${categoryTitle3.textContent}`)

const numberOfElements3 = document.querySelector("#categories .item:nth-child(3) ul")
console.log(`Elements: ${numberOfElements3.children.length}`);