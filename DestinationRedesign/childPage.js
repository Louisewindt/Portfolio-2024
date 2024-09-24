function getJSON() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
      addData(data); // Pass the received JSON data to the addData function
      attachButtonListeners(); // Attach event listeners after adding the data
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to add data to the DOM
function addData(categoryCards) {
  console.log("Category Cards", categoryCards); // Select the container element to add category cards
  const container = document.querySelector('.categoryCards');
  categoryCards.forEach(categoryCard => {
    const card = document.createElement('section'); // Create a new section element for each category card
    card.className = 'categoryCard'; // Set the class name for the card
    card.innerHTML = `
      <button class="categorySave addToWishList">
          <svg class="categorySave__icon" xmlns="http://www.w3.org/2000/svg" width="205" height="211" viewBox="0 0 205 211" fill="none">
              <path d="M76.9127 10.98C78.2083 4.47714 86.3981 2.28267 90.7716 7.26654L125.323 46.6408C128.797 50.599 133.996 52.5946 139.225 51.9772L191.249 45.8361C197.834 45.0588 202.452 52.1697 199.063 57.8692L172.293 102.897C169.602 107.424 169.311 112.985 171.514 117.768L193.431 165.347C196.205 171.37 190.869 177.959 184.401 176.498L133.305 164.952C128.168 163.792 122.789 165.233 118.921 168.806L80.4427 204.353C75.5723 208.853 67.6567 205.814 67.0479 199.212L62.2385 147.048C61.755 141.804 58.7222 137.134 54.1283 134.559L8.43073 108.949C2.64651 105.707 3.09024 97.2402 9.18165 94.6209L57.3059 73.9275C62.1437 71.8472 65.6481 67.5196 66.6771 62.3551L76.9127 10.98Z" fill="white" stroke="#FFCA42" stroke-width="8"/>
          </svg>
      </button>
      <img class="categoryCard__image" src="${categoryCard.image}" alt="">
      <section class="categoryCardText">
          <h3 class="categoryCardText__title">${categoryCard.title}</h3>
          <p class="categoryCardText__paragraph">${categoryCard.description}</p>
          <a class="categoryCardLink" href="#">Læs mere</a>
      </section>
    `;
    container.appendChild(card); // Append the created card to the container
  });
}

// Function to attach event listeners to the buttons
function attachButtonListeners() {
  const buttons = document.querySelectorAll(".categorySave"); // Select all buttons with the class 'categorySave'
  buttons.forEach(button => {
    button.addEventListener('click', event => { // Add a click event listener to each button
      const starButton = event.currentTarget; // Get the clicked button element
      console.log('Star Button:', starButton); // Log the clicked button to the console

      const categoryCard = starButton.parentNode; // Get the parent element of the clicked button
      console.log('Category Card:', categoryCard); // Log the corresponding category card to the console

      starButton.classList.toggle('clicked'); // Toggle the 'clicked' class on the clicked button
      categoryCard.classList.toggle('clicked'); // Toggle the 'clicked' class on the corresponding category card

      addToWishList(categoryCard); // Add the category card to the wishlist
    });
  });
}

// Function to add category card to wish list
function addToWishList(categoryCard) {
  const wishListItem = categoryCard.cloneNode(true); // Clone the category card
  const wishListAside = document.querySelector(".wishList__card"); // Select the wishlist container
  wishListItem.classList.add("wishList__item"); // Add a class to the cloned item
  wishListAside.appendChild(wishListItem); // Append the cloned item to the wishlist container

  const emptyMessage = document.querySelector('.wishlistText--empty'); // Select the empty wishlist message
  if (wishListAside.children.length > 0) { // Check if there are items in the wishlist
    emptyMessage.style.display = 'none'; // Hide the empty message if there are items
  } else {
    emptyMessage.style.display = 'block'; // Display the empty message if there are no items
  }
}


getJSON();

// Wishlist open/close
const wishListIcon = document.querySelector(".wishListIcons img"); // Select the wishlist icon
const wishList = document.querySelector(".wishList"); // Select the wishlist container

wishListIcon.addEventListener("click", function () { // Add a click event listener to the wishlist icon
  wishList.classList.toggle("open"); // Toggle the 'open' class on the wishlist container
  if (wishList.classList.contains("open")) { // Check if the wishlist is open
    wishListIcon.src = "Childpageimages/crossIcon.png"; // Change the icon source to indicate it's open
  } else {
    wishListIcon.src = "Childpageimages/WishlistIcon.svg"; // Change the icon source to indicate it's closed
  }
});
