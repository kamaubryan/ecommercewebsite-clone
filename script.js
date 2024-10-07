async function ecommerce() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=3");

    if (!response.ok) {
      Error(`${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error fetching data:", Error);
  }
}

function displayecommerce({ description, title, price, image }) {
  return `<div class="card-body">
    <img src="${image}">
    <div class="card-text">
    <h1>${title}</h1>
    <p>${description}</p>
    <p>${price}</p>
    </div>
    </div>`;
}

let cardplay = document.getElementById("cards");

ecommerce().then((data) => {
  if (Array.isArray(data)) {
    data.forEach((item) => {
      cardplay.innerHTML += displayecommerce(item);
    });
  }
});
