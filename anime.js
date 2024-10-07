// const anime = async () => {
//   try {
//     const uri = await fetch(" https://api.escuelajs.co/api/v1/categories");
//     console.log("hello", uri.json());
//   } catch (error) {
//     console.log("there's an error", error);
//   }
// };

// let displayAnime = async () => {
//   const animeShow = await anime();
//   let container = document.getElementById("anime-card");
//   container.innerHTML = await animeShow.map(items)=>{
//       return `
//     <div class= "card-body">
//     <img src="${items.image}">
//     <div class="card-text">
//     <h1> ${items.title}</h1>
//     </d>
//     </div>
//     `;
//   }

// };
// displayAnime();

// // let response = await (items) => {
// //     return `<div></div>`
// // };

const anime = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories?limit=3.");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Await the response.json() to parse the data
    const data = await response.json();
    console.log("Fetched Data:", data); // Optional: Log to see the fetched data
    return data;
  } catch (error) {
    console.log("There's an error:", error);
  }
};

let displayAnime = async () => {
  const animeShow = await anime(); // Fetch the data from API
  let container = document.getElementById("anime-card");

  if (animeShow && Array.isArray(animeShow)) {
    // Use map() to return HTML for each item
    container.innerHTML = animeShow
      .map((item) => {
        return `
          <div class="card-body">
            <img src="${item.image}" alt="${item.name}">
            <div class="card-text">
              <h1>${item.name}</h1>
            </div>
          </div>`;
      })
      .join(""); // Convert the array returned by map to a single string
  } else {
    container.innerHTML = "<p>No data found</p>";
  }
};

// Call displayAnime to show the data on the page
displayAnime();
