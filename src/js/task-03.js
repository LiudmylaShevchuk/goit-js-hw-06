const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector(".gallery");
// galleryList.classList.add('galery_item');
const galleryItems = images

  .map((image) => 
 
'<li class="galery_item"><img src="${url}" alt="${alt}" width="320"></li>')

  .join("") 
 
// const listItems = images.map(markup).join("");

// const listItem = document.createElement('img');
//   listItem.src = url;
//   listItem.alt = alt;
//   listItem.width = '320';
  
  // return listItem;
  // '<li class="galery_item"><img src="${url}" alt="${alt}" width="320"></li>'
// };
    
// const items = markup(images);

// for (let item of items) {
//   console.log(item);
  galleryList.insertAdjacentHTML("beforeend", galleryItems);
// }