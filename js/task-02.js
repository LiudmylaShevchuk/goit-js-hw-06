const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');

const items = new DocumentFragment();



for (const value of ingredients) { 
  const itemOfIngredients = document.createElement("li");
  itemOfIngredients.classList.add('item');
  itemOfIngredients.textContent = value;
  items.append(itemOfIngredients);

}


document.querySelector('#ingredients').append(items);

