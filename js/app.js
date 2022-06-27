/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Jeeyool Min
 *      Student ID: 159-676-196
 *      Date:       April 3rd, 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

let body = window.document.body;

/* Load Event handler */
window.onload = function () {
  // Create all the buttons for the store's Categories
  let menu = body.querySelector("nav#menu");
  categories.forEach(function (category) {
    let cbtn = document.createElement("button");
    cbtn.innerHTML = category.name;
    menu.appendChild(cbtn);
    cbtn.addEventListener("click", showProducts);
  });
  // By default, show products in the first category
  showProducts();
};

/* Show a product list based on a category Object */
function showProducts(e) {
  let categoryID;

  // If button clicked
  if (e && e.type === "click") {
    categoryID = updateCategoryAndFindID(e.target.innerHTML);
  } else {
    // Else if (Default)
    body.querySelector("h2#selected-category").innerHTML = categories[0].name;
    categoryID = categories[0].id;
  }

  // Filter products being sold
  let productsList = products.filter(
    (product) => product.categories.includes(categoryID) && !product.discontinued
  );

  const contentWrapper = body.querySelector("div#content");
  // Looping over the filtered list, add it to the table's body
  productsList.forEach((product) => contentWrapper.appendChild(createProductCard(product)));
}

/* Update category name and find the ID */
function updateCategoryAndFindID(menu) {
  let selectedCategory;
  // Update the text of the selected category title
  selectedCategory = body.querySelector("h2#selected-category");
  selectedCategory.innerHTML = menu;
  // Clear the current rows
  body.querySelector("div#content").innerHTML = "";
  // Find the categoryID (Use innerText not innerHTML to escape some letters like '&')
  return categories.find((category) => category.name === selectedCategory.innerText).id;
}

function createProductCard(product) {
  // Create a <div> to hold the card and add the .card class to the <div>
  const card = document.createElement("div");
  card.classList.add("product-card-wrapper");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.classList.add("product-card-image");
  productImage.src = "static/" + product.imageUrl;
  card.appendChild(productImage);

  // Create a product description wrapper and add a class for CSS
  const productDescWrapper = document.createElement("div");
  productDescWrapper.classList.add("product-card-desc");

  // Create and append a product title
  const productTitle = document.createElement("h3");
  productTitle.classList.add("product-title");
  productTitle.innerHTML = product.title;
  productDescWrapper.appendChild(productTitle);

  // Create and append a product price
  const productDesc = document.createElement("p");
  productDesc.classList.add("product-desc");
  productDesc.innerHTML = product.description;
  productDescWrapper.appendChild(productDesc);

  // Create and append a product detailed description
  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");
  productPrice.innerHTML = formatPrice(product.price);
  productDescWrapper.appendChild(productPrice);

  // Append the wrapper containing all contents
  card.appendChild(productDescWrapper);
  // Return the card’s <div> element to the caller
  return card;
}

// Format price as Canadian Currency
function formatPrice(price) {
  const formatterCA = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD"
  });
  return formatterCA.format(price / 100) + " CAD";
}
