const categoryItems = document.querySelector("#categories");
const liWithClasses = document.querySelectorAll(".item");
console.log("Number of categories:", liWithClasses.length);

for (let liWithClass of liWithClasses) { 
console.log("Category:", liWithClass.firstElementChild.textContent);
console.log("Elements:", liWithClass.lastElementChild.children.length);
}


